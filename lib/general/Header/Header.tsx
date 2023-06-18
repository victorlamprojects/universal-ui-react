import { FC, HTMLAttributes, LinkHTMLAttributes, CSSProperties, useState } from "react";
import styled, { CSSObject, useTheme } from "styled-components";
import { BreakPoints as mq, Padding, FontSize, HoverEffect, ActiveEffect } from "../../config/constants";
import { Light } from '../../theme/theme';
import { getHoverEffect, getActiveEffect } from '../../util/helper';

const HamburgerMenu = styled.svg(() => {
	let theme = useTheme();
	theme = Object.keys(theme).length === 0 ? Light : theme;

	return {
		display: "block",
		width: FontSize.Header,
		height: FontSize.Header,
		backgroundColor: theme.header,
		".toggle-bars": {
			stroke: theme.text,
			strokeWidth: "3",
			transition: "stroke 400ms cubic-bezier(0.4, 0, 0.2, 1)"
		},
		".toggle-bar": {
			transition: "transform 400ms cubic-bezier(0.4, 0, 0.2, 1)"
		},
		".toggle-bar-1": {
			transformOrigin: "18px 8px"
		},
		".toggle-bar-2": {
			transformOrigin: "16px 18px"
		},
		"&.show": {
			".toggle-bar-1": {
				transform: "translateY(12px) rotate(45deg)"
			},
			".toggle-bar-2": {
				transform: "rotate(-45deg)"
			}
		},
		[mq.m]: {
			display: "none"
		}
	}
});

const HeaderItemContainer = styled.div<HTMLAttributes<HTMLDivElement> & {effects: CSSObject;}>(({effects}) => {
	return {
		display: "none",
		width: "100%",
		flexDirection: "row",
		flexWrap: "wrap",
		position: "relative",
		justifyContent: "flex-end",
		alignItems: "center",
		overflow: "hidden",
		"&.show": {
			display: "flex",
		},
		[mq.m]: {
			display: "flex"
		},
		".header-item": {
			...effects
		}
	} as CSSObject;
});
export const HeaderItem = styled.a.attrs<LinkHTMLAttributes<HTMLLinkElement>>(() => ({ className: "header-item" }))(({ theme, style }) => {
	theme = Object.keys(theme).length === 0 ? Light : theme;

	let s = {
		display: "block",
		minHeight: "16px",
		flexGrow: 1,
		width: "100%",
		textAlign: "center",
		padding: Padding.Header,
		color: theme.button.text,
		backgroundColor: theme.primary,
		fontSize: FontSize.Header,
		userSelect: "none",
		[mq.m]: {
			flexGrow: 0,
			width: "auto"
		},
		...style
	};
	return s as CSSObject;
});

type HeaderProps = HTMLAttributes<HTMLDivElement> & {
	style?: CSSProperties;
	hover: HoverEffect;
	active: ActiveEffect;
}

export const Header: FC<HeaderProps> = (({ style, children, hover=HoverEffect.None, active=ActiveEffect.None, ...args}) => {
	const [collapsed, setCollapsed] = useState(true);
	let theme = useTheme();
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
		width: "100%",
		position: "relative",
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "flex-end",
		alignItems: "center",
		backgroundColor: theme.header,
		...style
	} as CSSObject;
	return <div style={s} {...args}>
		<HamburgerMenu className={collapsed?"":"show"} onClick={()=>setCollapsed(prev=>!prev)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36">
			<g className="toggle-bars">
				<path className="toggle-bar toggle-bar-1" d="M 2,8 H 30" />
				<path className="toggle-bar toggle-bar-2" d="M 2,18 H 30" />
			</g>
		</HamburgerMenu>
		<HeaderItemContainer effects={effects} className={collapsed?"":"show"}>
			{children}
		</HeaderItemContainer>
	</div>
});

