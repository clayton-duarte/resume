(window.webpackJsonp=window.webpackJsonp||[]).push([["f496"],{"1TCz":function(e,t,i){"use strict";i.r(t);var n=i("ln6h"),o=i.n(n),a=i("O40h"),r=i("0iUn"),l=i("sLSF"),m=i("MI3g"),c=i("a7VT"),s=i("AT/M"),h=i("Tit0"),d=i("hfKm"),g=i.n(d);var u=i("rt45"),p=i("q1tI"),y=i.n(p),A=i("8Bbg"),f=i.n(A),C=i("vOnD"),_=i("mx0m"),I=i("2Zwk"),v=function(e,t){t.type,t.payload;return e},U={family:"Courier",primary:"#999999",secondary:"#666666",black:"#333333",white:"#FFFFFF",shadow:"rgba(0,0,0,0.25)",bg:"#FEFEFE",rem:"16px",gut:".5rem",margin:".25rem 0",padding:".75rem 1rem",radius:".25rem",bp:{xs:"425px",sm:"768px",md:"1024px",lg:"1280px"}};function B(){var e=Object(u.a)(["\nbody {\n  font-family: ",";\n  background-color: ",";\n  font-size: ",";\n  color: ",";\n  margin: 0;\n  a {\n    color: ",";\n    margin: ",";\n  }\n  hr {\n    border: unset;\n    background: linear-gradient(\n      to right,\n      transparent,\n      ",",\n      ",",\n      transparent\n    );\n    margin: ","; 1rem;\n    height: 1px;\n  }\n}\n"]);return B=function(){return e},e}i.d(t,"default",function(){return w});var P=Object(C.b)(B(),function(e){return e.theme.family},function(e){return e.theme.bg},function(e){return e.theme.rem},function(e){return e.theme.black},function(e){return e.theme.primary},function(e){return e.theme.margin},function(e){return e.theme.shadow},function(e){return e.theme.shadow},function(e){return e.theme.gut}),w=function(e){function t(){var e,i,n,o,a;Object(r.default)(this,t);for(var l=arguments.length,h=new Array(l),d=0;d<l;d++)h[d]=arguments[d];return i=Object(m.default)(this,(e=Object(c.default)(t)).call.apply(e,[this].concat(h))),n=Object(s.default)(i),a={},(o="state")in n?g()(n,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[o]=a,i}return Object(h.default)(t,e),Object(l.default)(t,[{key:"render",value:function(){var e=this.props,t=e.Component,i=e.pageProps;return y.a.createElement(C.a,{theme:U},y.a.createElement(y.a.Fragment,null,y.a.createElement(A.Container,null,y.a.createElement(I.a,{initialState:_,reducer:v},y.a.createElement(t,i))),y.a.createElement(P,null)))}}],[{key:"getInitialProps",value:function(){var e=Object(a.default)(o.a.mark(function e(t){var i,n,a;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(i=t.Component,n=t.ctx,a={},!i.getInitialProps){e.next=6;break}return e.next=5,i.getInitialProps(n);case 5:a=e.sent;case 6:return e.abrupt("return",a);case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}]),t}(f.a)},"8Bbg":function(e,t,i){e.exports=i("B5Ud")},B5Ud:function(e,t,i){"use strict";var n=i("KI45"),o=n(i("eVuF")),a=n(i("UXZV")),r=n(i("/HRN")),l=n(i("WaGi")),m=n(i("ZDA2")),c=n(i("/+P4")),s=n(i("N9n2")),h=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)Object.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t.default=e,t},d=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var g=h(i("q1tI")),u=d(i("17x9")),p=i("Bu4q"),y=i("nOHt"),A=function(e){function t(){return(0,r.default)(this,t),(0,m.default)(this,(0,c.default)(t).apply(this,arguments))}return(0,s.default)(t,e),(0,l.default)(t,[{key:"getChildContext",value:function(){return{router:y.makePublicRouterInstance(this.props.router)}}},{key:"componentDidCatch",value:function(e){throw e}},{key:"render",value:function(){var e=this.props,t=e.router,i=e.Component,n=e.pageProps,o=_(t);return g.default.createElement(f,null,g.default.createElement(i,(0,a.default)({},n,{url:o})))}}],[{key:"getInitialProps",value:function(e){var t=e.Component,i=(e.router,e.ctx);try{return o.default.resolve(p.loadGetInitialProps(t,i)).then(function(e){return{pageProps:e}})}catch(n){return o.default.reject(n)}}}]),t}(g.Component);A.childContextTypes={router:u.default.object},t.default=A;var f=function(e){function t(){return(0,r.default)(this,t),(0,m.default)(this,(0,c.default)(t).apply(this,arguments))}return(0,s.default)(t,e),(0,l.default)(t,[{key:"componentDidMount",value:function(){this.scrollToHash()}},{key:"componentDidUpdate",value:function(){this.scrollToHash()}},{key:"scrollToHash",value:function(){var e=window.location.hash;if(e=!!e&&e.substring(1)){var t=document.getElementById(e);t&&setTimeout(function(){return t.scrollIntoView()},0)}}},{key:"render",value:function(){return this.props.children}}]),t}(g.Component);t.Container=f;var C=p.execOnce(function(){0});function _(e){var t=e.pathname,i=e.asPath,n=e.query;return{get query(){return C(),n},get pathname(){return C(),t},get asPath(){return C(),i},back:function(){C(),e.back()},push:function(t,i){return C(),e.push(t,i)},pushTo:function(t,i){C();var n=i?t:null,o=i||t;return e.push(n,o)},replace:function(t,i){return C(),e.replace(t,i)},replaceTo:function(t,i){C();var n=i?t:null,o=i||t;return e.replace(n,o)}}}t.createUrl=_},GcxT:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){var e=i("1TCz");return{page:e.default||e}}])},mx0m:function(e){e.exports={positionGroupView:{entityUrn:"urn:li:fs_positionGroupView:ACoAAB4iCBcBjPvsAX_8OYikYWQ26WxcHIMhKFE",profileId:"ACoAAB4iCBcBjPvsAX_8OYikYWQ26WxcHIMhKFE",elements:[{miniCompany:{objectUrn:"urn:li:company:18708461",entityUrn:"urn:li:fs_miniCompany:18708461",name:"CoinSmart",showcase:!1,active:!0,logo:{"com.linkedin.common.VectorImage":{artifacts:[{width:200,fileIdentifyingUrlPathSegment:"200_200/0?e=1565827200&v=beta&t=afHiYJoQyx5EUOIO-6Ye0uEQXedKITUQx_rwpda-KGM",expiresAt:15658272e5,height:200},{width:100,fileIdentifyingUrlPathSegment:"100_100/0?e=1565827200&v=beta&t=YtYdZ_8pCwD6PbCFCuO-pROmXMvwSTJnQAz4Z9vjIVg",expiresAt:15658272e5,height:100},{width:400,fileIdentifyingUrlPathSegment:"400_400/0?e=1565827200&v=beta&t=GyoOj12zGhB-uo6ZcCWWI0vsA_MvNj83q-26IGK2kFI",expiresAt:15658272e5,height:400}],rootUrl:"https://media.licdn.com/dms/image/C560BAQGtC6nuKn7I9w/company-logo_"}},trackingId:"EbJWnT0+S625oEmBjfhsaw=="},entityUrn:"urn:li:fs_positionGroup:(ACoAAB4iCBcBjPvsAX_8OYikYWQ26WxcHIMhKFE,0)",timePeriod:{startDate:{month:12,year:2018}},name:"CoinSmart",positions:[{locationName:"Toronto, Ontario, Canada",entityUrn:"urn:li:fs_position:(ACoAAB4iCBcBjPvsAX_8OYikYWQ26WxcHIMhKFE,1402330267)",geoLocationName:"Toronto, Ontario, Canada",companyName:"CoinSmart",timePeriod:{startDate:{month:12,year:2018}},company:{employeeCountRange:{start:11,end:50},miniCompany:{objectUrn:"urn:li:company:18708461",entityUrn:"urn:li:fs_miniCompany:18708461",name:"CoinSmart",showcase:!1,active:!0,logo:{"com.linkedin.common.VectorImage":{artifacts:[{width:200,fileIdentifyingUrlPathSegment:"200_200/0?e=1565827200&v=beta&t=afHiYJoQyx5EUOIO-6Ye0uEQXedKITUQx_rwpda-KGM",expiresAt:15658272e5,height:200},{width:100,fileIdentifyingUrlPathSegment:"100_100/0?e=1565827200&v=beta&t=YtYdZ_8pCwD6PbCFCuO-pROmXMvwSTJnQAz4Z9vjIVg",expiresAt:15658272e5,height:100},{width:400,fileIdentifyingUrlPathSegment:"400_400/0?e=1565827200&v=beta&t=GyoOj12zGhB-uo6ZcCWWI0vsA_MvNj83q-26IGK2kFI",expiresAt:15658272e5,height:400}],rootUrl:"https://media.licdn.com/dms/image/C560BAQGtC6nuKn7I9w/company-logo_"}},trackingId:"EbJWnT0+S625oEmBjfhsaw=="},industries:["Financial Services"]},title:"Senior React Engineer (Remote)",companyUrn:"urn:li:fs_miniCompany:18708461"}],paging:{total:1,start:0,count:5,links:[]}},{miniCompany:{objectUrn:"urn:li:company:10812002",entityUrn:"urn:li:fs_miniCompany:10812002",name:"Mooven Consulting",showcase:!1,active:!0,logo:{"com.linkedin.common.VectorImage":{artifacts:[{width:200,fileIdentifyingUrlPathSegment:"200_200/0?e=1565827200&v=beta&t=NFyFfmanqPsJ-6YuGaz8e3yh1Q6A1ZFzJhAMyA5nDy8",expiresAt:15658272e5,height:200},{width:100,fileIdentifyingUrlPathSegment:"100_100/0?e=1565827200&v=beta&t=xj8ofRphk4zxaO5Llq1JesnW1uUn12i6r-W4iYE3Hrk",expiresAt:15658272e5,height:100},{width:400,fileIdentifyingUrlPathSegment:"400_400/0?e=1565827200&v=beta&t=JMOzMgG5hDhXoRnuzoL9FGeNaa-ANOHrtiAay5UibrI",expiresAt:15658272e5,height:400}],rootUrl:"https://media.licdn.com/dms/image/C4D0BAQFNJlZ62w2qqA/company-logo_"}},trackingId:"IHeLmcIXS7qJyY6Q7wPAEQ=="},entityUrn:"urn:li:fs_positionGroup:(ACoAAB4iCBcBjPvsAX_8OYikYWQ26WxcHIMhKFE,1)",timePeriod:{endDate:{month:3,year:2019},startDate:{month:7,year:2018}},name:"Mooven Consulting",positions:[{entityUrn:"urn:li:fs_position:(ACoAAB4iCBcBjPvsAX_8OYikYWQ26WxcHIMhKFE,1337659505)",companyName:"Mooven Consulting",timePeriod:{endDate:{month:3,year:2019},startDate:{month:11,year:2018}},company:{employeeCountRange:{start:51,end:200},miniCompany:{objectUrn:"urn:li:company:10812002",entityUrn:"urn:li:fs_miniCompany:10812002",name:"Mooven Consulting",showcase:!1,active:!0,logo:{"com.linkedin.common.VectorImage":{artifacts:[{width:200,fileIdentifyingUrlPathSegment:"200_200/0?e=1565827200&v=beta&t=NFyFfmanqPsJ-6YuGaz8e3yh1Q6A1ZFzJhAMyA5nDy8",expiresAt:15658272e5,height:200},{width:100,fileIdentifyingUrlPathSegment:"100_100/0?e=1565827200&v=beta&t=xj8ofRphk4zxaO5Llq1JesnW1uUn12i6r-W4iYE3Hrk",expiresAt:15658272e5,height:100},{width:400,fileIdentifyingUrlPathSegment:"400_400/0?e=1565827200&v=beta&t=JMOzMgG5hDhXoRnuzoL9FGeNaa-ANOHrtiAay5UibrI",expiresAt:15658272e5,height:400}],rootUrl:"https://media.licdn.com/dms/image/C4D0BAQFNJlZ62w2qqA/company-logo_"}},trackingId:"IHeLmcIXS7qJyY6Q7wPAEQ=="},industries:["Information Technology and Services"]},title:"Head of Development",companyUrn:"urn:li:fs_miniCompany:10812002"},{entityUrn:"urn:li:fs_position:(ACoAAB4iCBcBjPvsAX_8OYikYWQ26WxcHIMhKFE,1455732675)",companyName:"Mooven Consulting",timePeriod:{endDate:{month:11,year:2018},startDate:{month:7,year:2018}},company:{employeeCountRange:{start:51,end:200},miniCompany:{objectUrn:"urn:li:company:10812002",entityUrn:"urn:li:fs_miniCompany:10812002",name:"Mooven Consulting",showcase:!1,active:!0,logo:{"com.linkedin.common.VectorImage":{artifacts:[{width:200,fileIdentifyingUrlPathSegment:"200_200/0?e=1565827200&v=beta&t=NFyFfmanqPsJ-6YuGaz8e3yh1Q6A1ZFzJhAMyA5nDy8",expiresAt:15658272e5,height:200},{width:100,fileIdentifyingUrlPathSegment:"100_100/0?e=1565827200&v=beta&t=xj8ofRphk4zxaO5Llq1JesnW1uUn12i6r-W4iYE3Hrk",expiresAt:15658272e5,height:100},{width:400,fileIdentifyingUrlPathSegment:"400_400/0?e=1565827200&v=beta&t=JMOzMgG5hDhXoRnuzoL9FGeNaa-ANOHrtiAay5UibrI",expiresAt:15658272e5,height:400}],rootUrl:"https://media.licdn.com/dms/image/C4D0BAQFNJlZ62w2qqA/company-logo_"}},trackingId:"9czbWnzvQsu9DIRrq+Ckzw=="},industries:["Information Technology and Services"]},title:"Lead Frontend Developer",companyUrn:"urn:li:fs_miniCompany:10812002"}],paging:{total:2,start:0,count:2,links:[]}},{miniCompany:{objectUrn:"urn:li:company:3721",entityUrn:"urn:li:fs_miniCompany:3721",name:"Oi S.A",showcase:!1,active:!0,logo:{"com.linkedin.common.VectorImage":{artifacts:[{width:200,fileIdentifyingUrlPathSegment:"200_200/0?e=1565827200&v=beta&t=6nF_EeZ46wyCWOdgKW0mXFSiyyJvp4gGZ7RA_15-Kgo",expiresAt:15658272e5,height:200},{width:100,fileIdentifyingUrlPathSegment:"100_100/0?e=1565827200&v=beta&t=wja-9kM-YoDgGndDgJdVRacE_PvbXZh6zzuXslw2aLw",expiresAt:15658272e5,height:100},{width:400,fileIdentifyingUrlPathSegment:"400_400/0?e=1565827200&v=beta&t=4cZqHesLSktIuiyCOQ335spoRVFFM0gGqPmoDmHzpN8",expiresAt:15658272e5,height:400}],rootUrl:"https://media.licdn.com/dms/image/C4E0BAQGhcYbBOJEqqQ/company-logo_"}},trackingId:"Bph9wIH8TCiHtr5FdzGZFA=="},entityUrn:"urn:li:fs_positionGroup:(ACoAAB4iCBcBjPvsAX_8OYikYWQ26WxcHIMhKFE,2)",timePeriod:{endDate:{month:7,year:2018},startDate:{month:10,year:2016}},name:"Oi S.A",positions:[{entityUrn:"urn:li:fs_position:(ACoAAB4iCBcBjPvsAX_8OYikYWQ26WxcHIMhKFE,1429210082)",companyName:"Oi S.A",timePeriod:{endDate:{month:7,year:2018},startDate:{month:12,year:2017}},company:{employeeCountRange:{start:10001},miniCompany:{objectUrn:"urn:li:company:3721",entityUrn:"urn:li:fs_miniCompany:3721",name:"Oi S.A",showcase:!1,active:!0,logo:{"com.linkedin.common.VectorImage":{artifacts:[{width:200,fileIdentifyingUrlPathSegment:"200_200/0?e=1565827200&v=beta&t=6nF_EeZ46wyCWOdgKW0mXFSiyyJvp4gGZ7RA_15-Kgo",expiresAt:15658272e5,height:200},{width:100,fileIdentifyingUrlPathSegment:"100_100/0?e=1565827200&v=beta&t=wja-9kM-YoDgGndDgJdVRacE_PvbXZh6zzuXslw2aLw",expiresAt:15658272e5,height:100},{width:400,fileIdentifyingUrlPathSegment:"400_400/0?e=1565827200&v=beta&t=4cZqHesLSktIuiyCOQ335spoRVFFM0gGqPmoDmHzpN8",expiresAt:15658272e5,height:400}],rootUrl:"https://media.licdn.com/dms/image/C4E0BAQGhcYbBOJEqqQ/company-logo_"}},trackingId:"Bph9wIH8TCiHtr5FdzGZFA=="},industries:["Telecommunications"]},title:"FrontEnd Tech Lead",companyUrn:"urn:li:fs_miniCompany:3721"},{entityUrn:"urn:li:fs_position:(ACoAAB4iCBcBjPvsAX_8OYikYWQ26WxcHIMhKFE,1264534948)",companyName:"Oi S.A",timePeriod:{endDate:{month:12,year:2017},startDate:{month:10,year:2016}},company:{employeeCountRange:{start:10001},miniCompany:{objectUrn:"urn:li:company:3721",entityUrn:"urn:li:fs_miniCompany:3721",name:"Oi S.A",showcase:!1,active:!0,logo:{"com.linkedin.common.VectorImage":{artifacts:[{width:200,fileIdentifyingUrlPathSegment:"200_200/0?e=1565827200&v=beta&t=6nF_EeZ46wyCWOdgKW0mXFSiyyJvp4gGZ7RA_15-Kgo",expiresAt:15658272e5,height:200},{width:100,fileIdentifyingUrlPathSegment:"100_100/0?e=1565827200&v=beta&t=wja-9kM-YoDgGndDgJdVRacE_PvbXZh6zzuXslw2aLw",expiresAt:15658272e5,height:100},{width:400,fileIdentifyingUrlPathSegment:"400_400/0?e=1565827200&v=beta&t=4cZqHesLSktIuiyCOQ335spoRVFFM0gGqPmoDmHzpN8",expiresAt:15658272e5,height:400}],rootUrl:"https://media.licdn.com/dms/image/C4E0BAQGhcYbBOJEqqQ/company-logo_"}},trackingId:"lGhPc3pdTe+Rw7KR2XZUHQ=="},industries:["Telecommunications"]},title:"Senior Frontend Developer",companyUrn:"urn:li:fs_miniCompany:3721"}],paging:{total:2,start:0,count:2,links:[]}},{miniCompany:{objectUrn:"urn:li:company:3701749",entityUrn:"urn:li:fs_miniCompany:3701749",name:"Bio Central de Serviços Gerais Ltda.",showcase:!1,active:!0,logo:{"com.linkedin.common.VectorImage":{artifacts:[{width:200,fileIdentifyingUrlPathSegment:"200_200/0?e=1565827200&v=beta&t=DmCuOeMvFQy-Ah-ZOp56NnUfkqsc_JMpyJjJRE0N0N4",expiresAt:15658272e5,height:200},{width:100,fileIdentifyingUrlPathSegment:"100_100/0?e=1565827200&v=beta&t=2KpVsg86q7Hw0QtEkkNVOi_Jx28GgXzZtVfqDeH1v5E",expiresAt:15658272e5,height:100},{width:400,fileIdentifyingUrlPathSegment:"400_400/0?e=1565827200&v=beta&t=KZ8YNM6bbS6ISYoMY1lB45UU465FSIhKGrqMOBwP-vU",expiresAt:15658272e5,height:400}],rootUrl:"https://media.licdn.com/dms/image/C4E0BAQFo2UpbXTSvJw/company-logo_"}},trackingId:"rGpp3Hl2R5ORtw2wiiumoQ=="},entityUrn:"urn:li:fs_positionGroup:(ACoAAB4iCBcBjPvsAX_8OYikYWQ26WxcHIMhKFE,3)",timePeriod:{endDate:{month:10,year:2016},startDate:{month:9,year:2015}},name:"Bio Central de Serviços Gerais Ltda.",positions:[{entityUrn:"urn:li:fs_position:(ACoAAB4iCBcBjPvsAX_8OYikYWQ26WxcHIMhKFE,1038089031)",companyName:"Bio Central de Serviços Gerais Ltda.",timePeriod:{endDate:{month:10,year:2016},startDate:{month:1,year:2016}},company:{employeeCountRange:{start:201,end:500},miniCompany:{objectUrn:"urn:li:company:3701749",entityUrn:"urn:li:fs_miniCompany:3701749",name:"Bio Central de Serviços Gerais Ltda.",showcase:!1,active:!0,logo:{"com.linkedin.common.VectorImage":{artifacts:[{width:200,fileIdentifyingUrlPathSegment:"200_200/0?e=1565827200&v=beta&t=DmCuOeMvFQy-Ah-ZOp56NnUfkqsc_JMpyJjJRE0N0N4",expiresAt:15658272e5,height:200},{width:100,fileIdentifyingUrlPathSegment:"100_100/0?e=1565827200&v=beta&t=2KpVsg86q7Hw0QtEkkNVOi_Jx28GgXzZtVfqDeH1v5E",expiresAt:15658272e5,height:100},{width:400,fileIdentifyingUrlPathSegment:"400_400/0?e=1565827200&v=beta&t=KZ8YNM6bbS6ISYoMY1lB45UU465FSIhKGrqMOBwP-vU",expiresAt:15658272e5,height:400}],rootUrl:"https://media.licdn.com/dms/image/C4E0BAQFo2UpbXTSvJw/company-logo_"}},trackingId:"rGpp3Hl2R5ORtw2wiiumoQ=="},industries:["Facilities Services"]},title:"MEAN Stack Developer",companyUrn:"urn:li:fs_miniCompany:3701749"},{entityUrn:"urn:li:fs_position:(ACoAAB4iCBcBjPvsAX_8OYikYWQ26WxcHIMhKFE,1431478808)",companyName:"Bio Central de Serviços Gerais Ltda.",timePeriod:{endDate:{month:1,year:2016},startDate:{month:9,year:2015}},company:{employeeCountRange:{start:201,end:500},miniCompany:{objectUrn:"urn:li:company:3701749",entityUrn:"urn:li:fs_miniCompany:3701749",name:"Bio Central de Serviços Gerais Ltda.",showcase:!1,active:!0,logo:{"com.linkedin.common.VectorImage":{artifacts:[{width:200,fileIdentifyingUrlPathSegment:"200_200/0?e=1565827200&v=beta&t=DmCuOeMvFQy-Ah-ZOp56NnUfkqsc_JMpyJjJRE0N0N4",expiresAt:15658272e5,height:200},{width:100,fileIdentifyingUrlPathSegment:"100_100/0?e=1565827200&v=beta&t=2KpVsg86q7Hw0QtEkkNVOi_Jx28GgXzZtVfqDeH1v5E",expiresAt:15658272e5,height:100},{width:400,fileIdentifyingUrlPathSegment:"400_400/0?e=1565827200&v=beta&t=KZ8YNM6bbS6ISYoMY1lB45UU465FSIhKGrqMOBwP-vU",expiresAt:15658272e5,height:400}],rootUrl:"https://media.licdn.com/dms/image/C4E0BAQFo2UpbXTSvJw/company-logo_"}},trackingId:"ygLuPn3IRda5c8dwxsUQ7Q=="},industries:["Facilities Services"]},title:"Senior PHP Developer",companyUrn:"urn:li:fs_miniCompany:3701749"}],paging:{total:2,start:0,count:2,links:[]}},{miniCompany:{objectUrn:"urn:li:company:22289419",entityUrn:"urn:li:fs_miniCompany:22289419",name:"Plazit-Polygal North America",showcase:!1,active:!0,logo:{"com.linkedin.common.VectorImage":{artifacts:[{width:200,fileIdentifyingUrlPathSegment:"200_200/0?e=1565827200&v=beta&t=TPcREGsd2_dlbZ46vWfC7iET2cVBpqJNHDxyY7drzw8",expiresAt:15658272e5,height:200},{width:100,fileIdentifyingUrlPathSegment:"100_100/0?e=1565827200&v=beta&t=lAd7oXll05A2jEqkd2pbhnj5hVsuHbQnLcHdm5M-n9Y",expiresAt:15658272e5,height:100},{width:400,fileIdentifyingUrlPathSegment:"400_400/0?e=1565827200&v=beta&t=7TGAdLbNEQ6ruXYqW5YsV9EmwWKCAm2lH7FZ_D264gM",expiresAt:15658272e5,height:400}],rootUrl:"https://media.licdn.com/dms/image/C560BAQE_PxlK0o55TA/company-logo_"}},trackingId:"47GuExuDS3KlIP8WrPZzEw=="},entityUrn:"urn:li:fs_positionGroup:(ACoAAB4iCBcBjPvsAX_8OYikYWQ26WxcHIMhKFE,4)",timePeriod:{endDate:{month:9,year:2015},startDate:{month:4,year:2015}},name:"Plazit-Polygal North America",positions:[{locationName:"Kyoto, Japão",entityUrn:"urn:li:fs_position:(ACoAAB4iCBcBjPvsAX_8OYikYWQ26WxcHIMhKFE,1039083634)",geoLocationName:"Kyoto, Japão",companyName:"Plazit-Polygal North America",timePeriod:{endDate:{month:9,year:2015},startDate:{month:4,year:2015}},company:{miniCompany:{objectUrn:"urn:li:company:22289419",entityUrn:"urn:li:fs_miniCompany:22289419",name:"Plazit-Polygal North America",showcase:!1,active:!0,logo:{"com.linkedin.common.VectorImage":{artifacts:[{width:200,fileIdentifyingUrlPathSegment:"200_200/0?e=1565827200&v=beta&t=TPcREGsd2_dlbZ46vWfC7iET2cVBpqJNHDxyY7drzw8",expiresAt:15658272e5,height:200},{width:100,fileIdentifyingUrlPathSegment:"100_100/0?e=1565827200&v=beta&t=lAd7oXll05A2jEqkd2pbhnj5hVsuHbQnLcHdm5M-n9Y",expiresAt:15658272e5,height:100},{width:400,fileIdentifyingUrlPathSegment:"400_400/0?e=1565827200&v=beta&t=7TGAdLbNEQ6ruXYqW5YsV9EmwWKCAm2lH7FZ_D264gM",expiresAt:15658272e5,height:400}],rootUrl:"https://media.licdn.com/dms/image/C560BAQE_PxlK0o55TA/company-logo_"}},trackingId:"47GuExuDS3KlIP8WrPZzEw=="},industries:["Plastics"]},title:"Frontend Developer (Remote)",companyUrn:"urn:li:fs_miniCompany:22289419"}],paging:{total:1,start:0,count:2,links:[]}}],paging:{total:9,start:0,count:5,links:[]}},patentView:{entityUrn:"urn:li:fs_patentView:ACoAAB4iCBcBjPvsAX_8OYikYWQ26WxcHIMhKFE",profileId:"ACoAAB4iCBcBjPvsAX_8OYikYWQ26WxcHIMhKFE",elements:[],paging:{total:0,start:0,count:10,links:[]}},summaryTreasuryMediaCount:0,summaryTreasuryMedias:[],educationView:{entityUrn:"urn:li:fs_educationView:ACoAAB4iCBcBjPvsAX_8OYikYWQ26WxcHIMhKFE",profileId:"ACoAAB4iCBcBjPvsAX_8OYikYWQ26WxcHIMhKFE",elements:[{entityUrn:"urn:li:fs_education:(ACoAAB4iCBcBjPvsAX_8OYikYWQ26WxcHIMhKFE,542273697)",school:{objectUrn:"urn:li:school:4053016",entityUrn:"urn:li:fs_miniSchool:4053016",active:!0,logo:{"com.linkedin.common.VectorImage":{artifacts:[{width:200,fileIdentifyingUrlPathSegment:"200_200/0?e=1565827200&v=beta&t=Ag6GMrCfekXTg8jxO63QX6_Yr1NjaWLsx8PwW4GMZAY",expiresAt:15658272e5,height:200},{width:100,fileIdentifyingUrlPathSegment:"100_100/0?e=1565827200&v=beta&t=ngmq8_2GUxZhzRfWLrUEyp5KhsBIu0DGIXUDy0SvGtE",expiresAt:15658272e5,height:100},{width:400,fileIdentifyingUrlPathSegment:"400_400/0?e=1565827200&v=beta&t=qEOM1olTjCtpoF1oT2xtI2a0dyfK6hm38v5oznJePAE",expiresAt:15658272e5,height:400}],rootUrl:"https://media.licdn.com/dms/image/C4D0BAQFu6h5nR1aqAQ/company-logo_"}},schoolName:"Estácio",trackingId:"RWaxWwS5RjKnXX/dyzwvrg=="},timePeriod:{endDate:{year:2020},startDate:{year:2019}},degreeName:"Master of Business Administration - MBA",schoolName:"Estácio",fieldOfStudy:"Software Architecture",degreeUrn:"urn:li:fs_degree:700",schoolUrn:"urn:li:fs_miniSchool:4053016"},{entityUrn:"urn:li:fs_education:(ACoAAB4iCBcBjPvsAX_8OYikYWQ26WxcHIMhKFE,419172150)",school:{objectUrn:"urn:li:school:4053016",entityUrn:"urn:li:fs_miniSchool:4053016",active:!0,logo:{"com.linkedin.common.VectorImage":{artifacts:[{width:200,fileIdentifyingUrlPathSegment:"200_200/0?e=1565827200&v=beta&t=Ag6GMrCfekXTg8jxO63QX6_Yr1NjaWLsx8PwW4GMZAY",expiresAt:15658272e5,height:200},{width:100,fileIdentifyingUrlPathSegment:"100_100/0?e=1565827200&v=beta&t=ngmq8_2GUxZhzRfWLrUEyp5KhsBIu0DGIXUDy0SvGtE",expiresAt:15658272e5,height:100},{width:400,fileIdentifyingUrlPathSegment:"400_400/0?e=1565827200&v=beta&t=qEOM1olTjCtpoF1oT2xtI2a0dyfK6hm38v5oznJePAE",expiresAt:15658272e5,height:400}],rootUrl:"https://media.licdn.com/dms/image/C4D0BAQFu6h5nR1aqAQ/company-logo_"}},schoolName:"Estácio",trackingId:"iDWQmb7HRgiqeEhskFDxzw=="},timePeriod:{endDate:{year:2019},startDate:{year:2016}},fieldOfStudyUrn:"urn:li:fs_fieldOfStudy:100185",degreeName:"Bachelor's degree",schoolName:"Estácio",fieldOfStudy:"Computer Systems Analysis",degreeUrn:"urn:li:fs_degree:200",schoolUrn:"urn:li:fs_miniSchool:4053016"},{entityUrn:"urn:li:fs_education:(ACoAAB4iCBcBjPvsAX_8OYikYWQ26WxcHIMhKFE,578294370)",school:{objectUrn:"urn:li:school:3153509",entityUrn:"urn:li:fs_miniSchool:3153509",active:!0,logo:{"com.linkedin.common.VectorImage":{artifacts:[{width:200,fileIdentifyingUrlPathSegment:"200_200/0?e=1565827200&v=beta&t=z2nwXWXCQQTyAwwG_xUkAkKlRF3VYjSR95SxKt7OEec",expiresAt:15658272e5,height:200},{width:100,fileIdentifyingUrlPathSegment:"100_100/0?e=1565827200&v=beta&t=q7XWOyAL27FTqZRZ_25n1c-tU_t7BCaI0tcMBP9_GD4",expiresAt:15658272e5,height:100},{width:400,fileIdentifyingUrlPathSegment:"400_400/0?e=1565827200&v=beta&t=e9xR3WUjlRsEi47tx007iRLvmyzGWpp4nApD4ZtBeFg",expiresAt:15658272e5,height:400}],rootUrl:"https://media.licdn.com/dms/image/C4D0BAQFa2F6Gbne0bQ/company-logo_"}},schoolName:"Cefet/RJ - Centro Federal de Educação Tecnológica Celso Suckow da Fonseca",trackingId:"sMMHFi0wRbaG2D8b8jnPWA=="},timePeriod:{endDate:{year:2008},startDate:{year:2005}},fieldOfStudyUrn:"urn:li:fs_fieldOfStudy:100173",degreeName:"Bachelor of Technology - BTech",schoolName:"Cefet/RJ - Centro Federal de Educação Tecnológica Celso Suckow da Fonseca",fieldOfStudy:"Computer and Information Sciences and Support Services",degreeUrn:"urn:li:fs_degree:250",schoolUrn:"urn:li:fs_miniSchool:3153509"}],paging:{total:3,start:0,count:3,links:[]}},organizationView:{entityUrn:"urn:li:fs_organizationView:ACoAAB4iCBcBjPvsAX_8OYikYWQ26WxcHIMhKFE",profileId:"ACoAAB4iCBcBjPvsAX_8OYikYWQ26WxcHIMhKFE",elements:[],paging:{total:0,start:0,count:10,links:[]}},projectView:{entityUrn:"urn:li:fs_projectView:ACoAAB4iCBcBjPvsAX_8OYikYWQ26WxcHIMhKFE",profileId:"ACoAAB4iCBcBjPvsAX_8OYikYWQ26WxcHIMhKFE",elements:[],paging:{total:0,start:0,count:10,links:[]}},positionView:{entityUrn:"urn:li:fs_positionView:ACoAAB4iCBcBjPvsAX_8OYikYWQ26WxcHIMhKFE",profileId:"ACoAAB4iCBcBjPvsAX_8OYikYWQ26WxcHIMhKFE",elements:[{locationName:"Toronto, Ontario, Canada",entityUrn:"urn:li:fs_position:(ACoAAB4iCBcBjPvsAX_8OYikYWQ26WxcHIMhKFE,1402330267)",geoLocationName:"Toronto, Ontario, Canada",companyName:"CoinSmart",timePeriod:{startDate:{month:12,year:2018}},company:{employeeCountRange:{start:11,end:50},miniCompany:{objectUrn:"urn:li:company:18708461",entityUrn:"urn:li:fs_miniCompany:18708461",name:"CoinSmart",showcase:!1,active:!0,logo:{"com.linkedin.common.VectorImage":{artifacts:[{width:200,fileIdentifyingUrlPathSegment:"200_200/0?e=1565827200&v=beta&t=afHiYJoQyx5EUOIO-6Ye0uEQXedKITUQx_rwpda-KGM",expiresAt:15658272e5,height:200},{width:100,fileIdentifyingUrlPathSegment:"100_100/0?e=1565827200&v=beta&t=YtYdZ_8pCwD6PbCFCuO-pROmXMvwSTJnQAz4Z9vjIVg",expiresAt:15658272e5,height:100},{width:400,fileIdentifyingUrlPathSegment:"400_400/0?e=1565827200&v=beta&t=GyoOj12zGhB-uo6ZcCWWI0vsA_MvNj83q-26IGK2kFI",expiresAt:15658272e5,height:400}],rootUrl:"https://media.licdn.com/dms/image/C560BAQGtC6nuKn7I9w/company-logo_"}},trackingId:"p6zEFbPbT4+DXEcxCrBYdQ=="},industries:["Financial Services"]},title:"Senior React Engineer (Remote)",companyUrn:"urn:li:fs_miniCompany:18708461"},{entityUrn:"urn:li:fs_position:(ACoAAB4iCBcBjPvsAX_8OYikYWQ26WxcHIMhKFE,1337659505)",companyName:"Mooven Consulting",timePeriod:{endDate:{month:3,year:2019},startDate:{month:11,year:2018}},company:{employeeCountRange:{start:51,end:200},miniCompany:{objectUrn:"urn:li:company:10812002",entityUrn:"urn:li:fs_miniCompany:10812002",name:"Mooven Consulting",showcase:!1,active:!0,logo:{"com.linkedin.common.VectorImage":{artifacts:[{width:200,fileIdentifyingUrlPathSegment:"200_200/0?e=1565827200&v=beta&t=NFyFfmanqPsJ-6YuGaz8e3yh1Q6A1ZFzJhAMyA5nDy8",expiresAt:15658272e5,height:200},{width:100,fileIdentifyingUrlPathSegment:"100_100/0?e=1565827200&v=beta&t=xj8ofRphk4zxaO5Llq1JesnW1uUn12i6r-W4iYE3Hrk",expiresAt:15658272e5,height:100},{width:400,fileIdentifyingUrlPathSegment:"400_400/0?e=1565827200&v=beta&t=JMOzMgG5hDhXoRnuzoL9FGeNaa-ANOHrtiAay5UibrI",expiresAt:15658272e5,height:400}],rootUrl:"https://media.licdn.com/dms/image/C4D0BAQFNJlZ62w2qqA/company-logo_"}},trackingId:"3xAs1yx0TeeOqHTo8xxRXw=="},industries:["Information Technology and Services"]},title:"Head of Development",companyUrn:"urn:li:fs_miniCompany:10812002"},{entityUrn:"urn:li:fs_position:(ACoAAB4iCBcBjPvsAX_8OYikYWQ26WxcHIMhKFE,1455732675)",companyName:"Mooven Consulting",timePeriod:{endDate:{month:11,year:2018},startDate:{month:7,year:2018}},company:{employeeCountRange:{start:51,end:200},miniCompany:{objectUrn:"urn:li:company:10812002",entityUrn:"urn:li:fs_miniCompany:10812002",name:"Mooven Consulting",showcase:!1,active:!0,logo:{"com.linkedin.common.VectorImage":{artifacts:[{width:200,fileIdentifyingUrlPathSegment:"200_200/0?e=1565827200&v=beta&t=NFyFfmanqPsJ-6YuGaz8e3yh1Q6A1ZFzJhAMyA5nDy8",expiresAt:15658272e5,height:200},{width:100,fileIdentifyingUrlPathSegment:"100_100/0?e=1565827200&v=beta&t=xj8ofRphk4zxaO5Llq1JesnW1uUn12i6r-W4iYE3Hrk",expiresAt:15658272e5,height:100},{width:400,fileIdentifyingUrlPathSegment:"400_400/0?e=1565827200&v=beta&t=JMOzMgG5hDhXoRnuzoL9FGeNaa-ANOHrtiAay5UibrI",expiresAt:15658272e5,height:400}],rootUrl:"https://media.licdn.com/dms/image/C4D0BAQFNJlZ62w2qqA/company-logo_"}},trackingId:"E138ay85Shud3BOoLukU3A=="},industries:["Information Technology and Services"]},title:"Lead Frontend Developer",companyUrn:"urn:li:fs_miniCompany:10812002"},{entityUrn:"urn:li:fs_position:(ACoAAB4iCBcBjPvsAX_8OYikYWQ26WxcHIMhKFE,1429210082)",companyName:"Oi S.A",timePeriod:{endDate:{month:7,year:2018},startDate:{month:12,year:2017}},company:{employeeCountRange:{start:10001},miniCompany:{objectUrn:"urn:li:company:3721",entityUrn:"urn:li:fs_miniCompany:3721",name:"Oi S.A",showcase:!1,active:!0,logo:{"com.linkedin.common.VectorImage":{artifacts:[{width:200,fileIdentifyingUrlPathSegment:"200_200/0?e=1565827200&v=beta&t=6nF_EeZ46wyCWOdgKW0mXFSiyyJvp4gGZ7RA_15-Kgo",expiresAt:15658272e5,height:200},{width:100,fileIdentifyingUrlPathSegment:"100_100/0?e=1565827200&v=beta&t=wja-9kM-YoDgGndDgJdVRacE_PvbXZh6zzuXslw2aLw",expiresAt:15658272e5,height:100},{width:400,fileIdentifyingUrlPathSegment:"400_400/0?e=1565827200&v=beta&t=4cZqHesLSktIuiyCOQ335spoRVFFM0gGqPmoDmHzpN8",expiresAt:15658272e5,height:400}],rootUrl:"https://media.licdn.com/dms/image/C4E0BAQGhcYbBOJEqqQ/company-logo_"}},trackingId:"11P5VgLESH+Pt7VRD0pt2w=="},industries:["Telecommunications"]},title:"FrontEnd Tech Lead",companyUrn:"urn:li:fs_miniCompany:3721"},{entityUrn:"urn:li:fs_position:(ACoAAB4iCBcBjPvsAX_8OYikYWQ26WxcHIMhKFE,1264534948)",companyName:"Oi S.A",timePeriod:{endDate:{month:12,year:2017},startDate:{month:10,year:2016}},company:{employeeCountRange:{start:10001},miniCompany:{objectUrn:"urn:li:company:3721",entityUrn:"urn:li:fs_miniCompany:3721",name:"Oi S.A",showcase:!1,active:!0,logo:{"com.linkedin.common.VectorImage":{artifacts:[{width:200,fileIdentifyingUrlPathSegment:"200_200/0?e=1565827200&v=beta&t=6nF_EeZ46wyCWOdgKW0mXFSiyyJvp4gGZ7RA_15-Kgo",expiresAt:15658272e5,height:200},{width:100,fileIdentifyingUrlPathSegment:"100_100/0?e=1565827200&v=beta&t=wja-9kM-YoDgGndDgJdVRacE_PvbXZh6zzuXslw2aLw",expiresAt:15658272e5,height:100},{width:400,fileIdentifyingUrlPathSegment:"400_400/0?e=1565827200&v=beta&t=4cZqHesLSktIuiyCOQ335spoRVFFM0gGqPmoDmHzpN8",expiresAt:15658272e5,height:400}],rootUrl:"https://media.licdn.com/dms/image/C4E0BAQGhcYbBOJEqqQ/company-logo_"}},trackingId:"A2I+PjmqTgaonAtrWcSFqA=="},industries:["Telecommunications"]},title:"Senior Frontend Developer",companyUrn:"urn:li:fs_miniCompany:3721"}],paging:{total:12,start:0,count:5,links:[]}},profile:{summary:"Learning and deploying something new everyday!",industryName:"Information Technology & Services",lastName:"Duarte",supportedLocales:[{country:"US",language:"en"},{country:"BR",language:"pt"}],locationName:"São Paulo, São Paulo, Brazil",student:!1,versionTag:"2104625384",elt:!1,profilePictureOriginalImage:{"com.linkedin.common.VectorImage":{artifacts:[{width:675,fileIdentifyingUrlPathSegment:"900_1200/0?m=AQLCXQjSxIROcgAAAWrB3CoGpMTaH1H9KSumikj8NGx2sQnc8EkX3eyZWA&e=1558116992&v=beta&t=dsume-EOutbZBEbrZoYrq613hWiPh0EWPhqWUKlDoXw",expiresAt:1558116992e3,height:900},{width:338,fileIdentifyingUrlPathSegment:"450_600/0?m=AQJ0RjbDRfVPjQAAAWrB3CoGoYp0iJkTaYScj6CasVZA2HbWE9PSB5t6Cw&e=1558116992&v=beta&t=d947FAurG-UEt9V_ma_yjm1lV9DtzIFdezRC_g2I7Jw",expiresAt:1558116992e3,height:450}],rootUrl:"https://www.linkedin.com/dms/C4D04AQEybu2XnRMj_g/profile-originalphoto-shrink_"}},birthDate:{month:11,day:24},industryUrn:"urn:li:fs_industry:96",defaultLocale:{country:"US",language:"en"},firstName:"Clayton",profilePicture:{displayImage:"urn:li:digitalmediaAsset:C4D03AQH22i1rz9Av-w",originalImage:"urn:li:digitalmediaAsset:C4D04AQEybu2XnRMj_g",photoFilterEditInfo:{bottomLeft:{x:0,y:.75},saturation:0,brightness:0,vignette:0,photoFilterType:"ORIGINAL",bottomRight:{x:1,y:.75},topLeft:{x:0,y:0},contrast:0,topRight:{x:1,y:0}}},showEducationOnProfileTopCard:!0,entityUrn:"urn:li:fs_profile:ACoAAB4iCBcBjPvsAX_8OYikYWQ26WxcHIMhKFE",location:{basicLocation:{countryCode:"br",postalCode:"01001"},preferredGeoPlace:"urn:li:fs_city:(br,23-770)"},miniProfile:{firstName:"Clayton",lastName:"Duarte",occupation:"Senior React Engineer",objectUrn:"urn:li:member:505546775",entityUrn:"urn:li:fs_miniProfile:ACoAAB4iCBcBjPvsAX_8OYikYWQ26WxcHIMhKFE",publicIdentifier:"clayton-duarte",picture:{"com.linkedin.common.VectorImage":{artifacts:[{width:100,fileIdentifyingUrlPathSegment:"100_100/0?e=1563408000&v=beta&t=zuf3CMvInq8mYepcFJlOsjBgOdPTV3x0qFV-EtTQB3Y",expiresAt:1563408e6,height:100},{width:200,fileIdentifyingUrlPathSegment:"200_200/0?e=1563408000&v=beta&t=bj3lQ4tO-IHSX-WPHrPUDc1kujJ_zA_JEu_4XrnuXOU",expiresAt:1563408e6,height:200},{width:400,fileIdentifyingUrlPathSegment:"400_400/0?e=1563408000&v=beta&t=NlVAU61YlHVTRhqSAumJEJBFTEx7EXjHy-97WbotX0s",expiresAt:1563408e6,height:400},{width:800,fileIdentifyingUrlPathSegment:"800_800/0?e=1563408000&v=beta&t=AIZ-VuJWjSFjYK8AOHw76EW0K4Dh-n8Ljh91pNdZXc4",expiresAt:1563408e6,height:800}],rootUrl:"https://media.licdn.com/dms/image/C4D03AQH22i1rz9Av-w/profile-displayphoto-shrink_"}},trackingId:"L8RX4nhGStKhijHLfHTatQ=="},headline:"Senior React Engineer"},languageView:{entityUrn:"urn:li:fs_languageView:ACoAAB4iCBcBjPvsAX_8OYikYWQ26WxcHIMhKFE",profileId:"ACoAAB4iCBcBjPvsAX_8OYikYWQ26WxcHIMhKFE",elements:[{entityUrn:"urn:li:fs_language:(ACoAAB4iCBcBjPvsAX_8OYikYWQ26WxcHIMhKFE,23124322)",name:"English",proficiency:"FULL_PROFESSIONAL"},{entityUrn:"urn:li:fs_language:(ACoAAB4iCBcBjPvsAX_8OYikYWQ26WxcHIMhKFE,23145070)",name:"Japanese",proficiency:"ELEMENTARY"},{entityUrn:"urn:li:fs_language:(ACoAAB4iCBcBjPvsAX_8OYikYWQ26WxcHIMhKFE,23135832)",name:"Portuguese",proficiency:"NATIVE_OR_BILINGUAL"}],paging:{total:3,start:0,count:10,links:[]}},certificationView:{entityUrn:"urn:li:fs_certificationView:ACoAAB4iCBcBjPvsAX_8OYikYWQ26WxcHIMhKFE",profileId:"ACoAAB4iCBcBjPvsAX_8OYikYWQ26WxcHIMhKFE",elements:[],paging:{total:0,start:0,count:10,links:[]}},testScoreView:{entityUrn:"urn:li:fs_testScoreView:ACoAAB4iCBcBjPvsAX_8OYikYWQ26WxcHIMhKFE",profileId:"ACoAAB4iCBcBjPvsAX_8OYikYWQ26WxcHIMhKFE",elements:[],paging:{total:0,start:0,count:10,links:[]}},volunteerCauseView:{entityUrn:"urn:li:fs_volunteerCauseView:ACoAAB4iCBcBjPvsAX_8OYikYWQ26WxcHIMhKFE",profileId:"ACoAAB4iCBcBjPvsAX_8OYikYWQ26WxcHIMhKFE",elements:[],paging:{total:0,start:0,count:0,links:[]}},entityUrn:"urn:li:fs_profileView:ACoAAB4iCBcBjPvsAX_8OYikYWQ26WxcHIMhKFE",courseView:{entityUrn:"urn:li:fs_courseView:ACoAAB4iCBcBjPvsAX_8OYikYWQ26WxcHIMhKFE",profileId:"ACoAAB4iCBcBjPvsAX_8OYikYWQ26WxcHIMhKFE",elements:[{number:"",entityUrn:"urn:li:fs_course:(ACoAAB4iCBcBjPvsAX_8OYikYWQ26WxcHIMhKFE,23084304)",name:"Arquiteto React | Udacity"},{number:"",entityUrn:"urn:li:fs_course:(ACoAAB4iCBcBjPvsAX_8OYikYWQ26WxcHIMhKFE,977871352)",name:"FullStack Web Developer | Udacity"}],paging:{total:2,start:0,count:10,links:[]}},honorView:{entityUrn:"urn:li:fs_honorView:ACoAAB4iCBcBjPvsAX_8OYikYWQ26WxcHIMhKFE",profileId:"ACoAAB4iCBcBjPvsAX_8OYikYWQ26WxcHIMhKFE",elements:[],paging:{total:0,start:0,count:10,links:[]}},skillView:{entityUrn:"urn:li:fs_skillView:ACoAAB4iCBcBjPvsAX_8OYikYWQ26WxcHIMhKFE",profileId:"ACoAAB4iCBcBjPvsAX_8OYikYWQ26WxcHIMhKFE",elements:[{entityUrn:"urn:li:fs_skill:(ACoAAB4iCBcBjPvsAX_8OYikYWQ26WxcHIMhKFE,20)",name:"React.js"},{entityUrn:"urn:li:fs_skill:(ACoAAB4iCBcBjPvsAX_8OYikYWQ26WxcHIMhKFE,6)",name:"React Native"},{entityUrn:"urn:li:fs_skill:(ACoAAB4iCBcBjPvsAX_8OYikYWQ26WxcHIMhKFE,25)",name:"Node.js"},{entityUrn:"urn:li:fs_skill:(ACoAAB4iCBcBjPvsAX_8OYikYWQ26WxcHIMhKFE,37)",name:"Scrum"}],paging:{total:39,start:0,count:4,links:[]}},volunteerExperienceView:{entityUrn:"urn:li:fs_volunteerExperienceView:ACoAAB4iCBcBjPvsAX_8OYikYWQ26WxcHIMhKFE",profileId:"ACoAAB4iCBcBjPvsAX_8OYikYWQ26WxcHIMhKFE",elements:[{role:"Mentor",entityUrn:"urn:li:fs_volunteerExperience:(ACoAAB4iCBcBjPvsAX_8OYikYWQ26WxcHIMhKFE,497420832)",companyName:"Codenation",timePeriod:{startDate:{month:5,year:2019}},cause:"EDUCATION",company:{miniCompany:{objectUrn:"urn:li:company:16159752",entityUrn:"urn:li:fs_miniCompany:16159752",name:"Codenation",showcase:!1,active:!0,logo:{"com.linkedin.common.VectorImage":{artifacts:[{width:200,fileIdentifyingUrlPathSegment:"200_200/0?e=1565827200&v=beta&t=9Tg5wzk66XCAm9hyEzPsd-aprSJUC0C94GSzyKtUOUk",expiresAt:15658272e5,height:200},{width:100,fileIdentifyingUrlPathSegment:"100_100/0?e=1565827200&v=beta&t=McHG88XfmwTGFL42yRXN-kxfGxyYFTizVvaPEbiAeXs",expiresAt:15658272e5,height:100},{width:400,fileIdentifyingUrlPathSegment:"400_400/0?e=1565827200&v=beta&t=PaFfxlVk9844ZXRIaDE6gHWCQVdTMkJFl_POFpTpqbM",expiresAt:15658272e5,height:400}],rootUrl:"https://media.licdn.com/dms/image/C4E0BAQGyHdNZUQyGTQ/company-logo_"}},trackingId:"qshfVk/yRt+eU+1r237uWA=="}},companyUrn:"urn:li:fs_miniCompany:16159752"}],paging:{total:1,start:0,count:3,links:[]}},primaryLocale:{country:"US",language:"en"},publicationView:{entityUrn:"urn:li:fs_publicationView:ACoAAB4iCBcBjPvsAX_8OYikYWQ26WxcHIMhKFE",profileId:"ACoAAB4iCBcBjPvsAX_8OYikYWQ26WxcHIMhKFE",elements:[],paging:{total:0,start:0,count:10,links:[]}}}}},[["GcxT","5d41","9da1"]]]);