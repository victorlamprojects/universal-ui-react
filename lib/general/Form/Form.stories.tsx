import React, { ComponentProps } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import Block from '../Container/Block';
import { Form, FormGroup, FormTitle, FormRow, FormLabel, FormTextInput } from './Form';
import GlobalStyle from '../../theme/GlobalStyle';
import { getTheme } from '../../theme/theme';

const meta: Meta<typeof Form> = {
	title: 'VictorLam/Form',
	component: Form
};

export default meta;

type Story = StoryObj<typeof Form>;

const getFormContent = (theme: string, args: any) => (<ThemeProvider theme={getTheme(theme)}>
	<GlobalStyle />
	<Block>
		<Form {...args}>
			<FormTitle>Dark Form</FormTitle>
			<FormGroup name={"Account"} >
				<FormRow>
					<FormLabel htmlFor={"name"}>Name</FormLabel>
					<FormTextInput name={"name"} defaultValue={"Victor Lam"} />
				</FormRow>
				<FormRow>
					<FormLabel htmlFor={"password"}>Password</FormLabel>
					<FormTextInput name={"password"} type="password" />
				</FormRow>
			</FormGroup>
			<FormGroup name={"Background Information"} >
				<FormRow>
					<FormLabel htmlFor={"email"} >Email</FormLabel>
					<FormTextInput name={"email"} disabled defaultValue={"lamwingtok@gmail.com"} />
				</FormRow>
				<FormRow>
					<FormLabel htmlFor={"age"}>Age</FormLabel>
					<FormTextInput name={"age"} />
				</FormRow>
			</FormGroup>
		</Form>
	</Block>
</ThemeProvider>);

export const NormalForm: Story = {
	args: {
	},
	render: (args: ComponentProps<typeof Form>) => {
		return (<>
			{ getFormContent("light", args) }
			{ getFormContent("dark", args) }
		</>)
	}
}
