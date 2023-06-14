import { HTMLAttributes, CSSProperties } from "react";
import styled, { CSSObject } from "styled-components";
import { BreakPoints as mq, Padding, FontSize, HoverEffect, ActiveEffect } from "../../config/constants";
import { Light } from '../../theme/theme';
import { getHoverEffect, getActiveEffect } from '../../util/helper';

type HeaderProps = HTMLAttributes<HTMLDivElement> & {
	style?: CSSProperties;
	justifyContent?: string;
	alignItems?: string;
	hover: HoverEffect;
	active: ActiveEffect;
}

export const Header = styled.div<HeaderProps>(({ theme, style, justifyContent="flex-end", alignItems="center", hover=HoverEffect.None, active=ActiveEffect.None}) => {
	theme = Object.keys(theme).length === 0 ? Light : theme;

	let effects = {
		...getHoverEffect(hover, theme),
		...getActiveEffect(active, theme)
	};
	if(hover === HoverEffect.Solidify){
		effects["border"] = "none"
	}
	let s = {
		display: "flex",
		flexDirection: "row",
		width: "100%",
		backgroundColor: theme.header,
		justifyContent: justifyContent,
		alignItems: alignItems,
		".header-item": {
			...effects
		},
		...style
	};
	return s as CSSObject;
});

type HeaderItemProps = HTMLAttributes<HTMLDivElement> & {
	style?: CSSProperties;
}

export const HeaderItem = styled.a.attrs<HeaderItemProps>(({className: cs}) => ({ className: `${cs} header-item` }))(({ theme, style }) => {
	theme = Object.keys(theme).length === 0 ? Light : theme;
	let s = {
		minHeight: "16px",
		padding: Padding.Header,
		color: theme.button.text,
		backgroundColor: theme.primary,
		fontSize: FontSize.Header,
		userSelect: "none",
		...style
	};
	return s as CSSObject;
});
