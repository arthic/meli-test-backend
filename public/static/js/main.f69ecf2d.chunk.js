(this["webpackJsonpheroes-app"]=this["webpackJsonpheroes-app"]||[]).push([[0],{22:function(e,t,a){e.exports=a(47)},46:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(19),l=a.n(r),i=a(6),s=a(7),o=a(1),u=Object(n.createContext)(),m=function(){var e=(Object(n.useContext)(u).categories||null).categories;return c.a.createElement(c.a.Fragment,null,e.length>1&&c.a.createElement("p",{className:"global-category"}," ",e[0]," > ",e[1]," > ",e[2]," > ",c.a.createElement("span",null,e[3])))},p="[meli] categories",d=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],r=t[1],l=Object(n.useContext)(u).dispatch,s=Object(o.g)(),m=function(e){if(r(e.target.value),"Enter"===e.key){var t=encodeURI(a);s.replace("/items?search=".concat(t))}};return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"search-container"},c.a.createElement("div",{onClick:function(){l({type:p,payload:{categories:[]}}),s.replace("/")}},c.a.createElement("img",{src:"https://res.cloudinary.com/dyiw5vcuq/image/upload/v1653881931/meli-test/Logo_ML_2x.png_rnraor.png",alt:"Mercado Libre Icon"})),c.a.createElement("div",{className:"container-search-box"},c.a.createElement("input",{name:"search",type:"text",placeholder:"Nunca dejes de buscar",value:a,onChange:m,onKeyPress:m}),c.a.createElement("img",{src:"https://res.cloudinary.com/dyiw5vcuq/image/upload/v1653881931/meli-test/ic_Search_2x.png_ne97hm.png",alt:"Mercado Libre Icon",onClick:function(){var e=encodeURI(a);s.replace("/items?search=".concat(e))}}))))},E=a(21),h=a.n(E),g=a(10),v=a.n(g),f=a(15),b=function(){var e=Object(f.a)(v.a.mark((function e(t){var a,n,c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=encodeURI(t),console.log(a),n="https://meli-test-backend.herokuapp.com/api/items?q=\u200b".concat(a),e.next=6,fetch(n);case 6:return c=e.sent,console.log(c),e.abrupt("return",c);case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(f.a)(v.a.mark((function e(t){var a,n,c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=encodeURI(t),n="https://meli-test-backend.herokuapp.com/api/items/".concat(a),e.next=5,fetch(n);case 5:return c=e.sent,e.abrupt("return",c);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),j=function(e){var t=e.details,a=Object(o.g)();return c.a.createElement("div",{className:"result-item",onClick:function(){a.replace("/items/".concat(t.id))}},c.a.createElement("div",{className:"row-one"},c.a.createElement("div",null,c.a.createElement("img",{src:t.picture,alt:t.title})),c.a.createElement("div",{className:"item-result-description"},c.a.createElement("div",{className:"container-price"},c.a.createElement("p",null,"$ ",t.price.amount,c.a.createElement("sub",null,t.price.decimals)),c.a.createElement("div",null,t.free_shipping&&c.a.createElement("img",{src:"https://res.cloudinary.com/dyiw5vcuq/image/upload/v1653881931/meli-test/ic_shipping_2x.png_ja5ccg.png",alt:"shipping"}))),c.a.createElement("div",{className:"item-result-description-facs"},c.a.createElement("p",null,t.title)))),c.a.createElement("div",{className:"item-result-city"},c.a.createElement("p",null,t.state_name)))},O=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],r=t[1],l=Object(n.useContext)(u).dispatch,s=Object(o.h)(),m=h.a.parse(s.search).search;return Object(n.useEffect)((function(){b(m).then((function(e){return e.json()})).then((function(e){r(e.results),l({type:p,payload:e.categories})})).catch((function(e){return console.log("Error al consultar MELI :(",e)}))}),[m,l]),c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"container-result"},a.map((function(e){return c.a.createElement(j,{details:e,key:e.id})}))))},N=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],r=t[1],l=Object(o.i)().id;return Object(n.useEffect)((function(){l&&y(l).then((function(e){return e.json()})).then((function(e){r(e)})).catch((function(e){return console.log("Error al consultar MELI :(",e)}))}),[l]),c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"item-details"},c.a.createElement("div",{className:"item-details-main"},c.a.createElement("img",{src:a.picture,alt:"mac"}),c.a.createElement("div",null,"new"===a.condition?c.a.createElement("p",{className:"total-sales"},"Nuevo - ",a.sold_quantity," vendidos"):c.a.createElement("p",{className:"total-sales"},a.sold_quantity," vendidos"),a.item&&c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null,a.item.title),c.a.createElement("p",{className:"item-details-price"},"$ ",a.item.price.amount,c.a.createElement("sub",null,a.item.price.decimals))),c.a.createElement("a",{href:a.buy_link,target:"_blank",rel:"noopener noreferrer"},c.a.createElement("button",{type:"button"},"Comprar")))),c.a.createElement("div",{className:"item-details-description"},c.a.createElement("h2",null,"Descripci\xf3n del producto"),c.a.createElement("p",null,a.description))))},x=function(){return c.a.createElement("h1",{style:{textAlign:"center",marginTop:"2rem"}},"Bienvenido a MELI Test ",c.a.createElement("span",{role:"img","aria-label":"donut"},"\ud83d\udc9b"))},k=function(){return c.a.createElement(s.a,null,c.a.createElement(c.a.Fragment,null,c.a.createElement(d,null),c.a.createElement("div",{className:"meli-container"},c.a.createElement(m,null),c.a.createElement(o.d,null,c.a.createElement(o.b,{exact:!0,path:"/",component:x}),c.a.createElement(o.b,{exact:!0,path:"/items",component:O}),c.a.createElement(o.b,{exact:!0,path:"/items/:id",component:N}),c.a.createElement(o.a,{to:"/"})))))},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return{categories:t.payload};default:return e}},w=function(){return{categories:[]}},I=function(){var e=Object(n.useReducer)(_,{},w),t=Object(i.a)(e,2),a=t[0],r=t[1];return c.a.createElement(u.Provider,{value:{categories:a,dispatch:r}},c.a.createElement(k,null))};a(46);l.a.render(c.a.createElement(I,null),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.f69ecf2d.chunk.js.map