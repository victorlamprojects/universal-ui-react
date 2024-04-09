import { FC, useState, HTMLAttributes, useEffect, useRef, forwardRef, TouchEvent } from 'react';
import styled from 'styled-components';
import { Grid, Cell, CellProps } from '../../general/Grid/Grid';
import Circle from '../../general/Container/Circle';
import { CalendarProps, CalendarEvent, CalendarEventTypeColor } from './Calendar.type';
import {
	isEventInDate,
	getEventTimeString,
	eventComparator,
	getPrevMonth,
	getNextMonth,
	getPrevYear,
	getNextYear
} from './Calendar.util';
import { getDefaultThemeIfNotFound } from '../../theme/theme';
import { getNumOfDays } from '../../util/helper';
import { BreakPoints as mq } from "../../config/constants";

// Calendar Title
const CalendarTitle = styled(Grid)(({style, theme}) => {
	theme = getDefaultThemeIfNotFound(theme);
	return {
		padding: "0",
		margin: "0 0 0.5rem 0",
		fontSize: "1.25rem",
		[mq.m]: {
			fontSize: "1.25rem"
		},
		[mq.l]: {
			fontSize: "1.75rem"
		},
		...style
	};
});
const CalendarTitleArrow = styled(Cell)(({style, theme}) => {
	theme = getDefaultThemeIfNotFound(theme);
	return {
		cursor: "pointer",
		...style
	};
});
const CalendarTitleMonth = styled(Cell)(({style, theme}) => {
	theme = getDefaultThemeIfNotFound(theme);
	return {
		padding: "0",
		margin: "0",
		fontWeight: "bold",
		...style
	};
});

// Calendar Content
const WeekRow = styled(Grid)(({style, theme}) => {
	theme = getDefaultThemeIfNotFound(theme);
	return {
		padding: "0",
		margin: "0",
		...style
	};
});
const WeekCell = styled(Cell)<CellProps & {text: string}>(({style, theme, text}) => {
	theme = getDefaultThemeIfNotFound(theme);
	return {
		fontWeight: "bold",
		fontSize: "1rem",
		"&:before": {
			content: `'${text.slice(0, 1)}'`
		},
		[mq.m]: {
			fontSize: "1.125rem",
			"&:before": {
				content: `'${text.slice(0, 3)}'`
			}
		},
		[mq.l]: {
			fontSize: "1.5rem",
			"&:before": {
				content: `'${text}'`
			}
		},
		...style
	};
});
const DateRow = styled(Grid)(({style, theme}) => {
	theme = getDefaultThemeIfNotFound(theme);
	return {
		padding: "0",
		margin: "0",
		...style
	};
});
const DateCell = styled(Cell)(({style, theme}) => {
	theme = getDefaultThemeIfNotFound(theme);
	return {
		width: "100%",
		height: "2.625rem",
		position: "relative",
		cursor: "default",
		overflow: "hidden",
		padding: "0.325rem 0.275rem",
		boxShadow: `
			1px 0 0 0 ${theme.text},
			0 1px 0 0 ${theme.text},
			1px 1px 0 0 ${theme.text},
			1px 0 0 0 ${theme.text} inset,
			0 1px 0 0 ${theme.text} inset
		`,
		[mq.m]: {
			height: "3rem",
			padding: "0.375rem 0.5rem"
		},
		[mq.l]: {
			height: "7.5rem"
		},
		"&:hover": {
			cursor: "pointer",
			backgroundColor: "rgba(127,127,127,.5)"
		},
		"&.today": {
			backgroundColor: theme.table.header,
		},
		"&.selected": {
			backgroundColor: theme.primary,
			"&:hover": {
				cursor: "default"
			}
		},
		...style
	};
});
const DateNumber = styled.span(({style, theme}) => {
	theme = getDefaultThemeIfNotFound(theme);

	return {
		top: "0.2rem",
		left: "0",
		position: "absolute",
		width: "1.2rem",
		height: "1.2rem",
		fontSize: "0.8rem",
		textAlign: "center",
		[mq.m]: {
			fontSize: "1rem",
		},
		[mq.l]: {
			width: "2.2rem",
			height: "2.2rem",
			fontSize: "2rem"
		},
		...style
	};
});
const DateDot = styled.div(({style, theme}) => {
	theme = getDefaultThemeIfNotFound(theme);

	return {
		width: "0.625rem",
		padding: "0.1rem",
		[mq.m]: {
			width: "1.25rem",
		},
		...style
	};
});
// Calendar Event
const CalendarEventContainer = styled(Grid)(({style, theme}) => {
	theme = getDefaultThemeIfNotFound(theme);

	return {
		padding: "0",
		height: "300px",
		overflow: "auto",
		...style
	};
});
const CalendarEventRow = styled(Cell)(({style, theme}) => {
	theme = getDefaultThemeIfNotFound(theme);

	return {
		padding: "0.5rem 0.5rem",
		marginTop: "0.5rem",
		backgroundColor: theme.primary,
		borderRadius: "6px",
		boxShadow: "rgba(20, 20, 20, 0.25) 0px 0.2rem 0.3rem, rgba(20, 20, 20, 0.22) 0px 0.125rem 0.125rem",
		...style
	};
});
const CalendarEventTitle = styled(Cell)(({style, theme}) => {
	theme = getDefaultThemeIfNotFound(theme);

	return {
		padding: "0",
		margin: "0",
		maxWidth: "calc(100% - 7.875rem)",
		"& div": {
			fontSize: "0.9rem",
			overflow: "hidden",
			whiteSpace: "nowrap",
			textOverflow: "ellipsis",
			overflowWrap: "break-word",
			[mq.m]:{
				fontSize: "1.25rem"
			},
		},
		"&:hover": {
			cursor: "pointer"
		},
		[mq.m]: {
			maxWidth: "calc(100% - 11rem)",
		},
		...style
	};
});
const CalendarEventType = styled(Cell)(({style, theme}) => {
	theme = getDefaultThemeIfNotFound(theme);

	return {
		width: "0.875rem",
		paddingRight: "0.25rem",
		[mq.m]:{
			width: "1.25rem"
		},
		...style
	};
});
const CalendarEventTime = styled(Cell)(({style, theme}) => {
	theme = getDefaultThemeIfNotFound(theme);

	return {
		position: "absolute",
		top: 0,
		right: 0,
		maxWidth: "7rem",
		fontSize: "0.7rem",
		[mq.m]:{
			maxWidth: "9.75rem",
			fontSize: "0.975rem"
		},
		...style
	};
});
const CalendarEventDetails = styled(Cell)(({style, theme}) => {
	theme = getDefaultThemeIfNotFound(theme);

	return {
		fontSize: "0.875rem",
		...style
	};
});


const CalendarContainer = styled.div(({style, theme})=>{
	theme = getDefaultThemeIfNotFound(theme);

	return {
		width: "100%",
		overflow: "hidden",
		...style
	};
});
const CalendarMain = styled.div(({style, theme})=>{
	theme = getDefaultThemeIfNotFound(theme);

	return {
		width: "100%",
		...style
	};
});

const Week = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const Month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const MinSwipeDistance = 75;


type CalendarMainViewProps = HTMLAttributes<HTMLDivElement> & {
	year: number;
	month: number;
	date: number;
	onSelected?: (d: number) => void;
	events: CalendarEvent[];
	type?: string;
};
const CalendarMainView = forwardRef<HTMLDivElement, CalendarMainViewProps>(({year, month, date, onSelected, events, type="main"}, ref) => {
	const numOfDays = getNumOfDays(year, month);
	const firstDay = new Date(year, month, 1).getDay();
	const numOfRows = Array.from({length: Math.ceil((numOfDays + firstDay) / 7)}, (_, k) => k);
	let style: any = {
		width: "100%",
		margin: "0",
		padding: "0"
	};
	if(type === "left" || type === "right"){
		style = {
			...style,
			position: "absolute",
			left: type === "left" ? "-100%" : "100%"
		}
	}
	return (<Cell s={12} ref={ref} style={style}>
		<CalendarMain>
			<Cell>
				<WeekRow>
				{
					Week.map(w => <WeekCell key={`vl-calendar-week-${w}`} s={12/7 - 0.01} justifyContent={"center"} text={w} />)
				}
				</WeekRow>
			</Cell>
			{
				numOfRows.map(r => {
					const days = [0, 1, 2, 3, 4, 5, 6].map(i => {
						const d = r * 7 + i + 1 - firstDay;
						return (<DateCell
									key={`vl-calendar-col-${i}`}
									s={12/7 - 0.01}
									className={`${d === date? "selected" : ""} ${d === new Date().getDate() ? "today" : ""}`}
									justifyContent={"center"}
									onClick={()=>{
										if(onSelected){
											onSelected(d);
										}
									}}
								>
							<DateNumber>{d > 0 && d <= numOfDays && d}</DateNumber>
							{
								events.filter((e: CalendarEvent) => isEventInDate(e, new Date(year, month, d)))
								.map((e: CalendarEvent) => e.type || "Other")
								.filter((t: string, i: number, arr: string[]) => arr.indexOf(t) === i)
								.map((t: string) => {
									return (<DateDot key={`vl-calendar-col-${i}-dot-${t}`}>
										<Circle style={{backgroundColor: CalendarEventTypeColor[t], borderRadius: "50%"}}></Circle>
									</DateDot>);
								})
							}
						</DateCell>);
					});
					return (<Cell key={`vl-calendar-row-${r}`}>
						<DateRow justifyContent={"center"}>{days}</DateRow>
					</Cell>);
				})
			}
		</CalendarMain>
	</Cell>);
});

const Calendar: FC<CalendarProps> = ({
	date=new Date().getDate(),
	month=new Date().getMonth(),
	year=new Date().getFullYear(),
	onSelect,
	getEvents
}) => {
	const [dateInternal, setDate] = useState<number>(date);
	const [monthInternal, setMonth] = useState<number>(month);
	const [yearInternal, setYear] = useState<number>(year);
	const [events, setEvents] = useState<CalendarEvent[]>([]);
	const [selectedEvent, setSelectedEvent] = useState<number | null>(null);

	const numOfDays = getNumOfDays(yearInternal, monthInternal);
	const calendarRef = useRef<HTMLDivElement>(null);
	const calendarMonthRef = useRef<HTMLDivElement>(null);
	const calendarPrevMonthRef = useRef<HTMLDivElement>(null);
	const calendarNextMonthRef = useRef<HTMLDivElement>(null);
	const swipeStartRef = useRef<null | number>(null);
	const swipeEndRef = useRef<null | number>(null);

	useEffect(() => {
		if(onSelect){
			onSelect(new Date(yearInternal, monthInternal, dateInternal));
		}
		setSelectedEvent(null);
	}, [dateInternal, monthInternal, yearInternal]);

	useEffect(() => {
		// Call getEvents API
		if(getEvents){
			setEvents(getEvents(new Date(yearInternal, monthInternal)));
		}
	}, [monthInternal]);

	const goToPrevMonth = () => {
		const prevMonth = getPrevMonth(monthInternal);
		const prevYear = getPrevYear(yearInternal, monthInternal);
		setMonth(prevMonth);
		setYear(prevYear);
		if(dateInternal > numOfDays){
			setDate(numOfDays);
		}
	}
	const goToNextMonth = () => {
		const nextMonth = getNextMonth(monthInternal);
		const nextYear = getNextYear(yearInternal, monthInternal);
		setMonth(nextMonth);
		setYear(nextYear);
		if(dateInternal > numOfDays){
			setDate(numOfDays);
		}
	}

	const onTouchStart = (e: TouchEvent) => {
		swipeEndRef.current = null;
		swipeStartRef.current = e.targetTouches[0].clientX;
	}
	const onTouchMove = (e: TouchEvent) => {
		swipeEndRef.current = e.targetTouches[0].clientX;
		const swipeDist = (swipeEndRef?.current || 0) - (swipeStartRef?.current || 0);
		if(calendarRef.current){
			calendarRef.current.style.transform = `translateX(${swipeDist}px)`;
		}
		if(calendarMonthRef.current){
			calendarMonthRef.current.style.transform = `translateX(${swipeDist}px)`;
		}
		if(calendarPrevMonthRef.current){
			calendarPrevMonthRef.current.style.transform = `translateX(${swipeDist}px)`;
		}
		if(calendarNextMonthRef.current){
			calendarNextMonthRef.current.style.transform = `translateX(${swipeDist}px)`;
		}
	}
	const onTouchEnd = (_: TouchEvent) => {
		if(!swipeStartRef.current || !swipeEndRef.current){
			return;
		}
		const distance = swipeStartRef.current - swipeEndRef.current;
		// Swipe Left
		if(distance > MinSwipeDistance){
			goToNextMonth();
		}
		// Swipe Right
		else if(distance < -1*MinSwipeDistance){
			goToPrevMonth();
		}
		if(calendarRef.current){
			calendarRef.current.style.transform = `translateX(0px)`;
		}
		if(calendarMonthRef.current){
			calendarMonthRef.current.style.transform = `translateX(0px)`;
		}
		if(calendarPrevMonthRef.current){
			calendarPrevMonthRef.current.style.transform = `translateX(0px)`;
		}
		if(calendarNextMonthRef.current){
			calendarNextMonthRef.current.style.transform = `translateX(0px)`;
		}
	}

	return <CalendarContainer
		className="no-select"
		onTouchStart={onTouchStart}
		onTouchMove={onTouchMove}
		onTouchEnd={onTouchEnd}
	>
		<Cell s={12} justifyContent={"center"}>
			{yearInternal}
		</Cell>
		<Cell s={12}>
			<CalendarTitle justifyContent={"space-between"}>
				<CalendarTitleArrow onClick={goToPrevMonth}>&#171;</CalendarTitleArrow>
				<CalendarTitleMonth ref={calendarMonthRef} justifyContent={"center"}>{Month[monthInternal]}</CalendarTitleMonth>
				<CalendarTitleArrow onClick={goToNextMonth}>&#187;</CalendarTitleArrow>
			</CalendarTitle>
		</Cell>
		<Cell s={12} alignItems={"flex-start"} style={{overflowInline: "hidden", position: "relative"}}>
			<CalendarMainView
				year={getPrevYear(yearInternal, monthInternal)}
				month={getPrevMonth(monthInternal)}
				date={dateInternal}
				events={getEvents?.(new Date(getPrevYear(yearInternal, monthInternal), getPrevMonth(monthInternal))) || []}
				type={"left"}
				ref={calendarPrevMonthRef}
			/>
			<CalendarMainView
				year={yearInternal}
				month={monthInternal}
				date={dateInternal}
				onSelected={(d: number) => setDate(d)}
				events={events}
				ref={calendarRef}
			/>
			<CalendarMainView
				year={getNextYear(yearInternal, monthInternal)}
				month={getNextMonth(monthInternal)}
				date={dateInternal}
				events={getEvents?.(new Date(getNextYear(yearInternal, monthInternal), getNextMonth(monthInternal))) || []}
				ref={calendarNextMonthRef}
				type={"right"}
			/>
		</Cell>
		<Cell s={12}>
			<CalendarEventContainer alignContent={"flex-start"}>
				{
					events.filter((e: CalendarEvent) => isEventInDate(e, new Date(yearInternal, monthInternal, dateInternal)))
						.sort(eventComparator)
						.map((e: CalendarEvent, i: number) => {
						return (<CalendarEventRow
								s={12}
								key={`event-${e.name}`} >
							<Grid style={{padding: "0", margin: "0", position: "relative"}}>
								<CalendarEventType>
									<Circle style={{backgroundColor: CalendarEventTypeColor[e.type || "Other"], borderRadius: "50%"}}></Circle>
								</CalendarEventType>
								<CalendarEventTitle onClick={() => {
									setSelectedEvent(prev => {
										if(prev === i){
											return null;
										}
										return i;
									})
								}}>
									<div>
									{e.name}
									</div>
								</CalendarEventTitle>
								<CalendarEventTime>{getEventTimeString(e.from, e.to)}</CalendarEventTime>
								{
									i === selectedEvent  &&
									<CalendarEventDetails s={12}>
										test
									</CalendarEventDetails>
								}
							</Grid>
						</CalendarEventRow>);
					})
				}
			</CalendarEventContainer>
		</Cell>
	</CalendarContainer>
}

export default Calendar;
