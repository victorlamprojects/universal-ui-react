import { HTMLAttributes } from "react";
import styled from "styled-components";
import { BreakPoints as mq } from "../../config/constants";

export type GridProps = HTMLAttributes<HTMLDivElement> & {
	justifyContent?: string;
	alignItems?: string;
	alignContent?: string;
}

export const Grid = styled.div<GridProps>(({justifyContent="flex-start", alignItems="center", alignContent="stretch"}): any=>{
	return {
		width: "100%",
		padding: "0.25rem 0.5rem",
		margin: "0.75rem 0",
		display: "flex",
		flexDirection: "row",
		justifyContent: justifyContent,
		alignItems: alignItems,
		alignContent: alignContent,
		flexWrap: "wrap"
	}
});


export type CellProps = HTMLAttributes<HTMLDivElement> & {
	s?: number;
	m?: number;
	l?: number;
	justifyContent?: string;
	alignItems?: string;
	alignContent?: string;
}

export const Cell = styled.div<CellProps>(({s, m, l, justifyContent="flex-start", alignItems="center", alignContent="stretch"}): any => {
	const style = {
		display: "flex",
		justifyContent: justifyContent,
		alignItems: alignItems,
		alignContent: alignContent,
		margin: "0",
		flexBasis: "auto"
	};

	if(s !== undefined && s <= 12 && s >= 0){
		const width = Math.round((s / 12) * 10000) / 100;
		style.flexBasis = `${width}%`;
	}
	if(m !== undefined && m <= 12 && m >= 0){
		const width = Math.round((m / 12) * 10000) / 100;
		style[mq.m] = {
			flexBasis: `${width}%`
		}
	}
	if(l !== undefined && l <= 12 && l >= 0){
		const width = Math.round((l / 12) * 10000) / 100;
		style[mq.l] = {
			flexBasis: `${width}%`
		}
	}

	return style;
});
