(this["webpackJsonppet-finder-react"]=this["webpackJsonppet-finder-react"]||[]).push([[0],{18:function(e,t,n){e.exports={petImage:"PetCard_petImage__IT8ha",cardHeader:"PetCard_cardHeader__wRx2B",card:"PetCard_card__1eoGb"}},53:function(e,t,n){},54:function(e,t,n){},81:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(11),i=n.n(r),s=(n(53),n(54),n(16)),o=n(5),d=n(19),j=n(22),h=n.n(j),l=n(94),p=n(18),u=n(3),m=function(e){return Object(u.jsx)(s.b,{to:{pathname:"/pet/".concat(e.index),state:{animal:e.animal}},children:Object(u.jsxs)(l.a,{className:p.card,children:[Object(u.jsx)("img",{src:e.image,alt:e.name,className:p.petImage}),Object(u.jsxs)(l.a.Content,{children:[Object(u.jsx)(l.a.Header,{className:p.cardHeader,children:e.name}),Object(u.jsx)(l.a.Description,{children:e.description})]})]})})},b={animals:[]},f=function(){var e=Object(a.useState)("Fake Token"),t=Object(d.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(b),i=Object(d.a)(r,2),s=i[0],o=i[1],j=Object(a.useState)(!0),p=Object(d.a)(j,2),f=p[0],O=p[1];return Object(a.useEffect)((function(){h.a.post("https://api.petfinder.com/v2/oauth2/token",{grant_type:"client_credentials",client_id:"",client_secret:""}).then((function(e){c(e.data.access_token),O(!1)})).catch((function(e){console.error("There was an error fetching the token!",e)}))}),[]),Object(a.useEffect)((function(){"Fake Token"!==n&&h.a.get("https://api.petfinder.com/v2/animals?type=rabbit&location=Raleigh, NC&page=1",{headers:{Authorization:"Bearer ".concat(n)}}).then((function(e){o(e.data),O(!1)})).catch((function(e){console.log("There was an error getting the pets data!",e)}))}),[n]),!f&&s.animals.length>0?Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(l.a.Group,{centered:!0,children:s.animals.map((function(e,t){return Object(u.jsx)(m,{index:t,name:e.name,image:e.photos[0].medium,description:e.description,animal:e})}))})}):Object(u.jsx)("h1",{children:"Loading..."})},O=function(){var e=Object(o.e)().state.animal;return Object(u.jsx)("div",{children:e.name})};n(80);var g=function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)(s.a,{children:[Object(u.jsx)(o.a,{exact:!0,path:"/",component:f}),Object(u.jsx)(o.a,{path:"/pet/:petID",component:O})]})})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,95)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))};i.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(g,{})}),document.getElementById("root")),x()}},[[81,1,2]]]);
//# sourceMappingURL=main.c5f8cc61.chunk.js.map