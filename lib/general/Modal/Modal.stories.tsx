import { ComponentProps, useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';

import Modal from './Modal';
import { Grid, Cell } from '../Grid/Grid';

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
		const InternalComp = (text, theme,_args) => {
			const [show, setShow] = useState(false);
			return <Cell>
				<button onClick={()=>setShow(true)}>{text}</button>
				<Modal show={show} setShow={(s: boolean)=>setShow(s)} theme={theme} {..._args} />
			</Cell>
		};
		return (<>
			<div style={{width: "400px"}}>
				<p>Light Theme</p>
				<Grid justifyContent={"space-between"}>
					{["info", "success", "warning", "error"].map(v => InternalComp(v, "light", {...args, variant: v}))}
				</Grid>
			</div>
			<div style={{width: "400px"}}>
				<p>Dark</p>
				<Grid justifyContent={"space-between"}>
					{["info", "success", "warning", "error"].map(v => InternalComp(v, "dark", {...args, variant: v}))}
				</Grid>
			</div>
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
			<button onClick={()=>setShow(true)}>Open Modal</button>
			<Modal show={show} setShow={(s: boolean)=>setShow(s)} {...args} />
		</div>
	}
}

