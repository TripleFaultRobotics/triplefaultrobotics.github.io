import{s as Tt,c as Et,d as bt,u as Lt,g as Mt,e as zt,o as $t}from"../chunks/scheduler.a63e10c5.js";import{S as xt,i as Rt,s as D,g as f,r as Q,c as j,x as Ot,h as g,y as Z,f as c,j as M,u as tt,k as v,a as F,z as p,v as et,A as At,d as G,t as J,w as it}from"../chunks/index.a9489775.js";import{b as Y}from"../chunks/paths.6534ce21.js";import{H as st}from"../chunks/HoverDecryptText.ab254a56.js";import{s as Ht}from"../chunks/index.80b6cc5a.js";const Wt=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global,Ct=!0,Ft=Object.freeze(Object.defineProperty({__proto__:null,prerender:Ct},Symbol.toStringTag,{value:"Module"}));function at(){return at=Object.assign?Object.assign.bind():function(m){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&(m[s]=e[s])}return m},at.apply(this,arguments)}function rt(m,t,e){return Math.max(m,Math.min(t,e))}class It{advance(t){var e;if(!this.isRunning)return;let s=!1;if(this.lerp)this.value=(n=this.value,i=this.to,(1-(l=1-Math.exp(-60*this.lerp*t)))*n+l*i),Math.round(this.value)===this.to&&(this.value=this.to,s=!0);else{this.currentTime+=t;const o=rt(0,this.currentTime/this.duration,1);s=o>=1;const a=s?1:this.easing(o);this.value=this.from+(this.to-this.from)*a}var n,i,l;(e=this.onUpdate)==null||e.call(this,this.value,{completed:s}),s&&this.stop()}stop(){this.isRunning=!1}fromTo(t,e,{lerp:s=.1,duration:n=1,easing:i=o=>o,onUpdate:l}){this.from=this.value=t,this.to=e,this.lerp=s,this.duration=n,this.easing=i,this.currentTime=0,this.isRunning=!0,this.onUpdate=l}}class Dt{constructor({wrapper:t,content:e,autoResize:s=!0}={}){if(this.resize=()=>{this.onWrapperResize(),this.onContentResize()},this.onWrapperResize=()=>{this.wrapper===window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)},this.onContentResize=()=>{this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth},this.wrapper=t,this.content=e,s){const n=function(i,l){let o;return function(){let a=arguments,h=this;clearTimeout(o),o=setTimeout(function(){i.apply(h,a)},250)}}(this.resize);this.wrapper!==window&&(this.wrapperResizeObserver=new ResizeObserver(n),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(n),this.contentResizeObserver.observe(this.content)}this.resize()}destroy(){var t,e;(t=this.wrapperResizeObserver)==null||t.disconnect(),(e=this.contentResizeObserver)==null||e.disconnect()}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}}class yt{constructor(){this.events={}}emit(t,...e){let s=this.events[t]||[];for(let n=0,i=s.length;n<i;n++)s[n](...e)}on(t,e){var s;return(s=this.events[t])!=null&&s.push(e)||(this.events[t]=[e]),()=>{var n;this.events[t]=(n=this.events[t])==null?void 0:n.filter(i=>e!==i)}}destroy(){this.events={}}}class jt{constructor(t,{wheelMultiplier:e=1,touchMultiplier:s=2,normalizeWheel:n=!1}){this.onTouchStart=i=>{const{clientX:l,clientY:o}=i.targetTouches?i.targetTouches[0]:i;this.touchStart.x=l,this.touchStart.y=o,this.lastDelta={x:0,y:0}},this.onTouchMove=i=>{const{clientX:l,clientY:o}=i.targetTouches?i.targetTouches[0]:i,a=-(l-this.touchStart.x)*this.touchMultiplier,h=-(o-this.touchStart.y)*this.touchMultiplier;this.touchStart.x=l,this.touchStart.y=o,this.lastDelta={x:a,y:h},this.emitter.emit("scroll",{type:"touch",deltaX:a,deltaY:h,event:i})},this.onTouchEnd=i=>{this.emitter.emit("scroll",{type:"touch",inertia:!0,deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:i})},this.onWheel=i=>{let{deltaX:l,deltaY:o}=i;this.normalizeWheel&&(l=rt(-100,l,100),o=rt(-100,o,100)),l*=this.wheelMultiplier,o*=this.wheelMultiplier,this.emitter.emit("scroll",{type:"wheel",deltaX:l,deltaY:o,event:i})},this.element=t,this.wheelMultiplier=e,this.touchMultiplier=s,this.normalizeWheel=n,this.touchStart={x:null,y:null},this.emitter=new yt,this.element.addEventListener("wheel",this.onWheel,{passive:!1}),this.element.addEventListener("touchstart",this.onTouchStart,{passive:!1}),this.element.addEventListener("touchmove",this.onTouchMove,{passive:!1}),this.element.addEventListener("touchend",this.onTouchEnd,{passive:!1})}on(t,e){return this.emitter.on(t,e)}destroy(){this.emitter.destroy(),this.element.removeEventListener("wheel",this.onWheel,{passive:!1}),this.element.removeEventListener("touchstart",this.onTouchStart,{passive:!1}),this.element.removeEventListener("touchmove",this.onTouchMove,{passive:!1}),this.element.removeEventListener("touchend",this.onTouchEnd,{passive:!1})}}class kt{constructor({wrapper:t=window,content:e=document.documentElement,wheelEventsTarget:s=t,smoothWheel:n=!0,smoothTouch:i=!1,syncTouch:l=!1,syncTouchLerp:o=.1,__iosNoInertiaSyncTouchLerp:a=.4,touchInertiaMultiplier:h=35,duration:w,easing:k=_=>Math.min(1,1.001-Math.pow(2,-10*_)),lerp:S=w&&.1,infinite:u=!1,orientation:z="vertical",gestureOrientation:O="vertical",touchMultiplier:$=1,wheelMultiplier:q=1,normalizeWheel:W=!1,autoResize:x=!0}={}){this.onVirtualScroll=({type:_,inertia:K,deltaX:R,deltaY:y,event:L})=>{if(L.ctrlKey)return;const A=_==="touch",C=_==="wheel";if(this.options.gestureOrientation==="vertical"&&y===0||this.options.gestureOrientation==="horizontal"&&R===0||A&&this.options.gestureOrientation==="vertical"&&this.scroll===0&&!this.options.infinite&&y<=0||L.composedPath().find(d=>(d==null||d.hasAttribute==null?void 0:d.hasAttribute("data-lenis-prevent"))||A&&(d==null||d.hasAttribute==null?void 0:d.hasAttribute("data-lenis-prevent-touch"))||C&&(d==null||d.hasAttribute==null?void 0:d.hasAttribute("data-lenis-prevent-wheel"))))return;if(this.isStopped||this.isLocked)return void L.preventDefault();if(this.isSmooth=(this.options.smoothTouch||this.options.syncTouch)&&A||this.options.smoothWheel&&C,!this.isSmooth)return this.isScrolling=!1,void this.animate.stop();L.preventDefault();let T=y;this.options.gestureOrientation==="both"?T=Math.abs(y)>Math.abs(R)?y:R:this.options.gestureOrientation==="horizontal"&&(T=R);const H=A&&this.options.syncTouch,P=A&&K&&Math.abs(T)>1;P&&(T=this.velocity*this.options.touchInertiaMultiplier),this.scrollTo(this.targetScroll+T,at({programmatic:!1},H&&{lerp:P?this.syncTouchLerp:this.options.__iosNoInertiaSyncTouchLerp}))},this.onScroll=()=>{if(!this.isScrolling){const _=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.velocity=0,this.direction=Math.sign(this.animatedScroll-_),this.emit()}},window.lenisVersion="1.0.19",t!==document.documentElement&&t!==document.body||(t=window),this.options={wrapper:t,content:e,wheelEventsTarget:s,smoothWheel:n,smoothTouch:i,syncTouch:l,syncTouchLerp:o,__iosNoInertiaSyncTouchLerp:a,touchInertiaMultiplier:h,duration:w,easing:k,lerp:S,infinite:u,gestureOrientation:O,orientation:z,touchMultiplier:$,wheelMultiplier:q,normalizeWheel:W,autoResize:x},this.dimensions=new Dt({wrapper:t,content:e,autoResize:x}),this.rootElement.classList.add("lenis"),this.velocity=0,this.isStopped=!1,this.isSmooth=n||i,this.isScrolling=!1,this.targetScroll=this.animatedScroll=this.actualScroll,this.animate=new It,this.emitter=new yt,this.options.wrapper.addEventListener("scroll",this.onScroll,{passive:!1}),this.virtualScroll=new jt(s,{touchMultiplier:$,wheelMultiplier:q,normalizeWheel:W}),this.virtualScroll.on("scroll",this.onVirtualScroll)}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onScroll,{passive:!1}),this.virtualScroll.destroy(),this.dimensions.destroy(),this.rootElement.classList.remove("lenis"),this.rootElement.classList.remove("lenis-smooth"),this.rootElement.classList.remove("lenis-scrolling"),this.rootElement.classList.remove("lenis-stopped")}on(t,e){return this.emitter.on(t,e)}off(t,e){var s;this.emitter.events[t]=(s=this.emitter.events[t])==null?void 0:s.filter(n=>e!==n)}setScroll(t){this.isHorizontal?this.rootElement.scrollLeft=t:this.rootElement.scrollTop=t}resize(){this.dimensions.resize()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.velocity=0,this.animate.stop()}start(){this.isStopped=!1,this.reset()}stop(){this.isStopped=!0,this.animate.stop(),this.reset()}raf(t){const e=t-(this.time||t);this.time=t,this.animate.advance(.001*e)}scrollTo(t,{offset:e=0,immediate:s=!1,lock:n=!1,duration:i=this.options.duration,easing:l=this.options.easing,lerp:o=!i&&this.options.lerp,onComplete:a=null,force:h=!1,programmatic:w=!0}={}){if(!this.isStopped||h){if(["top","left","start"].includes(t))t=0;else if(["bottom","right","end"].includes(t))t=this.limit;else{var k;let S;if(typeof t=="string"?S=document.querySelector(t):(k=t)!=null&&k.nodeType&&(S=t),S){if(this.options.wrapper!==window){const z=this.options.wrapper.getBoundingClientRect();e-=this.isHorizontal?z.left:z.top}const u=S.getBoundingClientRect();t=(this.isHorizontal?u.left:u.top)+this.animatedScroll}}if(typeof t=="number"){if(t+=e,t=Math.round(t),this.options.infinite?w&&(this.targetScroll=this.animatedScroll=this.scroll):t=rt(0,t,this.limit),s)return this.animatedScroll=this.targetScroll=t,this.setScroll(this.scroll),this.reset(),this.emit(),void(a==null||a());if(!w){if(t===this.targetScroll)return;this.targetScroll=t}this.animate.fromTo(this.animatedScroll,t,{duration:i,easing:l,lerp:o,onUpdate:(S,{completed:u})=>{n&&(this.isLocked=!0),this.isScrolling=!0,this.velocity=S-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=S,this.setScroll(this.scroll),w&&(this.targetScroll=S),u&&(n&&(this.isLocked=!1),requestAnimationFrame(()=>{this.isScrolling=!1}),this.velocity=0,a==null||a()),this.emit()}})}}}get rootElement(){return this.options.wrapper===window?this.options.content:this.options.wrapper}get limit(){return this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){return this.isHorizontal?this.rootElement.scrollLeft:this.rootElement.scrollTop}get scroll(){return this.options.infinite?(this.animatedScroll%(t=this.limit)+t)%t:this.animatedScroll;var t}get progress(){return this.limit===0?1:this.scroll/this.limit}get isSmooth(){return this.__isSmooth}set isSmooth(t){this.__isSmooth!==t&&(this.rootElement.classList.toggle("lenis-smooth",t),this.__isSmooth=t)}get isScrolling(){return this.__isScrolling}set isScrolling(t){this.__isScrolling!==t&&(this.rootElement.classList.toggle("lenis-scrolling",t),this.__isScrolling=t)}get isStopped(){return this.__isStopped}set isStopped(t){this.__isStopped!==t&&(this.rootElement.classList.toggle("lenis-stopped",t),this.__isStopped=t)}}const{document:ot}=Wt;function Nt(m){let t,e,s="",n,i,l=`window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());

    gtag("config", "G-KG2ETJKJEL");`,o,a,h,w,k=`<img src="${Y}/logo.svg" class="w-12 h-12 hover:opacity-75" alt="Triple Fault Logo"/>`,S,u,z,O,$,q,W,x,_,K,R,y,L,A,C,T,H,P,d,ht='<span class="font-bold">NEWS</span><span class="hidden md:inline">: 1st Place Lovelace!</span>',V,B,N,X,nt,ct;$=new st({props:{content:"TEAM"}}),_=new st({props:{content:"MATCHES"}}),L=new st({props:{content:"RESOURCES"}}),H=new st({props:{content:"CONTACT"}});const lt=m[2].default,E=Et(lt,m,m[1],null);return{c(){t=D(),e=f("script"),e.innerHTML=s,i=f("script"),i.textContent=l,o=D(),a=f("header"),h=f("nav"),w=f("a"),w.innerHTML=k,S=D(),u=f("ul"),z=f("li"),O=f("a"),Q($.$$.fragment),q=D(),W=f("li"),x=f("a"),Q(_.$$.fragment),K=D(),R=f("li"),y=f("a"),Q(L.$$.fragment),A=D(),C=f("li"),T=f("a"),Q(H.$$.fragment),P=D(),d=f("a"),d.innerHTML=ht,B=D(),N=f("main"),E&&E.c(),this.h()},l(r){t=j(r);const b=Ot("svelte-1mefeen",ot.head);e=g(b,"SCRIPT",{src:!0,"data-svelte-h":!0}),Z(e)!=="svelte-1e3crvg"&&(e.innerHTML=s),i=g(b,"SCRIPT",{"data-svelte-h":!0}),Z(i)!=="svelte-1ccd4rw"&&(i.textContent=l),b.forEach(c),o=j(r),a=g(r,"HEADER",{});var ut=M(a);h=g(ut,"NAV",{id:!0,class:!0});var U=M(h);w=g(U,"A",{href:!0,"data-svelte-h":!0}),Z(w)!=="svelte-1xtw7rv"&&(w.innerHTML=k),S=j(U),u=g(U,"UL",{class:!0});var I=M(u);z=g(I,"LI",{});var pt=M(z);O=g(pt,"A",{href:!0,class:!0});var mt=M(O);tt($.$$.fragment,mt),mt.forEach(c),pt.forEach(c),q=j(I),W=g(I,"LI",{});var dt=M(W);x=g(dt,"A",{href:!0,class:!0});var vt=M(x);tt(_.$$.fragment,vt),vt.forEach(c),dt.forEach(c),K=j(I),R=g(I,"LI",{});var ft=M(R);y=g(ft,"A",{href:!0,class:!0});var gt=M(y);tt(L.$$.fragment,gt),gt.forEach(c),ft.forEach(c),A=j(I),C=g(I,"LI",{});var wt=M(C);T=g(wt,"A",{href:!0,class:!0});var St=M(T);tt(H.$$.fragment,St),St.forEach(c),wt.forEach(c),I.forEach(c),P=j(U),d=g(U,"A",{class:!0,href:!0,"data-svelte-h":!0}),Z(d)!=="svelte-b3al7p"&&(d.innerHTML=ht),U.forEach(c),ut.forEach(c),B=j(r),N=g(r,"MAIN",{class:!0});var _t=M(N);E&&E.l(_t),_t.forEach(c),this.h()},h(){e.async=!0,bt(e.src,n="https://www.googletagmanager.com/gtag/js?id=G-KG2ETJKJEL")||v(e,"src",n),v(w,"href",Y+"/"),v(O,"href",Y+"/team"),v(O,"class","hover:underline hover:opacity-75"),v(x,"href",Y+"/matches"),v(x,"class","hover:underline hover:opacity-75"),v(y,"href",Y+"/resources"),v(y,"class","hover:underline hover:opacity-75"),v(T,"href",Y+"/contact"),v(T,"class","hover:underline hover:opacity-75"),v(u,"class","grid grid-cols-2 grid-rows-2 font-mono gap-x-4"),v(d,"class","ml-auto font-mono text-orange-300 hover:underline hover:opacity-75"),v(d,"href",Y+"/timeline"),v(h,"id","navbar"),v(h,"class",V="transition-all border flex flex-row py-2 px-4 my-3 mx-4 rounded-lg gap-2 fixed h-16 w-[calc(100%-2rem)] items-center z-50 "+(m[0]?"border-stone-800/0":"border-stone-600/75 bg-stone-700/25 backdrop-blur-md")),v(N,"class","pt-24 pb-4 mx-4")},m(r,b){F(r,t,b),p(ot.head,e),p(ot.head,i),F(r,o,b),F(r,a,b),p(a,h),p(h,w),p(h,S),p(h,u),p(u,z),p(z,O),et($,O,null),p(u,q),p(u,W),p(W,x),et(_,x,null),p(u,K),p(u,R),p(R,y),et(L,y,null),p(u,A),p(u,C),p(C,T),et(H,T,null),p(h,P),p(h,d),F(r,B,b),F(r,N,b),E&&E.m(N,null),X=!0,nt||(ct=At(ot,"scroll",m[3]),nt=!0)},p(r,[b]){(!X||b&1&&V!==(V="transition-all border flex flex-row py-2 px-4 my-3 mx-4 rounded-lg gap-2 fixed h-16 w-[calc(100%-2rem)] items-center z-50 "+(r[0]?"border-stone-800/0":"border-stone-600/75 bg-stone-700/25 backdrop-blur-md")))&&v(h,"class",V),E&&E.p&&(!X||b&2)&&Lt(E,lt,r,r[1],X?zt(lt,r[1],b,null):Mt(r[1]),null)},i(r){X||(G($.$$.fragment,r),G(_.$$.fragment,r),G(L.$$.fragment,r),G(H.$$.fragment,r),G(E,r),X=!0)},o(r){J($.$$.fragment,r),J(_.$$.fragment,r),J(L.$$.fragment,r),J(H.$$.fragment,r),J(E,r),X=!1},d(r){r&&(c(t),c(o),c(a),c(B),c(N)),c(e),c(i),it($),it(_),it(L),it(H),E&&E.d(r),nt=!1,ct()}}}function Xt(m,t,e){let{$$slots:s={},$$scope:n}=t,i=!0;$t(()=>{const o=new kt({duration:.6});Ht(o);function a(h){o.raf(h),requestAnimationFrame(a)}requestAnimationFrame(a)});const l=()=>e(0,i=document.documentElement.scrollTop===0);return m.$$set=o=>{"$$scope"in o&&e(1,n=o.$$scope)},[i,n,s,l]}class Gt extends xt{constructor(t){super(),Rt(this,t,Xt,Nt,Tt,{})}}export{Gt as component,Ft as universal};
