import React, { ComponentProps, useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import { GlobalStyle, getTheme } from "../../theme";

import Modal from "./Modal";
import { Grid, Cell } from "../Grid/Grid";
import Block from "../Container/Block";
import Button from "../Button/Button";

import { ModalVariant } from "../../config/constants";

const meta: Meta<typeof Modal> = {
    title: "VictorLam/General/Modal",
    component: Modal,
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

type Story = StoryObj<typeof Modal>;

const ModalWrapper = ({
	text,
	variant,
	...args
}) => { const [show, setShow] = useState(false);
  return (
	<Cell>
	  <Button onClick={() => setShow(true)} variant={variant}>
		{text}
	  </Button>
	  <Modal show={show} setShow={(s: boolean) => setShow(s)} {...args}>
		  <div style={{ maxWidth: "800px" }}>
			Modal Body Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
			do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
			ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
			aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
			in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
			Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
			officia deserunt mollit anim id est laborum.
		  </div>
	  </Modal>
	</Cell>
  );
};
export const SimpleModal: Story = {
  args: {
    title: "Simple Title",
  },
  render: (args: ComponentProps<typeof Modal>) => {
    return (
		<Block style={{ width: "400px" }}>
		  <p>Simple Modal</p>
		  <Grid justifyContent={"space-between"}>
			{["info", "success", "warning", "error"].map((v) =>
				<ModalWrapper text={v} variant={ v as ModalVariant} {...args} />)
			}
		  </Grid>
		</Block>
    );
  },
};

export const DisableBackgroundClickModal = {
  args: {
    ...SimpleModal.args,
    enableBackgroundClick: false,
  },
  render: (args: ComponentProps<typeof Modal>) => {
    const [show, setShow] = useState(false);
    return (
      <div>
		<ModalWrapper text="Open Modal" {...args} />
      </div>
    );
  },
};
