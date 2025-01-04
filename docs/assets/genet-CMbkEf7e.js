var F=Object.defineProperty;var M=n=>{throw TypeError(n)};var W=(n,t,s)=>t in n?F(n,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[t]=s;var x=(n,t,s)=>W(n,typeof t!="symbol"?t+"":t,s),b=(n,t,s)=>t.has(n)||M("Cannot "+s);var e=(n,t,s)=>(b(n,t,"read from private field"),s?s.call(n):t.get(n)),r=(n,t,s)=>t.has(n)?M("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(n):t.set(n,s),f=(n,t,s,i)=>(b(n,t,"write to private field"),i?i.call(n,s):t.set(n,s),s),m=(n,t,s)=>(b(n,t,"access private method"),s);import{S as j,A as L}from"./assignment-list-e_PpAs4R.js";import"./worker-CtBaVZDz.js";var a,v,p,V,C,G;class q extends j{constructor(){super();r(this,p);r(this,a);r(this,v)}name(){return"GENET"}preprocess(){if(f(this,a,[]),f(this,v,[]),!m(this,p,V).call(this))throw new Error;this.monitor.initialize()}exec(){const s=[...Array(e(this,a).length).keys()],i=this.pro.ratio(),o=new L;let h=i,c=null;for(;;){const _=this.pro.ratio();if(this.monitor.outputDebugString(`Evaluation: ${_}`),h<_&&(o.setProblem(this.pro),h=_,this.monitor.solutionFound(o,h)))return!0;if((c=this.monitor.check(_))!==null)break;m(this,p,C).call(this,s)}return c===!1&&!this.monitor.isTargetAssigned()&&i<h&&(o.apply(),c=!0),c}}a=new WeakMap,v=new WeakMap,p=new WeakSet,V=function(){this.monitor.outputDebugString("Start of Network Generation");const s=[];for(const i of this.pro.variables()){if(i.domain().size()===0)return!1;e(this,a).push(new O(i))}for(const i of this.pro.constraints())if(i.size()===1){const o=i.at(0),h=e(this,a)[o.index()];for(const c of h){const _=o.value();o.assign(c._value),i.isSatisfied()!==1&&s.push(new T(i,c)),o.assign(_)}}else{const o=i.at(0),h=i.at(1),c=e(this,a)[o.index()],_=e(this,a)[h.index()];for(const E of c){const z=o.value();o.assign(E._value);for(const I of _){const D=h.value();h.assign(I._value),i.isSatisfied()!==1&&s.push(new T(i,E,I)),h.assign(D)}o.assign(z)}}return f(this,v,s),this.monitor.outputDebugString("End of Network Generation"),!0},C=function(s){let i=!1;for(const o of m(this,p,G).call(this,s))e(this,a)[o].setActivityMaximumInput()&&(i=!0);if(i)for(const o of e(this,a))o.applyToVariable();else{for(const o of e(this,v))o.refreshWeight();this.monitor.outputDebugString("	Refresh weights")}},G=function(s){for(let i=s.length-1;i>0;--i){const o=Math.floor(Math.random()*(i+1));[s[i],s[o]]=[s[o],s[i]]}return s};var A,d,g,S,y;class O{constructor(t){r(this,S);r(this,A);r(this,d,0);r(this,g,[]);x(this,"_ns",[]);f(this,A,t);for(const s of t.domain())this._ns.push(new P(s));m(this,S,y).call(this,k(this._ns.length))}applyToVariable(){e(this,A).assign(this._ns[e(this,d)]._value)}setActivityMaximumInput(){e(this,g).length=0;let t=Number.NEGATIVE_INFINITY,s=!1;for(let i=0;i<this._ns.length;++i){const o=this._ns[i].getInput();t<=o&&(t<o&&(t=o,e(this,g).length=0,s=!1),e(this,g).push(i),e(this,d)===i&&(s=!0))}return s||e(this,g).length===0?!1:(m(this,S,y).call(this,e(this,g)[k(e(this,g).length)]),!0)}[Symbol.iterator](){return this._ns[Symbol.iterator]()}}A=new WeakMap,d=new WeakMap,g=new WeakMap,S=new WeakSet,y=function(t){for(const s of this._ns)s._isActive=!1;this._ns[t]._isActive=!0,f(this,d,t)};var w,u,l;class T{constructor(t,s,i=null){r(this,w);r(this,u);r(this,l);x(this,"_w");f(this,w,t),f(this,u,s),f(this,l,i),this._w=t.isSatisfied()-1,e(this,u).addConnection(this),e(this,l)&&e(this,l).addConnection(this)}getNeuron(t){return t===e(this,u)?e(this,l):t===e(this,l)?e(this,u):null}refreshWeight(){if(!e(this,u)._isActive||e(this,l)!==null&&!e(this,l)._isActive)return;const t=e(this,w).relation();e(this,w).size()===1?this._w+=t.isSatisfied(e(this,u)._value)-1:this._w+=t.isSatisfied(e(this,u)._value,e(this,l)._value)-1}}w=new WeakMap,u=new WeakMap,l=new WeakMap;var N;class P{constructor(t){r(this,N,[]);x(this,"_value");x(this,"_isActive",!1);this._value=t}addConnection(t){e(this,N).push(t)}getInput(){let t=0;for(const s of e(this,N)){const i=s.getNeuron(this);t+=s._w*(i===null||i._isActive?1:0)}return t}}N=new WeakMap;function k(n){return Math.floor(Math.random()*Math.floor(n))}export{q as GENET};
