!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},s={},r=e.parcelRequire95bc;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in s){var r=s[e];delete s[e];var i={id:e,exports:{}};return t[e]=i,r.call(i.exports,i,i.exports),i.exports}var a=Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){s[e]=t},e.parcelRequire95bc=r),r.register,importScripts("./worker.28e2d56a.js");var i=r("1chkU"),a=r("kVxbQ");class o extends a.Model{#e;constructor(e){super(),this.#e=e}getQueenSize(){return this.#e}setQueenSize(e){this.#e=e}isFuzzy(){return!1}createProblem(e){let t=[];for(let s=0;s<this.#e;++s)t.push(e.createVariable({name:`Queen ${s}`,domain:e.createDomain({min:1,max:this.#e}),value:1}));for(let s=0;s<this.#e;++s)for(let r=s+1;r<this.#e;++r)e.createConstraint({relation:new l(s,r),variables:[t[s],t[r]]});return e}printResult(e){for(let t=0;t<this.#e;++t){let s="";if(e.variableAt(t).isEmpty())for(let e=0;e<this.#e;++e)s+="- ";else for(let r=0;r<this.#e;++r)e.variableAt(t).value()-1===r?s+="o ":s+="- ";this._debugOutput(s)}}}class l{#t;constructor(e,t){this.#t=t-e}isSatisfied(...e){let[t,s]=e;return t!==s&&t!==s+this.#t&&t!==s-this.#t?1:0}}onmessage=async e=>{let{task:t,args:s}=e.data;switch(t){case"create":!function(e){(n=new o(e)).setDebugOutput(f);let t=(e,t)=>{postMessage({board:{x:t-1,y:e.index()}})};(u=new i.CrispProblem).setVariableFactory((e,s)=>new i.ObservableVariable(e,s,t)),u=n.createProblem(u)}(...s);break;case"solve":c(...s)}};let n=null,u=null;async function c(e,t){let s=Date.now(),r=(0,i.SolverFactory).crispSolverNames()[e],a=await (0,i.SolverFactory).createSolver(r,u);a.setTargetRate(t),a.setDebugOutput(f);let o=a.solve(),l=Date.now()-s,c=u.satisfiedConstraintRate();n.printResult(u),postMessage({result:o,time:l,rate:c,solver:a.name()})}function f(e){postMessage({log:e})}}();
//# sourceMappingURL=worker.69892406.js.map
