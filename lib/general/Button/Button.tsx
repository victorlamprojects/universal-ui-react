import { ButtonHTMLAttributes } from "react";
import styled, { CSSProperties } from 'styled-components';
import { Themes, ButtonVariant, ButtonEffect } from '../../constants';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	style?: CSSProperties;
	theme?: string;
	variant?: ButtonVariant;
	effect?: ButtonEffect;
};

const Button = styled.button<ButtonProps>(({ style, theme="light", variant="info", effect="none"}) => {
	const Theme = Themes[theme];
	let effects = {};

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
			border: `1px solid ${Theme[variant]}`,
			"&:hover": {
				cursor: "pointer",
				backgroundColor: Theme[variant],
				color: Theme.button.text
			}
		}
	}

	const s = Theme && {
		outline: "none",
		border: "none",
		borderRadius: "8px",
		padding: "8px 12px",
		margin: "8px 10px",
		backgroundColor: Theme[variant],
		color: Theme.button.text,
		"&:hover": {
			cursor: "pointer"
		},
		...effects,
		...style
	} || style;

	return s;
})

export default Button;
