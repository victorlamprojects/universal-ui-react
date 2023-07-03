import { CellProps } from "../Grid/Grid";

export type FData = string | number | bigint | undefined | null | Date;

export type FState = {
	[key: string]: FData
};

export type FElementBaseProps = CellProps & {
}
