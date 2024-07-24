import { FC, HTMLAttributes, ReactNode, Children, ReactElement } from "react";
import styled, { CSSObject }  from "styled-components";
import { Grid, Cell, CellProps } from "../Grid/Grid";
import { getDefaultThemeIfNotFound } from "../../theme/theme";
import {
	HashRouter,
	Routes,
	Route,
	Outlet,
	NavLink,
	LinkProps,
	useLocation,
	Navigate
} from "react-router-dom";
import { assert } from "../../util/assert";

// Types
export const enum MultiTabLayoutType {
	Default="default",
	Bar="bar"
};

// Main Container
const MultiTabContainer = styled.div(({theme}) => {
	theme = getDefaultThemeIfNotFound(theme);

	return {
		width: "100vw",
		height: "100vh",
		backgroundColor: theme.background,
		position: "relative",
		display: "flex",
		flexDirection: "column-reverse"
	};
});
const MultiTabGroup = styled(Grid)(({theme}) => {
	theme = getDefaultThemeIfNotFound(theme);
	return {
		minHeight: "36px",
		height: "3.5rem",
		width: "100%",
		fontSize: "1rem",
		margin: "0",
		padding: "0",
		backgroundColor: "inherit",
		color: theme.text
	};
});

// MultiTab
type MultiTabProps = CellProps & {
	component: ReactNode;
	path: string;
	children?: ReactNode;
	auth?: boolean;
};
export const MultiTab: FC<MultiTabProps> = ({ children, ...rest }) => (<Cell {...rest}>{children}</Cell>);
const MultiTabInternal = styled(NavLink)<LinkProps & {type?: MultiTabLayoutType}>(({theme, type}) => {
	theme = getDefaultThemeIfNotFound(theme);

	let effects = {};
	if(type === MultiTabLayoutType.Default) {
		effects = {
			"&.active": {
				backgroundColor: "transparent",
				"*:has(+&)": {
					borderTopRightRadius: "10px"
				},
				"& + *": {
					borderTopLeftRadius: "10px"
				},
			}
		}
	}
	else if(type === MultiTabLayoutType.Bar){
		effects = {
			"&.active": {
				boxShadow: `0 -1px 0 ${theme.primary}`
			}
		}
	}

	return {
		userSelect: "none",
		height: "100%",
		display: "flex",
		margin: "0",
		justifyContent: "center",
		alignItems: "center",
		flexGrow: 1,
		flexBasis: "auto",
		backgroundColor: theme.sidebar,
		"&:hover": {
			cursor: "pointer"
		},
		...effects
	} as CSSObject;
});


// Main Content
const MultiTabContent = styled.div(({theme}) => {
	theme = getDefaultThemeIfNotFound(theme);
	return {
		flex: 1,
		height: "calc(100% - 3.5rem)",
		maxHeight: "calc(100% - 36px)",
		overflowY: "auto"
	};
});

type MultiTabLayoutProps = Omit<HTMLAttributes<HTMLDivElement>, "children" | "type"> & {
	type?: MultiTabLayoutType;
	children?: ReactNode;
	authPath?: string;
	isAuth?: ()=>boolean;
	authComponent?: ReactNode;
}


const Auth: FC<any> = ({isAuth, authPath, comp}) => {
	const location = useLocation();
	return !isAuth() ? <Navigate to={authPath} state={{ from: location }} replace /> : comp;
}
export const MultiTabLayout: FC<MultiTabLayoutProps> = ({children, authPath, isAuth, authComponent, type=MultiTabLayoutType.Default, ...rest}) => {
	const childrenArr = Children.toArray(children);

	const { tabs, protectedRoutes, unprotectedRoutes, defaultRoute } = childrenArr && childrenArr.reduce((prev, child: ReactElement<MultiTabProps>, i: number) => {
		if(prev.defaultRoute == null && !!child.props.path){
			prev.defaultRoute = child.props.path;
		}
		if(!!child.props.children){
			prev.tabs.push(<MultiTabInternal type={type} key={`layout-route-tab-${i}`} to={child.props.path}>
				{
					child.props.children
				}
			</MultiTabInternal>);
		}
		if (child.props.auth){
			prev.protectedRoutes.push(<Route
				key={`layout-route-private-${i}`}
				path={child.props.path}
				element={<Auth authPath={authPath || ""} isAuth={isAuth || (()=>true)} comp={child.props.component} />}
			/>)
		}
		else {
			prev.unprotectedRoutes.push(<Route
				key={`layout-route-${i}`}
				path={child.props.path}
				element={child.props.component}
			/>);
		}
		return prev;
	}, { tabs: [], protectedRoutes: [], unprotectedRoutes:[], defaultRoute: null} as { tabs: ReactNode[], protectedRoutes: ReactNode[], unprotectedRoutes: ReactNode[], defaultRoute: string | null});

	if(protectedRoutes && protectedRoutes.length > 0){
		assert(authPath !== undefined, "authPath must be specified when using protected routes");
		assert(isAuth !== undefined, "isAuth method must be specified when using protected routes");
		assert(authComponent !== undefined, "authComponent must be specified when using protected routes");
	}

	const MainPage = () => {
		return (<>
			<MultiTabGroup justifyContent={"stretch"}>
				{ tabs }
			</MultiTabGroup>
			<MultiTabContent>
				<Outlet />
			</MultiTabContent>
		</>);
	}

	return (<HashRouter>
		<MultiTabContainer {...rest} >
			<Routes>
				{
					authPath && authComponent &&
					<Route
						path={authPath}
						element={authComponent}
					/>
				}
				<Route path="/" element={<MainPage />}>
					{ unprotectedRoutes }
					{ protectedRoutes }
					{ defaultRoute && <Route path="*" element={<Navigate to={defaultRoute} />} /> }
				</Route>
			</Routes>
		</MultiTabContainer>
	</HashRouter>);
};
