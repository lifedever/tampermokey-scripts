// ==UserScript==
// @name         Notion TOC Floating
// @namespace    https://github.com/gefangshuai
// @version      0.1
// @description  mark your toc floating! 默认取第一个table of contents，请知晓。
// @author       Timothy.Ge
// @include      *://*.notion.so/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @note         21-05-25 0.1.0 第一个测试版本
// ==/UserScript==

(function() {
    'use strict';
    // Your code here...
    document.querySelector('.notion-scroller').addEventListener('scroll', function(e) {
        var tableContents = document.querySelector('.notion-table_of_contents-block');
        if (tableContents) {
            var rect = tableContents.getBoundingClientRect();
            var dom = tableContents.firstChild
            if (dom) {
                console.log(rect.top);
                if (rect.top <= 60) {
                    dom.style.position = 'fixed';
                    dom.style.top = '60px';
                }else{
                    dom.style.position = null;
                    dom.style.top = null;
                }
            }
        }
    });
})();