(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{UJ0D:function(t,n,o){"use strict";o.r(n),o.d(n,"ProtectedModule",function(){return a});var r=o("ofXK"),e=o("tyNb"),s=o("fXoL"),c=o("N/25");const u=[{path:"",children:[{path:"",component:(()=>{class t{constructor(t,n){this.router=t,this.authService=n}get usuario(){return this.authService.usuario}logout(){this.router.navigateByUrl("/auth"),this.authService.logout()}}return t.\u0275fac=function(n){return new(n||t)(s.Gb(e.a),s.Gb(c.a))},t.\u0275cmp=s.Ab({type:t,selectors:[["app-dashboard"]],decls:12,vars:3,consts:[[3,"click"]],template:function(t,n){1&t&&(s.Jb(0,"h1"),s.Xb(1,"Dashboard"),s.Ib(),s.Hb(2,"hr"),s.Jb(3,"p"),s.Xb(4," Esta p\xe1gina s\xf3lo funciona si est\xe1s autenticado\n"),s.Ib(),s.Jb(5,"h4"),s.Xb(6,"User info"),s.Ib(),s.Jb(7,"pre"),s.Xb(8),s.Rb(9,"json"),s.Ib(),s.Jb(10,"button",0),s.Pb("click",function(){return n.logout()}),s.Xb(11," Logout\n"),s.Ib()),2&t&&(s.wb(8),s.Yb(s.Sb(9,1,n.usuario)))},pipes:[r.e],styles:["*[_ngcontent-%COMP%] {\n        margin: 15px;\n      }"]}),t})()},{path:"**",redirectTo:""}]}];let i=(()=>{class t{}return t.\u0275mod=s.Eb({type:t}),t.\u0275inj=s.Db({factory:function(n){return new(n||t)},imports:[[e.c.forChild(u)],e.c]}),t})(),a=(()=>{class t{}return t.\u0275mod=s.Eb({type:t}),t.\u0275inj=s.Db({factory:function(n){return new(n||t)},imports:[[r.b,i]]}),t})()}}]);