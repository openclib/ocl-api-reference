(self.webpackChunkprocessing_website=self.webpackChunkprocessing_website||[]).push([[259],{1208:function(e,n,t){"use strict";t.d(n,{k:function(){return y},m:function(){return b}});var r={};t.r(r),t.d(r,{code:function(){return p},codeList:function(){return u},exampleList:function(){return h},image:function(){return v},item:function(){return d},parameters:function(){return f},type:function(){return g}});var a=t(7294),l=t(5302),o=t(6802),i=t(9931),s=t.n(i),c=t(1744),m=t(5716),u="ContentList-module--codeList--g9XlV",d="ContentList-module--item--16-7F",f="ContentList-module--parameters--21JNn",g="ContentList-module--type--2gnD0",h="ContentList-module--exampleList--1BHNE",p="ContentList-module--code--3Uqwo",v="ContentList-module--image--1pdXZ",E=t(3767),y=(0,a.memo)((function(e){var n=e.items,t=e.variant,o=e.nameIsHtml,i=e.descriptionIsHtml;return a.createElement("ul",{className:s()(u,r[t])},n.map((function(e,n){if(""===e.name||"object"!=typeof e)return null;var t=o?a.createElement("code",{dangerouslySetInnerHTML:{__html:e.name}}):a.createElement("code",null,e.name);e.anchor&&(t=a.createElement(l.UE,{to:e.anchor},t));var r=null;e.type&&Array.isArray(e.type)&&e.type.length>0&&(r=a.createElement("code",{className:g},"(",e.type.join(", "),")"));var s=i?a.createElement("span",{dangerouslySetInnerHTML:{__html:(0,c.Xk)(e.description)}}):a.createElement("span",null,(0,c.Xk)(e.description));return a.createElement("li",{key:"ril-"+e.name+"-"+n,className:d},t,r,s)})))})),b=(0,a.memo)((function(e){var n=e.examples;return a.createElement("ul",{className:h},n.map((function(e,n){return a.createElement("li",{key:"ex"+n,className:s()(E.eC,d)},a.createElement("div",{className:s()(E.T5,p)},a.createElement(m.Z,{text:e.code}),a.createElement("pre",null,a.createElement("code",{dangerouslySetInnerHTML:{__html:(0,c.Xv)(e.code)}}))),e.image&&a.createElement("div",{className:s()(E.T5,v)},a.createElement(o.G,{image:e.image.childImageSharp.gatsbyImageData,alt:"Image output for example "+(n+1)})))})))}))},8213:function(e,n,t){"use strict";t.d(n,{Z:function(){return l}});var r=t(7294),a=function(){return r.createElement("div",{className:"License-module--root--M5BGc"},r.createElement("a",{rel:"license",href:"http://creativecommons.org/licenses/by-nc-sa/4.0/"},r.createElement("img",{alt:"Creative Commons License",src:"https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png"})),r.createElement("p",null,"This work is licensed under a ",r.createElement("a",{rel:"license",href:"http://creativecommons.org/licenses/by-nc-sa/4.0/"},"Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License"),"."))},l=(0,r.memo)(a)},5469:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});var r=t(7294),a=t(9931),l=t.n(a),o=t(3767),i=function(e){var n,t=e.title,a=e.children,i=e.short,s=e.columns,c=void 0===s||s;return r.createElement("div",{className:l()(o.eC,"Section-module--root--2TIqh",(n={},n["Section-module--columns--1nCvr"]=c,n["Section-module--short--Uxs5A"]=i,n))},r.createElement("h4",{className:l()(o.T5,"Section-module--title--2_CcI")},t),r.createElement("div",{className:l()(o.T5,"Section-module--content--7joiP")},a))},s=(0,r.memo)(i)},7356:function(e,n,t){"use strict";t.d(n,{V9:function(){return i},Do:function(){return s},P4:function(){return c},TP:function(){return m},NI:function(){return u}});var r=t(7294),a=t(6735),l=t(1744),o=t(2607),i=function(e,n){return(0,r.useMemo)((function(){for(var t=[],r=0;r<e.length;r++){var a,i=e[r];if("processing"!==n||"method"!==i.childJson.type&&"field"!==i.childJson.type)t.push(Object.assign({},i.childJson,{slug:i.name,path:(0,o.referencePath)(i.name,n),category:(0,l.Qs)(i.childJson.category),subcategory:(0,l.Qs)(i.childJson.subcategory),search:i.childJson.name+" "+(null!==(a=i.childJson.brief)&&void 0!==a?a:"")}))}return t}),[e,n])},s=function(e,n,t,a){return(0,r.useMemo)((function(){if(!e||0===e.length)return null;var r=function(e){var r={name:t?(0,o.pathToName)(e):e};return a&&(r.anchor=(0,o.referencePath)(e,n)),r},l=function(e){var r,l,i={name:t?(0,o.pathToName)(e.name):e.name,description:null!==(r=e.description)&&void 0!==r?r:e.desc};(e.type&&(i.type=e.type),a)&&(i.anchor=(0,o.referencePath)(null!==(l=e.anchor)&&void 0!==l?l:e.name,n));return i};if("string"==typeof e)return[r(e)];for(var i=[],s=0;s<e.length;s++)"string"==typeof e[s]&&i.push(r(e[s])),"object"==typeof e[s]&&null!==e[s]&&i.push(l(e[s]));return 0===i.length?null:i}),[e,n,t,a])},c=function(e,n){return(0,r.useMemo)((function(){if(!e||0===e.length)return null;for(var t=[],r=0;r<e.length;r++){var a={code:e[r].node.internal.content};if(n)for(var l=0;l<n.length;l++)if(n[l].node.name===e[r].node.name){a.image=n[l].node;break}t.push(a)}return t}),[e,n])},m=function(e,n){return(0,r.useMemo)((function(){if(!e||0===e.length)return null;for(var t=[],r=0;r<e.length;r++){var a={name:e[r].split(/(?=[A-Z])/).join(" "),path:(0,o.examplePath)(e[r])};if(n)for(var l=0;l<n.nodes.length;l++)if(n.nodes[l].name===e[r]){a.image=n.nodes[l];break}t.push(a)}return t}),[e,n])},u=function(e,n,t,i){var s=(0,a.Z)();return(0,r.useMemo)((function(){var r="processing"===e,a=r?{slug:"/reference",label:s.formatMessage({id:"reference"})}:{slug:"/libraries",label:s.formatMessage({id:"libraries"})},c=["Documentation",a];return r?(n&&c.push({slug:a.slug+"#"+(0,l.lV)(n),label:n}),t&&c.push({slug:a.slug+"#"+(0,l.lV)(n,t),label:t})):(c.push({slug:a.slug+"#core",label:s.formatMessage({id:"core"})}),c.push({slug:(0,o.referencePath)("index",e),label:e})),i&&c.push({slug:(0,o.referencePath)(i,e),label:i}),c}),[s,e,n,t,i])}},9955:function(e,n,t){"use strict";t.r(n);var r=t(7294),a=t(5444),l=t(6802),o=t(6735),i=t(2832),s=t(8093),c=t(855),m=t(4418),u=t(5469),d=t(8213),f=t(1208),g=t(7883),h=t(1087),p=t(1744),v=t(9334),E=t(7356),y=t(2607),b=t(3767);n.default=function(e){var n,t,M,C,N,Z,k=e.data,L=e.pageContext,x=L.name,T=L.libraryName,I="processing"===T,J=null==k||null===(n=k.parent)||void 0===n?void 0:n.childJson,S=null==k||null===(t=k.json)||void 0===t?void 0:t.childJson,P=(0,v.Ap)("reference"),_=P[0],w=P[1],D=(0,o.Z)();(0,v.Dz)();var j=(0,E.V9)(k.items.nodes,T),A=(0,E.P4)(k.pdes.edges,k.images.edges),H=(0,v.ZT)(j),U=(0,E.Do)(null==S?void 0:S.parameters,T),X=(0,E.Do)(null==S?void 0:S.syntax,T),V=(0,E.Do)(null==S?void 0:S.related,T,!0,!0),B=(0,E.TP)(L.inUseExamples,k.inUseImages),O=(0,E.NI)(T,J?J.category:null==S?void 0:S.category,J?J.subcategory:null==S?void 0:S.subcategory,null==S?void 0:S.classanchor),q=(k.en.childJson.classanchor?(null!==(M=null==S?void 0:S.classanchor)&&void 0!==M?M:k.en.childJson.classanchor)+"::"+(null!==(C=null==S?void 0:S.name)&&void 0!==C?C:k.en.childJson.name):null!==(N=null==S?void 0:S.name)&&void 0!==N?N:k.en.childJson.name)+" / "+(I?D.formatMessage({id:"reference"}):D.formatMessage({id:"libraries"}));return r.createElement(s.Z,{withSidebar:!0,withBreadcrumbs:!0},r.createElement(i.Z,{title:q,description:null==S?void 0:S.description,img:(0,l.d)(null===(Z=k.images.edges[0])||void 0===Z?void 0:Z.node)}),r.createElement("div",{className:b.eC},r.createElement(m.vS,{title:D.formatMessage({id:"reference"}),tree:H,setShow:w,show:_}),S?r.createElement(c.Z,{sidebarOpen:_},r.createElement(h.Z,{trail:O}),r.createElement(u.Z,{title:D.formatMessage({id:"name"})},r.createElement("h3",null,S.name)),r.createElement(u.Z,{title:D.formatMessage({id:"description"})},r.createElement("p",{dangerouslySetInnerHTML:{__html:(0,p.Xk)(S.description)}})),A&&r.createElement(u.Z,{columns:!1,title:D.formatMessage({id:"examples"})},r.createElement(f.m,{examples:A})),X&&r.createElement(u.Z,{title:D.formatMessage({id:"syntax"})},r.createElement(f.k,{items:X})),U&&r.createElement(u.Z,{title:D.formatMessage({id:"parameters"})},r.createElement(f.k,{variant:"parameters",items:U})),V&&r.createElement(u.Z,{title:D.formatMessage({id:"related"})},r.createElement(f.k,{items:V})),B&&r.createElement(u.Z,{title:D.formatMessage({id:"inUse"})},r.createElement("ul",{className:b.eC},B.slice(0,6).map((function(e,n){return r.createElement(g.R,{node:e,key:"e-"+e.name,variant:"related"})})))),r.createElement(d.Z,null)):r.createElement(c.Z,{sidebarOpen:_},D.formatMessage({id:"notTranslated"}),r.createElement(a.Link,{to:(0,y.referencePath)(x,T)}," ",D.formatMessage({id:"englishPage"})))))}}}]);
//# sourceMappingURL=component---src-templates-reference-field-js-46d0fc4785a87bdd91b5.js.map