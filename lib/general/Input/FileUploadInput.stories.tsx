import React, { useState, ComponentProps } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import FileUploadInput from './FileUploadInput';
import Block from '../Container/Block';
import { getTheme } from '../../theme/theme';

const meta: Meta<typeof FileUploadInput> = {
	title: 'VictorLam/General/Input',
	component: FileUploadInput
};

export default meta;

type Story = StoryObj<typeof FileUploadInput>;

export const FileUpload: Story = {
	args: {
	},
	render: (args: ComponentProps<typeof FileUploadInput>) => {
		const [files, setFiles] = useState([]);
		const [files2, setFiles2] = useState([]);
		return (<div>
			<ThemeProvider theme={getTheme("light")}>
				<Block>
					<FileUploadInput handleFileInput={(files: FileList)=>{
						for(let f of files){
							setFiles(fs => ([...fs, f.name]));
						}
					}} {...args} />
					<h2>Files uploaded:</h2>
					<ol>
					{ files.map( file => (<li>{file}</li>)) }
					</ol>
				</Block>
			</ThemeProvider>
			<br/>
			<br/>
			<br/>
			<ThemeProvider theme={getTheme("dark")}>
				<Block>
					<FileUploadInput handleFileInput={(files: FileList)=>{
						for(let f of files){
							console.log(f);
							setFiles2(fs => ([...fs, f.name]));
						}
					}} {...args} />
					<h2>Files uploaded:</h2>
					<ol>
					{ files2.map( file => (<li>{file}</li>)) }
					</ol>
				</Block>
			</ThemeProvider>
		</div>)
	}
}
