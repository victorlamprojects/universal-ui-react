import { FC, HTMLAttributes } from "react";
import styled from "styled-components";

const SquareContainer = styled.div((): any => {
	return {
		width: "100%",
		position: "relative",
		paddingBottom: "100%"
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

const Square: FC<HTMLAttributes<HTMLDivElement>> = ({children, ...rest})=>{
	return (<SquareContainer {...rest} >
		<SquareContent>
			{children}
		</SquareContent>
	</SquareContainer>);
};

export default Square;
