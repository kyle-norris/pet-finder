(this["webpackJsonppet-finder-react"]=this["webpackJsonppet-finder-react"]||[]).push([[0],{112:function(e,t,a){},113:function(e,t,a){},132:function(e,t,a){},141:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(33),r=a.n(i),s=(a(112),a(113),a(52)),o=a(9),j=a(67),l=a(73),d=a.n(l),m=(a(132),a(155)),h=a(66),p=a(4),b=function(e){return Object(p.jsx)(s.b,{to:{pathname:"/pet/".concat(e.index),state:{animal:e.animal}},children:Object(p.jsxs)(m.a,{className:h.card,children:[Object(p.jsx)("img",{src:e.animal.photos[0].medium,alt:e.animal.name,className:h.petImage}),Object(p.jsxs)(m.a.Content,{children:[Object(p.jsx)(m.a.Header,{className:h.cardHeader,children:e.animal.name}),Object(p.jsx)(m.a.Description,{children:e.animal.description})]})]})})},u=function(e){return Object(p.jsx)(m.a.Group,{centered:!0,children:e.animals.map((function(e,t){return Object(p.jsx)(m.a,{children:Object(p.jsx)(b,{index:t,animal:e})})}))})},O=a(154),x={animals:[]},f=function(){var e=Object(n.useState)("Fake Token"),t=Object(j.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)(x),r=Object(j.a)(i,2),s=r[0],o=r[1],l=Object(n.useState)(!0),m=Object(j.a)(l,2),h=m[0],b=m[1];return Object(n.useEffect)((function(){d.a.post("https://api.petfinder.com/v2/oauth2/token",{grant_type:"client_credentials",client_id:"",client_secret:""}).then((function(e){c(e.data.access_token),b(!1)})).catch((function(e){console.error("There was an error fetching the token!",e)}))}),[]),Object(n.useEffect)((function(){"Fake Token"!==a&&d.a.get("https://api.petfinder.com/v2/animals?type=rabbit&location=Raleigh, NC&page=1",{headers:{Authorization:"Bearer ".concat(a)}}).then((function(e){o(e.data),b(!1)})).catch((function(e){console.log("There was an error getting the pets data!",e)}))}),[a]),!h&&s.animals.length>0?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(O.a,{hidden:!0}),Object(p.jsx)(u,{animals:s.animals})]}):Object(p.jsx)("h1",{children:"Loading..."})},g=a(156),_=a(157),k=a(97),C=a(98),I=a(78),v=function(){var e=Object(o.e)().state.animal;return Object(p.jsxs)(g.a,{vertical:!0,textAlign:"center",className:I.container,children:[Object(p.jsx)(_.a,{as:"h1",children:e.name}),Object(p.jsx)(k.a,{src:e.photos[0].large,className:I.mainImage,alt:e.name,centered:!0}),Object(p.jsxs)(C.a.Group,{children:[e.species&&Object(p.jsx)(C.a,{children:e.species}),e.colors.primary&&Object(p.jsx)(C.a,{children:e.colors.primary})]})]})};a(140);var F=function(){return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)(s.a,{children:[Object(p.jsx)(o.a,{exact:!0,path:"/",component:f}),Object(p.jsx)(o.a,{path:"/pet/:petID",component:v})]})})},P=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,158)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),i(e),r(e)}))};r.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(F,{})}),document.getElementById("root")),P()},66:function(e,t,a){e.exports={petImage:"PetCard_petImage__IT8ha",cardHeader:"PetCard_cardHeader__wRx2B",card:"PetCard_card__1eoGb"}},78:function(e,t,a){e.exports={imageContainer:"PetDetails_imageContainer__1XV8Y",mainImage:"PetDetails_mainImage__1y-Gk",container:"PetDetails_container__1XWeG"}}},[[141,1,2]]]);
//# sourceMappingURL=main.57f5c3c3.chunk.js.map