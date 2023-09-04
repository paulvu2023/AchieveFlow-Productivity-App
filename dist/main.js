(()=>{"use strict";var n={28:(n,e,t)=>{t.d(e,{Z:()=>u});var r=t(81),o=t.n(r),a=t(645),i=t.n(a),s=t(667),d=t.n(s),c=new URL(t(11),t.b),p=i()(o()),l=d()(c);p.push([n.id,`html, body {margin: 0; height: 100%;}\n\nbody {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-image: url(${l});\n}\n\n/* Hamburger Styling */\n\n*,\n*::after,\n*::before {\n    box-sizing: border-box;\n}\n\n:root {\n    --bar-width: 40px;\n    --bar-height: 4px;\n    --hamburger-gap: 8px;\n    --foreground: rgb(59, 59, 59);\n    --background: none;\n    --animation-timing: 200ms ease-in-out;\n    --hamburger-height: calc(var(--bar-height) * 3 + var(--hamburger-gap) * 2)\n}\n\n.hamburger-menu {\n    --x-width: calc(var(--hamburger-height) * 1.41421356237);\n\n    display: flex;\n    flex-direction: column;\n    gap: var(--hamburger-gap);\n    width: max-content;\n    cursor: pointer;\n    padding: 15px;\n    background-color: rgb(225, 236, 250);\n    border-radius: 0px 0px 0px 10px;\n}\n\n.hamburger-menu::before,\n.hamburger-menu::after,\n.hamburger-menu input {\n    content: "";\n    width: var(--bar-width);\n    height: var(--bar-height);\n    background-color: var(--foreground);\n    border-radius: 9999px;\n    transform-origin: left center;\n    transition: opacity var(--animation-timing), width\n    var(--animation-timing), rotate var(--animation-timing), translate var(--animation-timing);\n}\n\n.hamburger-menu input {\n    appearance: none;\n    padding: 0;\n    margin: 0;\n    outline: none;\n    pointer-events: none;\n}\n\n.hamburger-menu:has(input:checked)::before {\n    width: var(--x-width);\n    rotate: 45deg;\n    translate: 0 calc(var(--bar-height) / -2);\n}\n\n.hamburger-menu:has(input:checked)::after {\n    width: var(--x-width);\n    rotate: -45deg;\n    translate: 0 calc(var(--bar-height) / 2);\n}\n\n.hamburger-menu input:checked {\n    opacity: 0;\n    width: 0;\n}\n\n/* Container Styling */\n\n.container {\n    display: grid;\n    grid-template-rows: 70px 1fr;\n    background-color: aliceblue;\n    width: 80%;\n    min-height: 750px;\n    border-radius: 10px;\n}\n\n@media (width <= 1500px) {\n    .container {\n        height: 100%;\n        width: 100%;\n    }\n}\n\n@media (height <= 750px) {\n    body {\n        align-items: start;\n    }\n}\n\n/* Header Styling */\n\n.header {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    background-color: rgb(151, 208, 255);\n    border-radius: 10px 10px 0px 0px;\n    border-bottom: 1px solid rgb(152, 197, 240);\n}\n\n.header img {\n    height: 80%;\n    margin-left: 20px;\n}\n\n.header div {\n    color: aliceblue;\n    font-size: 40px;\n    font-family: 'Montserrat', sans-serif;\n    font-weight: 100;\n}\n\n.main {\n    display: flex;\n    flex-direction: row;\n    width: 100%;\n    height: 100%;\n}\n\n/* Styling for the bottom left side (sidebar) */\n\n.hamburger-menu:has(input:checked) + .sidebar {\n    translate: 0;\n    width: 230px;\n    opacity: 1;\n}\n\n.sidebar {\n    transition: translate var(--animation-timing);\n    translate: -100%;\n    width: 0px;\n    background-color: rgb(225, 236, 250);\n    border-right: 1px solid rgb(152, 197, 240);\n    border-radius: 0px 0px 0px 10px;\n    padding-top: 80px;\n    padding-left: 4px;\n    opacity: 0;\n    overflow-y: auto;\n}\n\nnav button {\n    display: block;\n    border: none;\n    background: none;\n    font-family: 'Roboto', sans-serif;\n    font-weight: 100;\n    font-size: 25px;\n    margin-bottom: 25px;\n    color: rgb(77, 75, 75);\n    transition: all 0.2s ease-in-out;\n}\n\nnav button:hover {\n    transform: scale(1.2);\n}\n\n.fa-circle-plus {\n    font-size: 25px;\n    margin-left: 5px;\n}\n\n.notes .fa-circle-plus {\n    margin-left: 29px;\n}\n\n/* Styling for the bottom right side */\n\n.main-right {\n    flex: 1;\n    display: flex;\n    overflow: auto;\n    flex-direction: column;\n    justify-content: start;\n    align-items: center;\n    padding-top: 30px;\n}\n\n.add-task {\n    gap: 10px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border: none;\n    outline: none;\n    background-color:rgb(225, 236, 250);\n    width: 90%;\n    padding: 15px;\n    border-radius: 12px;\n    font-size: 25px;\n    font-weight: 500;\n    font-family: 'Roboto', sans-serif;\n    transition: all 0.3s ease-in-out;\n}\n\n.add-task:hover {\n    transform: scale(1.05);\n    color: rgb(45, 141, 219);\n}\n\n.add-task:active {\n    transform: scale(.8);\n}\n\n.fa-beat-fade {\n    font-size: 30px;\n}\n\n/* Styling for Task Form */\n\n.add-task-form {\n    background-color: aliceblue;\n    border-radius: 12px;\n    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;\n    position: absolute;\n    top: 0%;\n    left: 50%;\n    transform: translate(-50%, -50%) scale(0.1);\n    visibility: hidden;\n    transition: transform 0.4s, top 0.4s;\n}\n\n.open-add-task-form {\n    visibility: visible;\n    top: 55%;\n    transform: translate(-50%, -50%) scale(1);\n}\n\n.add-task-form h1 {\n    font-family: 'Montserrat', sans-serif;\n    font-size: 30px;\n    border-radius: 12px 12px 0px 0px;\n    background-color: rgb(77, 132, 250);\n    color: white;\n    margin: 0;\n    padding: 20px;\n    padding-left: 30px; \n}\n\n.add-task-form fieldset {\n    width: 400px;\n    height: 540px;\n}\n\nfieldset {\n    width: 100%;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    border: none;\n    margin: 0;\n    margin-bottom: 25px;\n    padding: 20px 30px 0px 30px;\n    border-radius: 0px 0px 12px 12px;\n}\n\nlabel {\n    font-family: 'Roboto', sans-serif;\n    font-weight: 600;\n    color: rgb(59, 59, 59);\n}\n\ninput, select, fieldset button {\n    font-family: 'Roboto', sans-serif;\n    font-weight: 500;\n    font-size: 15px;\n    padding: 7px;\n    margin-top: 5px;\n    margin-bottom: 40px;\n}\n\ninput:focus {\n    outline: none;\n    border: 2px solid rgb(17, 77, 156);\n}\n\ninput:invalid {\n    border: 2px solid red;\n}\n\nlabel span {\n    color: red;\n}\n\nfieldset div {\n    display: flex;\n    justify-content: center;\n    gap: 60px;\n}\n\nfieldset button {\n    margin-top: -15px;\n    width: 150px;\n    padding: 10px;\n    border-radius: 8px;\n    font-size: 20px;\n    transition: background-color 0.3s ease;\n}\n\n.add-task-button {\n    background-color: rgb(53, 117, 255);\n    color: white;\n    border: none;\n}\n\n.add-task-button:hover {\n    background-color: rgb(20, 94, 255);\n}\n\n.cancel-task-button {\n    background-color: transparent;\n    border: solid 1px gray;\n}\n\n.cancel-task-button:hover {\n    border: solid 1px rgb(0, 36, 196);\n    color: rgb(0, 36, 196);\n}`,""]);const u=p},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var d=this[s][0];null!=d&&(i[d]=!0)}for(var c=0;c<n.length;c++){var p=[].concat(n[c]);r&&i[p[0]]||(void 0!==a&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=a),t&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=t):p[2]=t),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),e.push(p))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],s=0;s<n.length;s++){var d=n[s],c=r.base?d[0]+r.base:d[0],p=a[c]||0,l="".concat(c," ").concat(p);a[c]=p+1;var u=t(l),f={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var g=o(f,r);r.byIndex=s,e.splice(s,0,{identifier:l,updater:g,references:1})}i.push(l)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var s=t(a[i]);e[s].references--}for(var d=r(n,o),c=0;c<a.length;c++){var p=t(a[c]);0===e[p].references&&(e[p].updater(),e.splice(p,1))}a=d}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},11:(n,e,t)=>{n.exports=t.p+"173b1cf39774b08b8bb2.png"}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!n;)n=r[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var n=t(379),e=t.n(n),r=t(795),o=t.n(r),a=t(569),i=t.n(a),s=t(565),d=t.n(s),c=t(216),p=t.n(c),l=t(589),u=t.n(l),f=t(28),g={};g.styleTagTransform=u(),g.setAttributes=d(),g.insert=i().bind(null,"head"),g.domAPI=o(),g.insertStyleElement=p(),e()(f.Z,g),f.Z&&f.Z.locals&&f.Z.locals;let b=document.getElementById("add-task-form");document.querySelector(".add-task").addEventListener("click",(function(){b.classList.add("open-add-task-form")}))})()})();