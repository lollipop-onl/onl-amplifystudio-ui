var y=Object.defineProperty;var i=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var c=(n,e,r)=>e in n?y(n,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):n[e]=r,d=(n,e)=>{for(var r in e||(e={}))b.call(e,r)&&c(n,r,e[r]);if(i)for(var r of i(e))_.call(e,r)&&c(n,r,e[r]);return n};import{o as u,e as v,s as O,$ as f,n as E,a as m,b as T,c as P,d as q,f as S,l as w,g as j,h as L,i as M,j as k,k as x,m as $,p as D,q as N,r as A,t as H,u as z}from"./vendor.934c9be4.js";const B=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))t(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&t(s)}).observe(document,{childList:!0,subtree:!0});function r(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerpolicy&&(a.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?a.credentials="include":o.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function t(o){if(o.ep)return;o.ep=!0;const a=r(o);fetch(o.href,a)}};B();const I={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}};var C=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",parameters:I}),F=`a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,main,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{border:0;font-size:100%;font:inherit;margin:0;padding:0;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section{display:block}[hidden]{display:none}body{line-height:1}menu,ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:after,blockquote:before,q:after,q:before{content:"";content:none}table{border-collapse:collapse;border-spacing:0}
`,J=`div p{line-clamp:3;text-decoration:underline}
`,K=Object.defineProperty,R=Object.getOwnPropertyDescriptor,p=(n,e,r,t)=>{for(var o=t>1?void 0:t?R(e,r):e,a=n.length-1,s;a>=0;a--)(s=n[a])&&(o=(t?s(e,r,o):s(o))||o);return t&&o&&K(e,r,o),o};let l=class extends O{render(){return f`<div><p>Hello World ${this.name}</p></div>`}};l.styles=[u(F),u(J)];p([v({type:String})],l.prototype,"name",2);l=p([E("onl-header")],l);var W={parameters:{storySource:{source:`import { html } from 'lit';
import { Story, Meta } from '@storybook/web-components/types-6-0'

import './onl-header';

export default {
  title: 'onl-header',
} as Meta;

const Template: Story<HTMLElementTagNameMap['onl-header']> = ({ name }) => html\`<onl-header .name=\${name}></onl-header>\`;

export const Primary = Template.bind({});

Primary.args = {
  name: 'simochee.',
};
`,locationsMap:{primary:{startLoc:{col:61,line:10},endLoc:{col:120,line:10},startBody:{col:61,line:10},endBody:{col:120,line:10}}}}},title:"onl-header"};const Z=({name:n})=>f`<onl-header .name=${n}></onl-header>`,g=Z.bind({});g.args={name:"simochee."};const G=["Primary"];var Q=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:W,Primary:g,__namedExportsOrder:G});const U=[L,M,k,x,$,D,N,A,H,z,C];U.forEach(n=>{Object.keys(n).forEach(e=>{const r=n[e];switch(e){case"args":case"argTypes":return w.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(r));case"decorators":return r.forEach(t=>S(t,!1));case"loaders":return r.forEach(t=>q(t,!1));case"parameters":return m(d({},r),!1);case"argTypesEnhancers":return r.forEach(t=>P(t));case"argsEnhancers":return r.forEach(t=>T(t));case"globals":case"globalTypes":{const t={};return t[e]=r,m(t,!1)}case"decorateStory":case"renderToDOM":return null;default:return console.log(e+" was not supported :( !")}})});function h(n){return{"/home/runner/work/onl-amplifystudio-ui/onl-amplifystudio-ui/src/components/onl-header.stories.ts":Q}[n]}Object.assign(h,{keys:()=>["/home/runner/work/onl-amplifystudio-ui/onl-amplifystudio-ui/src/components/onl-header.stories.ts"],resolve:n=>({"/home/runner/work/onl-amplifystudio-ui/onl-amplifystudio-ui/src/components/onl-header.stories.ts":"./src/components/onl-header.stories.ts"})[n]});j(h,{hot:!1},!1);
//# sourceMappingURL=iframe.cae717cc.js.map