(this.webpackJsonpsscadmin=this.webpackJsonpsscadmin||[]).push([[0],{113:function(e,t,a){},127:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(7),c=a.n(s),i=(a(90),a(170)),l=a(24),o=Object(l.a)(),u=a(11),d=a.n(u),j=a(19),h=a(35),b=a(5),p=a(172),O=a(166),m=a(162),g=a(42),x=a(17),f=a.n(x);f.a.defaults.withCredentials=!0;var v=function(e,t,a){return f()({method:e,url:"/api"+t,data:a}).then((function(e){return e.data})).catch((function(e){return console.log(e)}))};function k(e,t){return w.apply(this,arguments)}function w(){return(w=Object(j.a)(d.a.mark((function e(t,a){var n,r,s,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={Authorization:"".concat(sessionStorage.getItem("accessToken"))},e.prev=1,e.next=4,f.a.post("/api".concat(t),a,{headers:n});case 4:return r=e.sent,e.abrupt("return",{data:r.data});case 8:if(e.prev=8,e.t0=e.catch(1),401!==e.t0.response.status){e.next=32;break}return e.next=13,N();case 13:if(!e.sent.success){e.next=30;break}return e.prev=15,s={Authorization:"".concat(sessionStorage.getItem("accessToken"))},e.next=19,f.a.post("/api".concat(t),a,{headers:s});case 19:return c=e.sent,e.abrupt("return",{data:c.data});case 23:e.prev=23,e.t1=e.catch(15),sessionStorage.removeItem("accessToken"),sessionStorage.removeItem("refreshToken"),sessionStorage.removeItem("uid"),sessionStorage.removeItem("persist:root"),window.location.href="/login";case 30:e.next=33;break;case 32:return e.abrupt("return",e.t0.response);case 33:case"end":return e.stop()}}),e,null,[[1,8],[15,23]])})))).apply(this,arguments)}function I(e){return S.apply(this,arguments)}function S(){return(S=Object(j.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.post("/api/login",t);case 2:return a=e.sent,e.abrupt("return",{data:a.data});case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function N(){return T.apply(this,arguments)}function T(){return(T=Object(j.a)(d.a.mark((function e(){var t,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={refreshToken:sessionStorage.getItem("refreshToken")},e.prev=1,e.next=4,f.a.get("/api/auth/refresh",{headers:t});case 4:if(!0!==(a=e.sent).data.success){e.next=9;break}return sessionStorage.setItem("accessToken",a.data.token.accessToken),sessionStorage.setItem("refreshToken",a.data.token.refreshToken),e.abrupt("return",{success:!0,data:a.data});case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),e.t0.response.status&&(sessionStorage.removeItem("accessToken"),sessionStorage.removeItem("refreshToken"),sessionStorage.removeItem("uid"),sessionStorage.removeItem("persist:root"),window.location.href="/login");case 14:case"end":return e.stop()}}),e,null,[[1,11]])})))).apply(this,arguments)}a(113);var y=a(2);var C=Object(b.a)((function(e){return{paper:{display:"flex",flexDirection:"column",alignItems:"center",margin:e.spacing(0,0,10,0)},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}}))((function(e){var t=e.classes,a=Object(n.useRef)(""),r=Object(n.useRef)(""),s=Object(n.useState)(""),c=Object(h.a)(s,2),i=c[0],l=c[1],u=Object(g.b)(),b=function(){var e=Object(j.a)(d.a.mark((function e(t){var n,s,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),""!=a.current.value&&""!=r.current.value){e.next=5;break}l("\uc544\uc774\ub514 \ub610\ub294 \ube44\ubc00\ubc88\ud638\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694."),e.next=11;break;case 5:return l(""),n={userId:a.current.value,password:r.current.value},e.next=9,I(n);case 9:(s=e.sent).data.success?(c={success:!0},sessionStorage.setItem("accessToken",s.data.accessToken),sessionStorage.setItem("refreshToken",s.data.refreshToken),u({type:"LOGIN_USER",payload:v("post","/login",c)}),o.push("/challenge")):l("\uc544\uc774\ub514 \ub610\ub294 \ube44\ubc00\ubc88\ud638\uac00 \uc77c\uce58\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.");case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(y.jsx)("div",{className:"Loginmargin",children:Object(y.jsx)(m.a,{maxWidth:"xs",children:Object(y.jsxs)("div",{className:t.paper,children:[Object(y.jsx)("div",{className:"AdminLoginMid",children:"\uc0c8\uc2f9\ucc4c Admin \ud398\uc774\uc9c0"}),Object(y.jsx)("form",{className:t.form,noValidate:!0,onSubmit:b,children:Object(y.jsxs)(O.a,{container:!0,spacing:4,children:[Object(y.jsx)(O.a,{item:!0,xs:12,children:Object(y.jsx)(p.a,{placeholder:"\uc544\uc774\ub514",fullWidth:!0,variant:"outlined",inputRef:a})}),Object(y.jsx)(O.a,{item:!0,xs:12,children:Object(y.jsx)(p.a,{placeholder:"\ube44\ubc00\ubc88\ud638",type:"password",fullWidth:!0,variant:"outlined",inputRef:r})}),Object(y.jsx)("div",{className:"LoginHelpText",children:i}),Object(y.jsx)("button",{type:"submit",className:"regibtn",children:"\ub85c\uadf8\uc778"})]})})]})})})}));a(70);function R(){return Object(y.jsxs)("div",{className:"wrap",children:[Object(y.jsx)("div",{className:"Lecture",children:"Admin \uac15\uc758 \uba54\ub274"}),Object(y.jsxs)("div",{className:"_cardlist",children:[Object(y.jsxs)("div",{className:"_carditem 1",children:[Object(y.jsx)("a",{href:"/challenge/add",children:Object(y.jsx)("img",{src:"/add.svg"})}),Object(y.jsx)("article",{children:Object(y.jsx)("a",{href:"/challenge/add",children:Object(y.jsx)("h1",{children:"\uc6cc\uac8c\uc784 \ucd94\uac00"})})})]}),Object(y.jsxs)("div",{className:"_carditem 2",children:[Object(y.jsx)("a",{href:"/wargame/list",children:Object(y.jsx)("img",{src:"/edit.svg"})}),Object(y.jsx)("article",{children:Object(y.jsx)("a",{href:"/wargame/list",children:Object(y.jsx)("h1",{children:"\uc6cc\uac8c\uc784 \uc218\uc815"})})})]}),Object(y.jsxs)("div",{className:"_carditem 3",children:[Object(y.jsx)("a",{href:"/wargame/listtodel",children:Object(y.jsx)("img",{src:"/delete.svg"})}),Object(y.jsx)("article",{children:Object(y.jsx)("a",{href:"/wargame/listtodel",children:Object(y.jsx)("h1",{children:"\uc6cc\uac8c\uc784 \uc0ad\uc81c"})})})]})]})]})}var E=a(29),_=a(171),F=a(173),L=a(169);function A(){var e=Object(n.useState)("null"),t=Object(h.a)(e,2),a=t[0],r=t[1],s=Object(n.useState)(0),c=Object(h.a)(s,2),i=c[0],l=c[1],u=Object(n.useState)(null),b=Object(h.a)(u,2),O=b[0],m=b[1],g=Object(n.useState)(""),x=Object(h.a)(g,2),f=x[0],v=x[1],w=Object(n.useRef)(""),I=Object(n.useRef)(""),S=Object(n.useRef)(""),N=function(){var e=Object(j.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""===w.current.value||"null"===a||0===i||""===I.current.value||""===S.current.value){e.next=27;break}return t=I.current.value.replace(/\n/g,"<br/>"),e.next=4,k("/manage/challenge",{challengeName:w.current.value,challengeDescription:t,challengeCategory:a,challengeStage:i,challengeFlag:S.current.value});case 4:if(!0!==(n=e.sent).data.success){e.next=23;break}if(null==O){e.next=18;break}return e.next=9,T(n.data.id);case 9:if(!e.sent){e.next=16;break}return E.b.success("\ubb38\uc81c \ucd94\uac00 \uc644\ub8cc"),o.push("/challenge"),e.abrupt("return");case 16:return E.b.error("\ubb38\uc81c \ucd94\uac00 \uc2e4\ud328"),e.abrupt("return");case 18:return E.b.success("\ubb38\uc81c \ucd94\uac00 \uc644\ub8cc"),o.push("/challenge"),e.abrupt("return");case 23:return E.b.error("\ubb38\uc81c \ucd94\uac00 \uc2e4\ud328"),e.abrupt("return");case 25:e.next=29;break;case 27:return E.b.error("\uc785\ub825\ud558\uc9c0 \uc54a\uc740 \uac12\uc774 \uc788\uc2b5\ub2c8\ub2e4."),e.abrupt("return");case 29:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),T=function(){var e=Object(j.a)(d.a.mark((function e(t){var a,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(a=new FormData).append("file",O),e.next=4,k("/manage/challenge/file/".concat(t),a,{headers:{"Content-Type":"multipart/form-data"}});case 4:return n=e.sent,e.abrupt("return",n.data.success);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(y.jsxs)("div",{className:"AddChallengewrap",children:[Object(y.jsx)("div",{className:"InputChallengeTitle",children:Object(y.jsx)(p.a,{label:"\ubb38\uc81c \uc81c\ubaa9",variant:"outlined",size:"small",InputProps:{style:{width:260,height:40}},inputRef:w})}),Object(y.jsx)("div",{className:"InputChallengeCategory",children:Object(y.jsxs)(_.a,{value:a,labelId:"demo-simple-select-helper-label",id:"demo-simple-select-helper",onChange:function(e){r(e.target.value)},children:[Object(y.jsx)(F.a,{value:"null",children:"\ubb38\uc81c \ubd84\uc57c \uc120\ud0dd"}),Object(y.jsx)(F.a,{value:"reversing",children:"\ub9ac\ubc84\uc2f1"}),Object(y.jsx)(F.a,{value:"forensic",children:"\ud3ec\ub80c\uc2dd"}),Object(y.jsx)(F.a,{value:"pwnable",children:"\ud3ec\ub108\ube14"}),Object(y.jsx)(F.a,{value:"web",children:"\uc6f9"}),Object(y.jsx)(F.a,{value:"misc",children:"MISC"}),Object(y.jsx)(F.a,{value:"event",children:"EVENT"})]})}),Object(y.jsx)("div",{className:"InputChallengeStage",children:Object(y.jsxs)(_.a,{value:i,labelId:"demo-simple-select-helper-label",id:"demo-simple-select-helper",onChange:function(e){l(e.target.value)},children:[Object(y.jsx)(F.a,{value:0,children:"\ubb38\uc81c \ub09c\uc774\ub3c4 \uc120\ud0dd"}),Object(y.jsx)(F.a,{value:1,children:"1\ub2e8\uac8c"}),Object(y.jsx)(F.a,{value:2,children:"2\ub2e8\uacc4"}),Object(y.jsx)(F.a,{value:3,children:"3\ub2e8\uac8c"}),Object(y.jsx)(F.a,{value:4,children:"4\ub2e8\uacc4"}),Object(y.jsx)(F.a,{value:5,children:"5\ub2e8\uacc4"}),Object(y.jsx)(F.a,{value:6,children:"EVENT"})]})}),Object(y.jsx)("div",{className:"InputChallengeTitle",children:Object(y.jsx)(p.a,{label:"\ubb38\uc81c \uc124\uba85",multiline:!0,variant:"outlined",size:"small",rows:5,InputProps:{style:{width:1e3}},inputRef:I})}),Object(y.jsx)("div",{className:"InputChallengeFlag",children:Object(y.jsx)(p.a,{label:"\ubb38\uc81c \ud50c\ub798\uadf8",variant:"outlined",size:"small",InputProps:{style:{width:400,height:40}},inputRef:S})}),Object(y.jsxs)("div",{className:"ChallengeFileWrap",children:[Object(y.jsx)("div",{className:"ChallengeZip",children:Object(y.jsxs)(L.a,{variant:"contained",component:"label",color:"primary",children:[Object(y.jsx)("input",{type:"file",hidden:!0,onChange:function(e){var t=new FileReader;t.onloadend=function(){t.result&&(v(e.target.files[0].name),m(e.target.files[0]))},e.target.files[0]&&t.readAsDataURL(e.target.files[0])}}),"\ucca8\ubd80\ud30c\uc77c \ucd94\uac00\ud558\uae30"]})}),Object(y.jsxs)("div",{className:"FileName",children:["\ucca8\ubd80\ub41c \ud30c\uc77c: ",f]})]}),Object(y.jsx)("div",{className:"AddChallengeButton",children:Object(y.jsx)(L.a,{variant:"contained",component:"label",color:"primary",onClick:N,children:"\ubb38\uc81c \ucd94\uac00\ud558\uae30"})})]})}a(115),a(116);var D=function(){return Object(y.jsxs)(i.b,{history:o,children:[Object(y.jsx)(E.a,{position:"top-center",autoClose:3e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,draggable:!0,pauseOnHover:!1}),Object(y.jsxs)(i.c,{children:[Object(y.jsx)(i.a,{exact:!0,path:"/",component:C}),Object(y.jsx)(i.a,{exact:!0,path:"/challenge",component:R}),Object(y.jsx)(i.a,{exact:!0,path:"/challenge/add",component:A})]})]})},P=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,175)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,c=t.getTTFB;a(e),n(e),r(e),s(e),c(e)}))},U=a(14),z=a(48),G=a.n(z),B=a(49),M=a(25),V={loginSuccess:"Fail"},W=a(59),H=a(58),J=a.n(H),X={key:"root",storage:J.a},Z=Object(U.c)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_USER":case"LOGOUT_USER":case"CHANGE_PROFILEIMG":return Object(M.a)(Object(M.a)({},e),{},{loginSuccess:t.payload});case"INIT":return Object(M.a)(Object(M.a)({},e),{},{loginSuccess:"Fail"});default:return e}},storage:J.a}),q=Object(W.a)(X,Z),K=(window.__REDUX_DEVTOOLS_EXTENSION__,Object(U.d)(Object(U.a)(B.a),Object(U.a)(G.a))),Q=a(76),Y=(a(124).config(),Object(U.a)(G.a,B.a)(U.e),function(){var e=Object(U.e)(q,K);return{store:e,persistor:Object(W.b)(e)}}()),$=Y.persistor,ee=Y.store;c.a.render(Object(y.jsx)(r.a.StrictMode,{children:Object(y.jsx)(g.a,{store:ee,children:Object(y.jsx)(Q.a,{loading:null,persistor:$,children:Object(y.jsx)(D,{})})})}),document.getElementById("root")),P()},70:function(e,t,a){},90:function(e,t,a){}},[[127,1,2]]]);
//# sourceMappingURL=main.b173ff71.chunk.js.map