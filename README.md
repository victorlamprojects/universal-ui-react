# univeresal-ui-react

## Components
1 [Grid](#grid)
## Developer Guide
1. [Testing](#testing)
2. [Deploy](#deploy)

## Components
### Grid
#### Evenly distributed Grid
```jsx
import { Grid, Cell } from "universal-ui-react";
const component = () => (
<div className="App" style={{width: "500px", height: "500px"}}>
  <Grid>
    <Cell s={4} style={{backgroundColor: "red"}}>1</Cell>
    <Cell s={4} style={{backgroundColor: "red"}}>1</Cell>
    <Cell s={4} style={{backgroundColor: "red"}}>1</Cell>
  </Grid>
</div>);
```
#### Full width when the screen is small
```jsx
import { Grid, Cell } from "universal-ui-react";
const component = () => (
<div className="App" style={{width: "500px", height: "500px"}}>
  <Grid>
    <Cell s={12} m={4} style={{backgroundColor: "red"}}>1</Cell>
    <Cell s={12} m={4} style={{backgroundColor: "red"}}>1</Cell>
    <Cell s={12} m={4} tyle={{backgroundColor: "red"}}>1</Cell>
  </Grid>
</div>);
```

## Developer Guide
### Testing
1. Build Story
```
yarn run build-storybook
```
2. Start story server
```
yarn storybook
```
### Deploy
0. Deploy a feature
```
yarn deploy
```
2. Deploy a fix/minor upgrade
```
yarn fix
```
