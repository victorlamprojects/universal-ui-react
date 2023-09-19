import React, { ComponentProps, useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import { MultiTabLayoutType, MultiTabLayout, MultiTab } from './MultiTabLayout';
import Block from '../Container/Block';
import Circle from '../Container/Circle';
import Icon from '../Icon/Icon';
import { Grid, Cell } from '../Grid/Grid';
import Button from '../Button/Button';
import GlobalStyle from '../../theme/GlobalStyle';
import { getTheme } from '../../theme/theme';
import { useNavigate, useLocation } from 'react-router-dom';

const meta: Meta<typeof MultiTabLayout> = {
	title: 'VictorLam/Layout',
	component: MultiTabLayout
};

export default meta;

type Story = StoryObj<typeof MultiTabLayout>;

const Tab1 = () => (<Block>Tab 1 Content</Block>);
const Tab2 = () => (<Block>Tab 2 Content</Block>);
const Tab3 = () => (<Block>Tab 3 Content</Block>);
const Tab4 = () => (<Block>Tab 4 Content</Block>);

export const MultiTabLayoutWithDarkTheme: Story = {
	args: {
	},
	render: (args: ComponentProps<typeof MultiTabLayout>) => {
		return (
			<ThemeProvider theme={getTheme("dark")}>
				<GlobalStyle />
				<MultiTabLayout {...args}>
					<MultiTab path={"/"} component={<Tab1 />}>
						Tab1
					</MultiTab>
					<MultiTab path={"/tab2"} component={<Tab2 />}>
						<Grid>
							<Cell s={12} style={{justifyContent: "center"}}>
								<Icon src="https://picsum.photos/200" />
							</Cell>
							<Cell s={12} style={{justifyContent: "center"}}>
								Tab2
							</Cell>
						</Grid>
					</MultiTab>
					<MultiTab path={"/tab3"} component={<Tab3 />}>
						<Grid>
							<Cell s={12} style={{justifyContent: "center"}}>
								<Icon src="https://picsum.photos/200" />
							</Cell>
						</Grid>
					</MultiTab>
					<MultiTab path={"/tab4"} component={<Tab4 />}>
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

export const SolidMultiTabLayoutWithDarkTheme: Story = {
	args: {
		type: MultiTabLayoutType.Bar
	},
	render: MultiTabLayoutWithDarkTheme.render
}

// Light Theme
export const MultiTabLayoutWithLightTheme: Story = {
	args: {
	},
	render: (args: ComponentProps<typeof MultiTabLayout>) => {
		return (
			<ThemeProvider theme={getTheme("light")}>
				<GlobalStyle />
				<MultiTabLayout {...args}>
					<MultiTab path={"/"} component={<Tab1 />}>
						Tab1
					</MultiTab>
					<MultiTab path={"/tab2"} component={<Tab2 />}>
						<Grid>
							<Cell s={12} style={{justifyContent: "center"}}>
								<Icon src="https://picsum.photos/200" />
							</Cell>
							<Cell s={12} style={{justifyContent: "center"}}>
								Tab2
							</Cell>
						</Grid>
					</MultiTab>
					<MultiTab path={"/tab3"} component={<Tab3 />}>
						<Grid>
							<Cell s={12} style={{justifyContent: "center"}}>
								<Icon src="https://picsum.photos/200" />
							</Cell>
						</Grid>
					</MultiTab>
					<MultiTab path={"/tab4"} component={<Tab4 />}>
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

export const SolidMultiTabLayoutWithLightTheme: Story = {
	args: {
		type: MultiTabLayoutType.Bar
	},
	render: MultiTabLayoutWithLightTheme.render
}

const LoginPage = ({loginCallback})=>{
	const navigate = useNavigate();
	const location = useLocation();

	const origin = location.state?.from || "/";

	const login = ()=>{
		loginCallback();
		navigate(origin, { replace: true });
	}

	return (<Button onClick={()=>login()}>Authenticate</Button>);
}
export const LayoutWithAuthentication: Story = {
	args: {
		type: MultiTabLayoutType.Bar,
		authPath: "/login"
	},
	render: (args: ComponentProps<typeof MultiTabLayout>) => {
		const [login, setLogin] = useState(false);
		return (
			<ThemeProvider theme={getTheme("dark")}>
				<GlobalStyle />
				<MultiTabLayout {...args} isAuth={()=>login} authComponent={<LoginPage loginCallback={()=>setLogin(true)} />}>
					<MultiTab path={"/"} component={<Tab1 />} auth={true}>
						Protected Tab
					</MultiTab>
					<MultiTab path={"/tab2"} component={<Tab2 />} auth={true}>
						<Grid>
							<Cell s={12} style={{justifyContent: "center"}}>
								<Icon src="https://picsum.photos/200" />
							</Cell>
							<Cell s={12} style={{justifyContent: "center"}}>
								Protected Tab2
							</Cell>
						</Grid>
					</MultiTab>
					<MultiTab path={"/tab3"} component={<Tab3 />}>
						<Grid>
							<Cell s={12} style={{justifyContent: "center"}}>
								<Icon src="https://picsum.photos/200" />
							</Cell>
						</Grid>
					</MultiTab>
					<MultiTab path={"/tab4"} component={<Tab4 />}>
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
