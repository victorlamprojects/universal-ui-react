export type CalendarProps = {
	date?: number;
	month?: number;
	year?: number;
	onSelect?: (d: Date) => void;
	getEvents?: (d: Date) => CalendarEvent[];
};

// Calendar Event
export type CalendarEventType = "Work" | "Learning" | "Exercise" | "Personal" | "Other" | null;
export const CalendarEventTypeColor = {
	"Work": "#d23f31",
	"Learning": "#0f9d58",
	"Exercise": "#d5a439",
	"Personal": "#398AD7",
	"Other": "#333"
};
export type RepeatType = "Weekly" | "monthely" | null;
export type RepeatArgs = {
	to?: Date | null;
	interval: number;
} | null;
export type CalendarEvent = {
	name: string;
	from: Date;
	to?: Date;
	includeTime?: boolean;
	type?: CalendarEventType;
	repeatType?: RepeatType;
	repeatArgs?: RepeatArgs;
};
