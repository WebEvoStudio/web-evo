"use strict";
exports.id = 352;
exports.ids = [352];
exports.modules = {

/***/ 391352:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Markdown)
/* harmony export */ });
/**
 * Markdown unit
 */ class Markdown {
    /**
   * intercept
   * @description Intercept markdown text content
   * @param {string} source
   * @param {number} length
   * @return {string}
   */ static intercept(source1, length1) {
        const str1 = source1.replace(/(\*\*|__)(.*?)(\*\*|__)/g, "") // 全局匹配内粗体
        .replace(/!\[[\s\S]*?]\([\s\S]*?\)/g, "") // 全局匹配图片
        .replace(/\[[\s\S]*?]\([\s\S]*?\)/g, "") // 全局匹配连接
        .replace(/<\/?.+?\/?>/g, "") // 全局匹配内html标签
        .replace(/(\*)(.*?)(\*)/g, "") // 全局匹配内联代码块
        .replace(/`{1,2}[^`](.*?)`{1,2}/g, "") // 全局匹配内联代码块
        .replace(/```([\s\S]*?)```[\s]*/g, "") // 全局匹配代码块
        .replace(/~~(.*?)~~/g, "") // 全局匹配删除线
        .replace(/[\s]*[-*+]+(.*)/g, "") // 全局匹配无序列表
        .replace(/[\s]*[0-9]+\.(.*)/g, "") // 全局匹配有序列表
        .replace(/(#+)(.*)/g, "") // 全局匹配标题
        .replace(/(>+)(.*)/g, "") // 全局匹配摘要
        .replace(/\r\n/g, "") // 全局匹配换行
        .replace(/\n/g, "") // 全局匹配换行
        .replace(/\s/g, ""); // 全局匹配空字符;
        return str1.slice(0, length1);
    }
    /**
   * 关键字转markdown链接
   * @param {string} source
   * @param {string} host
   * @return {string}
   */ static keywordToLink(source, host) {
        const keywords = [
            "git",
            "vue",
            "Hook",
            "`Hook`",
            "swiper"
        ];
        let target = source;
        keywords.forEach((keyword)=>{
            target = target.replace(eval(`/ ${keyword} /g`), ` [${keyword}](${host}/search?query=${keyword}) `);
        });
        return target;
    }
    /**
   * 获取markdown文档的图片链接
   * @param {string} source
   * @return {RegExpMatchArray | null}
   */ static getImgUrl(source1) {
        const reg1 = /!\[(.*?)]\((.*?)\)/g;
        const result1 = source1.match(reg1);
        const urls1 = [];
        if (result1?.length) {
            urls1.push(...result1.map((item1)=>item1.replace(/!\[(.*?)]\((.*?)\)/g, "$2")));
        }
        return urls1;
    }
    /**
   * 获取markdown文档的目录
   * @param {string} source
   * @return {string[]}
   */ static getCatalog(source1) {
        const reg1 = /##+(.*?)\n/g;
        const result1 = source1.match(reg1);
        const catalogs1 = [];
        if (result1?.length) {
            catalogs1.push(...result1.map((item1)=>item1.replace(/#+(.*?)\n/g, "$1")));
        }
        return catalogs1;
    }
    /**
   * 获取markdown文档的二级标题 不包含三级标题
   * @param {string} source
   * @return {string[]}
   */ static getSecondTitle(source1) {
        const reg1 = /##+(.*?)\n/g;
        const result1 = source1.match(reg1);
        const catalogs1 = [];
        if (result1?.length) {
            catalogs1.push(...result1.map((item1)=>item1.replace(/#+(.*?)\n/g, "$1")));
        }
        return catalogs1;
    }
}


/***/ })

};
;