import React, { useState, ComponentProps } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import Collapsible from './Collapsible';
import Block from '../Container/Block';
import { getTheme } from '../../theme/theme';

const meta: Meta<typeof Collapsible> = {
	title: 'VictorLam/Container',
	component: Collapsible
};

export default meta;

type Story = StoryObj<typeof Collapsible>;

export const CollapsibleContainer: Story = {
	args: {
		title: "Collapsible Text"
	},
	render: (args: ComponentProps<typeof Collapsible>) => {
		return (<div>
			<ThemeProvider theme={getTheme("light")}>
				<Block>
					<Collapsible {...args}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non purus lorem. Mauris gravida eu ante nec semper. Morbi ullamcorper magna vitae quam iaculis pretium. Vivamus feugiat tincidunt sem, et lacinia metus. Nulla a pulvinar augue. Sed eu turpis nec est tempus imperdiet vel vitae tortor. Quisque fringilla, tortor at semper gravida, erat dui pulvinar nulla, viverra posuere metus felis sit amet augue. Aenean id fermentum lectus. Curabitur feugiat posuere leo eget venenatis. Vivamus eu ligula nec elit porta maximus. Vivamus rhoncus sollicitudin ullamcorper. Curabitur ut feugiat arcu, eu dictum justo. Praesent luctus odio et libero dictum volutpat. Curabitur suscipit varius facilisis. Etiam ex diam, sollicitudin sit amet fringilla et, pellentesque quis orci. Nunc pulvinar tortor a facilisis egestas.
					</Collapsible>
				</Block>
			</ThemeProvider>
			<br/>
			<br/>
			<br/>
			<ThemeProvider theme={getTheme("dark")}>
				<Block>
					<Collapsible {...args}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non purus lorem. Mauris gravida eu ante nec semper. Morbi ullamcorper magna vitae quam iaculis pretium. Vivamus feugiat tincidunt sem, et lacinia metus. Nulla a pulvinar augue. Sed eu turpis nec est tempus imperdiet vel vitae tortor. Quisque fringilla, tortor at semper gravida, erat dui pulvinar nulla, viverra posuere metus felis sit amet augue. Aenean id fermentum lectus. Curabitur feugiat posuere leo eget venenatis. Vivamus eu ligula nec elit porta maximus. Vivamus rhoncus sollicitudin ullamcorper. Curabitur ut feugiat arcu, eu dictum justo. Praesent luctus odio et libero dictum volutpat. Curabitur suscipit varius facilisis. Etiam ex diam, sollicitudin sit amet fringilla et, pellentesque quis orci. Nunc pulvinar tortor a facilisis egestas.
					</Collapsible>
				</Block>
			</ThemeProvider>
			<br/>
			<br/>
			<br/>
			<ThemeProvider theme={getTheme("dark")}>
				<Block>
					<Collapsible toggle={true} {...args}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non purus lorem. Mauris gravida eu ante nec semper. Morbi ullamcorper magna vitae quam iaculis pretium. Vivamus feugiat tincidunt sem, et lacinia metus. Nulla a pulvinar augue. Sed eu turpis nec est tempus imperdiet vel vitae tortor. Quisque fringilla, tortor at semper gravida, erat dui pulvinar nulla, viverra posuere metus felis sit amet augue. Aenean id fermentum lectus. Curabitur feugiat posuere leo eget venenatis. Vivamus eu ligula nec elit porta maximus. Vivamus rhoncus sollicitudin ullamcorper. Curabitur ut feugiat arcu, eu dictum justo. Praesent luctus odio et libero dictum volutpat. Curabitur suscipit varius facilisis. Etiam ex diam, sollicitudin sit amet fringilla et, pellentesque quis orci. Nunc pulvinar tortor a facilisis egestas.
					</Collapsible>
				</Block>
			</ThemeProvider>
		</div>)
	}
}

