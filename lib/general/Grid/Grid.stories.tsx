import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Grid, Cell } from './Grid';

const meta: Meta<typeof Grid> = {
	title: 'VictorLam/General/Grid',
	component: Grid
};

export default meta;

type Story = StoryObj<typeof Grid>;

export const FullWhenScreenIsSmall: Story = {
	args: {
		children: (<>
			<Cell s={12} m={4} style={{backgroundColor: "red"}}>1</Cell>
			<Cell s={12} m={4} style={{backgroundColor: "blue"}}>2</Cell>
			<Cell s={12} m={4} style={{backgroundColor: "green"}}>3</Cell>
		</>)
	}
}

export const TwoToOneToOne: Story = {
	args: {
		children: (<>
			<Cell s={6} style={{backgroundColor: "red"}}>1</Cell>
			<Cell s={3} style={{backgroundColor: "blue"}}>2</Cell>
			<Cell s={3} style={{backgroundColor: "green"}}>3</Cell>
		</>)
	}
}
