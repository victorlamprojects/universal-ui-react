import { HTMLAttributes } from "react";
import styled from "styled-components";
import type BreakPoints from "../types/break-points";

export const Grid = styled.div((): any=>{
	return {
		width: "100%",
		padding: "0.25rem 0.5rem",
		margin: "0.75rem 0",
		display: "flex",
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "center",
		flexWrap: "wrap"
	}
});


type CellProps = HTMLAttributes<HTMLDivElement> & {
	s?: number;
	m?: number;
	l?: number;
}

export const Cell = styled.div<CellProps>(({s, m, l}): any => {
	const mq = BreakPoints;
	let style = {
		margin: "0.25rem 0",
		flexBasis: "0%"
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
