(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const _ of i.addedNodes)_.tagName==="LINK"&&_.rel==="modulepreload"&&o(_)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();var fe,p,it,I,We,st,we,Z={},at=[],Et=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,he=Array.isArray;function F(e,t){for(var n in t)e[n]=t[n];return e}function _t(e){var t=e.parentNode;t&&t.removeChild(e)}function ke(e,t,n){var o,r,i,_={};for(i in t)i=="key"?o=t[i]:i=="ref"?r=t[i]:_[i]=t[i];if(arguments.length>2&&(_.children=arguments.length>3?fe.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(i in e.defaultProps)_[i]===void 0&&(_[i]=e.defaultProps[i]);return se(e,_,o,r,null)}function se(e,t,n,o,r){var i={type:e,props:t,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:r??++it,__i:-1,__u:0};return r==null&&p.vnode!=null&&p.vnode(i),i}function V(e){return e.children}function M(e,t){this.props=e,this.context=t}function Y(e,t){if(t==null)return e.__?Y(e.__,e.__i+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?Y(e):null}function lt(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return lt(e)}}function Fe(e){(!e.__d&&(e.__d=!0)&&I.push(e)&&!le.__r++||We!==p.debounceRendering)&&((We=p.debounceRendering)||st)(le)}function le(){var e,t,n,o,r,i,_,a,c;for(I.sort(we);e=I.shift();)e.__d&&(t=I.length,o=void 0,i=(r=(n=e).__v).__e,a=[],c=[],(_=n.__P)&&((o=F({},r)).__v=r.__v+1,Ce(_,o,r,n.__n,_.ownerSVGElement!==void 0,32&r.__u?[i]:null,a,i??Y(r),!!(32&r.__u),c),o.__.__k[o.__i]=o,dt(a,o,c),o.__e!=i&&lt(o)),I.length>t&&I.sort(we));le.__r=0}function ct(e,t,n,o,r,i,_,a,c,l,f){var s,h,d,v,b,y=o&&o.__k||at,g=t.length;for(n.__d=c,Tt(n,t,y),c=n.__d,s=0;s<g;s++)(d=n.__k[s])!=null&&typeof d!="boolean"&&typeof d!="function"&&(h=d.__i===-1?Z:y[d.__i]||Z,d.__i=s,Ce(e,d,h,r,i,_,a,c,l,f),v=d.__e,d.ref&&h.ref!=d.ref&&(h.ref&&Pe(h.ref,null,d),f.push(d.ref,d.__c||v,d)),b==null&&v!=null&&(b=v),65536&d.__u||h.__k===d.__k?c=ut(d,c,e):typeof d.type=="function"&&d.__d!==void 0?c=d.__d:v&&(c=v.nextSibling),d.__d=void 0,d.__u&=-196609);n.__d=c,n.__e=b}function Tt(e,t,n){var o,r,i,_,a,c=t.length,l=n.length,f=l,s=0;for(e.__k=[],o=0;o<c;o++)(r=e.__k[o]=(r=t[o])==null||typeof r=="boolean"||typeof r=="function"?null:typeof r=="string"||typeof r=="number"||typeof r=="bigint"||r.constructor==String?se(null,r,null,null,r):he(r)?se(V,{children:r},null,null,null):r.__b>0?se(r.type,r.props,r.key,r.ref?r.ref:null,r.__v):r)!=null?(r.__=e,r.__b=e.__b+1,a=Ct(r,n,_=o+s,f),r.__i=a,i=null,a!==-1&&(f--,(i=n[a])&&(i.__u|=131072)),i==null||i.__v===null?(a==-1&&s--,typeof r.type!="function"&&(r.__u|=65536)):a!==_&&(a===_+1?s++:a>_?f>c-_?s+=a-_:s--:s=a<_&&a==_-1?a-_:0,a!==o+s&&(r.__u|=65536))):(i=n[o])&&i.key==null&&i.__e&&(i.__e==e.__d&&(e.__d=Y(i)),Se(i,i,!1),n[o]=null,f--);if(f)for(o=0;o<l;o++)(i=n[o])!=null&&!(131072&i.__u)&&(i.__e==e.__d&&(e.__d=Y(i)),Se(i,i))}function ut(e,t,n){var o,r;if(typeof e.type=="function"){for(o=e.__k,r=0;o&&r<o.length;r++)o[r]&&(o[r].__=e,t=ut(o[r],t,n));return t}return e.__e!=t&&(n.insertBefore(e.__e,t||null),t=e.__e),t&&t.nextSibling}function ce(e,t){return t=t||[],e==null||typeof e=="boolean"||(he(e)?e.some(function(n){ce(n,t)}):t.push(e)),t}function Ct(e,t,n,o){var r=e.key,i=e.type,_=n-1,a=n+1,c=t[n];if(c===null||c&&r==c.key&&i===c.type)return n;if(o>(c!=null&&!(131072&c.__u)?1:0))for(;_>=0||a<t.length;){if(_>=0){if((c=t[_])&&!(131072&c.__u)&&r==c.key&&i===c.type)return _;_--}if(a<t.length){if((c=t[a])&&!(131072&c.__u)&&r==c.key&&i===c.type)return a;a++}}return-1}function Ue(e,t,n){t[0]==="-"?e.setProperty(t,n??""):e[t]=n==null?"":typeof n!="number"||Et.test(t)?n:n+"px"}function re(e,t,n,o,r){var i;e:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof o=="string"&&(e.style.cssText=o=""),o)for(t in o)n&&t in n||Ue(e.style,t,"");if(n)for(t in n)o&&n[t]===o[t]||Ue(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")i=t!==(t=t.replace(/(PointerCapture)$|Capture$/,"$1")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+i]=n,n?o?n.u=o.u:(n.u=Date.now(),e.addEventListener(t,i?Re:Ie,i)):e.removeEventListener(t,i?Re:Ie,i);else{if(r)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!=="width"&&t!=="height"&&t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t!=="rowSpan"&&t!=="colSpan"&&t!=="role"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n==null||n===!1&&t[4]!=="-"?e.removeAttribute(t):e.setAttribute(t,n))}}function Ie(e){var t=this.l[e.type+!1];if(e.t){if(e.t<=t.u)return}else e.t=Date.now();return t(p.event?p.event(e):e)}function Re(e){return this.l[e.type+!0](p.event?p.event(e):e)}function Ce(e,t,n,o,r,i,_,a,c,l){var f,s,h,d,v,b,y,g,k,C,L,O,ne,N,A,x=t.type;if(t.constructor!==void 0)return null;128&n.__u&&(c=!!(32&n.__u),i=[a=t.__e=n.__e]),(f=p.__b)&&f(t);e:if(typeof x=="function")try{if(g=t.props,k=(f=x.contextType)&&o[f.__c],C=f?k?k.props.value:f.__:o,n.__c?y=(s=t.__c=n.__c).__=s.__E:("prototype"in x&&x.prototype.render?t.__c=s=new x(g,C):(t.__c=s=new M(g,C),s.constructor=x,s.render=Nt),k&&k.sub(s),s.props=g,s.state||(s.state={}),s.context=C,s.__n=o,h=s.__d=!0,s.__h=[],s._sb=[]),s.__s==null&&(s.__s=s.state),x.getDerivedStateFromProps!=null&&(s.__s==s.state&&(s.__s=F({},s.__s)),F(s.__s,x.getDerivedStateFromProps(g,s.__s))),d=s.props,v=s.state,s.__v=t,h)x.getDerivedStateFromProps==null&&s.componentWillMount!=null&&s.componentWillMount(),s.componentDidMount!=null&&s.__h.push(s.componentDidMount);else{if(x.getDerivedStateFromProps==null&&g!==d&&s.componentWillReceiveProps!=null&&s.componentWillReceiveProps(g,C),!s.__e&&(s.shouldComponentUpdate!=null&&s.shouldComponentUpdate(g,s.__s,C)===!1||t.__v===n.__v)){for(t.__v!==n.__v&&(s.props=g,s.state=s.__s,s.__d=!1),t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function(D){D&&(D.__=t)}),L=0;L<s._sb.length;L++)s.__h.push(s._sb[L]);s._sb=[],s.__h.length&&_.push(s);break e}s.componentWillUpdate!=null&&s.componentWillUpdate(g,s.__s,C),s.componentDidUpdate!=null&&s.__h.push(function(){s.componentDidUpdate(d,v,b)})}if(s.context=C,s.props=g,s.__P=e,s.__e=!1,O=p.__r,ne=0,"prototype"in x&&x.prototype.render){for(s.state=s.__s,s.__d=!1,O&&O(t),f=s.render(s.props,s.state,s.context),N=0;N<s._sb.length;N++)s.__h.push(s._sb[N]);s._sb=[]}else do s.__d=!1,O&&O(t),f=s.render(s.props,s.state,s.context),s.state=s.__s;while(s.__d&&++ne<25);s.state=s.__s,s.getChildContext!=null&&(o=F(F({},o),s.getChildContext())),h||s.getSnapshotBeforeUpdate==null||(b=s.getSnapshotBeforeUpdate(d,v)),ct(e,he(A=f!=null&&f.type===V&&f.key==null?f.props.children:f)?A:[A],t,n,o,r,i,_,a,c,l),s.base=t.__e,t.__u&=-161,s.__h.length&&_.push(s),y&&(s.__E=s.__=null)}catch(D){t.__v=null,c||i!=null?(t.__e=a,t.__u|=c?160:32,i[i.indexOf(a)]=null):(t.__e=n.__e,t.__k=n.__k),p.__e(D,t,n)}else i==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=Pt(n.__e,t,n,o,r,i,_,c,l);(f=p.diffed)&&f(t)}function dt(e,t,n){t.__d=void 0;for(var o=0;o<n.length;o++)Pe(n[o],n[++o],n[++o]);p.__c&&p.__c(t,e),e.some(function(r){try{e=r.__h,r.__h=[],e.some(function(i){i.call(r)})}catch(i){p.__e(i,r.__v)}})}function Pt(e,t,n,o,r,i,_,a,c){var l,f,s,h,d,v,b,y=n.props,g=t.props,k=t.type;if(k==="svg"&&(r=!0),i!=null){for(l=0;l<i.length;l++)if((d=i[l])&&"setAttribute"in d==!!k&&(k?d.localName===k:d.nodeType===3)){e=d,i[l]=null;break}}if(e==null){if(k===null)return document.createTextNode(g);e=r?document.createElementNS("http://www.w3.org/2000/svg",k):document.createElement(k,g.is&&g),i=null,a=!1}if(k===null)y===g||a&&e.data===g||(e.data=g);else{if(i=i&&fe.call(e.childNodes),y=n.props||Z,!a&&i!=null)for(y={},l=0;l<e.attributes.length;l++)y[(d=e.attributes[l]).name]=d.value;for(l in y)d=y[l],l=="children"||(l=="dangerouslySetInnerHTML"?s=d:l==="key"||l in g||re(e,l,null,d,r));for(l in g)d=g[l],l=="children"?h=d:l=="dangerouslySetInnerHTML"?f=d:l=="value"?v=d:l=="checked"?b=d:l==="key"||a&&typeof d!="function"||y[l]===d||re(e,l,d,y[l],r);if(f)a||s&&(f.__html===s.__html||f.__html===e.innerHTML)||(e.innerHTML=f.__html),t.__k=[];else if(s&&(e.innerHTML=""),ct(e,he(h)?h:[h],t,n,o,r&&k!=="foreignObject",i,_,i?i[0]:n.__k&&Y(n,0),a,c),i!=null)for(l=i.length;l--;)i[l]!=null&&_t(i[l]);a||(l="value",v!==void 0&&(v!==e[l]||k==="progress"&&!v||k==="option"&&v!==y[l])&&re(e,l,v,y[l],!1),l="checked",b!==void 0&&b!==e[l]&&re(e,l,b,y[l],!1))}return e}function Pe(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(o){p.__e(o,n)}}function Se(e,t,n){var o,r;if(p.unmount&&p.unmount(e),(o=e.ref)&&(o.current&&o.current!==e.__e||Pe(o,null,t)),(o=e.__c)!=null){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(i){p.__e(i,t)}o.base=o.__P=null,e.__c=void 0}if(o=e.__k)for(r=0;r<o.length;r++)o[r]&&Se(o[r],t,n||typeof e.type!="function");n||e.__e==null||_t(e.__e),e.__=e.__e=e.__d=void 0}function Nt(e,t,n){return this.constructor(e,n)}function $t(e,t,n){var o,r,i,_;p.__&&p.__(e,t),r=(o=typeof n=="function")?null:n&&n.__k||t.__k,i=[],_=[],Ce(t,e=(!o&&n||t).__k=ke(V,null,[e]),r||Z,Z,t.ownerSVGElement!==void 0,!o&&n?[n]:r?null:t.firstChild?fe.call(t.childNodes):null,i,!o&&n?n:r?r.__e:t.firstChild,o,_),dt(i,e,_)}fe=at.slice,p={__e:function(e,t,n,o){for(var r,i,_;t=t.__;)if((r=t.__c)&&!r.__)try{if((i=r.constructor)&&i.getDerivedStateFromError!=null&&(r.setState(i.getDerivedStateFromError(e)),_=r.__d),r.componentDidCatch!=null&&(r.componentDidCatch(e,o||{}),_=r.__d),_)return r.__E=r}catch(a){e=a}throw e}},it=0,M.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=F({},this.state),typeof e=="function"&&(e=e(F({},n),this.props)),e&&F(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),Fe(this))},M.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),Fe(this))},M.prototype.render=V,I=[],st=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,we=function(e,t){return e.__v.__b-t.__v.__b},le.__r=0;var K,w,ve,ze,ue=0,pt=[],ae=[],Le=p.__b,De=p.__r,qe=p.diffed,Be=p.__c,je=p.unmount;function Ne(e,t){p.__h&&p.__h(w,e,ue||t),ue=0;var n=w.__H||(w.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({__V:ae}),n.__[e]}function W(e){return ue=1,Ht(ht,e)}function Ht(e,t,n){var o=Ne(K++,2);if(o.t=e,!o.__c&&(o.__=[n?n(t):ht(void 0,t),function(a){var c=o.__N?o.__N[0]:o.__[0],l=o.t(c,a);c!==l&&(o.__N=[l,o.__[1]],o.__c.setState({}))}],o.__c=w,!w.u)){var r=function(a,c,l){if(!o.__c.__H)return!0;var f=o.__c.__H.__.filter(function(h){return h.__c});if(f.every(function(h){return!h.__N}))return!i||i.call(this,a,c,l);var s=!1;return f.forEach(function(h){if(h.__N){var d=h.__[0];h.__=h.__N,h.__N=void 0,d!==h.__[0]&&(s=!0)}}),!(!s&&o.__c.props===a)&&(!i||i.call(this,a,c,l))};w.u=!0;var i=w.shouldComponentUpdate,_=w.componentWillUpdate;w.componentWillUpdate=function(a,c,l){if(this.__e){var f=i;i=void 0,r(a,c,l),i=f}_&&_.call(this,a,c,l)},w.shouldComponentUpdate=r}return o.__N||o.__}function Mt(e,t){var n=Ne(K++,3);!p.__s&&ft(n.__H,t)&&(n.__=e,n.i=t,w.__H.__h.push(n))}function ge(e){return ue=5,Ot(function(){return{current:e}},[])}function Ot(e,t){var n=Ne(K++,7);return ft(n.__H,t)?(n.__V=e(),n.i=t,n.__h=e,n.__V):n.__}function At(){for(var e;e=pt.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(_e),e.__H.__h.forEach(xe),e.__H.__h=[]}catch(t){e.__H.__h=[],p.__e(t,e.__v)}}p.__b=function(e){w=null,Le&&Le(e)},p.__r=function(e){De&&De(e),K=0;var t=(w=e.__c).__H;t&&(ve===w?(t.__h=[],w.__h=[],t.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=ae,n.__N=n.i=void 0})):(t.__h.forEach(_e),t.__h.forEach(xe),t.__h=[],K=0)),ve=w},p.diffed=function(e){qe&&qe(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(pt.push(t)!==1&&ze===p.requestAnimationFrame||((ze=p.requestAnimationFrame)||Wt)(At)),t.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==ae&&(n.__=n.__V),n.i=void 0,n.__V=ae})),ve=w=null},p.__c=function(e,t){t.some(function(n){try{n.__h.forEach(_e),n.__h=n.__h.filter(function(o){return!o.__||xe(o)})}catch(o){t.some(function(r){r.__h&&(r.__h=[])}),t=[],p.__e(o,n.__v)}}),Be&&Be(e,t)},p.unmount=function(e){je&&je(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(o){try{_e(o)}catch(r){t=r}}),n.__H=void 0,t&&p.__e(t,n.__v))};var Ve=typeof requestAnimationFrame=="function";function Wt(e){var t,n=function(){clearTimeout(o),Ve&&cancelAnimationFrame(t),setTimeout(e)},o=setTimeout(n,100);Ve&&(t=requestAnimationFrame(n))}function _e(e){var t=w,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),w=t}function xe(e){var t=w;e.__c=e.__(),w=t}function ft(e,t){return!e||e.length!==t.length||t.some(function(n,o){return n!==e[o]})}function ht(e,t){return typeof t=="function"?t(e):t}function Ft(e,t){for(var n in t)e[n]=t[n];return e}function Ye(e,t){for(var n in e)if(n!=="__source"&&!(n in t))return!0;for(var o in t)if(o!=="__source"&&e[o]!==t[o])return!0;return!1}function Xe(e){this.props=e}(Xe.prototype=new M).isPureReactComponent=!0,Xe.prototype.shouldComponentUpdate=function(e,t){return Ye(this.props,e)||Ye(this.state,t)};var Ge=p.__b;p.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),Ge&&Ge(e)};var Ut=p.__e;p.__e=function(e,t,n,o){if(e.then){for(var r,i=t;i=i.__;)if((r=i.__c)&&r.__c)return t.__e==null&&(t.__e=n.__e,t.__k=n.__k),r.__c(e,t)}Ut(e,t,n,o)};var Je=p.unmount;function mt(e,t,n){return e&&(e.__c&&e.__c.__H&&(e.__c.__H.__.forEach(function(o){typeof o.__c=="function"&&o.__c()}),e.__c.__H=null),(e=Ft({},e)).__c!=null&&(e.__c.__P===n&&(e.__c.__P=t),e.__c=null),e.__k=e.__k&&e.__k.map(function(o){return mt(o,t,n)})),e}function vt(e,t,n){return e&&n&&(e.__v=null,e.__k=e.__k&&e.__k.map(function(o){return vt(o,t,n)}),e.__c&&e.__c.__P===t&&(e.__e&&n.appendChild(e.__e),e.__c.__e=!0,e.__c.__P=n)),e}function ye(){this.__u=0,this.t=null,this.__b=null}function gt(e){var t=e.__.__c;return t&&t.__a&&t.__a(e)}function ie(){this.u=null,this.o=null}p.unmount=function(e){var t=e.__c;t&&t.__R&&t.__R(),t&&32&e.__u&&(e.type=null),Je&&Je(e)},(ye.prototype=new M).__c=function(e,t){var n=t.__c,o=this;o.t==null&&(o.t=[]),o.t.push(n);var r=gt(o.__v),i=!1,_=function(){i||(i=!0,n.__R=null,r?r(a):a())};n.__R=_;var a=function(){if(!--o.__u){if(o.state.__a){var c=o.state.__a;o.__v.__k[0]=vt(c,c.__c.__P,c.__c.__O)}var l;for(o.setState({__a:o.__b=null});l=o.t.pop();)l.forceUpdate()}};o.__u++||32&t.__u||o.setState({__a:o.__b=o.__v.__k[0]}),e.then(_,_)},ye.prototype.componentWillUnmount=function(){this.t=[]},ye.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var n=document.createElement("div"),o=this.__v.__k[0].__c;this.__v.__k[0]=mt(this.__b,n,o.__O=o.__P)}this.__b=null}var r=t.__a&&ke(V,null,e.fallback);return r&&(r.__u&=-33),[ke(V,null,t.__a?null:e.children),r]};var Qe=function(e,t,n){if(++n[1]===n[0]&&e.o.delete(t),e.props.revealOrder&&(e.props.revealOrder[0]!=="t"||!e.o.size))for(n=e.u;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;e.u=n=n[2]}};(ie.prototype=new M).__a=function(e){var t=this,n=gt(t.__v),o=t.o.get(e);return o[0]++,function(r){var i=function(){t.props.revealOrder?(o.push(r),Qe(t,e,o)):r()};n?n(i):i()}},ie.prototype.render=function(e){this.u=null,this.o=new Map;var t=ce(e.children);e.revealOrder&&e.revealOrder[0]==="b"&&t.reverse();for(var n=t.length;n--;)this.o.set(t[n],this.u=[1,0,this.u]);return e.children},ie.prototype.componentDidUpdate=ie.prototype.componentDidMount=function(){var e=this;this.o.forEach(function(t,n){Qe(e,n,t)})};var It=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,Rt=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,zt=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,Lt=/[A-Z0-9]/g,Dt=typeof document<"u",qt=function(e){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/:/fil|che|ra/).test(e)};M.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty(M.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})});var Ze=p.event;function Bt(){}function jt(){return this.cancelBubble}function Vt(){return this.defaultPrevented}p.event=function(e){return Ze&&(e=Ze(e)),e.persist=Bt,e.isPropagationStopped=jt,e.isDefaultPrevented=Vt,e.nativeEvent=e};var Yt={enumerable:!1,configurable:!0,get:function(){return this.class}},Ke=p.vnode;p.vnode=function(e){typeof e.type=="string"&&function(t){var n=t.props,o=t.type,r={};for(var i in n){var _=n[i];if(!(i==="value"&&"defaultValue"in n&&_==null||Dt&&i==="children"&&o==="noscript"||i==="class"||i==="className")){var a=i.toLowerCase();i==="defaultValue"&&"value"in n&&n.value==null?i="value":i==="download"&&_===!0?_="":a==="ondoubleclick"?i="ondblclick":a!=="onchange"||o!=="input"&&o!=="textarea"||qt(n.type)?a==="onfocus"?i="onfocusin":a==="onblur"?i="onfocusout":zt.test(i)?i=a:o.indexOf("-")===-1&&Rt.test(i)?i=i.replace(Lt,"-$&").toLowerCase():_===null&&(_=void 0):a=i="oninput",a==="oninput"&&r[i=a]&&(i="oninputCapture"),r[i]=_}}o=="select"&&r.multiple&&Array.isArray(r.value)&&(r.value=ce(n.children).forEach(function(c){c.props.selected=r.value.indexOf(c.props.value)!=-1})),o=="select"&&r.defaultValue!=null&&(r.value=ce(n.children).forEach(function(c){c.props.selected=r.multiple?r.defaultValue.indexOf(c.props.value)!=-1:r.defaultValue==c.props.value})),n.class&&!n.className?(r.class=n.class,Object.defineProperty(r,"className",Yt)):(n.className&&!n.class||n.class&&n.className)&&(r.class=r.className=n.className),t.props=r}(e),e.$$typeof=It,Ke&&Ke(e)};var et=p.__r;p.__r=function(e){et&&et(e),e.__c};var tt=p.diffed;p.diffed=function(e){tt&&tt(e);var t=e.props,n=e.__e;n!=null&&e.type==="textarea"&&"value"in t&&t.value!==n.value&&(n.value=t.value==null?"":t.value)};const yt=new Set,E=new WeakMap,X=new WeakMap,R=new WeakMap,Ee=new WeakMap,Xt=new WeakMap,G=new WeakMap,de=new WeakMap,Q=new WeakSet;let U,$e=0,He=0;const H="__aa_tgt",ee="__aa_del",pe="__aa_new",Gt=e=>{const t=en(e);t&&t.forEach(n=>tn(n))},Jt=e=>{e.forEach(t=>{t.target===U&&Zt(),E.has(t.target)&&z(t.target)})};function Qt(e){const t=Ee.get(e);t==null||t.disconnect();let n=E.get(e),o=0;const r=5;n||(n=J(e),E.set(e,n));const{offsetWidth:i,offsetHeight:_}=U,c=[n.top-r,i-(n.left+r+n.width),_-(n.top+r+n.height),n.left-r].map(f=>`${-1*Math.floor(f)}px`).join(" "),l=new IntersectionObserver(()=>{++o>1&&z(e)},{root:U,threshold:1,rootMargin:c});l.observe(e),Ee.set(e,l)}function z(e){clearTimeout(de.get(e));const t=me(e),n=te(t)?500:t.duration;de.set(e,setTimeout(async()=>{const o=R.get(e);try{await(o==null?void 0:o.finished),E.set(e,J(e)),Qt(e)}catch{}},n))}function Zt(){clearTimeout(de.get(U)),de.set(U,setTimeout(()=>{yt.forEach(e=>St(e,t=>bt(()=>z(t))))},100))}function Kt(e){setTimeout(()=>{Xt.set(e,setInterval(()=>bt(z.bind(null,e)),2e3))},Math.round(2e3*Math.random()))}function bt(e){typeof requestIdleCallback=="function"?requestIdleCallback(()=>e()):requestAnimationFrame(()=>e())}let Te,j;typeof window<"u"&&(U=document.documentElement,Te=new MutationObserver(Gt),j=new ResizeObserver(Jt),window.addEventListener("scroll",()=>{He=window.scrollY,$e=window.scrollX}),j.observe(U));function en(e){return e.reduce((o,r)=>[...o,...Array.from(r.addedNodes),...Array.from(r.removedNodes)],[]).every(o=>o.nodeName==="#comment")?!1:e.reduce((o,r)=>{if(o===!1)return!1;if(r.target instanceof Element){if(be(r.target),!o.has(r.target)){o.add(r.target);for(let i=0;i<r.target.children.length;i++){const _=r.target.children.item(i);if(_){if(ee in _)return!1;be(r.target,_),o.add(_)}}}if(r.removedNodes.length)for(let i=0;i<r.removedNodes.length;i++){const _=r.removedNodes[i];if(ee in _)return!1;_ instanceof Element&&(o.add(_),be(r.target,_),X.set(_,[r.previousSibling,r.nextSibling]))}}return o},new Set)}function be(e,t){!t&&!(H in e)?Object.defineProperty(e,H,{value:e}):t&&!(H in t)&&Object.defineProperty(t,H,{value:e})}function tn(e){var t;const n=e.isConnected,o=E.has(e);n&&X.has(e)&&X.delete(e),R.has(e)&&((t=R.get(e))===null||t===void 0||t.cancel()),pe in e?nt(e):o&&n?on(e):o&&!n?rn(e):nt(e)}function P(e){return Number(e.replace(/[^0-9.\-]/g,""))}function nn(e){let t=e.parentElement;for(;t;){if(t.scrollLeft||t.scrollTop)return{x:t.scrollLeft,y:t.scrollTop};t=t.parentElement}return{x:0,y:0}}function J(e){const t=e.getBoundingClientRect(),{x:n,y:o}=nn(e);return{top:t.top+o,left:t.left+n,width:t.width,height:t.height}}function wt(e,t,n){let o=t.width,r=t.height,i=n.width,_=n.height;const a=getComputedStyle(e);if(a.getPropertyValue("box-sizing")==="content-box"){const l=P(a.paddingTop)+P(a.paddingBottom)+P(a.borderTopWidth)+P(a.borderBottomWidth),f=P(a.paddingLeft)+P(a.paddingRight)+P(a.borderRightWidth)+P(a.borderLeftWidth);o-=f,i-=f,r-=l,_-=l}return[o,i,r,_].map(Math.round)}function me(e){return H in e&&G.has(e[H])?G.get(e[H]):{duration:250,easing:"ease-in-out"}}function kt(e){if(H in e)return e[H]}function Me(e){const t=kt(e);return t?Q.has(t):!1}function St(e,...t){t.forEach(n=>n(e,G.has(e)));for(let n=0;n<e.children.length;n++){const o=e.children.item(n);o&&t.forEach(r=>r(o,G.has(o)))}}function Oe(e){return Array.isArray(e)?e:[e]}function te(e){return typeof e=="function"}function on(e){const t=E.get(e),n=J(e);if(!Me(e))return E.set(e,n);let o;if(!t)return;const r=me(e);if(typeof r!="function"){const i=t.left-n.left,_=t.top-n.top,[a,c,l,f]=wt(e,t,n),s={transform:`translate(${i}px, ${_}px)`},h={transform:"translate(0, 0)"};a!==c&&(s.width=`${a}px`,h.width=`${c}px`),l!==f&&(s.height=`${l}px`,h.height=`${f}px`),o=e.animate([s,h],{duration:r.duration,easing:r.easing})}else{const[i]=Oe(r(e,"remain",t,n));o=new Animation(i),o.play()}R.set(e,o),E.set(e,n),o.addEventListener("finish",z.bind(null,e))}function nt(e){pe in e&&delete e[pe];const t=J(e);E.set(e,t);const n=me(e);if(!Me(e))return;let o;if(typeof n!="function")o=e.animate([{transform:"scale(.98)",opacity:0},{transform:"scale(0.98)",opacity:0,offset:.5},{transform:"scale(1)",opacity:1}],{duration:n.duration*1.5,easing:"ease-in"});else{const[r]=Oe(n(e,"add",t));o=new Animation(r),o.play()}R.set(e,o),o.addEventListener("finish",z.bind(null,e))}function ot(e,t){var n;e.remove(),E.delete(e),X.delete(e),R.delete(e),(n=Ee.get(e))===null||n===void 0||n.disconnect(),setTimeout(()=>{if(ee in e&&delete e[ee],Object.defineProperty(e,pe,{value:!0,configurable:!0}),t&&e instanceof HTMLElement)for(const o in t)e.style[o]=""},0)}function rn(e){var t;if(!X.has(e)||!E.has(e))return;const[n,o]=X.get(e);Object.defineProperty(e,ee,{value:!0,configurable:!0});const r=window.scrollX,i=window.scrollY;if(o&&o.parentNode&&o.parentNode instanceof Element?o.parentNode.insertBefore(e,o):n&&n.parentNode?n.parentNode.appendChild(e):(t=kt(e))===null||t===void 0||t.appendChild(e),!Me(e))return ot(e);const[_,a,c,l]=an(e),f=me(e),s=E.get(e);(r!==$e||i!==He)&&sn(e,r,i,f);let h,d={position:"absolute",top:`${_}px`,left:`${a}px`,width:`${c}px`,height:`${l}px`,margin:"0",pointerEvents:"none",transformOrigin:"center",zIndex:"100"};if(!te(f))Object.assign(e.style,d),h=e.animate([{transform:"scale(1)",opacity:1},{transform:"scale(.98)",opacity:0}],{duration:f.duration,easing:"ease-out"});else{const[v,b]=Oe(f(e,"remove",s));(b==null?void 0:b.styleReset)!==!1&&(d=(b==null?void 0:b.styleReset)||d,Object.assign(e.style,d)),h=new Animation(v),h.play()}R.set(e,h),h.addEventListener("finish",ot.bind(null,e,d))}function sn(e,t,n,o){const r=$e-t,i=He-n,_=document.documentElement.style.scrollBehavior;if(getComputedStyle(U).scrollBehavior==="smooth"&&(document.documentElement.style.scrollBehavior="auto"),window.scrollTo(window.scrollX+r,window.scrollY+i),!e.parentElement)return;const c=e.parentElement;let l=c.clientHeight,f=c.clientWidth;const s=performance.now();function h(){requestAnimationFrame(()=>{if(!te(o)){const d=l-c.clientHeight,v=f-c.clientWidth;s+o.duration>performance.now()?(window.scrollTo({left:window.scrollX-v,top:window.scrollY-d}),l=c.clientHeight,f=c.clientWidth,h()):document.documentElement.style.scrollBehavior=_}})}h()}function an(e){const t=E.get(e),[n,,o]=wt(e,t,J(e));let r=e.parentElement;for(;r&&(getComputedStyle(r).position==="static"||r instanceof HTMLBodyElement);)r=r.parentElement;r||(r=document.body);const i=getComputedStyle(r),_=E.get(r)||J(r),a=Math.round(t.top-_.top)-P(i.borderTopWidth),c=Math.round(t.left-_.left)-P(i.borderLeftWidth);return[a,c,n,o]}function rt(e,t={}){return Te&&j&&(window.matchMedia("(prefers-reduced-motion: reduce)").matches&&!te(t)&&!t.disrespectUserMotionPreference||(Q.add(e),getComputedStyle(e).position==="static"&&Object.assign(e.style,{position:"relative"}),St(e,z,Kt,r=>j==null?void 0:j.observe(r)),te(t)?G.set(e,t):G.set(e,{duration:250,easing:"ease-in-out",...t}),Te.observe(e,{childList:!0}),yt.add(e))),Object.freeze({parent:e,enable:()=>{Q.add(e)},disable:()=>{Q.delete(e)},isEnabled:()=>Q.has(e)})}var _n=0;function u(e,t,n,o,r,i){var _,a,c={};for(a in t)a=="ref"?_=t[a]:c[a]=t[a];var l={type:e,props:c,key:n,ref:_,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:--_n,__i:-1,__u:0,__source:r,__self:i};if(typeof e=="function"&&(_=e.defaultProps))for(a in _)c[a]===void 0&&(c[a]=_[a]);return p.vnode&&p.vnode(l),l}function ln(e){return u("div",{children:[u("section",{class:"my-4 bg-dark consumers-table",children:u("div",{className:"consumers-table-wrapper",children:u("div",{className:"consumers-table-inner",children:[u("div",{class:"consumers-header grid grid-cols-4 [&>h6]:text-center [&>h6]:p-2",style:{paddingRight:e.consumers.length>3?"11px":""},children:[u("h6",{children:"Name"}),u("h6",{children:"In Inventory"}),u("h6",{children:"mSupps to Add"}),u("h6",{children:"Time until empty"})]}),u("div",{class:"consumers-body max-h-[115px] overflow-x-hidden overflow-y-auto",children:e.consumers.map(t=>u("div",{class:"grid grid-cols-4 items-center [&>span]:p-2 [&>*]:text-center",children:[u("span",{children:t.name}),u("span",{children:t.inventory}),u("span",{children:t.suppsToAddForWantedRunningTime}),u("span",{children:Ae(t.newTimeUntilEmpty)})]}))})]})})}),u("section",{class:"mt-4 text-center",children:u("h2",{class:"inline-block p-3 bg-dark rounded",children:["You need to farm ",e.consumers.reduce((t,n)=>t+n.suppsToAddForWantedRunningTime,0)," mSupps"]})})]})}function cn(e){return u("div",{children:[u("section",{class:"my-4 bg-dark",children:u("div",{className:"consumers-table-wrapper",children:u("div",{className:"consumers-table-inner",children:[u("div",{class:"consumers-header grid grid-cols-5 [&>h6]:text-center [&>h6]:p-2",style:{paddingRight:e.consumers.length>3?"11px":""},children:[u("h6",{children:"Name"}),u("h6",{children:"Inventory"}),u("h6",{children:"mSupps for Equalization"}),u("h6",{children:"mSupps for Optimization"}),u("h6",{children:"Total to Add"})]}),u("div",{class:"consumers-body max-h-[115px] overflow-x-hidden overflow-y-auto",children:e.consumers.map(t=>u("div",{class:"grid grid-cols-5 items-center [&>span]:p-2 [&>*]:text-center",children:[u("span",{children:t.name}),u("span",{children:t.inventory}),u("span",{children:t.suppsToAddForEqualization}),u("span",{children:t.suppsToAddForOptimization}),u("span",{children:t.suppsToAddForEqualization+t.suppsToAddForOptimization})]}))})]})})}),u("section",{class:"mt-4 text-center",children:u("h2",{class:"inline-block p-3 bg-dark rounded",children:["Your consumers will run out of mSupps in ~",Ae(e.consumers.reduce((t,n)=>t+n.newTimeUntilEmpty,0)/e.consumers.length)]})})]})}function Ae(e){const t=Math.floor(e),n=Math.round((e-t)*60).toString().padStart(2,"0");return`${t}h${n}m`}function un(){const e=new URL(window.location.href),t=e.searchParams.get("data");let n=null;t&&(n=JSON.parse(atob(t)),e.searchParams.delete("data"),window.history.replaceState({},"",e.toString()));const[o,r]=W(""),[i,_]=W(""),[a,c]=W(""),[l,f]=W((n==null?void 0:n.consumers)||[]),s=ge(null),h=()=>()=>{!o||!i||!a||(f([...l,{name:o,mSuppsPerHour:i,inventory:a,timeUntilEmpty:parseFloat((a/i).toFixed(2))}]),r(""),_(""),c(""),s.current.focus())},d=m=>()=>{f(l.filter(S=>S!==m))},[v,b]=W((n==null?void 0:n.wantedRunHourInput)||""),[y,g]=W((n==null?void 0:n.mSuppsStockpileInput)||""),[k,C]=W(null),L=()=>{const m=v,q=[...l].map(T=>{const oe=Math.ceil((m-T.timeUntilEmpty)*T.mSuppsPerHour);return{...T,suppsToAddForWantedRunningTime:oe,newTimeUntilEmpty:parseFloat(((T.inventory+oe)/T.mSuppsPerHour).toFixed(2))}});C(u(ln,{consumers:q}))},O=()=>{const m=[...l],S=Math.max(...l.map(T=>T.timeUntilEmpty));return m.map(T=>({...T,suppsToAddForEqualization:Math.ceil((S-T.timeUntilEmpty)*T.mSuppsPerHour)}))},ne=()=>{const m=y,S=O(),q=m-S.reduce(($,B)=>$+B.suppsToAddForEqualization,0),T=S.reduce(($,B)=>$+B.mSuppsPerHour,0),oe=S.map($=>{const B=Math.floor($.mSuppsPerHour/T*q);return{...$,suppsToAddForOptimization:B,newTimeUntilEmpty:parseFloat((($.inventory+$.suppsToAddForEqualization+B)/$.mSuppsPerHour).toFixed(2))}});C(u(cn,{consumers:oe}))},N=ge(null),A=ge(null);Mt(()=>{N.current&&rt(N.current),A.current&&rt(A.current)},[N,A]);const[x,D]=W(!1),xt=()=>{const m={consumers:l,wantedRunHourInput:v,mSuppsStockpileInput:y},S=new URL(window.location.href);S.searchParams.set("data",btoa(JSON.stringify(m))),navigator.clipboard.writeText(S.toString()).then(()=>D(!0))};return u("main",{class:"p-6 rounded bg-gray video-game-shadow max-w-[1024px] w-full overflow-auto",children:[u("section",{class:"mb-3",children:u("h1",{class:"text-center",children:"mSupps Calculator and Optimizer"})}),u("section",{class:"my-4",children:[u("h4",{class:"mb-1",children:"Consumers"}),u("div",{class:"grid grid-cols-1 lg:grid-cols-4 gap-1",children:[u("input",{placeholder:"Name",type:"text",onChange:m=>r(m.target.value),value:o,ref:s}),u("input",{placeholder:"mSupps per hour",type:"number",onChange:m=>_(parseInt(m.target.value)),value:i}),u("input",{placeholder:"Inventory",type:"number",onChange:m=>c(parseInt(m.target.value)),value:a}),u("button",{class:"btn btn-primary",onClick:h(),disabled:!o||!i||!a,children:"Add"})]})]}),u("section",{class:"my-4 bg-dark",children:u("div",{className:"consumers-table-wrapper",children:u("div",{className:"consumers-table-inner",children:[u("div",{class:"consumers-header grid grid-cols-5 [&>h6]:text-center [&>h6]:p-2",style:{paddingRight:l.length>3?"11px":""},children:[u("h6",{children:"Name"}),u("h6",{children:"mSupps per hour"}),u("h6",{children:"Inventory"}),u("h6",{children:"Time until empty"}),u("h6",{children:"Remove"})]}),u("div",{class:"consumers-body h-[115px] overflow-x-hidden overflow-y-auto",ref:N,children:l.map(m=>u("div",{class:"grid grid-cols-5 items-center [&>span]:p-2 [&>*]:text-center",children:[u("span",{children:m.name}),u("span",{children:m.mSuppsPerHour}),u("span",{children:m.inventory}),u("span",{children:Ae(m.timeUntilEmpty)}),u("div",{children:u("button",{class:"btn btn-delete",onClick:d(m),children:"X"})})]}))})]})})}),u("section",{class:"my-4 calculation-type",children:[u("em",{class:"text-small mb-3 block",children:"When clicking on an input, the minimum to equalize all consumers will be calculated"}),u("div",{class:"input-container",children:[u("input",{placeholder:"Wanted run hour",type:"number",onChange:m=>b(parseFloat(m.target.value)),onClick:m=>m.target.value===""&&b(Math.ceil(Math.max(...l.map(S=>S.timeUntilEmpty)))),min:Math.max(...l.map(m=>m.timeUntilEmpty)),value:v,disabled:l.length==0||!!y}),u("span",{class:"font-bold",children:"OR"}),u("input",{placeholder:"mSupps available in stockpile",type:"number",onChange:m=>g(parseInt(m.target.value)),onClick:m=>m.target.value===""&&g(O().reduce((S,q)=>S+q.suppsToAddForEqualization,0)),value:y,disabled:l.length==0||!!v})]})]}),u("section",{class:"my-4 w-full grid place-content-center",children:u("button",{class:"btn btn-primary mx-auto",disabled:!v&&!y,onClick:v?L:ne,children:[!v&&!y&&"?..",!!v&&"Calculate",!!y&&"Optimize"]})}),u("section",{ref:A,children:[k,k&&u("div",{class:"grid place-content-center mt-4",children:u("button",{onClick:()=>xt(),class:"btn btn-primary mx-auto",children:x?"Copied to clipboard":"Share"})})]})]})}$t(u(un,{}),document.getElementById("app"));