import { ButtonVariant, HoverEffect, ActiveEffect } from "../config/constants";
import { ThemeType } from "../theme/theme";

export const getHoverEffect = (hover: HoverEffect, theme: ThemeType, variant: ButtonVariant = ButtonVariant.Default) => {
	let effects = {};
	if(hover === HoverEffect.Enlarge){
		effects = {
			"&:hover": {
				cursor: "pointer",
				transform: "scale(1.1)"
			}
		};
	}
	else if(hover === HoverEffect.Opaque){
		effects = {
			opacity: 0.75,
			"&:hover": {
				cursor: "pointer",
				opacity: 1
			}
		}
	}
	else if(hover === HoverEffect.Solidify){
		effects = {
			transitionDuration: "0.3s",
			backgroundColor: "inherit",
			color: "inherit",
			border: `1px solid ${variant === ButtonVariant.Default ? theme.primary : theme[variant]}`,
			"&:hover": {
				cursor: "pointer",
				backgroundColor: variant === ButtonVariant.Default ? theme.primary : theme[variant] ,
				color: theme.button.text
			}
		}
	}
	return effects;
}

export const getActiveEffect = (active: ActiveEffect, theme: ThemeType) => {
	let effects = {};
	if(active === ActiveEffect.Enlarge){
		effects = {
			"&.active": {
				transform: "scale(1.1)"
			}
		};
	}
	else if(active === ActiveEffect.Opaque){
		effects = {
			"&.active": {
				opacity: 1
			}
		}
	}
	else if(active === ActiveEffect.Solidify){
		effects = {
			"&.active": {
				backgroundColor: theme.primary,
				color: theme.button.text
			}
		}
	}
	return effects;
}

export const isNumeric = (val: any) => {
	const v = parseFloat(val);
	return !isNaN(v) && !isNaN(val - 0);
}

const MonthMap = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
export const getNumOfDays = (year: number, month: number) => {
	if(month === 2){
		const isLeap = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
		return MonthMap[month] + (isLeap ? 1 : 0);
	}
	return MonthMap[month];
}
