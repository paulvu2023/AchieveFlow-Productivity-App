(()=>{"use strict";var n={28:(n,e,t)=>{t.d(e,{Z:()=>u});var r=t(81),a=t.n(r),o=t(645),i=t.n(o),s=t(667),d=t.n(s),c=new URL(t(11),t.b),l=i()(a()),p=d()(c);l.push([n.id,`html, body {margin: 0; height: 100%;}\n\nbody {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-image: url(${p});\n}\n\n/* Hamburger Styling */\n\n*,\n*::after,\n*::before {\n    box-sizing: border-box;\n}\n\n:root {\n    --bar-width: 40px;\n    --bar-height: 4px;\n    --hamburger-gap: 8px;\n    --foreground: rgb(59, 59, 59);\n    --background: none;\n    --animation-timing: 200ms ease-in-out;\n    --hamburger-height: calc(var(--bar-height) * 3 + var(--hamburger-gap) * 2)\n}\n\n.hamburger-menu {\n    --x-width: calc(var(--hamburger-height) * 1.41421356237);\n\n    display: flex;\n    flex-direction: column;\n    gap: var(--hamburger-gap);\n    width: max-content;\n    cursor: pointer;\n    padding: 15px;\n    background-color: rgb(225, 236, 250);\n    border-radius: 0px 0px 0px 10px;\n}\n\n.hamburger-menu::before,\n.hamburger-menu::after,\n.hamburger-menu input {\n    content: "";\n    width: var(--bar-width);\n    height: var(--bar-height);\n    background-color: var(--foreground);\n    border-radius: 9999px;\n    transform-origin: left center;\n    transition: opacity var(--animation-timing), width\n    var(--animation-timing), rotate var(--animation-timing), translate var(--animation-timing);\n}\n\n.hamburger-menu input {\n    appearance: none;\n    padding: 0;\n    margin: 0;\n    outline: none;\n    pointer-events: none;\n}\n\n.hamburger-menu:has(input:checked)::before {\n    width: var(--x-width);\n    rotate: 45deg;\n    translate: 0 calc(var(--bar-height) / -2);\n}\n\n.hamburger-menu:has(input:checked)::after {\n    width: var(--x-width);\n    rotate: -45deg;\n    translate: 0 calc(var(--bar-height) / 2);\n}\n\n.hamburger-menu input:checked {\n    opacity: 0;\n    width: 0;\n}\n\n/* Container Styling */\n\n.container {\n    display: grid;\n    grid-template-rows: 70px 1fr;\n    background-color: aliceblue;\n    width: 80%;\n    min-height: 750px;\n    border-radius: 10px;\n}\n\n@media (width <= 1500px) {\n    .container {\n        height: 100%;\n        width: 100%;\n    }\n}\n\n@media (height <= 750px) {\n    body {\n        align-items: start;\n    }\n}\n\n/* Header Styling */\n\n.header {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    background-color: rgb(151, 208, 255);\n    border-radius: 10px 10px 0px 0px;\n    border-bottom: 1px solid rgb(152, 197, 240);\n}\n\n.header img {\n    height: 80%;\n    margin-left: 20px;\n}\n\n.header div {\n    color: aliceblue;\n    font-size: 40px;\n    font-family: 'Montserrat', sans-serif;\n    font-weight: 100;\n}\n\n.main {\n    display: flex;\n    flex-direction: row;\n    width: 100%;\n    height: 100%;\n}\n\n/* Styling for the bottom left side (sidebar) */\n\n.hamburger-menu:has(input:checked) + .sidebar {\n    translate: 0;\n    width: 230px;\n    opacity: 1;\n}\n\n.sidebar {\n    transition: translate var(--animation-timing);\n    translate: -100%;\n    width: 0px;\n    background-color: rgb(225, 236, 250);\n    border-right: 1px solid rgb(152, 197, 240);\n    border-radius: 0px 0px 0px 10px;\n    padding-top: 80px;\n    padding-left: 4px;\n    opacity: 0;\n    overflow-y: auto;\n}\n\nnav button {\n    display: block;\n    border: none;\n    background: none;\n    font-family: 'Roboto', sans-serif;\n    font-weight: 100;\n    font-size: 25px;\n    margin-bottom: 25px;\n    color: rgb(77, 75, 75);\n    transition: all 0.2s ease-in-out;\n}\n\nnav button:hover {\n    transform: scale(1.2);\n}\n\n.fa-circle-plus {\n    font-size: 25px;\n    margin-left: 5px;\n}\n\n.notes .fa-circle-plus {\n    margin-left: 29px;\n}\n\n/* Styling for the bottom right side */\n\n.main-right {\n    flex: 1;\n    display: flex;\n    overflow: auto;\n    flex-direction: column;\n    justify-content: start;\n    align-items: center;\n    padding-top: 30px;\n}\n\n.add-task /*{ the big task button */ {\n    gap: 10px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border: none;\n    outline: none;\n    background-color:rgb(225, 236, 250);\n    width: 90%;\n    padding: 15px;\n    border-radius: 12px;\n    font-size: 25px;\n    font-weight: 500;\n    font-family: 'Roboto', sans-serif;\n    transition: all 0.3s ease-in-out;\n    margin-bottom: 20px;\n}\n\n.add-task:hover {\n    transform: scale(1.05);\n    color: rgb(45, 141, 219);\n}\n\n.add-task:active {\n    transform: scale(.8);\n}\n\n.fa-beat-fade {\n    font-size: 30px;\n}\n\n/* Styling for Task List and Tasks*/\n.task-list {\n    height: 100%;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n}\n\n.task {\n    display: flex;\n    justify-content: space-between;\n    border: 1px solid gray;\n    padding: 10px;\n    margin: 10px 60px 10px 60px;\n}\n\n.task-right-side {\n    display: flex;\n    align-items: center;\n    gap: 20px;\n}\n\nbutton.details {\n    background-color: transparent;\n    border: 1px solid rgb(21, 150, 255);\n    color: rgb(21, 150, 255);\n    font-size: 12px;\n    font-family: 'Montserrat', sans-serif;\n    font-weight: 800;\n    border-radius: 3px;\n    padding: 5px;\n    width: 70px;\n    transition: background-color 0.3s ease;\n}\n\nbutton.details:hover {\n    background-color: rgb(21, 150, 255);\n    color: aliceblue;\n}\n\n.task-date {\n    color: rgb(21, 150, 255);\n    font-family: 'Montserrat', sans-serif;\n}\n\n.fa-pen-to-square, .fa-trash-can {\n    color: rgb(21, 150, 255);\n    font-size: 18px;\n    transition: all 0.2s ease-in-out;\n}\n    \n.edit-task, .delete-task {\n    background-color: transparent;\n    border: none;\n}\n\n.fa-pen-to-square:hover, .fa-trash-can:hover {\n    transform: scale(1.2);\n}\n\n/* Styling for Task Form */\n\n.add-task-form {\n    background-color: aliceblue;\n    border-radius: 12px;\n    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;\n    position: absolute;\n    top: 0%;\n    left: 50%;\n    transform: translate(-50%, -50%) scale(0.1);\n    visibility: hidden;\n    transition: transform 0.4s, top 0.4s;\n    z-index: 2\n}\n\n.open-add-task-form {\n    visibility: visible;\n    top: 55%;\n    transform: translate(-50%, -50%) scale(1);\n}\n\n.add-task-form h1 {\n    font-family: 'Montserrat', sans-serif;\n    font-size: 30px;\n    border-radius: 12px 12px 0px 0px;\n    background-color: rgb(48, 162, 255);\n    color: white;\n    margin: 0;\n    padding: 20px;\n    padding-left: 30px; \n}\n\n.add-task-form fieldset {\n    width: 400px;\n    height: 540px;\n}\n\nfieldset {\n    width: 100%;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    border: none;\n    margin: 0;\n    margin-bottom: 25px;\n    padding: 20px 30px 0px 30px;\n    border-radius: 0px 0px 12px 12px;\n}\n\nlabel {\n    font-family: 'Roboto', sans-serif;\n    font-weight: 600;\n    color: rgb(59, 59, 59);\n}\n\ninput, select, fieldset button{\n    font-family: 'Roboto', sans-serif;\n    font-weight: 500;\n    font-size: 15px;\n    padding: 7px;\n    margin-top: 5px;\n    margin-bottom: 40px;\n}\n\ninput[type="date"] {\n    padding: 15px 7px 15px 7px;\n}\n\ninput:focus {\n    outline: none;\n    border: 2px solid rgb(17, 77, 156);\n}\n\ninput:invalid {\n    border: 2px solid red;\n}\n\nlabel span {\n    color: rgb(21, 150, 255);\n    font-family: 'Montserrat', sans-serif;\n}\n\nfieldset div {\n    display: flex;\n    justify-content: center;\n    gap: 60px;\n}\n\nfieldset button {\n    margin-top: -15px;\n    width: 150px;\n    padding: 10px;\n    border-radius: 8px;\n    font-size: 20px;\n    transition: background-color 0.3s ease;\n}\n\n.add-task-button {\n    background-color: rgb(29, 100, 255);\n    color: white;\n    border: none;\n}\n\n.add-task-button:hover {\n    background-color: rgb(0, 38, 255);\n}\n\n.cancel-task-button {\n    background-color: transparent;\n    border: solid 1px gray;\n}\n\n.cancel-task-button:hover {\n    border: solid 1px rgb(0, 36, 196);\n    color: rgb(0, 36, 196);\n}\n\n.overlay {\n    display: none;\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.5);\n    z-index: 1;\n}\n\n/* Checkbox Styling */\n\n.checkbox-wrapper-15 .cbx {\n    -webkit-user-select: none;\n    user-select: none;\n    -webkit-tap-highlight-color: transparent;\n    cursor: pointer;\n  }\n.checkbox-wrapper-15 .cbx span {\ndisplay: inline-block;\nvertical-align: middle;\ntransform: translate3d(0, 0, 0);\n}\n.checkbox-wrapper-15 .cbx span:first-child {\nposition: relative;\nwidth: 24px;\nheight: 24px;\nborder-radius: 50%;\ntransform: scale(1);\nvertical-align: middle;\nborder: 1px solid rgb(21, 150, 255);\ntransition: all 0.2s ease;\n}\n.checkbox-wrapper-15 .cbx span:first-child svg {\nposition: absolute;\nz-index: 1;\ntop: 8px;\nleft: 6px;\nfill: none;\nstroke: white;\nstroke-width: 2;\nstroke-linecap: round;\nstroke-linejoin: round;\nstroke-dasharray: 16px;\nstroke-dashoffset: 16px;\ntransition: all 0.3s ease;\ntransition-delay: 0.1s;\ntransform: translate3d(0, 0, 0);\n}\n.checkbox-wrapper-15 .cbx span:first-child:before {\ncontent: "";\nwidth: 100%;\nheight: 100%;\nbackground: rgb(0, 110, 255);\ndisplay: block;\ntransform: scale(0);\nopacity: 1;\nborder-radius: 50%;\ntransition-delay: 0.2s;\n}\n.checkbox-wrapper-15 .cbx span:last-child {\nmargin-left: 8px;\n}\n.checkbox-wrapper-15 .cbx span:last-child:after {\ncontent: "";\nposition: absolute;\ntop: 8px;\nleft: 0;\nheight: 1px;\nwidth: 100%;\nbackground: #B9B8C3;\ntransform-origin: 0 0;\ntransform: scaleX(0);\n}\n.checkbox-wrapper-15 .cbx:hover span:first-child {\nborder-color:rgb(0, 110, 255);\n}\n\n.checkbox-wrapper-15 .inp-cbx:checked + .cbx span:first-child {\nborder-color:rgb(0, 110, 255);\nbackground:rgb(0, 110, 255);\nanimation: check-15 0.6s ease;\n}\n.checkbox-wrapper-15 .inp-cbx:checked + .cbx span:first-child svg {\nstroke-dashoffset: 0;\n}\n.checkbox-wrapper-15 .inp-cbx:checked + .cbx span:first-child:before {\ntransform: scale(2.2);\nopacity: 0;\ntransition: all 0.6s ease;\n}\n.checkbox-wrapper-15 .inp-cbx:checked + .cbx span:last-child {\ncolor: #B9B8C3;\ntransition: all 0.3s ease;\n}\n.checkbox-wrapper-15 .inp-cbx:checked + .cbx span:last-child:after {\ntransform: scaleX(1);\ntransition: all 0.3s ease;\n}\n\n@keyframes check-15 {\n50% {\n    transform: scale(1.2);\n}\n}`,""]);const u=l},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,a,o){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var d=this[s][0];null!=d&&(i[d]=!0)}for(var c=0;c<n.length;c++){var l=[].concat(n[c]);r&&i[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),e.push(l))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var o={},i=[],s=0;s<n.length;s++){var d=n[s],c=r.base?d[0]+r.base:d[0],l=o[c]||0,p="".concat(c," ").concat(l);o[c]=l+1;var u=t(p),f={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var b=a(f,r);r.byIndex=s,e.splice(s,0,{identifier:p,updater:b,references:1})}i.push(p)}return i}function a(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,a){var o=r(n=n||[],a=a||{});return function(n){n=n||[];for(var i=0;i<o.length;i++){var s=t(o[i]);e[s].references--}for(var d=r(n,a),c=0;c<o.length;c++){var l=t(o[c]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}o=d}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},11:(n,e,t)=>{n.exports=t.p+"173b1cf39774b08b8bb2.png"}},e={};function t(r){var a=e[r];if(void 0!==a)return a.exports;var o=e[r]={id:r,exports:{}};return n[r](o,o.exports,t),o.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");if(r.length)for(var a=r.length-1;a>-1&&!n;)n=r[a--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var n=t(379),e=t.n(n),r=t(795),a=t.n(r),o=t(569),i=t.n(o),s=t(565),d=t.n(s),c=t(216),l=t.n(c),p=t(589),u=t.n(p),f=t(28),b={};b.styleTagTransform=u(),b.setAttributes=d(),b.insert=i().bind(null,"head"),b.domAPI=a(),b.insertStyleElement=l(),e()(f.Z,b),f.Z&&f.Z.locals&&f.Z.locals;class h{constructor(n,e,t,r,a){this.taskName=n,this.description=e,this.dueDate=t,this.priority=r,this.checked=!1,this.project=a}}const g=[];function m(){let n=document.getElementById("add-task-form"),e=document.getElementById("overlay");n.classList.add("open-add-task-form"),e.style.display="block"}function x(){let n=document.getElementById("add-task-form"),e=document.getElementById("overlay");n.classList.remove("open-add-task-form"),e.style.display="none"}function v(n){n.preventDefault();let e=document.getElementById("add-task-form");const t=document.getElementById("task-name").value,r=document.getElementById("description").value,a=document.getElementById("due-date").value,o=document.getElementById("priority").value,i=document.getElementById("project").value,s=new h(t,r,a,o,i);g.push(s),e.reset(),x(),function(n){document.querySelector(".task-list").innerHTML="",n.forEach((n=>function(n){const e=document.createElement("div");e.classList.add("task"),e.id=`task-${n.taskName}`,e.innerHTML=`\n        <div class="checkbox-wrapper-15">\n            <input class="inp-cbx" id="${n.taskName}" type="checkbox" style="display: none;"/>\n            <label class="cbx" for="${n.taskName}">\n                <span>\n                    <svg width="12px" height="9px" viewbox="0 0 12 9">\n                        <polyline points="1 5 4 8 11 1"></polyline>\n                    </svg>\n                </span>\n                <span>${n.taskName}</span>\n            </label>\n        </div>\n        <div class="task-right-side">\n            <div class="task-date">${n.dueDate}</div>\n            <button class="details">DETAILS</button>\n            <button class="edit-task">\n                <i class="fa-regular fa-pen-to-square"></i>\n            </button>\n            <button class="delete-task">\n                <i class="fa-regular fa-trash-can"></i>\n            </button>\n        </div>\n    `,console.log(n.taskName),document.querySelector(".task-list").appendChild(e)}(n)))}(g)}document.addEventListener("DOMContentLoaded",(function(){!function(){const n=document.querySelector(".main-right"),e=document.createElement("div");e.id="overlay",e.className="overlay",n.innerHTML='\n        <button class="add-task">\n            <i class="fa-solid fa-plus fa-beat-fade"></i>\n            Add Task\n        </button>\n        <div class="task-list"></div>\n    ',n.insertAdjacentHTML("beforeend",'\n        <form class="add-task-form" id="add-task-form">\n            <h1>Add Task</h1>\n            <fieldset>\n                <label for="task-name">Task Name</label>\n                <input type="text" id="task-name" name="task-name" autocomplete="off" required>\n\n                <label for="description">Description</label>\n                <input type="text" id="description" name="description" autocomplete="off">\n\n                <label for="due-date">Due Date</label>\n                <input type="date" id="due-date" name="due-date">\n\n                <label for="priority">Priority</label>\n                <select id="priority" name="priority">\n                    <option value="low">Low</option>\n                    <option value="medium" selected>Medium</option>\n                    <option value="high">High</option>\n                </select>\n\n                <label for="project">Project</label>\n                <select id="project" name="project">\n                    <option value="general">General</option>\n                </select>\n\n                <div>\n                    <button type="submit" class="add-task-button">Add Task</button>\n                    <button type="button" class="cancel-task-button">Cancel</button>\n                </div>\n            </fieldset>\n        </form>\n    '),n.appendChild(e)}(),document.querySelector(".add-task").addEventListener("click",m),document.querySelector(".cancel-task-button").addEventListener("click",x),document.getElementById("add-task-form").addEventListener("submit",v)}))})()})();