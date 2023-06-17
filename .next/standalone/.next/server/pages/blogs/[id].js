(() => {
var exports = {};
exports.id = 268;
exports.ids = [268];
exports.modules = {

/***/ 952461:
/***/ ((module) => {

// Exports
module.exports = {
	"blog-title": "blog_blog-title__Gmvl2",
	"blog-wrapper": "blog_blog-wrapper__0CEwN",
	"blog-item": "blog_blog-item__OCot5",
	"blog-description": "blog_blog-description___UyYQ",
	"blog-detail": "blog_blog-detail__KHx54",
	"blog-content": "blog_blog-content__2MaPg",
	"blog-info": "blog_blog-info__X7qiP"
};


/***/ }),

/***/ 458840:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderpage_2Fblogs_2F_5Bid_5D_absolutePagePath_private_next_pages_2Fblogs_2F_5Bid_5D_tsx_preferredRegion_middlewareConfig_e30_3D_),
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

// NAMESPACE OBJECT: ./pages/blogs/[id].tsx
var _id_namespaceObject = {};
__webpack_require__.r(_id_namespaceObject);
__webpack_require__.d(_id_namespaceObject, {
  "default": () => (_id_)
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
// EXTERNAL MODULE: ./styles/blog.module.scss
var blog_module = __webpack_require__(952461);
var blog_module_default = /*#__PURE__*/__webpack_require__.n(blog_module);
// EXTERNAL MODULE: ./components/common-head.tsx
var common_head = __webpack_require__(596974);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(752167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: ./core/unit/markdown.ts
var markdown = __webpack_require__(391352);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(965692);
// EXTERNAL MODULE: ./node_modules/.pnpm/highlight.js@11.8.0/node_modules/highlight.js/styles/github.css
var github = __webpack_require__(275269);
// EXTERNAL MODULE: ./node_modules/.pnpm/bytemd@1.21.0/node_modules/bytemd/dist/index.min.css
var index_min = __webpack_require__(793579);
// EXTERNAL MODULE: external "@bytemd/react"
var react_ = __webpack_require__(266511);
// EXTERNAL MODULE: external "@bytemd/plugin-frontmatter"
var plugin_frontmatter_ = __webpack_require__(754943);
var plugin_frontmatter_default = /*#__PURE__*/__webpack_require__.n(plugin_frontmatter_);
// EXTERNAL MODULE: external "@bytemd/plugin-gfm"
var plugin_gfm_ = __webpack_require__(620149);
var plugin_gfm_default = /*#__PURE__*/__webpack_require__.n(plugin_gfm_);
;// CONCATENATED MODULE: ./pages/blogs/[id].tsx












/**
 * blog detail page
 * @return {React.ReactElement}
 */ function BlogDetail({ blog }) {
    const host = "http://developer.bulv.life/";
    const content = markdown/* default */.Z.keywordToLink(blog.markContent, host);
    const plugins = [
        plugin_frontmatter_default()(),
        plugin_gfm_default()()
    ];
    return /*#__PURE__*/ jsx_runtime.jsx(material_.Box, {
        children: /*#__PURE__*/ jsx_runtime.jsx(material_.Container, {
            maxWidth: "md",
            children: /*#__PURE__*/ jsx_runtime.jsx("article", {
                "data-clarity-region": "article",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: (blog_module_default()).blog,
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx(common_head/* default */.Z, {
                            title: blog.title + " - Web Evolution",
                            description: markdown/* default */.Z.intercept(blog.markContent, 100)
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: (blog_module_default())["blog-detail"],
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: (blog_module_default())["blog-title"],
                                    children: /*#__PURE__*/ jsx_runtime.jsx("h1", {
                                        children: blog.title
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: (blog_module_default())["blog-content"],
                                    children: /*#__PURE__*/ jsx_runtime.jsx(react_.Viewer, {
                                        value: content,
                                        plugins: plugins
                                    })
                                })
                            ]
                        })
                    ]
                })
            })
        })
    });
}
BlogDetail.getInitialProps = async (ctx)=>{
    const { id } = ctx.query;
    const host = "https://web-evo-server.bulv.life/";
    const path = "blogs";
    const url = `${host}${path}/${id}`;
    const res = await external_axios_default().get(url);
    return {
        blog: res.data
    };
};
/* harmony default export */ const _id_ = (BlogDetail);

;// CONCATENATED MODULE: ./node_modules/.pnpm/next@13.4.6_@babel+core@7.22.5_react-dom@18.2.0_react@18.2.0_sass@1.63.3/node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?page=%2Fblogs%2F%5Bid%5D&absolutePagePath=private-next-pages%2Fblogs%2F%5Bid%5D.tsx&preferredRegion=&middlewareConfig=e30%3D!

        // Next.js Route Loader
        
        

        // Import the userland code.
        

        // Re-export the component (should be the default export).
        /* harmony default export */ const next_route_loaderpage_2Fblogs_2F_5Bid_5D_absolutePagePath_private_next_pages_2Fblogs_2F_5Bid_5D_tsx_preferredRegion_middlewareConfig_e30_3D_ = ((0,helpers/* hoist */.l)(_id_namespaceObject, "default"));

        // Re-export methods.
        const getStaticProps = (0,helpers/* hoist */.l)(_id_namespaceObject, "getStaticProps")
        const getStaticPaths = (0,helpers/* hoist */.l)(_id_namespaceObject, "getStaticPaths")
        const getServerSideProps = (0,helpers/* hoist */.l)(_id_namespaceObject, "getServerSideProps")
        const config = (0,helpers/* hoist */.l)(_id_namespaceObject, "config")
        const reportWebVitals = (0,helpers/* hoist */.l)(_id_namespaceObject, "reportWebVitals")

        // Re-export legacy methods.
        const unstable_getStaticProps = (0,helpers/* hoist */.l)(_id_namespaceObject, "unstable_getStaticProps")
        const unstable_getStaticPaths = (0,helpers/* hoist */.l)(_id_namespaceObject, "unstable_getStaticPaths")
        const unstable_getStaticParams = (0,helpers/* hoist */.l)(_id_namespaceObject, "unstable_getStaticParams")
        const unstable_getServerProps = (0,helpers/* hoist */.l)(_id_namespaceObject, "unstable_getServerProps")
        const unstable_getServerSideProps = (0,helpers/* hoist */.l)(_id_namespaceObject, "unstable_getServerSideProps")

        // Create and export the route module that will be consumed.
        const options = {"definition":{"kind":"PAGES","page":"/blogs/[id]","pathname":"/blogs/[id]","bundlePath":"","filename":""}}
        const routeModule = new (module_default())({ ...options, userland: _id_namespaceObject })
        
        
    

/***/ }),

/***/ 793579:
/***/ (() => {



/***/ }),

/***/ 275269:
/***/ (() => {



/***/ }),

/***/ 754943:
/***/ ((module) => {

"use strict";
module.exports = require("@bytemd/plugin-frontmatter");

/***/ }),

/***/ 620149:
/***/ ((module) => {

"use strict";
module.exports = require("@bytemd/plugin-gfm");

/***/ }),

/***/ 266511:
/***/ ((module) => {

"use strict";
module.exports = require("@bytemd/react");

/***/ }),

/***/ 965692:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material");

/***/ }),

/***/ 752167:
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ 943076:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ 133100:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/render.js");

/***/ }),

/***/ 40968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 616689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [536,527,974,352], () => (__webpack_exec__(458840)));
module.exports = __webpack_exports__;

})();