"use strict";
(() => {
var exports = {};
exports.id = 143;
exports.ids = [143];
exports.modules = {

/***/ 497783:
/***/ ((module) => {

module.exports = require("next/dist/compiled/@edge-runtime/cookies");

/***/ }),

/***/ 928530:
/***/ ((module) => {

module.exports = require("next/dist/compiled/@opentelemetry/api");

/***/ }),

/***/ 54426:
/***/ ((module) => {

module.exports = require("next/dist/compiled/chalk");

/***/ }),

/***/ 740252:
/***/ ((module) => {

module.exports = require("next/dist/compiled/cookie");

/***/ }),

/***/ 80805:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  headerHooks: () => (/* binding */ headerHooks),
  originalPathname: () => (/* binding */ originalPathname),
  requestAsyncStorage: () => (/* binding */ requestAsyncStorage),
  routeModule: () => (/* binding */ routeModule),
  serverHooks: () => (/* binding */ serverHooks),
  staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),
  staticGenerationBailout: () => (/* binding */ staticGenerationBailout)
});

// NAMESPACE OBJECT: ./app/blogs-sitemap.xml/route.ts
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  GET: () => (GET)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/next@13.4.6_@babel+core@7.22.5_react-dom@18.2.0_react@18.2.0_sass@1.63.3/node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(901991);
// EXTERNAL MODULE: ./node_modules/.pnpm/next@13.4.6_@babel+core@7.22.5_react-dom@18.2.0_react@18.2.0_sass@1.63.3/node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(328459);
var module_default = /*#__PURE__*/__webpack_require__.n(app_route_module);
// EXTERNAL MODULE: ./node_modules/.pnpm/next-sitemap@4.1.3_@next+env@13.4.6_next@13.4.6/node_modules/next-sitemap/dist/esm/ssr/sitemap.js + 2 modules
var sitemap = __webpack_require__(33285);
;// CONCATENATED MODULE: ./app/blogs-sitemap.xml/route.ts

/**
 * Blogs Route
 * @constructor
 */ async function GET() {
    const fields = [];
    const host = "https://web-evo.bulv.life";
    const url = `${"https://web-evo-server.bulv.life/"}blogs`;
    const response = await (await fetch(url)).json();
    fields.push(...response.map((it)=>({
            loc: `${host}/blogs/${it["_id"]}`
        })));
    return (0,sitemap/* getServerSideSitemap */.M)(fields);
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/next@13.4.6_@babel+core@7.22.5_react-dom@18.2.0_react@18.2.0_sass@1.63.3/node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fblogs-sitemap.xml%2Froute&name=app%2Fblogs-sitemap.xml%2Froute&pagePath=private-next-app-dir%2Fblogs-sitemap.xml%2Froute.ts&appDir=%2FUsers%2Fcityhunter%2FDocuments%2FWorkSpace%2Fpersonal-site%2Fapp&appPaths=%2Fblogs-sitemap.xml%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=standalone&preferredRegion=&middlewareConfig=e30%3D!

    

    

    

    const options = {"definition":{"kind":"APP_ROUTE","page":"/blogs-sitemap.xml/route","pathname":"/blogs-sitemap.xml","filename":"route","bundlePath":"app/blogs-sitemap.xml/route"},"resolvedPagePath":"/Users/cityhunter/Documents/WorkSpace/personal-site/app/blogs-sitemap.xml/route.ts","nextConfigOutput":"standalone"}
    const routeModule = new (module_default())({
      ...options,
      userland: route_namespaceObject,
    })

    // Pull out the exports that we need to expose from the module. This should
    // be eliminated when we've moved the other routes to the new format. These
    // are used to hook into the route.
    const {
      requestAsyncStorage,
      staticGenerationAsyncStorage,
      serverHooks,
      headerHooks,
      staticGenerationBailout
    } = routeModule

    const originalPathname = "/blogs-sitemap.xml/route"

    

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [197,854,153], () => (__webpack_exec__(80805)));
module.exports = __webpack_exports__;

})();