import React, { ComponentProps, FC } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "../../theme/GlobalStyle";
import Block from "../../general/Container/Block";
import Button from "../../general/Button/Button";
import { NotificationProvider, useNotification } from "./Notification";
import {
  NotificationType,
  VerticalAlignment,
  HorizontalAlignment,
} from "../../config/constants";
import { getTheme } from "../../theme/theme";

const Content = () => {
  return <Block style={{ width: "100%" }}></Block>;
};

const meta: Meta<typeof Content> = {
  title: "VictorLam/Widgets/Notification",
  component: Content,
  decorators: [
    (Story) => (
      <ThemeProvider theme={getTheme("dark")}>
        <GlobalStyle />
        <NotificationProvider>
          <Story />
        </NotificationProvider>
      </ThemeProvider>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Content>;

export const NotificationWithDarkTheme: Story = {
  args: {},
  render: (args: NotificationProps) => {
    const { showNotification: showInfo } = useNotification({
      duration: 1000,
      type: NotificationType.Info,
    });
    const { showNotification: showSuccess } = useNotification({
      duration: 1000,
      type: NotificationType.Success,
      horizontal: HorizontalAlignment.Middle,
      vertical: VerticalAlignment.Middle,
    });
    const { showNotification: showWarning } = useNotification({
      duration: 1000,
      type: NotificationType.Warning,
    });
    const { showNotification: showError } = useNotification({
      duration: 1000,
      type: NotificationType.Error,
    });
    return (
      <Block style={{ width: "100%" }}>
        <p>Dark Theme</p>
        <Button
          variant={"info"}
          onClick={() => showInfo("Information", "This is an information.")}
        >
          Info
        </Button>
        <Button
          variant={"success"}
          onClick={() => showSuccess("Success", "This is a success.")}
        >
          Success
        </Button>
        <Button
          variant={"warning"}
          onClick={() => showWarning("Warning", "This is a warning.")}
        >
          Warning
        </Button>
        <Button
          variant={"error"}
          onClick={() => showError("Error", "This is an error.")}
        >
          Error
        </Button>
      </Block>
    );
  },
};
