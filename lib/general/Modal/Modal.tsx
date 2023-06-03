import { FC, HTMLAttributes, CSSProperties } from "react";
import styled, { css, keyframes } from 'styled-components';
import Portal from '../Container/Portal';
import { FontSize, Padding, Themes, ModalVariant } from '../../constants';

// Modal Backdrop
const ModalBackdrop = styled.div<HTMLAttributes<HTMLDivElement> & { show: boolean }>(({ show, style })=>{
	return {
		position: "fixed",
		zIndex: 100,
		top: 0,
		left: 0,
		width: "100%",
		height: "100%",
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "rgb(32,32,32,0.75)",
		display: show ? "flex" : "none",
		...style
	}
})

// Modal Container
const drop = keyframes`
    0%{
        opacity: 0;
        transform: scale(0);
    }
    70%{ transform: scale(1.1);}
    100%{
        transform: scale(1);
        opacity: 1;
    }
`
const ModalContainer = styled.div(({style})=>{
	return {
		zIndex: 101,
		backgroundColor: "#fff",
		margin: "0 auto",
		height: "fit-content",
		width: "fit-content",
		minWidth: "275px",
		maxWidth: "90%",
		overflow: "auto",
		borderRadius: "8px",
		textAlign: "center",
		...style
	}
}, css`
	animation: ${drop} .6s ease-in forwards;
`);


// Modal Header
const ModalHeader = styled.div(({style}) => {
	return {
		width: "100%",
		minHeight: "24px",
		maxHeight: `calc(${FontSize.ModalHeader} + 1.25em)`,
		display: "block",
		position: "relative",
		backgroundColor: "inherit",
		boxShadow: "inset 0em 0em 0em 10em rgba(0, 0, 0, 0.3)",
		userSelect: "none",
		...style
	};
});

// Modal Title
const ModalTitle = styled.p(({style}) => {
	return {
		fontSize: FontSize.ModalHeader,
		textAlign: "center",
		display: "inline-block",
		margin: "0.25em 0",
		...style
	};
});

// Modal Close
const ModalClose = styled.span(({style}) => {
	return {
		fontSize: FontSize.ModalHeader,
		width: FontSize.ModalHeader,
		height: FontSize.ModalHeader,
		position: "absolute",
		right: 0,
		top: "0.25em",
		cursor: "pointer",
		...style
	};
});

// Modal Body
const ModalBody = styled.div(({style}) => {
	return {
		minHeight: "50px",
		maxHeight: "800px",
		color: "inherit",
		fontSize: FontSize.ModalText,
		padding: Padding.Container,
		filter: "brightness(75%)",
		...style
	};
});

// Modal
type ModalProps = HTMLAttributes<HTMLDivElement> & {
	show: boolean;
	setShow: (s: boolean) => void;
	title?: string;
	containerStyle?: CSSProperties;
	headerStyle?: CSSProperties;
	titleStyle?: CSSProperties;
	bodyStyle?: CSSProperties;
	enableBackgroundClick?: boolean;
	theme?: string;
	variant?: ModalVariant;
};
const Modal: FC<ModalProps> = ({
	children, show, setShow, title,
	containerStyle, headerStyle, titleStyle, bodyStyle,
	enableBackgroundClick=true,theme,variant="info",
	...rest
}) => {
	const Theme = theme && Themes[theme];

	const ContainerStyle = Theme && {
		backgroundColor: Theme.block,
		color: Theme.text,
		...containerStyle
	} || containerStyle;
	const HeaderStyle = Theme && {
		color: Theme.button.text,
		backgroundColor: Theme[variant],
		...headerStyle
	} || headerStyle;
	const TitleStyle = Theme && {
		...titleStyle
	} || titleStyle;
	const BodyStyle = Theme && {
		...bodyStyle
	} || bodyStyle;

	return (<Portal {...rest} >
		<ModalBackdrop show={show} onClick={() => {
				if(enableBackgroundClick){
					setShow(false);
				}
			}}>
			<ModalContainer hidden={!show} onClick={e=>e.stopPropagation()} style={ContainerStyle}>
				<ModalHeader style={HeaderStyle}>
					<ModalTitle style={TitleStyle}>{title}</ModalTitle>
					<ModalClose onClick={()=>setShow(false)}>&#10005;</ModalClose>
				</ModalHeader>
				<ModalBody style={BodyStyle}>
					{children}
				</ModalBody>
			</ModalContainer>
		</ModalBackdrop>
	</Portal>);
};
export default Modal;
