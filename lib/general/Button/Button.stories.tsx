import { ComponentProps } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import { Grid, Cell } from '../Grid/Grid';
import Button from './Button';
import { getTheme } from '../../theme';

const meta: Meta<typeof Button> = {
	title: 'VictorLam/Button',
	component: Button
};

export default meta;

type Story = StoryObj<typeof Button>;

export const SimpleButton: Story = {
	args: {
	},
	render: (args: ComponentProps<typeof Button>) => {
		const InternalComp = (variant: string, text: string) => {
			return <Cell><Button variant={variant} {...args} >{text}</Button></Cell>
		};
		return (<>
			<div style={{width: "400px"}}>
				<p>Light Theme</p>
				<Grid justifyContent={"space-between"}>
					{["info", "success", "warning", "error"].map(v => InternalComp(v, v[0].toUpperCase() + v.slice(1)))}
				</Grid>
			</div>
			<ThemeProvider theme={getTheme("dark")}>
				<div style={{width: "400px"}}>
					<p>Dark Theme</p>
					<Grid justifyContent={"space-between"}>
						{["info", "success", "warning", "error"].map(v => InternalComp(v, v[0].toUpperCase() + v.slice(1)))}
					</Grid>
				</div>
			</ThemeProvider>
		</>);
	}
}

export const ButtonWithEffects: Story = {
	args: {
	},
	render: (args: ComponentProps<typeof Button>) => {
		const InternalComp = (variant: string, text: string, effect: string) => {
			return <Button variant={variant} effect={effect} {...args} >{text}</Button>
		};
		return (<>
			<div style={{width: "400px"}}>
				<p>Enlarge</p>
				<Grid justifyContent={"space-between"}>
					{["info", "success", "warning", "error"].map(v => InternalComp(v, v[0].toUpperCase() + v.slice(1), "enlarge"))}
				</Grid>
			</div>
			<div style={{width: "400px"}}>
				<p>Transparent</p>
				<Grid justifyContent={"space-between"}>
					{["info", "success", "warning", "error"].map(v => InternalComp(v, v[0].toUpperCase() + v.slice(1), "transparent"))}
				</Grid>
			</div>
			<div style={{width: "400px"}}>
				<p>Solidify</p>
				<Grid justifyContent={"space-between"}>
					{["info", "success", "warning", "error"].map(v => InternalComp(v, v[0].toUpperCase() + v.slice(1), "solidify"))}
				</Grid>
			</div>
		</>);
	}
}
