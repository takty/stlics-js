var z=h=>{throw TypeError(h)};var R=(h,o,t)=>o.has(h)||z("Cannot "+t);var e=(h,o,t)=>(R(h,o,"read from private field"),t?t.call(h):o.get(h)),l=(h,o,t)=>o.has(h)?z("Cannot add the same private member more than once"):o instanceof WeakSet?o.add(h):o.set(h,t),f=(h,o,t,s)=>(R(h,o,"write to private field"),s?s.call(h,t):o.set(h,t),t),u=(h,o,t)=>(R(h,o,"access private method"),t);import{S as X,A as y}from"./assignment-list-PvP95zvk.js";import"./worker-Bt5njYKS.js";var g,S,c,b,x,D,r,M,k,N,V,C,F,T,U;class j extends X{constructor(){super();l(this,r);l(this,g);l(this,S);l(this,c);l(this,b);l(this,x);l(this,D,!0)}setRandomness(t){f(this,D,t)}name(){return"Crisp SRS3"}preprocess(){f(this,g,new Array(this.pro.constraintSize())),e(this,g).fill(1),f(this,S,new Set),f(this,c,new Set),f(this,b,[]),f(this,x,[]);for(const t of this.pro.constraints())e(this,b).push(new I(t)),e(this,x).push(null);for(const t of this.pro.variables())t.isEmpty()&&t.assign(t.domain().at(0));this.monitor.initialize()}exec(){const t=this.pro.degree(),s=new y;let i=t,n=null;for(;;){const a=this.pro.violatingConstraints(),d=this.pro.ratio();if(this.monitor.outputDebugString(`Evaluation: ${d}`),i<d&&(s.setProblem(this.pro),i=d,this.monitor.solutionFound(s,i)))return!0;if((n=this.monitor.check(d))!==null)break;for(const m of e(this,b))m.clear();const p=new Set;for(const m of a){const L=e(this,b)[m.index()];p.add(L)}u(this,r,M).call(this,p)}return n===!1&&!this.monitor.isTargetAssigned()&&t<i&&(s.apply(),n=!0),n}}g=new WeakMap,S=new WeakMap,c=new WeakMap,b=new WeakMap,x=new WeakMap,D=new WeakMap,r=new WeakSet,M=function(t){this.monitor.outputDebugString("SRS"),e(this,S).clear(),e(this,c).clear();for(const s of t)e(this,c).add(s);for(;t.size&&e(this,c).size;){const s=u(this,r,F).call(this,e(this,c));e(this,c).delete(s),u(this,r,N).call(this,s.constraint())?t.delete(s)||(s.parent()&&u(this,r,N).call(this,s.parent().constraint())?u(this,r,V).call(this,s,t):u(this,r,k).call(this,s)):u(this,r,k).call(this,s)}return t.size===0},k=function(t){this.monitor.outputDebugString("Spread"),e(this,S).add(t);for(const s of u(this,r,C).call(this,t))!e(this,S).has(s)&&!e(this,c).has(s)&&(s.clear(),t.append(s),e(this,c).add(s))},N=function(t){this.monitor.outputDebugString("Repair"),e(this,g)[t.index()]+=1;const s=new y;let i=0;for(const n of t){const a=n.value();let d=0;for(const p of n)d+=(1-p.isSatisfied())*e(this,g)[p.index()];t:for(const p of n.domain()){if(a===p||(n.assign(p),t.isSatisfied()!==1))continue;let m=d;for(const L of n)if(m-=(1-L.isSatisfied())*e(this,g)[L.index()],m<i)continue t;i<m?(i=m,s.clear(),s.addVariable(n,p)):i!==0&&s.addVariable(n,p)}n.assign(a)}if(0<s.size()){const n=e(this,D)?s.random():s.at(0);return n.apply(),this.monitor.outputDebugString("	"+n),!0}return!1},V=function(t,s){this.monitor.outputDebugString("Shrink");let i=t,n=!1;for(;;){if(i=i.parent(),s.delete(i)){n=!0;break}if(!i.parent()||!u(this,r,N).call(this,i.parent().constraint()))break}const a=[];i.getDescendants(a),i.clear();for(const d of a)e(this,c).delete(d),e(this,S).delete(d);n||e(this,c).add(i)},C=function(t){const s=t.constraint(),i=s.index();if(e(this,x)[i]===null){const n=[];for(const a of s.neighbors())n.push(e(this,b)[a.index()]);e(this,x)[i]=n}return e(this,x)[i]},F=function(t){const s=u(this,r,T).call(this,u(this,r,U).call(this,t));return e(this,D)?s[Math.floor(Math.random()*s.length)]:s[0]},T=function(t){let s=Number.MAX_VALUE,i=[];for(const n of t){const a=e(this,g)[n.constraint().index()];a<s?(s=a,i.length=0,i.push(n)):a===s&&i.push(n)}return i},U=function(t){let s=Number.MAX_VALUE,i=[];for(const n of t){const a=n.depth();a<s?(s=a,i.length=0,i.push(n)):a===s&&i.push(n)}return i};var E,w,A,v;class I{constructor(o){l(this,E);l(this,w,0);l(this,A,null);l(this,v,[]);f(this,E,o)}append(o){f(o,A,this),f(o,w,e(this,w)+1),e(this,v).push(o)}clear(){f(this,A,null),f(this,w,0);for(const o of e(this,v))o.clear();e(this,v).length=0}constraint(){return e(this,E)}depth(){return e(this,w)}parent(){return e(this,A)}getDescendants(o){o.push(this);for(const t of e(this,v))t.getDescendants(o)}}E=new WeakMap,w=new WeakMap,A=new WeakMap,v=new WeakMap;export{j as CrispSRS3};
