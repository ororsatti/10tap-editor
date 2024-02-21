"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[696],{5988:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"category","label":"Introduction","items":[{"type":"link","label":"10tap-editor","href":"/10tap-editor/docs/intro","docId":"intro","unlisted":false},{"type":"link","label":"Main Concept","href":"/10tap-editor/docs/mainConcepts","docId":"mainConcepts","unlisted":false}],"collapsed":true,"collapsible":true},{"type":"category","label":"Setup","items":[{"type":"link","label":"Installation","href":"/10tap-editor/docs/setup/installation","docId":"setup/installation","unlisted":false},{"type":"link","label":"Advanced Setup","href":"/10tap-editor/docs/setup/advancedSetup","docId":"setup/advancedSetup","unlisted":false}],"collapsed":true,"collapsible":true},{"type":"category","label":"API","items":[{"type":"link","label":"useEditorBridge","href":"/10tap-editor/docs/api/useEditorBridge","docId":"api/useEditorBridge","unlisted":false},{"type":"link","label":"EditorBridge","href":"/10tap-editor/docs/api/EditorBridge","docId":"api/EditorBridge","unlisted":false},{"type":"link","label":"BridgeState","href":"/10tap-editor/docs/api/BridgeState","docId":"api/BridgeState","unlisted":false},{"type":"link","label":"Components","href":"/10tap-editor/docs/api/Components","docId":"api/Components","unlisted":false},{"type":"link","label":"Custom Keyboard Utils","href":"/10tap-editor/docs/api/CustomKeyboardUtils","docId":"api/CustomKeyboardUtils","unlisted":false},{"type":"link","label":"Built-in BridgeExtensions","href":"/10tap-editor/docs/api/BridgeExtensions","docId":"api/BridgeExtensions","unlisted":false},{"type":"link","label":"useEditorContent","href":"/10tap-editor/docs/api/useEditorContent","docId":"api/useEditorContent","unlisted":false}],"collapsed":true,"collapsible":true},{"type":"category","label":"Examples","items":[{"type":"link","label":"Basic example","href":"/10tap-editor/docs/examples/basic","docId":"examples/basic","unlisted":false},{"type":"link","label":"Custom CSS and Fonts","href":"/10tap-editor/docs/examples/customCss","docId":"examples/customCss","unlisted":false},{"type":"link","label":"Configuring and Extending Extensions","href":"/10tap-editor/docs/examples/configureExtensions","docId":"examples/configureExtensions","unlisted":false},{"type":"link","label":"Using The ColorKeyboard","href":"/10tap-editor/docs/examples/colorKeyboard","docId":"examples/colorKeyboard","unlisted":false},{"type":"link","label":"IOS Keyboard Avoiding Toolbar with Navigation Header","href":"/10tap-editor/docs/examples/navHeader","docId":"examples/navHeader","unlisted":false},{"type":"link","label":"Custom Keyboard","href":"/10tap-editor/docs/examples/customKeyboard","docId":"examples/customKeyboard","unlisted":false},{"type":"link","label":"DarkMode","href":"/10tap-editor/docs/examples/darkTheme","docId":"examples/darkTheme","unlisted":false},{"type":"link","label":"Custom Theme","href":"/10tap-editor/docs/examples/customTheme","docId":"examples/customTheme","unlisted":false}],"collapsed":true,"collapsible":true}]},"docs":{"api/BridgeExtensions":{"id":"api/BridgeExtensions","title":"Built-in BridgeExtensions","description":"tentap comes with multiple bridges extensions out of the box, in this page we will show all of them and show their relevant configurations, which can be configured with BridgeExtension.configureExtension:","sidebar":"tutorialSidebar"},"api/BridgeState":{"id":"api/BridgeState","title":"BridgeState","description":"The BridgeState is the latest state of the editor webview on the native side, it\'s extendable by BridgeExtensions and is generally used with useBridgeState","sidebar":"tutorialSidebar"},"api/Components":{"id":"api/Components","title":"Components","description":"RichText","sidebar":"tutorialSidebar"},"api/CustomKeyboardUtils":{"id":"api/CustomKeyboardUtils","title":"Custom Keyboard Utils","description":"We believe that custom keyboard can be a game changer when it comes to editing experience, that\'s why we decided that this ability should be part of this lib, in this page we will show the APIs of the custom keyboard utils.","sidebar":"tutorialSidebar"},"api/EditorBridge":{"id":"api/EditorBridge","title":"EditorBridge","description":"An Interface of all the commands you can do with the editor on the react native side, can be extended with a BrideExtension. With all of the bridges included in tentapStarterKit the EditorBridge will have:","sidebar":"tutorialSidebar"},"api/useEditorBridge":{"id":"api/useEditorBridge","title":"useEditorBridge","description":"a react hook that will return EditorBridge","sidebar":"tutorialSidebar"},"api/useEditorContent":{"id":"api/useEditorContent","title":"useEditorContent","description":"The useEditorContent hook is designed to efficiently retrieve the content. It monitors changes to the editor\'s content, and reduces unnecessary data exchanges between web and native, optimizing performance and minimizing message traffic.","sidebar":"tutorialSidebar"},"examples/basic":{"id":"examples/basic","title":"Basic example","description":"In this example we will be creating a basic editor that contains all of the pre-built bridgeExtensions and a keyboard aware toolbar. Jump To Full Example","sidebar":"tutorialSidebar"},"examples/colorKeyboard":{"id":"examples/colorKeyboard","title":"Using The ColorKeyboard","description":"In this example we will add the ColorKeyboard, and a custom button to toggle it in the Toolbar","sidebar":"tutorialSidebar"},"examples/configureExtensions":{"id":"examples/configureExtensions","title":"Configuring and Extending Extensions","description":"In this example we will configure some extensions. Each bridge comes with the configureExtension function, that configures it\'s underline tiptap extension.","sidebar":"tutorialSidebar"},"examples/customCss":{"id":"examples/customCss","title":"Custom CSS and Fonts","description":"In this example we will be adding custom css and fonts","sidebar":"tutorialSidebar"},"examples/customKeyboard":{"id":"examples/customKeyboard","title":"Custom Keyboard","description":"In this example we will create and add a custom sticker keyboard \ud83d\udc6f\u200d\u2640\ufe0f","sidebar":"tutorialSidebar"},"examples/customTheme":{"id":"examples/customTheme","title":"Custom Theme","description":"In this example we will add a custom theme","sidebar":"tutorialSidebar"},"examples/darkTheme":{"id":"examples/darkTheme","title":"DarkMode","description":"In this example we will implement darkmode in the editor. This is similar to setting up custom css.","sidebar":"tutorialSidebar"},"examples/navHeader":{"id":"examples/navHeader","title":"IOS Keyboard Avoiding Toolbar with Navigation Header","description":"In this example we will be making the toolbar on IOS be exactly over the keyboard when using react-navigation\'s header.","sidebar":"tutorialSidebar"},"intro":{"id":"intro","title":"10tap-editor","description":"TenTap is a typed, easy to use, customizable, and extendable Rich Text editor for React-Native based on Tiptap and Prosemirror. It offers a \\"plug and play\\" experience and comes with many essential features out of the box that can be incorporated into your apps quickly. Additionally, TenTap allows you the developers to tailor the editor to your applications specific needs.","sidebar":"tutorialSidebar"},"mainConcepts":{"id":"mainConcepts","title":"Main Concept","description":"EditorBridge - a bridge to control the editor from the native side - will be extended by bridgeExtensions","sidebar":"tutorialSidebar"},"setup/advancedSetup":{"id":"setup/advancedSetup","title":"Advanced Setup","description":"Make sure you read the core concepts page before setup advance and check if the simple usage is good enough for you.","sidebar":"tutorialSidebar"},"setup/installation":{"id":"setup/installation","title":"Installation","description":"React Native","sidebar":"tutorialSidebar"}}}')}}]);