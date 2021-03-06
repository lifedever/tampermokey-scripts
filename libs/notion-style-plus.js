// ==UserScript==
// @name         Notion Style Plus | 重定义Notion样式：Quota
// @namespace    https://github.com/gefangshuai/tampermokey-scripts
// @version      1.0.3
// @author       Timothy.Ge
// @include      *://*.notion.*/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        GM_addStyle
// @note         21-06-15 1.0.2 fix bugs
// @note         21-06-15 1.0.1 修改Quote样式
// @note         21-06-15 1.0.0 修改Quote样式
// ==/UserScript==

(function() {
    'use strict';

    GM_addStyle(`
    .notion-quote-block div[contenteditable] {
        border-left: 4px solid #ddd !important;
    }
    .notion-quote-block > div {
        font-size: 1em !important;
    }
`);
})()
