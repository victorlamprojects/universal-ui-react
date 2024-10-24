import React, { ComponentProps } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import { GlobalStyle, getTheme } from "../../theme";

import Block from "../../general/Container/Block";
import Calendar from "./Calendar";
import { CalendarEvent } from "./Calendar.type";

const meta: Meta<typeof Calendar> = {
    title: "VictorLam/Widgets/Calendar",
    component: Calendar,
	decorators: [
		withThemeFromJSXProvider({
			themes: {
				light: getTheme('light'),
				dark: getTheme('dark'),
			},
			defaultTheme: 'light',
			Provider: ThemeProvider,
			GlobalStyles: GlobalStyle,
		}),
	],
};

export default meta;

type Story = StoryObj<typeof Calendar>;

const Events: CalendarEvent[] = [
  {
    name: "Daily Standup",
    type: "Work",
    from: new Date(
      new Date().getFullYear(),
      new Date().getMonth(),
      new Date().getDate() - 1,
    ),
  },
  {
    name: "Gym",
    type: "Exercise",
    from: new Date(
      new Date().getFullYear(),
      new Date().getMonth(),
      new Date().getDate() - 1,
    ),
  },
  {
    name: "Singing",
    type: "Learning",
    from: new Date(
      new Date().getFullYear(),
      new Date().getMonth(),
      new Date().getDate(),
    ),
  },
  {
    name: "Swimming",
    type: "Exercise",
    from: new Date(
      new Date().getFullYear(),
      new Date().getMonth(),
      new Date().getDate(),
      15,
    ),
    to: new Date(
      new Date().getFullYear(),
      new Date().getMonth(),
      new Date().getDate(),
      17,
    ),
  },
  {
    name: "Lunch with Tommy Cheung ABCDEFG HIGJk DSFJlk DK",
    type: "Personal",
    from: new Date(
      new Date().getFullYear(),
      new Date().getMonth(),
      new Date().getDate(),
      12,
    ),
    to: new Date(
      new Date().getFullYear(),
      new Date().getMonth(),
      new Date().getDate(),
      13,
    ),
  },
  {
    name: "Apply for Visa",
    type: "Personal",
    from: new Date(
      new Date().getFullYear(),
      new Date().getMonth(),
      new Date().getDate(),
      12,
    ),
    to: new Date(
      new Date().getFullYear(),
      new Date().getMonth(),
      new Date().getDate(),
      13,
    ),
  },
];

export const SimpleCalendar: Story = {
  args: {
    getEvents: (d: Date) => {
      return Events;
    },
  },
  render: (args: ComponentProps<typeof Calendar>) => {
    return (
	  <Block style={{ width: "100%" }}>
		<p>Simple Calendar</p>
		<Calendar {...args} />
	  </Block>
    );
  },
};
