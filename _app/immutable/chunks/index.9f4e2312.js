var C=Object.defineProperty;var B=(e,t,n)=>t in e?C(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var p=(e,t,n)=>(B(e,typeof t!="symbol"?t+"":t,n),n);import{v as h,n as y,y as w,z as D,x as b,A as T,B as N,C as H,D as j,E,F as L,G as M,H as P}from"./scheduler.f7cad496.js";let $=!1;function z(){$=!0}function I(){$=!1}function O(e,t,n,i){for(;e<t;){const r=e+(t-e>>1);n(r)<=i?e=r+1:t=r}return e}function R(e){if(e.hydrate_init)return;e.hydrate_init=!0;let t=e.childNodes;if(e.nodeName==="HEAD"){const s=[];for(let a=0;a<t.length;a++){const o=t[a];o.claim_order!==void 0&&s.push(o)}t=s}const n=new Int32Array(t.length+1),i=new Int32Array(t.length);n[0]=-1;let r=0;for(let s=0;s<t.length;s++){const a=t[s].claim_order,o=(r>0&&t[n[r]].claim_order<=a?r+1:O(1,r,_=>t[n[_]].claim_order,a))-1;i[s]=n[o]+1;const u=o+1;n[u]=s,r=Math.max(u,r)}const c=[],l=[];let f=t.length-1;for(let s=n[r]+1;s!=0;s=i[s-1]){for(c.push(t[s-1]);f>=s;f--)l.push(t[f]);f--}for(;f>=0;f--)l.push(t[f]);c.reverse(),l.sort((s,a)=>s.claim_order-a.claim_order);for(let s=0,a=0;s<l.length;s++){for(;a<c.length&&l[s].claim_order>=c[a].claim_order;)a++;const o=a<c.length?c[a]:null;e.insertBefore(l[s],o)}}function q(e,t){if($){for(R(e),(e.actual_end_child===void 0||e.actual_end_child!==null&&e.actual_end_child.parentNode!==e)&&(e.actual_end_child=e.firstChild);e.actual_end_child!==null&&e.actual_end_child.claim_order===void 0;)e.actual_end_child=e.actual_end_child.nextSibling;t!==e.actual_end_child?(t.claim_order!==void 0||t.parentNode!==e)&&e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling}else(t.parentNode!==e||t.nextSibling!==null)&&e.appendChild(t)}function ne(e,t,n){$&&!n?q(e,t):(t.parentNode!==e||t.nextSibling!=n)&&e.insertBefore(t,n||null)}function F(e){e.parentNode&&e.parentNode.removeChild(e)}function ie(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function G(e){return document.createElement(e)}function V(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function x(e){return document.createTextNode(e)}function re(){return x(" ")}function se(){return x("")}function ae(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function W(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function le(e,t){for(const n in t)W(e,n,t[n])}function ce(e){return e.dataset.svelteH}function J(e){return Array.from(e.childNodes)}function K(e){e.claim_info===void 0&&(e.claim_info={last_index:0,total_claimed:0})}function A(e,t,n,i,r=!1){K(e);const c=(()=>{for(let l=e.claim_info.last_index;l<e.length;l++){const f=e[l];if(t(f)){const s=n(f);return s===void 0?e.splice(l,1):e[l]=s,r||(e.claim_info.last_index=l),f}}for(let l=e.claim_info.last_index-1;l>=0;l--){const f=e[l];if(t(f)){const s=n(f);return s===void 0?e.splice(l,1):e[l]=s,r?s===void 0&&e.claim_info.last_index--:e.claim_info.last_index=l,f}}return i()})();return c.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1,c}function S(e,t,n,i){return A(e,r=>r.nodeName===t,r=>{const c=[];for(let l=0;l<r.attributes.length;l++){const f=r.attributes[l];n[f.name]||c.push(f.name)}c.forEach(l=>r.removeAttribute(l))},()=>i(t))}function fe(e,t,n){return S(e,t,n,G)}function ue(e,t,n){return S(e,t,n,V)}function Q(e,t){return A(e,n=>n.nodeType===3,n=>{const i=""+t;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>x(t),!0)}function oe(e){return Q(e," ")}function de(e,t){t=""+t,e.data!==t&&(e.data=t)}function _e(e,t,n,i){n==null?e.style.removeProperty(t):e.style.setProperty(t,n,i?"important":"")}function me(e,t){const n=[];let i=0;for(const r of t.childNodes)if(r.nodeType===8){const c=r.textContent.trim();c===`HEAD_${e}_END`?(i-=1,n.push(r)):c===`HEAD_${e}_START`&&(i+=1,n.push(r))}else i>0&&n.push(r);return n}function he(e,t){return new e(t)}const m=new Set;let d;function $e(){d={r:0,c:[],p:d}}function pe(){d.r||h(d.c),d=d.p}function U(e,t){e&&e.i&&(m.delete(e),e.i(t))}function ye(e,t,n,i){if(e&&e.o){if(m.has(e))return;m.add(e),d.c.push(()=>{m.delete(e),i&&(n&&e.d(1),i())}),e.o(t)}else i&&i()}function xe(e){e&&e.c()}function ge(e,t){e&&e.l(t)}function X(e,t,n){const{fragment:i,after_update:r}=e.$$;i&&i.m(t,n),N(()=>{const c=e.$$.on_mount.map(L).filter(b);e.$$.on_destroy?e.$$.on_destroy.push(...c):h(c),e.$$.on_mount=[]}),r.forEach(N)}function Y(e,t){const n=e.$$;n.fragment!==null&&(H(n.after_update),h(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Z(e,t){e.$$.dirty[0]===-1&&(M.push(e),P(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function ve(e,t,n,i,r,c,l,f=[-1]){const s=j;E(e);const a=e.$$={fragment:null,ctx:[],props:c,update:y,not_equal:r,bound:w(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(s?s.$$.context:[])),callbacks:w(),dirty:f,skip_bound:!1,root:t.target||s.$$.root};l&&l(a.root);let o=!1;if(a.ctx=n?n(e,t.props||{},(u,_,...g)=>{const v=g.length?g[0]:_;return a.ctx&&r(a.ctx[u],a.ctx[u]=v)&&(!a.skip_bound&&a.bound[u]&&a.bound[u](v),o&&Z(e,u)),_}):[],a.update(),o=!0,h(a.before_update),a.fragment=i?i(a.ctx):!1,t.target){if(t.hydrate){z();const u=J(t.target);a.fragment&&a.fragment.l(u),u.forEach(F)}else a.fragment&&a.fragment.c();t.intro&&U(e.$$.fragment),X(e,t.target,t.anchor),I(),D()}E(s)}class we{constructor(){p(this,"$$");p(this,"$$set")}$destroy(){Y(this,1),this.$destroy=y}$on(t,n){if(!b(n))return y;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(t){this.$$set&&!T(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const k="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(k);export{ae as A,V as B,ue as C,le as D,ie as E,we as S,ne as a,pe as b,oe as c,U as d,se as e,F as f,G as g,fe as h,ve as i,J as j,W as k,_e as l,x as m,Q as n,de as o,$e as p,he as q,xe as r,re as s,ye as t,ge as u,X as v,Y as w,me as x,ce as y,q as z};
