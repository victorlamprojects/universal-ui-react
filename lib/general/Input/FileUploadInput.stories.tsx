import React, { useState, ComponentProps } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import { GlobalStyle, getTheme } from "../../theme";

import FileUploadInput from "./FileUploadInput";
import Block from "../Container/Block";

const meta: Meta<typeof FileUploadInput> = {
    title: "VictorLam/General/Input",
    component: FileUploadInput,
	decorators: [
		withThemeFromJSXProvider({
			themes: {
				light: getTheme('light'),
				dark: getTheme('dark'),
			},
			defaultTheme: 'light',
			Provider: ThemeProvider,
			GlobalStyles: GlobalStyle,
		}),
	],
};

export default meta;

type Story = StoryObj<typeof FileUploadInput>;

const FileUploadWrapper = (args) => {
    const [files, setFiles] = useState([]);
    return (
	  <Block>
		<FileUploadInput
		  handleFileInput={(files: FileList) => {
			for (let f of files) {
			  setFiles((fs) => [...fs, f.name]);
			}
		  }}
		  {...args}
		/>
		<h2>Files uploaded:</h2>
		<ol>
		  {files.map((file) => (
			<li>{file}</li>
		  ))}
		</ol>
	  </Block>
    );
}

export const FileUpload: Story = {
  args: {},
  render: (args: ComponentProps<typeof FileUploadInput>) => {
	  return <FileUploadWrapper {...args}/>
  },
};
