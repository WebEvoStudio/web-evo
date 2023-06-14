"use strict";
(() => {
var exports = {};
exports.id = 55;
exports.ids = [55];
exports.modules = {

/***/ 2266:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderpage_2Fblogs_absolutePagePath_private_next_pages_2Fblogs_2Findex_tsx_preferredRegion_),
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

// NAMESPACE OBJECT: ./pages/blogs/index.tsx
var blogs_namespaceObject = {};
__webpack_require__.r(blogs_namespaceObject);
__webpack_require__.d(blogs_namespaceObject, {
  "default": () => (blogs)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/next@13.4.5_@babel+core@7.22.5_react-dom@18.2.0_react@18.2.0_sass@1.63.3/node_modules/next/dist/server/future/route-modules/pages/module.js
var pages_module = __webpack_require__(132032);
var module_default = /*#__PURE__*/__webpack_require__.n(pages_module);
// EXTERNAL MODULE: ./node_modules/.pnpm/next@13.4.5_@babel+core@7.22.5_react-dom@18.2.0_react@18.2.0_sass@1.63.3/node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js
var helpers = __webpack_require__(702184);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(511527);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(616689);
// EXTERNAL MODULE: ./styles/blog.module.scss
var blog_module = __webpack_require__(81829);
var blog_module_default = /*#__PURE__*/__webpack_require__.n(blog_module);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(752167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(965692);
// EXTERNAL MODULE: ./components/common-head.tsx
var common_head = __webpack_require__(806530);
// EXTERNAL MODULE: ./components/blog-card.tsx
var blog_card = __webpack_require__(472495);
;// CONCATENATED MODULE: ./pages/blogs/index.tsx







/**
 * Blog Page
 * @return {JSX.Element}
 */ function BlogsIndex({ blogs  }) {
    return /*#__PURE__*/ jsx_runtime.jsx(material_.Container, {
        maxWidth: "md",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            children: [
                /*#__PURE__*/ jsx_runtime.jsx(common_head/* default */.Z, {
                    title: "博客 - WebEvolution"
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: (blog_module_default())["blog-wrapper"],
                        children: blogs.map((blog, index)=>/*#__PURE__*/ jsx_runtime.jsx(blog_card/* default */.Z, {
                                blog: blog
                            }, index))
                    })
                })
            ]
        })
    });
}
BlogsIndex.getInitialProps = async ()=>{
    const host = "https://web-evo-server.bulv.life/";
    const path = "blogs";
    const url = `${host}${path}`;
    const res = await external_axios_default().get(url);
    return {
        blogs: res.data
    };
};
/* harmony default export */ const blogs = (BlogsIndex);

;// CONCATENATED MODULE: ./node_modules/.pnpm/next@13.4.5_@babel+core@7.22.5_react-dom@18.2.0_react@18.2.0_sass@1.63.3/node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?page=%2Fblogs&absolutePagePath=private-next-pages%2Fblogs%2Findex.tsx&preferredRegion=!

        // Next.js Route Loader
        
        

        // Import the userland code.
        

        // Re-export the component (should be the default export).
        /* harmony default export */ const next_route_loaderpage_2Fblogs_absolutePagePath_private_next_pages_2Fblogs_2Findex_tsx_preferredRegion_ = ((0,helpers/* hoist */.l)(blogs_namespaceObject, "default"));

        // Re-export methods.
        const getStaticProps = (0,helpers/* hoist */.l)(blogs_namespaceObject, "getStaticProps")
        const getStaticPaths = (0,helpers/* hoist */.l)(blogs_namespaceObject, "getStaticPaths")
        const getServerSideProps = (0,helpers/* hoist */.l)(blogs_namespaceObject, "getServerSideProps")
        const config = (0,helpers/* hoist */.l)(blogs_namespaceObject, "config")
        const reportWebVitals = (0,helpers/* hoist */.l)(blogs_namespaceObject, "reportWebVitals")

        // Re-export legacy methods.
        const unstable_getStaticProps = (0,helpers/* hoist */.l)(blogs_namespaceObject, "unstable_getStaticProps")
        const unstable_getStaticPaths = (0,helpers/* hoist */.l)(blogs_namespaceObject, "unstable_getStaticPaths")
        const unstable_getStaticParams = (0,helpers/* hoist */.l)(blogs_namespaceObject, "unstable_getStaticParams")
        const unstable_getServerProps = (0,helpers/* hoist */.l)(blogs_namespaceObject, "unstable_getServerProps")
        const unstable_getServerSideProps = (0,helpers/* hoist */.l)(blogs_namespaceObject, "unstable_getServerSideProps")

        // Create and export the route module that will be consumed.
        const options = {"definition":{"kind":"PAGES","page":"/blogs","pathname":"/blogs","bundlePath":"","filename":""}}
        const routeModule = new (module_default())({ ...options, userland: blogs_namespaceObject })
        
        
    

/***/ }),

/***/ 247915:
/***/ ((module) => {

module.exports = require("@mui/icons-material");

/***/ }),

/***/ 965692:
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ 752167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 532245:
/***/ ((module) => {

module.exports = require("moment");

/***/ }),

/***/ 943076:
/***/ ((module) => {

module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ 133100:
/***/ ((module) => {

module.exports = require("next/dist/server/render.js");

/***/ }),

/***/ 553918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 745732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 903280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 492796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 764486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 450744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 435843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 599552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 424964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 611751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 623938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 271109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 528854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 393297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 687782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 382470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 359232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 940618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 40968:
/***/ ((module) => {

module.exports = require("next/head");

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
var __webpack_exports__ = __webpack_require__.X(0, [87,527,547,538,983,530,359,495], () => (__webpack_exec__(2266)));
module.exports = __webpack_exports__;

})();