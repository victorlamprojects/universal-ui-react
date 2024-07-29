"use strict";(self.webpackChunkuniversal_ui_react=self.webpackChunkuniversal_ui_react||[]).push([[885],{"./lib/general/Table/Table.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{TableWithDarkTheme:()=>TableWithDarkTheme,TableWithLightTheme:()=>TableWithLightTheme,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Table_stories});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),GlobalStyle=__webpack_require__("./lib/theme/GlobalStyle.tsx"),Block=__webpack_require__("./lib/general/Container/Block.tsx"),constants=__webpack_require__("./lib/config/constants.ts"),theme_theme=__webpack_require__("./lib/theme/theme.ts");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const TableContainer=styled_components_browser_esm.Ay.table((({style,theme,bordered})=>(theme=(0,theme_theme.R_)(theme),{background:"inherit",borderCollapse:"collapse",width:"100%",border:bordered?`1px solid ${theme.text}`:"none",...style}))),TableHead=styled_components_browser_esm.Ay.thead``,TableBody=styled_components_browser_esm.Ay.tbody``,TableHeaderContainer=styled_components_browser_esm.Ay.tr((({theme})=>({backgroundColor:(theme=(0,theme_theme.R_)(theme)).table.header,borderBottom:`1px solid ${theme.text}`}))),TableHeader=styled_components_browser_esm.Ay.th((({style,theme,bordered})=>(theme=(0,theme_theme.R_)(theme),{padding:constants.Yq.Table,fontSize:constants.Z4.TableTitle,textAlign:"left",border:bordered?`1px solid ${theme.text}`:"none","&:last-child":{paddingRight:"0"},"&:hover":{cursor:"pointer"},...style}))),TableRow=styled_components_browser_esm.Ay.tr((({theme,striped})=>(theme=(0,theme_theme.R_)(theme),{"&:nth-child(even)":{backgroundColor:striped?theme.table.primary:"none"},"&.active":{backgroundColor:theme.table.secondary}}))),TableData=styled_components_browser_esm.Ay.td((({style,theme,bordered})=>(theme=(0,theme_theme.R_)(theme),{padding:constants.Yq.Table,fontSize:constants.Z4.TableText,border:bordered?`1px solid ${theme.text}`:"none",textAlign:"left","&:last-child":{paddingRight:"0"},"&.active":{border:`1px solid ${theme.secondary}`},...style}))),Table=({data,columnDefs,onSelect,onDoubleClick,bordered=!1,striped=!1,...args})=>{const[selectedRow,setSelectedRow]=(0,react.useState)(void 0),[selectedCell,setSelectedCell]=(0,react.useState)(void 0),[sortStates,setSortStates]=(0,react.useState)(new Map);let dataView=data||[],headerView=(data=>data?Object.keys(data).map((k=>({key:k,title:k,sort:(arg0,arg1)=>arg0&&arg1&&(arg0[k]||Number.NEGATIVE_INFINITY)<(arg1[k]||Number.NEGATIVE_INFINITY)?1:-1}))):[])(data&&data[0]);return columnDefs&&(headerView=((defaultCol,overrideCol)=>{if(!defaultCol)return[];if(!overrideCol)return defaultCol;let cols=[];for(let c of defaultCol){let h=overrideCol.find((o=>o.key===c.key));h?cols.push({...c,...h}):cols.push(c)}return cols})(headerView,columnDefs)),sortStates.size>0&&sortStates.forEach((state=>dataView.sort(state.fn))),(0,jsx_runtime.jsx)("div",{style:{overflow:"auto"},children:(0,jsx_runtime.jsxs)(TableContainer,{bordered,...args,children:[(0,jsx_runtime.jsx)(TableHead,{children:(0,jsx_runtime.jsx)(TableHeaderContainer,{children:headerView.map((header=>(0,jsx_runtime.jsxs)(TableHeader,{bordered,onClick:()=>{setSortStates((prev=>{let m=new Map,k=0;return prev.has(header.key)&&(k=prev.get(header.key).key+1),2===k?m.delete(header.key):m.set(header.key,{key:k,fn:(a,b)=>0==k?header.sort(a,b):header.sort(b,a)}),m}))},children:[header.title||header.key,(0,jsx_runtime.jsx)("span",{hidden:void 0!==sortStates.get(header.key)?.key,children:" ⇵"}),(0,jsx_runtime.jsx)("span",{hidden:0!==sortStates.get(header.key)?.key,children:" ⬇"}),(0,jsx_runtime.jsx)("span",{hidden:1!==sortStates.get(header.key)?.key,children:" ⬆"})]})))})}),(0,jsx_runtime.jsx)(TableBody,{children:dataView.map(((d,i)=>(0,jsx_runtime.jsx)(TableRow,{striped,className:""+(selectedRow===i?"active":""),onClick:()=>setSelectedRow(i),children:headerView.map(((header,j)=>(0,jsx_runtime.jsx)(TableData,{bordered,className:""+(selectedCell===i*headerView.length+j?"active":""),onClick:()=>{setSelectedCell(i*headerView.length+j),onSelect&&onSelect(i,j,d[header.key]),onDoubleClick&&onDoubleClick(i,j,d[header.key])},children:header.apply&&header.apply(d[header.key])||d[header.key]})))})))})]})})};Table.displayName="Table";const Table_Table=Table;try{Table.displayName="Table",Table.__docgenInfo={description:"",displayName:"Table",props:{data:{defaultValue:null,description:"",name:"data",required:!1,type:{name:"TRow[]"}},columnDefs:{defaultValue:null,description:"",name:"columnDefs",required:!1,type:{name:"TCol[]"}},bordered:{defaultValue:{value:"false"},description:"",name:"bordered",required:!1,type:{name:"boolean"}},striped:{defaultValue:{value:"false"},description:"",name:"striped",required:!1,type:{name:"boolean"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!1,type:{name:"((row: number, column: number, data: TData) => void)"}},onDoubleClick:{defaultValue:null,description:"",name:"onDoubleClick",required:!1,type:{name:"((row: number, column: number, data: TData) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["lib/general/Table/Table.tsx#Table"]={docgenInfo:Table.__docgenInfo,name:"Table",path:"lib/general/Table/Table.tsx#Table"})}catch(__react_docgen_typescript_loader_error){}const Table_stories={title:"VictorLam/General/Table",component:Table_Table},TableWithDarkTheme={args:{data:[{name:"Victor",age:24,job:"developer",salary:1e4,hobbies:"coding"},{name:"Jasmine",age:25,job:"accountant",salary:12000.5,hobbies:"reading"},{name:"Jacky",age:35,job:"chef",salary:3e4,hobbies:"cooking"},{name:"Rose",age:33,job:"teacher",salary:25000.5,hobbies:"hiking"},{name:"James",age:27,job:"youtuber",salary:10000000.52,hobbies:"photography"}],columnDefs:[{key:"name",title:"Name"},{key:"age",title:"Age"},{key:"job",title:"Job"},{key:"salary",title:"Income"},{key:"hobbies",title:"Hobbies"}],onDoubleClick:(row,col,data)=>{alert(`Selected ${data} at row ${row} and column ${col}`)}},render:args=>(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsxs)(styled_components_browser_esm.NP,{theme:(0,theme_theme.O4)("dark"),children:[(0,jsx_runtime.jsx)(GlobalStyle.A,{}),"Normal Table",(0,jsx_runtime.jsx)(Block.A,{children:(0,jsx_runtime.jsx)(Table_Table,{...args})}),"Bordered Table",(0,jsx_runtime.jsx)(Block.A,{children:(0,jsx_runtime.jsx)(Table_Table,{bordered:!0,...args})}),"Striped Table",(0,jsx_runtime.jsx)(Block.A,{children:(0,jsx_runtime.jsx)(Table_Table,{striped:!0,...args})})]})})},TableWithLightTheme={args:{...TableWithDarkTheme.args},render:args=>(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsxs)(styled_components_browser_esm.NP,{theme:(0,theme_theme.O4)("light"),children:[(0,jsx_runtime.jsx)(GlobalStyle.A,{}),"Normal Table",(0,jsx_runtime.jsx)(Block.A,{children:(0,jsx_runtime.jsx)(Table_Table,{...args})}),"Bordered Table",(0,jsx_runtime.jsx)(Block.A,{children:(0,jsx_runtime.jsx)(Table_Table,{bordered:!0,...args})}),"Striped Table",(0,jsx_runtime.jsx)(Block.A,{children:(0,jsx_runtime.jsx)(Table_Table,{striped:!0,...args})})]})})};TableWithDarkTheme.parameters={...TableWithDarkTheme.parameters,docs:{...TableWithDarkTheme.parameters?.docs,source:{originalSource:'{\n  args: {\n    data: [{\n      "name": "Victor",\n      "age": 24,\n      "job": "developer",\n      "salary": 10000.0,\n      "hobbies": "coding"\n    }, {\n      "name": "Jasmine",\n      "age": 25,\n      "job": "accountant",\n      "salary": 12000.5,\n      "hobbies": "reading"\n    }, {\n      "name": "Jacky",\n      "age": 35,\n      "job": "chef",\n      "salary": 30000.0,\n      "hobbies": "cooking"\n    }, {\n      "name": "Rose",\n      "age": 33,\n      "job": "teacher",\n      "salary": 25000.5,\n      "hobbies": "hiking"\n    }, {\n      "name": "James",\n      "age": 27,\n      "job": "youtuber",\n      "salary": 10000000.52,\n      "hobbies": "photography"\n    }],\n    columnDefs: [{\n      "key": "name",\n      "title": "Name"\n    }, {\n      "key": "age",\n      "title": "Age"\n    }, {\n      "key": "job",\n      "title": "Job"\n    }, {\n      "key": "salary",\n      "title": "Income"\n    }, {\n      "key": "hobbies",\n      "title": "Hobbies"\n    }],\n    onDoubleClick: (row: number, col: number, data: TData) => {\n      alert(`Selected ${data} at row ${row} and column ${col}`);\n    }\n  },\n  render: (args: ComponentProps<typeof Table>) => {\n    return <>\n            <ThemeProvider theme={getTheme("dark")}>\n                <GlobalStyle />\n                Normal Table\n                <Block>\n                    <Table {...args} />\n                </Block>\n                Bordered Table\n                <Block>\n                    <Table bordered={true} {...args} />\n                </Block>\n                Striped Table\n                <Block>\n                    <Table striped={true} {...args} />\n                </Block>\n            </ThemeProvider>\n        </>;\n  }\n}',...TableWithDarkTheme.parameters?.docs?.source}}},TableWithLightTheme.parameters={...TableWithLightTheme.parameters,docs:{...TableWithLightTheme.parameters?.docs,source:{originalSource:'{\n  args: {\n    ...TableWithDarkTheme.args\n  },\n  render: (args: ComponentProps<typeof Table>) => {\n    return <>\n            <ThemeProvider theme={getTheme("light")}>\n                <GlobalStyle />\n                Normal Table\n                <Block>\n                    <Table {...args} />\n                </Block>\n                Bordered Table\n                <Block>\n                    <Table bordered={true} {...args} />\n                </Block>\n                Striped Table\n                <Block>\n                    <Table striped={true} {...args} />\n                </Block>\n            </ThemeProvider>\n        </>;\n  }\n}',...TableWithLightTheme.parameters?.docs?.source}}};const __namedExportsOrder=["TableWithDarkTheme","TableWithLightTheme"]},"./lib/config/constants.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ak:()=>ButtonVariant,OD:()=>HorizontalAlignment,R5:()=>Margin,Yq:()=>Padding,Z4:()=>FontSize,_n:()=>NotificationType,k3:()=>HoverEffect,r2:()=>BreakPoints,sx:()=>VerticalAlignment,we:()=>ActiveEffect});let BreakPoints=function(BreakPoints){return BreakPoints.xs="@media only screen and (min-width: 0px)",BreakPoints.s="@media only screen and (min-width: 576px)",BreakPoints.m="@media only screen and (min-width: 768px)",BreakPoints.l="@media only screen and (min-width: 992px)",BreakPoints}({});const FontSize={Header:"1.375rem",Title:"1.375rem",Text:"1.25rem",ModalTitle:"1.75rem",ModalText:"1.5rem",TableTitle:"1rem",TableText:"1rem",FormTitle:"1.375rem",FormText:"1rem",FormGroupText:"0.9rem"},Padding={Button:"8px 12px",Container:"8px 12px",Header:"12px 18px",Table:"0.3rem 0.5rem",Input:"4px 6px"},Margin={Container:"0.5rem 0"};let ButtonVariant=function(ButtonVariant){return ButtonVariant.Default="default",ButtonVariant.Info="info",ButtonVariant.Success="success",ButtonVariant.Warning="warning",ButtonVariant.Error="error",ButtonVariant}({}),NotificationType=function(NotificationType){return NotificationType.Info="info",NotificationType.Success="success",NotificationType.Warning="warning",NotificationType.Error="error",NotificationType}({}),VerticalAlignment=function(VerticalAlignment){return VerticalAlignment.Top="top",VerticalAlignment.Middle="middle",VerticalAlignment.Bottom="bottom",VerticalAlignment}({}),HorizontalAlignment=function(HorizontalAlignment){return HorizontalAlignment.Left="left",HorizontalAlignment.Middle="middle",HorizontalAlignment.Right="right",HorizontalAlignment}({}),HoverEffect=function(HoverEffect){return HoverEffect.None="none",HoverEffect.Enlarge="enlarge",HoverEffect.Opaque="opaque",HoverEffect.Solidify="solidify",HoverEffect}({}),ActiveEffect=function(ActiveEffect){return ActiveEffect.None="none",ActiveEffect.Enlarge="enlarge",ActiveEffect.Opaque="opaque",ActiveEffect.Solidify="solidify",ActiveEffect}({})},"./lib/general/Container/Block.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_theme_theme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./lib/theme/theme.ts"),_config_constants__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./lib/config/constants.ts");const Block=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.div((({style,theme})=>({position:"relative",backgroundColor:(theme=(0,_theme_theme__WEBPACK_IMPORTED_MODULE_0__.R_)(theme)).block,color:theme.text,padding:_config_constants__WEBPACK_IMPORTED_MODULE_1__.Yq.Container,margin:_config_constants__WEBPACK_IMPORTED_MODULE_1__.R5.Container,...style}))),__WEBPACK_DEFAULT_EXPORT__=Block;try{Block.displayName="Block",Block.__docgenInfo={description:"",displayName:"Block",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["lib/general/Container/Block.tsx#Block"]={docgenInfo:Block.__docgenInfo,name:"Block",path:"lib/general/Container/Block.tsx#Block"})}catch(__react_docgen_typescript_loader_error){}},"./lib/theme/GlobalStyle.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_config_constants__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./lib/config/constants.ts");const __WEBPACK_DEFAULT_EXPORT__=styled_components__WEBPACK_IMPORTED_MODULE_1__.DU`
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

`},"./lib/theme/theme.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O4:()=>getTheme,R_:()=>getDefaultThemeIfNotFound});const Dark={text:"#e3e3e3",background:"#1e1e1e",header:"#1e1e1e",sidebar:"#121212",block:"#171717",info:"#398AD7",success:"#0f9d58",warning:"#d5a439",error:"#d23f31",primary:"#435B66",secondary:"#828282",highlight:"#d5a439",card:{primary:"#02aab0",primary2:"#00cdac",secondary:"#e94057",secondary2:"#f27121",info:"#8e2de2",info2:"#4a00e0"},button:{text:"#fff",background:"#25aea6"},table:{header:"#575041",primary:"#424242",secondary:"#435B66"},form:{group:"#828282"},input:{text:"#000",background:"#e0e0e0",focusBackground:"#435B66",focusText:"#fff",disabledBackground:"transparent",disabledText:"inherit"}},Light={text:"#212121",background:"#fff",header:"#fff",sidebar:"#d2d3db",block:"#e3e3e3",info:"#74CAFF",success:"#82e846",warning:"#f7d54d",error:"#FFA48D",primary:"#9394a5",secondary:"#fefedd",highlight:"#f7d54d",card:{primary:"#8e2de2",primary2:"#4a00e0",secondary:"#e94057",secondary2:"#f27121",info:"#02aab0",info2:"#00cdac"},button:{text:"#fff",background:"#25aea6"},table:{header:"#ac9d81",primary:"#fefedd",secondary:"#42b9f5"},form:{group:"#232323"},input:{text:"#000",background:"#fff"}},getTheme=theme=>"dark"===theme?Dark:Light,getDefaultThemeIfNotFound=theme=>!theme||"object"==typeof theme&&0===Object.keys(theme).length?Light:theme}}]);
//# sourceMappingURL=general-Table-Table-stories.f03313e3.iframe.bundle.js.map