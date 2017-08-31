!function(n){function e(r){if(t[r])return t[r].exports;var u=t[r]={i:r,l:!1,exports:{}};return n[r].call(u.exports,u,u.exports,e),u.l=!0,u.exports}var t={};e.m=n,e.c=t,e.i=function(n){return n},e.d=function(n,t,r){e.o(n,t)||Object.defineProperty(n,t,{configurable:!1,enumerable:!0,get:r})},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},e.p="",e(e.s=3)}([function(n,e,t){"use strict";App({__pages:{},__run:function(n){this.__pages[n]()},onLaunch:function(){}})},function(n,e,t){"use strict";__page(1)({pageName:"detail",onReady:function(){}})},function(n,e,t){"use strict";__page(0)({pageName:"index",onReady:function(){}})},function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(0),u=(t.n(r),t(2)),o=(t.n(u),t(1));t.n(o)}]);function __page(routeIndex) {
    return function(e) {
        getApp().__pages[routeIndex] = function() {
            Page(e)
        }
    }
};
