<div align="center">
    <a href="https://github.com/victorlamprojects/universal-ui-react">
        <img src="docs/logo.png" alt="logo" width="80" height="80" />
    </a>
    <h2>Universal UI - React</h2>
    <p>
        A react library that provides commonly used React components.
    </p>
    <!-- Badges -->
    <p>
        <img src="https://img.shields.io/badge/TypeScript-4.9.5-blue?logo=typescript" alt="typescript" />
        <img src="https://img.shields.io/badge/React-18.2.0-61dafb?logo=react" alt="react" />
        <img src="https://img.shields.io/badge/StyledComponents-5.3.6-FFEA00?logo=styledcomponents" alt="styled-components" />
        <img src="https://img.shields.io/badge/Storybook-8.3.6-ff4782?logo=storybook" alt="storybook" />
    </p>
</div>

# Table of Contents
- [Components Docs](#components-docs)
- [Installation](#installation)
- [Examples](#examples)
   - [General](#general)
      - [Button](#general)
         - [Basic Buttons](#basic-buttons)
         - [With Effects](#with-effects)
      - [Icon](#icon)
         - [Square Icon](#square-icon)
         - [Circle Icon](#circle-icon)
      - [Input](#input)
         - [Date](#date)
         - [Select](#select)
         - [Switch](#switch)
         - [Text](#text)
         - [File Upload](#file-upload)
      - [Modal](#modal)
      - [Table](#table)
      - [Form](#general)
   - [Widgets](#widgets)

## Components Docs
This page gives a few examples for the usage of the components.

For detailed component usage, see https://victorlamprojects.github.io/universal-ui-react

## Installation
*npm*
```shell
npm install universal-ui-react
```
*yarn*
```shell
yarn add universal-ui-react
```

## Examples
### General
#### Button
##### Basic Buttons
```tsx
import { ThemeProvider } from "styled-components";
import {
    Button,
    Block,
    GlobalStyle,
    getTheme
} from "universal-ui-react";

const Example = () => {
    return (
    <ThemeProvider theme={getTheme("dark")}>
        <GlobalStyle />
        <Block style={{ width: "500px" }}>
            <Button variant={"primary"}>
                Primary
            </Button>
            <Button variant={"success"}>
                Success
            </Button>
            <Button variant={"warning"}>
                Warning
            </Button>
            <Button variant={"error"}>
                Error
            </Button>
        </Block>
    </ThemeProvider>);
}
export default Example;
```
##### With Effects
```tsx
import { ThemeProvider } from "styled-components";
import {
    Button,
    Block,
    GlobalStyle,
    getTheme
} from "universal-ui-react";

const Example = () => {
    return (
    <ThemeProvider theme={getTheme("dark")}>
        <GlobalStyle />
        <Block style={{ width: "500px" }}>
            <Button variant={"primary"} effect={"enlarge"}>
                Enlarge
            </Button>
            <Button variant={"primary"} effect={"opaque"}>
                Opaque
            </Button>
            <Button variant={"primary"} effect={"solidify"}>
                Solidify
            </Button>
        </Block>
    </ThemeProvider>);
}
export default Example;
```

#### Icon
##### Square Icon
```tsx
import { ThemeProvider } from "styled-components";
import {
    Icon,
    Square,
    GlobalStyle,
    getTheme
} from "universal-ui-react";

const Example = () => {
    return (
    <ThemeProvider theme={getTheme("dark")}>
        <GlobalStyle />
        <Square size={"10em"}>
            <Icon width={"100%"} height={"100%"} src={"https://picsum.photos/200"} />
        </Square>
    </ThemeProvider>);
}
export default Example;
```
##### Circle Icon
```tsx
import { ThemeProvider } from "styled-components";
import {
    Icon,
    Circle,
    GlobalStyle,
    getTheme
} from "universal-ui-react";

const Example = () => {
    return (
    <ThemeProvider theme={getTheme("dark")}>
        <GlobalStyle />
        <Circle size={"10em"}>
            <Icon width={"100%"} height={"100%"} src={"https://picsum.photos/200"} />
        </Circle>
    </ThemeProvider>);
}
export default Example;
```
#### Input
##### Date
```tsx
import { ThemeProvider } from "styled-components";
import {
    DateInput,
    Block,
    GlobalStyle,
    getTheme
} from "universal-ui-react";

const Example = () => {
    return (
    <ThemeProvider theme={getTheme("dark")}>
        <GlobalStyle />
        <Block style={{ width: "500px" }}>
            <DateInput name={"date-1"} datetimeType={"date-only"}/>
            <DateInput name={"date-2"} datetimeType={"date-with-time"}/>
            <DateInput name={"date-3"} datetimeType={"time-only"}/>
        </Block>
    </ThemeProvider>);
}
export default Example;
```
##### Select
```tsx
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import {
    Select,
    Block,
    GlobalStyle,
    getTheme
} from "universal-ui-react";

const Example = () => {
    const options = [{
        label: "Male",
        value: "M"
    },{
        label: "Female",
        value: "F"
    }];
    const [selected, setSelected] = useState<string>(undefined);
    return (
    <ThemeProvider theme={getTheme("dark")}>
        <GlobalStyle />
        <Block style={{ width: "500px" }}>
            <Select
                name="select"
                options={options}
                selected={selected}
                onChange={((s: string) => setSelected(s)} />
        </Block>
    </ThemeProvider>);
}
export default Example;
```
##### Switch
```tsx
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import {
    SwitchInput,
    Block,
    GlobalStyle,
    getTheme
} from "universal-ui-react";

const Example = () => {
    const [squareToggled, setSquareToggled] = useState<boolean>(false);
    const [roundToggled, setRoundToggled] = useState<boolean>(false);
    return (
    <ThemeProvider theme={getTheme("dark")}>
        <GlobalStyle />
        <Block style={{ width: "500px" }}>
            <SwitchInput
                name="square-switch"
                type={"square"}
                value={squareToggled}
                onChange={((s: boolean) => setSquareToggled(s)} />
            <SwitchInput
                name="round-switch"
                type={"round"}
                value={roundToggled}
                onChange={((s: boolean) => setRoundToggled(s)} />
        </Block>
    </ThemeProvider>);
}
export default Example;
```
##### Text
```tsx
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import {
    TextInput,
    Block,
    GlobalStyle,
    getTheme
} from "universal-ui-react";

const Example = () => {
    const [text, setText] = useState<string>("");
    return (
    <ThemeProvider theme={getTheme("dark")}>
        <GlobalStyle />
        <Block style={{ width: "500px" }}>
            <SwitchInput
                name="text-input"
                value={text}
                onChange={((s: string) => setText(s)} />
        </Block>
    </ThemeProvider>);
}
export default Example;
```
##### File Upload
```tsx
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import {
    TextInput,
    Block,
    GlobalStyle,
    getTheme
} from "universal-ui-react";

const Example = () => {
    const [files, setFiles] = useState([]);
    return (
    <ThemeProvider theme={getTheme("dark")}>
        <GlobalStyle />
        <Block style={{ width: "500px" }}>
        <FileUploadInput
            handleFileInput={(files: FileList) => {
                for (let f of files) {
                    setFiles((fs) => [...fs, f.name]);
                }
            }}
          {...args}
		/>
        </Block>
    </ThemeProvider>);
}
export default Example;
```

### Widgets



