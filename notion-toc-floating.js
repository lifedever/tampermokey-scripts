// ==UserScript==
// @name         Notion TOC Floating | Notion 悬浮目录
// @namespace    https://github.com/gefangshuai/tampermokey-scripts
// @version      0.1.3
// @description  mark your toc floating! 默认取第一个table of contents，请知晓。
// @author       Timothy.Ge
// @include      *://*.notion.so/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        GM_addStyle
// @note         21-06-02 0.1.3 新增了对h1、h2、h3的悬浮支持
// @note         21-05-25 0.1.2 更新说明
// @note         21-05-25 0.1.1 解决了更换文章失效的问题
// @note         21-05-25 0.1.0 第一个测试版本
// ==/UserScript==
GM_addStyle ( `
    div.notion-page-content .notion-header-block, div.notion-page-content .notion-sub_header-block {
        position: sticky !important;
        top: 0;
        background: #fff;
    }
` );
(function() {
    (function(history) {
        'use strict';
        // Your code here...
        var doSomething = function() {
            // float TOC
            var scroller = document.querySelector('div.notion-frame .notion-scroller');
            var scrollWatchFun = function(e) {
                var tableContents = document.querySelector('.notion-table_of_contents-block');
                if (tableContents) {
                    var rect = tableContents.getBoundingClientRect();
                    var dom = tableContents.firstChild;
                    if (dom) {
                        if (rect.top <= 60) {
                            dom.style.position = 'fixed';
                            dom.style.top = '60px';
                        } else {
                            dom.style.position = null;
                            dom.style.top = null;
                        }
                    }
                }
            };
            if (scroller) {
                scroller.removeEventListener('scroll', scrollWatchFun);
                scroller.addEventListener('scroll', scrollWatchFun);
            }
        };
        doSomething();
        var pushState = history.pushState;
        history.pushState = function(state) {
            if (typeof history.onpushstate == 'function') {
                history.onpushstate({ state: state });
            }
            setTimeout(function() {
                doSomething();
            }, 1000);
            return pushState.apply(history, arguments);
        };
    })(window.history);
})();
