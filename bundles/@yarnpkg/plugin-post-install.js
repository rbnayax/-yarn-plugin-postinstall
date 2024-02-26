/* eslint-disable */
//prettier-ignore
module.exports = {
name: "@yarnpkg/plugin-post-install",
factory: function (require) {
var plugin=(()=>{var c=Object.defineProperty;var n=Object.getOwnPropertyDescriptor;var l=Object.getOwnPropertyNames;var d=Object.prototype.hasOwnProperty;var p=(t=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(t,{get:(s,e)=>(typeof require<"u"?require:s)[e]}):t)(function(t){if(typeof require<"u")return require.apply(this,arguments);throw new Error('Dynamic require of "'+t+'" is not supported')});var u=(t,s)=>{for(var e in s)c(t,e,{get:s[e],enumerable:!0})},f=(t,s,e,o)=>{if(s&&typeof s=="object"||typeof s=="function")for(let r of l(s))!d.call(t,r)&&r!==e&&c(t,r,{get:()=>s[r],enumerable:!(o=n(s,r))||o.enumerable});return t};var P=t=>f(c({},"__esModule",{value:!0}),t);var k={};u(k,{default:()=>h});var a=p("@yarnpkg/core"),i="postinstallAll",g={hooks:{async afterAllInstalled(t){let s=t.topLevelWorkspace.anchoredLocator;if(await a.scriptUtils.hasPackageScript(s,i,{project:t})){let e=await a.scriptUtils.executePackageScript(s,i,[],{project:t,stdin:process.stdin,stdout:process.stdout,stderr:process.stderr});if(e!==0){let o=new Error(`${i} script failed with exit code ${e}`);throw o.stack=void 0,o}}}}},h=g;return P(k);})();
return plugin;
}
};
