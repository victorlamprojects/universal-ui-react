export type TData = string | number | bigint | undefined | null;

export type TRow = {
	[key: string]: TData;
};

export type TCol = {
	key: string;
	title?: string;
	sort?: ((arg0: TRow, arg2: TRow) => number);
	apply?: (arg0: TData) => any;
};

export type TColView = {
	key: string;
	title: string;
	sort: ((arg0: TRow, arg2: TRow) => number);
	apply?: (arg0: TData) => any;
};

export const getDefaultHeaderView = (data?: TRow) : TColView[] => {
	if(!data){
		return [];
	}
	let cols: TColView[] = Object.keys(data).map((k: string) => {
		return {
			key: k,
			title: k,
			sort: (arg0: TRow, arg1: TRow) => (arg0 && arg1 && arg0[k] && arg1[k] && arg0[k] < arg1[k] ? 1 : -1)
		};
	});
	return cols;
};

export const getOverridenHeaderView = (defaultCol?: TColView[], overrideCol?: TCol[]) : TColView[] => {
	if(!defaultCol){
		return [];
	}
	if(!overrideCol){
		return defaultCol;
	}
	let cols: TColView[] = [];
	for(let c of defaultCol){
		let h = overrideCol.find(o => o.key === c.key);
		if(!h){
			cols.push(c);
			continue;
		}
		cols.push({...c, ...h});
	}
	// Ignore keys that are not in the data

	return cols;
}
