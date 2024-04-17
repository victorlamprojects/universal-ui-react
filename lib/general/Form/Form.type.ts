import { CellProps } from "../Grid/Grid";
import { DatetimeType } from "../Input/DateInput";
import { SwitchType } from "../Input/SwitchInput";
import { Option } from "../Input/Select";

// Form
export type FData = string | number | bigint | undefined | null | Date;

export type FState = {
	[key: string]: FData
};

export type FElementBaseProps = CellProps & {
	label?: string;
};

// Configured Form
export type FConfigurationElement = {
	type: string;
	justifyContent?: string;
	value?: FData;
	label?: string;
	datetimeType?: string | DatetimeType;
	switchType?: SwitchType;
	disabled?: boolean;
	options?: Option[];
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
