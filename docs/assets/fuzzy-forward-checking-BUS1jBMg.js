var F=s=>{throw TypeError(s)};var y=(s,h,t)=>h.has(s)||F("Cannot "+t);var i=(s,h,t)=>(y(s,h,"read from private field"),t?t.call(s):h.get(s)),f=(s,h,t)=>h.has(s)?F("Cannot add the same private member more than once"):h instanceof WeakSet?h.add(s):h.set(s,t),c=(s,h,t,e)=>(y(s,h,"write to private field"),e?e.call(s,t):h.set(s,t),t),p=(s,h,t)=>(y(s,h,"access private method"),t);import{S as E,A as P}from"./assignment-list-DFT4IpBb.js";import{c as _,D as v,i as L}from"./problems-NShnYMbn.js";import"./worker-Dn0Pgr45.js";var l,x,m,g,d,z,w,a,k,V,C,D,M;class N extends E{constructor(){super();f(this,a);f(this,l);f(this,x);f(this,m);f(this,g);f(this,d);f(this,z);f(this,w,!0)}setUsingMinimumRemainingValuesHeuristics(t){c(this,w,t)}name(){return"Fuzzy Forward Checking"}preprocess(){c(this,l,[...this.pro.variables()]),c(this,x,_(this.pro,i(this,l))),c(this,m,Array.from(i(this,l),t=>new v(t.domain().size()))),c(this,g,new P),c(this,d,0),this.monitor.initialize()}exec(){let t=null;for(;t===null;)c(this,z,!1),this.pro.clearAllVariables(),t=p(this,a,k).call(this,0),i(this,g).apply();return t===!0}}l=new WeakMap,x=new WeakMap,m=new WeakMap,g=new WeakMap,d=new WeakMap,z=new WeakMap,w=new WeakMap,a=new WeakSet,k=function(t,e=1){if(t===this.pro.variableSize()){const n=this.pro.degree();return i(this,g).setProblem(this.pro),this.monitor.outputDebugString(`	Evaluation ${n}`),i(this,d)<n&&(c(this,d,n),c(this,z,!0),this.monitor.solutionFound(i(this,g),n))?!0:this.monitor.check(n)}let r=null;if((r=this.monitor.check())!==null)return r;const o=i(this,l)[i(this,w)?L(i(this,l),i(this,m)):t],b=o.domain(),u=i(this,m)[o.index()];for(let n=0,R=b.size();n<R;++n){if(u.isPruned(n))continue;o.assign(b.at(n));const A=Math.min(e,p(this,a,M).call(this,o));if(!(A<=i(this,d))){if(p(this,a,V).call(this,t,o)&&(r=p(this,a,k).call(this,t+1,A),r!==null||i(this,z)))break;for(const S of i(this,m))S.recover(t)}}if(r===null){for(const n of i(this,m))n.recover(t);o.clear()}return r},V=function(t,e){for(const r of i(this,l)){if(!r.isEmpty())continue;const o=p(this,a,C).call(this,e.index(),r.index()),b=i(this,m)[r.index()],u=r.domain();for(const n of o)if(n.emptyVariableSize()===1&&!p(this,a,D).call(this,t,r,u,b,n))return!1}return!0},C=function(t,e){return t<e?i(this,x)[e][t]:i(this,x)[t][e]},D=function(t,e,r,o,b){for(let u=0,n=r.size();u<n;++u)o.isPruned(u)||(e.assign(r.at(u)),b.degree()<=i(this,d)&&o.prune(u,t));return e.clear(),!o.isEmpty()},M=function(t){let e=Number.MAX_VALUE;for(const r of t){const o=r.degree();0<=o&&o<e&&(e=o)}return e};export{N as FuzzyForwardChecking};
