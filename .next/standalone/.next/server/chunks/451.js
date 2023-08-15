"use strict";
exports.id = 451;
exports.ids = [451];
exports.modules = {

/***/ 996451:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ home_services)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(556786);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.13.4_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.9_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/node/index.js
var node = __webpack_require__(159035);
// EXTERNAL MODULE: ./node_modules/.pnpm/next@13.4.7_@babel+core@7.22.5_react-dom@18.2.0_react@18.2.0_sass@1.63.3/node_modules/next/image.js
var next_image = __webpack_require__(635560);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./core/libs/images.ts
var libs_images = __webpack_require__(852297);
;// CONCATENATED MODULE: ./core/libs/services.ts

const services = [
    {
        title: "设计",
        image: libs_images/* Images */.r.undrawDesignComponents,
        description: "我们可以帮助您涵盖软件开发的各个方面，包括UX / UI设计，自定义Web和移动开发，QA服务，业务分析和内容编写。在我们的技术撰稿人的帮助下，您将准备好所有文档，以便将来顺利进行产品维护。"
    },
    {
        title: "软件工程",
        image: libs_images/* Images */.r.undrawSoftwareEngineer,
        description: "为了保持技术曲线的领先地位，我们涵盖了前端、后端和全栈开发。获得先进且易于维护的产品，提供高响应能力和流畅的用户旅程。"
    },
    {
        title: "质量保证",
        image: libs_images/* Images */.r.undrawQaEngineers,
        description: "在您的项目中享受经过全面规划和完善的质量保证工作流程，包括测试自动化管道。使用边缘JavaScript和TypeScript库，我们确保您的产品具有最佳的测试覆盖率。"
    },
    {
        title: "开发运营",
        image: libs_images/* Images */.r.undrawDevProductivity,
        description: "优化您的项目基础架构，使其更高效、更经济，同时避免安全故障。我们将负责构建允许可伸缩性、处理流量负载并像发条一样运行的环境。"
    },
    {
        title: "支持与维护",
        image: libs_images/* Images */.r.undrawMaintenance,
        description: "借助简化和优化生态系统的全面支持，您将顺利地从被动式参与模式转变为先发制人的参与模式，以提供卓越的客户体验。"
    },
    {
        title: "产品所有权和项目管理",
        image: libs_images/* Images */.r.undrawAnalytics,
        description: "我们将与一流的产品负责人一起完成您的团队，他们将优先考虑工程师的积压工作，并通过创建用户故事来满足客户满意度。在项目经理的帮助下，我们将保持项目要求清晰和最新，以便您获得所需的解决方案。"
    }
];

// EXTERNAL MODULE: ./node_modules/.pnpm/next@13.4.7_@babel+core@7.22.5_react-dom@18.2.0_react@18.2.0_sass@1.63.3/node_modules/next/navigation.js
var navigation = __webpack_require__(443733);
;// CONCATENATED MODULE: ./ui/components/ripple-box.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 


const RippleBox = ({ children, ripple })=>{
    if (ripple) {
        return /*#__PURE__*/ jsx_runtime_.jsx(node.Box, {
            component: node.Button,
            sx: {
                width: "100%",
                padding: 0
            },
            children: children
        });
    } else {
        return /*#__PURE__*/ jsx_runtime_.jsx(node.Box, {
            children: children
        });
    }
};
/* harmony default export */ const ripple_box = (RippleBox);

;// CONCATENATED MODULE: ./ui/home-services.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 






const HomeServices = ({ isDesc } = {
    isDesc: false
})=>{
    const router = (0,navigation.useRouter)();
    const toServices = ()=>{
        !isDesc && router.push("/services");
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(node.Grid, {
        container: true,
        spacing: 2,
        children: services.map((service, index)=>/*#__PURE__*/ jsx_runtime_.jsx(node.Grid, {
                item: true,
                xs: 12,
                md: 6,
                onClick: ()=>toServices(),
                children: /*#__PURE__*/ jsx_runtime_.jsx(ripple_box, {
                    ripple: !isDesc,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(node.Card, {
                        sx: {
                            width: "100%"
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(node.CardContent, {
                            sx: {
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center"
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(ripple_box, {
                                    ripple: isDesc,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        src: service.image,
                                        alt: service.title,
                                        height: 80
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(node.Typography, {
                                    variant: "h6",
                                    sx: {
                                        mt: 2
                                    },
                                    children: service.title
                                }),
                                isDesc && /*#__PURE__*/ jsx_runtime_.jsx(node.Typography, {
                                    variant: "body2",
                                    sx: {
                                        mt: 2
                                    },
                                    children: service.description
                                })
                            ]
                        })
                    })
                })
            }, index))
    });
};
/* harmony default export */ const home_services = (HomeServices);


/***/ })

};
;