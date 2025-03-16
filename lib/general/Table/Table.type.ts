export type TData = string | number | bigint | undefined | null;

export type TRow = {
	[key: string]: TData;
};

export type TCol = {
	key: string;
	title?: string;
	sort?: ((_arg0: TRow, _arg2: TRow) => number);
	apply?: (_arg0: TData) => any;
};

export type TColView = {
	key: string;
	title: string;
	sort: ((_arg0: TRow, _arg2: TRow) => number);
	apply?: (_arg0: TData) => any;
};

export const getDefaultHeaderView = (data?: TRow) : TColView[] => {
	if(!data){
		return [];
	}
	const cols: TColView[] = Object.keys(data).map((k: string) => {
		return {
			key: k,
			title: k,
			sort: (arg0: TRow, arg1: TRow) => {
				if(arg0 && arg1){
					return (arg0[k] || Number.NEGATIVE_INFINITY) < (arg1[k] || Number.NEGATIVE_INFINITY) ? 1 : -1;
				}
				return -1;
			}
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
	const cols: TColView[] = [];
	for(const c of defaultCol){
		const h = overrideCol.find(o => o.key === c.key);
		if(!h){
			cols.push(c);
			continue;
		}
		cols.push({...c, ...h});
	}
	// Ignore keys that are not in the data

	return cols;
}
