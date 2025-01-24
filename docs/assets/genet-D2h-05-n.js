var M=Object.defineProperty;var k=n=>{throw TypeError(n)};var W=(n,t,s)=>t in n?M(n,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[t]=s;var x=(n,t,s)=>W(n,typeof t!="symbol"?t+"":t,s),y=(n,t,s)=>t.has(n)||k("Cannot "+s);var e=(n,t,s)=>(y(n,t,"read from private field"),s?s.call(n):t.get(n)),r=(n,t,s)=>t.has(n)?k("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(n):t.set(n,s),f=(n,t,s,i)=>(y(n,t,"write to private field"),i?i.call(n,s):t.set(n,s),s),v=(n,t,s)=>(y(n,t,"access private method"),s);import{S as j,r as E,A as L}from"./assignment-list-DmhfKDOP.js";import"./worker-WSPT47b9.js";var u,m,p,C,G,z;class q extends j{constructor(){super();r(this,p);r(this,u);r(this,m)}name(){return"GENET"}preprocess(){if(f(this,u,[]),f(this,m,[]),!v(this,p,C).call(this))throw new Error;this.monitor.initialize()}exec(){const s=[...Array(e(this,u).length).keys()],i=this.pro.ratio(),o=new L;let h=i,c=null;for(;;){const _=this.pro.ratio();if(this.monitor.outputDebugString(`Evaluation: ${_}`),h<_&&(o.setProblem(this.pro),h=_,this.monitor.solutionFound(o,h)))return!0;if((c=this.monitor.check(_))!==null)break;v(this,p,G).call(this,s)}return c===!1&&!this.monitor.isTargetAssigned()&&i<h&&(o.apply(),c=!0),c}}u=new WeakMap,m=new WeakMap,p=new WeakSet,C=function(){this.monitor.outputDebugString("Start of Network Generation");const s=[];for(const i of this.pro.variables()){if(i.domain().size()===0)return!1;e(this,u).push(new O(i))}for(const i of this.pro.constraints())if(i.size()===1){const o=i.at(0),h=e(this,u)[o.index()];for(const c of h){const _=o.value();o.assign(c._value),i.status()!==1&&s.push(new V(i,c)),o.assign(_)}}else{const o=i.at(0),h=i.at(1),c=e(this,u)[o.index()],_=e(this,u)[h.index()];for(const I of c){const D=o.value();o.assign(I._value);for(const T of _){const F=h.value();h.assign(T._value),i.status()!==1&&s.push(new V(i,I,T)),h.assign(F)}o.assign(D)}}return f(this,m,s),this.monitor.outputDebugString("End of Network Generation"),!0},G=function(s){let i=!1;for(const o of v(this,p,z).call(this,s))e(this,u)[o].setActivityMaximumInput()&&(i=!0);if(i)for(const o of e(this,u))o.applyToVariable();else{for(const o of e(this,m))o.refreshWeight();this.monitor.outputDebugString("	Refresh weights")}},z=function(s){for(let i=s.length-1;0<i;--i){const o=E(i+1);[s[i],s[o]]=[s[o],s[i]]}return s};var A,d,g,N,S;class O{constructor(t){r(this,N);r(this,A);r(this,d,0);r(this,g,[]);x(this,"_ns",[]);f(this,A,t);for(const s of t.domain())this._ns.push(new P(s));v(this,N,S).call(this,E(this._ns.length))}applyToVariable(){e(this,A).assign(this._ns[e(this,d)]._value)}setActivityMaximumInput(){e(this,g).length=0;let t=Number.NEGATIVE_INFINITY,s=!1;for(let i=0;i<this._ns.length;++i){const o=this._ns[i].getInput();t<=o&&(t<o&&(t=o,e(this,g).length=0,s=!1),e(this,g).push(i),e(this,d)===i&&(s=!0))}return s||e(this,g).length===0?!1:(v(this,N,S).call(this,e(this,g)[E(e(this,g).length)]),!0)}[Symbol.iterator](){return this._ns[Symbol.iterator]()}}A=new WeakMap,d=new WeakMap,g=new WeakMap,N=new WeakSet,S=function(t){for(const s of this._ns)s._isActive=!1;this._ns[t]._isActive=!0,f(this,d,t)};var w,a,l;class V{constructor(t,s,i=null){r(this,w);r(this,a);r(this,l);x(this,"_w");f(this,w,t),f(this,a,s),f(this,l,i),this._w=t.status()-1,e(this,a).addConnection(this),e(this,l)&&e(this,l).addConnection(this)}getNeuron(t){return t===e(this,a)?e(this,l):t===e(this,l)?e(this,a):null}refreshWeight(){if(!e(this,a)._isActive||e(this,l)!==null&&!e(this,l)._isActive)return;const t=e(this,w).relation();e(this,w).size()===1?this._w+=t(e(this,a)._value)-1:this._w+=t(e(this,a)._value,e(this,l)._value)-1}}w=new WeakMap,a=new WeakMap,l=new WeakMap;var b;class P{constructor(t){r(this,b,[]);x(this,"_value");x(this,"_isActive",!1);this._value=t}addConnection(t){e(this,b).push(t)}getInput(){let t=0;for(const s of e(this,b)){const i=s.getNeuron(this);t+=s._w*(i===null||i._isActive?1:0)}return t}}b=new WeakMap;export{q as GENET};
