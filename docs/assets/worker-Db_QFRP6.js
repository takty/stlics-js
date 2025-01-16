var ct=Object.defineProperty;var at=r=>{throw TypeError(r)};var ft=(r,e,t)=>e in r?ct(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var J=(r,e,t)=>ft(r,typeof e!="symbol"?e+"":e,t),ot=(r,e,t)=>e.has(r)||at("Cannot "+t);var s=(r,e,t)=>(ot(r,e,"read from private field"),t?t.call(r):e.get(r)),o=(r,e,t)=>e.has(r)?at("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(r):e.set(r,t),a=(r,e,t,i)=>(ot(r,e,"write to private field"),i?i.call(r,t):e.set(r,t),t);var rt=(r,e,t,i)=>({set _(n){a(r,e,n,t)},get _(){return s(r,e,i)}});var I,_;class ut{constructor(){o(this,I,-1);o(this,_,"");J(this,"userObject",null)}setIndex(e){a(this,I,e)}setName(e){a(this,_,e)}index(){return s(this,I)}name(){return s(this,_)}}I=new WeakMap,_=new WeakMap;var D,$,k,G,g;const F=class F extends ut{constructor(t,i){super();o(this,$);o(this,k);o(this,G,s(F,D));o(this,g,[]);a(this,$,t),a(this,k,i)}toString(){const t=this.name(),i=t?`(${t})`:"",n=this.isEmpty()?"<empty>":""+this.value();return`x${this.index()}${i} = ${n}`}size(){return s(this,g).length}at(t){return s(this,g).at(t)}has(t){return s(this,g).includes(t)}indexOf(t){return s(this,g).indexOf(t)}neighbors(){const t=[];for(const i of s(this,g))for(const n of i)n!==this&&t.push(n);return t}[Symbol.iterator](){return s(this,g)[Symbol.iterator]()}owner(){return s(this,$)}connect(t){if(s(this,g).includes(t))throw new RangeError;s(this,g).push(t)}disconnect(t){if(!s(this,g).includes(t))throw new RangeError;a(this,g,s(this,g).filter(i=>i!==t))}domain(t){if(t===void 0)return s(this,k);a(this,k,t),this.clear()}assign(t){a(this,G,t)}clear(){this.assign(s(F,D))}value(){return s(this,G)}isEmpty(){return this.value()===s(F,D)}};D=new WeakMap,$=new WeakMap,k=new WeakMap,G=new WeakMap,g=new WeakMap,o(F,D,Number.MIN_VALUE);let Y=F;class Z{static createRangedDomain(e,t){return new dt(e,t)}static createArbitraryDomain(e){return new mt(e)}random(){return this.at(Math.floor(Math.random()*this.size()))}}var S;class mt extends Z{constructor(t){super();o(this,S);a(this,S,[...t])}contains(t){return s(this,S).includes(t)}indexOf(t){return s(this,S).indexOf(t)}size(){return s(this,S).length}at(t){return s(this,S)[t]}[Symbol.iterator](){return s(this,S)[Symbol.iterator]()}}S=new WeakMap;var b,w;class dt extends Z{constructor(t,i){super();o(this,b);o(this,w);a(this,b,t|0),a(this,w,i|0)}contains(t){return s(this,b)<=t&&t<=s(this,w)}indexOf(t){return s(this,b)<=t&&t<=s(this,w)?t-s(this,b):-1}size(){return s(this,w)-s(this,b)+1}at(t){return s(this,b)+t}[Symbol.iterator](){let t=s(this,b);const i=s(this,w);return{next(){return t<=i?{value:t++,done:!1}:{value:null,done:!0}}}}}b=new WeakMap,w=new WeakMap;class ht{}class gt extends ht{degree(...e){return this.isSatisfied(...e)}}class pt extends ht{isSatisfied(...e){const t=this.degree(...e);return 0<t&&t<1?0:t}}class H extends ut{constructor(t){super();J(this,"rel");this.rel=t}static create(t,i){return i.length===1?new bt(t,i[0]):i.length===2?new yt(t,i[0],i[1]):i.length===3?new St(t,i[0],i[1],i[2]):new wt(t,...i)}relation(){return this.rel}isFuzzy(){return this.rel instanceof pt}toString(){const t=this.name(),i=t?`(${t})`:"",n=this.degree(),l=n<0?"UNDEFINED":""+n;return`c${this.index()}${i} = ${l}`}}var d;class bt extends H{constructor(t,i){super(t);o(this,d,[]);a(this,d,[i])}size(){return 1}at(t){return s(this,d).at(t)}has(t){return t===s(this,d)[0]}indexOf(t){return t===s(this,d)[0]?0:-1}neighbors(){const t=[];for(const i of s(this,d)[0])i!==this&&t.push(i);return t}[Symbol.iterator](){return s(this,d)[Symbol.iterator]()}emptyVariableSize(){return s(this,d)[0].isEmpty()?1:0}isDefined(){return!s(this,d)[0].isEmpty()}isSatisfied(){return s(this,d)[0].isEmpty()?-1:this.rel.isSatisfied(s(this,d)[0].value())?1:0}degree(){return s(this,d)[0].isEmpty()?-1:this.rel.degree(s(this,d)[0].value())}}d=new WeakMap;var c;class yt extends H{constructor(t,i,n){super(t);o(this,c,[]);a(this,c,[i,n])}size(){return 2}at(t){return s(this,c).at(t)}has(t){return s(this,c)[0]===t||s(this,c)[1]===t}indexOf(t){return t===s(this,c)[0]?0:t===s(this,c)[1]?1:-1}neighbors(){const t=[];for(const i of s(this,c))for(const n of i)n!==this&&t.push(n);return t}[Symbol.iterator](){return s(this,c)[Symbol.iterator]()}emptyVariableSize(){let t=0;return s(this,c)[0].isEmpty()&&++t,s(this,c)[1].isEmpty()&&++t,t}isDefined(){return!s(this,c)[0].isEmpty()&&!s(this,c)[1].isEmpty()}isSatisfied(){return s(this,c)[0].isEmpty()||s(this,c)[1].isEmpty()?-1:this.rel.isSatisfied(s(this,c)[0].value(),s(this,c)[1].value())?1:0}degree(){return s(this,c)[0].isEmpty()||s(this,c)[1].isEmpty()?-1:this.rel.degree(s(this,c)[0].value(),s(this,c)[1].value())}}c=new WeakMap;var u;class St extends H{constructor(t,i,n,l){super(t);o(this,u,[]);a(this,u,[i,n,l])}size(){return 3}at(t){return s(this,u).at(t)}has(t){return s(this,u)[0]===t||s(this,u)[1]===t||s(this,u)[2]===t}indexOf(t){return t===s(this,u)[0]?0:t===s(this,u)[1]?1:t===s(this,u)[2]?2:-1}neighbors(){const t=[];for(const i of s(this,u))for(const n of i)n!==this&&t.push(n);return t}[Symbol.iterator](){return s(this,u)[Symbol.iterator]()}emptyVariableSize(){let t=0;return s(this,u)[0].isEmpty()&&++t,s(this,u)[1].isEmpty()&&++t,s(this,u)[2].isEmpty()&&++t,t}isDefined(){return!s(this,u)[0].isEmpty()&&!s(this,u)[1].isEmpty()&&!s(this,u)[2].isEmpty()}isSatisfied(){return s(this,u)[0].isEmpty()||s(this,u)[1].isEmpty()||s(this,u)[2].isEmpty()?-1:this.rel.isSatisfied(s(this,u)[0].value(),s(this,u)[1].value(),s(this,u)[2].value())?1:0}degree(){return s(this,u)[0].isEmpty()||s(this,u)[1].isEmpty()||s(this,u)[2].isEmpty()?-1:this.rel.degree(s(this,u)[0].value(),s(this,u)[1].value(),s(this,u)[2].value())}}u=new WeakMap;var m,x;class wt extends H{constructor(t,...i){super(t);o(this,m);o(this,x);a(this,m,[...i]),a(this,x,new Array(s(this,m).length))}size(){return s(this,m).length}at(t){return s(this,m).at(t)}has(t){return s(this,m).includes(t)}indexOf(t){return s(this,m).indexOf(t)}neighbors(){const t=[];for(const i of s(this,m))for(const n of i)n!==this&&t.push(n);return t}[Symbol.iterator](){return s(this,m)[Symbol.iterator]()}emptyVariableSize(){let t=0;for(const i of s(this,m))t+=i.isEmpty()?1:0;return t}isDefined(){for(const t of s(this,m))if(t.isEmpty())return!1;return!0}isSatisfied(){for(let t=0;t<s(this,m).length;++t){const i=s(this,m)[t];if(i.isEmpty())return-1;s(this,x)[t]=i.value()}return this.rel.isSatisfied(...s(this,x))?1:0}degree(){for(let t=0;t<s(this,m).length;++t){const i=s(this,m)[t];if(i.isEmpty())return-1;s(this,x)[t]=i.value()}return this.rel.degree(...s(this,x))}}m=new WeakMap,x=new WeakMap;var N,B,z,f,h;class xt{constructor(){o(this,N,(e,t)=>new Y(e,t));o(this,B,(e,t)=>H.create(e,t));o(this,z,!1);o(this,f,[]);o(this,h,[])}setVariableFactory(e){a(this,N,e)}setConstraintFactory(e){a(this,B,e)}addVariable(e){e.setIndex(s(this,f).length),s(this,f).push(e)}createDomain(e){return"values"in e?Z.createArbitraryDomain(e.values):"min"in e&&"max"in e?Z.createRangedDomain(e.min,e.max):null}createVariable(e){if("variable"in e){const t=s(this,N).call(this,this,e.variable.domain());return this.addVariable(t),t.setName(t.name()),t.assign(t.value()),t}else{if(e.value!==void 0&&!e.domain.contains(e.value))throw new Error;const t=s(this,N).call(this,this,e.domain);return this.addVariable(t),e.name&&t.setName(e.name),e.value&&t.assign(e.value),t}}createConstraint(e){for(const i of e.variables)if(i.owner()!==this)return null;const t=s(this,B).call(this,e.relation,e.variables);t.setIndex(s(this,h).length),s(this,h).push(t);for(const i of e.variables)i.connect(t);return t.isFuzzy()&&a(this,z,!0),"name"in e&&t.setName(e.name),t}removeConstraint(e){const t=s(this,h).indexOf(e);s(this,h).splice(t,1);for(let i=t;i<s(this,h).length;++i)s(this,h)[i].setIndex(i);for(const i of e)i.disconnect(e);a(this,z,!1);for(const i of s(this,h))if(i.isFuzzy()){a(this,z,!0);break}}clearAllVariables(){for(const e of s(this,f))e.clear()}reverseVariables(){s(this,f).reverse();for(let e=0;e<s(this,f).length;++e)s(this,f)[e].setIndex(e)}sortVariables(e){s(this,f).sort(e);for(let t=0;t<s(this,f).length;++t)s(this,f)[t].setIndex(t)}variables(){return s(this,f)}variableSize(){return s(this,f).length}variableAt(e){return s(this,f)[e]}variableOf(e){for(const t of s(this,f))if(t.name()===e)return t;return null}hasVariable(e){return s(this,f).includes(e)}constraints(){return s(this,h)}constraintSize(){return s(this,h).length}constraintAt(e){return s(this,h)[e]}constraintOf(e){for(const t of s(this,h))if(t.name()===e)return t;return null}hasConstraint(e){return s(this,h).includes(e)}constraintsBetween(e,t){const i=[];for(const n of e)n.has(t)&&i.push(n);return i}isFuzzy(){return s(this,z)}constraintDensity(){return s(this,h).length/s(this,f).length}emptyVariableSize(){let e=0;for(const t of s(this,f))e+=t.isEmpty()?1:0;return e}hasEmptyDomain(){for(const e of s(this,f))if(e.domain().size()===0)return!0;return!1}degree(){let e=1;for(const t of s(this,h)){const i=t.degree();if(i<0)return i;i<e&&(e=i)}return e}constraintsWithDegree(){const e=[];let t=1;for(const i of s(this,h)){const n=i.degree();n<t?(t=n,e.length=0,e.push(i)):n-t<Number.MIN_VALUE*10&&e.push(i)}return[e,t]}averageDegree(){let e=0;for(const t of s(this,h))e+=t.degree();return e/s(this,h).length}ratio(){return this.satisfiedConstraintSize()/s(this,h).length}satisfiedConstraintSize(){let e=0;for(const t of s(this,h))e+=t.isSatisfied()===1?1:0;return e}violatingConstraintSize(){return s(this,h).length-this.satisfiedConstraintSize()}satisfiedConstraints(){const e=[];for(const t of s(this,h))t.isSatisfied()===1&&e.push(t);return e}violatingConstraints(){const e=[];for(const t of s(this,h))t.isSatisfied()===0&&e.push(t);return e}}N=new WeakMap,B=new WeakMap,z=new WeakMap,f=new WeakMap,h=new WeakMap;var O,P,Q,U,R,E,L,X,j,W,q;class Et{constructor(){o(this,O,!0);o(this,P,e=>console.log(e));o(this,Q,()=>!1);o(this,U,Number.MAX_SAFE_INTEGER);o(this,R,null);o(this,E,.8);o(this,L,null);o(this,X,0);o(this,j,0);o(this,W,-1);o(this,q,0)}initialize(){a(this,X,s(this,R)===null?Number.MAX_VALUE:Date.now()+s(this,R)),a(this,j,0)}check(e=null){if(e!==null&&s(this,E)!==null&&s(this,E)<=e)return this.outputDebugString("Stop: Current evaluation value is above the target"),!0;if(s(this,U)<rt(this,j)._++)return this.outputDebugString("Stop: Number of iterations has reached the limit"),!1;if(s(this,X)<Date.now())return this.outputDebugString("Stop: Time limit has been reached"),!1;if(e!==null&&s(this,L)!==null)if(e!==-1&&s(this,W)===e){if(s(this,L)<rt(this,q)._++)return this.outputDebugString("Stop: Evaluation value has not changed for a certain number of times"),!1}else a(this,W,e),a(this,q,0);return null}solutionFound(e,t){return s(this,Q).call(this,e,t)}outputDebugString(e){s(this,O)&&s(this,P).call(this,e)}isDebugMode(){return s(this,O)}isTargetAssigned(){return s(this,E)!==null}getTarget(){return s(this,E)}setIterationLimit(e=null){a(this,U,e===null?Number.MAX_SAFE_INTEGER:e)}setTimeLimit(e=null){a(this,R,e)}setTarget(e=null){a(this,E,e)}setSameEvaluationLimit(e=null){a(this,L,e)}setListener(e){a(this,Q,e)}setDebugMode(e){a(this,O,e)}setDebugOutput(e){a(this,P,e)}}O=new WeakMap,P=new WeakMap,Q=new WeakMap,U=new WeakMap,R=new WeakMap,E=new WeakMap,L=new WeakMap,X=new WeakMap,j=new WeakMap,W=new WeakMap,q=new WeakMap;var A;class vt extends Y{constructor(t,i,n){super(t,i);o(this,A);a(this,A,n)}assign(t){super.assign(t),s(this,A)&&s(this,A).call(this,this,t)}}A=new WeakMap;class T{static crispSolverNames(){return["Forward Checking","Max Forward Checking","Local Changes","Local Changes Ex","Breakout","GENET","Crisp SRS3"]}static fuzzySolverNames(){return["Full Checking","Fuzzy Forward Checking","Flexible Local Changes","Flexible Local Changes Ex","Fuzzy Breakout","Fuzzy GENET","SRS3","SRS3 PF"]}static async createSolver(e){const t=await T.createCrispSolver(e);if(t)return t;const i=await T.createFuzzySolver(e);return i||null}static async createCrispSolver(e){switch(e.replaceAll(" ","")){case"ForwardChecking":case"forward-checking":const{ForwardChecking:t}=await import("./forward-checking-D5l2xYeY.js");return new t;case"MaxForwardChecking":case"max-forward-checking":const{MaxForwardChecking:i}=await import("./max-forward-checking-CwD8MbxU.js");return new i;case"LocalChanges":case"local-changes":const{LocalChanges:n}=await import("./local-changes-DW33Z4FR.js");return new n;case"LocalChangesEx":case"local-changes-ex":const{LocalChangesEx:l}=await import("./local-changes-ex-C_M11J75.js");return new l;case"Breakout":case"breakout":const{Breakout:y}=await import("./breakout-D3SusNLu.js");return new y;case"GENET":case"genet":const{GENET:C}=await import("./genet-BewkVtNi.js");return new C;case"CrispSRS3":case"crisp-srs3":const{CrispSRS3:V}=await import("./crisp-srs3-Cuf21eer.js");return new V}return null}static async createFuzzySolver(e){switch(e.replaceAll(" ","")){case"FullChecking":case"full-checking":const{FullChecking:t}=await import("./full-checking-B7L4CP_E.js");return new t;case"FuzzyForwardChecking":case"fuzzy-forward-checking":const{FuzzyForwardChecking:i}=await import("./fuzzy-forward-checking-BalKDHQS.js");return new i;case"FlexibleLocalChanges":case"flexible-local-changes":const{FlexibleLocalChanges:n}=await import("./flexible-local-changes-DK9P4NsN.js");return new n;case"FlexibleLocalChangesEx":case"flexible-local-changes-ex":const{FlexibleLocalChangesEx:l}=await import("./flexible-local-changes-ex-BEeihhI-.js");return new l;case"FuzzyBreakout":case"fuzzy-breakout":const{FuzzyBreakout:y}=await import("./fuzzy-breakout-BfGAAm1N.js");return new y;case"FuzzyGENET":case"fuzzy-genet":const{FuzzyGENET:C}=await import("./fuzzy-genet-B3Jxb9cV.js");return new C;case"SRS3":case"srs3":const{SRS3:V}=await import("./srs3-Dn5iNKUl.js");return new V;case"SRS3PF":case"SRS3_PF":case"srs3-pf":{const{SRS3:st}=await import("./srs3-Dn5iNKUl.js"),{wrapWithPostStabilizer:it}=await import("./post-stabilizer-CFJ3tTIj.js");return it(new st)}}return null}}var et;class zt{constructor(){J(this,"_debug",!0);o(this,et,e=>console.log(e))}setDebugMode(e){this._debug=e}setDebugOutput(e){this._debugOutput=e}_debugOutput(e){this._debug&&s(this,et).call(this,e)}}et=new WeakMap;var p;class Ct extends zt{constructor(t){super();o(this,p);a(this,p,t)}getQueenSize(){return s(this,p)}setQueenSize(t){a(this,p,t)}isFuzzy(){return!1}createProblem(t){const i=[];for(let n=0;n<s(this,p);++n){const l=t.createVariable({domain:t.createDomain({min:1,max:s(this,p)}),value:1,name:`Queen ${n}`});i.push(l)}for(let n=0;n<s(this,p);++n)for(let l=n+1;l<s(this,p);++l)t.createConstraint({relation:new Ft(n,l),variables:[i[n],i[l]]});return t}printResult(t){for(let i=0;i<s(this,p);++i){let n="";if(t.variableAt(i).isEmpty())for(let l=0;l<s(this,p);++l)n+="- ";else for(let l=0;l<s(this,p);++l)n+=t.variableAt(i).value()-1===l?"o ":"- ";this._debugOutput(n)}}}p=new WeakMap;var M;class Ft extends gt{constructor(t,i){super();o(this,M);a(this,M,i-t)}isSatisfied(t,i){return t!==i&&t!==i+s(this,M)&&t!==i-s(this,M)?1:0}}M=new WeakMap;onmessage=async r=>{const{task:e,args:t}=r.data;switch(e){case"create":Dt(...t);break;case"solve":kt(...t);break}};let K=null,v=null,tt=!1;function Dt(r){K=new Ct(r),K.setDebugOutput(lt);const e=(t,i)=>Nt(i-1,t.index());v=new xt,v.setVariableFactory((t,i)=>new vt(t,i,e)),v=K.createProblem(v)}async function kt(r,e,t,i){const n=Date.now(),l=T.crispSolverNames()[r],y=new Et;y.setTarget(e===-1?null:e),y.setTimeLimit(t===-1?null:t),y.setDebugOutput(lt),y.setDebugMode(i);const C=await T.createSolver(l);tt=i;const V=C.solve(v,y),st=Date.now()-n,it=v.ratio();tt=!0,K.printResult(v);for(const nt of v.variables())nt.assign(nt.value());postMessage({result:V,time:st,ev:it,solver:C.name()})}function lt(r){tt&&postMessage({log:r})}function Nt(r,e){tt&&postMessage({board:{x:r,y:e}})}export{Et as M};
