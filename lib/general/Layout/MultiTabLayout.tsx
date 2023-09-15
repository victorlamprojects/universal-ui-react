import { FC, HTMLAttributes, ReactNode, Children, cloneElement, ReactElement } from "react";
import styled, { CSSObject }  from "styled-components";
import { Grid, Cell, CellProps } from "../Grid/Grid";
import { getDefaultThemeIfNotFound } from '../../theme/theme';
import {
	BrowserRouter,
	Routes,
	Route,
	NavLink,
	LinkProps
} from "react-router-dom";

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

// MultiTab
type MultiTabProps = CellProps & {
	component: ReactNode | null;
	path: string;
	children: ReactNode | null;
	type?: MultiTabLayoutType;
};
export const MultiTab = styled(Cell)<MultiTabProps>;
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
		flex: 1
	};
});

type MultiTabLayoutProps = HTMLAttributes<HTMLDivElement> & {
	type?: MultiTabLayoutType;
}

export const MultiTabLayout: FC<MultiTabLayoutProps> = ({children, type=MultiTabLayoutType.Default, ...rest}) => {
	const childrenArr = Children.toArray(children);

	return (<BrowserRouter>
		<MultiTabContainer {...rest} >
			<MultiTabGroup justifyContent={"stretch"}>
				{
					childrenArr && childrenArr.map((child: ReactElement<MultiTabProps>, i: number) => {
						return (<MultiTabInternal type={type} key={`layout-route-tab-${i}`} to={child.props.path}>
							{
								child.props.children
							}
						</MultiTabInternal>);
					})
				}
			</MultiTabGroup>
			<MultiTabContent>
					<Routes>
					{
						childrenArr && childrenArr.map((child: ReactElement<MultiTabProps>, i: number) => {
							return (<Route
								key={`layout-route-${i}`}
								path={child.props.path}
								element={child.props.component}
							/>);
						})
					}
					</Routes>
			</MultiTabContent>
		</MultiTabContainer>
	</BrowserRouter>);
};
