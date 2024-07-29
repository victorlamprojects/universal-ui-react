import { useState, createContext, useContext, HTMLAttributes } from "react";
import styled from "styled-components";
import Portal from "../../general/Container/Portal";
import { NotificationProps } from "./Notification.type";
import { NotificationType, VerticalAlignment, HorizontalAlignment } from '../../config/constants';
import { getDefaultThemeIfNotFound } from '../../theme/theme';

const NotificationContext = createContext<{
	context: NotificationProps,
	setContext: (newProps: NotificationProps) => void,
	showNoti: (duration: number) => void,
}>({
	context: {},
	setContext: (_: NotificationProps) => {},
	showNoti: (_: number) => {},
});

const NotificationTitle = styled.div<HTMLAttributes<HTMLDivElement>>(({theme}) => {
	return {
		height: "1rem",
		fontWeight: "bold",
		userSelect: "none",
	};
});

const NotificationBody = styled.div<HTMLAttributes<HTMLDivElement>>(({theme}) => {
	return {
		width: "100%",
		padding: "3px",
	};
});

const Close = styled.span<HTMLAttributes<HTMLSpanElement>>(() => {
	return {
		display: "block",
		cursor: "pointer",
		fontSize: "16px",
		width: "16px",
		height: "16px",
		marginLeft: "auto",
	};
});

const NotificationContainer = styled.div<HTMLAttributes<HTMLDivElement> & {
	horizontal: HorizontalAlignment,
	vertical: VerticalAlignment,
	type: NotificationType,
	hidden: boolean,
}>(({ style, horizontal, vertical, type, hidden, theme}) => {
	theme = getDefaultThemeIfNotFound(theme);
	let s = {
		...style
	};
	if(vertical === VerticalAlignment.Top){
		s.top = "0.5rem";
	}
	else if(vertical === VerticalAlignment.Middle){
		s.top = "50%";
		s.transform = (s.transform || "") + " translateY(-50%)";
	}
	else{
		s.bottom = "0.5rem";
	}
	if(horizontal === HorizontalAlignment.Left){
		s.left = "0.5rem";
	}
	else if(horizontal === HorizontalAlignment.Middle){
		s.left = "50%";
		s.transform = (s.transform || "") + " translateX(-50%)";
	}
	else{
		s.right = "0.5rem";
	}

	return {
		width: "200px",
		height: "75px",
		fontSize: "14px",
		position: "fixed",
		display: hidden ? "none" : "flex",
		flexWrap: "wrap",
		flex: 1,
		alignContent: "flex-start",
		padding: "0.25rem",
		backgroundColor: theme[type],
		...s
	};
});

export const NotificationProvider = ({ children }) => {
	const [show, setShow] = useState<boolean>(false);
	const [context, setContext] = useState<NotificationProps>({
		type: "info",
		title: "",
		text: "",
		horizontal: HorizontalAlignment.Right,
		vertical: VerticalAlignment.Bottom
	} as NotificationProps);

	const showNoti = (duration: number) => {
		setShow(true);
		if(duration > 0){
			setTimeout(() => {
				setShow(false);
			}, duration);
		}
	};

	return (<NotificationContext.Provider value={{
		showNoti: showNoti,
		context: context,
		setContext: (newProps: NotificationProps) => setContext(newProps),
	}}>
		{children}
		<Portal id={"notification-popup"}>
			<NotificationContainer
				hidden={!show}
				horizontal={context.horizontal as HorizontalAlignment}
				vertical={context.vertical as VerticalAlignment}
				type={context.type as NotificationType} >
				<NotificationTitle>{context.title}</NotificationTitle>
				<Close onClick={() => setShow(false)}>✕</Close>
				<NotificationBody>{context.text}</NotificationBody>
			</NotificationContainer>
		</Portal>
	</NotificationContext.Provider>);
};

export const useNotification = ({
	duration=1000,
	type="info" as NotificationType,
	horizontal=HorizontalAlignment.Right,
	vertical=VerticalAlignment.Bottom
}: {duration?: number, type?: NotificationType}) => {
	const {context, setContext, showNoti} = useContext(NotificationContext);
	if(!context){
		throw new Error("Please wrap your App with NotificationProvider before using");
	}

	const showNotification = (title: string, text: string, notiType=type, horizontalAlign=horizontal, verticalAlign=vertical) => {
		setContext({
			...context,
			title,
			text,
			type: notiType,
			horizontal: horizontalAlign,
			vertical: verticalAlign
		});
		showNoti(duration);
	}
	return { showNotification };
}

