var O=Object.defineProperty;var m=Object.getOwnPropertySymbols;var C=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;var v=(t,e,o)=>e in t?O(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,f=(t,e)=>{for(var o in e||(e={}))C.call(e,o)&&v(t,o,e[o]);if(m)for(var o of m(e))N.call(e,o)&&v(t,o,e[o]);return t};import{s as M,o as s,e as b,a as g,$ as l,n as h,t as P,i as y,S as A,P as S,A as L,b as w,c as $,d as j,f as z,g as B,l as D,h as U,j as I,k as R,m as H,p as V,q,r as G,u as J,v as K,w as W,x as Z}from"./vendor.6eac1f82.js";const Q=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerpolicy&&(r.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?r.credentials="include":n.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(n){if(n.ep)return;n.ep=!0;const r=o(n);fetch(n.href,r)}};Q();const X="1.0.0",Y="",ee=[{kind:"javascript-module",path:"src/components/onl-navbar/index.ts",declarations:[{kind:"class",description:"",name:"OnlNavbar",members:[{kind:"field",name:"avatar",type:{text:"string | null"},default:"null",attribute:"avatar"}],attributes:[{name:"avatar",type:{text:"string | null"},default:"null",fieldName:"avatar"}],superclass:{name:"LitElement",package:"lit"},tagName:"onl-navbar",customElement:!0}],exports:[{kind:"js",name:"OnlNavbar",declaration:{name:"OnlNavbar",module:"src/components/onl-navbar/index.ts"}},{kind:"custom-element-definition",name:"onl-navbar",declaration:{name:"OnlNavbar",module:"src/components/onl-navbar/index.ts"}}]},{kind:"javascript-module",path:"src/components/onl-topview/index.ts",declarations:[{kind:"class",description:"",name:"OnlTopview",members:[{kind:"field",name:"topviews",type:{text:"TopViewItem[]"},default:"[]",description:"\u30C8\u30C3\u30D7\u30D3\u30E5\u30FC\u306E\u753B\u50CF\u4E00\u89A7",attribute:"topviews"},{kind:"field",name:"swiper",type:{text:"Swiper | undefined"}},{kind:"field",name:"swiperContainer",type:{text:"HTMLDivElement | undefined"}},{kind:"field",name:"swiperPagination",type:{text:"HTMLDivElement | undefined"}}],attributes:[{name:"topviews",type:{text:"TopViewItem[]"},default:"[]",description:"\u30C8\u30C3\u30D7\u30D3\u30E5\u30FC\u306E\u753B\u50CF\u4E00\u89A7",fieldName:"topviews"}],superclass:{name:"LitElement",package:"lit"},tagName:"onl-topview",customElement:!0}],exports:[{kind:"js",name:"OnlTopview",declaration:{name:"OnlTopview",module:"src/components/onl-topview/index.ts"}},{kind:"custom-element-definition",name:"onl-topview",declaration:{name:"OnlTopview",module:"src/components/onl-topview/index.ts"}}]}];var te={schemaVersion:X,readme:Y,modules:ee};M(te);const ne={actions:{argTypesRegex:"^on[A-Z].*"},controls:{expanded:!0}};var oe=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",parameters:ne});const u=t=>t;var ae="/assets/logo.87cfc0e4.svg",x=`/*! modern-normalize v1.1.0 | MIT License | https://github.com/sindresorhus/modern-normalize */*,:after,:before{box-sizing:border-box}html{-webkit-text-size-adjust:100%;line-height:1.15;-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,Helvetica,Arial,Apple Color Emoji,Segoe UI Emoji;margin:0}hr{color:inherit;height:0}abbr[title]{-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}::-moz-focus-inner{border-style:none;padding:0}:-moz-focusring{outline:1px dotted ButtonText}:-moz-ui-invalid{box-shadow:none}legend{padding:0}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}ol,ul{list-style-type:none;margin:0;padding:0}button{background:transparent;border:0;color:inherit}button:not(:disabled){cursor:pointer}:host{font-family:var(--font-primary);font-weight:var(--font-regular)}
`,re=`.onlNavbar{align-items:center;display:flex;padding:24px 32px}.onlNavbar>.logo{transition:opacity var(--animation-medium) ease}.onlNavbar>.logo:hover{opacity:.4}.onlNavbar>.menu{align-items:center;display:flex;margin-left:20px}.onlNavbar>.menu>.item:not(:last-child){margin-right:40px}.onlNavbar>.menu>.item>.link{color:var(--color-text-body);font-family:var(--font-alphabet);font-size:var(--font-body);text-decoration:none;transition:opacity var(--animation-medium) ease}.onlNavbar>.menu>.item>.link:disabled{text-decoration:underline}.onlNavbar>.menu>.item>.link:not(:disabled):hover{opacity:.4}.onlNavbar>.avatar{border-radius:50%;display:block;height:45px;margin-left:auto;-o-object-fit:cover;object-fit:cover;width:45px}
`,ie=Object.defineProperty,se=Object.getOwnPropertyDescriptor,_=(t,e,o,a)=>{for(var n=a>1?void 0:a?se(e,o):e,r=t.length-1,i;r>=0;r--)(i=t[r])&&(n=(a?i(e,o,n):i(n))||n);return a&&n&&ie(e,o,n),n};const le=[{text:"Welcome",path:u("/")},{text:"Gallery",path:u("/gallery")},{text:"ToDo list",path:u("/todos")},{text:"Contact",path:u("/contact")}];let d=class extends g{constructor(){super(...arguments);this.avatar=null}render(){return l`
      <header class="onlNavbar">
        <button class="logo" @click=${()=>window.goto(u("/"))}>
          <img src=${ae} width="69" height="45" />
        </button>
        <ul class="menu">
          ${le.map(({text:t,path:e})=>l`
              <li class="item">
                <button
                  class="link"
                  ?disabled=${window.currentPath===e}
                  @click=${()=>window.goto(e)}
                >
                  ${t}
                </button>
              </li>
            `)}
        </ul>
        ${this.avatar?l`<img
              class="avatar"
              .src=${this.avatar}
              width="45"
              height="45"
            />`:null}
      </header>
    `}};d.styles=[s(x),s(re)];_([b({type:String})],d.prototype,"avatar",2);d=_([h("onl-navbar")],d);var pe={parameters:{storySource:{source:`import { html } from 'lit';
import { Story, Meta } from '@storybook/web-components/types-6-0'

import '.';

export default {
  title: 'onl-navbar',
  argTypes: {
    avatar: {
      name: '\u30A2\u30D0\u30BF\u30FCURL',
      description: '\u30E6\u30FC\u30B6\u30FC\u306E\u30A2\u30D0\u30BF\u30FC\u753B\u50CF\u306EURL',
      type: 'string',
    }
  }
} as Meta<HTMLElementTagNameMap['onl-navbar']>;

const Template: Story<HTMLElementTagNameMap['onl-navbar']> = ({ avatar }) => html\`<onl-navbar .avatar=\${avatar}></onl-navbar>\`;

export const Primary = Template.bind({});

Primary.args = {
  avatar: 'https://picsum.photos/seed/useravatar/300/300',
}
`,locationsMap:{primary:{startLoc:{col:61,line:17},endLoc:{col:126,line:17},startBody:{col:61,line:17},endBody:{col:126,line:17}}}}},title:"onl-navbar",argTypes:{avatar:{name:"\u30A2\u30D0\u30BF\u30FCURL",description:"\u30E6\u30FC\u30B6\u30FC\u306E\u30A2\u30D0\u30BF\u30FC\u753B\u50CF\u306EURL",type:"string"}}};const ue=({avatar:t})=>l`<onl-navbar .avatar=${t}></onl-navbar>`,E=ue.bind({});E.args={avatar:"https://picsum.photos/seed/useravatar/300/300"};const ce=["Primary"];var de=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:pe,Primary:E,__namedExportsOrder:ce}),T="",me="",ve="",fe=`.swiperContainer{aspect-ratio:1440/858;overflow:hidden;position:relative;width:100%}.swiperContainer img{display:block;height:100%;-o-object-fit:cover;object-fit:cover;width:100%}
`,be=Object.defineProperty,ge=Object.getOwnPropertyDescriptor,c=(t,e,o,a)=>{for(var n=a>1?void 0:a?ge(e,o):e,r=t.length-1,i;r>=0;r--)(i=t[r])&&(n=(a?i(e,o,n):i(n))||n);return a&&n&&be(e,o,n),n};console.log(T);let p=class extends g{constructor(){super(...arguments);this.topviews=[]}disconnectedCallback(){super.disconnectedCallback()}firstUpdated(){!this.swiperContainer||(this.swiper=new A(this.swiperContainer,{modules:[S,L],direction:"horizontal",loop:!0,autoplay:{delay:3e3},pagination:{el:this.swiperPagination,bulletElement:"button",clickable:!0}}))}render(){return l`
      <div class="swiperContainer">
        <div class="swiper-wrapper">
          ${this.topviews.map(({image:t,alt:e=""})=>l`
              <div class="swiper-slide">
                <img src=${t} alt=${e} />
              </div>
            `)}
        </div>
        <div class="swiper-pagination"></div>
      </div>
    `}};p.styles=[s(x),s(T),s(me),s(ve),s(fe)];c([b({type:Array})],p.prototype,"topviews",2);c([P()],p.prototype,"swiper",2);c([y(".swiperContainer")],p.prototype,"swiperContainer",2);c([y(".swiper-pagination")],p.prototype,"swiperPagination",2);p=c([h("onl-topview")],p);var he={parameters:{storySource:{source:`import { html } from 'lit';
import { Story, Meta } from '@storybook/web-components/types-6-0';

import '.';

export default { title: 'onl-topview' } as Meta<
  HTMLElementTagNameMap['onl-topview']
>;

const Template: Story<HTMLElementTagNameMap['onl-topview']> = ({ topviews }) =>
  html\`<onl-topview .topviews=\${topviews}></onl-topview>\`;

export const Primary = Template.bind({});

Primary.args = {
  topviews: [
    {
      image: 'https://picsum.photos/seed/test01/1480/900',
      alt: '\u98A8\u666F\u306E\u5199\u771F\u2460',
    },
    {
      image: 'https://picsum.photos/seed/test02/1480/900',
      alt: '\u98A8\u666F\u306E\u5199\u771F\u2461',
    },
    {
      image: 'https://picsum.photos/seed/test03/1480/900',
      alt: '\u98A8\u666F\u306E\u5199\u771F\u2462',
    },
    {
      image: 'https://picsum.photos/seed/test04/1480/900',
      alt: '\u98A8\u666F\u306E\u5199\u771F\u2463',
    },
    {
      image: 'https://picsum.photos/seed/test05/1480/900',
      alt: '\u98A8\u666F\u306E\u5199\u771F\u2464',
    },
  ],
};
`,locationsMap:{primary:{startLoc:{col:62,line:10},endLoc:{col:57,line:11},startBody:{col:62,line:10},endBody:{col:57,line:11}}}}},title:"onl-topview"};const ye=({topviews:t})=>l`<onl-topview .topviews=${t}></onl-topview>`,k=ye.bind({});k.args={topviews:[{image:"https://picsum.photos/seed/test01/1480/900",alt:"\u98A8\u666F\u306E\u5199\u771F\u2460"},{image:"https://picsum.photos/seed/test02/1480/900",alt:"\u98A8\u666F\u306E\u5199\u771F\u2461"},{image:"https://picsum.photos/seed/test03/1480/900",alt:"\u98A8\u666F\u306E\u5199\u771F\u2462"},{image:"https://picsum.photos/seed/test04/1480/900",alt:"\u98A8\u666F\u306E\u5199\u771F\u2463"},{image:"https://picsum.photos/seed/test05/1480/900",alt:"\u98A8\u666F\u306E\u5199\u771F\u2464"}]};const we=["Primary"];var xe=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:he,Primary:k,__namedExportsOrder:we});const _e=[I,R,H,V,q,G,J,K,W,Z,oe];_e.forEach(t=>{Object.keys(t).forEach(e=>{const o=t[e];switch(e){case"args":case"argTypes":return D.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(o));case"decorators":return o.forEach(a=>B(a,!1));case"loaders":return o.forEach(a=>z(a,!1));case"parameters":return w(f({},o),!1);case"argTypesEnhancers":return o.forEach(a=>j(a));case"argsEnhancers":return o.forEach(a=>$(a));case"globals":case"globalTypes":{const a={};return a[e]=o,w(a,!1)}case"decorateStory":case"renderToDOM":return null;default:return console.log(e+" was not supported :( !")}})});function F(t){return{"/home/runner/work/onl-amplifystudio-ui/onl-amplifystudio-ui/src/components/onl-navbar/index.stories.ts":de,"/home/runner/work/onl-amplifystudio-ui/onl-amplifystudio-ui/src/components/onl-topview/index.stories.ts":xe}[t]}Object.assign(F,{keys:()=>["/home/runner/work/onl-amplifystudio-ui/onl-amplifystudio-ui/src/components/onl-navbar/index.stories.ts","/home/runner/work/onl-amplifystudio-ui/onl-amplifystudio-ui/src/components/onl-topview/index.stories.ts"],resolve:t=>({"/home/runner/work/onl-amplifystudio-ui/onl-amplifystudio-ui/src/components/onl-navbar/index.stories.ts":"./src/components/onl-navbar/index.stories.ts","/home/runner/work/onl-amplifystudio-ui/onl-amplifystudio-ui/src/components/onl-topview/index.stories.ts":"./src/components/onl-topview/index.stories.ts"})[t]});U(F,{hot:!1},!1);
//# sourceMappingURL=iframe.7447be65.js.map
