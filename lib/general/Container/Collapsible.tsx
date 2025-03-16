import {
	FC,
	useState,
	HTMLAttributes,
	ReactElement,
	Children,
	isValidElement,
	cloneElement
} from "react";
import Searchable, { SearchableProps } from "./Searchable";
import { isString } from "../../util/helper";
import styled from "styled-components";

const CollapsibleContainer = styled.div(() => {
	return {
		width: "100%"
	};
});

const Title = styled.div<HTMLAttributes<HTMLDivElement> & {withToggle?: boolean}>(({withToggle=false}) => {
	const toggleEffect = withToggle && {
		"&:before": {
			content: "'▸  '"
		},
		"&.show": {
			"&:before": {
				content: "'▾  '"
			}
		}
	}
	return {
		width: "100%",
		fontSize: "1.25rem",
		filter: "alpha(opacity=75)",
		cursor: "pointer",
		padding: "0.5rem 0",
		fontWeight: "bold",
		userSelect: "none",
		"&:hover": {
			filter: "alpha(opacity=100)",
		},
		...toggleEffect
	};
});

const Content = styled.div<HTMLAttributes<HTMLDivElement>>((() => {
	return {
		width: "100%",
		height: 0,
		fontSize: "inherit",
		overflowY: "hidden",
		transition: "height 0.2s ease",
		"&.show": {
			height: "auto",
			overflow: "visible"
		}
	};
}));

interface CollapsibleProps extends HTMLAttributes<HTMLDivElement> {
	title?: string;
	collapsed?: boolean;
	toggle?: boolean;
	searchText?: string;
}

const Collapsible: FC<SearchableProps & CollapsibleProps> = ({
	title,
	children,
	collapsed=true,
	toggle=false,
	...args
}) => {
	const [show, setShow] = useState<boolean>(!collapsed);
	return <CollapsibleContainer {...args}>
		<Title withToggle={toggle} className={show ? "show" : ""} onClick={() => setShow(prev=>!prev)}>
			<Searchable text={title || ""} {...args} />
		</Title>
		<Content className={show ? "show" : ""}>{
			Children.map(children, (child: ReactElement<any> | string) => {
				if(isString(child)) {
					return <Searchable text={child as string} {...args}/>;
				}
				if(!isValidElement(child)){
					return child;
				}
				return cloneElement(child as ReactElement<any>, {
					...args
				});
			})
		}</Content>
	</CollapsibleContainer>
}

export default Collapsible;
