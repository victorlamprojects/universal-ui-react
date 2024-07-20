"use strict";(self.webpackChunkuniversal_ui_react=self.webpackChunkuniversal_ui_react||[]).push([[535],{"./lib/config/constants.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ak:()=>ButtonVariant,R5:()=>Margin,Yq:()=>Padding,Z4:()=>FontSize,k3:()=>HoverEffect,r2:()=>BreakPoints,we:()=>ActiveEffect});let BreakPoints=function(BreakPoints){return BreakPoints.xs="@media only screen and (min-width: 0px)",BreakPoints.s="@media only screen and (min-width: 576px)",BreakPoints.m="@media only screen and (min-width: 768px)",BreakPoints.l="@media only screen and (min-width: 992px)",BreakPoints}({});const FontSize={Header:"1.375rem",Title:"1.375rem",Text:"1.25rem",ModalTitle:"1.75rem",ModalText:"1.5rem",TableTitle:"1rem",TableText:"1rem",FormTitle:"1.375rem",FormText:"1rem",FormGroupText:"0.9rem"},Padding={Button:"8px 12px",Container:"8px 12px",Header:"12px 18px",Table:"0.3rem 0.5rem",Input:"4px 6px"},Margin={Container:"0.5rem 0"};let ButtonVariant=function(ButtonVariant){return ButtonVariant.Default="default",ButtonVariant.Info="info",ButtonVariant.Success="success",ButtonVariant.Warning="warning",ButtonVariant.Error="error",ButtonVariant}({}),HoverEffect=function(HoverEffect){return HoverEffect.None="none",HoverEffect.Enlarge="enlarge",HoverEffect.Opaque="opaque",HoverEffect.Solidify="solidify",HoverEffect}({}),ActiveEffect=function(ActiveEffect){return ActiveEffect.None="none",ActiveEffect.Enlarge="enlarge",ActiveEffect.Opaque="opaque",ActiveEffect.Solidify="solidify",ActiveEffect}({})},"./lib/general/Button/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var styled_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_config_constants__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./lib/config/constants.ts"),_util_helper__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./lib/util/helper.ts"),_theme_theme__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./lib/theme/theme.ts");const Button=styled_components__WEBPACK_IMPORTED_MODULE_3__.Ay.button((({style,theme,variant="info",effect="none"})=>{theme=(0,_theme_theme__WEBPACK_IMPORTED_MODULE_2__.R_)(theme);let effects=(0,_util_helper__WEBPACK_IMPORTED_MODULE_1__.sg)(effect,theme,variant);return theme&&{outline:"none",border:"none",borderRadius:"8px",padding:_config_constants__WEBPACK_IMPORTED_MODULE_0__.Yq.Button,margin:"8px 10px",backgroundColor:theme[variant],color:theme.button.text,userSelect:"none","&:hover":{cursor:"pointer"},"&:disabled":{opacity:"0.6",cursor:"not-allowed"},...effects,...style}||style})),__WEBPACK_DEFAULT_EXPORT__=Button;try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"info"'},{value:'"success"'},{value:'"warning"'},{value:'"error"'}]}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLButtonElement | null) => void) | RefObject<HTMLButtonElement> | null"}},effect:{defaultValue:null,description:"",name:"effect",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"enlarge"'},{value:'"opaque"'},{value:'"solidify"'}]}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["lib/general/Button/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"lib/general/Button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./lib/general/Container/Block.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_theme_theme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./lib/theme/theme.ts"),_config_constants__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./lib/config/constants.ts");const Block=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.div((({style,theme})=>({position:"relative",backgroundColor:(theme=(0,_theme_theme__WEBPACK_IMPORTED_MODULE_0__.R_)(theme)).block,color:theme.text,padding:_config_constants__WEBPACK_IMPORTED_MODULE_1__.Yq.Container,margin:_config_constants__WEBPACK_IMPORTED_MODULE_1__.R5.Container,...style}))),__WEBPACK_DEFAULT_EXPORT__=Block;try{Block.displayName="Block",Block.__docgenInfo={description:"",displayName:"Block",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["lib/general/Container/Block.tsx#Block"]={docgenInfo:Block.__docgenInfo,name:"Block",path:"lib/general/Container/Block.tsx#Block"})}catch(__react_docgen_typescript_loader_error){}},"./lib/general/Container/Circle.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const CircleContainer=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.div((({size})=>({width:size||"100%",position:"relative",paddingBottom:size||"100%"}))),CircleContent=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.div((()=>({position:"absolute",top:0,left:0,width:"100%",height:"100%",overflow:"hidden",borderRadius:"50%"}))),Circle=({children,size,...rest})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(CircleContainer,{size,...rest,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(CircleContent,{children})});Circle.displayName="Circle";const __WEBPACK_DEFAULT_EXPORT__=Circle;try{Circle.displayName="Circle",Circle.__docgenInfo={description:"",displayName:"Circle",props:{size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["lib/general/Container/Circle.tsx#Circle"]={docgenInfo:Circle.__docgenInfo,name:"Circle",path:"lib/general/Container/Circle.tsx#Circle"})}catch(__react_docgen_typescript_loader_error){}},"./lib/general/Grid/Grid.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{f:()=>Cell,x:()=>Grid});var styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_config_constants__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./lib/config/constants.ts");const Grid=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.div((({justifyContent="flex-start",alignItems="center",alignContent="stretch"})=>({width:"100%",padding:"0.25rem 0.5rem",margin:"0",display:"flex",flexDirection:"row",justifyContent,alignItems,alignContent,flexWrap:"wrap"}))),Cell=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.div((({s,m,l,hidden,justifyContent="flex-start",alignItems="center",alignContent="stretch"})=>{const style={display:"flex",justifyContent,alignItems,alignContent,margin:"0",flexBasis:"auto",hidden};if(void 0!==s&&s<=12&&s>=0){const width=Math.round(s/12*1e4)/100;style.flexBasis=`${width}%`}if(void 0!==m&&m<=12&&m>=0){const width=Math.round(m/12*1e4)/100;style[_config_constants__WEBPACK_IMPORTED_MODULE_0__.r2.m]={flexBasis:`${width}%`}}if(void 0!==l&&l<=12&&l>=0){const width=Math.round(l/12*1e4)/100;style[_config_constants__WEBPACK_IMPORTED_MODULE_0__.r2.l]={flexBasis:`${width}%`}}return style}));try{Grid.displayName="Grid",Grid.__docgenInfo={description:"",displayName:"Grid",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},justifyContent:{defaultValue:null,description:"",name:"justifyContent",required:!1,type:{name:"string"}},alignItems:{defaultValue:null,description:"",name:"alignItems",required:!1,type:{name:"string"}},alignContent:{defaultValue:null,description:"",name:"alignContent",required:!1,type:{name:"string"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["lib/general/Grid/Grid.tsx#Grid"]={docgenInfo:Grid.__docgenInfo,name:"Grid",path:"lib/general/Grid/Grid.tsx#Grid"})}catch(__react_docgen_typescript_loader_error){}try{Cell.displayName="Cell",Cell.__docgenInfo={description:"",displayName:"Cell",props:{s:{defaultValue:null,description:"",name:"s",required:!1,type:{name:"number"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},justifyContent:{defaultValue:null,description:"",name:"justifyContent",required:!1,type:{name:"string"}},alignItems:{defaultValue:null,description:"",name:"alignItems",required:!1,type:{name:"string"}},alignContent:{defaultValue:null,description:"",name:"alignContent",required:!1,type:{name:"string"}},m:{defaultValue:null,description:"",name:"m",required:!1,type:{name:"number"}},l:{defaultValue:null,description:"",name:"l",required:!1,type:{name:"number"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["lib/general/Grid/Grid.tsx#Cell"]={docgenInfo:Cell.__docgenInfo,name:"Cell",path:"lib/general/Grid/Grid.tsx#Cell"})}catch(__react_docgen_typescript_loader_error){}},"./lib/general/Icon/Icon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Image=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.img`
    width: ${props=>props.width};
    height: ${props=>props.height};
    background-color: ${props=>props.backgroundColor};
`,Icon=({width="32px",height="32px",backgroundColor,className,src,onClick,...rest})=>"string"==typeof src?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image,{width,height,backgroundColor,src,...rest,className,onClick}):src,__WEBPACK_DEFAULT_EXPORT__=Icon;try{Icon.displayName="Icon",Icon.__docgenInfo={description:"",displayName:"Icon",props:{src:{defaultValue:null,description:"",name:"src",required:!0,type:{name:"string | Element"}},width:{defaultValue:{value:"32px"},description:"",name:"width",required:!1,type:{name:"string"}},height:{defaultValue:{value:"32px"},description:"",name:"height",required:!1,type:{name:"string"}},backgroundColor:{defaultValue:null,description:"",name:"backgroundColor",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["lib/general/Icon/Icon.tsx#Icon"]={docgenInfo:Icon.__docgenInfo,name:"Icon",path:"lib/general/Icon/Icon.tsx#Icon"})}catch(__react_docgen_typescript_loader_error){}},"./lib/theme/GlobalStyle.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_config_constants__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./lib/config/constants.ts");const __WEBPACK_DEFAULT_EXPORT__=styled_components__WEBPACK_IMPORTED_MODULE_1__.DU`
	/* Basic DOM */
	* {
		box-sizing: border-box;
		padding: 0;
		margin: 0;
	}
	html, body {
		padding: 0;
		margin: 0;
		height: 100%;
		font-family: Arial, Helvetica, sans-serif;
		font-size: ${_config_constants__WEBPACK_IMPORTED_MODULE_0__.Z4.Text};
		color: ${props=>props.theme.text};
		background-color: ${props=>props.theme.background};
	}
	button {
		border: none;
		outline; none;
		cursor:pointer;
	-webkit-touch-callout: none; /* iOS Safari */
	-webkit-user-select: none; /* Safari */
	  -khtml-user-select: none; /* Konqueror HTML */
		-moz-user-select: none; /* Old versions of Firefox */
		-ms-user-select: none; /* Internet Explorer/Edge */
			user-select: none; /* Non-prefixed version, currently
								  supported by Chrome, Edge, Opera and Firefox */
	}
	a {
		color: inherit;
		text-decoration: none;
	}

	/* Scroll */
	::-webkit-scrollbar {
		width: 6px;
	}

	/* Track */
	::-webkit-scrollbar-track {
		-webkit-box-shadow: inset 0 0 6px rgba(241,241,241, 0.3);
		-webkit-border-radius: 10px;
		border-radius: 10px;
	}

	/* Handle */
	::-webkit-scrollbar-thumb {
		-webkit-border-radius: 10px;
		border-radius: 10px;
		background: rgba(85, 85, 85, 0.8);
		-webkit-box-shadow: inset 0 0 6px rgba(136, 136, 136, 0.5);
	}
	::-webkit-scrollbar-thumb:window-inactive {
		background: rgba(85, 85, 85, 0.4);
	}

	.no-select {
	-webkit-touch-callout: none; /* iOS Safari */
	-webkit-user-select: none; /* Safari */
	  -khtml-user-select: none; /* Konqueror HTML */
		-moz-user-select: none; /* Old versions of Firefox */
		-ms-user-select: none; /* Internet Explorer/Edge */
			user-select: none; /* Non-prefixed version, currently
								  supported by Chrome, Edge, Opera and Firefox */
	}

`},"./lib/theme/theme.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O4:()=>getTheme,R_:()=>getDefaultThemeIfNotFound});const Dark={text:"#e3e3e3",background:"#1e1e1e",header:"#1e1e1e",sidebar:"#121212",block:"#171717",info:"#398AD7",success:"#0f9d58",warning:"#d5a439",error:"#d23f31",primary:"#435B66",secondary:"#828282",highlight:"#d5a439",card:{primary:"#02aab0",primary2:"#00cdac",secondary:"#e94057",secondary2:"#f27121",info:"#8e2de2",info2:"#4a00e0"},button:{text:"#fff",background:"#25aea6"},table:{header:"#575041",primary:"#424242",secondary:"#435B66"},form:{group:"#828282"},input:{text:"#000",background:"#e0e0e0",focusBackground:"#435B66",focusText:"#fff",disabledBackground:"transparent",disabledText:"inherit"}},Light={text:"#212121",background:"#fff",header:"#fff",sidebar:"#d2d3db",block:"#e3e3e3",info:"#74CAFF",success:"#82e846",warning:"#f7d54d",error:"#FFA48D",primary:"#9394a5",secondary:"#fefedd",highlight:"#f7d54d",card:{primary:"#8e2de2",primary2:"#4a00e0",secondary:"#e94057",secondary2:"#f27121",info:"#02aab0",info2:"#00cdac"},button:{text:"#fff",background:"#25aea6"},table:{header:"#ac9d81",primary:"#fefedd",secondary:"#42b9f5"},form:{group:"#232323"},input:{text:"#000",background:"#fff"}},getTheme=theme=>"dark"===theme?Dark:Light,getDefaultThemeIfNotFound=theme=>!theme||"object"==typeof theme&&0===Object.keys(theme).length?Light:theme},"./lib/util/helper.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{CE:()=>getActiveEffect,Kg:()=>isString,Ts:()=>getNumOfDays,sg:()=>getHoverEffect});var _config_constants__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./lib/config/constants.ts");const isString=s=>"string"==typeof s||s instanceof String,getHoverEffect=(hover,theme,variant=_config_constants__WEBPACK_IMPORTED_MODULE_0__.Ak.Default)=>{let effects={};return hover===_config_constants__WEBPACK_IMPORTED_MODULE_0__.k3.Enlarge?effects={"&:hover":{cursor:"pointer",transform:"scale(1.1)"}}:hover===_config_constants__WEBPACK_IMPORTED_MODULE_0__.k3.Opaque?effects={opacity:.75,"&:hover":{cursor:"pointer",opacity:1}}:hover===_config_constants__WEBPACK_IMPORTED_MODULE_0__.k3.Solidify&&(effects={transitionDuration:"0.3s",backgroundColor:"inherit",color:"inherit",border:`1px solid ${variant===_config_constants__WEBPACK_IMPORTED_MODULE_0__.Ak.Default?theme.primary:theme[variant]}`,"&:hover":{cursor:"pointer",backgroundColor:variant===_config_constants__WEBPACK_IMPORTED_MODULE_0__.Ak.Default?theme.primary:theme[variant],color:theme.button.text}}),effects},getActiveEffect=(active,theme)=>{let effects={};return active===_config_constants__WEBPACK_IMPORTED_MODULE_0__.we.Enlarge?effects={"&.active":{transform:"scale(1.1)"}}:active===_config_constants__WEBPACK_IMPORTED_MODULE_0__.we.Opaque?effects={"&.active":{opacity:1}}:active===_config_constants__WEBPACK_IMPORTED_MODULE_0__.we.Solidify&&(effects={"&.active":{backgroundColor:theme.primary,color:theme.button.text}}),effects},MonthMap=[31,28,31,30,31,30,31,31,30,31,30,31],getNumOfDays=(year,month)=>{if(2===month){return MonthMap[month]+(year%4==0&&year%100!=0||year%400==0?1:0)}return MonthMap[month]}},"./lib/general/Layout/Layout.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{LayoutWithAuthentication:()=>LayoutWithAuthentication,MultiTabLayoutWithDarkTheme:()=>MultiTabLayoutWithDarkTheme,MultiTabLayoutWithLightTheme:()=>MultiTabLayoutWithLightTheme,SolidMultiTabLayoutWithDarkTheme:()=>SolidMultiTabLayoutWithDarkTheme,SolidMultiTabLayoutWithLightTheme:()=>SolidMultiTabLayoutWithLightTheme,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Layout_stories});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),Grid=__webpack_require__("./lib/general/Grid/Grid.tsx"),theme_theme=__webpack_require__("./lib/theme/theme.ts"),dist=__webpack_require__("./node_modules/react-router-dom/dist/index.js"),react_router_dist=__webpack_require__("./node_modules/react-router/dist/index.js");const assert=(expr,errMsg)=>{if(!expr)throw Error(errMsg)};var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");let MultiTabLayoutType=function(MultiTabLayoutType){return MultiTabLayoutType.Default="default",MultiTabLayoutType.Bar="bar",MultiTabLayoutType}({});const MultiTabContainer=styled_components_browser_esm.Ay.div((({theme})=>({width:"100vw",height:"100vh",backgroundColor:(theme=(0,theme_theme.R_)(theme)).background,position:"relative",display:"flex",flexDirection:"column-reverse"}))),MultiTabGroup=(0,styled_components_browser_esm.Ay)(Grid.x)((({theme})=>({minHeight:"36px",height:"3.5rem",width:"100%",fontSize:"1rem",margin:"0",padding:"0",backgroundColor:"inherit",color:(theme=(0,theme_theme.R_)(theme)).text}))),MultiTab=({children,...rest})=>(0,jsx_runtime.jsx)(Grid.f,{...rest,children});MultiTab.displayName="MultiTab";const MultiTabInternal=(0,styled_components_browser_esm.Ay)(dist.k2)((({theme,type})=>{theme=(0,theme_theme.R_)(theme);let effects={};return type===MultiTabLayoutType.Default?effects={"&.active":{backgroundColor:"transparent","*:has(+&)":{borderTopRightRadius:"10px"},"& + *":{borderTopLeftRadius:"10px"}}}:type===MultiTabLayoutType.Bar&&(effects={"&.active":{boxShadow:`0 -1px 0 ${theme.primary}`}}),{userSelect:"none",height:"100%",display:"flex",margin:"0",justifyContent:"center",alignItems:"center",flexGrow:1,flexBasis:"auto",backgroundColor:theme.sidebar,"&:hover":{cursor:"pointer"},...effects}})),MultiTabContent=styled_components_browser_esm.Ay.div((({theme})=>(theme=(0,theme_theme.R_)(theme),{flex:1,height:"calc(100% - 3.5rem)",maxHeight:"calc(100% - 36px)",overflowY:"scroll"}))),Auth=({isAuth,authPath,comp})=>{const location=(0,react_router_dist.zy)();return isAuth()?comp:(0,jsx_runtime.jsx)(react_router_dist.C5,{to:authPath,state:{from:location},replace:!0})},MultiTabLayout=({children,authPath,isAuth,authComponent,type=MultiTabLayoutType.Default,...rest})=>{const childrenArr=react.Children.toArray(children),{tabs,protectedRoutes,unprotectedRoutes,defaultRoute}=childrenArr&&childrenArr.reduce(((prev,child,i)=>(null==prev.defaultRoute&&child.props.path&&(prev.defaultRoute=child.props.path),child.props.children&&prev.tabs.push((0,jsx_runtime.jsx)(MultiTabInternal,{type,to:child.props.path,children:child.props.children},`layout-route-tab-${i}`)),child.props.auth?prev.protectedRoutes.push((0,jsx_runtime.jsx)(react_router_dist.qh,{path:child.props.path,element:(0,jsx_runtime.jsx)(Auth,{authPath:authPath||"",isAuth:isAuth||(()=>!0),comp:child.props.component})},`layout-route-private-${i}`)):prev.unprotectedRoutes.push((0,jsx_runtime.jsx)(react_router_dist.qh,{path:child.props.path,element:child.props.component},`layout-route-${i}`)),prev)),{tabs:[],protectedRoutes:[],unprotectedRoutes:[],defaultRoute:null});protectedRoutes&&protectedRoutes.length>0&&(assert(void 0!==authPath,"authPath must be specified when using protected routes"),assert(void 0!==isAuth,"isAuth method must be specified when using protected routes"),assert(void 0!==authComponent,"authComponent must be specified when using protected routes"));const MainPage=()=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(MultiTabGroup,{justifyContent:"stretch",children:tabs}),(0,jsx_runtime.jsx)(MultiTabContent,{children:(0,jsx_runtime.jsx)(react_router_dist.sv,{})})]});return(0,jsx_runtime.jsx)(dist.Kd,{children:(0,jsx_runtime.jsx)(MultiTabContainer,{...rest,children:(0,jsx_runtime.jsxs)(react_router_dist.BV,{children:[authPath&&authComponent&&(0,jsx_runtime.jsx)(react_router_dist.qh,{path:authPath,element:authComponent}),(0,jsx_runtime.jsxs)(react_router_dist.qh,{path:"/",element:(0,jsx_runtime.jsx)(MainPage,{}),children:[unprotectedRoutes,protectedRoutes,defaultRoute&&(0,jsx_runtime.jsx)(react_router_dist.qh,{path:"*",element:(0,jsx_runtime.jsx)(react_router_dist.C5,{to:defaultRoute})})]})]})})})};MultiTabLayout.displayName="MultiTabLayout";try{MultiTab.displayName="MultiTab",MultiTab.__docgenInfo={description:"",displayName:"MultiTab",props:{s:{defaultValue:null,description:"",name:"s",required:!1,type:{name:"number"}},m:{defaultValue:null,description:"",name:"m",required:!1,type:{name:"number"}},l:{defaultValue:null,description:"",name:"l",required:!1,type:{name:"number"}},justifyContent:{defaultValue:null,description:"",name:"justifyContent",required:!1,type:{name:"string"}},alignItems:{defaultValue:null,description:"",name:"alignItems",required:!1,type:{name:"string"}},alignContent:{defaultValue:null,description:"",name:"alignContent",required:!1,type:{name:"string"}},component:{defaultValue:null,description:"",name:"component",required:!0,type:{name:"ReactNode"}},path:{defaultValue:null,description:"",name:"path",required:!0,type:{name:"string"}},auth:{defaultValue:null,description:"",name:"auth",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["lib/general/Layout/MultiTabLayout.tsx#MultiTab"]={docgenInfo:MultiTab.__docgenInfo,name:"MultiTab",path:"lib/general/Layout/MultiTabLayout.tsx#MultiTab"})}catch(__react_docgen_typescript_loader_error){}try{MultiTabLayout.displayName="MultiTabLayout",MultiTabLayout.__docgenInfo={description:"",displayName:"MultiTabLayout",props:{type:{defaultValue:{value:"MultiTabLayoutType.Default"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"bar"'}]}},authPath:{defaultValue:null,description:"",name:"authPath",required:!1,type:{name:"string"}},isAuth:{defaultValue:null,description:"",name:"isAuth",required:!1,type:{name:"(() => boolean)"}},authComponent:{defaultValue:null,description:"",name:"authComponent",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["lib/general/Layout/MultiTabLayout.tsx#MultiTabLayout"]={docgenInfo:MultiTabLayout.__docgenInfo,name:"MultiTabLayout",path:"lib/general/Layout/MultiTabLayout.tsx#MultiTabLayout"})}catch(__react_docgen_typescript_loader_error){}var Block=__webpack_require__("./lib/general/Container/Block.tsx"),Circle=__webpack_require__("./lib/general/Container/Circle.tsx"),Icon=__webpack_require__("./lib/general/Icon/Icon.tsx"),Button=__webpack_require__("./lib/general/Button/Button.tsx"),GlobalStyle=__webpack_require__("./lib/theme/GlobalStyle.tsx");const Layout_stories={title:"VictorLam/Layout",component:MultiTabLayout},Tab1=()=>(0,jsx_runtime.jsx)(Block.A,{children:"Tab 1 Content"});Tab1.displayName="Tab1";const Tab2=()=>(0,jsx_runtime.jsx)(Block.A,{children:"Tab 2 Content"});Tab2.displayName="Tab2";const Tab3=()=>(0,jsx_runtime.jsx)(Block.A,{children:"Tab 3 Content"});Tab3.displayName="Tab3";const Tab4=()=>(0,jsx_runtime.jsx)(Block.A,{children:"Tab 4 Content"});Tab4.displayName="Tab4";const MultiTabLayoutWithDarkTheme={args:{},render:args=>(0,jsx_runtime.jsxs)(styled_components_browser_esm.NP,{theme:(0,theme_theme.O4)("dark"),children:[(0,jsx_runtime.jsx)(GlobalStyle.A,{}),(0,jsx_runtime.jsxs)(MultiTabLayout,{...args,children:[(0,jsx_runtime.jsx)(MultiTab,{path:"/tab1",component:(0,jsx_runtime.jsx)(Tab1,{}),children:"Tab1"}),(0,jsx_runtime.jsx)(MultiTab,{path:"/tab2",component:(0,jsx_runtime.jsx)(Tab2,{}),children:(0,jsx_runtime.jsxs)(Grid.x,{children:[(0,jsx_runtime.jsx)(Grid.f,{s:12,style:{justifyContent:"center"},children:(0,jsx_runtime.jsx)(Icon.A,{src:"https://picsum.photos/200"})}),(0,jsx_runtime.jsx)(Grid.f,{s:12,style:{justifyContent:"center"},children:"Tab2"})]})}),(0,jsx_runtime.jsx)(MultiTab,{path:"/tab3",component:(0,jsx_runtime.jsx)(Tab3,{}),children:(0,jsx_runtime.jsx)(Grid.x,{children:(0,jsx_runtime.jsx)(Grid.f,{s:12,style:{justifyContent:"center"},children:(0,jsx_runtime.jsx)(Icon.A,{src:"https://picsum.photos/200"})})})}),(0,jsx_runtime.jsx)(MultiTab,{path:"/tab4",component:(0,jsx_runtime.jsx)(Tab4,{}),children:(0,jsx_runtime.jsxs)(Grid.x,{children:[(0,jsx_runtime.jsx)(Grid.f,{s:12,style:{justifyContent:"center"},children:(0,jsx_runtime.jsx)(Circle.A,{size:"32px",children:(0,jsx_runtime.jsx)(Icon.A,{src:"https://picsum.photos/200"})})}),(0,jsx_runtime.jsx)(Grid.f,{s:12,style:{justifyContent:"center"},children:"Tab4"})]})})]})]})},SolidMultiTabLayoutWithDarkTheme={args:{type:MultiTabLayoutType.Bar},render:MultiTabLayoutWithDarkTheme.render},MultiTabLayoutWithLightTheme={args:{},render:args=>(0,jsx_runtime.jsxs)(styled_components_browser_esm.NP,{theme:(0,theme_theme.O4)("light"),children:[(0,jsx_runtime.jsx)(GlobalStyle.A,{}),(0,jsx_runtime.jsxs)(MultiTabLayout,{...args,children:[(0,jsx_runtime.jsx)(MultiTab,{path:"/tab1",component:(0,jsx_runtime.jsx)(Tab1,{}),children:"Tab1"}),(0,jsx_runtime.jsx)(MultiTab,{path:"/tab2",component:(0,jsx_runtime.jsx)(Tab2,{}),children:(0,jsx_runtime.jsxs)(Grid.x,{children:[(0,jsx_runtime.jsx)(Grid.f,{s:12,style:{justifyContent:"center"},children:(0,jsx_runtime.jsx)(Icon.A,{src:"https://picsum.photos/200"})}),(0,jsx_runtime.jsx)(Grid.f,{s:12,style:{justifyContent:"center"},children:"Tab2"})]})}),(0,jsx_runtime.jsx)(MultiTab,{path:"/tab3",component:(0,jsx_runtime.jsx)(Tab3,{}),children:(0,jsx_runtime.jsx)(Grid.x,{children:(0,jsx_runtime.jsx)(Grid.f,{s:12,style:{justifyContent:"center"},children:(0,jsx_runtime.jsx)(Icon.A,{src:"https://picsum.photos/200"})})})}),(0,jsx_runtime.jsx)(MultiTab,{path:"/tab4",component:(0,jsx_runtime.jsx)(Tab4,{}),children:(0,jsx_runtime.jsxs)(Grid.x,{children:[(0,jsx_runtime.jsx)(Grid.f,{s:12,style:{justifyContent:"center"},children:(0,jsx_runtime.jsx)(Circle.A,{size:"32px",children:(0,jsx_runtime.jsx)(Icon.A,{src:"https://picsum.photos/200"})})}),(0,jsx_runtime.jsx)(Grid.f,{s:12,style:{justifyContent:"center"},children:"Tab4"})]})})]})]})},SolidMultiTabLayoutWithLightTheme={args:{type:MultiTabLayoutType.Bar},render:MultiTabLayoutWithLightTheme.render},LoginPage=({loginCallback})=>{const navigate=(0,react_router_dist.Zp)(),location=(0,react_router_dist.zy)(),origin=location.state?.from||"/";return(0,jsx_runtime.jsx)(Button.A,{onClick:()=>(loginCallback(),void navigate(origin,{replace:!0})),children:"Authenticate"})};LoginPage.displayName="LoginPage";const LayoutWithAuthentication={args:{type:MultiTabLayoutType.Bar,authPath:"/login"},render:args=>{const[login,setLogin]=(0,react.useState)(!1);return(0,jsx_runtime.jsxs)(styled_components_browser_esm.NP,{theme:(0,theme_theme.O4)("dark"),children:[(0,jsx_runtime.jsx)(GlobalStyle.A,{}),(0,jsx_runtime.jsxs)(MultiTabLayout,{...args,isAuth:()=>login,authComponent:(0,jsx_runtime.jsx)(LoginPage,{loginCallback:()=>setLogin(!0)}),children:[(0,jsx_runtime.jsx)(MultiTab,{path:"/tab1",component:(0,jsx_runtime.jsx)(Tab1,{}),auth:!0,children:"Protected Tab"}),(0,jsx_runtime.jsx)(MultiTab,{path:"/tab2",component:(0,jsx_runtime.jsx)(Tab2,{}),auth:!0,children:(0,jsx_runtime.jsxs)(Grid.x,{children:[(0,jsx_runtime.jsx)(Grid.f,{s:12,style:{justifyContent:"center"},children:(0,jsx_runtime.jsx)(Icon.A,{src:"https://picsum.photos/200"})}),(0,jsx_runtime.jsx)(Grid.f,{s:12,style:{justifyContent:"center"},children:"Protected Tab2"})]})}),(0,jsx_runtime.jsx)(MultiTab,{path:"/tab3",component:(0,jsx_runtime.jsx)(Tab3,{}),children:(0,jsx_runtime.jsx)(Grid.x,{children:(0,jsx_runtime.jsx)(Grid.f,{s:12,style:{justifyContent:"center"},children:(0,jsx_runtime.jsx)(Icon.A,{src:"https://picsum.photos/200"})})})}),(0,jsx_runtime.jsx)(MultiTab,{path:"/tab4",component:(0,jsx_runtime.jsx)(Tab4,{}),children:(0,jsx_runtime.jsxs)(Grid.x,{children:[(0,jsx_runtime.jsx)(Grid.f,{s:12,style:{justifyContent:"center"},children:(0,jsx_runtime.jsx)(Circle.A,{size:"32px",children:(0,jsx_runtime.jsx)(Icon.A,{src:"https://picsum.photos/200"})})}),(0,jsx_runtime.jsx)(Grid.f,{s:12,style:{justifyContent:"center"},children:"Tab4"})]})})]})]})}};MultiTabLayoutWithDarkTheme.parameters={...MultiTabLayoutWithDarkTheme.parameters,docs:{...MultiTabLayoutWithDarkTheme.parameters?.docs,source:{originalSource:'{\n  args: {},\n  render: (args: ComponentProps<typeof MultiTabLayout>) => {\n    return <ThemeProvider theme={getTheme("dark")}>\n                <GlobalStyle />\n                <MultiTabLayout {...args}>\n                    <MultiTab path={"/tab1"} component={<Tab1 />}>\n                        Tab1\n                    </MultiTab>\n                    <MultiTab path={"/tab2"} component={<Tab2 />}>\n                        <Grid>\n                            <Cell s={12} style={{\n              justifyContent: "center"\n            }}>\n                                <Icon src="https://picsum.photos/200" />\n                            </Cell>\n                            <Cell s={12} style={{\n              justifyContent: "center"\n            }}>\n                                Tab2\n                            </Cell>\n                        </Grid>\n                    </MultiTab>\n                    <MultiTab path={"/tab3"} component={<Tab3 />}>\n                        <Grid>\n                            <Cell s={12} style={{\n              justifyContent: "center"\n            }}>\n                                <Icon src="https://picsum.photos/200" />\n                            </Cell>\n                        </Grid>\n                    </MultiTab>\n                    <MultiTab path={"/tab4"} component={<Tab4 />}>\n                        <Grid>\n                            <Cell s={12} style={{\n              justifyContent: "center"\n            }}>\n                                <Circle size={"32px"}>\n                                    <Icon src="https://picsum.photos/200" />\n                                </Circle>\n                            </Cell>\n                            <Cell s={12} style={{\n              justifyContent: "center"\n            }}>\n                                Tab4\n                            </Cell>\n                        </Grid>\n                    </MultiTab>\n                </MultiTabLayout>\n            </ThemeProvider>;\n  }\n}',...MultiTabLayoutWithDarkTheme.parameters?.docs?.source}}},SolidMultiTabLayoutWithDarkTheme.parameters={...SolidMultiTabLayoutWithDarkTheme.parameters,docs:{...SolidMultiTabLayoutWithDarkTheme.parameters?.docs,source:{originalSource:"{\n  args: {\n    type: MultiTabLayoutType.Bar\n  },\n  render: MultiTabLayoutWithDarkTheme.render\n}",...SolidMultiTabLayoutWithDarkTheme.parameters?.docs?.source}}},MultiTabLayoutWithLightTheme.parameters={...MultiTabLayoutWithLightTheme.parameters,docs:{...MultiTabLayoutWithLightTheme.parameters?.docs,source:{originalSource:'{\n  args: {},\n  render: (args: ComponentProps<typeof MultiTabLayout>) => {\n    return <ThemeProvider theme={getTheme("light")}>\n                <GlobalStyle />\n                <MultiTabLayout {...args}>\n                    <MultiTab path={"/tab1"} component={<Tab1 />}>\n                        Tab1\n                    </MultiTab>\n                    <MultiTab path={"/tab2"} component={<Tab2 />}>\n                        <Grid>\n                            <Cell s={12} style={{\n              justifyContent: "center"\n            }}>\n                                <Icon src="https://picsum.photos/200" />\n                            </Cell>\n                            <Cell s={12} style={{\n              justifyContent: "center"\n            }}>\n                                Tab2\n                            </Cell>\n                        </Grid>\n                    </MultiTab>\n                    <MultiTab path={"/tab3"} component={<Tab3 />}>\n                        <Grid>\n                            <Cell s={12} style={{\n              justifyContent: "center"\n            }}>\n                                <Icon src="https://picsum.photos/200" />\n                            </Cell>\n                        </Grid>\n                    </MultiTab>\n                    <MultiTab path={"/tab4"} component={<Tab4 />}>\n                        <Grid>\n                            <Cell s={12} style={{\n              justifyContent: "center"\n            }}>\n                                <Circle size={"32px"}>\n                                    <Icon src="https://picsum.photos/200" />\n                                </Circle>\n                            </Cell>\n                            <Cell s={12} style={{\n              justifyContent: "center"\n            }}>\n                                Tab4\n                            </Cell>\n                        </Grid>\n                    </MultiTab>\n                </MultiTabLayout>\n            </ThemeProvider>;\n  }\n}',...MultiTabLayoutWithLightTheme.parameters?.docs?.source}}},SolidMultiTabLayoutWithLightTheme.parameters={...SolidMultiTabLayoutWithLightTheme.parameters,docs:{...SolidMultiTabLayoutWithLightTheme.parameters?.docs,source:{originalSource:"{\n  args: {\n    type: MultiTabLayoutType.Bar\n  },\n  render: MultiTabLayoutWithLightTheme.render\n}",...SolidMultiTabLayoutWithLightTheme.parameters?.docs?.source}}},LayoutWithAuthentication.parameters={...LayoutWithAuthentication.parameters,docs:{...LayoutWithAuthentication.parameters?.docs,source:{originalSource:'{\n  args: {\n    type: MultiTabLayoutType.Bar,\n    authPath: "/login"\n  },\n  render: (args: ComponentProps<typeof MultiTabLayout>) => {\n    const [login, setLogin] = useState(false);\n    return <ThemeProvider theme={getTheme("dark")}>\n                <GlobalStyle />\n                <MultiTabLayout {...args} isAuth={() => login} authComponent={<LoginPage loginCallback={() => setLogin(true)} />}>\n                    <MultiTab path={"/tab1"} component={<Tab1 />} auth={true}>\n                        Protected Tab\n                    </MultiTab>\n                    <MultiTab path={"/tab2"} component={<Tab2 />} auth={true}>\n                        <Grid>\n                            <Cell s={12} style={{\n              justifyContent: "center"\n            }}>\n                                <Icon src="https://picsum.photos/200" />\n                            </Cell>\n                            <Cell s={12} style={{\n              justifyContent: "center"\n            }}>\n                                Protected Tab2\n                            </Cell>\n                        </Grid>\n                    </MultiTab>\n                    <MultiTab path={"/tab3"} component={<Tab3 />}>\n                        <Grid>\n                            <Cell s={12} style={{\n              justifyContent: "center"\n            }}>\n                                <Icon src="https://picsum.photos/200" />\n                            </Cell>\n                        </Grid>\n                    </MultiTab>\n                    <MultiTab path={"/tab4"} component={<Tab4 />}>\n                        <Grid>\n                            <Cell s={12} style={{\n              justifyContent: "center"\n            }}>\n                                <Circle size={"32px"}>\n                                    <Icon src="https://picsum.photos/200" />\n                                </Circle>\n                            </Cell>\n                            <Cell s={12} style={{\n              justifyContent: "center"\n            }}>\n                                Tab4\n                            </Cell>\n                        </Grid>\n                    </MultiTab>\n                </MultiTabLayout>\n            </ThemeProvider>;\n  }\n}',...LayoutWithAuthentication.parameters?.docs?.source}}};const __namedExportsOrder=["MultiTabLayoutWithDarkTheme","SolidMultiTabLayoutWithDarkTheme","MultiTabLayoutWithLightTheme","SolidMultiTabLayoutWithLightTheme","LayoutWithAuthentication"]}}]);
//# sourceMappingURL=general-Layout-Layout-stories.39b62029.iframe.bundle.js.map