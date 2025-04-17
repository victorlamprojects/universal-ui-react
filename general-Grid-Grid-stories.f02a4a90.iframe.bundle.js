"use strict";(self.webpackChunkuniversal_ui_react=self.webpackChunkuniversal_ui_react||[]).push([[663],{"./lib/config/constants.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ak:()=>ButtonVariant,OD:()=>HorizontalAlignment,R5:()=>Margin,Yq:()=>Padding,Z4:()=>FontSize,_n:()=>NotificationType,k3:()=>HoverEffect,r2:()=>BreakPoints,sx:()=>VerticalAlignment,we:()=>ActiveEffect});let BreakPoints=function(BreakPoints){return BreakPoints.xs="@media only screen and (min-width: 0px)",BreakPoints.s="@media only screen and (min-width: 576px)",BreakPoints.m="@media only screen and (min-width: 768px)",BreakPoints.l="@media only screen and (min-width: 992px)",BreakPoints}({});const FontSize={Title:"1.875rem",Text:"1.125rem",ModalTitle:"1.375rem",ModalText:"1.125rem",TableTitle:"1.375rem",TableText:"1.125rem",FormTitle:"1.875rem",FormText:"1.125rem",FormGroupText:"0.9rem"},Padding={Button:"8px 12px",Container:"8px 12px",Header:"12px 18px",Table:"0.3rem 0.5rem",Input:"4px 6px"},Margin={Container:"0.5rem 0"};let ButtonVariant=function(ButtonVariant){return ButtonVariant.Default="default",ButtonVariant.Info="info",ButtonVariant.Success="success",ButtonVariant.Warning="warning",ButtonVariant.Error="error",ButtonVariant}({}),NotificationType=function(NotificationType){return NotificationType.Info="info",NotificationType.Success="success",NotificationType.Warning="warning",NotificationType.Error="error",NotificationType}({}),VerticalAlignment=function(VerticalAlignment){return VerticalAlignment.Top="top",VerticalAlignment.Middle="middle",VerticalAlignment.Bottom="bottom",VerticalAlignment}({}),HorizontalAlignment=function(HorizontalAlignment){return HorizontalAlignment.Left="left",HorizontalAlignment.Middle="middle",HorizontalAlignment.Right="right",HorizontalAlignment}({}),HoverEffect=function(HoverEffect){return HoverEffect.None="none",HoverEffect.Enlarge="enlarge",HoverEffect.Opaque="opaque",HoverEffect.Solidify="solidify",HoverEffect}({}),ActiveEffect=function(ActiveEffect){return ActiveEffect.None="none",ActiveEffect.Enlarge="enlarge",ActiveEffect.Opaque="opaque",ActiveEffect.Solidify="solidify",ActiveEffect}({})},"./lib/general/Grid/Grid.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{FullWhenScreenIsSmall:()=>FullWhenScreenIsSmall,TwoToOneToOne:()=>TwoToOneToOne,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _Grid__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./lib/general/Grid/Grid.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"VictorLam/General/Grid",component:_Grid__WEBPACK_IMPORTED_MODULE_1__.x},FullWhenScreenIsSmall={args:{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Grid__WEBPACK_IMPORTED_MODULE_1__.f,{s:12,m:4,style:{backgroundColor:"red"},children:"1"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Grid__WEBPACK_IMPORTED_MODULE_1__.f,{s:12,m:4,style:{backgroundColor:"blue"},children:"2"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Grid__WEBPACK_IMPORTED_MODULE_1__.f,{s:12,m:4,style:{backgroundColor:"green"},children:"3"})]})}},TwoToOneToOne={args:{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Grid__WEBPACK_IMPORTED_MODULE_1__.f,{s:6,style:{backgroundColor:"red"},children:"1"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Grid__WEBPACK_IMPORTED_MODULE_1__.f,{s:3,style:{backgroundColor:"blue"},children:"2"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Grid__WEBPACK_IMPORTED_MODULE_1__.f,{s:3,style:{backgroundColor:"green"},children:"3"})]})}},__namedExportsOrder=["FullWhenScreenIsSmall","TwoToOneToOne"];FullWhenScreenIsSmall.parameters={...FullWhenScreenIsSmall.parameters,docs:{...FullWhenScreenIsSmall.parameters?.docs,source:{originalSource:'{\n  args: {\n    children: <>\n        <Cell s={12} m={4} style={{\n        backgroundColor: "red"\n      }}>\n          1\n        </Cell>\n        <Cell s={12} m={4} style={{\n        backgroundColor: "blue"\n      }}>\n          2\n        </Cell>\n        <Cell s={12} m={4} style={{\n        backgroundColor: "green"\n      }}>\n          3\n        </Cell>\n      </>\n  }\n}',...FullWhenScreenIsSmall.parameters?.docs?.source}}},TwoToOneToOne.parameters={...TwoToOneToOne.parameters,docs:{...TwoToOneToOne.parameters?.docs,source:{originalSource:'{\n  args: {\n    children: <>\n        <Cell s={6} style={{\n        backgroundColor: "red"\n      }}>\n          1\n        </Cell>\n        <Cell s={3} style={{\n        backgroundColor: "blue"\n      }}>\n          2\n        </Cell>\n        <Cell s={3} style={{\n        backgroundColor: "green"\n      }}>\n          3\n        </Cell>\n      </>\n  }\n}',...TwoToOneToOne.parameters?.docs?.source}}}},"./lib/general/Grid/Grid.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{f:()=>Cell,x:()=>Grid});var styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_config_constants__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./lib/config/constants.ts");const Grid=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.div((({justifyContent="flex-start",alignItems="center",alignContent="stretch"})=>({width:"100%",padding:"0.25rem 0.5rem",margin:"0",display:"flex",flexDirection:"row",justifyContent,alignItems,alignContent,flexWrap:"wrap"}))),Cell=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.div((({s,m,l,hidden,justifyContent="flex-start",alignItems="center",alignContent="stretch"})=>{const style={display:"flex",justifyContent,alignItems,alignContent,margin:"0",flexBasis:"auto",hidden};if(void 0!==s&&s<=12&&s>=0){const width=Math.round(s/12*1e4)/100;style.flexBasis=`${width}%`}if(void 0!==m&&m<=12&&m>=0){const width=Math.round(m/12*1e4)/100;style[_config_constants__WEBPACK_IMPORTED_MODULE_0__.r2.m]={flexBasis:`${width}%`}}if(void 0!==l&&l<=12&&l>=0){const width=Math.round(l/12*1e4)/100;style[_config_constants__WEBPACK_IMPORTED_MODULE_0__.r2.l]={flexBasis:`${width}%`}}return style}));try{Grid.displayName="Grid",Grid.__docgenInfo={description:"",displayName:"Grid",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["lib/general/Grid/Grid.tsx#Grid"]={docgenInfo:Grid.__docgenInfo,name:"Grid",path:"lib/general/Grid/Grid.tsx#Grid"})}catch(__react_docgen_typescript_loader_error){}try{Cell.displayName="Cell",Cell.__docgenInfo={description:"",displayName:"Cell",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["lib/general/Grid/Grid.tsx#Cell"]={docgenInfo:Cell.__docgenInfo,name:"Cell",path:"lib/general/Grid/Grid.tsx#Cell"})}catch(__react_docgen_typescript_loader_error){}}}]);