(window.webpackJsonp=window.webpackJsonp||[]).push([["d0a3"],{"4mXO":function(e,n,t){e.exports=t("7TPF")},"7TPF":function(e,n,t){t("AUvm"),e.exports=t("WEpk").Object.getOwnPropertySymbols},RNiq:function(e,n,t){"use strict";t.r(n);var r=t("rt45"),a=t("vOnD"),c=t("q1tI"),l=t.n(c);t("4mXO"),t("pLtp");var o=t("UXZV"),i=t.n(o);function u(){return(u=i.a||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var m=a.c.section.withConfig({displayName:"Grid__Box",componentId:"sc-152kjm1-0"})(["",";max-width:",";margin:",";padding:"," 0;"],function(e){return"\nflex-direction: column;\ndisplay: flex;\n"},function(e){var n=e.theme;return e.container?n.bp.lg:"unset"},function(e){return e.container?"0 auto":"0"},function(e){return e.theme.gut}),f=a.c.div.withConfig({displayName:"Grid__Row",componentId:"sc-152kjm1-1"})(["",";padding:0 ",";flex-wrap:wrap;flex-grow:1;@media all and (min-width:","){flex-direction:row;}"],function(e){return"\nflex-direction: column;\ndisplay: flex;\n"},function(e){return e.theme.gut},function(e){var n=e.theme,t=e.bp;return n.bp[t||"xs"]}),d=a.c.div.withConfig({displayName:"Grid__Col",componentId:"sc-152kjm1-2"})(["",";margin:",";flex-grow:",";justify-content:stretch;flex-basis:0;"],function(e){return"\nflex-direction: column;\ndisplay: flex;\n"},function(e){return e.theme.gut},function(e){return e.grow||1}),s=function(e){return l.a.createElement(m,u({container:!0},e))},p=t("doui"),b=function(e){var n=e.theme;return"\nfont-family: ".concat(n.family,";\nmargin: ").concat(n.margin,"\n")},E=a.c.p.withConfig({displayName:"Text",componentId:"sc-1qdnxk1-0"})(["",";font-size:1rem;"],function(e){return b(e)}),g=a.c.h1.withConfig({displayName:"Text__Title",componentId:"sc-1qdnxk1-1"})(["",";font-size:1.5rem;"],function(e){return b(e)}),h=a.c.h2.withConfig({displayName:"Text__SubTitle",componentId:"sc-1qdnxk1-2"})(["",";font-size:1.2rem;"],function(e){return b(e)}),w=(a.c.label.withConfig({displayName:"Text__Label",componentId:"sc-1qdnxk1-3"})(["",";font-weight:bold;font-size:.8rem;"],function(e){return b(e)}),Object(a.c)(E).withConfig({displayName:"TimePeriod__Date",componentId:"abh8cx-0"})(["color:",";text-align:center;font-size:1.75rem;&:first-child{border-bottom:1px solid ",";}"],function(e){return e.theme.secondary},function(e){return e.theme.shadow})),j=function(e){var n=e.timePeriod;return l.a.createElement(l.a.Fragment,null,l.a.createElement(w,null,n.endDate?n.endDate.year:"now"),l.a.createElement(w,null,n.startDate.year))},O=a.c.div.withConfig({displayName:"Card",componentId:"wo4q5j-0"})(["box-shadow:0 .25rem 1rem 0 ",";border-radius:",";padding:",";overflow:hidden;"],function(e){return e.theme.shadow},function(e){return e.theme.radius},function(e){return e.theme.gut}),v=t("2Zwk");function x(){var e=Object(r.a)(["justify-content: center"]);return x=function(){return e},e}function y(){var e=Object(r.a)(["justify-content: center"]);return y=function(){return e},e}function N(){var e=Object(r.a)(["margin-bottom: 1rem"]);return N=function(){return e},e}var _=Object(c.memo)(function(){var e=Object(v.b)(),n=Object(p.default)(e,1)[0].positionView;return console.log(n),l.a.createElement(l.a.Fragment,null,l.a.createElement(h,null,"Work Experience"),l.a.createElement("br",null),n&&n.elements.map(function(e,n){return l.a.createElement(k,{key:"job-item-".concat(n)},l.a.createElement(f,null,l.a.createElement(P,{grow:"0"},l.a.createElement(j,{timePeriod:e.timePeriod})),l.a.createElement(C,null,l.a.createElement(E,null,l.a.createElement("strong",null,e.title)),l.a.createElement(E,null,e.companyName," ",e.locationName))))}))}),k=Object(a.c)(O)(N()),P=Object(a.c)(d)(y()),C=Object(a.c)(d)(x());function T(){var e=Object(r.a)(["justify-content: center"]);return T=function(){return e},e}function I(){var e=Object(r.a)(["justify-content: center"]);return I=function(){return e},e}function q(){var e=Object(r.a)(["margin-bottom: 1rem"]);return q=function(){return e},e}var F=Object(c.memo)(function(){var e=Object(v.b)(),n=Object(p.default)(e,1)[0].educationView;return l.a.createElement(l.a.Fragment,null,l.a.createElement(h,null,"Education"),l.a.createElement("br",null),n&&n.elements.map(function(e,n){return l.a.createElement(D,{key:"education-item-".concat(n)},l.a.createElement(f,null,l.a.createElement(z,{grow:"0"},l.a.createElement(j,{timePeriod:e.timePeriod})),l.a.createElement(R,null,l.a.createElement(E,null,l.a.createElement("strong",null,e.degreeName," in ",e.fieldOfStudy)),l.a.createElement(E,null,e.schoolName))))}))}),D=Object(a.c)(O)(q()),z=Object(a.c)(d)(I()),R=Object(a.c)(d)(T()),X=Object(c.memo)(function(){var e=Object(v.b)(),n=Object(p.default)(e,1)[0].profile;return console.log(n),l.a.createElement(l.a.Fragment,null,l.a.createElement(g,null,n.firstName," ",n.lastName),l.a.createElement(h,null,n.headline))}),G=Object(c.memo)(function(){var e=Object(v.b)(),n=Object(p.default)(e,1)[0].profile;return l.a.createElement(l.a.Fragment,null,l.a.createElement(E,null,n.locationName),l.a.createElement(E,null,"flexgh.us@gmail.com"),l.a.createElement(E,null,"+55 21 99088-2070"))});function S(){var e=Object(r.a)(["@media all and (min-width: ","){text-align: right}"]);return S=function(){return e},e}n.default=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(s,null,l.a.createElement(f,{bp:"sm"},l.a.createElement(d,null,l.a.createElement(X,null)),l.a.createElement(V,null,l.a.createElement(G,null)))),l.a.createElement(s,null,l.a.createElement(f,null,l.a.createElement(d,null,l.a.createElement(F,null))),l.a.createElement(f,null,l.a.createElement(d,null,l.a.createElement(_,null)))))};var V=Object(a.c)(d)(S(),function(e){return e.theme.bp.sm})},vlRD:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){var e=t("RNiq");return{page:e.default||e}}])}},[["vlRD","5d41","9da1"]]]);