(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[8],{609:function(e,a,t){"use strict";var n=t(0),r=t.n(n),c=t(602),l=t(603),i=t(605),o=t(630),s=t(606),u=t(216);a.a=function(e){var a=e.header,t=e.children,n=e.alertModel;return r.a.createElement("div",{className:"animated fadeIn"},r.a.createElement(c.a,null,r.a.createElement(l.a,{xs:"12",sm:"12"},r.a.createElement(i.a,null,r.a.createElement(o.a,null,a),r.a.createElement(s.a,null,r.a.createElement(u.a,{alertModel:n}),t)))))}},614:function(e,a,t){"use strict";function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}t.d(a,"a",(function(){return c}))},617:function(e,a,t){"use strict";var n=t(0),r=t.n(n),c=t(602),l=t(603),i=t(608);a.a=function(e){var a=e.isSubmitting;return r.a.createElement(c.a,null,r.a.createElement(l.a,{sm:12},r.a.createElement(i.a,{type:"submit",color:"success",className:"float-right",disabled:a},"Salvar")))}},618:function(e,a,t){"use strict";t.d(a,"b",(function(){return c})),t.d(a,"c",(function(){return l})),t.d(a,"e",(function(){return i})),t.d(a,"a",(function(){return o})),t.d(a,"d",(function(){return s}));var n=t(614),r=t(214);function c(e,a){return r.a.get("/linhas",{params:Object(n.a)(Object(n.a)({},e),{},{empresaId:a})})}function l(e){return r.a.post("/linhas",e)}function i(e,a){return r.a.put("".concat("/linhas","/").concat(e),a)}function o(e){return r.a.get("".concat("/linhas","/consulta-para-editar/").concat(e))}function s(e){var a="/linhas/"+e;return r.a.delete(a)}},623:function(e,a,t){"use strict";t.d(a,"a",(function(){return s}));var n=t(87),r=t(637),c=t(638),l=t(0),i=t.n(l),o=t(217);function s(e){var a=e.label,t=e.id,l=Object(n.a)(e,["label","id"]);return i.a.createElement(i.a.Fragment,null,i.a.createElement(r.a,null,i.a.createElement(c.a,{for:t,className:"label-color"},a),i.a.createElement(o.a,Object.assign({},l,{id:t}))))}},624:function(e,a,t){"use strict";t.d(a,"a",(function(){return u}));var n=t(86),r=t(602),c=t(603),l=t(608),i=t(217),o=t(0),s=t.n(o);function u(e){var a=e.formModel;return s.a.createElement(s.a.Fragment,null,[{id:"segunda",nome:"Segunda-Feira"},{id:"terca",nome:"Ter\xe7a-Feira"},{id:"quarta",nome:"Quarta-Feira"},{id:"quinta",nome:"Quinta-Feira"},{id:"sexta",nome:"Sexta-Feira"},{id:"sabado",nome:"S\xe1bado-Feira"},{id:"domingo",nome:"Domingo"}].map((function(e){return s.a.createElement("div",{key:e.id},s.a.createElement(r.a,{className:"mt-3"},s.a.createElement(c.a,{sm:12},s.a.createElement("h5",null,e.nome),s.a.createElement("hr",null))),s.a.createElement(m,{diaDaSemana:e,formModel:a}))})))}function m(e){var a=e.diaDaSemana,t=e.formModel[a.id];return s.a.createElement(n.b,{name:a.id},(function(e){var n=e.insert,o=e.push,u=e.remove;return 0===t.length&&o({partida:"",chegada:""}),s.a.createElement(s.a.Fragment,null,t.map((function(e,t){return s.a.createElement(r.a,{key:t,className:"mb-2"},s.a.createElement(c.a,{sm:6,key:t},s.a.createElement(r.a,null,s.a.createElement(c.a,{sm:2},s.a.createElement(l.a,{type:"button",color:"success",onClick:function(){n(t+1,{partida:"",chegada:""})}},"+")),s.a.createElement(c.a,{sm:10},s.a.createElement(i.a,{id:"".concat(a.id,".").concat(t,".partida"),placeholder:"Partida",type:"time"})))),s.a.createElement(c.a,{sm:6},s.a.createElement(r.a,null,s.a.createElement(c.a,{sm:10},s.a.createElement(i.a,{id:"".concat(a.id,".").concat(t,".chegada"),placeholder:"Chegada",type:"time",maxLength:5})),s.a.createElement(c.a,{sm:2},s.a.createElement(l.a,{type:"button",color:"danger",onClick:function(){return u(t)}},"x")))))})))}))}},630:function(e,a,t){"use strict";var n=t(3),r=t(8),c=t(0),l=t.n(c),i=t(2),o=t.n(i),s=t(13),u=t.n(s),m=t(5),d={tag:m.h,className:o.a.string,cssModule:o.a.object},f=function(e){var a=e.className,t=e.cssModule,c=e.tag,i=Object(r.a)(e,["className","cssModule","tag"]),o=Object(m.e)(u()(a,"card-header"),t);return l.a.createElement(c,Object(n.a)({},i,{className:o}))};f.propTypes=d,f.defaultProps={tag:"div"},a.a=f},637:function(e,a,t){"use strict";var n=t(3),r=t(8),c=t(0),l=t.n(c),i=t(2),o=t.n(i),s=t(13),u=t.n(s),m=t(5),d={children:o.a.node,row:o.a.bool,check:o.a.bool,inline:o.a.bool,disabled:o.a.bool,tag:m.h,className:o.a.string,cssModule:o.a.object},f=function(e){var a=e.className,t=e.cssModule,c=e.row,i=e.disabled,o=e.check,s=e.inline,d=e.tag,f=Object(r.a)(e,["className","cssModule","row","disabled","check","inline","tag"]),b=Object(m.e)(u()(a,!!c&&"row",o?"form-check":"form-group",!(!o||!s)&&"form-check-inline",!(!o||!i)&&"disabled"),t);return"fieldset"===d&&(f.disabled=i),l.a.createElement(d,Object(n.a)({},f,{className:b}))};f.propTypes=d,f.defaultProps={tag:"div"},a.a=f},638:function(e,a,t){"use strict";var n=t(3),r=t(8),c=t(0),l=t.n(c),i=t(2),o=t.n(i),s=t(13),u=t.n(s),m=t(5),d=o.a.oneOfType([o.a.number,o.a.string]),f=o.a.oneOfType([o.a.string,o.a.number,o.a.shape({size:d,order:d,offset:d})]),b={children:o.a.node,hidden:o.a.bool,check:o.a.bool,size:o.a.string,for:o.a.string,tag:m.h,className:o.a.string,cssModule:o.a.object,xs:f,sm:f,md:f,lg:f,xl:f,widths:o.a.array},h={tag:"label",widths:["xs","sm","md","lg","xl"]},p=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},g=function(e){var a=e.className,t=e.cssModule,c=e.hidden,i=e.widths,o=e.tag,s=e.check,d=e.size,f=e.for,b=Object(r.a)(e,["className","cssModule","hidden","widths","tag","check","size","for"]),h=[];i.forEach((function(a,n){var r=e[a];if(delete b[a],r||""===r){var c,l=!n;if(Object(m.c)(r)){var i,o=l?"-":"-"+a+"-";c=p(l,a,r.size),h.push(Object(m.e)(u()(((i={})[c]=r.size||""===r.size,i["order"+o+r.order]=r.order||0===r.order,i["offset"+o+r.offset]=r.offset||0===r.offset,i))),t)}else c=p(l,a,r),h.push(c)}}));var g=Object(m.e)(u()(a,!!c&&"sr-only",!!s&&"form-check-label",!!d&&"col-form-label-"+d,h,!!h.length&&"col-form-label"),t);return l.a.createElement(o,Object(n.a)({htmlFor:f},b,{className:g}))};g.propTypes=b,g.defaultProps=h,a.a=g},667:function(e,a,t){"use strict";t.r(a);var n=t(127),r=t(0),c=t.n(r),l=t(86),i=t(618),o=t(218),s=t(609),u=t(607),m=t(602),d=t(603),f=t(637),b=t(623),h=t(624),p=t(617),g=function(e){var a=e.initialValues,t=e.onSubmit,n=e.alert,r=c.a.createElement(c.a.Fragment,null,"Edita Linhas");return c.a.createElement(c.a.Fragment,null,c.a.createElement(s.a,{alertModel:n,header:r},c.a.createElement(l.c,{initialValues:a,onSubmit:t},(function(e){var a=e.handleSubmit,t=e.isSubmitting,n=e.values;return c.a.createElement(u.a,{onSubmit:a},c.a.createElement(m.a,null,c.a.createElement(d.a,{sm:12},c.a.createElement(f.a,null,c.a.createElement(b.a,{label:"Empresa",id:"empresaNome",name:"empresaNome",disabled:!0})))),c.a.createElement(E,null),c.a.createElement(h.a,{formModel:n}),c.a.createElement(p.a,{isSubmitting:t}))}))))};function E(){return c.a.createElement(m.a,null,c.a.createElement(d.a,{sm:6},c.a.createElement(f.a,null,c.a.createElement(b.a,{label:"Cidade de Partida",id:"rotaOrigemNome",disabled:!0}))),c.a.createElement(d.a,{sm:6},c.a.createElement(f.a,null,c.a.createElement(b.a,{label:"Cidade de Destino",id:"rotaDestinoNome",name:"rotaDestinoNome",disabled:!0}))))}a.default=function(e){var a=e.history,t=e.match.params.id,l=Object(r.useState)(!0),s=Object(n.a)(l,2),u=s[0],m=s[1],d=Object(r.useState)(void 0),f=Object(n.a)(d,2),b=f[0],h=f[1],p=Object(r.useState)({empresaNome:"",rotaDestinoNome:"",rotaOrigemNome:"",segunda:[{partida:"",chegada:""}],terca:[{partida:"",chegada:""}],quarta:[{partida:"",chegada:""}],quinta:[{partida:"",chegada:""}],sexta:[{partida:"",chegada:""}],sabado:[{partida:"",chegada:""}],domingo:[{partida:"",chegada:""}]}),E=Object(n.a)(p,2),O=E[0],j=E[1];Object(r.useEffect)((function(){Object(i.a)(t).then((function(e){j(e.data),m(!1)})).catch((function(e){h(Object(o.a)(e))}))}),[t]);return c.a.createElement(c.a.Fragment,null,!u&&c.a.createElement(g,{onSubmit:function(e,n){var r=n.setSubmitting;return h(void 0),Object(i.e)(t,e).then((function(){a.push("/linhas/")})).catch((function(e){h(Object(o.a)(e)),r(!1)}))},alert:b,initialValues:O}))}}}]);
//# sourceMappingURL=8.8400996b.chunk.js.map