import React from 'react';
import { Story, Meta } from '@storybook/react';

import Icon from './Icon';
import Circle from '../Container/Circle';

export default {
  title: 'VictorLam/Icon',
  component: Icon,
  argTypes: {}
} as Meta<typeof Icon>;


const Template: Story<typeof Icon> = (args: any) => <Icon {...args} />;

export const SquareIcon = Template.bind({});
SquareIcon.args = {
	width: "10em",
	height: "10em",
	src: "https://picsum.photos/200"
}

const Template2: Story<typeof Icon> = (args: any) => (<div style={{width: "10em", height: "10em"}} ><Circle><Icon {...args} /></Circle></div>);
export const CircleIcon = Template2.bind({});
CircleIcon.args = {
	width: "100%",
	height: "100%",
	src: "https://picsum.photos/200"
}
