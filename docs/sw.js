if(!self.define){let e,f={};const i=(i,s)=>(i=new URL(i+".js",s).href,f[i]||new Promise((f=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=f,document.head.appendChild(e)}else e=i,importScripts(i),f()})).then((()=>{let e=f[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(s,c)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(f[n])return;let r={};const o=e=>i(e,n),d={module:{uri:n},exports:r,require:o};f[n]=Promise.all(s.map((e=>d[e]||o(e)))).then((e=>(c(...e),r)))}}define(["./workbox-873c5e43"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"apple-touch-icon.png",revision:"63a30637dfaf54fda8fef38245d8c90b"},{url:"assets/all_pages.bcbe6c95.js",revision:"fad03f391241df4368efb34f8809d8ab"},{url:"assets/index.85b8ad63.css",revision:"07d46f3c5ad433af2c707cd6024c2365"},{url:"assets/index.de00dcfd.js",revision:"b3d80bccff1c60ff88c26bcbb94c29ff"},{url:"assets/vendor.f0563d7f.js",revision:"5c2174558973865c534c892b3a881f0d"},{url:"assets/workbox-window.prod.es5.a2fa118e.js",revision:"336c20b8c52e7fe192657bd4f83e6a6f"},{url:"favicon.ico",revision:"0eb6a3e58fb0f61f080bfd48d9be4a2d"},{url:"favicon.png",revision:"ec6eb3925f43d2f9eaacbfc6a7756934"},{url:"icon-152.png",revision:"63a30637dfaf54fda8fef38245d8c90b"},{url:"icon-192.png",revision:"c896e58149355fd82cf8c41053bfcbc8"},{url:"icon-512.png",revision:"9a89e31d4c14fffe9a66a88236df507e"},{url:"index.html",revision:"eb6da570456eec384f64627a337a7287"},{url:"manifest.webmanifest",revision:"3884a2a170cfa053c0ab80d0643a8886"}],{})}));
//# sourceMappingURL=sw.js.map
