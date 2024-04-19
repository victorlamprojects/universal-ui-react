import { FC, useState, HTMLAttributes } from "react";
import { getDefaultThemeIfNotFound } from '../../theme/theme';
import styled from "styled-components";

const CollapsibleContainer = styled.div(({theme}) => {
	theme = getDefaultThemeIfNotFound(theme);
	return {
		maxWidth: "100%"
	};
});

const Title = styled.div<HTMLAttributes<HTMLDivElement> & {withToggle?: boolean}>(({theme, withToggle=false}) => {
	theme = getDefaultThemeIfNotFound(theme);
	let toggleEffect = withToggle && {
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

const Content = styled.div(({theme}) => {
	theme = getDefaultThemeIfNotFound(theme);
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
});

interface CollapsibleProps extends HTMLAttributes<HTMLDivElement> {
	title?: string;
	collapsed?: boolean;
	toggle?: boolean;
};

const Collapsible:FC<CollapsibleProps> = ({
	title,
	children,
	collapsed=true,
	toggle=false,
	...args
}) => {
	const [show, setShow] = useState<boolean>(!collapsed);
	return <CollapsibleContainer {...args}>
		<Title withToggle={toggle} className={show ? "show" : ""} onClick={() => setShow(prev=>!prev)}>{title}</Title>
		<Content className={show ? "show" : ""}>{children}</Content>
	</CollapsibleContainer>
}

export default Collapsible;
