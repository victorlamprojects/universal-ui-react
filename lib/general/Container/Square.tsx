import { FC, HTMLAttributes } from "react";
import styled from "styled-components";

const SquareContainer = styled.div<HTMLAttributes<HTMLDivElement> & { size?: string }>(({ size }): any => {
	return {
		width: size || "100%",
		position: "relative",
		paddingBottom: size || "100%"
	}
});

const SquareContent = styled.div((): any => {
	return {
		position: "absolute",
		top: 0,
		left: 0,
		width: "100%",
		height: "100%"
	};
});

const Square: FC<HTMLAttributes<HTMLDivElement> & { size?: string}> = ({children, size, ...rest})=>{
	return (<SquareContainer size={size} {...rest} >
		<SquareContent>
			{children}
		</SquareContent>
	</SquareContainer>);
};

export default Square;
