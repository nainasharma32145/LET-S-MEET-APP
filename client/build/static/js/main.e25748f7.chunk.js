(this["webpackJsonplets-link"]=this["webpackJsonplets-link"]||[]).push([[0],{111:function(e,t,n){},134:function(e,t){},136:function(e,t){},159:function(e,t,n){},163:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),i=n(10),s=n.n(i),l=(n(111),n(14)),o=n(196),r=n(197),j=n(198),d=n(98),u=n.n(d),b=n(99),O=n.n(b),f=n(30),m=n(39);f.b.add(m.a,m.b,m.d,m.c);var h=n(62),v=n(94),x=n(63),g=n.n(x),k=n(95),p=n.n(k),C=(n(159),n(96)),y=n.n(C),S=n(6),N=p()("https://server-letslink.herokuapp.com/",{transports:["websocket","polling","flashsocket"]});var T=function(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)(),s=Object(l.a)(i,2),d=s[0],b=s[1],f=Object(c.useState)(!1),m=Object(l.a)(f,2),x=m[0],k=m[1],p=Object(c.useState)(""),C=Object(l.a)(p,2),T=C[0],w=C[1],I=Object(c.useState)(),A=Object(l.a)(I,2),z=A[0],D=A[1],F=Object(c.useState)(!1),B=Object(l.a)(F,2),E=B[0],L=B[1],P=Object(c.useState)(""),R=Object(l.a)(P,2),U=R[0],V=R[1],J=Object(c.useState)(!1),M=Object(l.a)(J,2),q=M[0],G=M[1],H=Object(c.useState)(""),K=Object(l.a)(H,2),Q=K[0],W=K[1],X=Object(c.useState)(!0),Y=Object(l.a)(X,2),Z=Y[0],$=Y[1],_=Object(c.useState)(!0),ee=Object(l.a)(_,2),te=ee[0],ne=ee[1],ce=Object(c.useRef)(),ae=Object(c.useRef)(),ie=Object(c.useRef)();return Object(c.useEffect)((function(){y()({key:"1ba6e8977436a17368d366d5a6fa9f702e956eca572e1d8b807a3e2338fdd0dc/stage",onCommand:function(e){e.command}})}),[]),Object(c.useEffect)((function(){navigator.mediaDevices.getUserMedia({video:!0,audio:!0}).then((function(e){b(e),ce.current.srcObject=e})),N.on("me",(function(e){a(e)})),N.on("callUser",(function(e){k(!0),w(e.from),W(e.name),D(e.signal)}))}),[]),Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)("h1",{style:{textAlign:"center",color:"#865858",fontSize:"3rem"},children:"Let's Link"}),Object(S.jsxs)("div",{className:"container",children:[Object(S.jsxs)("div",{className:"video-container",children:[Object(S.jsxs)("div",{className:"video",children:[d&&Object(S.jsx)("video",{playsInline:!0,muted:!0,ref:ce,autoPlay:!0,style:{width:"300px"}}),Object(S.jsxs)("div",{className:"menu",children:[Object(S.jsx)("div",{className:"menu-icon",onClick:function(){$(!Z);var e=d.getAudioTracks()[0].enabled;d.getAudioTracks()[0].enabled=!e,console.log(d.getAudioTracks()[0])},children:Object(S.jsx)(h.a,{icon:Z?"microphone":"microphone-slash",size:"2x"})}),Object(S.jsx)("div",{className:"menu-icon",onClick:function(){ne(!te);var e=d.getVideoTracks()[0].enabled;d.getVideoTracks()[0].enabled=!e,console.log(d.getVideoTracks()[0])},children:Object(S.jsx)(h.a,{icon:te?"video":"video-slash",size:"2x"})})]})]}),Object(S.jsx)("div",{className:"video",children:E&&!q?Object(S.jsx)("video",{playsInline:!0,ref:ae,autoPlay:!0,style:{width:"300px"}}):null})]}),Object(S.jsxs)("div",{className:"myId",children:[Object(S.jsx)(j.a,{id:"filled-basic",label:"Name",variant:"outlined",value:Q,onChange:function(e){return W(e.target.value)},style:{marginBottom:"20px"}}),Object(S.jsx)(v.CopyToClipboard,{text:n,style:{marginBottom:"2rem"},children:Object(S.jsx)(o.a,{variant:"contained",color:"inherit",startIcon:Object(S.jsx)(u.a,{fontSize:"large"}),children:"Copy ID"})}),Object(S.jsx)(j.a,{id:"filled-basic",label:"ID to call",variant:"outlined",value:U,onChange:function(e){return V(e.target.value)}}),Object(S.jsxs)("div",{className:"call-button",children:[E&&!q?Object(S.jsx)(o.a,{variant:"contained",color:"secondary",onClick:function(){G(!0),ie.current.destroy()},children:"End Call"}):Object(S.jsxs)(r.a,{color:"inherit","aria-label":"call",onClick:function(){return function(e){var t=new g.a({initiator:!0,trickle:!1,stream:d});t.on("signal",(function(t){N.emit("callUser",{userToCall:e,signalData:t,from:n,name:Q})})),t.on("stream",(function(e){ae.current.srcObject=e})),N.on("callAccepted",(function(e){L(!0),t.signal(e)})),ie.current=t}(U)},children:["Call",Object(S.jsx)(O.a,{fontSize:"large"})]}),U]})]}),Object(S.jsx)("div",{children:x&&!E?Object(S.jsxs)("div",{className:"caller",children:[Object(S.jsx)("h1",{style:{color:"#865858"},children:"Accept the call"}),Object(S.jsx)(o.a,{variant:"contained",color:"inherit",onClick:function(){L(!0);var e=new g.a({initiator:!1,trickle:!1,stream:d});e.on("signal",(function(e){N.emit("answerCall",{signal:e,to:T})})),e.on("stream",(function(e){ae.current.srcObject=e})),e.signal(z),ie.current=e},children:"Answer"})]}):null})]})]})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,200)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),i(e),s(e)}))};s.a.render(Object(S.jsx)(a.a.StrictMode,{children:Object(S.jsx)(T,{})}),document.getElementById("root")),w()}},[[163,1,2]]]);
//# sourceMappingURL=main.e25748f7.chunk.js.map