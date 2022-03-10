(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 542:
/***/ ((module) => {

// Exports
module.exports = {
	"header": "header_header__pKEQL",
	"nav": "header_nav__IkGgY",
	"link": "header_link__jujke",
	"menu": "header_menu__2fYWa"
};


/***/ }),

/***/ 768:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(664);
// EXTERNAL MODULE: ./components/header.module.scss
var header_module = __webpack_require__(542);
var header_module_default = /*#__PURE__*/__webpack_require__.n(header_module);
;// CONCATENATED MODULE: ./components/header.tsx





/**
 * Header component
 * @constructor
 */ const Header = ()=>{
    const links = [
        {
            path: '/',
            name: 'Home'
        },
        {
            path: '/about',
            name: 'About'
        },
        {
            path: '/portfolio',
            name: 'Portfolio'
        },
        {
            path: '/blog',
            name: 'Blog'
        },
        {
            path: '/contact',
            name: 'Contact'
        }, 
    ];
    const pathname = `/${(0,router_namespaceObject.useRouter)().pathname.split('/')[1]}`;
    console.log(pathname);
    const { 0: state , 1: setState  } = (0,external_react_.useState)({
        navExpandedState: false
    });
    const setNavExpandedState = ()=>setState({
            navExpandedState: !state.navExpandedState
        })
    ;
    return(/*#__PURE__*/ jsx_runtime_.jsx("header", {
        className: (header_module_default()).header,
        children: /*#__PURE__*/ jsx_runtime_.jsx("nav", {
            className: 'nav',
            style: {
                display: state.navExpandedState ? 'flex' : 'none'
            },
            children: links.map((link, index)=>/*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                    href: link.path,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: `link ${pathname === link.path ? 'active' : ''}`,
                        onClick: ()=>window.innerWidth < 575 ? setNavExpandedState() : null
                        ,
                        children: link.name
                    })
                }, index)
            )
        })
    }));
};
/* harmony default export */ const header = (Header);

;// CONCATENATED MODULE: ./layouts/basic.layout.tsx



/**
 * basic.layout.tsx
 * @param {any} children
 * @constructor
 * @return {JSX.Element}
 */ function BasicLayout({ children  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(header, {}),
            children
        ]
    }));
};

;// CONCATENATED MODULE: ./pages/_app.tsx




/**
 * @param {AppProps} props
 * @param {any} Component
 * @param {any} pageProps
 * @constructor
 * @return {JSX.Element}
 */ function MyApp({ Component , pageProps  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx(BasicLayout, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
            ...pageProps
        })
    }));
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 562:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 14:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 20:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 365:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 52:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 422:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [190,676,664], () => (__webpack_exec__(768)));
module.exports = __webpack_exports__;

})();