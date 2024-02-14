"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[528],{9416:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=o(7624),n=o(2172);const i={sidebar_position:5},r="IOS Keyboard Avoiding Toolbar with Navigation Header",s={id:"examples/navHeader",title:"IOS Keyboard Avoiding Toolbar with Navigation Header",description:"In this example we will be making the toolbar on IOS be exactly over the keyboard when using react-navigation's header.",source:"@site/docs/examples/navHeader.md",sourceDirName:"examples",slug:"/examples/navHeader",permalink:"/10tap-editor/docs/examples/navHeader",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Using The ColorKeyboard",permalink:"/10tap-editor/docs/examples/colorKeyboard"},next:{title:"Custom Keyboard",permalink:"/10tap-editor/docs/examples/customKeyboard"}},d={},c=[];function l(e){const t={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",...(0,n.M)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"ios-keyboard-avoiding-toolbar-with-navigation-header",children:"IOS Keyboard Avoiding Toolbar with Navigation Header"}),"\n",(0,a.jsxs)(t.p,{children:["In this example we will be making the toolbar on IOS be exactly over the keyboard when using ",(0,a.jsx)(t.code,{children:"react-navigation"}),"'s header.\nIf we were to just use the avoiding view like in our ",(0,a.jsx)(t.a,{href:"/10tap-editor/docs/examples/basic",children:"basic example"})," we the toolbar would be under the keyboard.\nWe can fix this by adding the ",(0,a.jsx)(t.a,{href:"https://reactnative.dev/docs/keyboardavoidingview#keyboardverticaloffset",children:"keyboardVerticalOffset"})," to our ",(0,a.jsx)(t.code,{children:"KeyboardAvoidingView"}),".\nThe ",(0,a.jsx)(t.code,{children:"keyboardVerticalOffset"})," needs to be the top area inset + the headers height which on IOS is 44 on portrait and 32 on landscape."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:"const { top } = useSafeAreaInsets();\nconst { width, height } = useWindowDimensions();\nconst isLandscape = width > height;\nconst headerHeight = isLandscape ? 32 : 44;\nconst keyboardVerticalOffset = headerHeight + top;\n...\n...\n...\n<KeyboardAvoidingView\n  behavior={Platform.OS === 'ios' ? 'padding' : 'height'}\n  style={exampleStyles.keyboardAvoidingView}\n  keyboardVerticalOffset={keyboardVerticalOffset} // <--- add this\n>\n  <Toolbar editor={editor} />\n</KeyboardAvoidingView>\n"})})]})}function h(e={}){const{wrapper:t}={...(0,n.M)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},2172:(e,t,o)=>{o.d(t,{I:()=>s,M:()=>r});var a=o(1504);const n={},i=a.createContext(n);function r(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);