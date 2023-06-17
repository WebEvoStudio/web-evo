exports.id = 163;
exports.ids = [163];
exports.modules = {

/***/ 967479:
/***/ ((module) => {

// Exports
module.exports = {
	"primaryColor": "#ffc107"
};


/***/ }),

/***/ 648558:
/***/ ((module) => {

// Exports
module.exports = {
	"header": "header_header__gl_x7",
	"nav": "header_nav__4dqKu",
	"link": "header_link__Hq8ip"
};


/***/ }),

/***/ 160163:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ header)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(511527);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(616689);
// EXTERNAL MODULE: ./node_modules/.pnpm/next@13.4.6_@babel+core@7.22.5_react-dom@18.2.0_react@18.2.0_sass@1.63.3/node_modules/next/link.js
var next_link = __webpack_require__(396223);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./ui/header.module.scss
var header_module = __webpack_require__(648558);
var header_module_default = /*#__PURE__*/__webpack_require__.n(header_module);
// EXTERNAL MODULE: ./styles/variables.module.scss
var variables_module = __webpack_require__(967479);
var variables_module_default = /*#__PURE__*/__webpack_require__.n(variables_module);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(965692);
// EXTERNAL MODULE: external "@mui/icons-material"
var icons_material_ = __webpack_require__(247915);
// EXTERNAL MODULE: ./node_modules/.pnpm/next@13.4.6_@babel+core@7.22.5_react-dom@18.2.0_react@18.2.0_sass@1.63.3/node_modules/next/image.js
var next_image = __webpack_require__(250106);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./core/libs/images.ts
var libs_images = __webpack_require__(88104);
// EXTERNAL MODULE: ./node_modules/.pnpm/next@13.4.6_@babel+core@7.22.5_react-dom@18.2.0_react@18.2.0_sass@1.63.3/node_modules/next/navigation.js
var navigation = __webpack_require__(761519);
;// CONCATENATED MODULE: ./components/main-search.tsx





const MainSearch = ()=>{
    const router = (0,navigation.useRouter)();
    const Search = (0,material_.styled)("div")(({ theme })=>({
            "position": "relative",
            "borderRadius": theme.shape.borderRadius,
            "backgroundColor": (0,material_.alpha)(theme.palette.common.white, 0.15),
            "&:hover": {
                backgroundColor: (0,material_.alpha)(theme.palette.common.white, 0.25)
            },
            "marginRight": theme.spacing(2),
            "marginLeft": 0,
            "width": "100%",
            [theme.breakpoints.up("sm")]: {
                marginLeft: theme.spacing(3),
                width: "auto"
            }
        }));
    const SearchIconWrapper = (0,material_.styled)("div")(({ theme })=>({
            position: "absolute",
            padding: theme.spacing(0, 2),
            height: "100%",
            pointerEvents: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        }));
    const StyledInputBase = (0,material_.styled)(material_.InputBase)(({ theme })=>({
            "color": "inherit",
            "& .MuiInputBase-input": {
                padding: theme.spacing(1, 1, 1, 0),
                // vertical padding + font size from searchIcon
                paddingLeft: `calc(1em + ${theme.spacing(4)})`,
                transition: theme.transitions.create("width"),
                width: "100%",
                [theme.breakpoints.up("md")]: {
                    width: "20ch"
                }
            }
        }));
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Search, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(SearchIconWrapper, {
                children: /*#__PURE__*/ jsx_runtime.jsx(icons_material_.Search, {})
            }),
            /*#__PURE__*/ jsx_runtime.jsx(StyledInputBase, {
                placeholder: "Search…",
                inputProps: {
                    "aria-label": "search"
                },
                onKeyDown: ({ key, target })=>{
                    const { value } = target;
                    if (key === "Enter" && value) router.push(`/search?query=${value}`);
                }
            })
        ]
    });
};
/* harmony default export */ const main_search = (MainSearch);

;// CONCATENATED MODULE: ./ui/header.tsx











/**
 * Header component
 * @constructor
 */ const Header = ()=>{
    const pathname = (0,navigation.usePathname)();
    const links = [
        {
            path: "/blogs",
            name: "博客"
        },
        {
            path: "/contact",
            name: "联系"
        }
    ];
    const pathName = `/${pathname?.split("/")[1]}`;
    const [drawerState, setDrawerState] = (0,external_react_.useState)(false);
    const router = (0,navigation.useRouter)();
    const ScrollTop = ({ window, children })=>{
        const trigger = (0,material_.useScrollTrigger)({
            target: window ? window() : undefined,
            disableHysteresis: true,
            threshold: 100
        });
        const handleClick = (event)=>{
            const anchor = (event.target.ownerDocument || document).querySelector("#back-to-top-anchor");
            if (anchor) {
                anchor.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });
            }
        };
        return /*#__PURE__*/ jsx_runtime.jsx(material_.Zoom, {
            in: trigger,
            children: /*#__PURE__*/ jsx_runtime.jsx(material_.Box, {
                role: "presentation",
                sx: {
                    position: "fixed",
                    bottom: 16,
                    right: 16
                },
                onClick: handleClick,
                children: children
            })
        });
    };
    const toContact = ()=>{
        router.push("/contact");
    };
    const appBarStyle = {
        color: "white",
        backgroundColor: "#121212"
    };
    const getTouch = ()=>{
        if (pathName !== "/contact") {
            return /*#__PURE__*/ jsx_runtime.jsx(material_.Button, {
                variant: "outlined",
                size: "small",
                sx: {
                    borderRadius: "1rem",
                    fontSize: "12px"
                },
                onClick: ()=>toContact(),
                children: "取得联系"
            });
        }
        return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {});
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(material_.Box, {
        sx: {
            flexGrow: 1
        },
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(material_.AppBar, {
                position: "fixed",
                sx: appBarStyle,
                elevation: 0,
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(material_.Toolbar, {
                    sx: {
                        display: "flex",
                        flexDirection: {
                            xs: "row-reverse",
                            sm: "row"
                        },
                        justifyContent: "space-between"
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx(material_.Box, {
                            sx: {
                                display: {
                                    xs: "block",
                                    sm: "none"
                                }
                            },
                            children: getTouch()
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                            href: "/",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(material_.Box, {
                                sx: {
                                    display: "flex",
                                    alignItem: "center",
                                    mr: {
                                        xs: 0,
                                        sm: 2
                                    }
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx(material_.Box, {
                                        sx: {
                                            display: {
                                                xs: "flex",
                                                sm: "none"
                                            },
                                            alignItems: "center",
                                            mr: 1
                                        },
                                        children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                            width: 20,
                                            src: libs_images/* Images */.r.undrawDeveloperActivity,
                                            alt: "开发进行中"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx(material_.Box, {
                                        sx: {
                                            display: {
                                                xs: "none",
                                                sm: "block"
                                            }
                                        },
                                        children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                            width: 50,
                                            src: libs_images/* Images */.r.undrawDeveloperActivity,
                                            alt: "开发进行中"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx(material_.Box, {
                                        sx: {
                                            display: {
                                                xs: "flex",
                                                sm: "none"
                                            },
                                            alignItems: "center"
                                        },
                                        children: "Web Evolution"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx(material_.Box, {
                            sx: {
                                display: {
                                    xs: "none",
                                    sm: "block"
                                }
                            },
                            children: /*#__PURE__*/ jsx_runtime.jsx("nav", {
                                className: (header_module_default()).nav,
                                children: links.map((link, index)=>/*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                        href: link.path,
                                        children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                            className: (header_module_default()).link,
                                            style: {
                                                color: pathName === link.path ? (variables_module_default()).primaryColor : "white"
                                            },
                                            children: link.name
                                        })
                                    }, index))
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx(material_.Box, {
                            sx: {
                                display: {
                                    xs: "none",
                                    sm: "block"
                                }
                            },
                            children: /*#__PURE__*/ jsx_runtime.jsx(main_search, {})
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx(material_.Box, {
                            sx: {
                                flexGrow: 1,
                                display: {
                                    xs: "none",
                                    sm: "block"
                                }
                            }
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx(material_.IconButton, {
                            size: "large",
                            edge: "start",
                            color: "inherit",
                            "aria-label": "menu",
                            sx: {
                                display: {
                                    xs: "flex",
                                    sm: "none"
                                },
                                ml: 0
                            },
                            onClick: ()=>setDrawerState(true),
                            children: /*#__PURE__*/ jsx_runtime.jsx(icons_material_.Menu, {})
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx(material_.Toolbar, {
                id: "back-to-top-anchor"
            }),
            /*#__PURE__*/ jsx_runtime.jsx(material_.Drawer, {
                anchor: "top",
                open: drawerState,
                onClose: ()=>setDrawerState(false),
                children: /*#__PURE__*/ jsx_runtime.jsx(material_.Box, {
                    children: /*#__PURE__*/ jsx_runtime.jsx(material_.List, {
                        children: links.map((link, index)=>/*#__PURE__*/ jsx_runtime.jsx(material_.ListItem, {
                                button: true,
                                onClick: ()=>{
                                    router.push(link.path);
                                    setDrawerState(false);
                                },
                                children: /*#__PURE__*/ jsx_runtime.jsx(material_.ListItemText, {
                                    children: link.name
                                })
                            }, index))
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx(material_.Box, {
                sx: {
                    position: "fixed",
                    zIndex: 1
                },
                children: /*#__PURE__*/ jsx_runtime.jsx(ScrollTop, {
                    children: /*#__PURE__*/ jsx_runtime.jsx(material_.Fab, {
                        color: "primary",
                        size: "small",
                        "aria-label": "scroll back to top",
                        children: /*#__PURE__*/ jsx_runtime.jsx(icons_material_.KeyboardArrowUp, {
                            sx: {
                                color: "#fff"
                            }
                        })
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const header = (Header);


/***/ })

};
;