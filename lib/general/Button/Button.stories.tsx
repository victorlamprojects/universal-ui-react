import React, { ComponentProps } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import { GlobalStyle, getTheme } from "../../theme";

import { Grid, Cell } from "../Grid/Grid";
import Block from "../Container/Block";
import Button from "./Button";

const meta: Meta<typeof Button> = {
	title: "VictorLam/General/Button",
	component: Button,
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

type Story = StoryObj<typeof Button>;

export const SimpleButton: Story = {
  args: {},
  render: (args: ComponentProps<typeof Button>) => {
    const InternalComp = (variant: string, text: string) => {
      return (
        <Cell>
          <Button variant={variant} {...args}>
            {text}
          </Button>
        </Cell>
      );
    };
    const InternalDisabledComp = (variant: string, text: string) => {
      return (
        <Cell>
          <Button variant={variant} disabled {...args}>
            {text}
          </Button>
        </Cell>
      );
    };
    return (
      <>
        <Block style={{ width: "500px" }}>
          <Grid justifyContent={"space-between"}>
            {["info", "success", "warning", "error"].map((v) =>
              InternalComp(v, v[0].toUpperCase() + v.slice(1)),
            )}
          </Grid>
          <Grid justifyContent={"space-between"}>
            {["info", "success", "warning", "error"].map((v) =>
              InternalDisabledComp(v, v[0].toUpperCase() + v.slice(1)),
            )}
          </Grid>
        </Block>
      </>
    );
  },
};

export const ButtonWithEffects: Story = {
  args: {},
  render: (args: ComponentProps<typeof Button>) => {
    const InternalComp = (variant: string, text: string, effect: string) => {
      return (
        <Button variant={variant} effect={effect} {...args}>
          {text}
        </Button>
      );
    };
    return (
      <>
        <div style={{ width: "400px" }}>
          <p>Enlarge</p>
          <Grid justifyContent={"space-between"}>
            {["info", "success", "warning", "error"].map((v) =>
              InternalComp(v, v[0].toUpperCase() + v.slice(1), "enlarge"),
            )}
          </Grid>
        </div>
        <div style={{ width: "400px" }}>
          <p>Opaque</p>
          <Grid justifyContent={"space-between"}>
            {["info", "success", "warning", "error"].map((v) =>
              InternalComp(v, v[0].toUpperCase() + v.slice(1), "opaque"),
            )}
          </Grid>
        </div>
        <div style={{ width: "400px" }}>
          <p>Solidify</p>
          <Grid justifyContent={"space-between"}>
            {["info", "success", "warning", "error"].map((v) =>
              InternalComp(v, v[0].toUpperCase() + v.slice(1), "solidify"),
            )}
          </Grid>
        </div>
      </>
    );
  },
};
