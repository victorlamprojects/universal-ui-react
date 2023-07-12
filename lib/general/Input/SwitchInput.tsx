import { FC, HTMLAttributes, InputHTMLAttributes, FormEvent } from "react";
import styled from "styled-components";

import { Cell } from "../Grid/Grid";
import { getDefaultThemeIfNotFound } from '../../theme/theme';
import { FontSize } from '../../config/constants';

export enum SwitchType {
	Sqaure="square",
	Round="round"
}

type SwitchInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "onChange"> & {
	s?: number;
	m?: number;
	l?: number;
	name: string;
	value?: boolean;
	defaultValue?: string | boolean;
	type?: string | SwitchType;
	onChange?: (d: boolean)=>void;
};
const InputContainer = styled(Cell)(({theme})=>{
	theme = getDefaultThemeIfNotFound(theme);
	return {
		margin: "0",
		"& > label":{
			position: "relative", display: "inline-block",
			width: `calc(2 * ${FontSize.Text} - 3px * 2)`,
			height: FontSize.Text,
			"& > input[type=checkbox]": {
				opacity: 0,
				width: 0,
				height: 0,
				"&:checked + span": {
					backgroundColor: theme.primary
				},
				"&:checked + span:before": {
					transform: `translate(calc(${FontSize.Text} - 2px * 2))`
				},
				"&:focus + span": {
					boxShadow: "0 0 1px #2196F3"
				}
			}
		}
	}

});
const Slider = styled.span<HTMLAttributes<HTMLSpanElement>  & {type: SwitchType}>(({theme, type}) => {
	theme = getDefaultThemeIfNotFound(theme);
	return {
		position: "absolute",
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		transition: ".4s",
		cursor: "pointer",
		backgroundColor: "#ccc",
		borderRadius: type === SwitchType.Round ? FontSize.Text : "0",
		"&:before": { position: "absolute",
			content: "''",
			left: "3px",
			bottom: "3px",
			width: `calc(${FontSize.Text} - 3px * 2)`,
			height: `calc(${FontSize.Text} - 3px * 2)`,
			backgroundColor: "#fff",
			transition: "0.4s",
			borderRadius: type === SwitchType.Round ? "50%" : "0",
		}
	};
})
const SwitchInput: FC<SwitchInputProps> = ({s, m, l, value, defaultValue, onChange, type=SwitchType.Round, ...rest}) => {
	if((value === undefined || value === null) && onChange){
		if(defaultValue !== undefined && defaultValue !== null){
			onChange(String(defaultValue).toLowerCase() === "true");
		}
		else{
			onChange(false);
		}
	}
	return (<InputContainer s={s} m={m} l={l} >
		<label>
			<input
				type={"checkbox"}
				checked={value}
				onChange={(e: FormEvent<HTMLInputElement>) => {
					if(onChange){
						onChange(e.currentTarget.checked);
					}
				}}
				{...rest}
			/>
			<Slider type={type as SwitchType}/>
		</label>
	</InputContainer>);
};
export default SwitchInput;
