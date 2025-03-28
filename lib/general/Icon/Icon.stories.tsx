import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import { GlobalStyle, getTheme } from "../../theme";

import Icon from "./Icon";
import Circle from "../Container/Circle";
import Square from "../Container/Square";

const meta: Meta<typeof Icon> = {
    title: "VictorLam/General/Icon",
    component: Icon,
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

type Story = StoryObj<typeof Icon>;

export const SquareIcon: Story = {
  args: {
    width: "100%",
    height: "100%",
    src: "https://picsum.photos/200",
  },
  decorators: [
    (Story) => (
      <Square size={"10em"}>
        <Story />
      </Square>
    ),
  ],
};

export const CircleIcon: Story = {
  args: {
    width: "100%",
    height: "100%",
    src: "https://picsum.photos/200",
  },
  decorators: [
    (Story) => (
      <Circle size={"10em"}>
        <Story />
      </Circle>
    ),
  ],
};
