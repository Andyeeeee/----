import{u as W}from"./list-d1857de4.js";import{u as j}from"./settings-668c3b7f.js";import{g as M,o as U,n as q,a as H,b as R,u as B,r as C,w as $,c as A,s as b,d as w,e as y,f as S,V as z,h as N,i as I,t as E,j as k,k as _}from"./index-f2ded6ef.js";import{V as P,a as J}from"./VRow-8beba6a0.js";function x(e){return H()?(R(e),!0):!1}function T(){const e=new Set,n=r=>{e.delete(r)};return{on:r=>{e.add(r);const a=()=>n(r);return x(a),{off:a}},off:n,trigger:r=>Promise.all(Array.from(e).map(a=>a(r)))}}function D(e){return typeof e=="function"?e():B(e)}const K=typeof window<"u",Q=()=>{};function X(e,n=!0){M()?U(e):n?e():q(e)}function Y(e){var n;const o=D(e);return(n=o==null?void 0:o.$el)!=null?n:o}const G=K?window:void 0;function Z(...e){let n,o,t,r;if(typeof e[0]=="string"||Array.isArray(e[0])?([o,t,r]=e,n=G):[n,o,t,r]=e,!n)return Q;Array.isArray(o)||(o=[o]),Array.isArray(t)||(t=[t]);const a=[],f=()=>{a.forEach(u=>u()),a.length=0},m=(u,s,i,c)=>(u.addEventListener(s,i,c),()=>u.removeEventListener(s,i,c)),g=$(()=>[Y(n),D(r)],([u,s])=>{f(),u&&a.push(...o.flatMap(i=>t.map(c=>m(u,i,c,s))))},{immediate:!0,flush:"post"}),v=()=>{g(),f()};return x(v),v}function ee(){const e=C(!1);return M()&&U(()=>{e.value=!0}),e}function te(e){const n=ee();return A(()=>(n.value,!!e()))}function ne(e={}){const{window:n=G}=e,o=te(()=>!!n&&"Notification"in n),t=C(null),r=async()=>{o.value&&"permission"in Notification&&Notification.permission!=="denied"&&await Notification.requestPermission()},{on:a,trigger:f}=T(),{on:m,trigger:g}=T(),{on:v,trigger:u}=T(),{on:s,trigger:i}=T(),c=async p=>{if(!o.value)return;await r();const l=Object.assign({},e,p);return t.value=new Notification(l.title||"",l),t.value.onclick=f,t.value.onshow=g,t.value.onerror=u,t.value.onclose=i,t.value},d=()=>{t.value&&t.value.close(),t.value=null};if(X(async()=>{o.value&&await r()}),x(d),o.value&&n){const p=n.document;Z(p,"visibilitychange",l=>{l.preventDefault(),p.visibilityState==="visible"&&d()})}return{isSupported:o,notification:t,show:c,close:d,onClick:a,onShow:m,onError:v,onClose:s}}const oe=I("h1",null,"目前倒數",-1),ue={__name:"Home",setup(e){C(0);const n=W(),{items:o,currentItem:t,timeleft:r}=b(n),{countdown:a,setCurrentItem:f,setFinishItems:m}=n,g=j(),{selectedAlarmFile:v,notify:u}=b(g),s={STOP:0,COUNTING:1,PAUSE:2},i=C(s.STOP);let c=0;const d=()=>{i.value===s.STOP&&o.value.length>0&&f(),t.value.length!==0&&(i.value=s.COUNTING,c=setInterval,c=setInterval(()=>{a(),r.value===0&&l()},1e3))},p=()=>{i.value=s.PAUSE,clearInterval(c)},l=()=>{clearInterval(c),i.value=s.STOP;const h=new Audio;h.src=v.value,h.play(),u.value&&F(),m(),o.value.length>0&&d()},O=A(()=>t.value.length>0?t.value:o.value.length>0?"點擊開始":"沒有事項"),L=A(()=>{const h=Math.floor(r.value/60).toString().padStart(2,"0"),V=(r.value%60).toString().padStart(2,"0");return h+":"+V}),{show:F}=ne({title:"完成事項",body:O.value,icon:"https://github.com/wdaweb.png"});return(h,V)=>(w(),y(z,null,{default:S(()=>[N(J,{class:"text-center"},{default:S(()=>[N(P,{cols:"12"},{default:S(()=>[I("h1",null,E(O.value),1),oe,I("h1",null,E(L.value),1)]),_:1}),N(P,{cols:"12"},{default:S(()=>[i.value!==s.COUNTING?(w(),y(k,{key:0,variant:"text",icon:"mdi-play",onClick:d})):_("",!0),i.value===s.COUNTING?(w(),y(k,{key:1,variant:"text",icon:"mdi-pause",onClick:p})):_("",!0),B(t).length>0?(w(),y(k,{key:2,variant:"text","append-icon":"mdi-skip-next",onClick:l})):_("",!0)]),_:1})]),_:1})]),_:1}))}};export{ue as default};
