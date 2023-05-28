import { useState } from 'react';
import { Story, Meta } from '@storybook/react';

import Modal from './Modal';

export default {
  title: 'VictorLam/Modal',
  component: Modal,
  argTypes: {}
} as Meta<typeof Modal>;


const Template: Story<typeof Modal> = (args: any) => {
	const [show, setShow] = useState(false);
	return (
		<div>
			<button onClick={()=>setShow(true)}>Open Modal</button>
			<Modal show={show} setShow={(s: boolean)=>setShow(s)} {...args} />
		</div>
	);
}

export const SimpleUsage = Template.bind({});
SimpleUsage.args = {
	title: "Simple Title",
	children: (<div style={{maxWidth: "800px"}}>
		Modal Body
		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
	</div>)
}

