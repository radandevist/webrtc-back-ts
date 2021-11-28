var Z=Object.defineProperty;var I=Object.getOwnPropertySymbols;var V=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;var M=(n,t,r)=>t in n?Z(n,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):n[t]=r,k=(n,t)=>{for(var r in t||(t={}))V.call(t,r)&&M(n,r,t[r]);if(I)for(var r of I(t))z.call(t,r)&&M(n,r,t[r]);return n};var $=(n,t)=>{var r={};for(var a in n)V.call(n,a)&&t.indexOf(a)<0&&(r[a]=n[a]);if(n!=null&&I)for(var a of I(n))t.indexOf(a)<0&&z.call(n,a)&&(r[a]=n[a]);return r};import{c as A,S as L,r as S,R as e,l as ee,n as te,a as ne,b as re,H as Y,i as oe,m as ae,F as se,d as q,e as ce,B as le,f as ie,g as ue}from"./vendor.f0d91e7a.js";const de=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function r(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerpolicy&&(c.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?c.credentials="include":o.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(o){if(o.ep)return;o.ep=!0;const c=r(o);fetch(o.href,c)}};de();const me=(n,t)=>{n.emit("command",t)};var x={send:me};const _={isClosable:!0,duration:5e3,position:"top"},fe={status:"error",title:"Oops"},pe={status:"success",title:"Success!!"},ge=A({defaultOptions:_}),he=A({defaultOptions:k(k({},_),fe)}),we=A({defaultOptions:k(k({},_),pe)});var w={toast:ge,error:he,success:we};const O=L.mixin({buttonsStyling:!1,width:"20rem"}),G=()=>{const n=O.getPopup();return n.classList.remove("swal2-show"),setTimeout(()=>{n.classList.add("animate__animated","animate__headShake")}),setTimeout(()=>{n.classList.remove("animate__animated","animate__headShake")},500),!1},xe=({partner:n,onAccept:t,onDeny:r})=>{O.fire({title:n,html:"<p class='text-indigo-500 text-base font-light'>Incoming Call<p>",showConfirmButton:!0,showCancelButton:!0,confirmButtonText:"accept",cancelButtonText:"deny",reverseButtons:!0,allowOutsideClick:G,backdrop:!0,imageUrl:"/images/call/waving-hand.gif",customClass:{popup:"rounded-lg",image:"w-24 h-24 mt-3 mb-0",title:"font-semibold text-2xl text-indigo-700 mt-0 mb-0",htmlContainer:"pt-0",cancelButton:"w-32 h-14 rounded-lg bg-yellow-500 text-white focus:outline-none mr-3",confirmButton:"w-32 h-14 rounded-lg bg-indigo-700 text-white focus:outline-none ml-3"}}).then(a=>{a.isConfirmed?t():a.dismiss===L.DismissReason.cancel&&r()})},be=({partner:n,onCancel:t})=>{O.fire({title:n,html:"<p class='text-indigo-700 text-base font-light'>calling<p>",showConfirmButton:!1,showCancelButton:!0,cancelButtonText:"Cancel Call",reverseButtons:!1,allowOutsideClick:G,backdrop:!0,imageUrl:"/images/call/call-me-hand.gif",customClass:{popup:"rounded-lg",image:"w-24 h-24 mt-3 mb-0",title:"font-semibold text-2xl text-indigo-700 mt-0 mb-0",htmlContainer:"pt-0",cancelButton:"w-72 h-14 rounded-lg bg-yellow-500 text-white focus:outline-none"}}).then(r=>{r.dismiss===L.DismissReason.cancel&&t()})};var N={swalBootstrapBtn:O,incomingCall:xe,dialingCall:be};const Ce={username:"",updateUsername:()=>{},friendname:"",updateFriendname:()=>{}},K=S.exports.createContext(Ce),j=()=>S.exports.useContext(K),Ee=({children:n})=>{const[t,r]=S.exports.useState(""),[a,o]=S.exports.useState(""),p={username:t,updateUsername:i=>{r(i)},friendname:a,updateFriendname:i=>{o(i)}};return e.createElement(K.Provider,{value:p},n)},R=ee({autoConnect:!1,withCredentials:!0});R.onAny((n,...t)=>{let r=null;try{r=t[0].type}finally{console.log(`${n}${r?`:${r}`:""}`,t)}});R.on("connect_error",n=>{console.error("connect_error",n.message),w.error({description:n.message})});R.on("response",n=>{n.type==="socket-connect"&&w.success({description:n.content.description})});const ve={socket:R},J=S.exports.createContext(ve),H=()=>S.exports.useContext(J),ye=({children:n})=>{const t={socket:R},r=a=>{R.connected&&(a.returnValue="You will lose your connection to the socket!")};return e.useEffect(()=>(window.addEventListener("beforeunload",r),()=>{window.removeEventListener("beforeunload",r)})),e.createElement(J.Provider,{value:t},n)},Q=({labelText:n,name:t,buttonText:r,placeholder:a,handleInputChange:o,buttonAction:c,isUserForm:d=!0,generateUsername:p})=>e.createElement("div",{className:"mt-8 sm:mx-auto sm:w-full sm:max-w-md"},e.createElement("div",{className:"bg-white py-8 px-6 shadow rounded-lg sm:px-10"},e.createElement("form",{className:"mb-0 space-y-6",onSubmit:i=>{i.preventDefault()}},e.createElement("div",null,e.createElement("div",null,e.createElement("label",{htmlFor:"userId",className:"block text-sm font-medium text-gray-700"},n,e.createElement("div",{className:"mt-1"},e.createElement("input",{onChange:o,value:t,className:"w-full border border-gray-300 rounded-lg shadow-sm focus:outline-none px-3 py-2 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500",type:"text",name:"username",placeholder:a,id:"userId"}))))),d?e.createElement("div",null,e.createElement("button",{onClick:p,type:"button",className:"w-full flex justify-center py-2 px-4 border border-indigo-700 rounded-md shadow-sm text-sm font-medium text-indigo-700 bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},"Generate a username")):null,e.createElement("div",null,e.createElement("button",{onClick:c,type:"submit",className:"w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},r))))),ke={dictionaries:[te,ne,re],separator:"",length:2},Se=({history:n})=>{const{socket:t}=H(),{username:r,friendname:a,updateUsername:o,updateFriendname:c}=j(),[d,p]=e.useState(""),[i,s]=e.useState(!1),[g,b]=e.useState(!1),[T,C]=e.useState(!1),[y,D]=e.useState(t.connected),U=u=>{u.preventDefault(),o(u.target.value)},F=u=>{u.preventDefault(),t.auth={username:r},t.connect()},l=u=>{u.preventDefault(),c(u.target.value)},m=()=>{x.send(t,{type:"call-offer",content:{target:a,cancelling:!0}}),s(!1)},E=()=>{x.send(t,{type:"call-answer",content:{caller:d,accepted:!0}}),C(!0),c(d)},h=()=>{x.send(t,{type:"call-answer",content:{caller:d,accepted:!1}}),p(""),C(!1),b(!1),c("")},v=u=>{if(u.preventDefault(),!t.connected){w.error({description:"You should register first!"});return}s(!0),x.send(t,{type:"call-offer",content:{target:a}})},f=u=>{const{type:X,content:B,success:P}=u;switch(X){case"socket-connect":D(P);break;case"call-offer":P?B.cancelling?(p(""),b(!1),N.swalBootstrapBtn.close()):(p(B.caller),b(!0)):(s(!1),w.error({description:B.description}),N.swalBootstrapBtn.close());break;case"call-answer":P?(N.swalBootstrapBtn.close(),b(!1),C(B.accepted),s(!1)):w.error({description:B.description});break}};e.useEffect(()=>(t.on("response",f),()=>{t.off("response",f)}),[]),e.useEffect(()=>{i&&N.dialingCall({partner:a,onCancel:m})},[i,s]),e.useEffect(()=>{g&&N.incomingCall({partner:d,onAccept:E,onDeny:h})},[g,b]),e.useEffect(()=>{T&&n.replace("/room",{isCaller:!!i})},[T,C]);const W=()=>{const u=oe(ke);o(u)};return e.createElement(e.Fragment,null,e.createElement(Y,null,e.createElement("title",null,"ChatSignal Home")),e.createElement("div",{className:"min-h-screen bg-gray-100 flex flex-col justify-center py-12 px-6 lg:px-8"},e.createElement("div",{className:"sm:mx-auto sm:w-full sm:max-w-md"},e.createElement("img",{className:"mx-auto h-12 w-auto",src:"/images/webrtc_logo.svg",alt:"webrtc chat"}),e.createElement("h2",{className:"mt-6 text-center text-3xl font-extrabold text-gray-900"},!!y&&!!r?e.createElement(e.Fragment,null,"Hi\xA0",e.createElement("span",{className:"text-indigo-500"},r)):"Set a username"),!!y&&!!r?e.createElement("p",{className:"text-center text-sm font-medium text-gray-700"},"Try to call someone or wait them to call you"):null),!!y&&!!r?e.createElement(Q,{name:a,handleInputChange:l,buttonAction:v,buttonText:"Call",labelText:"Friend username",placeholder:"e.g. pepsicola",isUserForm:!1}):e.createElement(Q,{name:r,handleInputChange:U,buttonAction:F,buttonText:"Continue",labelText:"Username",placeholder:"e.g. cocacola",isUserForm:!0,generateUsername:W})))},Re={iceServers:[{urls:"stun:stun.stunprotocol.org"},{urls:"turn:numb.viagenie.ca",credential:"muazkh",username:"webrtc@live.com"}]},Be=({location:{state:n},history:t})=>{const{friendname:r,updateFriendname:a}=j(),{socket:o}=H(),[c,d]=e.useState(n.isCaller),p=e.useRef(null),i=e.useRef(null),s=e.useRef(),g=e.useRef();function b(l){l.candidate&&x.send(o,{type:"ice-candidate",content:{friendname:r,candidate:l.candidate}})}function T(l){i.current.srcObject=l.streams[0]}function C(){const l=new RTCPeerConnection(Re);return l.onicecandidate=b,l.ontrack=T,l}function y(){i.current.srcObject=null,s.current.close(),s.current.onicecandidate=null,s.current.ontrack=null,g.current.getTracks().forEach(l=>{l.stop()}),g.current=void 0,s.current=void 0,a(""),t.replace("/")}const D=l=>{const{type:m,success:E,content:h}=l;switch(m){case"peer-offer":if(E){s.current=C();const v=new RTCSessionDescription(h.offer);s.current.setRemoteDescription(v).then(()=>{g.current.getTracks().forEach(f=>{s.current.addTrack(f,g.current)})}).then(()=>s.current.createAnswer()).then(f=>s.current.setLocalDescription(f)).then(()=>{x.send(o,{type:"peer-answer",content:{caller:r,answer:s.current.localDescription}})}).catch(f=>console.log(f))}else w.error({description:h.description});break;case"peer-answer":if(E){const v=new RTCSessionDescription(h.answer);s.current.setRemoteDescription(v).catch(f=>console.log(f))}else w.error({description:h.description});break;case"peer-leave":E?y():w.error({description:h.description});break;case"ice-candidate":if(E){const v=new RTCIceCandidate(h.candidate);s.current.addIceCandidate(v).catch(f=>console.log(f))}else w.error({description:h.description});break}};e.useEffect(()=>(navigator.mediaDevices.getUserMedia({audio:!0,video:!0}).then(l=>{p.current.srcObject=l,g.current=l,c&&(s.current=C(),s.current.createOffer().then(m=>(s.current.setLocalDescription(m),{target:r,offer:m})).then(m=>{x.send(o,{type:"peer-offer",content:m})}).catch(m=>console.log(m)),g.current.getTracks().forEach(m=>{s.current.addTrack(m,g.current)})),o.on("response",D)}).catch(l=>{console.log(l)}),()=>{o.off("response",D)}),[]);function U(){x.send(o,{type:"peer-leave",content:{target:r}}),y()}const F=e.useRef(null);return e.createElement(e.Fragment,null,e.createElement(Y,null,e.createElement("title",null,"Chat with\xA0",r)),e.createElement("div",{className:"w-screen h-screen bg-gray-300",ref:F},e.createElement(ae.div,{drag:!0,className:"absolute top-2 left-2 z-10",dragConstraints:F,dragElastic:.1,dragPropagation:!0},e.createElement("video",{autoPlay:!0,ref:p,className:"w-40  rounded-lg"},e.createElement("track",{kind:"captions"}))),e.createElement("div",{className:"flex items-center justify-center h-full w-full z-0 overflow-hidden"},e.createElement("video",{autoPlay:!0,ref:i,className:"sm:h-full"},e.createElement("track",{kind:"captions"}))),e.createElement("button",{className:"absolute bottom-6 left-[50%] translate-x-[-50%] z-20 p-0 w-12 h-12 bg-red-600 rounded-full hover:bg-red-700 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none",type:"button",onClick:U},e.createElement(se,{className:"w-5 h-5 inline-block text-white"}))))},Ne=a=>{var o=a,{isAuthenticated:n,authenticationPath:t}=o,r=$(o,["isAuthenticated","authenticationPath"]);return n?e.createElement(q,k({},r)):e.createElement(ce,{to:{pathname:t}})},Te=()=>{const{socket:n}=H(),{username:t,friendname:r}=j(),a=n.connected===!0&&!!t&&!!r;return e.createElement(le,null,e.createElement(ie,null,e.createElement(q,{exact:!0,path:"/",component:Se}),e.createElement(Ne,{isAuthenticated:a,authenticationPath:"/",path:"/room",component:Be})))},De=()=>e.createElement(ye,null,e.createElement(Ee,null,e.createElement(Te,null)));ue.render(e.createElement(e.StrictMode,null,e.createElement(De,null)),document.getElementById("root"));
