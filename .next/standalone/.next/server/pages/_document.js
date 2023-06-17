"use strict";
(() => {
var exports = {};
exports.id = 660;
exports.ids = [660];
exports.modules = {

/***/ 465422:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderpage_2F_document_absolutePagePath_private_next_pages_2F_document_tsx_preferredRegion_middlewareConfig_e30_3D_),
  getServerSideProps: () => (/* binding */ getServerSideProps),
  getStaticPaths: () => (/* binding */ getStaticPaths),
  getStaticProps: () => (/* binding */ getStaticProps),
  reportWebVitals: () => (/* binding */ reportWebVitals),
  routeModule: () => (/* binding */ routeModule),
  unstable_getServerProps: () => (/* binding */ unstable_getServerProps),
  unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),
  unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),
  unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),
  unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)
});

// NAMESPACE OBJECT: ./pages/_document.tsx
var _document_namespaceObject = {};
__webpack_require__.r(_document_namespaceObject);
__webpack_require__.d(_document_namespaceObject, {
  "default": () => (MyDocument)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/next@13.4.6_@babel+core@7.22.5_react-dom@18.2.0_react@18.2.0_sass@1.63.3/node_modules/next/dist/server/future/route-modules/pages/module.js
var pages_module = __webpack_require__(378507);
var module_default = /*#__PURE__*/__webpack_require__.n(pages_module);
// EXTERNAL MODULE: ./node_modules/.pnpm/next@13.4.6_@babel+core@7.22.5_react-dom@18.2.0_react@18.2.0_sass@1.63.3/node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js
var helpers = __webpack_require__(613902);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(511527);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(616689);
// EXTERNAL MODULE: ./node_modules/.pnpm/next@13.4.6_@babel+core@7.22.5_react-dom@18.2.0_react@18.2.0_sass@1.63.3/node_modules/next/document.js
var next_document = __webpack_require__(688217);
var document_default = /*#__PURE__*/__webpack_require__.n(next_document);
// EXTERNAL MODULE: ./core/unit/createEmotionCache.ts
var createEmotionCache = __webpack_require__(649553);
;// CONCATENATED MODULE: external "@emotion/server/create-instance"
const create_instance_namespaceObject = require("@emotion/server/create-instance");
var create_instance_default = /*#__PURE__*/__webpack_require__.n(create_instance_namespaceObject);
// EXTERNAL MODULE: ./core/themes/theme.ts
var theme = __webpack_require__(324706);
;// CONCATENATED MODULE: ./pages/_document.tsx






/**
 * Document
 * @constructor
 */ class MyDocument extends (document_default()) {
    /**
   * render
   * @return {JSX.Element}
   */ render() {
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)(next_document.Html, {
            lang: "zh-CN",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(next_document.Head, {
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("meta", {
                            name: "360-site-verification",
                            content: "77b0e1a676566c755d708af4c92a3524"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("meta", {
                            name: "bytedance-verification-code",
                            content: "PwSvcyjJ+I/ikkOs7fGi"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("link", {
                            rel: "icon",
                            href: "/favicon.png"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("link", {
                            rel: "stylesheet",
                            href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("link", {
                            rel: "stylesheet",
                            href: "https://fonts.googleapis.com/icon?family=Material+Icons"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("link", {
                            rel: "manifest",
                            href: "/manifest.json"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("meta", {
                            name: "theme-color",
                            content: theme/* default */.Z.palette.primary.main
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("link", {
                            rel: "apple-touch-icon",
                            href: "/logo192.png"
                        }),
                        this.props.emotionStyleTags
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("body", {
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx(next_document.Main, {}),
                        /*#__PURE__*/ jsx_runtime.jsx(next_document.NextScript, {})
                    ]
                })
            ]
        });
    }
}
MyDocument.getInitialProps = async (ctx)=>{
    const originalRenderPage = ctx.renderPage;
    // You can consider sharing the same emotion cache between all the SSR requests to speed up performance.
    // However, be aware that it can have global side effects.
    const cache = (0,createEmotionCache/* default */.Z)();
    const { extractCriticalToChunks } = create_instance_default()(cache);
    ctx.renderPage = ()=>originalRenderPage({
            enhanceApp: (App)=>function EnhanceApp(props) {
                    return /*#__PURE__*/ jsx_runtime.jsx(App, {
                        emotionCache: cache,
                        ...props
                    });
                }
        });
    const initialProps = await document_default().getInitialProps(ctx);
    // This is important. It prevents emotion to render invalid HTML.
    // See https://github.com/mui/material-ui/issues/26561#issuecomment-855286153
    const emotionStyles = extractCriticalToChunks(initialProps.html);
    const emotionStyleTags = emotionStyles.styles.map((style)=>/*#__PURE__*/ jsx_runtime.jsx("style", {
            "data-emotion": `${style.key} ${style.ids.join(" ")}`,
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML: {
                __html: style.css
            }
        }, style.key));
    return {
        ...initialProps,
        emotionStyleTags
    };
};

;// CONCATENATED MODULE: ./node_modules/.pnpm/next@13.4.6_@babel+core@7.22.5_react-dom@18.2.0_react@18.2.0_sass@1.63.3/node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?page=%2F_document&absolutePagePath=private-next-pages%2F_document.tsx&preferredRegion=&middlewareConfig=e30%3D!

        // Next.js Route Loader
        
        

        // Import the userland code.
        

        // Re-export the component (should be the default export).
        /* harmony default export */ const next_route_loaderpage_2F_document_absolutePagePath_private_next_pages_2F_document_tsx_preferredRegion_middlewareConfig_e30_3D_ = ((0,helpers/* hoist */.l)(_document_namespaceObject, "default"));

        // Re-export methods.
        const getStaticProps = (0,helpers/* hoist */.l)(_document_namespaceObject, "getStaticProps")
        const getStaticPaths = (0,helpers/* hoist */.l)(_document_namespaceObject, "getStaticPaths")
        const getServerSideProps = (0,helpers/* hoist */.l)(_document_namespaceObject, "getServerSideProps")
        const config = (0,helpers/* hoist */.l)(_document_namespaceObject, "config")
        const reportWebVitals = (0,helpers/* hoist */.l)(_document_namespaceObject, "reportWebVitals")

        // Re-export legacy methods.
        const unstable_getStaticProps = (0,helpers/* hoist */.l)(_document_namespaceObject, "unstable_getStaticProps")
        const unstable_getStaticPaths = (0,helpers/* hoist */.l)(_document_namespaceObject, "unstable_getStaticPaths")
        const unstable_getStaticParams = (0,helpers/* hoist */.l)(_document_namespaceObject, "unstable_getStaticParams")
        const unstable_getServerProps = (0,helpers/* hoist */.l)(_document_namespaceObject, "unstable_getServerProps")
        const unstable_getServerSideProps = (0,helpers/* hoist */.l)(_document_namespaceObject, "unstable_getServerSideProps")

        // Create and export the route module that will be consumed.
        const options = {"definition":{"kind":"PAGES","page":"/_document","pathname":"/_document","bundlePath":"","filename":""}}
        const routeModule = new (module_default())({ ...options, userland: _document_namespaceObject })
        
        
    

/***/ }),

/***/ 571913:
/***/ ((module) => {

module.exports = require("@emotion/cache");

/***/ }),

/***/ 965692:
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ 475574:
/***/ ((module) => {

module.exports = require("@mui/material/colors");

/***/ }),

/***/ 943076:
/***/ ((module) => {

module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ 394140:
/***/ ((module) => {

module.exports = require("next/dist/server/get-page-files.js");

/***/ }),

/***/ 189716:
/***/ ((module) => {

module.exports = require("next/dist/server/htmlescape.js");

/***/ }),

/***/ 133100:
/***/ ((module) => {

module.exports = require("next/dist/server/render.js");

/***/ }),

/***/ 776368:
/***/ ((module) => {

module.exports = require("next/dist/server/utils.js");

/***/ }),

/***/ 956724:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ 318743:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/html-context.js");

/***/ }),

/***/ 278524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 616689:
/***/ ((module) => {

module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [536,527,217,116], () => (__webpack_exec__(465422)));
module.exports = __webpack_exports__;

})();