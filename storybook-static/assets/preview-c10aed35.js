import{_ as S,s as N}from"./iframe-5696d4e6.js";import"../sb-preview/runtime.js";var n="storybook/a11y",T=`${n}/result`,p=`${n}/request`,w=`${n}/running`,y=`${n}/error`,U=`${n}/manual`,a={RESULT:T,REQUEST:p,RUNNING:w,ERROR:y,MANUAL:U};const{addons:d}=__STORYBOOK_MODULE_PREVIEW_API__;var{document:f,window:g}=N,r=d.getChannel(),o=!1,l,A=async t=>{let{manual:e}=await m(t);e||await _(t)},_=async t=>{l=t;try{let e=await m(t);if(!o){o=!0,r.emit(a.RUNNING);let i=(await S(()=>import("./axe-e5fabdb0.js").then(O=>O.a),["./axe-e5fabdb0.js","./_commonjsHelpers-042e6b4d.js"],import.meta.url)).default,{element:s="#storybook-root",config:R,options:E={}}=e,u=f.querySelector(s);if(!u)return;i.reset(),R&&i.configure(R);let c=await i.run(u,E);l===t?r.emit(a.RESULT,c):(o=!1,_(l))}}catch(e){r.emit(a.ERROR,e)}finally{o=!1}},m=async t=>{let{parameters:e}=await g.__STORYBOOK_STORY_STORE__.loadStory({storyId:t})||{};return e.a11y||{config:{},options:{}}};r.on(a.REQUEST,A);r.on(a.MANUAL,_);
//# sourceMappingURL=preview-c10aed35.js.map