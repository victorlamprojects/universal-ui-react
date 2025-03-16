"use strict";(self.webpackChunkuniversal_ui_react=self.webpackChunkuniversal_ui_react||[]).push([[69],{"./lib/config/constants.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ak:()=>ButtonVariant,OD:()=>HorizontalAlignment,R5:()=>Margin,Yq:()=>Padding,Z4:()=>FontSize,_n:()=>NotificationType,k3:()=>HoverEffect,r2:()=>BreakPoints,sx:()=>VerticalAlignment,we:()=>ActiveEffect});let BreakPoints=function(BreakPoints){return BreakPoints.xs="@media only screen and (min-width: 0px)",BreakPoints.s="@media only screen and (min-width: 576px)",BreakPoints.m="@media only screen and (min-width: 768px)",BreakPoints.l="@media only screen and (min-width: 992px)",BreakPoints}({});const FontSize={Header:"1.375rem",Title:"1.375rem",Text:"1.25rem",ModalTitle:"1.75rem",ModalText:"1.5rem",TableTitle:"1rem",TableText:"1rem",FormTitle:"1.375rem",FormText:"1rem",FormGroupText:"0.9rem"},Padding={Button:"8px 12px",Container:"8px 12px",Header:"12px 18px",Table:"0.3rem 0.5rem",Input:"4px 6px"},Margin={Container:"0.5rem 0"};let ButtonVariant=function(ButtonVariant){return ButtonVariant.Default="default",ButtonVariant.Info="info",ButtonVariant.Success="success",ButtonVariant.Warning="warning",ButtonVariant.Error="error",ButtonVariant}({}),NotificationType=function(NotificationType){return NotificationType.Info="info",NotificationType.Success="success",NotificationType.Warning="warning",NotificationType.Error="error",NotificationType}({}),VerticalAlignment=function(VerticalAlignment){return VerticalAlignment.Top="top",VerticalAlignment.Middle="middle",VerticalAlignment.Bottom="bottom",VerticalAlignment}({}),HorizontalAlignment=function(HorizontalAlignment){return HorizontalAlignment.Left="left",HorizontalAlignment.Middle="middle",HorizontalAlignment.Right="right",HorizontalAlignment}({}),HoverEffect=function(HoverEffect){return HoverEffect.None="none",HoverEffect.Enlarge="enlarge",HoverEffect.Opaque="opaque",HoverEffect.Solidify="solidify",HoverEffect}({}),ActiveEffect=function(ActiveEffect){return ActiveEffect.None="none",ActiveEffect.Enlarge="enlarge",ActiveEffect.Opaque="opaque",ActiveEffect.Solidify="solidify",ActiveEffect}({})},"./lib/general/Container/Circle.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const CircleContainer=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.div((({size})=>({width:size||"100%",position:"relative",paddingBottom:size||"100%"}))),CircleContent=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.div((()=>({position:"absolute",top:0,left:0,width:"100%",height:"100%",overflow:"hidden",borderRadius:"50%"}))),Circle=({children,size,...rest})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(CircleContainer,{size,...rest,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(CircleContent,{children})}),__WEBPACK_DEFAULT_EXPORT__=Circle;try{Circle.displayName="Circle",Circle.__docgenInfo={description:"",displayName:"Circle",props:{size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["lib/general/Container/Circle.tsx#Circle"]={docgenInfo:Circle.__docgenInfo,name:"Circle",path:"lib/general/Container/Circle.tsx#Circle"})}catch(__react_docgen_typescript_loader_error){}},"./lib/general/Icon/Icon.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CircleIcon:()=>CircleIcon,SquareIcon:()=>SquareIcon,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Icon_stories});__webpack_require__("./node_modules/react/index.js");var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),dist=__webpack_require__("./node_modules/@storybook/addon-themes/dist/index.mjs"),theme=__webpack_require__("./lib/theme/index.ts"),Icon=__webpack_require__("./lib/general/Icon/Icon.tsx"),Circle=__webpack_require__("./lib/general/Container/Circle.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const SquareContainer=styled_components_browser_esm.Ay.div((({size})=>({width:size||"100%",position:"relative",paddingBottom:size||"100%"}))),SquareContent=styled_components_browser_esm.Ay.div((()=>({position:"absolute",top:0,left:0,width:"100%",height:"100%"}))),Square=({children,size,...rest})=>(0,jsx_runtime.jsx)(SquareContainer,{size,...rest,children:(0,jsx_runtime.jsx)(SquareContent,{children})}),Container_Square=Square;try{Square.displayName="Square",Square.__docgenInfo={description:"",displayName:"Square",props:{size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["lib/general/Container/Square.tsx#Square"]={docgenInfo:Square.__docgenInfo,name:"Square",path:"lib/general/Container/Square.tsx#Square"})}catch(__react_docgen_typescript_loader_error){}const Icon_stories={title:"VictorLam/General/Icon",component:Icon.A,decorators:[(0,dist.gW)({themes:{light:(0,theme.O4)("light"),dark:(0,theme.O4)("dark")},defaultTheme:"light",Provider:styled_components_browser_esm.NP,GlobalStyles:theme.zy})]},SquareIcon={args:{width:"100%",height:"100%",src:"https://picsum.photos/200"},decorators:[Story=>(0,jsx_runtime.jsx)(Container_Square,{size:"10em",children:(0,jsx_runtime.jsx)(Story,{})})]},CircleIcon={args:{width:"100%",height:"100%",src:"https://picsum.photos/200"},decorators:[Story=>(0,jsx_runtime.jsx)(Circle.A,{size:"10em",children:(0,jsx_runtime.jsx)(Story,{})})]},__namedExportsOrder=["SquareIcon","CircleIcon"];SquareIcon.parameters={...SquareIcon.parameters,docs:{...SquareIcon.parameters?.docs,source:{originalSource:'{\n  args: {\n    width: "100%",\n    height: "100%",\n    src: "https://picsum.photos/200"\n  },\n  decorators: [Story => <Square size={"10em"}>\n        <Story />\n      </Square>]\n}',...SquareIcon.parameters?.docs?.source}}},CircleIcon.parameters={...CircleIcon.parameters,docs:{...CircleIcon.parameters?.docs,source:{originalSource:'{\n  args: {\n    width: "100%",\n    height: "100%",\n    src: "https://picsum.photos/200"\n  },\n  decorators: [Story => <Circle size={"10em"}>\n        <Story />\n      </Circle>]\n}',...CircleIcon.parameters?.docs?.source}}}},"./lib/general/Icon/Icon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Image=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.img`
    width: ${props=>props.width};
    height: ${props=>props.height};
    background-color: ${props=>props.backgroundColor};
`,Icon=({width="32px",height="32px",backgroundColor,className,src,onClick,...rest})=>"string"==typeof src?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image,{width,height,backgroundColor,src,...rest,className,onClick}):src,__WEBPACK_DEFAULT_EXPORT__=Icon;try{Icon.displayName="Icon",Icon.__docgenInfo={description:"",displayName:"Icon",props:{src:{defaultValue:null,description:"",name:"src",required:!0,type:{name:"string | Element"}},width:{defaultValue:{value:"32px"},description:"",name:"width",required:!1,type:{name:"string"}},height:{defaultValue:{value:"32px"},description:"",name:"height",required:!1,type:{name:"string"}},backgroundColor:{defaultValue:null,description:"",name:"backgroundColor",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["lib/general/Icon/Icon.tsx#Icon"]={docgenInfo:Icon.__docgenInfo,name:"Icon",path:"lib/general/Icon/Icon.tsx#Icon"})}catch(__react_docgen_typescript_loader_error){}},"./lib/theme/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{zy:()=>theme_GlobalStyle,O4:()=>theme.O4});var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),constants=__webpack_require__("./lib/config/constants.ts");const theme_GlobalStyle=styled_components_browser_esm.DU`
	/* Basic DOM */
	* {
		box-sizing: border-box;
		padding: 0;
		margin: 0;
	}
	html, body { padding: 0;
		margin: 0;
		height: 100%;
		font-family: Arial, Helvetica, sans-serif;
		font-size: ${constants.Z4.Text};
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

`;var theme=__webpack_require__("./lib/theme/theme.ts")},"./lib/theme/theme.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O4:()=>getTheme,R_:()=>getDefaultThemeIfNotFound});const Dark={text:"#e3e3e3",background:"#1e1e1e",header:"#1e1e1e",sidebar:"#121212",block:"#171717",info:"#398AD7",success:"#0f9d58",warning:"#d5a439",error:"#d23f31",primary:"#435B66",secondary:"#828282",highlight:"#d5a439",card:{primary:"#02aab0",primary2:"#00cdac",secondary:"#e94057",secondary2:"#f27121",info:"#8e2de2",info2:"#4a00e0"},button:{text:"#fff",background:"#25aea6"},table:{header:"#575041",primary:"#424242",secondary:"#435B66"},form:{group:"#828282"},input:{text:"#000",background:"#e0e0e0",focusBackground:"#435B66",focusText:"#fff",disabledBackground:"transparent",disabledText:"inherit"}},Light={text:"#212121",background:"#fff",header:"#fff",sidebar:"#d2d3db",block:"#e3e3e3",info:"#74CAFF",success:"#82e846",warning:"#f7d54d",error:"#FFA48D",primary:"#9394a5",secondary:"#fefedd",highlight:"#f7d54d",card:{primary:"#8e2de2",primary2:"#4a00e0",secondary:"#e94057",secondary2:"#f27121",info:"#02aab0",info2:"#00cdac"},button:{text:"#fff",background:"#25aea6"},table:{header:"#ac9d81",primary:"#fefedd",secondary:"#42b9f5"},form:{group:"#232323"},input:{text:"#000",background:"#fff"}},getTheme=theme=>"dark"===theme?Dark:Light,getDefaultThemeIfNotFound=theme=>!theme||"object"==typeof theme&&0===Object.keys(theme).length?Light:theme},"./node_modules/@storybook/addon-themes/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{gW:()=>withThemeFromJSXProvider});var storybook_internal_preview_api__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("storybook/internal/preview-api"),storybook_internal_client_logger__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("storybook/internal/client-logger"),ts_dedent__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/ts-dedent/esm/index.js"),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/index.js"),__defProp=Object.defineProperty,__export=(target,all)=>{for(var name in all)__defProp(target,name,{get:all[name],enumerable:!0})},preview_exports={};__export(preview_exports,{initialGlobals:()=>initialGlobals});var GLOBAL_KEY="theme",DEFAULT_THEME_PARAMETERS={},THEMING_EVENTS={REGISTER_THEMES:"storybook/themes/REGISTER_THEMES"},initialGlobals={[GLOBAL_KEY]:""};function pluckThemeFromContext({globals}){return globals.theme||""}function useThemeParameters(context){return(0,storybook_internal_client_logger__WEBPACK_IMPORTED_MODULE_1__.deprecate)(ts_dedent__WEBPACK_IMPORTED_MODULE_3__.A`The useThemeParameters function is deprecated. Please access parameters via the context directly instead e.g.
    - const { themeOverride } = context.parameters.themes ?? {};
    `),context?context.parameters.themes??DEFAULT_THEME_PARAMETERS:(0,storybook_internal_preview_api__WEBPACK_IMPORTED_MODULE_0__.useParameter)("themes",DEFAULT_THEME_PARAMETERS)}function initializeThemeState(themeNames,defaultTheme){storybook_internal_preview_api__WEBPACK_IMPORTED_MODULE_0__.addons.getChannel().emit(THEMING_EVENTS.REGISTER_THEMES,{defaultTheme,themes:themeNames})}__export({},{initializeThemeState:()=>initializeThemeState,pluckThemeFromContext:()=>pluckThemeFromContext,useThemeParameters:()=>useThemeParameters});var withThemeFromJSXProvider=({Provider,GlobalStyles,defaultTheme,themes={}})=>{let themeNames=Object.keys(themes),initialTheme=defaultTheme||themeNames[0];return initializeThemeState(themeNames,initialTheme),(storyFn,context)=>{let{themeOverride}=context.parameters.themes??{},selected=pluckThemeFromContext(context),theme=(0,storybook_internal_preview_api__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>{let selectedThemeName=themeOverride||selected||initialTheme,pairs=Object.entries(themes);return 1===pairs.length?(([_,themeConfig])=>themeConfig)(pairs[0]):themes[selectedThemeName]}),[selected,themeOverride]);return Provider?react__WEBPACK_IMPORTED_MODULE_2__.createElement(Provider,{theme},GlobalStyles&&react__WEBPACK_IMPORTED_MODULE_2__.createElement(GlobalStyles,null),storyFn()):react__WEBPACK_IMPORTED_MODULE_2__.createElement(react__WEBPACK_IMPORTED_MODULE_2__.Fragment,null,GlobalStyles&&react__WEBPACK_IMPORTED_MODULE_2__.createElement(GlobalStyles,null),storyFn())}}}}]);
//# sourceMappingURL=general-Icon-Icon-stories.4095d52a.iframe.bundle.js.map