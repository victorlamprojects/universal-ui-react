export type ThemeType = {
	text: string;
	background: string;
	header: string;
	sidebar: string;
	block: string;
	info: string;
	success: string;
	warning: string;
	error: string;
	primary: string;
	secondary: string;
	card: {
		primary: string;
		primary2?: string;
		secondary: string;
		secondary2?: string;
		info?: string;
		info2?: string;
	},
	button: {
		text: string;
		background: string;
	}
};

export const Dark: ThemeType = {
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
}

export const Light: ThemeType = {
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

export const getTheme = (theme: string) => {
	if(theme === "dark"){
		return Dark;
	}
	return Light;
}

const theme = Light;
export default theme;
