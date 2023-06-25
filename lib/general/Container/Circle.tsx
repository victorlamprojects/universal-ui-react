import { FC, HTMLAttributes } from "react";
import styled from "styled-components";

const CircleContainer = styled.div<HTMLAttributes<HTMLDivElement> & { size?: string }>(({ size }): any => {
	return {
		width: size || "100%",
		position: "relative",
		paddingBottom: size || "100%"
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

const Circle: FC<HTMLAttributes<HTMLDivElement> & { size?: string}> = ({children, size, ...rest})=>{
	return (<CircleContainer size={size} {...rest} >
		<CircleContent>
			{children}
		</CircleContent>
	</CircleContainer>);
};

export default Circle;
