import { ComponentProps } from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Grid, Cell } from '../Grid/Grid';
import Button from './Button';

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
		const InternalComp = (theme: string, variant: string, text: string) => {
			return <Button theme={theme} variant={variant} {...args} >{text}</Button>
		};
		return (<>
			<div style={{width: "400px"}}>
				<p>Light Theme</p>
				<Grid justifyContent={"space-between"}>
					{["info", "success", "warning", "error"].map(v => InternalComp("light", v, v[0].toUpperCase() + v.slice(1)))}
				</Grid>
			</div>
			<div style={{width: "400px"}}>
				<p>Dark Theme</p>
				<Grid justifyContent={"space-between"}>
					{["info", "success", "warning", "error"].map(v => InternalComp("dark", v, v[0].toUpperCase() + v.slice(1)))}
				</Grid>
			</div>
		</>);
	}
}

export const ButtonWithEffects: Story = {
	args: {
		theme: "light"
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
