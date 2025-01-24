var y=a=>{throw TypeError(a)};var R=(a,n,t)=>n.has(a)||y("Cannot "+t);var s=(a,n,t)=>(R(a,n,"read from private field"),t?t.call(a):n.get(a)),l=(a,n,t)=>n.has(a)?y("Cannot add the same private member more than once"):n instanceof WeakSet?n.add(a):n.set(a,t),u=(a,n,t,e)=>(R(a,n,"write to private field"),e?e.call(a,t):n.set(a,t),t),f=(a,n,t)=>(R(a,n,"access private method"),t);import{S as I,r as P,A as V}from"./assignment-list-NtRAOzA7.js";var g,m,c,S,b,D,h,F,k,N,M,T,U,W,X;class B extends I{constructor(){super();l(this,h);l(this,g);l(this,m);l(this,c);l(this,S);l(this,b);l(this,D,!0)}setRandomness(t){u(this,D,t)}name(){return"SRS3"}preprocess(){u(this,g,new Array(this.pro.constraintSize())),s(this,g).fill(1),u(this,m,new Set),u(this,c,new Set),u(this,S,[]),u(this,b,[]);for(const t of this.pro.constraints())s(this,S).push(new $(t)),s(this,b).push(null);for(const t of this.pro.variables())t.isEmpty()&&t.assign(t.domain().at(0));this.monitor.initialize()}exec(){const t=this.pro.degree(),e=new V;let i=t,o=null;for(;;){const[r,p]=this.pro.constraintsWithDegree();if(this.monitor.outputDebugString(`Evaluation: ${p}`),i<p&&(e.setProblem(this.pro),i=p,this.monitor.solutionFound(e,i)))return!0;if((o=this.monitor.check(p))!==null)break;for(const d of s(this,S))d.clear();const A=new Set;for(const d of r){const v=s(this,S)[d.index()];A.add(v)}f(this,h,F).call(this,A)}return o===!1&&!this.monitor.isTargetAssigned()&&t<i&&(e.apply(),o=!0),o}}g=new WeakMap,m=new WeakMap,c=new WeakMap,S=new WeakMap,b=new WeakMap,D=new WeakMap,h=new WeakSet,F=function(t){this.monitor.outputDebugString("SRS"),s(this,m).clear(),s(this,c).clear();for(const e of t)s(this,c).add(e);for(;t.size&&s(this,c).size;){const e=f(this,h,U).call(this,s(this,c));s(this,c).delete(e),f(this,h,N).call(this,e.constraint())?t.delete(e)||(e.parent()&&f(this,h,N).call(this,e.parent().constraint())?f(this,h,M).call(this,e,t):f(this,h,k).call(this,e)):f(this,h,k).call(this,e)}return t.size===0},k=function(t){this.monitor.outputDebugString("Spread"),s(this,m).add(t);for(const e of f(this,h,T).call(this,t))!s(this,m).has(e)&&!s(this,c).has(e)&&(e.clear(),t.append(e),s(this,c).add(e))},N=function(t){this.monitor.outputDebugString("Repair"),s(this,g)[t.index()]+=1;const e=t.degree(),i=new V;let o=0;for(const r of t){const p=r.value();let A=0;for(const d of r)A+=(1-d.degree())*s(this,g)[d.index()];t:for(const d of r.domain()){if(p===d||(r.assign(d),t.degree()<=e))continue;let v=A;for(const z of r)if(v-=(1-z.degree())*s(this,g)[z.index()],v<o)continue t;o<v?(o=v,i.clear(),i.addVariable(r,d)):o!==0&&i.addVariable(r,d)}r.assign(p)}if(0<i.size()){const r=s(this,D)?i.random():i.at(0);return r.apply(),this.monitor.outputDebugString("	"+r),!0}return!1},M=function(t,e){this.monitor.outputDebugString("Shrink");let i=t,o=!1;for(;;){if(i=i.parent(),e.delete(i)){o=!0;break}if(!i.parent()||!f(this,h,N).call(this,i.parent().constraint()))break}const r=[];i.getDescendants(r),i.clear();for(const p of r)s(this,c).delete(p),s(this,m).delete(p);o||s(this,c).add(i)},T=function(t){const e=t.constraint(),i=e.index();if(s(this,b)[i]===null){const o=[];for(const r of e.neighbors())o.push(s(this,S)[r.index()]);s(this,b)[i]=o}return s(this,b)[i]},U=function(t){const e=f(this,h,W).call(this,f(this,h,X).call(this,t));return s(this,D)?e[P(e.length)]:e[0]},W=function(t){let e=Number.MAX_VALUE,i=[];for(const o of t){const r=s(this,g)[o.constraint().index()];r<e?(e=r,i.length=0,i.push(o)):r===e&&i.push(o)}return i},X=function(t){let e=Number.MAX_VALUE,i=[];for(const o of t){const r=o.depth();r<e?(e=r,i.length=0,i.push(o)):r===e&&i.push(o)}return i};var L,x,E,w;class ${constructor(n){l(this,L);l(this,x,0);l(this,E,null);l(this,w,[]);u(this,L,n)}append(n){u(n,E,this),u(n,x,s(this,x)+1),s(this,w).push(n)}clear(){u(this,E,null),u(this,x,0);for(const n of s(this,w))n.clear();s(this,w).length=0}constraint(){return s(this,L)}depth(){return s(this,x)}parent(){return s(this,E)}getDescendants(n){n.push(this);for(const t of s(this,w))t.getDescendants(n)}}L=new WeakMap,x=new WeakMap,E=new WeakMap,w=new WeakMap;export{B as SRS3};
