if(!self.define){let e,i={};const s=(s,f)=>(s=new URL(s+".js",f).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(f,n)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let a={};const r=e=>s(e,c),o={module:{uri:c},exports:a,require:r};i[c]=Promise.all(f.map((e=>o[e]||r(e)))).then((e=>(n(...e),a)))}}define(["./workbox-873c5e43"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"apple-touch-icon.png",revision:"63a30637dfaf54fda8fef38245d8c90b"},{url:"assets/all_pages.a1bca2af.js",revision:"121cf13135575ec362dc5f7363e463da"},{url:"assets/index.8ea34325.css",revision:"4092cc04b6c6827899440055b2da1e3a"},{url:"assets/index.a37b1946.js",revision:"acd5ab30ba8014b156e0a46e012709f5"},{url:"assets/vendor.0cd60d42.js",revision:"117f718b081d0a68edc3c6fe0a8e75e8"},{url:"assets/workbox-window.prod.es5.a2fa118e.js",revision:"336c20b8c52e7fe192657bd4f83e6a6f"},{url:"favicon.ico",revision:"0eb6a3e58fb0f61f080bfd48d9be4a2d"},{url:"favicon.png",revision:"ec6eb3925f43d2f9eaacbfc6a7756934"},{url:"icon-152.png",revision:"63a30637dfaf54fda8fef38245d8c90b"},{url:"icon-192.png",revision:"c896e58149355fd82cf8c41053bfcbc8"},{url:"icon-512.png",revision:"9a89e31d4c14fffe9a66a88236df507e"},{url:"index.html",revision:"b40147759363b0ef32fd85293d1a35cf"},{url:"manifest.webmanifest",revision:"3884a2a170cfa053c0ab80d0643a8886"}],{})}));
//# sourceMappingURL=sw.js.map
