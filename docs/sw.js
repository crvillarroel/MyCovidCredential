if(!self.define){let e,i={};const s=(s,f)=>(s=new URL(s+".js",f).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(f,n)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let o={};const c=e=>s(e,r),a={module:{uri:r},exports:o,require:c};i[r]=Promise.all(f.map((e=>a[e]||c(e)))).then((e=>(n(...e),o)))}}define(["./workbox-873c5e43"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"apple-touch-icon.png",revision:"63a30637dfaf54fda8fef38245d8c90b"},{url:"assets/all_pages.6ed9974f.js",revision:"10efe3566aef88f37ab517d4d5d926f2"},{url:"assets/index.5ed2b50d.js",revision:"388623e091441b0fef696a91f1810428"},{url:"assets/index.8ea34325.css",revision:"4092cc04b6c6827899440055b2da1e3a"},{url:"assets/vendor.0cd60d42.js",revision:"117f718b081d0a68edc3c6fe0a8e75e8"},{url:"assets/workbox-window.prod.es5.a2fa118e.js",revision:"336c20b8c52e7fe192657bd4f83e6a6f"},{url:"favicon.ico",revision:"0eb6a3e58fb0f61f080bfd48d9be4a2d"},{url:"favicon.png",revision:"ec6eb3925f43d2f9eaacbfc6a7756934"},{url:"icon-152.png",revision:"63a30637dfaf54fda8fef38245d8c90b"},{url:"icon-192.png",revision:"c896e58149355fd82cf8c41053bfcbc8"},{url:"icon-512.png",revision:"9a89e31d4c14fffe9a66a88236df507e"},{url:"index.html",revision:"cf0a34ad11d3b98bef0e04cdc2fb2ae7"},{url:"manifest.webmanifest",revision:"3884a2a170cfa053c0ab80d0643a8886"}],{})}));
//# sourceMappingURL=sw.js.map
