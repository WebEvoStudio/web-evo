"use strict";
(() => {
var exports = {};
exports.id = 773;
exports.ids = [773];
exports.modules = {

/***/ 405606:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderpage_2Fserver_sitemap_xml_absolutePagePath_private_next_pages_2Fserver_sitemap_xml_2Findex_tsx_preferredRegion_),
  getServerSideProps: () => (/* binding */ next_route_loaderpage_2Fserver_sitemap_xml_absolutePagePath_private_next_pages_2Fserver_sitemap_xml_2Findex_tsx_preferredRegion_getServerSideProps),
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

// NAMESPACE OBJECT: ./pages/server-sitemap.xml/index.tsx
var server_sitemap_xml_namespaceObject = {};
__webpack_require__.r(server_sitemap_xml_namespaceObject);
__webpack_require__.d(server_sitemap_xml_namespaceObject, {
  "default": () => (server_sitemap_xml),
  getServerSideProps: () => (getServerSideProps)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/next@13.4.5_@babel+core@7.22.5_react-dom@18.2.0_react@18.2.0_sass@1.63.3/node_modules/next/dist/server/future/route-modules/pages/module.js
var pages_module = __webpack_require__(132032);
var module_default = /*#__PURE__*/__webpack_require__.n(pages_module);
// EXTERNAL MODULE: ./node_modules/.pnpm/next@13.4.5_@babel+core@7.22.5_react-dom@18.2.0_react@18.2.0_sass@1.63.3/node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js
var helpers = __webpack_require__(702184);
// EXTERNAL MODULE: ./node_modules/.pnpm/next-sitemap@4.1.3_@next+env@13.4.5_next@13.4.5/node_modules/next-sitemap/dist/esm/ssr/sitemap.js + 2 modules
var sitemap = __webpack_require__(739649);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(752167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
;// CONCATENATED MODULE: ./pages/server-sitemap.xml/index.tsx


const SitemapIndex = ()=>{};
const getServerSideProps = async (context)=>{
    const fields = [];
    try {
        const host = "https://web-evo.bulv.life";
        const url = `${"https://web-evo-server.bulv.life/"}blogs`;
        const response = await external_axios_default().get(url);
        fields.push(...response.data.map((blog)=>({
                loc: `${host}/blogs/${blog["_id"]}`,
                lastmod: new Date().toISOString()
            })));
    } catch (e) {
        console.error(e);
    }
    return (0,sitemap/* getServerSideSitemap */.M)(context, fields);
};
/* harmony default export */ const server_sitemap_xml = (SitemapIndex);

;// CONCATENATED MODULE: ./node_modules/.pnpm/next@13.4.5_@babel+core@7.22.5_react-dom@18.2.0_react@18.2.0_sass@1.63.3/node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?page=%2Fserver-sitemap.xml&absolutePagePath=private-next-pages%2Fserver-sitemap.xml%2Findex.tsx&preferredRegion=!

        // Next.js Route Loader
        
        

        // Import the userland code.
        

        // Re-export the component (should be the default export).
        /* harmony default export */ const next_route_loaderpage_2Fserver_sitemap_xml_absolutePagePath_private_next_pages_2Fserver_sitemap_xml_2Findex_tsx_preferredRegion_ = ((0,helpers/* hoist */.l)(server_sitemap_xml_namespaceObject, "default"));

        // Re-export methods.
        const getStaticProps = (0,helpers/* hoist */.l)(server_sitemap_xml_namespaceObject, "getStaticProps")
        const getStaticPaths = (0,helpers/* hoist */.l)(server_sitemap_xml_namespaceObject, "getStaticPaths")
        const next_route_loaderpage_2Fserver_sitemap_xml_absolutePagePath_private_next_pages_2Fserver_sitemap_xml_2Findex_tsx_preferredRegion_getServerSideProps = (0,helpers/* hoist */.l)(server_sitemap_xml_namespaceObject, "getServerSideProps")
        const config = (0,helpers/* hoist */.l)(server_sitemap_xml_namespaceObject, "config")
        const reportWebVitals = (0,helpers/* hoist */.l)(server_sitemap_xml_namespaceObject, "reportWebVitals")

        // Re-export legacy methods.
        const unstable_getStaticProps = (0,helpers/* hoist */.l)(server_sitemap_xml_namespaceObject, "unstable_getStaticProps")
        const unstable_getStaticPaths = (0,helpers/* hoist */.l)(server_sitemap_xml_namespaceObject, "unstable_getStaticPaths")
        const unstable_getStaticParams = (0,helpers/* hoist */.l)(server_sitemap_xml_namespaceObject, "unstable_getStaticParams")
        const unstable_getServerProps = (0,helpers/* hoist */.l)(server_sitemap_xml_namespaceObject, "unstable_getServerProps")
        const unstable_getServerSideProps = (0,helpers/* hoist */.l)(server_sitemap_xml_namespaceObject, "unstable_getServerSideProps")

        // Create and export the route module that will be consumed.
        const options = {"definition":{"kind":"PAGES","page":"/server-sitemap.xml","pathname":"/server-sitemap.xml","bundlePath":"","filename":""}}
        const routeModule = new (module_default())({ ...options, userland: server_sitemap_xml_namespaceObject })
        
        
    

/***/ }),

/***/ 752167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 943076:
/***/ ((module) => {

module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ 133100:
/***/ ((module) => {

module.exports = require("next/dist/server/render.js");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [87,649], () => (__webpack_exec__(405606)));
module.exports = __webpack_exports__;

})();