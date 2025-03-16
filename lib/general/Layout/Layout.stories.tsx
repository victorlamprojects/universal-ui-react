import React, { ComponentProps, useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import { GlobalStyle, getTheme } from "../../theme";

import { MultiTabLayoutType, MultiTabLayout, MultiTab } from "./MultiTabLayout";
import Block from "../Container/Block";
import Circle from "../Container/Circle";
import Icon from "../Icon/Icon";
import { Grid, Cell } from "../Grid/Grid";
import Button from "../Button/Button";
import { useNavigate, useLocation } from "react-router-dom";

const meta: Meta<typeof MultiTabLayout> = {
    title: "VictorLam/General/Layout",
    component: MultiTabLayout,
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

type Story = StoryObj<typeof MultiTabLayout>;

const Tab1 = () => <Block>Tab 1 Content</Block>;
const Tab2 = () => <Block>Tab 2 Content</Block>;
const Tab3 = () => <Block>Tab 3 Content</Block>;
const Tab4 = () => <Block>Tab 4 Content</Block>;

export const SimpleMultiTabLayout: Story = {
  args: {},
  render: (args: ComponentProps<typeof MultiTabLayout>) => {
    return (
    <MultiTabLayout {...args}>
        <MultiTab path={"/tab1"} component={<Tab1 />}>
            Tab1
        </MultiTab>
        <MultiTab path={"/tab2"} component={<Tab2 />}>
            <Grid>
                <Cell s={12} style={{ justifyContent: "center" }}>
                    <Icon src="https://picsum.photos/200" />
                </Cell>
                <Cell s={12} style={{ justifyContent: "center" }}>
                    Tab2
                </Cell>
            </Grid>
        </MultiTab>
        <MultiTab path={"/tab3"} component={<Tab3 />}>
            <Grid>
                <Cell s={12} style={{ justifyContent: "center" }}>
                    <Icon src="https://picsum.photos/200" />
                </Cell>
            </Grid>
        </MultiTab>
        <MultiTab path={"/tab4"} component={<Tab4 />}>
            <Grid>
                <Cell s={12} style={{ justifyContent: "center" }}>
                    <Circle size={"32px"}>
                        <Icon src="https://picsum.photos/200" />
                    </Circle>
                </Cell>
                <Cell s={12} style={{ justifyContent: "center" }}>
                    Tab4
                </Cell>
            </Grid>
        </MultiTab>
    </MultiTabLayout>
    );
  },
};

export const SolidMultiTabLayout: Story = {
  args: {
    type: MultiTabLayoutType.Bar,
  },
  render: SimpleMultiTabLayout.render,
};

const LoginPage = ({ loginCallback }: ({loginCallback: ()=>void})) => {
  const navigate = useNavigate();
  const location = useLocation();

  const origin = location.state?.from || "/";

  const login = () => {
    loginCallback();
    navigate(origin, { replace: true });
  };

  return <Button onClick={() => login()}>Authenticate</Button>;
};


const AuthWrapper = (args) => {
    const [login, setLogin] = useState(false);
    return (
        <MultiTabLayout
            {...args}
            isAuth={() => login}
            authComponent={<LoginPage loginCallback={() => setLogin(true)} />}
		>
            <MultiTab path={"/tab1"} component={<Tab1 />} auth={true}>
                Protected Tab
            </MultiTab>
            <MultiTab path={"/tab2"} component={<Tab2 />} auth={true}>
                <Grid>
                    <Cell s={12} style={{ justifyContent: "center" }}>
                        <Icon src="https://picsum.photos/200" />
                    </Cell>
                    <Cell s={12} style={{ justifyContent: "center" }}>
                        Protected Tab2
                    </Cell>
                </Grid>
            </MultiTab>
            <MultiTab path={"/tab3"} component={<Tab3 />}>
                <Grid>
                    <Cell s={12} style={{ justifyContent: "center" }}>
                        <Icon src="https://picsum.photos/200" />
                    </Cell>
                </Grid>
            </MultiTab>
            <MultiTab path={"/tab4"} component={<Tab4 />}>
                <Grid>
                    <Cell s={12} style={{ justifyContent: "center" }}>
                        <Circle size={"32px"}>
                            <Icon src="https://picsum.photos/200" />
                        </Circle>
                    </Cell>
                    <Cell s={12} style={{ justifyContent: "center" }}>
                        Tab4
                    </Cell>
                </Grid>
            </MultiTab>
		</MultiTabLayout>
    );
}
export const LayoutWithAuthentication: Story = {
    args: {
        type: MultiTabLayoutType.Bar,
        authPath: "/login",
    },
    render: (args: ComponentProps<typeof MultiTabLayout>) => {
        return <AuthWrapper {...args} />
    },
};
