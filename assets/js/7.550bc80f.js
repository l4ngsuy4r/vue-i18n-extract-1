(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{353:function(t,a,s){"use strict";s.r(a);var e=s(42),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"how-to-use"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-to-use"}},[t._v("#")]),t._v(" How To Use")]),t._v(" "),s("h2",{attrs:{id:"getting-started"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getting-started"}},[t._v("#")]),t._v(" Getting Started")]),t._v(" "),s("p",[t._v("Install "),s("code",[t._v("vue-i18n-extract")]),t._v(" using "),s("a",{attrs:{href:"https://yarnpkg.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("Yarn"),s("OutboundLink")],1)]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" -D vue-i18n-extract\n")])])]),s("p",[t._v("Or "),s("a",{attrs:{href:"https://www.npmjs.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("NPM"),s("OutboundLink")],1)]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" --save-dev vue-i18n-extract\n")])])]),s("blockquote",[s("p",[t._v("Note: "),s("code",[t._v("vue-i18n-extract")]),t._v(" documentation uses "),s("code",[t._v("yarn")]),t._v(" commands, but "),s("code",[t._v("npm")]),t._v(" will also work. You can compare "),s("code",[t._v("yarn")]),t._v(" and "),s("code",[t._v("npm")]),t._v(" commands in the "),s("code",[t._v("yarn")]),t._v(" docs, "),s("a",{attrs:{href:"https://yarnpkg.com/en/docs/migrating-from-npm#toc-cli-commands-comparison",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),s("OutboundLink")],1),t._v(".")])]),t._v(" "),s("p",[t._v("Add the following section to your "),s("code",[t._v("package.json")]),t._v(":")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"scripts"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"vue-i18n-extract"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vue-i18n-extract"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("Finally, run:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run vue-i18n-extract report -v "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./path/to/your/vue-files/**/*.?(js|vue)'")]),t._v(" -l "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./path/to/your/language-files/*.?(js|json|yml|yaml)'")]),t._v("\n")])])]),s("p",[t._v("or")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" vue-i18n-extract report -v "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./path/to/your/vue-files/**/*.?(js|vue)'")]),t._v(" -l "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./path/to/your/language-files/*.?(js|json|yml|yaml)'")]),t._v("\n")])])]),s("p",[t._v("This will print out a table of missing keys in your language files, as well as unused keys in your language files.")]),t._v(" "),s("h2",{attrs:{id:"running-from-command-line"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#running-from-command-line"}},[t._v("#")]),t._v(" Running From Command Line")]),t._v(" "),s("p",[t._v("You can run "),s("code",[t._v("vue-i18n-extract")]),t._v(" directly from the CLI without having to install anything using npx")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("npx vue-i18n-extract report -v "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./path/to/your/vue-files/**/*.?(js|vue)'")]),t._v(" -l "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./path/to/your/language-files/*.?(js|json|yml|yaml)'")]),t._v("\n")])])]),s("p",[t._v("or")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" dlx vue-i18n-extract report -v "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./path/to/your/vue-files/**/*.?(js|vue)'")]),t._v(" -l "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./path/to/your/language-files/*.?(js|json|yml|yaml)'")]),t._v("\n")])])]),s("h3",{attrs:{id:"cli-options"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cli-options"}},[t._v("#")]),t._v(" CLI Options")]),t._v(" "),s("h4",{attrs:{id:"v-vuefiles-required"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#v-vuefiles-required"}},[t._v("#")]),t._v(" "),s("code",[t._v("-v, --vueFiles")]),t._v(" Required")]),t._v(" "),s("p",[t._v("The Vue.js file(s) you want to extract i18n strings from. It can be a path to a folder or to a file. It accepts glob patterns.\n"),s("code",[t._v("./path/to/your/vue-files/**/*.?(js|vue)")])]),t._v(" "),s("h4",{attrs:{id:"l-languagefiles-required"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#l-languagefiles-required"}},[t._v("#")]),t._v(" "),s("code",[t._v("-l, --languageFiles")]),t._v(" Required")]),t._v(" "),s("p",[t._v("The language file(s) you want to compare your Vue.js file(s) to. It can be a path to a folder or to a file. It accepts glob patterns.\n"),s("code",[t._v("./path/to/your/language-files/*.?(js|json|yml|yaml)")])]),t._v(" "),s("h4",{attrs:{id:"o-output"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#o-output"}},[t._v("#")]),t._v(" "),s("code",[t._v("-o, --output")])]),t._v(" "),s("p",[t._v("Use if you want to create a json file out of your report.\n"),s("code",[t._v("-o output.json")])]),t._v(" "),s("h4",{attrs:{id:"a-add"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#a-add"}},[t._v("#")]),t._v(" "),s("code",[t._v("-a, --add")])]),t._v(" "),s("p",[t._v("Use if you want to add missing keys into your language files.\n"),s("code",[t._v("-a")])]),t._v(" "),s("h2",{attrs:{id:"usage-in-nodejs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#usage-in-nodejs"}},[t._v("#")]),t._v(" Usage in NodeJS")]),t._v(" "),s("p",[t._v("Make sure you have "),s("code",[t._v("vue-i18n-extract")]),t._v(" installed locally and then just import the library and uses the API:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" VueI18NExtract "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue-i18n-extract'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" report "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" VueI18NExtract"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createI18NReport")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./path/to/vue-files/**/*.?(js|vue)'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./path/to/language-files/*.?(js|json|yml|yaml)'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);