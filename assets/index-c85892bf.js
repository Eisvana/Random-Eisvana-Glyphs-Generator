function d(e,t){return Math.floor(Math.random()*(t-e))+e}!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const n of e)if("childList"===n.type)for(const e of n.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?t.credentials="include":"anonymous"===e.crossOrigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const u=["F9556C30","F9555C30","F9555C31","F9556C31","F9557C31","F9557C30","F9557C2F","F9556C2F","F9555C2F","FA556C30","F8556C30"];function a(){const e=h(),t=m();return p()+t+e}function h(){const e=d(0,u.length);return u[e]}function m(){return d(1,768).toString(16).toUpperCase().padStart(3,"0")}function p(){return d(1,7).toString()}function l(e=null){const t="dark"==document.documentElement.dataset.theme?"light":"dark",n=e??t;document.documentElement.dataset.theme=n}l(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");const f={themeSwitch:"themeSwitch",die:"die",glyphOutput:"glyphOutput"},s={};for(const e in f)s[e]=document.getElementById(e);function g(){y(a())}function y(e){s.glyphOutput.innerText=e}s.die.onclick=()=>g(),s.themeSwitch.onclick=()=>l();
