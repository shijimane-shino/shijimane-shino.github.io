_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[18],{"/a9y":function(e,t,a){"use strict";var n=a("lwsE"),i=a("W8MJ"),r=a("7W2i"),c=a("a1gu"),o=a("Nsbk");function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=o(e);if(t){var i=o(this).constructor;a=Reflect.construct(n,arguments,i)}else a=n.apply(this,arguments);return c(this,a)}}var s=a("TqRt");t.__esModule=!0,t.default=void 0;var d=s(a("q1tI")),u=s(a("8Kt/")),p={400:"Bad Request",404:"This page could not be found",405:"Method Not Allowed",500:"Internal Server Error"};function b(e){var t=e.res,a=e.err;return{statusCode:t&&t.statusCode?t.statusCode:a?a.statusCode:404}}var m=function(e){r(a,e);var t=l(a);function a(){return n(this,a),t.apply(this,arguments)}return i(a,[{key:"render",value:function(){var e=this.props.statusCode,t=this.props.title||p[e]||"An unexpected error has occurred";return d.default.createElement("div",{style:h.error},d.default.createElement(u.default,null,d.default.createElement("title",null,e,": ",t)),d.default.createElement("div",null,d.default.createElement("style",{dangerouslySetInnerHTML:{__html:"body { margin: 0 }"}}),e?d.default.createElement("h1",{style:h.h1},e):null,d.default.createElement("div",{style:h.desc},d.default.createElement("h2",{style:h.h2},t,"."))))}}]),a}(d.default.Component);t.default=m,m.displayName="ErrorPage",m.getInitialProps=b,m.origGetInitialProps=b;var h={error:{color:"#000",background:"#fff",fontFamily:'-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{display:"inline-block",textAlign:"left",lineHeight:"49px",height:"49px",verticalAlign:"middle"},h1:{display:"inline-block",borderRight:"1px solid rgba(0, 0, 0,.3)",margin:0,marginRight:"20px",padding:"10px 23px 10px 0",fontSize:"24px",fontWeight:500,verticalAlign:"top"},h2:{fontSize:"14px",fontWeight:"normal",lineHeight:"inherit",margin:0,padding:0}}},QetY:function(e,t,a){"use strict";var n=a("f0Zs"),i=a("YZDg"),r=a("Og4/"),c=a.n(r),o=a("J2iB"),l=a.n(o),s=a("85CM"),d=a("iuhU"),u=(a("17x9"),a("q1tI")),p=a.n(u),b=a("H+2d"),m=a("ZeOK"),h=a("ICNK"),f=a("Y53p"),v=a("MZgk"),g=a("D1pA"),j=a("MqQV");function O(e){var t=e.children,a=e.className,i=e.content,r=e.hidden,c=e.visible,o=Object(d.a)(Object(m.a)(c,"visible"),Object(m.a)(r,"hidden"),"content",a),l=Object(h.a)(O,e),s=Object(f.a)(O,e);return p.a.createElement(s,Object(n.a)({},l,{className:o}),b.a.isNil(t)?i:t)}O.handledProps=["as","children","className","content","hidden","visible"],O.propTypes={};var y=O,x=a("3WF5"),N=a.n(x);function E(e){var t=e.attached,a=e.basic,i=e.buttons,r=e.children,c=e.className,o=e.color,s=e.compact,u=e.content,v=e.floated,g=e.fluid,j=e.icon,O=e.inverted,y=e.labeled,x=e.negative,w=e.positive,k=e.primary,C=e.secondary,I=e.size,R=e.toggle,P=e.vertical,T=e.widths,z=Object(d.a)("ui",o,I,Object(m.a)(a,"basic"),Object(m.a)(s,"compact"),Object(m.a)(g,"fluid"),Object(m.a)(j,"icon"),Object(m.a)(O,"inverted"),Object(m.a)(y,"labeled"),Object(m.a)(x,"negative"),Object(m.a)(w,"positive"),Object(m.a)(k,"primary"),Object(m.a)(C,"secondary"),Object(m.a)(R,"toggle"),Object(m.a)(P,"vertical"),Object(m.b)(t,"attached"),Object(m.e)(v,"floated"),Object(m.g)(T),"buttons",c),A=Object(h.a)(E,e),M=Object(f.a)(E,e);return l()(i)?p.a.createElement(M,Object(n.a)({},A,{className:z}),b.a.isNil(r)?u:r):p.a.createElement(M,Object(n.a)({},A,{className:z}),N()(i,(function(e){return _.create(e)})))}E.handledProps=["as","attached","basic","buttons","children","className","color","compact","content","floated","fluid","icon","inverted","labeled","negative","positive","primary","secondary","size","toggle","vertical","widths"],E.propTypes={};var w=E;function k(e){var t=e.className,a=e.text,i=Object(d.a)("or",t),r=Object(h.a)(k,e),c=Object(f.a)(k,e);return p.a.createElement(c,Object(n.a)({},r,{className:i,"data-text":a}))}k.handledProps=["as","className","text"],k.propTypes={};var C=k,I=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(t=e.call.apply(e,[this].concat(n))||this).ref=Object(u.createRef)(),t.computeElementType=function(){var e=t.props,a=e.attached,n=e.label;if(!l()(a)||!l()(n))return"div"},t.computeTabIndex=function(e){var a=t.props,n=a.disabled,i=a.tabIndex;return l()(i)?n?-1:"div"===e?0:void 0:i},t.focus=function(){return c()(t.ref.current,"focus")},t.handleClick=function(e){t.props.disabled?e.preventDefault():c()(t.props,"onClick",e,t.props)},t.hasIconClass=function(){var e=t.props,a=e.labelPosition,n=e.children,i=e.content,r=e.icon;return!0===r||r&&(a||b.a.isNil(n)&&l()(i))},t}Object(i.a)(t,e);var a=t.prototype;return a.computeButtonAriaRole=function(e){var t=this.props.role;return l()(t)?"button"!==e?"button":void 0:t},a.render=function(){var e=this.props,a=e.active,i=e.animated,r=e.attached,c=e.basic,o=e.children,u=e.circular,v=e.className,O=e.color,y=e.compact,x=e.content,N=e.disabled,E=e.floated,w=e.fluid,k=e.icon,C=e.inverted,I=e.label,_=e.labelPosition,R=e.loading,P=e.negative,T=e.positive,z=e.primary,A=e.secondary,M=e.size,S=e.toggle,F=Object(d.a)(O,M,Object(m.a)(a,"active"),Object(m.a)(c,"basic"),Object(m.a)(u,"circular"),Object(m.a)(y,"compact"),Object(m.a)(w,"fluid"),Object(m.a)(this.hasIconClass(),"icon"),Object(m.a)(C,"inverted"),Object(m.a)(R,"loading"),Object(m.a)(P,"negative"),Object(m.a)(T,"positive"),Object(m.a)(z,"primary"),Object(m.a)(A,"secondary"),Object(m.a)(S,"toggle"),Object(m.b)(i,"animated"),Object(m.b)(r,"attached")),G=Object(d.a)(Object(m.b)(_||!!I,"labeled")),H=Object(d.a)(Object(m.a)(N,"disabled"),Object(m.e)(E,"floated")),B=Object(h.a)(t,this.props),D=Object(f.a)(t,this.props,this.computeElementType),q=this.computeTabIndex(D);if(!l()(I)){var K=Object(d.a)("ui",F,"button",v),U=Object(d.a)("ui",G,"button",v,H),W=j.a.create(I,{defaultProps:{basic:!0,pointing:"left"===_?"right":"left"},autoGenerateKey:!1});return p.a.createElement(D,Object(n.a)({},B,{className:U,onClick:this.handleClick}),"left"===_&&W,p.a.createElement(s.a,{innerRef:this.ref},p.a.createElement("button",{className:K,"aria-pressed":S?!!a:void 0,disabled:N,tabIndex:q},g.a.create(k,{autoGenerateKey:!1})," ",x)),("right"===_||!_)&&W)}var Y=Object(d.a)("ui",F,H,G,"button",v),J=!b.a.isNil(o),Q=this.computeButtonAriaRole(D);return p.a.createElement(s.a,{innerRef:this.ref},p.a.createElement(D,Object(n.a)({},B,{className:Y,"aria-pressed":S?!!a:void 0,disabled:N&&"button"===D||void 0,onClick:this.handleClick,role:Q,tabIndex:q}),J&&o,!J&&g.a.create(k,{autoGenerateKey:!1}),!J&&x))},t}(u.Component);I.handledProps=["active","animated","as","attached","basic","children","circular","className","color","compact","content","disabled","floated","fluid","icon","inverted","label","labelPosition","loading","negative","onClick","positive","primary","role","secondary","size","tabIndex","toggle"],I.propTypes={},I.defaultProps={as:"button"},I.Content=y,I.Group=w,I.Or=C,I.create=Object(v.b)(I,(function(e){return{content:e}}));var _=t.a=I},"cM7+":function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/items/[id]",function(){return a("l8Gw")}])},eomm:function(e,t,a){e.exports=a("/a9y")},l8Gw:function(e,t,a){"use strict";a.r(t),a.d(t,"__N_SSG",(function(){return y}));var n=a("MX0m"),i=a.n(n),r=a("q1tI"),c=a("nOHt"),o=a("eomm"),l=a.n(o),s=a("aQu0"),d=a("QetY"),u=a("5XkN"),p=a("yE/o"),b=a("IP2g"),m=a("8tEE"),h=a("BNza"),f=a("9Dj+"),v=a("1Yp+"),g=r.createElement,j=function(e){var t="https://twitter.com/intent/tweet?text=".concat(encodeURIComponent(e.title),"&url=").concat(encodeURIComponent("http://shijimane-shino.github.io/items/"+e.id)),a="https://www.facebook.com/sharer/sharer.php?u=".concat(encodeURIComponent("http://shijimane-shino.github.io/items/"+e.id)),n="https://social-plugins.line.me/lineit/share?url=".concat(encodeURIComponent("http://shijimane-shino.github.io/items/"+e.id));return g(r.Fragment,null,g("div",{className:"jsx-2636178438 header-container"},g("div",{className:"jsx-2636178438 header-title"},g(s.a,{as:"h1"},e.title)),g("div",{className:"jsx-2636178438 header-description"},e.description),g("div",{className:"jsx-2636178438 header-social-button"},g("a",{href:t,target:"_blank",rel:"noreferrer",style:{margin:"0 .25em 0 0"},className:"jsx-2636178438"},g(b.a,{icon:m.f,size:"2x",color:"#1da1f2"})),g("a",{href:a,target:"_blank",rel:"noreferrer",style:{margin:"0 .25em 0 0"},className:"jsx-2636178438"},g(b.a,{icon:m.b,size:"2x",color:"#4267B2"})),g("a",{href:n,target:"_blank",rel:"noreferrer",style:{margin:"0 .25em 0 0"},className:"jsx-2636178438"},g(b.a,{icon:m.d,size:"2x",color:"#00c300"}))),g("div",{className:"jsx-2636178438 header-download-button"},e.content.map((function(e){return g(d.a,{key:e.id,href:e.url,target:"_blank",primary:!0},e.title)})))),g(i.a,{id:"2636178438"},[".header-container.jsx-2636178438{min-height:45vh;margin:0 0 1em;}",".header-title.jsx-2636178438{width:75%;margin:0 0 1em;padding:20vh 0 0;}",".header-description.jsx-2636178438{white-space:pre-wrap;margin:0 0 1em;}",".header-download-button.jsx-2636178438{margin:0 0 .5em;}",".header-social-button.jsx-2636178438{margin:0 0 .5em;}"]))},O=function(e){return g(r.Fragment,null,g("div",{className:"jsx-86850927 header-image"},g(u.a,{src:e.url,style:{left:"50%",minWidth:"50%",minHeight:"100vh",objectFit:"contain"}})),g(i.a,{id:"86850927"},[".header-image.jsx-86850927{position:relative;opacity:0.5;height:0;z-index:-1;overflow:inherit;}"]))},y=!0;t.default=function(e){var t=e.item,a=Object(c.useRouter)();return t?g(f.a,{title:t.title,isHeader:!1},g(p.a,null,a.isFallback?g("div",null,"Loading\u2026"):g(r.Fragment,null,t.thumbnail&&g(O,{url:t.thumbnail.url}),g(h.b,{title:null}),g(j,t),g(v.a,{md:t.body.markdown})))):g(l.a,{statusCode:404})}}},[["cM7+",0,2,7,1,3,6,5]]]);