import React, { useState, ComponentProps } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import { GlobalStyle, getTheme } from "../../theme";

import Collapsible from "./Collapsible";
import Block from "../Container/Block";
import SearchBox from "../Input/SearchBox";

const meta: Meta<typeof Collapsible> = {
	title: "VictorLam/General/Container",
	component: Collapsible,
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

type Story = StoryObj<typeof Collapsible>;

const CollapsibleWrapper = (args) => {
    const [text, setText] = useState("");
    return (
      <div>
          <Block>
            <SearchBox
              value={text}
              onChange={(newText: string) => {
                setText(newText);
              }}
            />
          </Block>
          <Block>
            <Collapsible {...args} searchText={text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              non purus lorem. Mauris gravida eu ante nec semper. Morbi
              ullamcorper magna vitae quam iaculis pretium. Vivamus feugiat
              tincidunt sem, et lacinia metus. Nulla a pulvinar augue. Sed eu
              turpis nec est tempus imperdiet vel vitae tortor. Quisque
              fringilla, tortor at semper gravida, erat dui pulvinar nulla,
              viverra posuere metus felis sit amet augue. Aenean id fermentum
              lectus. Curabitur feugiat posuere leo eget venenatis. Vivamus eu
              ligula nec elit porta maximus. Vivamus rhoncus sollicitudin
              ullamcorper. Curabitur ut feugiat arcu, eu dictum justo. Praesent
              luctus odio et libero dictum volutpat. Curabitur suscipit varius
              facilisis. Etiam ex diam, sollicitudin sit amet fringilla et,
              pellentesque quis orci. Nunc pulvinar tortor a facilisis egestas.
            </Collapsible>
            <br />
            <Collapsible toggle={true} {...args} searchText={text}>
              Praesent sodales tellus non ante porttitor, a hendrerit libero
              luctus. Fusce luctus urna at ipsum pellentesque commodo. Phasellus
              interdum blandit luctus. Nunc pharetra rutrum semper. Nam sodales
              gravida lobortis. Suspendisse tincidunt, lorem non feugiat
              pulvinar, dui justo fermentum nulla, id imperdiet risus diam sit
              amet eros. Integer lacus ipsum, laoreet id diam non, laoreet
              vehicula odio.
            </Collapsible>
          </Block>
      </div>
    );
}

export const CollapsibleContainer: Story = {
  args: {
    title: "Collapsible Text",
  },
  render: (args: ComponentProps<typeof Collapsible>) => {
      return <CollapsibleWrapper {...args} />
  },
};
