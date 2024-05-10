import Router from './vanila-router'
import routes from "@/router/index.js";
import './src/css/index.css'

const router = new Router({routes})
//
// (function(d, s) {
//     var j, h = d.getElementsByTagName(s)[0],
//         f = d.createDocumentFragment(),
//         add = function(u, i) {
//             if (d.getElementById(i)) {
//                 return;
//             }
//             j = d.createElement(s);
//             j.src = u;
//             i && (j.id = i);
//             f.appendChild(j);
//         };
//
//     add('/myjs.js');
//     h.parentNode.insertBefore(f, h);
// }(document, 'script'));


// function add ({id,src}) {
//   // const fragment = new DocumentFragment()
//   //   console.log(fragment)
//   //            const  tag = fragment.createElement('div');
//   //           // tag.src = u;
//   //
//   //           // tag.appendChild(src);
//   //
//   //           document.body.append(fragment)
//
//     const s = document.createElement("script")
//     s.innerText = src
//     document.body.append(s)
// };
//
//
// add({id:'hello', src:` console.log("hello")`})

// chrome.runtime.sendMessage({
//         action: "content.js inited"
//     }, e=>{
//         if (!e)
//             return;
//         const t = e.data;
//         t.css.length && i({
//             type: "css",
//             content: t.css.join(`
// `)
//         }),
//             Promise.allSettled(t.libs.map(s=>i({
//                 url: s
//             }))).then(()=>{
//                     d(()=>{
//                             for (const s of t.js)
//                                 i({
//                                     type: "js",
//                                     target: document.body,
//                                     content: s
//                                 })
//                         }
//                     )
//                 }
//             )
//     }
// );
// function d(e) {
//     const t = window.document;
//     t.readyState !== "complete" && t.readyState !== "interactive" ? t.onreadystatechange = ()=>{
//             t.readyState === "interactive" && e()
//         }
//         : e()
// }
// function l(e) {
//     return Array.from(document.querySelectorAll("script, link")).map(s=>s.src || s.href).includes(e)
// }
// function i({url: e="", content: t="", type: s="", target: c=document.head}) {
//     return new Promise((a,o)=>{
//             let n = null;
//             const r = e ? new URL(e).pathname.split(".").pop().split("?")[0] : s;
//             if (e && l(e)) {
//                 a();
//                 return
//             }
//             if (r === "js")
//                 n = document.createElement("script"),
//                     n.async = !1,
//                 e && n.setAttribute("src", e),
//                 t && (n.innerHTML = t);
//             else if (r === "css" && e)
//                 n = document.createElement("link"),
//                     n.type = "text/css",
//                     n.rel = "stylesheet",
//                     n.setAttribute("href", e);
//             else if (s === "css" && t)
//                 n = document.createElement("style"),
//                     n.appendChild(document.createTextNode(t));
//             else {
//                 o("Unsupported", e, t, s, c);
//                 return
//             }
//             n.setAttribute("data-source", "User JavaScript and CSS extension"),
//                 n.onload = ()=>a(),
//                 c.appendChild(n)
//         }
//     )
// }
