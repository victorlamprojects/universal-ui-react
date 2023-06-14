import { useState, ComponentProps } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import { Header, HeaderItem } from './Header';
import { getTheme } from '../../theme/theme';
import GlobalStyle from '../../theme/GlobalStyle';
import { HoverEffect, ActiveEffect } from '../../config/constants';

const meta: Meta<typeof Header> = {
	title: 'VictorLam/Header',
	component: Header
};

export default meta;

type Story = StoryObj<typeof Header>;

export const HeaderWithDarkTheme: Story = {
	args: {
	},
	render: (args: ComponentProps<typeof Header>) => {
		const InternalComp = (hoverEffect: HoverEffect, activeEffect: ActiveEffect, _args: ComponentProps<typeof Header>) => {
			const [activeItem, setActiveItem] = useState(0);
			return (<div>
				<div style={{width: "100%", height: "200px", position: "relative", margin: "0"}}>
						<Header {..._args} hover={hoverEffect} active={activeEffect} >
							{
								["Item A", "Item B", "Item C"].map((item, i) => (
									<HeaderItem className={`${activeItem === i ? "active" : ""}`} onClick={()=>setActiveItem(i)}>{item}</HeaderItem>
								))
							}
						</Header>
						<div>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
						</div>
				</div>
			</div>)
		};
		return (<>
			<ThemeProvider theme={getTheme("dark")}>
			<GlobalStyle />
			{ ["enlarge", "opaque", "solidify"].map( e => InternalComp(e as HoverEffect, e as ActiveEffect, args) ) }
			</ThemeProvider>
		</>)
	}
}

export const HeaderWithLightTheme: Story = {
	args: {
	},
	render: (args: ComponentProps<typeof Header>) => {
		const InternalComp = (hoverEffect: HoverEffect, activeEffect: ActiveEffect, _args: ComponentProps<typeof Header>) => {
			const [activeItem, setActiveItem] = useState(0);
			return (<div>
				<div style={{width: "100%", height: "200px", position: "relative", margin: "0"}}>
						<Header {..._args} hover={hoverEffect} active={activeEffect} >
							{
								["Item A", "Item B", "Item C"].map((item, i) => (
									<HeaderItem className={`${activeItem === i ? "active" : ""}`} onClick={()=>setActiveItem(i)}>{item}</HeaderItem>
								))
							}
						</Header>
						<div>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
						</div>
				</div>
			</div>)
		};
		return (<>
			<ThemeProvider theme={getTheme("light")}>
			<GlobalStyle />
			{ ["enlarge", "opaque", "solidify"].map( e => InternalComp(e as HoverEffect, e as ActiveEffect, args) ) }
			</ThemeProvider>
		</>)
	}
}
