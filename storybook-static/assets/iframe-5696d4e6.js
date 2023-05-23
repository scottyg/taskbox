import"../sb-preview/runtime.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const _ of e.addedNodes)_.tagName==="LINK"&&_.rel==="modulepreload"&&l(_)}).observe(document,{childList:!0,subtree:!0});function s(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function l(t){if(t.ep)return;t.ep=!0;const e=s(t);fetch(t.href,e)}})();const d="modulepreload",f=function(r,n){return new URL(r,n).href},u={},o=function(n,s,l){if(!s||s.length===0)return n();const t=document.getElementsByTagName("link");return Promise.all(s.map(e=>{if(e=f(e,l),e in u)return;u[e]=!0;const _=e.endsWith(".css"),E=_?'[rel="stylesheet"]':"";if(!!l)for(let c=t.length-1;c>=0;c--){const a=t[c];if(a.href===e&&(!_||a.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${E}`))return;const i=document.createElement("link");if(i.rel=_?"stylesheet":d,_||(i.as="script",i.crossOrigin=""),i.href=e,document.head.appendChild(i),_)return new Promise((c,a)=>{i.addEventListener("load",c),i.addEventListener("error",()=>a(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>n())};var p=(()=>{let r;return typeof window<"u"?r=window:typeof globalThis<"u"?r=globalThis:typeof global<"u"?r=global:typeof self<"u"?r=self:r={},r})();const{createChannel:R}=__STORYBOOK_MODULE_CHANNEL_POSTMESSAGE__,{createChannel:T}=__STORYBOOK_MODULE_CHANNEL_WEBSOCKET__,{addons:O}=__STORYBOOK_MODULE_PREVIEW_API__,m=R({page:"preview"});O.setChannel(m);window.__STORYBOOK_ADDONS_CHANNEL__=m;if(p.CONFIG_TYPE==="DEVELOPMENT"){const r=T({});O.setServerChannel(r),window.__STORYBOOK_SERVER_CHANNEL__=r}const P={"./src/components/PureInboxScreen.stories.js":async()=>o(()=>import("./PureInboxScreen.stories-01e1db2b.js"),["./PureInboxScreen.stories-01e1db2b.js","./PureTaskList-739ba287.js","./Task-0342069a.js","./vue.esm-bundler-de44749a.js","./pinia-29e1fc9d.js","./index-a70ec6f0.js","./_commonjsHelpers-042e6b4d.js","./index-356e4a49.js"],import.meta.url),"./src/components/PureTaskList.stories.js":async()=>o(()=>import("./PureTaskList.stories-965dcdd6.js"),["./PureTaskList.stories-965dcdd6.js","./PureTaskList-739ba287.js","./Task-0342069a.js","./vue.esm-bundler-de44749a.js","./Task.stories-634d3da3.js","./chunk-OPEUWD42-a3b45fd8.js"],import.meta.url),"./src/components/Task.stories.js":async()=>o(()=>import("./Task.stories-634d3da3.js"),["./Task.stories-634d3da3.js","./Task-0342069a.js","./vue.esm-bundler-de44749a.js","./chunk-OPEUWD42-a3b45fd8.js"],import.meta.url)};async function w(r){return P[r]()}const{composeConfigs:S,PreviewWeb:L,ClientApi:h}=__STORYBOOK_MODULE_PREVIEW_API__,I=async()=>{const r=await Promise.all([o(()=>import("./config-d343cd66.js"),["./config-d343cd66.js","./chunk-2GDW2BFM-6b75f9ea.js","./vue.esm-bundler-de44749a.js","./index-8483777b.js","./_commonjsHelpers-042e6b4d.js"],import.meta.url),o(()=>import("./preview-7c62a127.js"),["./preview-7c62a127.js","./index-d37d4223.js"],import.meta.url),o(()=>import("./preview-6e9578bf.js"),[],import.meta.url),o(()=>import("./preview-2e3527f6.js"),["./preview-2e3527f6.js","./chunk-OPEUWD42-a3b45fd8.js"],import.meta.url),o(()=>import("./preview-606ff101.js"),["./preview-606ff101.js","./index-356e4a49.js"],import.meta.url),o(()=>import("./preview-32105773.js"),[],import.meta.url),o(()=>import("./preview-48c1a2ca.js"),["./preview-48c1a2ca.js","./index-356e4a49.js"],import.meta.url),o(()=>import("./preview-51067f23.js"),[],import.meta.url),o(()=>import("./preview-74a56ed5.js"),["./preview-74a56ed5.js","./index-a70ec6f0.js","./_commonjsHelpers-042e6b4d.js"],import.meta.url),o(()=>import("./preview-c10aed35.js"),[],import.meta.url),o(()=>import("./preview-70936e6d.js"),["./preview-70936e6d.js","./chunk-2GDW2BFM-6b75f9ea.js","./vue.esm-bundler-de44749a.js","./pinia-29e1fc9d.js","./preview-c71610d0.css"],import.meta.url)]);return S(r)};window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new L;window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;window.__STORYBOOK_CLIENT_API__=window.__STORYBOOK_CLIENT_API__||new h({storyStore:window.__STORYBOOK_PREVIEW__.storyStore});window.__STORYBOOK_PREVIEW__.initialize({importFn:w,getProjectAnnotations:I});export{o as _,p as s};
//# sourceMappingURL=iframe-5696d4e6.js.map
