import { FC, InputHTMLAttributes } from "react";
import styled, { useTheme } from "styled-components";

import { Cell } from "../Grid/Grid";
import { getDefaultThemeIfNotFound } from '../../theme/theme';
import { FontSize, Padding } from '../../config/constants';

type TextInputProps = InputHTMLAttributes<HTMLInputElement> & {
	s?: number;
	m?: number;
	l?: number;
	name: string;
};
const InputContainer = styled(Cell)(({theme})=>{
	theme = getDefaultThemeIfNotFound(theme);
	return {
		margin: "0",
		"&>input:not([type]),&>input[type=text],&>input[type=password]": {
			fontSize: FontSize.Text,
			padding: Padding.Input,
			width: "100%",
			border: "none",
			outline: "none",
			"&:focus": {
				backgroundColor: theme.primary,
				color: theme.button.text
			},
			"&:disabled": {
				backgroundColor: "transparent",
				cursor: "text"
			}
		}
	}

});
const TextInput: FC<TextInputProps> = ({s, m, l, ...rest}) => {
	return (<InputContainer s={s} m={m} l={l} >
		<input {...rest} />
	</InputContainer>);
};
export default TextInput;
