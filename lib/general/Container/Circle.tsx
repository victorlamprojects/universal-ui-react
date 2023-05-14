import { FC, HTMLAttributes } from "react";
import styled from "styled-components";

const CircleContainer = styled.div((): any => {
	return {
		width: "100%",
		position: "relative",
		paddingBottom: "100%"
	}
});
const CircleContent = styled.div((): any => {
	return {
		position: "absolute",
		top: 0,
		left: 0,
		width: "100%",
		height: "100%",
		overflow: "hidden",
		borderRadius: "50%"
	};
});

const Circle: FC<HTMLAttributes<HTMLDivElement>> = ({children, ...rest})=>{
	return (<CircleContainer {...rest} >
		<CircleContent>
			{children}
		</CircleContent>
	</CircleContainer>);
};

export default Circle;
