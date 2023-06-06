export const enum BreakPoints {
	xs = "@media only screen and (min-width: 0px)",
	s = "@media only screen and (min-width: 576px)",
	m = "@media only screen and (min-width: 768px)",
	l = "@media only screen and (min-width: 992px)"
}

export const enum IconType {
	Square,
	Circle
}

export const FontSize = {
	Header: "1.875em",
	Text: "1.5em",
	ModalHeader: "1.875em",
	ModalText: "1.5em"
}

export const Padding = {
	Button: "8px 12px",
	Container: "8px 12px"
}

export const Themes = {
	"dark": {
		text: "#e3e3e3",
		background: "#1e1e1e",
		header: "#000",
		sidebar: "#121212",
		block: "#171717",
		info: "#398AD7",
		success: "#0f9d58",
		warning: "#d5a439",
		error: "#d23f31",
		primary: "#42b9f5",
		secondary: "#828282",
		card: {
			primary: "#02aab0",
			primary2: "#00cdac",
			secondary: "#e94057",
			secondary2: "#f27121",
			info: "#8e2de2",
			info2: "#4a00e0"
		},
		button: {
			text: "#fff",
			background: "#25aea6"
		}
	},
	"light": {
		text: "#212121",
		background: "#FFFFFF",
		header: "#84A9FF",
		sidebar: "#D6E4FF",
		block: "#e3e3e3",
		info: "#74CAFF",
		success: "#AAF27F",
		warning: "#FFE16A",
		error: "#FFA48D",
		primary: "#C8FACD",
		secondary: "#D6E4FF",
		card: {
			primary: "#8e2de2",
			primary2: "#4a00e0",
			secondary: "#e94057",
			secondary2: "#f27121",
			info: "#02aab0",
			info2: "#00cdac",
		},
		button: {
			text: "#fff",
			background: "#25aea6"
		}
	}
}

export const enum ModalVariant {
	Info="info",
	Success="success",
	Warning="warning",
	Error="error"
}

export const enum ButtonVariant {
	Info="info",
	Success="success",
	Warning="warning",
	Error="error"
}

export const enum ButtonEffect {
	None="none",
	Enlarge="enlarge",
	Transparent="transparent",
	Solidify="solidify"
}
