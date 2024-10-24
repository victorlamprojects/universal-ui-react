import React, { useState, ComponentProps } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import { GlobalStyle, getTheme } from "../../../theme";

import { Header, HeaderItem } from "./Header";
import { HoverEffect, ActiveEffect } from "../../../config/constants";

const meta: Meta<typeof Header> = {
    title: "VictorLam/General/Layout/Header",
    component: Header,
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

type Story = StoryObj<typeof Header>;

const HeaderWrapper = ({
  hoverEffect,
  activeEffect,
  args,
}) => {
  const [activeItem, setActiveItem] = useState(0);
  return (
	<div
	  key={`dark-header-${hoverEffect}-${Math.random()}`}
	  style={{
		width: "100%",
		height: "200px",
		position: "relative",
		margin: "0",
	  }}
	>
	  <Header {...args} hover={hoverEffect} active={activeEffect}>
		{["Item A", "Item B", "Item C"].map((item, i) => (
		  <HeaderItem
			key={`dark-header-item-${i}-${Math.random()}`}
			className={`${activeItem === i ? "active" : ""}`}
			onClick={() => setActiveItem(i)}
		  >
			{item}
		  </HeaderItem>
		))}
	  </Header>
	  <div>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
		eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
		ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
		aliquip ex ea commodo consequat. Duis aute irure dolor in
		reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
		pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
		culpa qui officia deserunt mollit anim id est laborum.
	  </div>
	</div>
  );
};

export const SimpleHeader: Story = {
  args: {},
  render: (args: ComponentProps<typeof Header>) => {
    return (
      <>
          {["enlarge", "opaque", "solidify"].map((e) =>
            (<HeaderWrapper hoverEffect={e as HoverEffect} activeEffect={ e as ActiveEffect} {...args}/>),
          )}
      </>
    );
  },
};

