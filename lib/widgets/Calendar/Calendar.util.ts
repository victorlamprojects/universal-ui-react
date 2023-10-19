import { CalendarEvent } from './Calendar.type';

const compareDateOnly = (d1: Date, d2: Date) => {
	return new Date(d1.getFullYear(), d1.getMonth(), d1.getDate()).getTime()
		- new Date(d2.getFullYear(), d2.getMonth(), d2.getDate()).getTime();
};


// Check if event is in date d
export const isEventInDate = (event: CalendarEvent, d: Date) => {
	const start = event.from;
	const end = event.to;

	const diff = compareDateOnly(start, d);
	const diff2 = end ? compareDateOnly(end, d) : -1;

	// Check if event starts or ends today
	if(diff === 0 || diff2 === 0){
		return true;
	}
	// Check if event is within today
	if(diff < 0 && diff2 > 0){
		return true;
	}

	return false;
}

export const getTimeString = (d: Date) => {
	return d.toLocaleTimeString("en-US", {hour: '2-digit', minute: '2-digit'});
}

export const getEventTimeString = (f: Date, t: Date | null | undefined) => {
	if(!t){
		return "full-day";
	}
	return `${getTimeString(f)} - ${getTimeString(t)}`;
}

export const eventComparator = (e1: CalendarEvent, e2: CalendarEvent) => {
	const fromDiff = e1.from.getTime() - e2.from.getTime()
	if(fromDiff === 0){
		const toDiff = (e1.to ? e1.to.getTime() : 0) - (e2.to ? e2.to.getTime() : 0);
		if(toDiff === 0){
			if(e1.name === e2.name){
				return 0;
			}
			return e1.name > e2.name ? 1 : -1;
		}
		return toDiff;
	}
	return fromDiff;
}

export const getPrevMonth = (y: number, m: number) => {
	if(m - 1 < 0){
		return 11;
	}
	return m - 1;
}
export const getNextMonth = (y: number, m: number) => {
	if(m + 1 >= 12){
		return 0;
	}
	return m + 1;
}
export const getPrevYear = (y: number, m: number) => {
	if(m - 1 < 0){
		return y - 1;
	}
	return y;
}
export const getNextYear = (y: number, m: number) => {
	if(m + 1 >= 12){
		return y + 1;
	}
	return y;
}
