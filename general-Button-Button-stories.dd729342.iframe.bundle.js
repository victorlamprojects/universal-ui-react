"use strict";(self.webpackChunkuniversal_ui_react=self.webpackChunkuniversal_ui_react||[]).push([[167],{"./lib/config/constants.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ak:()=>ButtonVariant,R5:()=>Margin,Yq:()=>Padding,Z4:()=>FontSize,k3:()=>HoverEffect,r2:()=>BreakPoints,we:()=>ActiveEffect});let BreakPoints=function(BreakPoints){return BreakPoints.xs="@media only screen and (min-width: 0px)",BreakPoints.s="@media only screen and (min-width: 576px)",BreakPoints.m="@media only screen and (min-width: 768px)",BreakPoints.l="@media only screen and (min-width: 992px)",BreakPoints}({});const FontSize={Header:"1.375rem",Title:"1.375rem",Text:"1.25rem",ModalTitle:"1.75rem",ModalText:"1.5rem",TableTitle:"1rem",TableText:"1rem",FormTitle:"1.375rem",FormText:"1rem",FormGroupText:"0.9rem"},Padding={Button:"8px 12px",Container:"8px 12px",Header:"12px 18px",Table:"0.3rem 0.5rem",Input:"4px 6px"},Margin={Container:"0.5rem 0"};let ButtonVariant=function(ButtonVariant){return ButtonVariant.Default="default",ButtonVariant.Info="info",ButtonVariant.Success="success",ButtonVariant.Warning="warning",ButtonVariant.Error="error",ButtonVariant}({}),HoverEffect=function(HoverEffect){return HoverEffect.None="none",HoverEffect.Enlarge="enlarge",HoverEffect.Opaque="opaque",HoverEffect.Solidify="solidify",HoverEffect}({}),ActiveEffect=function(ActiveEffect){return ActiveEffect.None="none",ActiveEffect.Enlarge="enlarge",ActiveEffect.Opaque="opaque",ActiveEffect.Solidify="solidify",ActiveEffect}({})},"./lib/general/Button/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var styled_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_config_constants__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./lib/config/constants.ts"),_util_helper__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./lib/util/helper.ts"),_theme_theme__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./lib/theme/theme.ts");const Button=styled_components__WEBPACK_IMPORTED_MODULE_3__.Ay.button((({style,theme,variant="info",effect="none"})=>{theme=(0,_theme_theme__WEBPACK_IMPORTED_MODULE_2__.R_)(theme);let effects=(0,_util_helper__WEBPACK_IMPORTED_MODULE_1__.sg)(effect,theme,variant);return theme&&{outline:"none",border:"none",borderRadius:"8px",padding:_config_constants__WEBPACK_IMPORTED_MODULE_0__.Yq.Button,margin:"8px 10px",backgroundColor:theme[variant],color:theme.button.text,userSelect:"none","&:hover":{cursor:"pointer"},"&:disabled":{opacity:"0.6",cursor:"not-allowed"},...effects,...style}||style})),__WEBPACK_DEFAULT_EXPORT__=Button;try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"info"'},{value:'"success"'},{value:'"warning"'},{value:'"error"'}]}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLButtonElement | null) => void) | RefObject<HTMLButtonElement> | null"}},effect:{defaultValue:null,description:"",name:"effect",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"enlarge"'},{value:'"opaque"'},{value:'"solidify"'}]}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["lib/general/Button/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"lib/general/Button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./lib/general/Container/Block.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_theme_theme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./lib/theme/theme.ts"),_config_constants__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./lib/config/constants.ts");const Block=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.div((({style,theme})=>({position:"relative",backgroundColor:(theme=(0,_theme_theme__WEBPACK_IMPORTED_MODULE_0__.R_)(theme)).block,color:theme.text,padding:_config_constants__WEBPACK_IMPORTED_MODULE_1__.Yq.Container,margin:_config_constants__WEBPACK_IMPORTED_MODULE_1__.R5.Container,...style}))),__WEBPACK_DEFAULT_EXPORT__=Block;try{Block.displayName="Block",Block.__docgenInfo={description:"",displayName:"Block",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["lib/general/Container/Block.tsx#Block"]={docgenInfo:Block.__docgenInfo,name:"Block",path:"lib/general/Container/Block.tsx#Block"})}catch(__react_docgen_typescript_loader_error){}},"./lib/general/Grid/Grid.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{f:()=>Cell,x:()=>Grid});var styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_config_constants__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./lib/config/constants.ts");const Grid=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.div((({justifyContent="flex-start",alignItems="center",alignContent="stretch"})=>({width:"100%",padding:"0.25rem 0.5rem",margin:"0",display:"flex",flexDirection:"row",justifyContent,alignItems,alignContent,flexWrap:"wrap"}))),Cell=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.div((({s,m,l,hidden,justifyContent="flex-start",alignItems="center",alignContent="stretch"})=>{const style={display:"flex",justifyContent,alignItems,alignContent,margin:"0",flexBasis:"auto",hidden};if(void 0!==s&&s<=12&&s>=0){const width=Math.round(s/12*1e4)/100;style.flexBasis=`${width}%`}if(void 0!==m&&m<=12&&m>=0){const width=Math.round(m/12*1e4)/100;style[_config_constants__WEBPACK_IMPORTED_MODULE_0__.r2.m]={flexBasis:`${width}%`}}if(void 0!==l&&l<=12&&l>=0){const width=Math.round(l/12*1e4)/100;style[_config_constants__WEBPACK_IMPORTED_MODULE_0__.r2.l]={flexBasis:`${width}%`}}return style}));try{Grid.displayName="Grid",Grid.__docgenInfo={description:"",displayName:"Grid",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},justifyContent:{defaultValue:null,description:"",name:"justifyContent",required:!1,type:{name:"string"}},alignItems:{defaultValue:null,description:"",name:"alignItems",required:!1,type:{name:"string"}},alignContent:{defaultValue:null,description:"",name:"alignContent",required:!1,type:{name:"string"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["lib/general/Grid/Grid.tsx#Grid"]={docgenInfo:Grid.__docgenInfo,name:"Grid",path:"lib/general/Grid/Grid.tsx#Grid"})}catch(__react_docgen_typescript_loader_error){}try{Cell.displayName="Cell",Cell.__docgenInfo={description:"",displayName:"Cell",props:{s:{defaultValue:null,description:"",name:"s",required:!1,type:{name:"number"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},justifyContent:{defaultValue:null,description:"",name:"justifyContent",required:!1,type:{name:"string"}},alignItems:{defaultValue:null,description:"",name:"alignItems",required:!1,type:{name:"string"}},alignContent:{defaultValue:null,description:"",name:"alignContent",required:!1,type:{name:"string"}},m:{defaultValue:null,description:"",name:"m",required:!1,type:{name:"number"}},l:{defaultValue:null,description:"",name:"l",required:!1,type:{name:"number"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["lib/general/Grid/Grid.tsx#Cell"]={docgenInfo:Cell.__docgenInfo,name:"Cell",path:"lib/general/Grid/Grid.tsx#Cell"})}catch(__react_docgen_typescript_loader_error){}},"./lib/theme/theme.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O4:()=>getTheme,R_:()=>getDefaultThemeIfNotFound});const Dark={text:"#e3e3e3",background:"#1e1e1e",header:"#1e1e1e",sidebar:"#121212",block:"#171717",info:"#398AD7",success:"#0f9d58",warning:"#d5a439",error:"#d23f31",primary:"#435B66",secondary:"#828282",highlight:"#d5a439",card:{primary:"#02aab0",primary2:"#00cdac",secondary:"#e94057",secondary2:"#f27121",info:"#8e2de2",info2:"#4a00e0"},button:{text:"#fff",background:"#25aea6"},table:{header:"#575041",primary:"#424242",secondary:"#435B66"},form:{group:"#828282"},input:{text:"#000",background:"#e0e0e0",focusBackground:"#435B66",focusText:"#fff",disabledBackground:"transparent",disabledText:"inherit"}},Light={text:"#212121",background:"#fff",header:"#fff",sidebar:"#d2d3db",block:"#e3e3e3",info:"#74CAFF",success:"#82e846",warning:"#f7d54d",error:"#FFA48D",primary:"#9394a5",secondary:"#fefedd",highlight:"#f7d54d",card:{primary:"#8e2de2",primary2:"#4a00e0",secondary:"#e94057",secondary2:"#f27121",info:"#02aab0",info2:"#00cdac"},button:{text:"#fff",background:"#25aea6"},table:{header:"#ac9d81",primary:"#fefedd",secondary:"#42b9f5"},form:{group:"#232323"},input:{text:"#000",background:"#fff"}},getTheme=theme=>"dark"===theme?Dark:Light,getDefaultThemeIfNotFound=theme=>!theme||"object"==typeof theme&&0===Object.keys(theme).length?Light:theme},"./lib/util/helper.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{CE:()=>getActiveEffect,Kg:()=>isString,Ts:()=>getNumOfDays,sg:()=>getHoverEffect});var _config_constants__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./lib/config/constants.ts");const isString=s=>"string"==typeof s||s instanceof String,getHoverEffect=(hover,theme,variant=_config_constants__WEBPACK_IMPORTED_MODULE_0__.Ak.Default)=>{let effects={};return hover===_config_constants__WEBPACK_IMPORTED_MODULE_0__.k3.Enlarge?effects={"&:hover":{cursor:"pointer",transform:"scale(1.1)"}}:hover===_config_constants__WEBPACK_IMPORTED_MODULE_0__.k3.Opaque?effects={opacity:.75,"&:hover":{cursor:"pointer",opacity:1}}:hover===_config_constants__WEBPACK_IMPORTED_MODULE_0__.k3.Solidify&&(effects={transitionDuration:"0.3s",backgroundColor:"inherit",color:"inherit",border:`1px solid ${variant===_config_constants__WEBPACK_IMPORTED_MODULE_0__.Ak.Default?theme.primary:theme[variant]}`,"&:hover":{cursor:"pointer",backgroundColor:variant===_config_constants__WEBPACK_IMPORTED_MODULE_0__.Ak.Default?theme.primary:theme[variant],color:theme.button.text}}),effects},getActiveEffect=(active,theme)=>{let effects={};return active===_config_constants__WEBPACK_IMPORTED_MODULE_0__.we.Enlarge?effects={"&.active":{transform:"scale(1.1)"}}:active===_config_constants__WEBPACK_IMPORTED_MODULE_0__.we.Opaque?effects={"&.active":{opacity:1}}:active===_config_constants__WEBPACK_IMPORTED_MODULE_0__.we.Solidify&&(effects={"&.active":{backgroundColor:theme.primary,color:theme.button.text}}),effects},MonthMap=[31,28,31,30,31,30,31,31,30,31,30,31],getNumOfDays=(year,month)=>{if(2===month){return MonthMap[month]+(year%4==0&&year%100!=0||year%400==0?1:0)}return MonthMap[month]}},"./lib/general/Button/Button.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ButtonWithEffects:()=>ButtonWithEffects,SimpleButton:()=>SimpleButton,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var styled_components__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_Grid_Grid__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./lib/general/Grid/Grid.tsx"),_Container_Block__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./lib/general/Container/Block.tsx"),_Button__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./lib/general/Button/Button.tsx"),_theme_theme__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./lib/theme/theme.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"VictorLam/Button",component:_Button__WEBPACK_IMPORTED_MODULE_3__.A},SimpleButton={args:{},render:args=>{const InternalComp=(variant,text)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Grid_Grid__WEBPACK_IMPORTED_MODULE_1__.f,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_3__.A,{variant,...args,children:text})}),InternalDisabledComp=(variant,text)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Grid_Grid__WEBPACK_IMPORTED_MODULE_1__.f,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_3__.A,{variant,disabled:!0,...args,children:text})});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_Container_Block__WEBPACK_IMPORTED_MODULE_2__.A,{style:{width:"500px"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p",{children:"Light Theme"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Grid_Grid__WEBPACK_IMPORTED_MODULE_1__.x,{justifyContent:"space-between",children:["info","success","warning","error"].map((v=>InternalComp(v,v[0].toUpperCase()+v.slice(1))))}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Grid_Grid__WEBPACK_IMPORTED_MODULE_1__.x,{justifyContent:"space-between",children:["info","success","warning","error"].map((v=>InternalDisabledComp(v,v[0].toUpperCase()+v.slice(1))))})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(styled_components__WEBPACK_IMPORTED_MODULE_6__.NP,{theme:(0,_theme_theme__WEBPACK_IMPORTED_MODULE_4__.O4)("dark"),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_Container_Block__WEBPACK_IMPORTED_MODULE_2__.A,{style:{width:"500px"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p",{children:"Dark Theme"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Grid_Grid__WEBPACK_IMPORTED_MODULE_1__.x,{justifyContent:"space-between",children:["info","success","warning","error"].map((v=>InternalComp(v,v[0].toUpperCase()+v.slice(1))))}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Grid_Grid__WEBPACK_IMPORTED_MODULE_1__.x,{justifyContent:"space-between",children:["info","success","warning","error"].map((v=>InternalDisabledComp(v,v[0].toUpperCase()+v.slice(1))))})]})})]})}},ButtonWithEffects={args:{},render:args=>{const InternalComp=(variant,text,effect)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_3__.A,{variant,effect,...args,children:text});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{style:{width:"400px"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p",{children:"Enlarge"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Grid_Grid__WEBPACK_IMPORTED_MODULE_1__.x,{justifyContent:"space-between",children:["info","success","warning","error"].map((v=>InternalComp(v,v[0].toUpperCase()+v.slice(1),"enlarge")))})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{style:{width:"400px"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p",{children:"Opaque"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Grid_Grid__WEBPACK_IMPORTED_MODULE_1__.x,{justifyContent:"space-between",children:["info","success","warning","error"].map((v=>InternalComp(v,v[0].toUpperCase()+v.slice(1),"opaque")))})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{style:{width:"400px"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p",{children:"Solidify"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Grid_Grid__WEBPACK_IMPORTED_MODULE_1__.x,{justifyContent:"space-between",children:["info","success","warning","error"].map((v=>InternalComp(v,v[0].toUpperCase()+v.slice(1),"solidify")))})]})]})}};SimpleButton.parameters={...SimpleButton.parameters,docs:{...SimpleButton.parameters?.docs,source:{originalSource:'{\n  args: {},\n  render: (args: ComponentProps<typeof Button>) => {\n    const InternalComp = (variant: string, text: string) => {\n      return <Cell><Button variant={variant} {...args}>{text}</Button></Cell>;\n    };\n    const InternalDisabledComp = (variant: string, text: string) => {\n      return <Cell><Button variant={variant} disabled {...args}>{text}</Button></Cell>;\n    };\n    return <>\n            <Block style={{\n        width: "500px"\n      }}>\n                <p>Light Theme</p>\n                <Grid justifyContent={"space-between"}>\n                    {["info", "success", "warning", "error"].map(v => InternalComp(v, v[0].toUpperCase() + v.slice(1)))}\n                </Grid>\n                <Grid justifyContent={"space-between"}>\n                    {["info", "success", "warning", "error"].map(v => InternalDisabledComp(v, v[0].toUpperCase() + v.slice(1)))}\n                </Grid>\n            </Block>\n            <ThemeProvider theme={getTheme("dark")}>\n                <Block style={{\n          width: "500px"\n        }}>\n                    <p>Dark Theme</p>\n                    <Grid justifyContent={"space-between"}>\n                        {["info", "success", "warning", "error"].map(v => InternalComp(v, v[0].toUpperCase() + v.slice(1)))}\n                    </Grid>\n                    <Grid justifyContent={"space-between"}>\n                        {["info", "success", "warning", "error"].map(v => InternalDisabledComp(v, v[0].toUpperCase() + v.slice(1)))}\n                    </Grid>\n                </Block>\n            </ThemeProvider>\n        </>;\n  }\n}',...SimpleButton.parameters?.docs?.source}}},ButtonWithEffects.parameters={...ButtonWithEffects.parameters,docs:{...ButtonWithEffects.parameters?.docs,source:{originalSource:'{\n  args: {},\n  render: (args: ComponentProps<typeof Button>) => {\n    const InternalComp = (variant: string, text: string, effect: string) => {\n      return <Button variant={variant} effect={effect} {...args}>{text}</Button>;\n    };\n    return <>\n            <div style={{\n        width: "400px"\n      }}>\n                <p>Enlarge</p>\n                <Grid justifyContent={"space-between"}>\n                    {["info", "success", "warning", "error"].map(v => InternalComp(v, v[0].toUpperCase() + v.slice(1), "enlarge"))}\n                </Grid>\n            </div>\n            <div style={{\n        width: "400px"\n      }}>\n                <p>Opaque</p>\n                <Grid justifyContent={"space-between"}>\n                    {["info", "success", "warning", "error"].map(v => InternalComp(v, v[0].toUpperCase() + v.slice(1), "opaque"))}\n                </Grid>\n            </div>\n            <div style={{\n        width: "400px"\n      }}>\n                <p>Solidify</p>\n                <Grid justifyContent={"space-between"}>\n                    {["info", "success", "warning", "error"].map(v => InternalComp(v, v[0].toUpperCase() + v.slice(1), "solidify"))}\n                </Grid>\n            </div>\n        </>;\n  }\n}',...ButtonWithEffects.parameters?.docs?.source}}};const __namedExportsOrder=["SimpleButton","ButtonWithEffects"]}}]);