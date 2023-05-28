import { FC } from "react";
import styled from 'styled-components';

const Image = styled.img`
    width: ${(props: { width:string, height:string, backgroundColor?: string }) => props.width};
    height: ${(props: { width:string, height:string, backgroundColor?: string }) => props.height};
    background-color: ${(props: { width:string, height:string, backgroundColor?: string }) => props.backgroundColor};
`

interface SquareIconProps {
    src: string | (JSX.Element);
    width?: string;
    height?: string;
    backgroundColor?: string;
	className?: string;
    onClick?: () => void;
};
const Icon:FC<SquareIconProps> = ({width="32px", height="32px", backgroundColor, className, src, onClick, ...rest}) => {
    if(typeof src === 'string')
        return <Image width={width} height={height} backgroundColor={backgroundColor} src={src} {...rest} className={className} onClick={onClick} />
    return src;
}
export default Icon;
