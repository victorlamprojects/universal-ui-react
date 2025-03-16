import { FC, InputHTMLAttributes, FormEvent } from "react";
import styled from "styled-components";

import { Cell } from "../Grid/Grid";
import { getDefaultThemeIfNotFound } from '../../theme/theme';
import { FontSize, Padding } from '../../config/constants';

type SearchBoxProps = Omit<InputHTMLAttributes<HTMLInputElement>, "onChange"> & {
	s?: number;
	m?: number;
	l?: number;
	value?: string;
	onChange?: (_d: string) => void;
};
const SearchBoxContainer = styled(Cell)(({theme})=>{
	theme = getDefaultThemeIfNotFound(theme);
	return {
		margin: "0",
		"&>input:not([type]),&>input[type=text],&>input[type=password],&>input[type=email]": {
			fontSize: FontSize.Text,
			padding: Padding.Input,
			width: "275px",
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
const SearchBox: FC<SearchBoxProps> = ({s, m, l, value, onChange, ...rest}) => {
	return (<SearchBoxContainer s={s} m={m} l={l} >
		<input
			name={"search"}
			value={value}
			onChange={(e: FormEvent<HTMLInputElement>) => {
				if(onChange){
					onChange(e.currentTarget.value as string);
				}
			}}
			{...rest} />
	</SearchBoxContainer>);
};
export default SearchBox;
