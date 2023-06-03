import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import Icon from './Icon';
import Circle from '../Container/Circle';

const meta: Meta<typeof Icon> = {
	title: 'VictorLam/Icon',
	component: Icon,
	decorators: [
		(Story) => (<div style={{width: "10em", height: "10em"}} ><Story /></div>)
	]
};

export default meta;

type Story = StoryObj<typeof Icon>;

export const SquareIcon: Story = {
	args: {
		width: "100%",
		height: "100%",
		src: "https://picsum.photos/200"
	}
}

export const CircleIcon: Story = {
	args: {
		width: "100%",
		height: "100%",
		src: "https://picsum.photos/200"
	},
	decorators: [
		(Story) => (<Circle><Story /></Circle>)
	]
}
