import { FC, InputHTMLAttributes, FormEvent } from "react";
import styled from "styled-components";

import { Cell } from "../Grid/Grid";
import { getDefaultThemeIfNotFound } from '../../theme/theme';
import { FontSize, Padding } from '../../config/constants';

export const enum DatetimeType {
	DateOnly = "date-only",
	DateWithTime = "date-with-time",
	TimeOnly = "time-only"
};
type DateInputProps = Omit<Omit<InputHTMLAttributes<HTMLInputElement>, "onChange">, "value"> & {
	s?: number;
	m?: number;
	l?: number;
	name: string;
	value?: Date;
	min?: Date;
	max?: Date;
	onChange?: (date: Date)=>void;
	datetimeType?: DatetimeType | string;
};
const InputContainer = styled(Cell)(({theme})=>{
	theme = getDefaultThemeIfNotFound(theme);
	return {
		margin: "0",
		"&>input[type=date]": {
			fontSize: FontSize.Text,
			padding: Padding.Input,
			width: "100%",
			border: "none",
			outline: "none",
			color: theme.input.text || "inherit",
			backgroundColor: theme.input.background,
			"&:focus": {
				backgroundColor: theme.input.focusBackground || theme.primary,
				color: theme.input.focusText || "#fff"
			},
			"&:disabled": {
				backgroundColor: theme.input.disabledBackground || "transparent",
				color: theme.input.disabledText || "inherit",
				cursor: "text"
			}
		}
	}

});
const convertType = (dt: DatetimeType): string => {
	if(dt === DatetimeType.DateWithTime){
		return "datetime-local";
	}
	else if(dt === DatetimeType.TimeOnly){
		return "time";
	}
	return "date";
}
const convertDatetimeString = (dt: DatetimeType, date: Date): string => {
	const y = date.getFullYear();
	const m = String(date.getMonth() + 1).padStart(2, '0');
	const d = String(date.getDate()).padStart(2, '0');
	const h = String(date.getHours()).padStart(2, '0');
	const min = String(date.getMinutes()).padStart(2, '0');
	if(dt === DatetimeType.DateWithTime){
		return `${y}-${m}-${d}T${h}:${min}`;
	}
	else if(dt === DatetimeType.TimeOnly){
		return `${h}:${min}`;
	}
	return `${y}-${m}-${d}`;
}
const DateInput: FC<DateInputProps> = ({s, m, l, name, datetimeType, value, min, max, onChange, ...rest}) => {
	if(!value && onChange){
		onChange(new Date());
	}
	return (<InputContainer s={s} m={m} l={l} >
		<input
			{...rest}
			name={name}
			type={convertType(datetimeType as DatetimeType)}
			value={value && convertDatetimeString(datetimeType as DatetimeType, value)}
			min={min && convertDatetimeString(datetimeType as DatetimeType, min)}
			max={max && convertDatetimeString(datetimeType as DatetimeType, max)}
			onChange={(e: FormEvent<HTMLInputElement>) => {
				if(onChange){
					onChange(e.currentTarget.valueAsDate as Date);
				}
			}}
		/>
	</InputContainer>);
};
export default DateInput;
