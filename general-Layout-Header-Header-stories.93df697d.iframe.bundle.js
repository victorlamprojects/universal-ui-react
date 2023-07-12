"use strict";(self.webpackChunkuniversal_ui_react=self.webpackChunkuniversal_ui_react||[]).push([[699],{"./lib/config/constants.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Bf:()=>FontSize,EY:()=>ActiveEffect,OA:()=>BreakPoints,Wu:()=>ButtonVariant,Zh:()=>Padding,Zt:()=>Margin,ds:()=>HoverEffect});let BreakPoints=function(BreakPoints){return BreakPoints.xs="@media only screen and (min-width: 0px)",BreakPoints.s="@media only screen and (min-width: 576px)",BreakPoints.m="@media only screen and (min-width: 768px)",BreakPoints.l="@media only screen and (min-width: 992px)",BreakPoints}({});const FontSize={Header:"1.375rem",Title:"1.375rem",Text:"1.25rem",ModalTitle:"1.75rem",ModalText:"1.5rem",TableTitle:"1rem",TableText:"1rem",FormTitle:"1.375rem",FormText:"1rem",FormGroupText:"0.9rem"},Padding={Button:"8px 12px",Container:"8px 12px",Header:"12px 18px",Table:"0.3rem 0.5rem",Input:"4px 6px"},Margin={Container:"0.5rem 0"};let ButtonVariant=function(ButtonVariant){return ButtonVariant.Default="default",ButtonVariant.Info="info",ButtonVariant.Success="success",ButtonVariant.Warning="warning",ButtonVariant.Error="error",ButtonVariant}({}),HoverEffect=function(HoverEffect){return HoverEffect.None="none",HoverEffect.Enlarge="enlarge",HoverEffect.Opaque="opaque",HoverEffect.Solidify="solidify",HoverEffect}({}),ActiveEffect=function(ActiveEffect){return ActiveEffect.None="none",ActiveEffect.Enlarge="enlarge",ActiveEffect.Opaque="opaque",ActiveEffect.Solidify="solidify",ActiveEffect}({})},"./lib/theme/GlobalStyle.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_config_constants__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./lib/config/constants.ts");const __WEBPACK_DEFAULT_EXPORT__=styled_components__WEBPACK_IMPORTED_MODULE_1__.vJ`
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
		font-size: ${_config_constants__WEBPACK_IMPORTED_MODULE_0__.Bf.Text};
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

`},"./lib/theme/theme.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{gh:()=>getTheme,wk:()=>getDefaultThemeIfNotFound});const Dark={text:"#e3e3e3",background:"#1e1e1e",header:"#1e1e1e",sidebar:"#121212",block:"#171717",info:"#398AD7",success:"#0f9d58",warning:"#d5a439",error:"#d23f31",primary:"#435B66",secondary:"#828282",card:{primary:"#02aab0",primary2:"#00cdac",secondary:"#e94057",secondary2:"#f27121",info:"#8e2de2",info2:"#4a00e0"},button:{text:"#fff",background:"#25aea6"},table:{header:"#575041",primary:"#424242",secondary:"#435B66"},form:{group:"#828282"},input:{text:"#000",background:"#e0e0e0",focusBackground:"#435B66",focusText:"#fff",disabledBackground:"transparent",disabledText:"inherit"}},Light={text:"#212121",background:"#fff",header:"#fff",sidebar:"#d2d3db",block:"#e3e3e3",info:"#74CAFF",success:"#82e846",warning:"#f7d54d",error:"#FFA48D",primary:"#9394a5",secondary:"#fefedd",card:{primary:"#8e2de2",primary2:"#4a00e0",secondary:"#e94057",secondary2:"#f27121",info:"#02aab0",info2:"#00cdac"},button:{text:"#fff",background:"#25aea6"},table:{header:"#ac9d81",primary:"#fefedd",secondary:"#42b9f5"},form:{group:"#232323"},input:{text:"#000",background:"#fff"}},getTheme=theme=>"dark"===theme?Dark:Light,getDefaultThemeIfNotFound=theme=>!theme||"object"==typeof theme&&0===Object.keys(theme).length?Light:theme},"./lib/util/helper.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ge:()=>getHoverEffect,uI:()=>getActiveEffect});var _config_constants__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./lib/config/constants.ts");const getHoverEffect=(hover,theme,variant=_config_constants__WEBPACK_IMPORTED_MODULE_0__.Wu.Default)=>{let effects={};return hover===_config_constants__WEBPACK_IMPORTED_MODULE_0__.ds.Enlarge?effects={"&:hover":{cursor:"pointer",transform:"scale(1.1)"}}:hover===_config_constants__WEBPACK_IMPORTED_MODULE_0__.ds.Opaque?effects={opacity:.75,"&:hover":{cursor:"pointer",opacity:1}}:hover===_config_constants__WEBPACK_IMPORTED_MODULE_0__.ds.Solidify&&(effects={transitionDuration:"0.3s",backgroundColor:"inherit",color:"inherit",border:`1px solid ${variant===_config_constants__WEBPACK_IMPORTED_MODULE_0__.Wu.Default?theme.primary:theme[variant]}`,"&:hover":{cursor:"pointer",backgroundColor:variant===_config_constants__WEBPACK_IMPORTED_MODULE_0__.Wu.Default?theme.primary:theme[variant],color:theme.button.text}}),effects},getActiveEffect=(active,theme)=>{let effects={};return active===_config_constants__WEBPACK_IMPORTED_MODULE_0__.EY.Enlarge?effects={"&.active":{transform:"scale(1.1)"}}:active===_config_constants__WEBPACK_IMPORTED_MODULE_0__.EY.Opaque?effects={"&.active":{opacity:1}}:active===_config_constants__WEBPACK_IMPORTED_MODULE_0__.EY.Solidify&&(effects={"&.active":{backgroundColor:theme.primary,color:theme.button.text}}),effects}},"./lib/general/Layout/Header/Header.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{HeaderWithDarkTheme:()=>HeaderWithDarkTheme,HeaderWithLightTheme:()=>HeaderWithLightTheme,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Header_stories});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),constants=__webpack_require__("./lib/config/constants.ts"),theme_theme=__webpack_require__("./lib/theme/theme.ts"),helper=__webpack_require__("./lib/util/helper.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const HamburgerMenu=styled_components_browser_esm.ZP.svg((()=>{let theme=(0,styled_components_browser_esm.Fg)();return theme=(0,theme_theme.wk)(theme),{display:"block",width:constants.Bf.Header,height:constants.Bf.Header,backgroundColor:theme.header,".toggle-bars":{stroke:theme.text,strokeWidth:"3",transition:"stroke 400ms cubic-bezier(0.4, 0, 0.2, 1)"},".toggle-bar":{transition:"transform 400ms cubic-bezier(0.4, 0, 0.2, 1)"},".toggle-bar-1":{transformOrigin:"18px 8px"},".toggle-bar-2":{transformOrigin:"16px 18px"},"&.show":{".toggle-bar-1":{transform:"translateY(12px) rotate(45deg)"},".toggle-bar-2":{transform:"rotate(-45deg)"}},[constants.OA.m]:{display:"none"}}})),HeaderItemContainer=styled_components_browser_esm.ZP.div((({effects})=>({display:"none",width:"100%",flexDirection:"row",flexWrap:"wrap",position:"relative",justifyContent:"flex-end",alignItems:"center",overflow:"hidden","&.show":{display:"flex"},[constants.OA.m]:{display:"flex"},".header-item":{...effects}}))),HeaderItem=styled_components_browser_esm.ZP.a.attrs((()=>({className:"header-item"})))((({theme,style})=>(theme=(0,theme_theme.wk)(theme),{display:"block",minHeight:"16px",flexGrow:1,width:"100%",textAlign:"center",padding:constants.Zh.Header,color:theme.button.text,backgroundColor:theme.primary,fontSize:constants.Bf.Header,userSelect:"none",[constants.OA.m]:{flexGrow:0,width:"auto"},...style}))),Header=({style,children,hover=constants.ds.None,active=constants.EY.None,...args})=>{const[collapsed,setCollapsed]=(0,react.useState)(!0);let theme=(0,styled_components_browser_esm.Fg)();theme=(0,theme_theme.wk)(theme);let effects={...(0,helper.Ge)(hover,theme),...(0,helper.uI)(active,theme)};hover===constants.ds.Solidify&&(effects.border="none");let s={display:"flex",width:"100%",position:"relative",flexDirection:"row",flexWrap:"wrap",justifyContent:"flex-end",alignItems:"center",backgroundColor:theme.header,...style};return(0,jsx_runtime.jsxs)("div",{style:s,...args,children:[(0,jsx_runtime.jsx)(HamburgerMenu,{className:collapsed?"":"show",onClick:()=>setCollapsed((prev=>!prev)),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 36 36",children:(0,jsx_runtime.jsxs)("g",{className:"toggle-bars",children:[(0,jsx_runtime.jsx)("path",{className:"toggle-bar toggle-bar-1",d:"M 2,8 H 30"}),(0,jsx_runtime.jsx)("path",{className:"toggle-bar toggle-bar-2",d:"M 2,18 H 30"})]})}),(0,jsx_runtime.jsx)(HeaderItemContainer,{effects,className:collapsed?"":"show",children})]})};Header.displayName="Header";try{HeaderItem.displayName="HeaderItem",HeaderItem.__docgenInfo={description:"",displayName:"HeaderItem",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLAnchorElement | null) => void) | RefObject<HTMLAnchorElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["lib/general/Layout/Header/Header.tsx#HeaderItem"]={docgenInfo:HeaderItem.__docgenInfo,name:"HeaderItem",path:"lib/general/Layout/Header/Header.tsx#HeaderItem"})}catch(__react_docgen_typescript_loader_error){}try{Header.displayName="Header",Header.__docgenInfo={description:"",displayName:"Header",props:{hover:{defaultValue:null,description:"",name:"hover",required:!0,type:{name:"enum",value:[{value:'"none"'},{value:'"enlarge"'},{value:'"opaque"'},{value:'"solidify"'}]}},active:{defaultValue:null,description:"",name:"active",required:!0,type:{name:"enum",value:[{value:'"none"'},{value:'"enlarge"'},{value:'"opaque"'},{value:'"solidify"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["lib/general/Layout/Header/Header.tsx#Header"]={docgenInfo:Header.__docgenInfo,name:"Header",path:"lib/general/Layout/Header/Header.tsx#Header"})}catch(__react_docgen_typescript_loader_error){}var GlobalStyle=__webpack_require__("./lib/theme/GlobalStyle.tsx");const Header_stories={title:"VictorLam/Layout/Header",component:Header},HeaderWithDarkTheme={args:{},render:args=>(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsxs)(styled_components_browser_esm.f6,{theme:(0,theme_theme.gh)("dark"),children:[(0,jsx_runtime.jsx)(GlobalStyle.Z,{}),["enlarge","opaque","solidify"].map((e=>((hoverEffect,activeEffect,_args)=>{const[activeItem,setActiveItem]=(0,react.useState)(0);return(0,jsx_runtime.jsxs)("div",{style:{width:"100%",height:"200px",position:"relative",margin:"0"},children:[(0,jsx_runtime.jsx)(Header,{..._args,hover:hoverEffect,active:activeEffect,children:["Item A","Item B","Item C"].map(((item,i)=>(0,jsx_runtime.jsx)(HeaderItem,{className:activeItem===i?"active":"",onClick:()=>setActiveItem(i),children:item},`dark-header-item-${i}-${Math.random()}`)))}),(0,jsx_runtime.jsx)("div",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})]},`dark-header-${hoverEffect}-${Math.random()}`)})(e,e,args)))]})})},HeaderWithLightTheme={args:{},render:args=>(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsxs)(styled_components_browser_esm.f6,{theme:(0,theme_theme.gh)("light"),children:[(0,jsx_runtime.jsx)(GlobalStyle.Z,{}),["enlarge","opaque","solidify"].map((e=>((hoverEffect,activeEffect,_args)=>{const[activeItem,setActiveItem]=(0,react.useState)(0);return(0,jsx_runtime.jsxs)("div",{style:{width:"100%",height:"200px",position:"relative",margin:"0"},children:[(0,react.createElement)(Header,{..._args,key:`light-header-${Math.random()}`,hover:hoverEffect,active:activeEffect},["Item A","Item B","Item C"].map(((item,i)=>(0,jsx_runtime.jsx)(HeaderItem,{className:activeItem===i?"active":"",onClick:()=>setActiveItem(i),children:item},`light-header-item-${i}-${Math.random()}`)))),(0,jsx_runtime.jsx)("div",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})]})})(e,e,args)))]})})};HeaderWithDarkTheme.parameters={...HeaderWithDarkTheme.parameters,docs:{...HeaderWithDarkTheme.parameters?.docs,source:{originalSource:'{\n  args: {},\n  render: (args: ComponentProps<typeof Header>) => {\n    const InternalComp = (hoverEffect: HoverEffect, activeEffect: ActiveEffect, _args: ComponentProps<typeof Header>) => {\n      const [activeItem, setActiveItem] = useState(0);\n      return <div key={`dark-header-${hoverEffect}-${Math.random()}`} style={{\n        width: "100%",\n        height: "200px",\n        position: "relative",\n        margin: "0"\n      }}>\n                    <Header {..._args} hover={hoverEffect} active={activeEffect}>\n                        {["Item A", "Item B", "Item C"].map((item, i) => <HeaderItem key={`dark-header-item-${i}-${Math.random()}`} className={`${activeItem === i ? "active" : ""}`} onClick={() => setActiveItem(i)}>{item}</HeaderItem>)}\n                    </Header>\n                    <div>\n                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n                    </div>\n            </div>;\n    };\n    return <>\n            <ThemeProvider theme={getTheme("dark")}>\n            <GlobalStyle />\n            {["enlarge", "opaque", "solidify"].map(e => InternalComp((e as HoverEffect), (e as ActiveEffect), args))}\n            </ThemeProvider>\n        </>;\n  }\n}',...HeaderWithDarkTheme.parameters?.docs?.source}}},HeaderWithLightTheme.parameters={...HeaderWithLightTheme.parameters,docs:{...HeaderWithLightTheme.parameters?.docs,source:{originalSource:'{\n  args: {},\n  render: (args: ComponentProps<typeof Header>) => {\n    const InternalComp = (hoverEffect: HoverEffect, activeEffect: ActiveEffect, _args: ComponentProps<typeof Header>) => {\n      const [activeItem, setActiveItem] = useState(0);\n      return <div style={{\n        width: "100%",\n        height: "200px",\n        position: "relative",\n        margin: "0"\n      }}>\n                <Header {..._args} key={`light-header-${Math.random()}`} hover={hoverEffect} active={activeEffect}>\n                    {["Item A", "Item B", "Item C"].map((item, i) => <HeaderItem key={`light-header-item-${i}-${Math.random()}`} className={`${activeItem === i ? "active" : ""}`} onClick={() => setActiveItem(i)}>{item}</HeaderItem>)}\n                </Header>\n                <div>\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n                </div>\n            </div>;\n    };\n    return <>\n            <ThemeProvider theme={getTheme("light")}>\n            <GlobalStyle />\n            {["enlarge", "opaque", "solidify"].map(e => InternalComp((e as HoverEffect), (e as ActiveEffect), args))}\n            </ThemeProvider>\n        </>;\n  }\n}',...HeaderWithLightTheme.parameters?.docs?.source}}};const __namedExportsOrder=["HeaderWithDarkTheme","HeaderWithLightTheme"]}}]);
//# sourceMappingURL=general-Layout-Header-Header-stories.93df697d.iframe.bundle.js.map