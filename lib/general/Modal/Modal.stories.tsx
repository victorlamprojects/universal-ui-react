import { ComponentProps, useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import Modal from './Modal';
import { Grid, Cell } from '../Grid/Grid';
import Block from '../Container/Block';
import Button from '../Button/Button';

import { ModalVariant } from '../../constants';
import { getTheme } from '../../theme';

const meta: Meta<typeof Modal> = {
	title: 'VictorLam/Modal',
	component: Modal
};

export default meta;

type Story = StoryObj<typeof Modal>;

export const SimpleModal: Story = {
	args: {
		title: "Simple Title",
		children: (<div style={{maxWidth: "800px"}}>
			Modal Body
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
		</div>)
	},
	render: (args: ComponentProps<typeof Modal>) => {
		const InternalComp = (text: string, _args: ComponentProps<typeof Modal>) => {
			const [show, setShow] = useState(false);
			return <Cell>
				<Button onClick={()=>setShow(true)} variant={_args.variant}>{text}</Button>
				<Modal show={show} setShow={(s: boolean)=>setShow(s)} {..._args} />
			</Cell>
		};
		return (<>
			<Block style={{width: "400px"}}>
				<p>Light Theme</p>
				<Grid justifyContent={"space-between"}>
					{["info", "success", "warning", "error"].map(v => InternalComp(v, {...args, variant: v as ModalVariant}))}
				</Grid>
			</Block>
			<ThemeProvider theme={getTheme("dark")}>
				<Block style={{width: "400px"}}>
					<p>Dark Theme</p>
					<Grid justifyContent={"space-between"}>
						{["info", "success", "warning", "error"].map(v => InternalComp(v, {...args, variant: v as ModalVariant}))}
					</Grid>
				</Block>
			</ThemeProvider>
		</>);
	}
}

export const DisableBackgroundClickModal = {
	args: {
		...SimpleModal.args,
		enableBackgroundClick: false
	},
	render: (args: ComponentProps<typeof Modal>) => {
		const [show, setShow] = useState(false);
		return <div>
			<Button onClick={()=>setShow(true)}>Open Modal</Button>
			<Modal show={show} setShow={(s: boolean)=>setShow(s)} {...args} />
		</div>
	}
}

