(() => {
var exports = {};
exports.id = 3268;
exports.ids = [3268];
exports.modules = {

/***/ 87367:
/***/ ((module) => {

// Exports
module.exports = {
	"blog-title": "blog_blog-title__uqujP",
	"blog-wrapper": "blog_blog-wrapper__lmDY0",
	"blog-item": "blog_blog-item__Q5xOi",
	"blog-description": "blog_blog-description__NvM_l",
	"blog-detail": "blog_blog-detail___sjBy",
	"blog-content": "blog_blog-content__QaA1t",
	"blog-info": "blog_blog-info__1XCRH",
	"page-title": "blog_page-title__0CnWJ",
	"article-body": "blog_article-body__c4H27"
};


/***/ }),

/***/ 39312:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderkind_PAGES_page_2Fblogs_2F_5Bid_5D_preferredRegion_absolutePagePath_private_next_pages_2Fblogs_2F_5Bid_5D_tsx_absoluteAppPath_private_next_pages_2F_app_tsx_absoluteDocumentPath_private_next_pages_2F_document_tsx_middlewareConfigBase64_e30_3D_),
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

// EXTERNAL MODULE: ./node_modules/.pnpm/next@13.4.19_@babel+core@7.23.3_react-dom@18.2.0_react@18.2.0_sass@1.69.5/node_modules/next/dist/server/future/route-modules/pages/module.js
var pages_module = __webpack_require__(32573);
// EXTERNAL MODULE: ./node_modules/.pnpm/next@13.4.19_@babel+core@7.23.3_react-dom@18.2.0_react@18.2.0_sass@1.69.5/node_modules/next/dist/server/future/route-kind.js
var route_kind = __webpack_require__(59390);
// EXTERNAL MODULE: ./node_modules/.pnpm/next@13.4.19_@babel+core@7.23.3_react-dom@18.2.0_react@18.2.0_sass@1.69.5/node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js
var helpers = __webpack_require__(78739);
// EXTERNAL MODULE: ./pages/_document.tsx
var _document = __webpack_require__(70845);
// EXTERNAL MODULE: ./pages/_app.tsx + 1 modules
var _app = __webpack_require__(18957);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(11527);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: ./styles/blog.module.scss
var blog_module = __webpack_require__(87367);
var blog_module_default = /*#__PURE__*/__webpack_require__.n(blog_module);
// EXTERNAL MODULE: ./components/common-head.tsx
var common_head = __webpack_require__(11647);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(52167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: ./core/unit/markdown.ts
var markdown = __webpack_require__(42585);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(65692);
// EXTERNAL MODULE: ./styles/my-bytemd.css
var my_bytemd = __webpack_require__(1816);
// EXTERNAL MODULE: ./node_modules/.pnpm/highlight.js@11.9.0/node_modules/highlight.js/styles/github.css
var github = __webpack_require__(19311);
// EXTERNAL MODULE: external "@bytemd/react"
var react_ = __webpack_require__(66511);
// EXTERNAL MODULE: external "@bytemd/plugin-frontmatter"
var plugin_frontmatter_ = __webpack_require__(54943);
var plugin_frontmatter_default = /*#__PURE__*/__webpack_require__.n(plugin_frontmatter_);
// EXTERNAL MODULE: external "@bytemd/plugin-gfm"
var plugin_gfm_ = __webpack_require__(20149);
var plugin_gfm_default = /*#__PURE__*/__webpack_require__.n(plugin_gfm_);
;// CONCATENATED MODULE: ./pages/blogs/[id].tsx







// import 'bytemd/dist/index.min.css';





/**
 * blog detail page
 * @return {React.ReactElement}
 */ function BlogDetail({ blog }) {
    const host = "https://web-evo.bulv.life";
    const content = markdown/* default */.Z.keywordToLink(blog.markContent, host);
    const plugins = [
        plugin_frontmatter_default()(),
        plugin_gfm_default()()
    ];
    return /*#__PURE__*/ jsx_runtime.jsx(material_.Box, {
        children: /*#__PURE__*/ jsx_runtime.jsx(material_.Container, {
            maxWidth: "md",
            sx: {
                px: 2
            },
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
                                /*#__PURE__*/ jsx_runtime.jsx("h1", {
                                    className: (blog_module_default())["page-title"],
                                    children: blog.title
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: (blog_module_default())["article-body"],
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
    const host = "https://web-evo.bulv.life/service/";
    const path = "blogs";
    const url = `${host}${path}/${id}`;
    const res = await external_axios_default().get(url);
    return {
        blog: res.data
    };
};
/* harmony default export */ const _id_ = (BlogDetail);

;// CONCATENATED MODULE: ./node_modules/.pnpm/next@13.4.19_@babel+core@7.23.3_react-dom@18.2.0_react@18.2.0_sass@1.69.5/node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2Fblogs%2F%5Bid%5D&preferredRegion=&absolutePagePath=private-next-pages%2Fblogs%2F%5Bid%5D.tsx&absoluteAppPath=private-next-pages%2F_app.tsx&absoluteDocumentPath=private-next-pages%2F_document.tsx&middlewareConfigBase64=e30%3D!
// @ts-ignore this need to be imported from next/dist to be external



// Import the app and document modules.
// @ts-expect-error - replaced by webpack/turbopack loader

// @ts-expect-error - replaced by webpack/turbopack loader

// Import the userland code.
// @ts-expect-error - replaced by webpack/turbopack loader

const PagesRouteModule = pages_module.PagesRouteModule;
// Re-export the component (should be the default export).
/* harmony default export */ const next_route_loaderkind_PAGES_page_2Fblogs_2F_5Bid_5D_preferredRegion_absolutePagePath_private_next_pages_2Fblogs_2F_5Bid_5D_tsx_absoluteAppPath_private_next_pages_2F_app_tsx_absoluteDocumentPath_private_next_pages_2F_document_tsx_middlewareConfigBase64_e30_3D_ = ((0,helpers/* hoist */.l)(_id_namespaceObject, "default"));
// Re-export methods.
const getStaticProps = (0,helpers/* hoist */.l)(_id_namespaceObject, "getStaticProps");
const getStaticPaths = (0,helpers/* hoist */.l)(_id_namespaceObject, "getStaticPaths");
const getServerSideProps = (0,helpers/* hoist */.l)(_id_namespaceObject, "getServerSideProps");
const config = (0,helpers/* hoist */.l)(_id_namespaceObject, "config");
const reportWebVitals = (0,helpers/* hoist */.l)(_id_namespaceObject, "reportWebVitals");
// Re-export legacy methods.
const unstable_getStaticProps = (0,helpers/* hoist */.l)(_id_namespaceObject, "unstable_getStaticProps");
const unstable_getStaticPaths = (0,helpers/* hoist */.l)(_id_namespaceObject, "unstable_getStaticPaths");
const unstable_getStaticParams = (0,helpers/* hoist */.l)(_id_namespaceObject, "unstable_getStaticParams");
const unstable_getServerProps = (0,helpers/* hoist */.l)(_id_namespaceObject, "unstable_getServerProps");
const unstable_getServerSideProps = (0,helpers/* hoist */.l)(_id_namespaceObject, "unstable_getServerSideProps");
// Create and export the route module that will be consumed.
const routeModule = new PagesRouteModule({
    definition: {
        kind: route_kind/* RouteKind */.x.PAGES,
        page: "/blogs/[id]",
        pathname: "/blogs/[id]",
        // The following aren't used in production.
        bundlePath: "",
        filename: ""
    },
    components: {
        App: _app["default"],
        Document: _document["default"]
    },
    userland: _id_namespaceObject
});

//# sourceMappingURL=pages.js.map

/***/ }),

/***/ 19311:
/***/ (() => {



/***/ }),

/***/ 1816:
/***/ (() => {



/***/ }),

/***/ 65530:
/***/ ((module) => {

"use strict";
module.exports = require("@bradgarropy/next-google-analytics");

/***/ }),

/***/ 54943:
/***/ ((module) => {

"use strict";
module.exports = require("@bytemd/plugin-frontmatter");

/***/ }),

/***/ 20149:
/***/ ((module) => {

"use strict";
module.exports = require("@bytemd/plugin-gfm");

/***/ }),

/***/ 66511:
/***/ ((module) => {

"use strict";
module.exports = require("@bytemd/react");

/***/ }),

/***/ 71913:
/***/ ((module) => {

"use strict";
module.exports = require("@emotion/cache");

/***/ }),

/***/ 72805:
/***/ ((module) => {

"use strict";
module.exports = require("@emotion/react");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("@emotion/server/create-instance");

/***/ }),

/***/ 97339:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/ArticleRounded");

/***/ }),

/***/ 70652:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/ContactMailRounded");

/***/ }),

/***/ 64912:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/HomeRepairServiceRounded");

/***/ }),

/***/ 35776:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/HomeRounded");

/***/ }),

/***/ 99881:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/KeyboardArrowUp");

/***/ }),

/***/ 63365:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/Menu");

/***/ }),

/***/ 38017:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/Search");

/***/ }),

/***/ 18787:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/SourceRounded");

/***/ }),

/***/ 65692:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material");

/***/ }),

/***/ 75574:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/colors");

/***/ }),

/***/ 52167:
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ 43076:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ 94140:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/get-page-files.js");

/***/ }),

/***/ 89716:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/htmlescape.js");

/***/ }),

/***/ 33100:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/render.js");

/***/ }),

/***/ 76368:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/utils.js");

/***/ }),

/***/ 53918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 45732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 56724:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ 35132:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/get-img-props.js");

/***/ }),

/***/ 92796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 69274:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/hooks-client-context.js");

/***/ }),

/***/ 18743:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/html-context.js");

/***/ }),

/***/ 50744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 35843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 78524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 24964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 11751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 23938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 71109:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 28854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 93297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 87782:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 3349:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/server-inserted-html.js");

/***/ }),

/***/ 82470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 59232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 40618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 40968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 73142:
/***/ ((module) => {

"use strict";
module.exports = require("notistack");

/***/ }),

/***/ 16689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 66405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [9900,4803,2995,1647,2585], () => (__webpack_exec__(39312)));
module.exports = __webpack_exports__;

})();