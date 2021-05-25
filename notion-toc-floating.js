// ==UserScript==
// @name         Notion TOC Floating
// @namespace    https://github.com/gefangshuai
// @version      0.1.1
// @description  mark your toc floating! 默认取第一个table of contents，请知晓。
// @author       Timothy.Ge
// @include      *://*.notion.so/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @note         21-05-25 0.1.1 解决了更换文章失效的问题
// @note         21-05-25 0.1.0 第一个测试版本
// ==/UserScript==

(function() {
    (function(history) {
        'use strict';
        // Your code here...
        var doSomething = function() {
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
            // ... whatever else you want to do
            // maybe call onhashchange e.handler
            return pushState.apply(history, arguments);
        };
    })(window.history);
})();