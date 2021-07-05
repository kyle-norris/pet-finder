(this["webpackJsonppet-finder-react"]=this["webpackJsonppet-finder-react"]||[]).push([[0],{117:function(e,t,a){e.exports={dropdownContainer:"HomePage_dropdownContainer__gSYGw",heading:"HomePage_heading__2f84P"}},151:function(e,t,a){},152:function(e,t,a){},179:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(51),s=a.n(i),r=(a(151),a(152),a(82)),l=a(10),o=a(35),d=a(74),j=a.n(d),h=a(193),b=a(78),x=a(2);var O=function(e){return Object(x.jsx)(r.b,{to:{pathname:"/pet/".concat(e.animal.id),state:{animalID:e.animal.id,token:e.token}},children:Object(x.jsxs)(h.a,{className:b.card,children:[void 0!==e.animal.photos[0]?Object(x.jsx)("img",{src:e.animal.photos[0].medium,alt:e.animal.name,className:b.petImage}):Object(x.jsx)("div",{className:b.petImage,children:"No Photo Available"}),Object(x.jsxs)(h.a.Content,{children:[Object(x.jsx)(h.a.Header,{className:b.cardHeader,children:e.animal.name}),Object(x.jsx)(h.a.Description,{children:e.animal.description})]})]})})};var u=function(e){return Object(x.jsx)(h.a.Group,{centered:!0,children:e.animals.map((function(t,a){return Object(x.jsx)(h.a,{children:Object(x.jsx)(O,{animal:t,token:e.token})},a)}))})},m=a(195),p=a(190),g=a(188),C=a(117),f={animals:[]},v=[{key:"Rabbit",value:"Rabbit",text:"Rabbit"},{key:"Dog",value:"Dog",text:"Dog"},{key:"Cat",value:"Cat",text:"Cat"},{key:"Horse",value:"Horse",text:"Horse"},{key:"Bird",value:"Bird",text:"Bird"},{key:"Scales, Fins & Other",value:"Scales, Fins & Other",text:"Scales, Fins & Other"},{key:"Barnyard",value:"Barnyard",text:"Barnyard"}],_=[{key:"Raleigh, NC",value:"Raleigh, NC",text:"Raleigh, NC"},{key:"Charlotte, NC",value:"Charlotte, NC",text:"Charlotte, NC"},{key:"Durham, NC",value:"Durham, NC",text:"Durham, NC"}],k=function(){var e=Object(n.useState)("Fake Token"),t=Object(o.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)(f),s=Object(o.a)(i,2),r=s[0],l=s[1],d=Object(n.useState)(!0),h=Object(o.a)(d,2),b=h[0],O=h[1],k=Object(n.useState)(_[0]),y=Object(o.a)(k,2),N=y[0],P=y[1],w=Object(n.useState)(v[0]),D=Object(o.a)(w,2),I=D[0],S=D[1];return Object(n.useEffect)((function(){j.a.post("https://api.petfinder.com/v2/oauth2/token",{grant_type:"client_credentials",client_id:"LF46utVZjlDYiCZDBCRwy99M20LpwU8Z91zJn1akYehitkSovu",client_secret:"xFvBFDPkfFo046InSFzYTt2QZYgMyxqJIqVfKIWW"}).then((function(e){c(e.data.access_token),O(!1)})).catch((function(e){console.error("There was an error fetching the token!",e)}))}),[]),Object(n.useEffect)((function(){"Fake Token"!==a&&j.a.get("https://api.petfinder.com/v2/animals?type=".concat(I.value,"&location=").concat(N.value,"&page=1"),{headers:{Authorization:"Bearer ".concat(a)}}).then((function(e){l(e.data),O(!1)})).catch((function(e){console.log("There was an error getting the pets data!",e)}))}),[a,N,I]),!b&&r.animals.length>0?Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("div",{className:C.heading,children:Object(x.jsx)(m.a,{as:"h1",textAlign:"center",children:"Pet Finder App"})}),Object(x.jsxs)("div",{className:C.dropdownContainer,children:[Object(x.jsx)(p.a,{search:!0,fluid:!0,selection:!0,value:N.text,onChange:function(e,t){var a=_.find((function(e){return e.key===t.value}));P(a)},options:_}),Object(x.jsx)(p.a,{search:!0,fluid:!0,selection:!0,value:I.text,onChange:function(e,t){var a=v.find((function(e){return e.key===t.value}));S(a)},options:v})]}),Object(x.jsx)(g.a,{hidden:!0}),Object(x.jsx)(u,{animals:r.animals,token:a})]}):Object(x.jsx)("h1",{children:"Loading..."})},y=a(196),N=a(134),P=a(135),w=a(189),D=a(191),I=a(192),S=a(36),F=function(){var e=Object(n.useState)(),t=Object(o.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)(!0),s=Object(o.a)(i,2),r=s[0],d=s[1],h=Object(l.e)().state,b=h.animalID,O=h.token;return Object(n.useEffect)((function(){"Fake Token"!==O&&j.a.get("https://api.petfinder.com/v2/animals/".concat(b),{headers:{Authorization:"Bearer ".concat(O)}}).then((function(e){c(e.data.animal),d(!1),console.log(e.data.animal)})).catch((function(e){console.log("There was an error getting the pet details!",e)}))}),[b,O]),!1===r?Object(x.jsxs)(y.a,{vertical:!0,textAlign:"center",className:S.container,children:[Object(x.jsxs)(m.a,{as:"h1",children:[a.name," (",a.status,")"]}),void 0!==a.photos[0]?Object(x.jsx)(N.a,{src:a.photos[0].large,className:S.mainImage,alt:a.name,centered:!0}):Object(x.jsx)("div",{className:S.petImage,children:"No Photo Available"}),Object(x.jsx)(g.a,{hidden:!0}),Object(x.jsx)(P.a.Group,{children:a.tags.map((function(e,t){return Object(x.jsx)(P.a,{color:"blue",children:e},t)}))}),Object(x.jsx)(g.a,{hidden:!0}),Object(x.jsx)(w.a,{children:a.description}),Object(x.jsx)(g.a,{hidden:!0,section:!0,children:Object(x.jsx)(m.a,{children:"Details"})}),Object(x.jsx)("div",{className:S.tableContainer,children:Object(x.jsx)(D.a,{definition:!0,textAlign:"center",className:S.table,children:Object(x.jsxs)(D.a.Body,{children:[Object(x.jsxs)(D.a.Row,{children:[Object(x.jsx)(D.a.Cell,{width:6,children:"Species"}),Object(x.jsx)(D.a.Cell,{children:a.species})]}),Object(x.jsxs)(D.a.Row,{children:[Object(x.jsx)(D.a.Cell,{children:"Primary Breed"}),Object(x.jsx)(D.a.Cell,{children:a.breeds.primary})]}),Object(x.jsxs)(D.a.Row,{children:[Object(x.jsx)(D.a.Cell,{children:"Color"}),Object(x.jsx)(D.a.Cell,{children:a.colors.primary})]}),Object(x.jsxs)(D.a.Row,{children:[Object(x.jsx)(D.a.Cell,{children:"Gender"}),Object(x.jsx)(D.a.Cell,{children:a.gender})]}),Object(x.jsxs)(D.a.Row,{children:[Object(x.jsx)(D.a.Cell,{children:"Age"}),Object(x.jsx)(D.a.Cell,{children:a.age})]})]})})}),Object(x.jsx)(g.a,{hidden:!0,section:!0,children:Object(x.jsx)(m.a,{children:"Health"})}),Object(x.jsx)("div",{className:S.tableContainer,children:Object(x.jsx)(D.a,{definition:!0,textAlign:"center",className:S.table,children:Object(x.jsxs)(D.a.Body,{children:[Object(x.jsxs)(D.a.Row,{children:[Object(x.jsx)(D.a.Cell,{width:6,children:"Spayed/Neutered"}),Object(x.jsx)(D.a.Cell,{children:a.attributes.spayed_neutered?"yes":"no"})]}),Object(x.jsxs)(D.a.Row,{children:[Object(x.jsx)(D.a.Cell,{children:"House Trained"}),Object(x.jsx)(D.a.Cell,{children:a.attributes.house_trained?"yes":"no"})]}),Object(x.jsxs)(D.a.Row,{children:[Object(x.jsx)(D.a.Cell,{children:"Declawed"}),Object(x.jsx)(D.a.Cell,{children:a.attributes.declawed?"yes":"no"})]}),Object(x.jsxs)(D.a.Row,{children:[Object(x.jsx)(D.a.Cell,{children:"Special Needs"}),Object(x.jsx)(D.a.Cell,{children:a.attributes.special_needs?"yes":"no"})]}),Object(x.jsxs)(D.a.Row,{children:[Object(x.jsx)(D.a.Cell,{children:"Shots Current"}),Object(x.jsx)(D.a.Cell,{children:a.attributes.shots_current?"yes":"no"})]})]})})}),Object(x.jsx)(g.a,{hidden:!0,section:!0,children:Object(x.jsx)(m.a,{children:"Contact"})}),Object(x.jsx)("div",{className:S.contactInfo,children:Object(x.jsxs)(I.a,{children:[Object(x.jsx)(I.a.Item,{children:Object(x.jsx)(I.a.Content,{children:a.contact.email})}),Object(x.jsx)(I.a.Item,{children:Object(x.jsx)(I.a.Content,{children:a.contact.phone})}),Object(x.jsx)(I.a.Item,{children:Object(x.jsxs)(I.a.Content,{children:[a.contact.address.address1," ",a.contact.address.city,", ",a.contact.address.state," ",a.contact.address.postcode]})})]})})]}):Object(x.jsx)("h1",{children:"Loading..."})};a(178);var R=function(){return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)(r.a,{basename:"/pet-finder",children:[Object(x.jsx)(l.a,{exact:!0,path:"/",component:k}),Object(x.jsx)(l.a,{path:"/pet/:petID",component:F})]})})},B=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,197)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,i=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),i(e),s(e)}))};s.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(R,{})}),document.getElementById("root")),B()},36:function(e,t,a){e.exports={imageContainer:"PetDetailsPage_imageContainer__rkVSJ",mainImage:"PetDetailsPage_mainImage__1j9gJ",container:"PetDetailsPage_container__3hFql",table:"PetDetailsPage_table__vZ_GX",tableContainer:"PetDetailsPage_tableContainer__BSH7l",contactInfo:"PetDetailsPage_contactInfo__19KPd"}},78:function(e,t,a){e.exports={petImage:"PetCard_petImage__3kk0Q",cardHeader:"PetCard_cardHeader__1LLed",card:"PetCard_card__1UuGC"}}},[[179,1,2]]]);
//# sourceMappingURL=main.897b9b8a.chunk.js.map