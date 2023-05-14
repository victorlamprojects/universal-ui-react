import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Grid, Cell } from './Grid';

export default {
  title: 'VictorLam/Grid',
  component: Grid,
  argTypes: {}
} as Meta<typeof Grid>;


const Template: Story<typeof Grid> = (args: any) => <Grid {...args} />;

export const FullWhenScreenIsSmall = Template.bind({});
FullWhenScreenIsSmall.args = {
	children: (<>
		<Cell s={12} m={4} style={{backgroundColor: "red"}}>1</Cell>
		<Cell s={12} m={4} style={{backgroundColor: "blue"}}>2</Cell>
		<Cell s={12} m={4} style={{backgroundColor: "green"}}>3</Cell>
	</>)
}

export const TwoToOneToOne = Template.bind({});
TwoToOneToOne.args = {
	children: (<>
		<Cell s={6} style={{backgroundColor: "red"}}>1</Cell>
		<Cell s={3} style={{backgroundColor: "blue"}}>2</Cell>
		<Cell s={3} style={{backgroundColor: "green"}}>3</Cell>
	</>)
}
