import React, { ComponentProps } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import Block from '../Container/Block';
import { Form, FormGroup, FormTitle, FormRow, FormLabel, FormTextInput, FormDateInput } from './Form';
import ConfiguredForm from './ConfiguredForm';
import GlobalStyle from '../../theme/GlobalStyle';
import { getTheme } from '../../theme/theme';

const meta: Meta<typeof Form> = {
	title: 'VictorLam/Form',
	component: Form
};

export default meta;

type Story = StoryObj<typeof Form>;
type ConfiguredStory = StoryObj<typeof ConfiguredForm>;

const getFormContent = (theme: string, args: any) => (<ThemeProvider theme={getTheme(theme)}>
	<GlobalStyle />
	<Block>
		<Form {...args}>
			<FormTitle>{theme.charAt(0).toUpperCase()+theme.slice(1)} Form</FormTitle>
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
					<FormLabel htmlFor={"email"}>Email</FormLabel>
					<FormTextInput name={"email"} disabled type={"email"} defaultValue={"lamwingtok@gmail.com"} />
				</FormRow>
				<FormRow>
					<FormLabel htmlFor={"hobbies"}>Hobbies</FormLabel>
					<FormTextInput name={"hobbies"} />
				</FormRow>
				<FormRow>
					<FormLabel htmlFor={"birth-date"}>Date of Birth</FormLabel>
					<FormDateInput name={"birth-date"} datetimeType={"date-only"} />
				</FormRow>
			</FormGroup>
		</Form>
	</Block>
</ThemeProvider>);

export const SimpleForm: Story = {
	args: {
	},
	render: (args: ComponentProps<typeof Form>) => {
		return (<>
			{ getFormContent("light", args) }
			{ getFormContent("dark", args) }
		</>)
	}
}
export const SimpleConfiguredForm: ConfiguredStory = {
	args: {
		onSubmit: (d) => alert(d),
		configuration: {
			title: "Configured Form",
			content: {
				"Account": {
					group: true,
					content: {
						"name": {
							type: "text",
							label: "Name",
							defaultValue: "Victor Lam"
						},
						"password": {
							type: "password",
							label: "Password"
						}
					}
				},
				"Background Information": {
					group: true,
					content: {
						"Basic": {
							group: true,
							content: {
								"email": {
									type: "email",
									label: "Email",
									disabled: true,
									defaultValue: "lamwingtok@gmail.com"
								}

							}
						},
						"Additional": {
							group: true,
							content: {
								"hobbies": {
									type: "text",
									label: "Hobbies"
								},
								"dob": {
									type: "date",
									label: "Date of Birth",
									datetimeType: "date-only"
								}
							}
						}
					}
				}
			}
		}
	},
	render: (args: ComponentProps<typeof ConfiguredForm>) => {
		return (<>
			{
				<ThemeProvider theme={getTheme("light")}>
					<GlobalStyle />
					<Block>
						<ConfiguredForm {...args} />
					</Block>
				</ThemeProvider>
			}
			{
				<ThemeProvider theme={getTheme("dark")}>
					<GlobalStyle />
					<Block>
						<ConfiguredForm {...args} />
					</Block>
				</ThemeProvider>
			}
		</>)
	}
}
