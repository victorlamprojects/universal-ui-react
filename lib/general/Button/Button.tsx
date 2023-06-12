import { ButtonHTMLAttributes } from "react";
import styled, { CSSProperties } from 'styled-components';
import { Padding, ButtonVariant, ButtonEffect } from '../../constants';
import { ThemeType, Light } from '../../theme';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	style?: CSSProperties;
	theme?: ThemeType;
	variant?: ButtonVariant;
	effect?: ButtonEffect;
};

const Button = styled.button<ButtonProps>(({ style, theme, variant="info", effect="none"}) => {
	let effects = {};
	theme = Object.keys(theme).length === 0 ? Light : theme;

	if(effect === ButtonEffect.Enlarge){
		effects = {
			"&:hover": {
				cursor: "pointer",
				transform: "scale(1.1)"
			}
		};
	}
	else if(effect === ButtonEffect.Transparent){
		effects = {
			opacity: 0.75,
			"&:hover": {
				cursor: "pointer",
				opacity: 1
			}
		}
	}
	else if(effect === ButtonEffect.Solidify){
		effects = {
			transitionDuration: "0.3s",
			backgroundColor: "#fff",
			color: "#121212",
			border: `1px solid ${theme[variant]}`,
			"&:hover": {
				cursor: "pointer",
				backgroundColor: theme[variant],
				color: theme.button.text
			}
		}
	}

	const s = theme && {
		outline: "none",
		border: "none",
		borderRadius: "8px",
		padding: Padding.Button,
		margin: "8px 10px",
		backgroundColor: theme[variant],
		color: theme.button.text,
		"&:hover": {
			cursor: "pointer"
		},
		...effects,
		...style
	} || style;

	return s;
})

export default Button;
