var ft=Object.defineProperty;var at=n=>{throw TypeError(n)};var gt=(n,s,t)=>s in n?ft(n,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[s]=t;var Y=(n,s,t)=>gt(n,typeof s!="symbol"?s+"":s,t),ot=(n,s,t)=>s.has(n)||at("Cannot "+t);var e=(n,s,t)=>(ot(n,s,"read from private field"),t?t.call(n):s.get(n)),o=(n,s,t)=>s.has(n)?at("Cannot add the same private member more than once"):s instanceof WeakSet?s.add(n):s.set(n,t),a=(n,s,t,i)=>(ot(n,s,"write to private field"),i?i.call(n,t):s.set(n,t),t);var rt=(n,s,t,i)=>({set _(r){a(n,s,r,t)},get _(){return e(n,s,i)}});var $,G;class ut{constructor(){o(this,$,-1);o(this,G,"");Y(this,"userObject",null)}setIndex(s){a(this,$,s)}setName(s){a(this,G,s)}index(){return e(this,$)}name(){return e(this,G)}}$=new WeakMap,G=new WeakMap;var k,B,N,P,m;const D=class D extends ut{constructor(t,i){super();o(this,B);o(this,N);o(this,P,e(D,k));o(this,m,[]);a(this,B,t),a(this,N,i)}toString(){const t=this.name(),i=t?`(${t})`:"",r=this.isEmpty()?"<empty>":""+this.value();return`x${this.index()}${i} = ${r}`}size(){return e(this,m).length}at(t){return e(this,m).at(t)}has(t){return e(this,m).includes(t)}indexOf(t){return e(this,m).indexOf(t)}neighbors(){const t=[];for(const i of e(this,m))for(const r of i)r!==this&&t.push(r);return t}[Symbol.iterator](){return e(this,m)[Symbol.iterator]()}owner(){return e(this,B)}connect(t){if(e(this,m).includes(t))throw new RangeError;e(this,m).push(t)}disconnect(t){if(!e(this,m).includes(t))throw new RangeError;a(this,m,e(this,m).filter(i=>i!==t))}domain(t){if(t===void 0)return e(this,N);a(this,N,t),this.clear()}assign(t){a(this,P,t)}clear(){this.assign(e(D,k))}value(){return e(this,P)}isEmpty(){return this.value()===e(D,k)}};k=new WeakMap,B=new WeakMap,N=new WeakMap,P=new WeakMap,m=new WeakMap,o(D,k,Number.MIN_VALUE);let T=D;class L{static createRangedDomain(s,t){return new mt(s,t)}static createArbitraryDomain(s){return new dt(s)}random(){return this.at(Math.floor(Math.random()*this.size()))}}var S;class dt extends L{constructor(t){super();o(this,S);a(this,S,[...t])}contains(t){return e(this,S).includes(t)}indexOf(t){return e(this,S).indexOf(t)}size(){return e(this,S).length}at(t){return e(this,S)[t]}[Symbol.iterator](){return e(this,S)[Symbol.iterator]()}}S=new WeakMap;var b,w;class mt extends L{constructor(t,i){super();o(this,b);o(this,w);a(this,b,t|0),a(this,w,i|0)}contains(t){return e(this,b)<=t&&t<=e(this,w)}indexOf(t){return e(this,b)<=t&&t<=e(this,w)?t-e(this,b):-1}size(){return e(this,w)-e(this,b)+1}at(t){return e(this,b)+t}[Symbol.iterator](){let t=e(this,b);const i=e(this,w);return{next(){return t<=i?{value:t++,done:!1}:{value:null,done:!0}}}}}b=new WeakMap,w=new WeakMap;class pt{}class ht extends pt{isSatisfied(...s){const t=this.degree(...s);return 0<t&&t<1?0:t}}class K extends ut{constructor(t){super();Y(this,"rel");this.rel=t}static create(t,i){return i.length===1?new bt(t,i[0]):i.length===2?new yt(t,i[0],i[1]):i.length===3?new St(t,i[0],i[1],i[2]):new wt(t,...i)}relation(){return this.rel}isFuzzy(){return this.rel instanceof ht}toString(){const t=this.name(),i=t?`(${t})`:"",r=this.degree(),h=r<0?"UNDEFINED":""+r;return`c${this.index()}${i} = ${h}`}}var d;class bt extends K{constructor(t,i){super(t);o(this,d,[]);a(this,d,[i])}size(){return 1}at(t){return e(this,d).at(t)}has(t){return t===e(this,d)[0]}indexOf(t){return t===e(this,d)[0]?0:-1}neighbors(){const t=[];for(const i of e(this,d)[0])i!==this&&t.push(i);return t}[Symbol.iterator](){return e(this,d)[Symbol.iterator]()}emptyVariableSize(){return e(this,d)[0].isEmpty()?1:0}isDefined(){return!e(this,d)[0].isEmpty()}isSatisfied(){return e(this,d)[0].isEmpty()?-1:this.rel.isSatisfied(e(this,d)[0].value())?1:0}degree(){return e(this,d)[0].isEmpty()?-1:this.rel.degree(e(this,d)[0].value())}}d=new WeakMap;var c;class yt extends K{constructor(t,i,r){super(t);o(this,c,[]);a(this,c,[i,r])}size(){return 2}at(t){return e(this,c).at(t)}has(t){return e(this,c)[0]===t||e(this,c)[1]===t}indexOf(t){return t===e(this,c)[0]?0:t===e(this,c)[1]?1:-1}neighbors(){const t=[];for(const i of e(this,c))for(const r of i)r!==this&&t.push(r);return t}[Symbol.iterator](){return e(this,c)[Symbol.iterator]()}emptyVariableSize(){let t=0;return e(this,c)[0].isEmpty()&&++t,e(this,c)[1].isEmpty()&&++t,t}isDefined(){return!e(this,c)[0].isEmpty()&&!e(this,c)[1].isEmpty()}isSatisfied(){return e(this,c)[0].isEmpty()||e(this,c)[1].isEmpty()?-1:this.rel.isSatisfied(e(this,c)[0].value(),e(this,c)[1].value())?1:0}degree(){return e(this,c)[0].isEmpty()||e(this,c)[1].isEmpty()?-1:this.rel.degree(e(this,c)[0].value(),e(this,c)[1].value())}}c=new WeakMap;var u;class St extends K{constructor(t,i,r,h){super(t);o(this,u,[]);a(this,u,[i,r,h])}size(){return 3}at(t){return e(this,u).at(t)}has(t){return e(this,u)[0]===t||e(this,u)[1]===t||e(this,u)[2]===t}indexOf(t){return t===e(this,u)[0]?0:t===e(this,u)[1]?1:t===e(this,u)[2]?2:-1}neighbors(){const t=[];for(const i of e(this,u))for(const r of i)r!==this&&t.push(r);return t}[Symbol.iterator](){return e(this,u)[Symbol.iterator]()}emptyVariableSize(){let t=0;return e(this,u)[0].isEmpty()&&++t,e(this,u)[1].isEmpty()&&++t,e(this,u)[2].isEmpty()&&++t,t}isDefined(){return!e(this,u)[0].isEmpty()&&!e(this,u)[1].isEmpty()&&!e(this,u)[2].isEmpty()}isSatisfied(){return e(this,u)[0].isEmpty()||e(this,u)[1].isEmpty()||e(this,u)[2].isEmpty()?-1:this.rel.isSatisfied(e(this,u)[0].value(),e(this,u)[1].value(),e(this,u)[2].value())?1:0}degree(){return e(this,u)[0].isEmpty()||e(this,u)[1].isEmpty()||e(this,u)[2].isEmpty()?-1:this.rel.degree(e(this,u)[0].value(),e(this,u)[1].value(),e(this,u)[2].value())}}u=new WeakMap;var g,z;class wt extends K{constructor(t,...i){super(t);o(this,g);o(this,z);a(this,g,[...i]),a(this,z,new Array(e(this,g).length))}size(){return e(this,g).length}at(t){return e(this,g).at(t)}has(t){return e(this,g).includes(t)}indexOf(t){return e(this,g).indexOf(t)}neighbors(){const t=[];for(const i of e(this,g))for(const r of i)r!==this&&t.push(r);return t}[Symbol.iterator](){return e(this,g)[Symbol.iterator]()}emptyVariableSize(){let t=0;for(const i of e(this,g))t+=i.isEmpty()?1:0;return t}isDefined(){for(const t of e(this,g))if(t.isEmpty())return!1;return!0}isSatisfied(){for(let t=0;t<e(this,g).length;++t){const i=e(this,g)[t];if(i.isEmpty())return-1;e(this,z)[t]=i.value()}return this.rel.isSatisfied(...e(this,z))?1:0}degree(){for(let t=0;t<e(this,g).length;++t){const i=e(this,g)[t];if(i.isEmpty())return-1;e(this,z)[t]=i.value()}return this.rel.degree(...e(this,z))}}g=new WeakMap,z=new WeakMap;var R,Q,v,f,l;class zt{constructor(){o(this,R,(s,t)=>new T(s,t));o(this,Q,(s,t)=>K.create(s,t));o(this,v,!1);o(this,f,[]);o(this,l,[])}setVariableFactory(s){a(this,R,s)}setConstraintFactory(s){a(this,Q,s)}addVariable(s){s.setIndex(e(this,f).length),e(this,f).push(s)}createDomain(s,t=null){if(Array.isArray(s))return L.createArbitraryDomain(s);if(t!==null)return L.createRangedDomain(s,t);throw new RangeError}createVariable(s,t=null,i){if(s instanceof T){const r=e(this,R).call(this,this,s.domain());return this.addVariable(r),r.setName(r.name()),r.assign(r.value()),r}else if(s instanceof L){if(t!==null&&!s.contains(t))throw new Error;const r=e(this,R).call(this,this,s);return this.addVariable(r),t!==null&&r.assign(t),i&&r.setName(i),r}throw new RangeError}createConstraint(s,t,i){for(const h of t)if(h.owner()!==this)throw new RangeError;const r=e(this,Q).call(this,s,t);r.setIndex(e(this,l).length),e(this,l).push(r);for(const h of t)h.connect(r);return r.isFuzzy()&&a(this,v,!0),i&&r.setName(i),r}removeConstraint(s){const t=e(this,l).indexOf(s);e(this,l).splice(t,1);for(let i=t;i<e(this,l).length;++i)e(this,l)[i].setIndex(i);for(const i of s)i.disconnect(s);a(this,v,!1);for(const i of e(this,l))if(i.isFuzzy()){a(this,v,!0);break}}clearAllVariables(){for(const s of e(this,f))s.clear()}reverseVariables(){e(this,f).reverse();for(let s=0;s<e(this,f).length;++s)e(this,f)[s].setIndex(s)}sortVariables(s){e(this,f).sort(s);for(let t=0;t<e(this,f).length;++t)e(this,f)[t].setIndex(t)}variables(){return e(this,f)}variableSize(){return e(this,f).length}variableAt(s){return e(this,f)[s]}variableOf(s){for(const t of e(this,f))if(t.name()===s)return t;return null}hasVariable(s){return e(this,f).includes(s)}constraints(){return e(this,l)}constraintSize(){return e(this,l).length}constraintAt(s){return e(this,l)[s]}constraintOf(s){for(const t of e(this,l))if(t.name()===s)return t;return null}hasConstraint(s){return e(this,l).includes(s)}constraintsBetween(s,t){const i=[];for(const r of s)r.has(t)&&i.push(r);return i}isFuzzy(){return e(this,v)}constraintDensity(){return e(this,l).length/e(this,f).length}emptyVariableSize(){let s=0;for(const t of e(this,f))s+=t.isEmpty()?1:0;return s}hasEmptyDomain(){for(const s of e(this,f))if(s.domain().size()===0)return!0;return!1}degree(){let s=1;for(const t of e(this,l)){const i=t.degree();if(i<0)return i;i<s&&(s=i)}return s}constraintsWithDegree(){const s=[];let t=1;for(const i of e(this,l)){const r=i.degree();r<t?(t=r,s.length=0,s.push(i)):r-t<Number.MIN_VALUE*10&&s.push(i)}return[s,t]}averageDegree(){let s=0;for(const t of e(this,l))s+=t.degree();return s/e(this,l).length}ratio(){return this.satisfiedConstraintSize()/e(this,l).length}satisfiedConstraintSize(){let s=0;for(const t of e(this,l))s+=t.isSatisfied()===1?1:0;return s}violatingConstraintSize(){return e(this,l).length-this.satisfiedConstraintSize()}satisfiedConstraints(){const s=[];for(const t of e(this,l))t.isSatisfied()===1&&s.push(t);return s}violatingConstraints(){const s=[];for(const t of e(this,l))t.isSatisfied()===0&&s.push(t);return s}}R=new WeakMap,Q=new WeakMap,v=new WeakMap,f=new WeakMap,l=new WeakMap;var O,U,_,X,A,E,M,j,W,q,H;class Et{constructor(){o(this,O,!0);o(this,U,s=>console.log(s));o(this,_,()=>!1);o(this,X,Number.MAX_SAFE_INTEGER);o(this,A,null);o(this,E,.8);o(this,M,null);o(this,j,0);o(this,W,0);o(this,q,-1);o(this,H,0)}initialize(){a(this,j,e(this,A)===null?Number.MAX_VALUE:Date.now()+e(this,A)),a(this,W,0)}check(s=null){if(s!==null&&e(this,E)!==null&&e(this,E)<=s)return this.outputDebugString("Stop: Current evaluation value is above the target"),!0;if(e(this,X)<rt(this,W)._++)return this.outputDebugString("Stop: Number of iterations has reached the limit"),!1;if(e(this,j)<Date.now())return this.outputDebugString("Stop: Time limit has been reached"),!1;if(s!==null&&e(this,M)!==null)if(s!==-1&&e(this,q)===s){if(e(this,M)<rt(this,H)._++)return this.outputDebugString("Stop: Evaluation value has not changed for a certain number of times"),!1}else a(this,q,s),a(this,H,0);return null}solutionFound(s,t){return e(this,_).call(this,s,t)}outputDebugString(s){e(this,O)&&e(this,U).call(this,s)}isDebugMode(){return e(this,O)}isTargetAssigned(){return e(this,E)!==null}getTarget(){return e(this,E)}setIterationLimit(s=null){a(this,X,s===null?Number.MAX_SAFE_INTEGER:s)}setTimeLimit(s=null){a(this,A,s)}setTarget(s=null){a(this,E,s)}setSameEvaluationLimit(s=null){a(this,M,s)}setListener(s){a(this,_,s)}setDebugMode(s){a(this,O,s)}setDebugOutput(s){a(this,U,s)}}O=new WeakMap,U=new WeakMap,_=new WeakMap,X=new WeakMap,A=new WeakMap,E=new WeakMap,M=new WeakMap,j=new WeakMap,W=new WeakMap,q=new WeakMap,H=new WeakMap;var V;class xt extends T{constructor(t,i,r){super(t,i);o(this,V);a(this,V,r)}assign(t){super.assign(t),e(this,V)&&e(this,V).call(this,this,t)}}V=new WeakMap;class I{static crispSolverNames(){return["Forward Checking","Max Forward Checking","Local Changes","Breakout","GENET","Crisp SRS3"]}static fuzzySolverNames(){return["Full Checking","Fuzzy Forward Checking","Flexible Local Changes","Fuzzy Breakout","Fuzzy GENET","SRS3","SRS3 PF"]}static async createSolver(s){const t=await I.createCrispSolver(s);if(t)return t;const i=await I.createFuzzySolver(s);return i||null}static async createCrispSolver(s){switch(s.replaceAll(" ","")){case"ForwardChecking":case"forward-checking":const{ForwardChecking:t}=await import("./forward-checking-BfCfHHFP.js");return new t;case"MaxForwardChecking":case"max-forward-checking":const{MaxForwardChecking:i}=await import("./max-forward-checking-QoMwncPX.js");return new i;case"LocalChanges":case"local-changes":const{LocalChanges:r}=await import("./local-changes-BsKovGid.js");return new r;case"Breakout":case"breakout":const{Breakout:h}=await import("./breakout-CB90TG38.js");return new h;case"GENET":case"genet":const{GENET:y}=await import("./genet-DQF3MsP6.js");return new y;case"CrispSRS3":case"crisp-srs3":const{CrispSRS3:C}=await import("./crisp-srs3-CYJCdQLP.js");return new C}return null}static async createFuzzySolver(s){switch(s.replaceAll(" ","")){case"FullChecking":case"full-checking":const{FullChecking:t}=await import("./full-checking-C13BJ0DH.js");return new t;case"FuzzyForwardChecking":case"fuzzy-forward-checking":const{FuzzyForwardChecking:i}=await import("./fuzzy-forward-checking-Dc8TDmY-.js");return new i;case"FlexibleLocalChanges":case"flexible-local-changes":const{FlexibleLocalChanges:r}=await import("./flexible-local-changes-BGST0I4b.js");return new r;case"FuzzyBreakout":case"fuzzy-breakout":const{FuzzyBreakout:h}=await import("./fuzzy-breakout-C5o4KtXX.js");return new h;case"FuzzyGENET":case"fuzzy-genet":const{FuzzyGENET:y}=await import("./fuzzy-genet-DMwvGtAT.js");return new y;case"SRS3":case"srs3":const{SRS3:C}=await import("./srs3-BH-SdkMQ.js");return new C;case"SRS3PF":case"SRS3_PF":case"srs3-pf":{const{SRS3:st}=await import("./srs3-BH-SdkMQ.js"),{wrapWithPostStabilizer:it}=await import("./post-stabilizer-35-yuJr2.js");return it(new st)}}return null}}var et;class vt{constructor(){Y(this,"_debug",!0);o(this,et,s=>console.log(s))}setDebugMode(s){this._debug=s}setDebugOutput(s){this._debugOutput=s}_debugOutput(s){this._debug&&e(this,et).call(this,s)}}et=new WeakMap;var p;class Ft extends vt{constructor(t){super();o(this,p);a(this,p,t)}getQueenSize(){return e(this,p)}setQueenSize(t){a(this,p,t)}isFuzzy(){return!0}createProblem(t){const i=[];for(let r=0;r<e(this,p);++r){const h=t.createVariable(t.createDomain(1,e(this,p)-1),1,`Queen ${r}`);i.push(h)}for(let r=0;r<e(this,p);++r)for(let h=r+1;h<e(this,p);++h)t.createConstraint(new Ct(r,h,e(this,p)),[i[r],i[h]]);return t}printResult(t){for(let i=0;i<e(this,p);++i){let r="";if(t.variableAt(i).isEmpty())for(let h=0;h<e(this,p)-1;++h)r+="- ";else for(let h=0;h<e(this,p)-1;++h)r+=t.variableAt(i).value()-1===h?"o ":"- ";this._debugOutput(r)}}}p=new WeakMap;var F,J;class Ct extends ht{constructor(t,i,r){super();o(this,F);o(this,J);a(this,F,i-t),a(this,J,r)}degree(t,i){return t!==i&&t!==i+e(this,F)&&t!==i-e(this,F)?1:(e(this,F)-1)/(e(this,J)-1)}}F=new WeakMap,J=new WeakMap;onmessage=async n=>{const{task:s,args:t}=n.data;switch(s){case"create":Dt(...t);break;case"solve":kt(...t);break}};let Z=null,x=null,tt=!1;function Dt(n){Z=new Ft(n),Z.setDebugOutput(lt);const s=(t,i)=>Nt(i-1,t.index());x=new zt,x.setVariableFactory((t,i)=>new xt(t,i,s)),x=Z.createProblem(x)}async function kt(n,s,t,i){const r=Date.now(),h=I.fuzzySolverNames()[n],y=new Et;y.setTarget(s===-1?null:s),y.setTimeLimit(t===-1?null:t),y.setDebugOutput(lt),y.setDebugMode(i);const C=await I.createSolver(h);tt=i;const st=C.solve(x,y),it=Date.now()-r,ct=x.degree();tt=!0,Z.printResult(x);for(const nt of x.variables())nt.assign(nt.value());postMessage({result:st,time:it,ev:ct,solver:C.name()})}function lt(n){tt&&postMessage({log:n})}function Nt(n,s){tt&&postMessage({board:{x:n,y:s}})}export{Et as M,T as V};
