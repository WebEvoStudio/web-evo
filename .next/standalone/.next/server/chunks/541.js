exports.id = 541;
exports.ids = [541];
exports.modules = {

/***/ 288804:
/***/ ((module) => {

// Exports
module.exports = {
	"actions": "editor_actions__IH3wk"
};


/***/ }),

/***/ 513541:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(511527);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(616689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bytemd_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(266511);
/* harmony import */ var _bytemd_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_bytemd_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var bytemd_dist_index_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(301655);
/* harmony import */ var bytemd_dist_index_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bytemd_dist_index_min_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var bytemd_locales_zh_Hans_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(611053);
/* harmony import */ var _styles_editor_module_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(288804);
/* harmony import */ var _styles_editor_module_scss__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_styles_editor_module_scss__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _bytemd_plugin_frontmatter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(754943);
/* harmony import */ var _bytemd_plugin_frontmatter__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_bytemd_plugin_frontmatter__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _bytemd_plugin_gfm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(620149);
/* harmony import */ var _bytemd_plugin_gfm__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_bytemd_plugin_gfm__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var clipboardy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(691850);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(752167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _core_unit_request__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(788391);
/* harmony import */ var _core_unit_object_unit__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(198846);
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(373142);
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(notistack__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(965692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_11__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([clipboardy__WEBPACK_IMPORTED_MODULE_7__]);
clipboardy__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];











// import 'github-markdown-css/github-markdown-light.css';




const pastePlugin = ()=>{
    return {
        editorEffect (ctx) {
            ctx.editor.getInputField().addEventListener("onpaste", (e)=>{
                e.preventDefault();
            });
        }
    };
};
/**
 * editor.tsx
 * @param {any} props
 * @return {React.ReactElement}
 */ const EditorPage = (props)=>{
    const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(props.value || "");
    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(props.title || "");
    const plugins = [
        _bytemd_plugin_frontmatter__WEBPACK_IMPORTED_MODULE_5___default()(),
        _bytemd_plugin_gfm__WEBPACK_IMPORTED_MODULE_6___default()(),
        pastePlugin()
    ];
    const isModify = !!props.id;
    const { enqueueSnackbar } = (0,notistack__WEBPACK_IMPORTED_MODULE_10__.useSnackbar)();
    const copy = ()=>{
        clipboardy__WEBPACK_IMPORTED_MODULE_7__["default"].write(JSON.stringify({
            title,
            mark_content: value
        })).then(()=>enqueueSnackbar("内容已复制到剪贴板", {
                variant: "success"
            }));
    };
    const save = ()=>{
        const host = "https://web-evo-server.bulv.life/";
        const path = "blogs";
        const url = `${host}${path}`;
        const requestData = {
            title,
            markContent: value
        };
        axios__WEBPACK_IMPORTED_MODULE_8___default().post(url, requestData).then(()=>enqueueSnackbar("文章发布成功", {
                variant: "success"
            })).catch((err)=>enqueueSnackbar(err.message, {
                variant: "error"
            }));
    };
    const modify = ()=>{
        const host = "https://web-evo-server.bulv.life/";
        const path = "blogs";
        const url = `${host}${path}`;
        // message.warn('暂不支持修改').then();
        const requestData = {
            _id: props.id,
            title,
            markContent: value
        };
        axios__WEBPACK_IMPORTED_MODULE_8___default().put(url, requestData).then(()=>enqueueSnackbar("文章修改成功", {
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
            const host = "https://web-evo-server.bulv.life/";
            const request = new _core_unit_request__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z(host);
            const ossData = await request.get("/ali/oss/policy", {});
            const headers = {
                "Content-Type": "multipart/form-data"
            };
            const { dir } = ossData;
            const requestBody = _core_unit_object_unit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z.toFormData({
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
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_editor_module_scss__WEBPACK_IMPORTED_MODULE_13___default().actions),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Box, {
                        sx: {
                            flex: 1
                        },
                        mr: 2,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_11__.TextField, {
                            label: "标题",
                            size: "small",
                            fullWidth: true,
                            value: title,
                            onChange: ({ target: { value } })=>setTitle(value)
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Button, {
                        variant: "outlined",
                        sx: {
                            mr: 2
                        },
                        onClick: copy,
                        children: "复制到剪贴板"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Button, {
                        variant: "outlined",
                        onClick: isModify ? modify : save,
                        children: isModify ? "保存修改" : "发布"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bytemd_react__WEBPACK_IMPORTED_MODULE_2__.Editor, {
                value: value,
                plugins: plugins,
                locale: bytemd_locales_zh_Hans_json__WEBPACK_IMPORTED_MODULE_4__,
                onChange: (v)=>setValue(v),
                uploadImages: uploadImages
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditorPage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 301655:
/***/ (() => {



/***/ }),

/***/ 611053:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"bold":"粗体","boldText":"粗体文本","cheatsheet":"Markdown 语法","closeHelp":"关闭帮助","closeToc":"关闭目录","code":"代码","codeBlock":"代码块","codeLang":"编程语言","codeText":"代码","exitFullscreen":"退出全屏","exitPreviewOnly":"恢复默认","exitWriteOnly":"恢复默认","fullscreen":"全屏","h1":"一级标题","h2":"二级标题","h3":"三级标题","h4":"四级标题","h5":"五级标题","h6":"六级标题","headingText":"标题","help":"帮助","hr":"分割线","image":"图片","imageAlt":"alt","imageTitle":"图片描述","italic":"斜体","italicText":"斜体文本","limited":"已达最大字符数限制","lines":"行数","link":"链接","linkText":"链接描述","ol":"有序列表","olItem":"项目","preview":"预览","previewOnly":"仅预览区","quote":"引用","quotedText":"引用文本","shortcuts":"快捷键","source":"源代码","sync":"同步滚动","toc":"目录","top":"回到顶部","ul":"无序列表","ulItem":"项目","words":"字数","write":"编辑","writeOnly":"仅编辑区"}');

/***/ })

};
;