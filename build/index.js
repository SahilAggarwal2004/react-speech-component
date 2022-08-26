(()=>{"use strict";var e={n:t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},d:(t,n)=>{for(var l in n)e.o(n,l)&&!e.o(t,l)&&Object.defineProperty(t,l,{enumerable:!0,get:n[l]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{default:()=>o});const n=require("react");var l=e.n(n);const o=function({id:e=null,text:t,style:o={},startBtn:r=l().createElement("button",null,"Start Speech"),stopBtn:s=l().createElement("button",null,"Stop Speech"),pitch:c=5,rate:u=5,volume:a=10}){const[i,p]=(0,n.useState)(r),[d,S]=(0,n.useState)(null);function y(){S(e),p(s);const n=new SpeechSynthesisUtterance(null==t?void 0:t.replace(/\s/g," "));n.pitch=c/5,n.rate=u/5,n.volume=a/10,speechSynthesis.speak(n),n.onend=()=>{S(null),p(r)}}return(0,n.useEffect)((()=>{speechSynthesis.cancel()}),[]),l().createElement("span",{role:"button",style:o,onClick:function(){return speechSynthesis.speaking?(speechSynthesis.cancel(),d!==e?y():(S(null),void p(r))):y()}},i)};module.exports=t})();