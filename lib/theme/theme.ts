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
	highlight: string;
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
	},
	table: {
		header: string;
		primary: string;
		secondary: string;
	},
	form: {
		group: string;
	},
	input: {
		background: string;
		text: string;
		focusBackground?: string;
		focusText?: string;
		disabledBackground?: string;
		disabledText?: string;
	}
};

export const Dark: ThemeType = {
	text: "#e3e3e3",
	background: "#1e1e1e",
	header: "#1e1e1e",
	sidebar: "#121212",
	block: "#171717",
	info: "#398AD7",
	success: "#0f9d58",
	warning: "#d5a439",
	error: "#d23f31",
	primary: "#435B66",
	secondary: "#828282",
	highlight: "#d5a439",
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
	},
	table: {
		header: "#575041",
		primary: "#424242",
		secondary: "#435B66"
	},
	form: {
		group: "#828282"
	},
	input: {
		text: "#000",
		background: "#e0e0e0",
		focusBackground: "#435B66",
		focusText: "#fff",
		disabledBackground: "transparent",
		disabledText: "inherit"
	}
}

export const Light: ThemeType = {
	text: "#212121",
	background: "#fff",
	header: "#fff",
	sidebar: "#d2d3db",
	block: "#e3e3e3",
	info: "#74CAFF",
	success: "#82e846",
	warning: "#f7d54d",
	error: "#FFA48D",
	primary: "#9394a5",
	secondary: "#fefedd",
	highlight: "#f7d54d",
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
	},
	table: {
		header: "#ac9d81",
		primary: "#fefedd",
		secondary: "#42b9f5"
	},
	form: {
		group: "#232323"
	},
	input: {
		text: "#000",
		background: "#fff"
	}
}

export const getTheme = (theme: string) => {
	if(theme === "dark"){
		return Dark;
	}
	return Light;
}

export const getDefaultThemeIfNotFound = (theme: ThemeType | undefined | null): ThemeType => {
	return (!theme || (typeof theme === "object" && Object.keys(theme).length === 0)) ? Light : theme;
}

const theme = Light;

export default theme;
