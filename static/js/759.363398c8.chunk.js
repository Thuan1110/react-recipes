"use strict";(self.webpackChunkreact_recipes=self.webpackChunkreact_recipes||[]).push([[759],{515:function(n,e,t){t.d(e,{Z:function(){return o}});t(791);var i,r=t(168),c=t(444).ZP.div(i||(i=(0,r.Z)(["\n  border: 16px solid #f3f3f3;\n  border-radius: 50%;\n  border-top: 16px solid #3498db;\n  width: 120px;\n  height: 120px;\n  animation: spin 2s linear infinite;\n  margin: 3rem auto;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  @keyframes spin {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n"]))),s=t(184),o=function(){return(0,s.jsx)(c,{})}},759:function(n,e,t){t.r(e),t.d(e,{default:function(){return _}});var i,r,c,s,o,a,u=t(791),d=t(324),l=t(14),f=t(856),h=t(434),m=t(871),x=t(355),p=t(168),g=t(504),j=t(444),v=j.ZP.li(i||(i=(0,p.Z)(["\n  img {\n    width: 16rem;\n    height: 150px;\n    object-fit: cover;\n    border-radius: inherit;\n  }\n\n  p {\n    font-size: 1rem;\n    font-weight: 500;\n  }\n"]))),Z=(0,j.ZP)(g.OL)(r||(r=(0,p.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n  width: 4.5rem;\n  height: 4.5rem;\n  text-decoration: none;\n  color: white;\n  background-color: #494949;\n  margin: 1rem;\n  cursor: pointer;\n  font-size: 0.8rem;\n\n  svg {\n    font-size: 1.2rem;\n  }\n\n  &.active {\n    background-color: #f27221;\n    color: white;\n  }\n"]))),y=j.ZP.div(c||(c=(0,p.Z)(["\n  ul {\n    width: 100%;\n    list-style: none;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    padding: 0;\n  }\n"]))),b=j.ZP.div(s||(s=(0,p.Z)(["\n  display: flex;\n  justify-content: center;\n  margin: 2rem 0;\n"]))),w=t(184),k=function(){var n=(0,m.UO)();console.log(n.type);var e=(0,h.I0)();return(0,u.useEffect)((function(){e((0,x.By)(n.type))}),[e,n.type]),(0,w.jsxs)(b,{children:[(0,w.jsxs)(Z,{to:"/home/cuisine/american",children:[(0,w.jsx)(d.Egf,{}),"American"]}),(0,w.jsxs)(Z,{to:"/home/cuisine/vietnamese",children:[(0,w.jsx)(d.v7m,{}),"Vietnamese"]}),(0,w.jsxs)(Z,{to:"/home/cuisine/thai",children:[(0,w.jsx)(f.wuK,{}),"Thai"]}),(0,w.jsxs)(Z,{to:"/home/cuisine/chinese",children:[(0,w.jsx)(l.fHv,{}),"Chinese"]})]})},P=j.ZP.div(o||(o=(0,p.Z)(["\n  /* margin: 0.4rem; */\n  padding: 1vh;\n  border-radius: 6px;\n  /* background-color: aliceblue; */\n  max-width: fit-content;\n  height: 15rem;\n"]))),C=function(n){return(0,w.jsx)(P,{onClick:n.onClick,children:n.children})},z=function(n){var e=n.title,t=n.img,i=n.id,r=(0,m.s0)();return(0,w.jsx)(v,{children:(0,w.jsxs)(C,{onClick:function(){r("/detail/".concat(i))},children:[(0,w.jsx)("img",{src:t,alt:""}),(0,w.jsx)("p",{children:e})]})})},E=t(515),I=function(){var n=(0,h.I0)();(0,u.useEffect)((function(){n((0,x.ec)())}),[n]);var e=(0,h.v9)((function(n){return n.recipes.recipesList})),t=(0,h.v9)((function(n){return n.recipes.isLoading}));return(0,w.jsxs)(y,{children:[t&&(0,w.jsx)(E.Z,{}),!t&&(0,w.jsx)("ul",{children:e.length>0&&e.map((function(n){return(0,w.jsx)(z,{title:n.title,img:n.image,id:n.id},n.id)}))})]})},L=t(152),T=function(n,e){var t=(0,u.useState)(n),i=(0,L.Z)(t,2),r=i[0],c=i[1];return(0,u.useEffect)((function(){var t=setTimeout((function(){c(n)}),e);return function(){clearTimeout(t)}}),[n,e]),r},O=j.ZP.div(a||(a=(0,p.Z)(["\n  width: 100%;\n  text-align: center;\n\n  input {\n    width: 40%;\n    height: 3rem;\n    font-size: 24px;\n    line-height: 30px;\n    border-radius: 5px;\n    padding: 1rem;\n  }\n\n  input::placeholder {\n    opacity: 0.4;\n    font-size: 1rem;\n  }\n"]))),S=function(){var n=(0,u.useState)(""),e=(0,L.Z)(n,2),t=e[0],i=e[1],r=(0,h.I0)(),c=(0,m.s0)(),s=T(t,1e3);return(0,u.useEffect)((function(){s&&r((0,x.s8)(s))}),[s,r]),(0,w.jsx)(O,{children:(0,w.jsx)("input",{placeholder:"Please enter a food name",type:"text",value:t,onChange:function(n){var e;i(n.target.value),0===(e=n.target.value).trim().length?c("/"):c({search:"?".concat((0,g.fW)({name:e}))})}})})},_=function(){return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(S,{}),(0,w.jsx)(k,{}),(0,w.jsx)(I,{})]})}}}]);
//# sourceMappingURL=759.363398c8.chunk.js.map