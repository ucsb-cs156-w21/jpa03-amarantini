(this["webpackJsonpdemo-spring-react-app"]=this["webpackJsonpdemo-spring-react-app"]||[]).push([[0],{42:function(e,t,a){e.exports=a.p+"static/media/loading.c5590569.svg"},52:function(e,t,a){e.exports=a.p+"static/media/checkbox.7cbb5a76.svg"},53:function(e,t,a){e.exports=a.p+"static/media/checkbox-checked.6c1dc7cb.svg"},57:function(e,t,a){e.exports=a(75)},62:function(e,t,a){},63:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(19),o=a.n(c),l=(a(62),a(63),a(42)),i=a.n(l),u=function(){return r.a.createElement("div",{className:"spinner"},r.a.createElement("img",{src:i.a,alt:"Loading"}))},m=a(82),s=a(83),d=a(32),p=a(7),f=a(77),E=function(){var e=Object(p.b)().loginWithRedirect;return r.a.createElement(f.a,{onClick:e,variant:"primary"},"Log In")},h=function(){var e=Object(p.b)().logout;return r.a.createElement(f.a,{variant:"secondary",onClick:function(){return e({returnTo:window.location.origin})}},"Log Out")},b=function(){var e=Object(p.b)().isAuthenticated;return r.a.createElement(r.a.Fragment,null,e?r.a.createElement(h,null):r.a.createElement(E,null))};var g=function(){return r.a.createElement(m.a,{bg:"dark",variant:"dark"},r.a.createElement(d.LinkContainer,{to:""},r.a.createElement(m.a.Brand,{"data-testid":"brand"},"Demo Spring React App")),r.a.createElement(s.a,null,r.a.createElement(d.LinkContainer,{to:"/todos"},r.a.createElement(s.a.Link,null,"Todos")),r.a.createElement(d.LinkContainer,{to:"/profile"},r.a.createElement(s.a.Link,null,"Profile"))),r.a.createElement(m.a.Collapse,{className:"justify-content-end"},r.a.createElement(b,null)))},v=a(79),k=a(5),x=function(){return r.a.createElement("footer",{className:"bg-light p-3 text-center"},"This is a demo of a minimal React frontend + Spring Boot backend app. Check out the source code on"," ",r.a.createElement("a",{href:"https://github.com/ucsb-cs156-f20/demo-spring-nextjs-app"},"GitHub"),"!")},j=a(78),O=function(){return r.a.createElement(j.a,null,r.a.createElement("h1",null,"This is 127.0.0.1 (aka home)"),r.a.createElement("div",{className:"text-left"},r.a.createElement("p",null,"Welcome to the Demo Spring React App!"),r.a.createElement("p",null,"This app can hopefully help you understand how to use React with Spring in order to create a functional web application. This app is primarily built using the following:"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/facebook/create-react-app"},"Create React App")," ","- used for creating the React frontend from scratch"),r.a.createElement("li",null,r.a.createElement("a",{href:"https://start.spring.io/"},"Spring Boot Initializer")," - used for creating the Spring Boot backend"))))},y=a(80),w=a(50),S=a(49),T=a.n(S),C=function(){var e=Object(p.b)().user,t=e.name,a=e.picture,n=e.email;return r.a.createElement(v.a,{className:"mb-5"},r.a.createElement(y.a,{className:"align-items-center profile-header mb-5 text-center text-md-left"},r.a.createElement(w.a,{md:2},r.a.createElement("img",{src:a,alt:"Profile",className:"rounded-circle img-fluid profile-picture mb-3 mb-md-0"})),r.a.createElement(w.a,{md:!0},r.a.createElement("h2",null,t),r.a.createElement("p",{className:"lead text-muted"},n))),r.a.createElement(y.a,{className:"text-left"},r.a.createElement(T.a,{src:e})))},N=a(56),D=function(e){var t=e.component,a=Object(N.a)(e,["component"]);return r.a.createElement(k.d,Object.assign({component:Object(p.c)(t,{onRedirecting:function(){return r.a.createElement(u,null)}})},a))},L=a(13),R=a.n(L),B=a(20),A=a(55),J=a(84),I=a(22),P=a(81),W=function(e){var t=e.addTask,a=Object(n.useState)(""),c=Object(I.a)(a,2),o=c[0],l=c[1];return r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var a=o.trim();a&&t(a),l("")}},r.a.createElement(v.a,{fluid:!0},r.a.createElement(y.a,null,r.a.createElement(w.a,{xs:11,style:{padding:0}},r.a.createElement(P.a.Control,{type:"text",placeholder:"add todo",margin:"normal",onChange:function(e){l(e.target.value)},value:o})),r.a.createElement(w.a,{xs:1,style:{padding:0}},r.a.createElement(f.a,{type:"submit"},"Submit")))))},F=a(12),q=a(52),z=a.n(q),G=a(53),H=a.n(G),M=function(e){var t=e.item,a=(e.index,e.toggle);return r.a.createElement("button",{style:{background:"none",border:"none"},onClick:function(e){e.preventDefault();var n=Object(F.a)(Object(F.a)({},t),{},{done:!t.done});a(n,t.id)}},r.a.createElement("img",{src:t.done?H.a:z.a,alt:"checkbox"}))},U=function(e){var t=e.item,a=e.update,c=Object(n.useState)(!1),o=Object(I.a)(c,2),l=o[0],i=o[1],u=Object(n.useState)(t.value),m=Object(I.a)(u,2),s=m[0],d=m[1],p=l?"Done":"Edit",E=!l&&t.done?"line-through":"none",h=function(e){if(e.preventDefault(),0!==s.trim().length){if(l){var n=Object(F.a)(Object(F.a)({},t),{},{value:s});a(n,n.id)}i(!l)}};return r.a.createElement(P.a,{inline:!0,onSubmit:h},r.a.createElement(P.a.Control,{style:{width:"90%",textDecoration:E},type:"text",placeholder:"todo name",readOnly:!l,plaintext:!l,value:s,onChange:function(e){return d(e.target.value)}}),r.a.createElement(f.a,{onClick:h},p))};function K(e){var t=e.item,a=(e.index,e.updateTodo),n=e.deleteTodo,c=t.done?"#ddd":"#fff";return r.a.createElement(J.a.Item,{style:{backgroundColor:c}},r.a.createElement(y.a,null,r.a.createElement(w.a,{md:1},r.a.createElement(M,{item:t,toggle:a})),r.a.createElement(w.a,{md:10},r.a.createElement(U,{update:a,item:t})),r.a.createElement(w.a,{md:1},r.a.createElement(f.a,{className:"btn-danger",onClick:function(e){return n(t.id)}},"Delete"))))}function Z(e){var t=e.name;return r.a.createElement("h1",{className:"display-2 text-center"},t,"'s todo list")}var $=a(54),_=a.n($);function Q(e,t,a){return V.apply(this,arguments)}function V(){return(V=Object(B.a)(R.a.mark((function e(t,a,n){var r,c;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a();case 2:return r=e.sent,e.next=5,_()(t,Object(F.a)(Object(F.a)({},n),{},{headers:Object(F.a)(Object(F.a)({},null===n||void 0===n?void 0:n.headers),{},{Authorization:"Bearer ".concat(r)})}));case 5:if(!((c=e.sent).status>=400&&c.status<600)){e.next=8;break}throw new Error(c.error_description);case 8:if(!(null===n||void 0===n?void 0:n.noJSON)){e.next=10;break}return e.abrupt("return",c);case 10:return e.abrupt("return",c.json());case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var X=function(){var e=Object(p.b)(),t=e.user,a=e.getAccessTokenSilently,n=Object(A.a)(["/api/todos",a],Q),c=n.data,o=n.error,l=n.mutate;if(o)return r.a.createElement("h1",null,"We encountered an error; please reload the page and try again.");if(!c)return r.a.createElement(u,null);var i=function(){var e=Object(B.a)(R.a.mark((function e(t,n){return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Q("/api/todos/".concat(n),a,{method:"PUT",headers:{"content-type":"application/json"},body:JSON.stringify(t)});case 2:return e.next=4,l();case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),m=function(){var e=Object(B.a)(R.a.mark((function e(t){return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Q("/api/todos/".concat(t),a,{method:"DELETE",headers:{"content-type":"application/json"},noJSON:!0});case 2:return e.next=4,l();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s=function(){var e=Object(B.a)(R.a.mark((function e(t){return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Q("/api/todos/",a,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({value:t,done:!1})});case 2:return e.next=4,l();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=c.map((function(e,t){return r.a.createElement(K,{key:t,item:e,index:t,updateTodo:i,deleteTodo:m})}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(Z,{name:t.name}),r.a.createElement(W,{addTask:s}),r.a.createElement(J.a,null," ",d," "))};var Y=function(){return Object(p.b)().isLoading?r.a.createElement(u,null):r.a.createElement("div",{className:"App"},r.a.createElement(g,null),r.a.createElement(v.a,{className:"flex-grow-1 mt-5"},r.a.createElement(k.g,null,r.a.createElement(k.d,{path:"/",exact:!0,component:O}),r.a.createElement(D,{path:"/todos",component:X}),r.a.createElement(D,{path:"/profile",component:C}))),r.a.createElement(x,null))},ee=function(e){var t=e.children,a=Object(k.k)();return r.a.createElement(p.a,{domain:"ucsb-cs156-qiru.us.auth0.com",clientId:"THcgvoPu6jTK2cGkZFbhca3ruFMDE1pj",redirectUri:window.location.origin,onRedirectCallback:function(e){a.push((null===e||void 0===e?void 0:e.returnTo)||window.location.pathname)},audience:"https://jpa03-qiru.herokuapp.com"},t)},te=a(17);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(74);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(te.BrowserRouter,null,r.a.createElement(ee,null,r.a.createElement(Y,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[57,1,2]]]);
//# sourceMappingURL=main.219fec5e.chunk.js.map