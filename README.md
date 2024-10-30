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
      - [Form](#form)
          - [Simple Form](#simple-form)
          - [Configured Form](#configured-form)
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
Code Snippet:
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
        <Block style={{ width: "500px" }}>
            <Button variant={"primary"} disabled>
                Primary
            </Button>
            <Button variant={"success"} disabled>
                Success
            </Button>
            <Button variant={"warning"} disabled>
                Warning
            </Button>
            <Button variant={"error"} disabled>
                Error
            </Button>
        </Block>
    </ThemeProvider>);
}
export default Example;
```
Preview:
![](docs/button.svg)
<iframe
  src="https://victorlamprojects.github.io/universal-ui-react/iframe.html?viewMode=story&globals=&id=victorlam-general-button--simple-button"
  width="100%"
></iframe>

##### With Effects
Code Snippet:
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
Preview:
<iframe
  src="https://victorlamprojects.github.io/universal-ui-react/iframe.html?viewMode=story&globals=&args=&id=victorlam-general-button--button-with-effects"
  width="100%"
></iframe>

#### Icon
##### Square Icon
Code Snippet:
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
Preview:
<iframe
  src="https://victorlamprojects.github.io/universal-ui-react/iframe.html?viewMode=story&globals=&args=&id=victorlam-general-icon--square-icon"
  width="100%"
></iframe>

##### Circle Icon
Code Snippet:
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
Preview:
<iframe
  src="https://victorlamprojects.github.io/universal-ui-react/iframe.html?viewMode=story&globals=&args=&id=victorlam-general-icon--circle-icon"
  width="100%"
></iframe>

#### Input
##### Date
Code Snippet:
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
Code Snippet:
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
Code Snippet:
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
Code Snippet:
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
Code Snippet:
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
		/>
        <h2>Files uploaded:</h2>
        <ol>
          {files.map((file) => (
            <li>{file}</li>
          ))}
        </ol>
        </Block>
    </ThemeProvider>);
}
export default Example;
```
Preview:
<iframe
  src="https://victorlamprojects.github.io/universal-ui-react/iframe.html?viewMode=story&globals=&args=&id=victorlam-general-icon--circle-icon"
  width="100%"
></iframe>

#### Modal
##### Simple Modal
Code Snippet:
```tsx
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import {
    Modal,
    Block,
    Grid,
    Cell,
    Button,
    GlobalStyle,
    getTheme
} from "universal-ui-react";

import { ModalVariant } from "../../config/constants";

const Example = () => {
    const [files, setFiles] = useState([]);
    return (
    <ThemeProvider theme={getTheme("dark")}>
        <GlobalStyle />
        <Block style={{ width: "500px" }}>
            <Grid justifyContent={"space-between"}>
                <Cell>
                    <Button onClick={() => setShow(true)} variant={variant}>
                        Modal with Disabled Background Click
                    </Button>
                    <Modal
                        show={show}
                        setShow={(s: boolean) => setShow(s)}
                        title={"Simple Title"}
                        variant={ "info" as ModalVariant}
                        enableBackgroundClick={ false } >
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
            </Grid>
        </Block>
    </ThemeProvider>);
}
export default Example;
```
Preview:
<iframe
  src="https://victorlamprojects.github.io/universal-ui-react/iframe.html?globals=&args=&id=victorlam-general-modal--simple-modal&viewMode=story"
  width="100%"
></iframe>

##### Modal with Disabled Background Click
Code Snippet:
```tsx
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import {
    Modal,
    Block,
    Grid,
    Cell,
    Button,
    GlobalStyle,
    getTheme
} from "universal-ui-react";

import { ModalVariant } from "../../config/constants";

const Example = () => {
    const [files, setFiles] = useState([]);
    return (
    <ThemeProvider theme={getTheme("dark")}>
        <GlobalStyle />
        <Block style={{ width: "500px" }}>
            <Grid justifyContent={"space-between"}>
                <Cell>
                    <Button onClick={() => setShow(true)} variant={variant}>
                        Simple Modal
                    </Button>
                    <Modal
                        show={show}
                        setShow={(s: boolean) => setShow(s)}
                        title={"Simple Title"}
                        variant={ "info" as ModalVariant} >
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
            </Grid>
        </Block>
    </ThemeProvider>);
}
export default Example;
```
Preview:
<iframe
  src="https://victorlamprojects.github.io/universal-ui-react/iframe.html?globals=&args=&id=victorlam-general-modal--disable-background-click-modal"
  width="100%"
></iframe>

#### Table
##### Simple Table
Code Snippet:
```tsx
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import {
    Table,
    TData,
    Block,
    GlobalStyle,
    getTheme
} from "universal-ui-react";

const data = [
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
];
const columnDefs = [
    { key: "name", title: "Name" },
    { key: "age", title: "Age" },
    { key: "job", title: "Job" },
    { key: "salary", title: "Income" },
    { key: "hobbies", title: "Hobbies" },
];

const Example = () => {
    const [files, setFiles] = useState([]);
    return (
    <ThemeProvider theme={getTheme("dark")}>
        <GlobalStyle />
        <Block>
            Normal Table
            <Table
                columnDefs = {columnDefs}
                data={data}
                onDoubleClick={(row: number, col: number, data: TData) => {
                    alert(`Selected ${data} at row ${row} and column ${col}`);
                }} />
            Bordered Table
            <Table
                bordered={true}
                columnDefs = {columnDefs}
                data={data}
                onDoubleClick={(row: number, col: number, data: TData) => {
                    alert(`Selected ${data} at row ${row} and column ${col}`);
                }} />
            Striped Table
            <Table
                striped={true}
                columnDefs = {columnDefs}
                data={data}
                onDoubleClick={(row: number, col: number, data: TData) => {
                    alert(`Selected ${data} at row ${row} and column ${col}`);
                }} />
        </Block>
    </ThemeProvider>);
}
export default Example;
```
Preview:
<iframe
  src="https://victorlamprojects.github.io/universal-ui-react/iframe.html?globals=&args=&id=victorlam-general-table--tables"
  width="100%"
  height="850px"
></iframe>


#### Form
##### Simple Form
Code Snippet:
```tsx
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import {
    Block,
    Form,
    FormGroup,
    FormTitle,
    FormRow,
    FormLabel,
    FormTextInput,
    FormDateInput,
    FormSwitchInput,
    FormSelect,
    FormSubmitButton,
    FState,
    GlobalStyle,
    getTheme
} from "universal-ui-react";

const Example = () => {
    const [files, setFiles] = useState([]);
    return (
    <ThemeProvider theme={getTheme("dark")}>
        <GlobalStyle />
        <Block>
            <Form onSubmit={(d: FState) => alert(JSON.stringify(d))}>
                <FormTitle>Simple Form</FormTitle>
                <FormGroup name={"Account"}>
                <FormRow>
                    <FormLabel htmlFor={"name"}>Name</FormLabel>
                    <FormTextInput name={"name"} value={"Victor Lam"} />
                </FormRow>
                <FormRow>
                    <FormLabel htmlFor={"password"}>Password</FormLabel>
                    <FormTextInput name={"password"} type="password" />
                </FormRow>
                </FormGroup>
                <FormGroup name={"Background Information"}>
                    <FormRow>
                        <FormLabel htmlFor={"sex"}>Sex</FormLabel>
                        <FormSelect
                          name={"sex"}
                          options={[
                            { label: "M", value: "m" },
                            { label: "F", value: "f" },
                          ]}
                        />
                    </FormRow>
                <FormRow>
                <FormLabel htmlFor={"email"}>Email</FormLabel>
                    <FormTextInput
                      name={"email"}
                      disabled
                      type={"email"}
                      value={"lamwingtok@gmail.com"}
                    />
                </FormRow>
                <FormRow>
                    <FormLabel htmlFor={"hobbies"}>Hobbies</FormLabel>
                    <FormTextInput name={"hobbies"} />
                </FormRow>
                <FormRow>
                    <FormLabel htmlFor={"birth-date"}>Date of Birth</FormLabel>
                    <FormDateInput name={"birth-date"} datetimeType={"date-only"} />
                </FormRow>
                </FormGroup>
                <FormRow justifyContent={"flex-end"}>
                    <FormLabel htmlFor={"receive-noti"}>Receive Notification</FormLabel>
                    <FormSwitchInput name={"receive-noti"} type={"round"} />
                </FormRow>
                <FormSubmitButton>Submit</FormSubmitButton>
            </Form>
        </Block>
    </ThemeProvider>);
}
export default Example;
```
Preview:
<iframe
  src="https://victorlamprojects.github.io/universal-ui-react/iframe.html?globals=&args=&id=victorlam-general-form--simple-form"
  width="100%"
  height="850px"
></iframe>

##### Configured Form
Code Snippet:
```tsx
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import {
    Block,
    ConfiguredForm,
    FState,
    GlobalStyle,
    getTheme
} from "universal-ui-react";

const CONFIGURATION = {
    title: "Configured Form",
    content: {
        Account: {
            group: true,
            content: {
                name: {
                    type: "text",
                    label: "Name",
                    value: "Victor Lam",
                },
                password: {
                    type: "password",
                    label: "Password",
                },
            },
        },
        "Background Information": {
            group: true,
            content: {
                Basic: {
                    group: true,
                    content: {
                        sex: {
                            type: "select",
                            options: [
                                { label: "M", value: "m" },
                                { label: "F", value: "f" },
                            ],
                        },
                        email: {
                            type: "email",
                            label: "Email",
                            disabled: true,
                            value: "lamwingtok@gmail.com",
                        },
                    },
                },
                Additional: {
                    group: true,
                    content: {
                        hobbies: {
                            type: "text",
                            label: "Hobbies",
                         },
                        dob: {
                            type: "date",
                            label: "Date of Birth",
                            datetimeType: "date-only",
                        },
                    },
                },
            },
         },
        "receive-noti": {
            type: "switch",
            label: "Receive Notification",
            justifyContent: "flex-end",
        },
        Submit: {
            type: "submit",
            label: "Submit",
        },
    },
};

const Example = () => {
    const [files, setFiles] = useState([]);
    return (
    <ThemeProvider theme={getTheme("dark")}>
        <GlobalStyle />
        <Block>
            <ConfiguredForm configuration={CONFIGURATION} onSubmit={ (d: FState) => alert(JSON.stringify(d))} />
        </Block>
    </ThemeProvider>);
}
export default Example;
```
Preview:
<iframe
  src="https://victorlamprojects.github.io/universal-ui-react/iframe.html?globals=&args=&id=victorlam-general-form--simple-configured-form"
  width="100%"
  height="850px"
></iframe>

### Widgets



