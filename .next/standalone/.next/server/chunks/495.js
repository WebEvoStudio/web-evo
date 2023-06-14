exports.id = 495;
exports.ids = [495];
exports.modules = {

/***/ 81829:
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

/***/ 472495:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(511527);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(616689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_blog_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(81829);
/* harmony import */ var _styles_blog_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_blog_module_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(965692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _core_unit_markdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(92359);
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(247915);
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(532245);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(902983);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(569538);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_6__);









const BlogCard = ({ blog  })=>{
    const [elevation, setElevation] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);
    const loader = ({ src  })=>"https://" + src;
    const poster = (blog)=>{
        if (_core_unit_markdown__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z.getImgUrl(blog.markContent).length) {
            const url = _core_unit_markdown__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z.getImgUrl(blog.markContent)[0];
            const src = url.split("://")[1];
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                sx: {
                    width: {
                        xs: "calc(100% + 20px)",
                        sm: "100px"
                    },
                    height: {
                        xs: "160px",
                        sm: "100px"
                    },
                    position: "relative",
                    background: "#eee",
                    borderRadius: "5px",
                    margin: {
                        xs: "0 -10px",
                        sm: 0
                    },
                    marginTop: {
                        xs: "-10px",
                        sm: 0
                    },
                    ml: {
                        xs: "-10px",
                        sm: "10px"
                    },
                    mb: {
                        xs: "10px",
                        sm: 0
                    }
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {
                    alt: "",
                    loader: loader,
                    src: src,
                    layout: "fill",
                    objectFit: "contain"
                })
            });
        }
    };
    const titleStyle = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>({
            color: elevation === 1 ? "#000" : "#00B0FF"
        }), [
        elevation
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
        href: `/blogs/${blog["_id"]}`,
        passHref: true,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Paper, {
            elevation: elevation,
            sx: {
                margin: "10px 0",
                padding: "0 10px"
            },
            onMouseEnter: ()=>setElevation(5),
            onMouseLeave: ()=>setElevation(1),
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_blog_module_scss__WEBPACK_IMPORTED_MODULE_8___default()["blog-item"]),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                        sx: {
                            flex: 1,
                            width: {
                                xs: "100%",
                                sm: "auto"
                            }
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: (_styles_blog_module_scss__WEBPACK_IMPORTED_MODULE_8___default()["blog-title"]),
                                style: titleStyle,
                                children: blog.title
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_blog_module_scss__WEBPACK_IMPORTED_MODULE_8___default()["blog-description"]),
                                children: _core_unit_markdown__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z.intercept(blog.markContent, 155)
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                                sx: {
                                    display: "flex",
                                    justifyContent: {
                                        xs: "space-between",
                                        sm: "flex-start"
                                    }
                                },
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_styles_blog_module_scss__WEBPACK_IMPORTED_MODULE_8___default()["blog-info"]),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_icons_material__WEBPACK_IMPORTED_MODULE_3__.AccessTime, {
                                                fontSize: "small"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                children: moment__WEBPACK_IMPORTED_MODULE_4___default()(blog.createTime).format("yyyy-MM-DD")
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_styles_blog_module_scss__WEBPACK_IMPORTED_MODULE_8___default()["blog-info"]),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_icons_material__WEBPACK_IMPORTED_MODULE_3__.VisibilityOutlined, {
                                                fontSize: "small"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                children: blog.viewCount
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    poster(blog)
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlogCard);


/***/ })

};
;