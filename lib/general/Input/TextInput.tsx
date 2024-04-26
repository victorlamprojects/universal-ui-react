import { FC, InputHTMLAttributes, FormEvent } from "react";
import styled from "styled-components";

import { Cell } from "../Grid/Grid";
import { getDefaultThemeIfNotFound } from '../../theme/theme';
import { FontSize, Padding } from '../../config/constants';

type TextInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "onChange"> & {
	s?: number;
	m?: number;
	l?: number;
	name: string;
	value?: string | number | bigint | undefined | null | Date;
	onChange?: (d: string | number | bigint | undefined | null | Date) => void;
};
const InputContainer = styled(Cell)(({theme})=>{
	theme = getDefaultThemeIfNotFound(theme);
	return {
		margin: "0",
		width: "100%",
		"&>input:not([type]),&>input[type=text],&>input[type=password],&>input[type=email]": {
			fontSize: FontSize.Text,
			padding: Padding.Input,
			width: "100%",
			border: "none",
			outline: "none",
			color: theme.input.text || "inherit",
			backgroundColor: theme.input.background || "inherit",
			"&:focus": {
				color: theme.input.focusText || theme.button.text,
				backgroundColor: theme.input.focusBackground || theme.primary
			},
			"&:disabled": {
				color: theme.input.disabledText || "inherit",
				backgroundColor: theme.input.disabledBackground || "transparent",
				cursor: "text"
			}
		}
	}

});
const TextInput: FC<TextInputProps> = ({s, m, l, name, value, onChange, ...rest}) => {
	return (<InputContainer s={s} m={m} l={l} >
		<input
			name={name}
			value={value}
			onChange={(e: FormEvent<HTMLInputElement>) => {
				if(onChange){
					onChange(e.currentTarget.value as string);
				}
			}}
			{...rest} />
	</InputContainer>);
};
export default TextInput;
