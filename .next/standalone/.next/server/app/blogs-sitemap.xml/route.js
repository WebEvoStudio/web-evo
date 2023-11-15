"use strict";
(() => {
var exports = {};
exports.id = 4143;
exports.ids = [4143];
exports.modules = {

/***/ 22037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 83648:
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

// EXTERNAL MODULE: ./node_modules/.pnpm/next@13.4.19_@babel+core@7.23.3_react-dom@18.2.0_react@18.2.0_sass@1.69.5/node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(922);
// EXTERNAL MODULE: ./node_modules/.pnpm/next@13.4.19_@babel+core@7.23.3_react-dom@18.2.0_react@18.2.0_sass@1.69.5/node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(94473);
// EXTERNAL MODULE: ./node_modules/.pnpm/next@13.4.19_@babel+core@7.23.3_react-dom@18.2.0_react@18.2.0_sass@1.69.5/node_modules/next/dist/server/future/route-kind.js
var route_kind = __webpack_require__(24178);
// EXTERNAL MODULE: ./node_modules/.pnpm/next-sitemap@4.2.3_next@13.4.19/node_modules/next-sitemap/dist/esm/ssr/sitemap.js + 2 modules
var sitemap = __webpack_require__(13426);
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

;// CONCATENATED MODULE: ./node_modules/.pnpm/next@13.4.19_@babel+core@7.23.3_react-dom@18.2.0_react@18.2.0_sass@1.69.5/node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fblogs-sitemap.xml%2Froute&name=app%2Fblogs-sitemap.xml%2Froute&pagePath=private-next-app-dir%2Fblogs-sitemap.xml%2Froute.ts&appDir=%2FUsers%2Fcityhunter%2FDocuments%2FWorkSpace%2Fweb-evo%2Fapp&appPaths=%2Fblogs-sitemap.xml%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=standalone&preferredRegion=&middlewareConfig=e30%3D!

// @ts-ignore this need to be imported from next/dist to be external


// @ts-expect-error - replaced by webpack/turbopack loader

const AppRouteRouteModule = app_route_module.AppRouteRouteModule;
// We inject the nextConfigOutput here so that we can use them in the route
// module.
const nextConfigOutput = "standalone"
const routeModule = new AppRouteRouteModule({
    definition: {
        kind: route_kind.RouteKind.APP_ROUTE,
        page: "/blogs-sitemap.xml/route",
        pathname: "/blogs-sitemap.xml",
        filename: "route",
        bundlePath: "app/blogs-sitemap.xml/route"
    },
    resolvedPagePath: "/Users/cityhunter/Documents/WorkSpace/web-evo/app/blogs-sitemap.xml/route.ts",
    nextConfigOutput,
    userland: route_namespaceObject
});
// Pull out the exports that we need to expose from the module. This should
// be eliminated when we've moved the other routes to the new format. These
// are used to hook into the route.
const { requestAsyncStorage , staticGenerationAsyncStorage , serverHooks , headerHooks , staticGenerationBailout  } = routeModule;
const originalPathname = "/blogs-sitemap.xml/route";


//# sourceMappingURL=app-route.js.map

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [9900,4659,4009], () => (__webpack_exec__(83648)));
module.exports = __webpack_exports__;

})();