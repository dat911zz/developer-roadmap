import{p as s}from"./hooks.module.a8b17ad8.js";function u(t,n){s(()=>{const e=o=>{!t?.current?.contains(o.target)&&n()};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),()=>{document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}},[t])}export{u};
