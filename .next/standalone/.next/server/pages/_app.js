(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 429029:
/***/ ((module) => {

// Exports
module.exports = {
	"bottom-button": "basic-layout_bottom-button__BEYAT"
};


/***/ }),

/***/ 424853:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderpage_2F_app_absolutePagePath_private_next_pages_2F_app_tsx_preferredRegion_middlewareConfig_e30_3D_),
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

// NAMESPACE OBJECT: ./pages/_app.tsx
var _app_namespaceObject = {};
__webpack_require__.r(_app_namespaceObject);
__webpack_require__.d(_app_namespaceObject, {
  "default": () => (_app)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/next@13.4.7_@babel+core@7.22.5_react-dom@18.2.0_react@18.2.0_sass@1.63.3/node_modules/next/dist/server/future/route-modules/pages/module.js
var pages_module = __webpack_require__(725329);
var module_default = /*#__PURE__*/__webpack_require__.n(pages_module);
// EXTERNAL MODULE: ./node_modules/.pnpm/next@13.4.7_@babel+core@7.22.5_react-dom@18.2.0_react@18.2.0_sass@1.63.3/node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js
var helpers = __webpack_require__(769548);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(511527);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(616689);
// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__(385251);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(965692);
// EXTERNAL MODULE: external "@mui/icons-material"
var icons_material_ = __webpack_require__(247915);
// EXTERNAL MODULE: ./node_modules/.pnpm/next@13.4.7_@babel+core@7.22.5_react-dom@18.2.0_react@18.2.0_sass@1.63.3/node_modules/next/navigation.js
var navigation = __webpack_require__(6724);
// EXTERNAL MODULE: ./ui/layouts/basic-layout.module.css
var basic_layout_module = __webpack_require__(429029);
var basic_layout_module_default = /*#__PURE__*/__webpack_require__.n(basic_layout_module);
// EXTERNAL MODULE: ./core/themes/theme.ts
var theme = __webpack_require__(16463);
// EXTERNAL MODULE: ./ui/header.tsx + 1 modules
var header = __webpack_require__(940410);
// EXTERNAL MODULE: ./node_modules/.pnpm/next@13.4.7_@babel+core@7.22.5_react-dom@18.2.0_react@18.2.0_sass@1.63.3/node_modules/next/image.js
var next_image = __webpack_require__(658928);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./core/libs/images.ts
var libs_images = __webpack_require__(849945);
// EXTERNAL MODULE: ./node_modules/.pnpm/next@13.4.7_@babel+core@7.22.5_react-dom@18.2.0_react@18.2.0_sass@1.63.3/node_modules/next/link.js
var next_link = __webpack_require__(588018);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./ui/layouts/basic.layout.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 










/**
 * basic.layout.tsx
 * @param {any} children
 * @constructor
 * @return {JSX.Element}
 */ function BasicLayout({ children }) {
    const router = (0,navigation.useRouter)();
    const pathname = (0,navigation.usePathname)();
    const [isPwa, setIsPwa] = (0,external_react_.useState)(false);
    const [current, setCurrent] = (0,external_react_.useState)(0);
    (0,external_react_.useEffect)(()=>{
        console.log(router);
    // setIsPwa(
    //     ['fullscreen', 'standalone', 'minimal-ui'].some(
    //         (displayMode) => window.matchMedia('(display-mode: ' + displayMode + ')').matches,
    //     ),
    // );
    }, []);
    (0,external_react_.useEffect)(()=>{
        const path = `/${pathname?.split("/")[1]}`;
        const index = [
            "/",
            "/blogs",
            "/docs",
            "/tools",
            "/contact"
        ].indexOf(path);
        setCurrent(index);
    }, [
        router
    ]);
    const TabBar = ()=>{
        if (isPwa) {
            return /*#__PURE__*/ (0,jsx_runtime.jsxs)(material_.Box, {
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx(material_.Paper, {
                        className: (basic_layout_module_default())["bottom-button"],
                        sx: {
                            position: "fixed",
                            bottom: 0,
                            left: 0,
                            right: 0,
                            zIndex: 1
                        },
                        elevation: 3,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(material_.BottomNavigation, {
                            showLabels: true,
                            value: current,
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx(material_.BottomNavigationAction, {
                                    label: "首页",
                                    icon: /*#__PURE__*/ jsx_runtime.jsx(icons_material_.HomeRounded, {}),
                                    onClick: ()=>router.push("/")
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx(material_.BottomNavigationAction, {
                                    label: "博客",
                                    icon: /*#__PURE__*/ jsx_runtime.jsx(icons_material_.ArticleRounded, {}),
                                    onClick: ()=>router.push("/blogs")
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx(material_.BottomNavigationAction, {
                                    label: "文档",
                                    icon: /*#__PURE__*/ jsx_runtime.jsx(icons_material_.SourceRounded, {}),
                                    onClick: ()=>router.push("/docs")
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx(material_.BottomNavigationAction, {
                                    label: "工具",
                                    icon: /*#__PURE__*/ jsx_runtime.jsx(icons_material_.HomeRepairServiceRounded, {}),
                                    onClick: ()=>router.push("/tools")
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx(material_.BottomNavigationAction, {
                                    label: "联系",
                                    icon: /*#__PURE__*/ jsx_runtime.jsx(icons_material_.ContactMailRounded, {}),
                                    onClick: ()=>router.push("/contact")
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(material_.Box, {
                        className: (basic_layout_module_default())["bottom-button"],
                        sx: {
                            width: "100%",
                            height: "100px"
                        }
                    })
                ]
            });
        }
        return null;
    };
    const Footer = ()=>{
        const connects = [];
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)("footer", {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(material_.Box, {
                    sx: {
                        borderTop: 2,
                        paddingTop: "20px",
                        borderColor: "divider",
                        display: "flex",
                        flexDirection: {
                            xs: "column-reverse",
                            md: "column"
                        },
                        alignItems: "center"
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                            href: "/",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(material_.Box, {
                                sx: {
                                    display: "flex",
                                    alignItems: "center"
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                        src: libs_images/* Images */.r.undrawDeveloperActivity,
                                        width: 56,
                                        alt: "Web Evo Logo"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(material_.Box, {
                                        sx: {
                                            ml: 1,
                                            textAlign: "center"
                                        },
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx(material_.Typography, {
                                                fontWeight: "bold",
                                                fontSize: 18,
                                                color: "primary",
                                                children: "WebEvo"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx(material_.Typography, {
                                                fontWeight: "bold",
                                                children: "STUDIO"
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx(material_.Box, {
                            sx: {
                                display: "flex",
                                width: "100%",
                                justifyContent: "center"
                            },
                            children: connects.map((it, i)=>/*#__PURE__*/ jsx_runtime.jsx(material_.Box, {
                                    sx: {
                                        width: "20%",
                                        textAlign: "center",
                                        mb: 1
                                    },
                                    children: it.icon
                                }, i))
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime.jsx(material_.Box, {
                    sx: {
                        mt: 2,
                        display: "flex",
                        justifyContent: "center"
                    },
                    children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                        href: "https://www.digitalocean.com/?refcode=691dc5c1ac63&utm_campaign=Referral_Invite&utm_medium=Referral_Program&utm_source=badge",
                        children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                            src: "https://web-platforms.sfo2.digitaloceanspaces.com/WWW/Badge%203.svg",
                            alt: "DigitalOcean Referral Badge"
                        })
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(material_.Box, {
                    sx: {
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        mt: {
                            xs: 2,
                            md: 3.5
                        },
                        pb: 3
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx(material_.Typography, {
                            textAlign: "center",
                            fontSize: 14,
                            children: "\xa9 2023, Web Evo All Rights Reserved"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                            href: "/privacy-policy",
                            children: /*#__PURE__*/ jsx_runtime.jsx(material_.Typography, {
                                color: "primary",
                                textAlign: "center",
                                fontSize: 14,
                                children: "Privacy Policy"
                            })
                        })
                    ]
                })
            ]
        });
    };
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(material_.ThemeProvider, {
            theme: theme/* default */.Z,
            children: [
                /*#__PURE__*/ jsx_runtime.jsx(material_.CssBaseline, {}),
                !isPwa ? /*#__PURE__*/ jsx_runtime.jsx(header/* default */.Z, {}) : null,
                children,
                /*#__PURE__*/ jsx_runtime.jsx(TabBar, {}),
                /*#__PURE__*/ jsx_runtime.jsx(Footer, {})
            ]
        })
    });
}

// EXTERNAL MODULE: ./styles/index.scss
var styles = __webpack_require__(734087);
;// CONCATENATED MODULE: external "@bradgarropy/next-google-analytics"
const next_google_analytics_namespaceObject = require("@bradgarropy/next-google-analytics");
var next_google_analytics_default = /*#__PURE__*/__webpack_require__.n(next_google_analytics_namespaceObject);
;// CONCATENATED MODULE: external "@emotion/react"
const react_namespaceObject = require("@emotion/react");
// EXTERNAL MODULE: ./core/unit/createEmotionCache.ts
var createEmotionCache = __webpack_require__(679353);
// EXTERNAL MODULE: ./node_modules/.pnpm/next@13.4.7_@babel+core@7.22.5_react-dom@18.2.0_react@18.2.0_sass@1.63.3/node_modules/next/script.js
var script = __webpack_require__(69328);
var script_default = /*#__PURE__*/__webpack_require__.n(script);
// EXTERNAL MODULE: external "notistack"
var external_notistack_ = __webpack_require__(373142);
;// CONCATENATED MODULE: ./pages/_app.tsx












const clientSideEmotionCache = (0,createEmotionCache/* default */.Z)();
/**
 * @param {AppProps} props
 * @constructor
 * @return {JSX.Element}
 */ function MyApp(props) {
    const { Component, pageProps, emotionCache = clientSideEmotionCache } = props;
    return /*#__PURE__*/ jsx_runtime.jsx(react_namespaceObject.CacheProvider, {
        value: emotionCache,
        children: /*#__PURE__*/ jsx_runtime.jsx(material_.ThemeProvider, {
            theme: theme/* default */.Z,
            children: /*#__PURE__*/ jsx_runtime.jsx(external_notistack_.SnackbarProvider, {
                dense: true,
                maxSnack: 1,
                autoHideDuration: 3000,
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(BasicLayout, {
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx(material_.CssBaseline, {}),
                        /*#__PURE__*/ jsx_runtime.jsx(Component, {
                            ...pageProps
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx((next_google_analytics_default()), {
                            measurementId: "G-R8ZM6SVZ0K"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx((script_default()), {
                            id: "microsoft-clarity",
                            dangerouslySetInnerHTML: {
                                __html: `
            (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "b91ge7rn7p");
            `
                            }
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx((script_default()), {
                            src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1031326139722537",
                            crossOrigin: "anonymous",
                            async: true,
                            strategy: "afterInteractive"
                        })
                    ]
                })
            })
        })
    });
}
/* harmony default export */ const _app = (MyApp);

;// CONCATENATED MODULE: ./node_modules/.pnpm/next@13.4.7_@babel+core@7.22.5_react-dom@18.2.0_react@18.2.0_sass@1.63.3/node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.tsx&preferredRegion=&middlewareConfig=e30%3D!

        // Next.js Route Loader
        
        

        // Import the userland code.
        

        // Re-export the component (should be the default export).
        /* harmony default export */ const next_route_loaderpage_2F_app_absolutePagePath_private_next_pages_2F_app_tsx_preferredRegion_middlewareConfig_e30_3D_ = ((0,helpers/* hoist */.l)(_app_namespaceObject, "default"));

        // Re-export methods.
        const getStaticProps = (0,helpers/* hoist */.l)(_app_namespaceObject, "getStaticProps")
        const getStaticPaths = (0,helpers/* hoist */.l)(_app_namespaceObject, "getStaticPaths")
        const getServerSideProps = (0,helpers/* hoist */.l)(_app_namespaceObject, "getServerSideProps")
        const config = (0,helpers/* hoist */.l)(_app_namespaceObject, "config")
        const reportWebVitals = (0,helpers/* hoist */.l)(_app_namespaceObject, "reportWebVitals")

        // Re-export legacy methods.
        const unstable_getStaticProps = (0,helpers/* hoist */.l)(_app_namespaceObject, "unstable_getStaticProps")
        const unstable_getStaticPaths = (0,helpers/* hoist */.l)(_app_namespaceObject, "unstable_getStaticPaths")
        const unstable_getStaticParams = (0,helpers/* hoist */.l)(_app_namespaceObject, "unstable_getStaticParams")
        const unstable_getServerProps = (0,helpers/* hoist */.l)(_app_namespaceObject, "unstable_getServerProps")
        const unstable_getServerSideProps = (0,helpers/* hoist */.l)(_app_namespaceObject, "unstable_getServerSideProps")

        // Create and export the route module that will be consumed.
        const options = {"definition":{"kind":"PAGES","page":"/_app","pathname":"/_app","bundlePath":"","filename":""}}
        const routeModule = new (module_default())({ ...options, userland: _app_namespaceObject })
        
        
    

/***/ }),

/***/ 385251:
/***/ (() => {



/***/ }),

/***/ 734087:
/***/ (() => {



/***/ }),

/***/ 571913:
/***/ ((module) => {

"use strict";
module.exports = require("@emotion/cache");

/***/ }),

/***/ 247915:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material");

/***/ }),

/***/ 965692:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material");

/***/ }),

/***/ 475574:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/colors");

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

/***/ 553918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 745732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 903280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 492796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 669274:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/hooks-client-context.js");

/***/ }),

/***/ 764486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 450744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 435843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 599552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 424964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 611751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 623938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 271109:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 528854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 393297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 687782:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 803349:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/server-inserted-html.js");

/***/ }),

/***/ 382470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 359232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 940618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 373142:
/***/ ((module) => {

"use strict";
module.exports = require("notistack");

/***/ }),

/***/ 616689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 566405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [408,498,634,928,18,724,328,945,410,495], () => (__webpack_exec__(424853)));
module.exports = __webpack_exports__;

})();