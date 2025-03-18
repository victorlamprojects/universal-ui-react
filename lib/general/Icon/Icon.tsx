import { FC, ReactElement } from "react";
import styled from 'styled-components';

const Image = styled.img<{ width:string, height:string, backgroundColor?: string }>`
    width: ${props => props.width};
    height: ${props => props.height};
    background-color: ${props => props.backgroundColor};
`

interface SquareIconProps {
    src: string | ReactElement | null;
    width?: string;
    height?: string;
    backgroundColor?: string;
	className?: string;
    onClick?: () => void;
}
const Icon:FC<SquareIconProps> = ({width="32px", height="32px", backgroundColor, className, src, onClick, ...rest}) => {
    if(typeof src === 'string')
        return <Image width={width} height={height} backgroundColor={backgroundColor} src={src} {...rest} className={className} onClick={onClick} />
    return src;
}
export default Icon;
