import React, { ComponentProps } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import { GlobalStyle, getTheme } from "../../theme";

import Block from "../Container/Block";
import Table from "./Table";
import { TData } from "./Table.type";

const meta: Meta<typeof Table> = {
    title: "VictorLam/General/Table",
    component: Table,
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

type Story = StoryObj<typeof Table>;

export const Tables: Story = {
  args: {
    data: [
      {
        name: "Victor",
        age: 24,
        job: "developer",
        salary: 10000.0,
        hobbies: "coding",
      },
      {
        name: "Jasmine",
        age: 25,
        job: "accountant",
        salary: 12000.5,
        hobbies: "reading",
      },
      {
        name: "Jacky",
        age: 35,
        job: "chef",
        salary: 30000.0,
        hobbies: "cooking",
      },
      {
        name: "Rose",
        age: 33,
        job: "teacher",
        salary: 25000.5,
        hobbies: "hiking",
      },
      {
        name: "James",
        age: 27,
        job: "youtuber",
        salary: 10000000.52,
        hobbies: "photography",
      },
    ],
    columnDefs: [
      { key: "name", title: "Name" },
      { key: "age", title: "Age" },
      { key: "job", title: "Job" },
      { key: "salary", title: "Income" },
      { key: "hobbies", title: "Hobbies" },
    ],
    onDoubleClick: (row: number, col: number, data: TData) => {
      alert(`Selected ${data} at row ${row} and column ${col}`);
    },
  },
  render: (args: ComponentProps<typeof Table>) => {
    return (
      <>
          Normal Table
          <Block>
            <Table {...args} />
          </Block>
          Bordered Table
          <Block>
            <Table bordered={true} {...args} />
          </Block>
          Striped Table
          <Block>
            <Table striped={true} {...args} />
          </Block>
      </>
    );
  },
};
