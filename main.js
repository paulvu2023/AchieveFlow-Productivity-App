(()=>{"use strict";var n={28:(n,e,t)=>{t.d(e,{Z:()=>u});var r=t(81),o=t.n(r),a=t(645),i=t.n(a),s=t(667),d=t.n(s),l=new URL(t(11),t.b),c=i()(o()),p=d()(l);c.push([n.id,`html, body {margin: 0; height: 100%; overflow: hidden;}\n\nbody {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-image: url(${p});\n}\n\n/* Hamburger Styling */\n\n*,\n*::after,\n*::before {\n    box-sizing: border-box;\n}\n\n:root {\n    --bar-width: 40px;\n    --bar-height: 4px;\n    --hamburger-gap: 8px;\n    --foreground: rgb(59, 59, 59);\n    --background: none;\n    --animation-timing: 200ms ease-in-out;\n    --hamburger-height: calc(var(--bar-height) * 3 + var(--hamburger-gap) * 2)\n}\n\n.hamburger-menu {\n    --x-width: calc(var(--hamburger-height) * 1.41421356237);\n\n    display: flex;\n    flex-direction: column;\n    gap: var(--hamburger-gap);\n    width: max-content;\n    cursor: pointer;\n    padding: 15px;\n    background-color: rgb(225, 236, 250);\n    border-radius: 0px 0px 0px 10px;\n}\n\n.hamburger-menu::before,\n.hamburger-menu::after,\n.hamburger-menu input {\n    content: "";\n    width: var(--bar-width);\n    height: var(--bar-height);\n    background-color: var(--foreground);\n    border-radius: 9999px;\n    transform-origin: left center;\n    transition: opacity var(--animation-timing), width\n    var(--animation-timing), rotate var(--animation-timing), translate var(--animation-timing);\n}\n\n.hamburger-menu input {\n    appearance: none;\n    padding: 0;\n    margin: 0;\n    outline: none;\n    pointer-events: none;\n}\n\n.hamburger-menu:has(input:checked)::before {\n    width: var(--x-width);\n    rotate: 45deg;\n    translate: 0 calc(var(--bar-height) / -2);\n}\n\n.hamburger-menu:has(input:checked)::after {\n    width: var(--x-width);\n    rotate: -45deg;\n    translate: 0 calc(var(--bar-height) / 2);\n}\n\n.hamburger-menu input:checked {\n    opacity: 0;\n    width: 0;\n}\n\n/* Container Styling */\n\n.container {\n    overflow: hidden;\n    display: grid;\n    grid-template-rows: 70px 1fr;\n    background-color: aliceblue;\n    width: 80%;\n    min-height: 750px;\n    border-radius: 10px;\n}\n\n@media (width <= 1500px) {\n    .container {\n        height: 100%;\n        width: 100%;\n    }\n}\n\n@media (height <= 750px) {\n    body {\n        align-items: start;\n    }\n}\n\n/* Header Styling */\n\n.header {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    background-color: rgb(151, 208, 255);\n    border-radius: 10px 10px 0px 0px;\n    border-bottom: 1px solid rgb(152, 197, 240);\n}\n\n.header img {\n    height: 80%;\n    margin-left: 20px;\n}\n\n.header div {\n    color: aliceblue;\n    font-size: 40px;\n    font-family: 'Montserrat', sans-serif;\n    font-weight: 100;\n}\n\n.main {\n    display: flex;\n    flex-direction: row;\n    width: 100%;\n    height: 100%;\n}\n\n/* Styling for sidebar */\n\n.active {\n    font-weight: 800;\n    transform: scale(1.1);\n}\n\n.hamburger-menu:has(input:checked) + .sidebar {\n    translate: 0;\n    width: 230px;\n    opacity: 1;\n}\n\n.sidebar {\n    max-height: 100%;\n    height: 100%;\n    transition: translate var(--animation-timing);\n    translate: -100%;\n    width: 0px;\n    background-color: rgb(225, 236, 250);\n    border-right: 1px solid rgb(152, 197, 240);\n    border-radius: 0px 0px 0px 10px;\n    padding-top: 80px;\n    padding-left: 4px;\n    opacity: 0;\n    overflow-y: auto;\n}\n\nnav {\n    max-height: 100%;\n    height: 100%;\n    overflow-y: auto;\n}\n\nnav button {\n    margin-left: 5px;\n    display: block;\n    border: none;\n    background: none;\n    font-family: 'Roboto', sans-serif;\n    font-weight: 100;\n    font-size: 25px;\n    margin-bottom: 25px;\n    color: rgb(77, 75, 75);\n    transition: all 0.2s ease-in-out;\n}\n\nnav button:hover {\n    transform: scale(1.2);\n}\n\n.fa-circle-plus {\n    font-size: 25px;\n    margin-left: 5px;\n}\n\n.notes .fa-circle-plus {\n    margin-left: 29px;\n}\n\n.projects-menu {\n    padding-left: 8px;\n}\n\n.projects-menu .sidebar-project {\n    font-size: 22px;\n}\n\n/* Styling for right side */\n\n.main-right {\n    overflow: auto;\n    height: 100%;\n    flex: 1;\n    display: flex;\n    overflow: auto;\n    flex-direction: column;\n    justify-content: start;\n    align-items: center;\n    padding-top: 30px;\n}\n\n.add-task /*{ the big task button */ {\n    gap: 10px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border: none;\n    outline: none;\n    background-color:rgb(225, 236, 250);\n    width: 90%;\n    padding: 15px;\n    border-radius: 12px;\n    font-size: 25px;\n    font-weight: 500;\n    font-family: 'Roboto', sans-serif;\n    transition: all 0.3s ease-in-out;\n    margin-bottom: 20px;\n}\n\n.add-task:hover {\n    transform: scale(1.05);\n    color: rgb(45, 141, 219);\n}\n\n.add-task:active {\n    transform: scale(.8);\n}\n\n.fa-beat-fade {\n    font-size: 30px;\n}\n\n/* Styling for Task List and Tasks*/\n.task-list {\n    height: 100%;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n}\n\n.task {\n    display: flex;\n    justify-content: space-between;\n    border: 1px solid gray;\n    padding: 10px;\n    margin: 10px 60px 10px 60px;\n}\n\n.task-right-side {\n    display: flex;\n    align-items: center;\n    gap: 20px;\n}\n\nbutton.details {\n    background-color: transparent;\n    border: 1px solid rgb(21, 150, 255);\n    color: rgb(21, 150, 255);\n    font-size: 12px;\n    font-family: 'Montserrat', sans-serif;\n    font-weight: 800;\n    border-radius: 3px;\n    padding: 5px;\n    width: 70px;\n    transition: background-color 0.3s ease;\n}\n\nbutton.details:hover {\n    background-color: rgb(21, 150, 255);\n    color: aliceblue;\n}\n\n.task-date {\n    color: rgb(21, 150, 255);\n    font-family: 'Montserrat', sans-serif;\n}\n\n.fa-pen-to-square, .fa-trash-can {\n    color: rgb(21, 150, 255);\n    font-size: 18px;\n    transition: all 0.2s ease-in-out;\n}\n    \n.edit-task, .delete-task {\n    background-color: transparent;\n    border: none;\n}\n\n.fa-pen-to-square:hover, .fa-trash-can:hover {\n    transform: scale(1.2);\n}\n\n/* Styling for Add Task Form */\n\n.add-task-form, .edit-task-form {\n    background-color: aliceblue;\n    border-radius: 12px;\n    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;\n    position: absolute;\n    top: 0%;\n    left: 50%;\n    transform: translate(-50%, -50%) scale(0.1);\n    visibility: hidden;\n    transition: transform 0.4s, top 0.4s;\n    z-index: 2;\n}\n\n.open-add-task-form, .open-edit-task-form {\n    visibility: visible;\n    top: 55%;\n    transform: translate(-50%, -50%) scale(1);\n}\n\n.add-task-form h1, .edit-task-form h1 {\n    font-family: 'Montserrat', sans-serif;\n    font-size: 30px;\n    border-radius: 12px 12px 0px 0px;\n    background-color: lightskyblue;\n    color: white;\n    margin: 0;\n    padding: 20px;\n    padding-left: 30px; \n}\n\n.add-task-form fieldset, .edit-task-form fieldset {\n    width: 400px;\n    height: 540px;\n}\n\nfieldset {\n    width: 100%;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    border: none;\n    margin: 0;\n    margin-bottom: 25px;\n    padding: 20px 30px 0px 30px;\n    border-radius: 0px 0px 12px 12px;\n}\n\nlabel {\n    font-family: 'Roboto', sans-serif;\n    font-weight: 600;\n    color: rgb(59, 59, 59);\n}\n\ninput, select, fieldset button{\n    font-family: 'Roboto', sans-serif;\n    font-weight: 500;\n    font-size: 15px;\n    padding: 7px;\n    margin-top: 5px;\n    margin-bottom: 40px;\n}\n\ninput[type="date"] {\n    padding: 15px 7px 15px 7px;\n}\n\ninput:focus {\n    outline: none;\n    border: 2px solid rgb(17, 77, 156);\n}\n\ninput:invalid {\n    border: 2px solid red;\n}\n\nlabel span {\n    color: rgb(21, 150, 255);\n    font-family: 'Montserrat', sans-serif;\n    white-space: nowrap;\n    overflow: hidden;\n    max-width: 390px;\n}\n\nfieldset div {\n    display: flex;\n    justify-content: center;\n    gap: 60px;\n}\n\nfieldset button {\n    margin-top: -15px;\n    width: 150px;\n    padding: 10px;\n    border-radius: 8px;\n    font-size: 20px;\n    transition: background-color 0.3s ease;\n}\n\n.add-task-button, .edit-task-button, .add-project-button {\n    font-weight: 800;\n    background-color: rgb(9, 124, 255);\n    color: white;\n    border: none;\n}\n\n.add-task-button:hover, .edit-task-button:hover, .add-project-button:hover {\n    background-color: rgb(0, 79, 248);\n}\n\n.cancel-task-button, .cancel-edit-task-button, .cancel-project-button {\n    background-color: transparent;\n    border: solid 1px gray;\n}\n\n.cancel-task-button:hover, .cancel-edit-task-button:hover, .cancel-project-button:hover {\n    border: solid 1px rgb(0, 36, 196);\n    color: rgb(0, 36, 196);\n}\n\n.overlay {\n    display: none;\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.5);\n    z-index: 1;\n}\n\n/* Styling for Details Popup */\n\n.details-container {\n    display: flex;\n    flex-direction: column;\n    background-color: black;\n    width: 600px;\n    height: 400px;\n    background-color: lightskyblue;\n    border-radius: 12px;\n    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;\n    position: absolute;\n    top: 55%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    z-index: 2;\n    padding: 20px 50px 0px 50px;\n    overflow: hidden;\n}\n\n.x-button {\n    background-color: transparent;\n    border: none;\n    font-size: 30px;\n    align-self: end;\n}\n\n.details-container h1 {\n    font-family: 'Roboto', sans-serif;\n    font-size: 40px;\n    margin-top: 0;\n    color: white;\n    overflow-y:auto;\n    overflow-x: hidden;\n    max-height: 100px;\n}\n\n.details-container > .description-detail {\n    margin-top: 30px;\n    max-height: 75px;\n    overflow-y:auto;\n    overflow-x: hidden;\n}\n\n.details-container > div {\n    font-size: 20px;\n    font-family: 'Roboto', sans-serif;\n    margin-top: 5px;\n    font-weight: 800;\n    color: white;\n}\n\n.space {\n    margin-bottom: 30px;\n}\n\n/* Styling for Projects Form */\n\n.project-form {\n    display: flex;\n    flex-direction: column;\n    width: 500px;\n    height: 200px;\n    border-radius: 12px;\n    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;\n    position: absolute;\n    top: 55%;\n    left: 50%;\n    transform: translate(-50%, -50%) scale(1);\n    background-color: aliceblue;\n    z-index: 2;\n}\n\nlabel[for="project-name"] {\n   margin-top: 20px;\n}\n\n#project-name {\n    margin-bottom: 25px;\n}\n\n#add-project-form fieldset div button {\n    margin: 0;   \n}\n\n/* Checkbox Styling */\n\n.checkbox-wrapper-15 .cbx {\n    -webkit-user-select: none;\n    user-select: none;\n    -webkit-tap-highlight-color: transparent;\n    cursor: pointer;\n  }\n.checkbox-wrapper-15 .cbx span {\ndisplay: inline-block;\nvertical-align: middle;\ntransform: translate3d(0, 0, 0);\n}\n.checkbox-wrapper-15 .cbx span:first-child {\nposition: relative;\nwidth: 24px;\nheight: 24px;\nborder-radius: 50%;\ntransform: scale(1);\nvertical-align: middle;\nborder: 1px solid rgb(21, 150, 255);\ntransition: all 0.2s ease;\n}\n.checkbox-wrapper-15 .cbx span:first-child svg {\nposition: absolute;\nz-index: 1;\ntop: 8px;\nleft: 6px;\nfill: none;\nstroke: white;\nstroke-width: 2;\nstroke-linecap: round;\nstroke-linejoin: round;\nstroke-dasharray: 16px;\nstroke-dashoffset: 16px;\ntransition: all 0.3s ease;\ntransition-delay: 0.1s;\ntransform: translate3d(0, 0, 0);\n}\n.checkbox-wrapper-15 .cbx span:first-child:before {\ncontent: "";\nwidth: 100%;\nheight: 100%;\nbackground: rgb(0, 110, 255);\ndisplay: block;\ntransform: scale(0);\nopacity: 1;\nborder-radius: 50%;\ntransition-delay: 0.2s;\n}\n.checkbox-wrapper-15 .cbx span:last-child {\nmargin-left: 8px;\n}\n.checkbox-wrapper-15 .cbx span:last-child:after {\ncontent: "";\nposition: absolute;\ntop: 8px;\nleft: 0;\nheight: 1px;\nwidth: 100%;\nbackground: #B9B8C3;\ntransform-origin: 0 0;\ntransform: scaleX(0);\n}\n.checkbox-wrapper-15 .cbx:hover span:first-child {\nborder-color:rgb(0, 110, 255);\n}\n\n.checkbox-wrapper-15 .inp-cbx:checked + .cbx span:first-child {\nborder-color:rgb(0, 110, 255);\nbackground:rgb(0, 110, 255);\nanimation: check-15 0.6s ease;\n}\n.checkbox-wrapper-15 .inp-cbx:checked + .cbx span:first-child svg {\nstroke-dashoffset: 0;\n}\n.checkbox-wrapper-15 .inp-cbx:checked + .cbx span:first-child:before {\ntransform: scale(2.2);\nopacity: 0;\ntransition: all 0.6s ease;\n}\n.checkbox-wrapper-15 .inp-cbx:checked + .cbx span:last-child {\ncolor: #B9B8C3;\ntransition: all 0.3s ease;\n}\n.checkbox-wrapper-15 .inp-cbx:checked + .cbx span:last-child:after {\ntransform: scaleX(1);\ntransition: all 0.3s ease;\n}\n\n@keyframes check-15 {\n50% {\n    transform: scale(1.2);\n}\n}\n\nbutton:hover {\n    cursor: pointer;\n}\n\n/* Styling for Scrollbar */\n\n/* width */\n::-webkit-scrollbar {\n    width: 10px;\n}\n\n/* Track */\n::-webkit-scrollbar-track {\n    border-radius: 10px;\n}\n\n/* Handle */\n::-webkit-scrollbar-thumb {\n    background: rgba(185, 230, 248, 0.445);\n    border-radius: 10px;\n}\n\n/* Handle on hover */\n::-webkit-scrollbar-thumb:hover {\n    background: rgba(185, 230, 248, 1);\n}`,""]);const u=c},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var d=this[s][0];null!=d&&(i[d]=!0)}for(var l=0;l<n.length;l++){var c=[].concat(n[l]);r&&i[c[0]]||(void 0!==a&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=a),t&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=t):c[2]=t),o&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=o):c[4]="".concat(o)),e.push(c))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],s=0;s<n.length;s++){var d=n[s],l=r.base?d[0]+r.base:d[0],c=a[l]||0,p="".concat(l," ").concat(c);a[l]=c+1;var u=t(p),f={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var m=o(f,r);r.byIndex=s,e.splice(s,0,{identifier:p,updater:m,references:1})}i.push(p)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var s=t(a[i]);e[s].references--}for(var d=r(n,o),l=0;l<a.length;l++){var c=t(a[l]);0===e[c].references&&(e[c].updater(),e.splice(c,1))}a=d}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},11:(n,e,t)=>{n.exports=t.p+"173b1cf39774b08b8bb2.png"}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!n;)n=r[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var n=t(379),e=t.n(n),r=t(795),o=t.n(r),a=t(569),i=t.n(a),s=t(565),d=t.n(s),l=t(216),c=t.n(l),p=t(589),u=t.n(p),f=t(28),m={};m.styleTagTransform=u(),m.setAttributes=d(),m.insert=i().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=c(),e()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;const b=[];class g{constructor(n,e,t,r,o){this.taskName=n,this.description=e,this.dueDate=t,this.priority=r,this.checked=!1,this.project=o,b[v(o)].addTask(this)}}class h{constructor(n){this.name=n,this.taskList=[]}addTask(n){this.taskList.push(n)}}function x(n){const e=new h(n);b.push(e)}function v(n){for(let e=0;e<b.length;e++)if(b[e].name==n)return e;return-1}function y(n){n.preventDefault();let e=document.getElementById("add-task-form");const t=document.getElementById("task-name").value,r=document.getElementById("description").value,o=document.getElementById("due-date").value,a=document.getElementById("priority").value,i=document.getElementById("project").value;new g(t,r,o,a,i),e.reset(),W(),Z(b[v(i)].taskList)}function k(n){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},k(n)}function w(n,e){if(e.length<n)throw new TypeError(n+" argument"+(n>1?"s":"")+" required, but only "+e.length+" present")}function j(n){w(1,arguments);var e=Object.prototype.toString.call(n);return n instanceof Date||"object"===k(n)&&"[object Date]"===e?new Date(n.getTime()):"number"==typeof n||"[object Number]"===e?new Date(n):("string"!=typeof n&&"[object String]"!==e||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function E(n){if(null===n||!0===n||!1===n)return NaN;var e=Number(n);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}var N={};function S(){return N}function L(n,e){var t,r,o,a,i,s,d,l;w(1,arguments);var c=S(),p=E(null!==(t=null!==(r=null!==(o=null!==(a=null==e?void 0:e.weekStartsOn)&&void 0!==a?a:null==e||null===(i=e.locale)||void 0===i||null===(s=i.options)||void 0===s?void 0:s.weekStartsOn)&&void 0!==o?o:c.weekStartsOn)&&void 0!==r?r:null===(d=c.locale)||void 0===d||null===(l=d.options)||void 0===l?void 0:l.weekStartsOn)&&void 0!==t?t:0);if(!(p>=0&&p<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var u=j(n),f=u.getDay(),m=(f<p?7:0)+f-p;return u.setDate(u.getDate()-m),u.setHours(0,0,0,0),u}function D(n,e){return w(1,arguments),function(n,e,t){w(2,arguments);var r=L(n,t),o=L(e,t);return r.getTime()===o.getTime()}(n,Date.now(),e)}Math.pow(10,8);var T=6e4,I=36e5;function B(n,e){var t;w(1,arguments);var r=E(null!==(t=null==e?void 0:e.additionalDigits)&&void 0!==t?t:2);if(2!==r&&1!==r&&0!==r)throw new RangeError("additionalDigits must be 0, 1 or 2");if("string"!=typeof n&&"[object String]"!==Object.prototype.toString.call(n))return new Date(NaN);var o,a=function(n){var e,t={},r=n.split(C.dateTimeDelimiter);if(r.length>2)return t;if(/:/.test(r[0])?e=r[0]:(t.date=r[0],e=r[1],C.timeZoneDelimiter.test(t.date)&&(t.date=n.split(C.timeZoneDelimiter)[0],e=n.substr(t.date.length,n.length))),e){var o=C.timezone.exec(e);o?(t.time=e.replace(o[1],""),t.timezone=o[1]):t.time=e}return t}(n);if(a.date){var i=function(n,e){var t=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+e)+"})|(\\d{2}|[+-]\\d{"+(2+e)+"})$)"),r=n.match(t);if(!r)return{year:NaN,restDateString:""};var o=r[1]?parseInt(r[1]):null,a=r[2]?parseInt(r[2]):null;return{year:null===a?o:100*a,restDateString:n.slice((r[1]||r[2]).length)}}(a.date,r);o=function(n,e){if(null===e)return new Date(NaN);var t=n.match(M);if(!t)return new Date(NaN);var r=!!t[4],o=z(t[1]),a=z(t[2])-1,i=z(t[3]),s=z(t[4]),d=z(t[5])-1;if(r)return function(n,e,t){return e>=1&&e<=53&&t>=0&&t<=6}(0,s,d)?function(n,e,t){var r=new Date(0);r.setUTCFullYear(n,0,4);var o=7*(e-1)+t+1-(r.getUTCDay()||7);return r.setUTCDate(r.getUTCDate()+o),r}(e,s,d):new Date(NaN);var l=new Date(0);return function(n,e,t){return e>=0&&e<=11&&t>=1&&t<=(A[e]||(P(n)?29:28))}(e,a,i)&&function(n,e){return e>=1&&e<=(P(n)?366:365)}(e,o)?(l.setUTCFullYear(e,a,Math.max(o,i)),l):new Date(NaN)}(i.restDateString,i.year)}if(!o||isNaN(o.getTime()))return new Date(NaN);var s,d=o.getTime(),l=0;if(a.time&&(l=function(n){var e=n.match($);if(!e)return NaN;var t=H(e[1]),r=H(e[2]),o=H(e[3]);return function(n,e,t){return 24===n?0===e&&0===t:t>=0&&t<60&&e>=0&&e<60&&n>=0&&n<25}(t,r,o)?t*I+r*T+1e3*o:NaN}(a.time),isNaN(l)))return new Date(NaN);if(!a.timezone){var c=new Date(d+l),p=new Date(0);return p.setFullYear(c.getUTCFullYear(),c.getUTCMonth(),c.getUTCDate()),p.setHours(c.getUTCHours(),c.getUTCMinutes(),c.getUTCSeconds(),c.getUTCMilliseconds()),p}return s=function(n){if("Z"===n)return 0;var e=n.match(q);if(!e)return 0;var t="+"===e[1]?-1:1,r=parseInt(e[2]),o=e[3]&&parseInt(e[3])||0;return function(n,e){return e>=0&&e<=59}(0,o)?t*(r*I+o*T):NaN}(a.timezone),isNaN(s)?new Date(NaN):new Date(d+l+s)}var C={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},M=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,$=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,q=/^([+-])(\d{2})(?::?(\d{2}))?$/;function z(n){return n?parseInt(n):1}function H(n){return n&&parseFloat(n.replace(",","."))||0}var A=[31,null,31,30,31,30,31,31,30,31,30,31];function P(n){return n%400==0||n%4==0&&n%100!=0}function U(n){w(1,arguments);var e=j(n);return e.setHours(0,0,0,0),e}function O(n){return w(1,arguments),function(n,e){w(2,arguments);var t=U(n),r=U(e);return t.getTime()===r.getTime()}(n,Date.now())}function R(){b.forEach((n=>Z(n.taskList)))}function Z(n){document.querySelector(".task-list").innerHTML="",n.forEach((n=>function(n){const e=document.createElement("div");e.classList.add("task"),e.id=`task-${n.taskName}`,e.innerHTML=`\n        <div class="checkbox-wrapper-15">\n            <input class="inp-cbx" id="${n.taskName}" type="checkbox" style="display: none;"/>\n            <label class="cbx" for="${n.taskName}">\n                <span>\n                    <svg width="12px" height="9px" viewbox="0 0 12 9">\n                        <polyline points="1 5 4 8 11 1"></polyline>\n                    </svg>\n                </span>\n                <span>${n.taskName}</span>\n            </label>\n        </div>\n        <div class="task-right-side">\n            <div class="task-date">${n.dueDate}</div>\n            <button class="details" id="${n.taskName}-details">DETAILS</button>\n            <button class="edit-task" id="${n.taskName}-edit">\n                <i class="fa-regular fa-pen-to-square"></i>\n            </button>\n            <button class="delete-task" id="${n.taskName}-delete">\n                <i class="fa-regular fa-trash-can"></i>\n            </button>\n        </div>\n    `,document.querySelector(".task-list").appendChild(e),"Low"==n.priority?document.getElementById(`task-${n.taskName}`).style.borderColor="green":"Medium"==n.priority?document.getElementById(`task-${n.taskName}`).style.borderColor="orange":"High"==n.priority&&(document.getElementById(`task-${n.taskName}`).style.borderColor="red");document.getElementById(`${n.taskName}-details`).addEventListener("click",(()=>{!function(n){const e=document.querySelector(".main-right");let t=document.getElementById("overlay");t.style.display="block";const r=`\n        <div class="details-container">\n            <button class="x-button">\n                <i class="fa-solid fa-xmark" style="color: #ffffff;"></i>\n            </button>\n            <h1>${n.taskName}</h1>\n            <div class="space description-detail"><span>Description:</span> ${n.description}</div>\n            <div class="space"><span>Due Date:</span> ${n.dueDate}</div>\n            <div class="space"><span>Priority:</span> ${n.priority}</div>\n            <div><span>Project:</span> ${n.project}</div>\n        </div>\n    `;e.insertAdjacentHTML("beforeend",r),e.appendChild(t),document.querySelector(".x-button").addEventListener("click",X)}(n)}));document.getElementById(`${n.taskName}-edit`).addEventListener("click",(()=>{!function(n){const e=document.querySelector(".main-right");let t=document.getElementById("overlay");t.style.display="block";const r=`\n        <form class="edit-task-form open-edit-task-form" id="edit-task-form">\n            <h1>Edit Task</h1>\n            <fieldset>\n                <label for="edit-task-name">Task Name</label>\n                <input value="${n.taskName}" type="text" id="edit-task-name" name="edit-task-name" autocomplete="off" required spellcheck="false">\n\n                <label for="edit-description">Description</label>\n                <input value="${n.description}" type="text" id="edit-description" name="edit-description" autocomplete="off" spellcheck="false">\n\n                <label for="edit-due-date">Due Date</label>\n                <input value="${n.dueDate}" type="date" id="edit-due-date" name="edit-due-date">\n\n                <label for="edit-priority">Priority</label>\n                <select id="edit-priority" name="edit-priority">\n                    <option value="Low">Low</option>\n                    <option value="Medium">Medium</option>\n                    <option value="High">High</option>\n                </select>\n\n                <label for="edit-project">Project</label>\n                <select id="edit-project" name="edit-project">\n\n                </select>\n\n                <div>\n                    <button type="submit" class="edit-task-button">Edit</button>\n                    <button type="button" class="cancel-edit-task-button">Cancel</button>\n                </div>\n            </fieldset>\n        </form>\n    `;e.insertAdjacentHTML("beforeend",r),e.appendChild(t),K("edit-project");const o=document.getElementById("edit-priority");for(let e=0;e<o.options.length;e++)if(o.options[e].value==n.priority){o.options[e].selected=!0;break}const a=document.getElementById("edit-project");for(let e=0;e<o.options.length;e++)if(a.options[e].value==n.project){a.options[e].selected=!0;break}document.getElementById("edit-task-form").addEventListener("submit",(e=>{e.preventDefault(),function(n,e){const t=document.getElementById("edit-task-name").value,r=document.getElementById("edit-description").value,o=document.getElementById("edit-due-date").value,a=document.getElementById("edit-priority").value,i=document.getElementById("edit-project").value;for(let s=0;s<e.length;s++)e[s].taskName==n.taskName&&(e[s].taskName=t,e[s].description=r,e[s].dueDate=o,e[s].priority=a,e[s].project=i)}(n,b[v(n.project)].taskList),J(),Z(b[v(n.project)].taskList)})),document.querySelector(".cancel-edit-task-button").addEventListener("click",J)}(n),Z(b[v(n.project)].taskList)}));document.getElementById(`${n.taskName}-delete`).addEventListener("click",(()=>{!function(n){const e=b[v(n.project)].taskList;for(let t=0;t<e.length;t++)n.taskName==e[t].taskName&&e.splice(t,1)}(n),Z(b[v(n.project)].taskList)}))}(n)))}function F(){const n=[];for(const e of b)for(let t=0;t<e.taskList.length;t++)1==D(B(e.taskList[t].dueDate))&&n.push(e.taskList[t]);n.length>0&&Z(n)}function Y(){const n=[];for(const e of b)for(let t=0;t<e.taskList.length;t++)1==O(B(e.taskList[t].dueDate))&&n.push(e.taskList[t]);n.length>0&&Z(n)}function _(){const n=document.querySelector(".project-container"),e=document.createElement("div");e.classList.add("overlay"),e.style.display="block",n.insertAdjacentHTML("beforeend",'\n    <div class="project-form">\n        <form class="add-project-form" id="add-project-form">\n            <fieldset>\n                <label for="project-name">Project Name</label>\n                <input type="text" id="project-name" name="project-name" autocomplete="off" maxlength="15" required spellcheck="false">\n                <div>\n                    <button type="submit" class="add-project-button">Add Project</button>\n                    <button type="button" class="cancel-project-button">Cancel</button>\n                </div>\n            </fieldset>\n        </form>\n    </div>  \n    '),n.appendChild(e),document.getElementById("add-project-form").addEventListener("submit",(n=>{n.preventDefault();const e=document.getElementById("project-name").value;x(e),G(),function(n){const e=document.querySelector(".projects-menu"),t=document.createElement("button");t.classList.add(`${n}-button`),t.classList.add("sidebar-project"),t.textContent=n,e.append(t)}(e)})),document.querySelector(".cancel-project-button").addEventListener("click",G)}function G(){document.querySelector(".project-container").innerHTML=""}function X(){let n=document.querySelector(".details-container"),e=document.getElementById("overlay");n.remove(),e.style.display="none"}function J(){let n=document.getElementById("edit-task-form");document.getElementById("overlay").style.display="none",n.remove()}function Q(){let n=document.getElementById("add-task-form"),e=document.getElementById("overlay");K("project"),n.classList.add("open-add-task-form"),e.style.display="block"}function W(){let n=document.getElementById("add-task-form"),e=document.getElementById("overlay"),t=document.getElementById("project");n.reset(),t.innerHTML="",n.classList.remove("open-add-task-form"),e.style.display="none"}function K(n){const e=document.getElementById(n);for(const n of b){const t=document.createElement("option");t.value=n.name,t.textContent=n.name,e.appendChild(t)}}document.addEventListener("DOMContentLoaded",(function(){x("General"),function(){const n=document.querySelector(".main-right"),e=document.createElement("div");e.id="overlay",e.className="overlay",n.innerHTML='\n        <button class="add-task">\n            <i class="fa-solid fa-plus fa-beat-fade"></i>\n            Add Task\n        </button>\n        <div class="task-list"></div>\n    ',n.insertAdjacentHTML("beforeend",'\n        <form class="add-task-form" id="add-task-form">\n            <h1>Add Task</h1>\n            <fieldset>\n                <label for="task-name">Task Name</label>\n                <input type="text" id="task-name" name="task-name" autocomplete="off" required spellcheck="false">\n\n                <label for="description">Description</label>\n                <input type="text" id="description" name="description" autocomplete="off" spellcheck="false">\n\n                <label for="due-date">Due Date</label>\n                <input type="date" id="due-date" name="due-date">\n\n                <label for="priority">Priority</label>\n                <select id="priority" name="priority">\n                    <option value="Low">Low</option>\n                    <option value="Medium" selected>Medium</option>\n                    <option value="High">High</option>\n                </select>\n\n                <label for="project">Project</label>\n                <select id="project" name="project">\n\n                </select>\n\n                <div>\n                    <button type="submit" class="add-task-button">Add Task</button>\n                    <button type="button" class="cancel-task-button">Cancel</button>\n                </div>\n            </fieldset>\n        </form>\n    '),n.appendChild(e)}(),document.querySelectorAll("nav > *").forEach((n=>{n.addEventListener("click",(()=>{document.querySelector(".active")?.classList.remove("active"),n.classList.add("active")}))})),document.querySelector(".add-task").addEventListener("click",Q),document.querySelector(".cancel-task-button").addEventListener("click",W),document.getElementById("add-task-form").addEventListener("submit",y),document.querySelector(".projects").addEventListener("click",_),document.querySelector(".all").addEventListener("click",R),document.querySelector(".today").addEventListener("click",Y),document.querySelector(".week").addEventListener("click",F)}))})()})();