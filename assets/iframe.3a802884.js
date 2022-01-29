var y=Object.defineProperty;var l=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var c=(n,e,o)=>e in n?y(n,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[e]=o,d=(n,e)=>{for(var o in e||(e={}))b.call(e,o)&&c(n,o,e[o]);if(l)for(var o of l(e))v.call(e,o)&&c(n,o,e[o]);return n};import{s as _,o as m,e as O,a as E,$ as u,n as T,b as p,c as k,d as P,f as j,g as q,l as x,h as M,i as S,j as w,k as L,m as H,p as N,q as A,r as D,t as $,u as z,v as B}from"./vendor.e730b5b7.js";const C=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))t(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&t(s)}).observe(document,{childList:!0,subtree:!0});function o(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerpolicy&&(a.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?a.credentials="include":r.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function t(r){if(r.ep)return;r.ep=!0;const a=o(r);fetch(r.href,a)}};C();const I="1.0.0",V="",F=[{kind:"javascript-module",path:"src/components/onl-header.ts",declarations:[{kind:"class",description:"",name:"OnlHeader",members:[{kind:"field",name:"name",type:{text:"string"},description:"\u30E6\u30FC\u30B6\u30FC\u540D",attribute:"name"}],attributes:[{name:"name",type:{text:"string"},description:"\u30E6\u30FC\u30B6\u30FC\u540D",fieldName:"name"}],superclass:{name:"LitElement",package:"lit"},tagName:"onl-header",customElement:!0}],exports:[{kind:"js",name:"OnlHeader",declaration:{name:"OnlHeader",module:"src/components/onl-header.ts"}},{kind:"custom-element-definition",name:"onl-header",declaration:{name:"OnlHeader",module:"src/components/onl-header.ts"}}]}];var J={schemaVersion:I,readme:V,modules:F};_(J);const K={actions:{argTypesRegex:"^on[A-Z].*"},controls:{expanded:!0}};var R=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",parameters:K}),W=`a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,main,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{border:0;font-size:100%;font:inherit;margin:0;padding:0;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section{display:block}[hidden]{display:none}body{line-height:1}menu,ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:after,blockquote:before,q:after,q:before{content:"";content:none}table{border-collapse:collapse;border-spacing:0}
`,Z=`div p{line-clamp:3;text-decoration:underline}
`,G=Object.defineProperty,Q=Object.getOwnPropertyDescriptor,f=(n,e,o,t)=>{for(var r=t>1?void 0:t?Q(e,o):e,a=n.length-1,s;a>=0;a--)(s=n[a])&&(r=(t?s(e,o,r):s(r))||r);return t&&r&&G(e,o,r),r};let i=class extends E{render(){return u`<div><p>Hello World ${this.name}</p></div>`}};i.styles=[m(W),m(Z)];f([O({type:String})],i.prototype,"name",2);i=f([T("onl-header")],i);var U={parameters:{storySource:{source:`import { html } from 'lit';
import { Story, Meta } from '@storybook/web-components/types-6-0'

import './onl-header';

export default {
  title: 'onl-header',
  component: 'onl-header',
} as Meta;

const Template: Story<HTMLElementTagNameMap['onl-header']> = ({ name }) => html\`<onl-header .name=\${name}></onl-header>\`;

export const Primary = Template.bind({});

Primary.args = {
  name: 'simochee.',
};
`,locationsMap:{primary:{startLoc:{col:61,line:11},endLoc:{col:120,line:11},startBody:{col:61,line:11},endBody:{col:120,line:11}}}}},title:"onl-header",component:"onl-header"};const X=({name:n})=>u`<onl-header .name=${n}></onl-header>`,h=X.bind({});h.args={name:"simochee."};const Y=["Primary"];var ee=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:U,Primary:h,__namedExportsOrder:Y});const oe=[S,w,L,H,N,A,D,$,z,B,R];oe.forEach(n=>{Object.keys(n).forEach(e=>{const o=n[e];switch(e){case"args":case"argTypes":return x.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(o));case"decorators":return o.forEach(t=>q(t,!1));case"loaders":return o.forEach(t=>j(t,!1));case"parameters":return p(d({},o),!1);case"argTypesEnhancers":return o.forEach(t=>P(t));case"argsEnhancers":return o.forEach(t=>k(t));case"globals":case"globalTypes":{const t={};return t[e]=o,p(t,!1)}case"decorateStory":case"renderToDOM":return null;default:return console.log(e+" was not supported :( !")}})});function g(n){return{"/home/runner/work/onl-amplifystudio-ui/onl-amplifystudio-ui/src/components/onl-header.stories.ts":ee}[n]}Object.assign(g,{keys:()=>["/home/runner/work/onl-amplifystudio-ui/onl-amplifystudio-ui/src/components/onl-header.stories.ts"],resolve:n=>({"/home/runner/work/onl-amplifystudio-ui/onl-amplifystudio-ui/src/components/onl-header.stories.ts":"./src/components/onl-header.stories.ts"})[n]});M(g,{hot:!1},!1);
//# sourceMappingURL=iframe.3a802884.js.map
