import { ButtonHTMLAttributes } from "react";
import styled, { CSSProperties, CSSObject } from 'styled-components';
import { Padding, ButtonVariant, HoverEffect } from '../../config/constants';
import { getHoverEffect } from '../../util/helper';
import { ThemeType, getDefaultThemeIfNotFound } from '../../theme/theme';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	style?: CSSProperties;
	theme?: ThemeType;
	variant?: ButtonVariant;
	effect?: HoverEffect;
};

const Button = styled.button<ButtonProps>(({ style, theme, variant="info", effect="none"}) => {
	theme = getDefaultThemeIfNotFound(theme);

	let effects = getHoverEffect(effect as HoverEffect, theme, variant as ButtonVariant);
	const s = theme && {
		outline: "none",
		border: "none",
		borderRadius: "8px",
		padding: Padding.Button,
		margin: "8px 10px",
		backgroundColor: theme[variant],
		color: theme.button.text,
		userSelect: "none",
		"&:hover": {
			cursor: "pointer"
		},
		...effects,
		...style
	} || style;

	return s as CSSObject;
})

export default Button;
