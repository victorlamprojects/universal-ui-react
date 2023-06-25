
import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import { MultiTabLayout, MultiTab } from './MultiTabLayout';
import Block from '../Container/Block';
import Circle from '../Container/Circle';
import Icon from '../Icon/Icon';
import { Grid, Cell } from '../Grid/Grid';
import GlobalStyle from '../../theme/GlobalStyle';
import { getTheme } from '../../theme/theme';

const meta: Meta<typeof MultiTabLayout> = {
	title: 'VictorLam/Layout',
	component: MultiTabLayout
};

export default meta;

type Story = StoryObj<typeof MultiTabLayout>;

const Tab1 = () => {
	return (<Block>
		Tab 1 Content
	</Block>);
}

const Tab2 = () => {
	return (<Block>
		Tab 2 Content
	</Block>);
}
const Tab3 = () => {
	return (<Block>
		Tab 3 Content
	</Block>);
}
const Tab4 = () => {
	return (<Block>
		Tab 4 Content
	</Block>);
}

export const NormalMultiTabLayoutWithDarkTheme: Story = {
	args: {
	},
	render: () => {
		return (
			<ThemeProvider theme={getTheme("dark")}>
				<GlobalStyle />
				<MultiTabLayout>
					<MultiTab tabContent={<Tab1 />}>
						Tab1
					</MultiTab>
					<MultiTab tabContent={<Tab2 />}>
						<Grid>
							<Cell s={12} style={{justifyContent: "center"}}>
								<Icon src="https://picsum.photos/200" />
							</Cell>
							<Cell s={12} style={{justifyContent: "center"}}>
								Tab2
							</Cell>
						</Grid>
					</MultiTab>
					<MultiTab tabContent={<Tab3 />}>
						<Grid>
							<Cell s={12} style={{justifyContent: "center"}}>
								<Icon src="https://picsum.photos/200" />
							</Cell>
						</Grid>
					</MultiTab>
					<MultiTab tabContent={<Tab4 />}>
						<Grid>
							<Cell s={12} style={{justifyContent: "center"}}>
								<Circle size={"32px"}>
									<Icon src="https://picsum.photos/200" />
								</Circle>
							</Cell>
							<Cell s={12} style={{justifyContent: "center"}}>
								Tab4
							</Cell>
						</Grid>
					</MultiTab>
				</MultiTabLayout>
			</ThemeProvider>
		)
	}
}

export const NormalMultiTabLayoutWithLightTheme: Story = {
	args: {
	},
	render: () => {
		return (
			<ThemeProvider theme={getTheme("light")}>
				<GlobalStyle />
				<MultiTabLayout>
					<MultiTab tabContent={<Tab1 />}>
						Tab1
					</MultiTab>
					<MultiTab tabContent={<Tab2 />}>
						<Grid>
							<Cell s={12} style={{justifyContent: "center"}}>
								<Icon src="https://picsum.photos/200" />
							</Cell>
							<Cell s={12} style={{justifyContent: "center"}}>
								Tab2
							</Cell>
						</Grid>
					</MultiTab>
					<MultiTab tabContent={<Tab3 />}>
						<Grid>
							<Cell s={12} style={{justifyContent: "center"}}>
								<Icon src="https://picsum.photos/200" />
							</Cell>
						</Grid>
					</MultiTab>
					<MultiTab tabContent={<Tab4 />}>
						<Grid>
							<Cell s={12} style={{justifyContent: "center"}}>
								<Circle size={"32px"}>
									<Icon src="https://picsum.photos/200" />
								</Circle>
							</Cell>
							<Cell s={12} style={{justifyContent: "center"}}>
								Tab4
							</Cell>
						</Grid>
					</MultiTab>
				</MultiTabLayout>
			</ThemeProvider>
		)
	}
}
