exports.id = 3251;
exports.ids = [3251];
exports.modules = {

/***/ 76535:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 59140, 23))

/***/ }),

/***/ 14659:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ editor)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/.pnpm/@bytemd+react@1.21.0_react@18.2.0/node_modules/@bytemd/react/dist/index.mjs + 165 modules
var dist = __webpack_require__(42399);
// EXTERNAL MODULE: ./node_modules/.pnpm/bytemd@1.21.0/node_modules/bytemd/locales/zh_Hans.json
var zh_Hans = __webpack_require__(53616);
// EXTERNAL MODULE: ./node_modules/.pnpm/@bytemd+plugin-frontmatter@1.21.0_bytemd@1.21.0/node_modules/@bytemd/plugin-frontmatter/dist/index.mjs + 5 modules
var plugin_frontmatter_dist = __webpack_require__(74466);
// EXTERNAL MODULE: ./node_modules/.pnpm/@bytemd+plugin-gfm@1.21.0_bytemd@1.21.0/node_modules/@bytemd/plugin-gfm/dist/index.mjs + 30 modules
var plugin_gfm_dist = __webpack_require__(17051);
// EXTERNAL MODULE: ./node_modules/.pnpm/clipboardy@3.0.0/node_modules/clipboardy/index.js + 4 modules
var clipboardy = __webpack_require__(43648);
// EXTERNAL MODULE: ./node_modules/.pnpm/axios@1.6.2/node_modules/axios/lib/axios.js + 48 modules
var axios = __webpack_require__(2463);
// EXTERNAL MODULE: ./core/unit/request.ts
var unit_request = __webpack_require__(81878);
// EXTERNAL MODULE: ./core/unit/object-unit.ts
var object_unit = __webpack_require__(35164);
// EXTERNAL MODULE: ./node_modules/.pnpm/notistack@3.0.1_csstype@3.1.2_react-dom@18.2.0_react@18.2.0/node_modules/notistack/index.js
var notistack = __webpack_require__(85110);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.14.18_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.9_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/node/index.js
var node = __webpack_require__(59140);
;// CONCATENATED MODULE: ./core/libs/bytemd-plugins.ts
function isMarkdownImage(text) {
    // 正则表达式用于匹配 Markdown 图片格式 ![alt text](image url)
    const regex = /!\[.*\]\(.*\)/;
    // 使用正则表达式测试文本
    return regex.test(text);
}
function getMarkdownImageURL(text) {
    // 正则表达式用于匹配 Markdown 图片格式 ![alt text](image url)
    const regex = /!\[.*\]\((.*?)\)/;
    // 使用正则表达式提取图片 URL
    const match = regex.exec(text);
    if (match && match.length >= 2) {
        return match[1];
    } else {
        return null;
    }
}
const iconColor = "#9A9CA3";
function imagePlugin() {
    // eslint-disable-next-line max-len
    const icon = `<svg width="24" height="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0Zm-8-3v.551a3.5 3.5 0 1 1-.187 4.691C3.55 8.427 3.811 8 4.221 8c.176 0 .339.085.46.213A2.5 2.5 0 1 0 4.5 5H5.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 1 0Z" fill="#9A9CA3"/><path d="M18.75 5.5h-5.826a6.451 6.451 0 0 0-.422-1.5h6.248A3.25 3.25 0 0 1 22 7.25v11.5A3.25 3.25 0 0 1 18.75 22H7.25A3.25 3.25 0 0 1 4 18.75v-6.248c.474.198.977.34 1.5.422v5.826c0 .208.036.408.103.594l5.823-5.701a2.25 2.25 0 0 1 3.02-.116l.128.116 5.822 5.702c.067-.186.104-.386.104-.595V7.25a1.75 1.75 0 0 0-1.75-1.75Zm.58 14.901-5.805-5.686a.75.75 0 0 0-.966-.071l-.084.07-5.807 5.687c.182.064.378.099.582.099h11.5c.203 0 .399-.035.58-.099Z" fill="#9A9CA3"/><path d="M16.252 7.5a2.252 2.252 0 1 1 0 4.504 2.252 2.252 0 0 1 0-4.504Zm0 1.5a.752.752 0 1 0 0 1.504.752.752 0 0 0 0-1.504Z" fill="#9A9CA3"/></svg>`;
    return {
        actions: [
            {
                title: "将选择的图片转换为可控制大小",
                // eslint-disable-next-line max-len
                icon,
                handler: {
                    type: "action",
                    click (ctx) {
                        // editor.
                        // console.log(ctx);
                        const s = window.getSelection()?.toString();
                        // console.log(s);
                        // console.log(isMarkdownImage(s!));
                        const imgUrl = getMarkdownImageURL(s);
                        // console.log(imgUrl);
                        // ctx.appendBlock('222');
                        imgUrl && ctx.appendBlock(`<featur>\n  <img width="100%" src="${imgUrl}">\n</featur>`);
                    }
                }
            }
        ]
    };
}

// EXTERNAL MODULE: ./node_modules/.pnpm/@bytemd+plugin-highlight@1.21.0_bytemd@1.21.0/node_modules/@bytemd/plugin-highlight/dist/index.mjs
var plugin_highlight_dist = __webpack_require__(91744);
// EXTERNAL MODULE: ./node_modules/.pnpm/@bytemd+plugin-highlight-ssr@1.21.0_bytemd@1.21.0/node_modules/@bytemd/plugin-highlight-ssr/dist/index.mjs + 45 modules
var plugin_highlight_ssr_dist = __webpack_require__(80665);
// EXTERNAL MODULE: ./node_modules/.pnpm/bytemd@1.21.0/node_modules/bytemd/dist/index.css
var bytemd_dist = __webpack_require__(68488);
// EXTERNAL MODULE: ./node_modules/.pnpm/highlight.js@11.9.0/node_modules/highlight.js/styles/base16/google-dark.css
var google_dark = __webpack_require__(50662);
// EXTERNAL MODULE: ./styles/my-bytemd.css
var my_bytemd = __webpack_require__(82828);
;// CONCATENATED MODULE: ./ui/components/editor.tsx



















const pastePlugin = ()=>{
    return {
        editorEffect (ctx) {
            ctx.editor.getInputField().addEventListener("onpaste", (e)=>{
                e.preventDefault();
            });
        }
    };
};
const EditorPage = (props)=>{
    const [value, setValue] = (0,react_.useState)(props.value || "");
    const [title, setTitle] = (0,react_.useState)(props.title || "");
    const [form, setForm] = (0,react_.useState)({
        pathName: props["pathName"] || ""
    });
    const plugins = [
        (0,plugin_frontmatter_dist/* default */.Z)(),
        (0,plugin_gfm_dist/* default */.Z)(),
        pastePlugin(),
        imagePlugin(),
        (0,plugin_highlight_dist/* default */.Z)(),
        (0,plugin_highlight_ssr_dist/* default */.Z)()
    ];
    const isModify = !!props.id;
    const { enqueueSnackbar } = (0,notistack.useSnackbar)();
    const copy = ()=>{
        clipboardy/* default */.Z.write(JSON.stringify({
            title,
            mark_content: value
        })).then(()=>enqueueSnackbar("内容已复制到剪贴板", {
                variant: "success"
            }));
    };
    const save = ()=>{
        const host = "https://web-evo.bulv.life/service/";
        const path = "blogs";
        const url = `${host}${path}`;
        const requestData = {
            title,
            markContent: value,
            ...form
        };
        axios/* default */.Z.post(url, requestData).then(()=>enqueueSnackbar("文章发布成功", {
                variant: "success"
            })).catch((err)=>enqueueSnackbar(err.message, {
                variant: "error"
            }));
    };
    const modify = ()=>{
        const host = "https://web-evo.bulv.life/service/";
        const path = "blogs";
        const url = `${host}${path}`;
        // message.warn('暂不支持修改').then();
        const requestData = {
            _id: props.id,
            title,
            markContent: value
        };
        axios/* default */.Z.put(url, requestData).then(()=>enqueueSnackbar("文章修改成功", {
                variant: "success"
            })).catch((err)=>enqueueSnackbar(err.message, {
                variant: "error"
            }));
    };
    const uploadImages = async (files)=>{
        const response = [];
        try {
            if (files.length > 1) throw new Error("一次只能上传一张图片");
            const fileName = files[0].name;
            if (fileName.indexOf(" ") !== -1) throw new Error("文件名不允许包含空格");
            const host = "https://web-evo.bulv.life/service/";
            const request = new unit_request/* default */.Z(host);
            const ossData = await request.get("/ali/oss/policy", {});
            const headers = {
                "Content-Type": "multipart/form-data"
            };
            const { dir } = ossData;
            const requestBody = object_unit/* default */.Z.toFormData({
                key: dir.length ? `${dir}/${files[0].name}` : files[0].name,
                ...ossData,
                file: files[0]
            });
            const { filepath } = await request.post(ossData.host, requestBody, headers);
            response.push({
                url: filepath,
                alt: "",
                title: ""
            });
            return response;
        } catch (e) {
            enqueueSnackbar(e.message, {
                variant: "error"
            });
            throw new DOMException(e.message);
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(node.Card, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(node.CardHeader, {
                        title: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(node.Box, {
                            sx: {
                                flex: 1,
                                display: "flex"
                            },
                            mr: 2,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(node.TextField, {
                                    label: "标题",
                                    size: "small",
                                    fullWidth: true,
                                    value: title,
                                    sx: {
                                        mr: 2
                                    },
                                    onChange: ({ target: { value } })=>setTitle(value)
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(node.TextField, {
                                    label: "路径",
                                    size: "small",
                                    value: form.pathName,
                                    onChange: ({ target: { value } })=>setForm({
                                            ...form,
                                            pathName: value
                                        })
                                })
                            ]
                        }),
                        action: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(node.Box, {
                            sx: {
                                display: "flex",
                                alignItems: "center",
                                mt: "6px",
                                mb: "4px"
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(node.Button, {
                                    variant: "outlined",
                                    sx: {
                                        mr: 2
                                    },
                                    onClick: copy,
                                    children: "复制到剪贴板"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(node.Button, {
                                    variant: "outlined",
                                    onClick: isModify ? modify : save,
                                    children: isModify ? "保存修改" : "发布"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(node.CardContent, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(dist/* Editor */.M, {
                            value: value,
                            plugins: plugins,
                            locale: zh_Hans,
                            onChange: (v)=>setValue(v),
                            uploadImages: uploadImages
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const editor = (EditorPage);


/***/ }),

/***/ 56039:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6888);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(72613);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);



const DashboardLayout = (props)=>{
    const { children } = props;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
        sx: {
            height: "calc(100vh)",
            boxSizing: "border-box",
            p: 2
        },
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DashboardLayout);


/***/ }),

/***/ 82828:
/***/ (() => {



/***/ })

};
;