"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[384],{4980:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var o=n(7624),r=n(2172);const i={sidebar_position:4},a="Custom Keyboard",s={id:"examples/customKeyboard",title:"Custom Keyboard",description:"In this example we will show how to create and add a custom keyboard to your editor,",source:"@site/docs/examples/customKeyboard.md",sourceDirName:"examples",slug:"/examples/customKeyboard",permalink:"/10tap-editor/docs/examples/customKeyboard",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"IOS Keyboard Avoiding Toolbar with Navigation Header",permalink:"/10tap-editor/docs/examples/navHeader"}},d={},c=[{value:"First, let&#39;s create a new CustomKeyboard",id:"first-lets-create-a-new-customkeyboard",level:3},{value:"Now we can use our custom keyboard",id:"now-we-can-use-our-custom-keyboard",level:3},{value:"Add button that will toggle our custom keyboard",id:"add-button-that-will-toggle-our-custom-keyboard",level:3},{value:"Full solution",id:"full-solution",level:3}];function l(e){const t={a:"a",code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.M)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"custom-keyboard",children:"Custom Keyboard"}),"\n",(0,o.jsx)(t.p,{children:"In this example we will show how to create and add a custom keyboard to your editor,"}),"\n",(0,o.jsx)(t.p,{children:"in this example we will build a sticker keyboard \ud83d\udc6f\u200d\u2640\ufe0f"}),"\n",(0,o.jsxs)(t.p,{children:["Im going to show parts of the code we have on the ",(0,o.jsx)(t.a,{href:"#full-solution",children:"Full solution"})," and to drill down on each"]}),"\n",(0,o.jsx)("img",{height:"400",src:"/10tap-editor/img/customkeyboard.gif"}),"\n",(0,o.jsx)(t.h3,{id:"first-lets-create-a-new-customkeyboard",children:"First, let's create a new CustomKeyboard"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-jsx",children:"...\n\nconst StickerRow = ({ stickers }: { stickers: string[] }) => {\n  return (\n    <View\n      style={{\n        flex: 1,\n        flexDirection: 'row',\n        justifyContent: 'center',\n        alignItems: 'center',\n      }}\n    >\n      {stickers.map((sticker, index) => (\n        <TouchableOpacity\n          key={index}\n          style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}\n          onPress={() => EditorHelper.editorLastInstance?.setImage(sticker)}\n        >\n          <Image\n            source={{ uri: sticker }}\n            style={{ width: 100, height: 100 }}\n          />\n        </TouchableOpacity>\n      ))}\n    </View>\n  );\n};\n\nconst StickerKeyboardComp = () => {\n  return (\n    <View style={keyboardStyles.keyboardContainer}>\n      <StickerRow stickers={stickersTop} />\n      <StickerRow stickers={stickersBottom} />\n    </View>\n  );\n};\n\nexport const StickerKeyboard = new CustomKeyboardExtension(\n  'keyboard.sticker',\n  StickerKeyboardComp\n);\n\n...\n"})}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["We create here ",(0,o.jsx)(t.code,{children:"StickerKeyboardComp"})," which is the react native view of the keyboard that will be the part that will be render inside your custom keyboard"]}),"\n",(0,o.jsxs)(t.li,{children:["On each sticker we have ",(0,o.jsx)(t.code,{children:"onPress={() => EditorHelper.editorLastInstance?.setImage(sticker)}"})," EditorHelper is a shared class that hold the instance of ",(0,o.jsx)(t.a,{href:"/10tap-editor/docs/api/EditorBridge",children:"EditorBridge"}),", so each time user press on sticker it will call ",(0,o.jsx)(t.code,{children:"setImage"})]}),"\n",(0,o.jsx)(t.li,{children:"Lastly we create new CustomKeyboardExtension, this part is important so it will register our View as a custom keyboard"}),"\n"]}),"\n",(0,o.jsx)(t.h3,{id:"now-we-can-use-our-custom-keyboard",children:"Now we can use our custom keyboard"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-jsx",children:"...\nexport const CustomKeyboardExample = ({}: NativeStackScreenProps<\n  any,\n  any,\n  any\n>) => {\n  const editor = useEditorBridge({\n    avoidIosKeyboard: true,\n    autofocus: true,\n    DEV: true,\n    bridgeExtensions: [\n      ...TenTapStartKit,\n      ImageBridge.configureExtension({\n        inline: true,\n      }),\n    ],\n  });\n  const TapRef = useRef(null);\n  const [activeKeyboard, setActiveKeyboard] = React.useState<string>();\n\n  return (\n    <SafeAreaView style={exampleStyles.fullScreen} ref={TapRef}>\n      <View style={exampleStyles.fullScreen}>\n        <RichText editor={editor} />\n      </View>\n      <KeyboardAvoidingView\n        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}\n        style={exampleStyles.keyboardAvoidingView}\n      >\n        <StickerToolbar\n          activeKeyboard={activeKeyboard}\n          setActiveKeyboard={setActiveKeyboard}\n          editor={editor}\n        />\n        <CustomKeyboard\n          rootRef={TapRef}\n          activeKeyboardID={activeKeyboard}\n          setActiveKeyboardID={setActiveKeyboard}\n          keyboards={[StickerKeyboard]} // Add our custom keyboard to keyboards prop\n          editor={editor}\n        />\n      </KeyboardAvoidingView>\n    </SafeAreaView>\n  );\n};\n...\n"})}),"\n",(0,o.jsx)(t.p,{children:"Here is our editor in that part we will add our custom keyboard that we just created."}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"TapRef"})," create a ref and add it to some View in your app, probably to the View that wrap the editor"]}),"\n",(0,o.jsx)(t.li,{children:"Create a react state that will control which custom keyboard is shown"}),"\n",(0,o.jsx)(t.li,{children:"Render CustomKeyboard andd pass all props"}),"\n"]}),"\n",(0,o.jsx)(t.h3,{id:"add-button-that-will-toggle-our-custom-keyboard",children:"Add button that will toggle our custom keyboard"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-jsx",children:"...\nconst StickerToolbar = ({\n  editor,\n  activeKeyboard,\n  setActiveKeyboard,\n}: ToolbarWithColorProps) => {\n  // Get updates of editor state\n  const editorState = useBridgeState(editor);\n\n  const { isKeyboardUp: isNativeKeyboardUp } = useKeyboard();\n  const customKeyboardOpen = activeKeyboard !== undefined;\n  const isKeyboardUp = isNativeKeyboardUp || customKeyboardOpen;\n\n  // Here we make sure not to hide the keyboard if our custom keyboard is visible\n  const hideToolbar =\n    !isKeyboardUp || (!editorState.isFocused && !customKeyboardOpen);\n\n  return (\n    <Toolbar\n      editor={editor}\n      hidden={hideToolbar}\n      items={[\n        {\n          onPress: () => () => {\n            const isActive = activeKeyboard === StickerKeyboard.id;\n            if (isActive) editor.webviewRef.current?.requestFocus();\n            setActiveKeyboard(isActive ? undefined : StickerKeyboard.id);\n          },\n          active: () => activeKeyboard === StickerKeyboard.id,\n          disabled: () => false,\n          image: () => Images.platte,\n        },\n      ]}\n    />\n  );\n};\n...\n"})}),"\n",(0,o.jsx)(t.p,{children:"Create a way to open and close the custom keyboard can be tricky because of the state of both native keyboard and our custom keyboard"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"const { isKeyboardUp: isNativeKeyboardUp } = useKeyboard();"})," we will use here useKeyboard a util the lib expose so we will know when the native keyboard is up"]}),"\n",(0,o.jsxs)(t.li,{children:["That way we can now when to hide toolbar ",(0,o.jsx)(t.code,{children:"hideToolbar"})]}),"\n",(0,o.jsxs)(t.li,{children:["We will use ",(0,o.jsx)(t.a,{href:"../api/RichText#toolbar",children:"Toolbar"})," component and will render only one item that will toggle our custom keyboard"]}),"\n",(0,o.jsxs)(t.li,{children:["In case someone press and the custom keyboard is already there we need to refocus the editor that why we: ",(0,o.jsx)(t.code,{children:"if (isActive) editor.webviewRef.current?.requestFocus();"})]}),"\n"]}),"\n",(0,o.jsx)(t.h3,{id:"full-solution",children:"Full solution"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-jsx",children:"import type { NativeStackScreenProps } from '@react-navigation/native-stack';\nimport React, { useRef } from 'react';\nimport {\n  SafeAreaView,\n  View,\n  KeyboardAvoidingView,\n  Platform,\n  StyleSheet,\n  TouchableOpacity,\n  Image,\n} from 'react-native';\nimport {\n  RichText,\n  Toolbar,\n  useBridgeState,\n  useEditorBridge,\n  useKeyboard,\n  type EditorBridge,\n  TenTapStartKit,\n  ImageBridge,\n  EditorHelper,\n  CustomKeyboardExtension,\n} from '@10play/tentap-editor';\nimport { CustomKeyboard } from '../../../../src/RichText/Keyboard/CustomKeyboardBase';\nimport { Images } from '../../../../src/assets';\n\nconst keyboardStyles = StyleSheet.create({\n  keyboardContainer: {\n    alignItems: 'center',\n    justifyContent: 'center',\n    flex: 1,\n    width: '100%',\n    height: '100%',\n  },\n});\n\nconst stickersTop = [\n  'https://res.cloudinary.com/dkofpy6k6/image/upload/c_fill,g_auto,h_100,w_100/v1707657614/7c1d68c9-126c-4967-a6a4-7252e998802d.png',\n  'https://res.cloudinary.com/dkofpy6k6/image/upload/c_fill,g_auto,h_100,w_100/v1707657441/skel_uv9mo1.png',\n  'https://res.cloudinary.com/dkofpy6k6/image/upload/c_fill,g_auto,h_100,w_100/v1707657821/ecee86ed-6291-412c-9570-2b561314d723.png',\n];\nconst stickersBottom = [\n  'https://res.cloudinary.com/dkofpy6k6/image/upload/c_fill,g_auto,h_100,w_100/v1707658182/53b06114-544c-4048-869f-fedbc6d51bb9.png',\n  'https://res.cloudinary.com/dkofpy6k6/image/upload/c_fill,g_auto,h_100,w_100/v1707658198/75fe11eb-1d93-45e4-bb97-d8e26dbe4335.png',\n  'https://res.cloudinary.com/dkofpy6k6/image/upload/c_fill,g_auto,h_100,w_100/v1707658214/c6cadcf3-785c-49ec-b34d-c6d8ea544153.png',\n];\n\nconst StickerRow = ({ stickers }: { stickers: string[] }) => {\n  return (\n    <View\n      style={{\n        flex: 1,\n        flexDirection: 'row',\n        justifyContent: 'center',\n        alignItems: 'center',\n      }}\n    >\n      {stickers.map((sticker, index) => (\n        <TouchableOpacity\n          key={index}\n          style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}\n          onPress={() => EditorHelper.editorLastInstance?.setImage(sticker)}\n        >\n          <Image\n            source={{ uri: sticker }}\n            style={{ width: 100, height: 100 }}\n          />\n        </TouchableOpacity>\n      ))}\n    </View>\n  );\n};\n\nconst StickerKeyboardComp = () => {\n  return (\n    <View style={keyboardStyles.keyboardContainer}>\n      <StickerRow stickers={stickersTop} />\n      <StickerRow stickers={stickersBottom} />\n    </View>\n  );\n};\n\nexport const StickerKeyboard = new CustomKeyboardExtension(\n  'keyboard.sticker',\n  StickerKeyboardComp\n);\n\nconst exampleStyles = StyleSheet.create({\n  fullScreen: {\n    flex: 1,\n  },\n  keyboardAvoidingView: {\n    position: 'absolute',\n    width: '100%',\n    bottom: 0,\n  },\n});\n\nexport const CustomKeyboardExample = ({}: NativeStackScreenProps<\n  any,\n  any,\n  any\n>) => {\n  const editor = useEditorBridge({\n    avoidIosKeyboard: true,\n    autofocus: true,\n    DEV: true,\n    bridgeExtensions: [\n      ...TenTapStartKit,\n      ImageBridge.configureExtension({\n        inline: true,\n      }),\n    ],\n  });\n  const TapRef = useRef(null);\n  const [activeKeyboard, setActiveKeyboard] = React.useState<string>();\n\n  return (\n    <SafeAreaView style={exampleStyles.fullScreen} ref={TapRef}>\n      <View style={exampleStyles.fullScreen}>\n        <RichText editor={editor} />\n      </View>\n      <KeyboardAvoidingView\n        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}\n        style={exampleStyles.keyboardAvoidingView}\n      >\n        <StickerToolbar\n          activeKeyboard={activeKeyboard}\n          setActiveKeyboard={setActiveKeyboard}\n          editor={editor}\n        />\n        <CustomKeyboard\n          rootRef={TapRef}\n          activeKeyboardID={activeKeyboard}\n          setActiveKeyboardID={setActiveKeyboard}\n          keyboards={[StickerKeyboard]} // Add our custom keyboard to keyboards prop\n          editor={editor}\n        />\n      </KeyboardAvoidingView>\n    </SafeAreaView>\n  );\n};\n\ninterface ToolbarWithColorProps {\n  editor: EditorBridge;\n  activeKeyboard: string | undefined;\n  setActiveKeyboard: (id: string | undefined) => void;\n}\nconst StickerToolbar = ({\n  editor,\n  activeKeyboard,\n  setActiveKeyboard,\n}: ToolbarWithColorProps) => {\n  // Get updates of editor state\n  const editorState = useBridgeState(editor);\n\n  const { isKeyboardUp: isNativeKeyboardUp } = useKeyboard();\n  const customKeyboardOpen = activeKeyboard !== undefined;\n  const isKeyboardUp = isNativeKeyboardUp || customKeyboardOpen;\n\n  // Here we make sure not to hide the keyboard if our custom keyboard is visible\n  const hideToolbar =\n    !isKeyboardUp || (!editorState.isFocused && !customKeyboardOpen);\n\n  return (\n    <Toolbar\n      editor={editor}\n      hidden={hideToolbar}\n      items={[\n        {\n          onPress: () => () => {\n            const isActive = activeKeyboard === StickerKeyboard.id;\n            if (isActive) editor.webviewRef.current?.requestFocus();\n            setActiveKeyboard(isActive ? undefined : StickerKeyboard.id);\n          },\n          active: () => activeKeyboard === StickerKeyboard.id,\n          disabled: () => false,\n          image: () => Images.platte,\n        },\n      ]}\n    />\n  );\n};\n\n\n"})})]})}function u(e={}){const{wrapper:t}={...(0,r.M)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},2172:(e,t,n)=>{n.d(t,{I:()=>s,M:()=>a});var o=n(1504);const r={},i=o.createContext(r);function a(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);