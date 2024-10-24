import { FC, InputHTMLAttributes, FormEvent } from "react";
import styled from "styled-components";

import { Cell } from "../Grid/Grid";
import { getDefaultThemeIfNotFound } from '../../theme/theme';
import { FontSize } from '../../config/constants';

export type Option = {
	label: string;
	value: string;
};
type SelectProps = Omit<InputHTMLAttributes<HTMLSelectElement>, "onChange"> & {
	s?: number;
	m?: number;
	l?: number;
	name: string;
	options?: Option[];
	selected?: string;
	onChange?: (selected: string) => void;
};
const SelectContainer = styled(Cell)(({theme})=>{
	theme = getDefaultThemeIfNotFound(theme);
	return {
		margin: "0",
		display: "grid"
	}
});
const Select = styled.div(({theme})=>{
	theme = getDefaultThemeIfNotFound(theme);
	return {
		width: "100%",
		position: "relative",
		borderRadius: "0.25rem",
		fontSize: FontSize.Text,
		cursor: "pointer",
		lineHeight: "1",
		color: theme.input.text || "inherit",
		backgroundColor: theme.input.background || "#fff",
		display: "grid",
		gridTemplateAreas: "'select'",
		alignItems: "center",
		"&, &:after": {
			gridArea: "select"
		},
		"&:after": {
			content: "''",
			width: "0.8em",
			height: "0.5em",
			backgroundColor: theme.input.text || "#000",
			marginRight: "0.25rem",
			clipPath: "polygon(0 0%, 100% 0%, 50% 100%)",
			justifySelf: "end",
		},
		"&:focus-within:after": {
			backgroundColor: theme.input.focusText || theme.button.text,
			clipPath: "polygon(100% 100%, 0 100%, 50% 0)"
		},
		"& > select": {
			appearance: "none",
			width: "100%",
			color: "inherit",
			backgroundColor: "inherit",
			fontSize: "inherit",
			fontFamily: "inherit",
			margin: "0",
			padding: "0.25rem 1.5rem 0.25rem 0.5rem",
			cursor: "inherit",
			lineHeight: "inherit",
			position: "relative",
			border: "none",
			borderRadius: "inherit",
			outline: "none",
			gridArea: "select",
			"&:focus": {
				borderRadius: "inherit",
				color: theme.input.focusText || theme.button.text,
				backgroundColor: theme.input.focusBackground  || theme.primary
			},
			"&:disabled": {
				borderRadius: "inherit",
				color: theme.input.disabledText || theme.button.text,
				backgroundColor: theme.input.disabledBackground  || theme.primary
			},
			"&::-ms-expand": {
				display: "none"
			}
		}
	}
});
const SelectComp: FC<SelectProps> = ({s, m, l, name, selected=undefined, options=[], onChange, ...rest}) => {
	return (<SelectContainer s={s} m={m} l={l} >
		<Select>
			<select
				name={name}
				value={selected}
				onClick={(e: FormEvent<HTMLSelectElement>) => {
					e?.currentTarget?.blur();
				}}
				onChange={(e: FormEvent<HTMLSelectElement>) => {
					if(onChange){
						onChange(e.currentTarget.value);
					}
				}}
				{...rest} >
				{
					options.map(opt => (<option key={`${Math.random()}-${opt.value}`} value={opt.value}>{opt.label}</option>))
				}
			</select>
		</Select>
	</SelectContainer>);
};
export default SelectComp;
