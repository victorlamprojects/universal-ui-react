import React, { ComponentProps } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../../theme/GlobalStyle';
import Block from '../Container/Block';
import Table from './Table';
import { getTheme } from '../../theme/theme';

const meta: Meta<typeof Table> = {
	title: 'VictorLam/Table',
	component: Table
};

export default meta;

type Story = StoryObj<typeof Table>;

export const TableWithDarkTheme: Story = {
	args: {
		data: [
			{"name": "Victor", "age": 24, "job": "developer", "salary": 10000.0, "hobbies": "coding"},
			{"name": "Jasmine", "age": 25, "job": "accountant", "salary": 12000.5, "hobbies": "reading"},
			{"name": "Jacky", "age": 35, "job": "chef", "salary": 30000.0, "hobbies": "cooking"},
			{"name": "Rose", "age": 33, "job": "teacher", "salary": 25000.5, "hobbies": "hiking"},
			{"name": "James", "age": 27, "job": "youtuber", "salary": 10000000.52, "hobbies": "photography"}
		],
		columnDefs: [
			{"key": "name", "title": "Name"},
			{"key": "age", "title": "Age"},
			{"key": "job", "title": "Job"},
			{"key": "salary", "title": "Income"},
			{"key": "hobbies", "title": "Hobbies"}
		]
	},
	render: (args: ComponentProps<typeof Table>) => {
		return (<>
			<ThemeProvider theme={getTheme("dark")}>
				<GlobalStyle />
				Normal Table
				<Block>
					<Table {...args} />
				</Block>
				Bordered Table
				<Block>
					<Table bordered={true} {...args} />
				</Block>
				Striped Table
				<Block>
					<Table striped={true} {...args} />
				</Block>
			</ThemeProvider>
		</>)
	}
}

export const TableWithLightTheme: Story = {
	args: {
		...TableWithDarkTheme.args
	},
	render: (args: ComponentProps<typeof Table>) => {
		return (<>
			<ThemeProvider theme={getTheme("light")}>
				<GlobalStyle />
				Normal Table
				<Block>
					<Table {...args}/>
				</Block>
				Bordered Table
				<Block>
					<Table bordered={true} {...args} />
				</Block>
				Striped Table
				<Block>
					<Table striped={true} {...args} />
				</Block>
			</ThemeProvider>
		</>)
	}
}
