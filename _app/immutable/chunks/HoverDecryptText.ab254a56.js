import{s as q,n as _,r as x}from"./scheduler.a63e10c5.js";import{S as y,i as S,g as C,m as F,h as H,j as P,n as T,f as A,a as b,z,A as g,o as D}from"./index.a9489775.js";function E(o){let t,a,l,s;return{c(){t=C("span"),a=F(o[0])},l(n){t=H(n,"SPAN",{});var e=P(t);a=T(e,o[0]),e.forEach(A)},m(n,e){b(n,t,e),z(t,a),l||(s=[g(t,"mouseover",o[1]),g(t,"mouseout",o[2])],l=!0)},p(n,[e]){e&1&&D(a,n[0])},i:_,o:_,d(n){n&&A(t),l=!1,x(s)}}}function N(o,t,a){let l="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()-=_+[]{}|\\;:'\",.<>?/`~".split(""),{content:s=""}=t,{duration:n=2e3}=t,e=s,u=0,m=!1,i=null;const f=()=>l[Math.floor(Math.random()*l.length)],M=()=>{m=!1,i=null,u=0,a(0,e=s.split("").map(r=>f()).join("")),requestAnimationFrame(c)},c=r=>{i===null&&(i=r);let j=r-i;u/n>=1&&d(),!m&&(u+=j,a(0,e=s.split("").map((h,p)=>Math.random()<u/n||e[p]===h?h:Math.random()<.1?f():e[p]).join("")),i=r,requestAnimationFrame(c))},d=()=>{m=!0,i=null,u=0,a(0,e=s)};return o.$$set=r=>{"content"in r&&a(3,s=r.content),"duration"in r&&a(4,n=r.duration)},[e,M,d,s,n]}class w extends y{constructor(t){super(),S(this,t,N,E,q,{content:3,duration:4})}}export{w as H};
