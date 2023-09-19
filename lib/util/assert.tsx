export const assert = (expr: boolean, errMsg: string) => {
	if(!expr){
		throw Error(errMsg);
	}
}
