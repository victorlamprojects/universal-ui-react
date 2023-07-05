import { CellProps } from "../Grid/Grid";
import { DatetimeType } from "../Input/DateInput";

// Form
export type FData = string | number | bigint | undefined | null | Date;

export type FState = {
	[key: string]: FData
};

export type FElementBaseProps = CellProps & {
};

// Configured Form
export type FConfigurationElement = {
	type: string;
	defaultValue?: string;
	label?: string;
	datetimeType?: string | DatetimeType;
	disabled?: boolean;
}
export type FConfigurationGroup = {
	group: boolean;
	content?: {
		[key: string]: FConfigurationGroup | FConfigurationElement;
	};
};
export type FConfiguration = {
	title?: string;
	content?: {
		[key: string]: FConfigurationGroup | FConfigurationElement;
	};
};
