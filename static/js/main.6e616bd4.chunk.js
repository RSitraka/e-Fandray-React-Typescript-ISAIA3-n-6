(this["webpackJsonpe-fandray"]=this["webpackJsonpe-fandray"]||[]).push([[0],[,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var s=n(1),a=n.n(s),c=n(4),i=n.n(c),r=(n(9),n(10),n(2)),l=(n(11),n(0)),o=[""],j=[""],b=function(e){e.email,e.pseudo;var t=Object(s.useState)(""),n=Object(r.a)(t,2),a=n[0],c=n[1],i=Object(s.useState)([" "]),b=Object(r.a)(i,2),d=b[0],u=b[1],m=Object(s.useState)(""),O=Object(r.a)(m,2),p=O[0],h=O[1],f=Object(s.useState)(""),x=Object(r.a)(f,2),v=(x[0],x[1]);return Object(l.jsx)("fieldset",{children:Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("input",{type:"text",placeholder:"Entrer le nom du destinataire",id:"destin",value:p,onChange:function(e){h(e.target.value)}}),Object(l.jsx)("button",{type:"submit",className:"btn btn-success",onClick:function(e){e.preventDefault(),j.push(p),v(j)},id:"send",children:" Valider "}),Object(l.jsx)("br",{})]}),Object(l.jsx)("div",{children:d.map((function(e){return Object(l.jsx)("p",{children:e},e)}))}),Object(l.jsxs)("div",{children:[Object(l.jsx)("input",{type:"text",placeholder:"Entrer votre message",value:a,onChange:function(e){c(e.target.value)},id:"mess"}),Object(l.jsx)("button",{type:"submit",className:"btn btn-success",onClick:function(e){e.preventDefault(),console.log(o),o.push(a),u(o),c("")},id:"send",children:" Envoyer "})]})]})})},d=[{email:"Sitraka@gmail.com",pseudo:"Sitraka",password:"0123456789"},{email:"Benja@gmail.com",pseudo:"Benja",password:"master"},{email:"Zozefa@gmail.com",pseudo:"Zozefa",password:"tendry"}],u=function(){var e=Object(s.useState)(""),t=Object(r.a)(e,2),n=t[0],a=t[1],c=Object(s.useState)(""),i=Object(r.a)(c,2),o=i[0],j=i[1],u=Object(s.useState)(""),m=Object(r.a)(u,2),O=m[0],p=m[1],h=Object(s.useState)(!1),f=Object(r.a)(h,2),x=f[0],v=f[1];return x?Object(l.jsx)(b,{email:n,pseudo:O}):Object(l.jsxs)("fieldset",{children:[Object(l.jsx)("div",{id:"form1",children:Object(l.jsxs)("form",{className:"form-signin",children:[Object(l.jsx)("h1",{className:"h3 mb-3 font-weight-normal",id:"entete",children:"Bienvenu sur e-Fandray"}),Object(l.jsx)("label",{className:"sr-only",children:"Email"}),Object(l.jsx)("br",{}),Object(l.jsx)("input",{type:"email",id:"inputEmail",value:n,onChange:function(e){a(e.target.value)},className:"form-control",placeholder:"Email ... "}),Object(l.jsx)("br",{}),Object(l.jsx)("label",{className:"sr-only",children:"Mot de passe"}),Object(l.jsx)("br",{}),Object(l.jsx)("input",{type:"password",id:"inputPassword",value:o,onChange:function(e){j(e.target.value)},className:"form-control",placeholder:"Mot de passe ...",required:!0}),Object(l.jsx)("br",{}),Object(l.jsx)("button",{className:"btn btn-lg btn-primary btn-block",type:"submit",onClick:function(e){e.preventDefault(),d.map((function(e){if(e.email===n&&e.password===o)return v(!0),void p(e.pseudo)}))},id:"go",children:"e-Fandray"})]})}),Object(l.jsxs)("h1",{id:"maill",children:["Email  == Sitraka@gmail.com ",Object(l.jsx)("br",{}),"Password == 0123456789"]})]})};var m=function(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsx)(u,{})})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,14)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),s(e),a(e),c(e),i(e)}))};i.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(m,{})}),document.getElementById("root")),O()}],[[13,1,2]]]);
//# sourceMappingURL=main.6e616bd4.chunk.js.map