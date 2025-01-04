var W=Object.defineProperty;var T=n=>{throw TypeError(n)};var j=(n,t,s)=>t in n?W(n,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[t]=s;var A=(n,t,s)=>j(n,typeof t!="symbol"?t+"":t,s),E=(n,t,s)=>t.has(n)||T("Cannot "+s);var i=(n,t,s)=>(E(n,t,"read from private field"),s?s.call(n):t.get(n)),r=(n,t,s)=>t.has(n)?T("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(n):t.set(n,s),u=(n,t,s,e)=>(E(n,t,"write to private field"),e?e.call(n,s):t.set(n,s),s),v=(n,t,s)=>(E(n,t,"access private method"),s);import{S as L,A as O}from"./assignment-list-WRCWa3GG.js";var l,m,d,p,V,C,D;class q extends L{constructor(){super();r(this,p);r(this,l);r(this,m);r(this,d)}setThreshold(s){u(this,d,s)}name(){return"Fuzzy GENET"}preprocess(){if(u(this,l,[]),u(this,m,[]),u(this,d,1),!v(this,p,V).call(this))throw new Error;this.monitor.initialize()}exec(){const s=[...Array(i(this,l).length).keys()],e=this.pro.degree(),o=new O;let h=e,f=null;for(;;){const _=this.pro.degree();if(this.monitor.outputDebugString(`Evaluation: ${_}`),h<_&&(o.setProblem(this.pro),h=_,this.monitor.solutionFound(o,h)))return!0;if((f=this.monitor.check(_))!==null)break;v(this,p,C).call(this,s)}return f===!1&&!this.monitor.isTargetAssigned()&&e<h&&(o.apply(),f=!0),f}}l=new WeakMap,m=new WeakMap,d=new WeakMap,p=new WeakSet,V=function(){this.monitor.outputDebugString("Start of Network Generation");const s=[];for(const e of this.pro.variables()){if(e.domain().size()===0)return!1;i(this,l).push(new P(e))}for(const e of this.pro.constraints())if(e.size()===1){const o=e.at(0),h=i(this,l)[o.index()];for(const f of h){const _=o.value();o.assign(f._value),e.degree()<=i(this,d)&&s.push(new M(e,f)),o.assign(_)}}else{const o=e.at(0),h=e.at(1),f=i(this,l)[o.index()],_=i(this,l)[h.index()];for(const S of f){const G=o.value();o.assign(S._value);for(const z of _){const F=h.value();h.assign(z._value),e.degree()<=i(this,d)&&s.push(new M(e,S,z)),h.assign(F)}o.assign(G)}}return u(this,m,s),this.monitor.outputDebugString("End of Network Generation"),!0},C=function(s){let e=!1;for(const o of v(this,p,D).call(this,s))i(this,l)[o].setActivityMaximumInput()&&(e=!0);if(e)for(const o of i(this,l))o.applyToVariable();else{for(const o of i(this,m))o.refreshWeight();this.monitor.outputDebugString("	Refresh weights")}},D=function(s){for(let e=s.length-1;e>0;--e){const o=Math.floor(Math.random()*(e+1));[s[e],s[o]]=[s[o],s[e]]}return s};var y,w,g,N,I;class P{constructor(t){r(this,N);r(this,y);r(this,w,0);r(this,g,[]);A(this,"_ns",[]);u(this,y,t);for(const s of t.domain())this._ns.push(new R(s));v(this,N,I).call(this,k(this._ns.length))}applyToVariable(){i(this,y).assign(this._ns[i(this,w)]._value)}setActivityMaximumInput(){i(this,g).length=0;let t=Number.NEGATIVE_INFINITY,s=!1;for(let e=0;e<this._ns.length;++e){const o=this._ns[e].getInput();t<=o&&(t<o&&(t=o,i(this,g).length=0,s=!1),i(this,g).push(e),i(this,w)===e&&(s=!0))}return s||i(this,g).length===0?!1:(v(this,N,I).call(this,i(this,g)[k(i(this,g).length)]),!0)}[Symbol.iterator](){return this._ns[Symbol.iterator]()}}y=new WeakMap,w=new WeakMap,g=new WeakMap,N=new WeakSet,I=function(t){for(const s of this._ns)s._isActive=!1;this._ns[t]._isActive=!0,u(this,w,t)};var x,c,a;class M{constructor(t,s,e=null){r(this,x);r(this,c);r(this,a);A(this,"_w");u(this,x,t),u(this,c,s),u(this,a,e),this._w=t.degree()-1,i(this,c).addConnection(this),i(this,a)&&i(this,a).addConnection(this)}getNeuron(t){return t===i(this,c)?i(this,a):t===i(this,a)?i(this,c):null}refreshWeight(){if(!i(this,c)._isActive||i(this,a)!==null&&!i(this,a)._isActive)return;const t=i(this,x).relation();i(this,x).size()===1?this._w+=t.degree(i(this,c)._value)-1:this._w+=t.degree(i(this,c)._value,i(this,a)._value)-1}}x=new WeakMap,c=new WeakMap,a=new WeakMap;var b;class R{constructor(t){r(this,b,[]);A(this,"_value");A(this,"_isActive",!1);this._value=t}addConnection(t){i(this,b).push(t)}getInput(){let t=0;for(const s of i(this,b)){const e=s.getNeuron(this);t+=s._w*(e===null||e._isActive?1:0)}return t}}b=new WeakMap;function k(n){return Math.floor(Math.random()*Math.floor(n))}export{q as FuzzyGENET};
