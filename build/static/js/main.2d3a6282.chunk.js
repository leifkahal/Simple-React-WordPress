(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{14:function(e,a,t){"use strict";(function(e){var n=t(5),r=t.n(n),c=t(12),l=t(0);a.a=function(a,t,n){var o,s,i,m,u,p,f,g,d,v,E=e.Configs.apiUrl;switch(a){case"page":o=a+"s",s="?slug="+t;break;case"post":o=a+"s",s=t;break;case"category":o="posts",i=!0,u="&page="+t[1];break;case"tag":o="posts",m=!0;break;case"archive":o="posts",p=t.year,f=t.year,function(e){"12"===e?(d="01",f="",g=Number(p)+1):e<=8?(d="0"+(Number(e)+1).toString(),g=""):(d=Number(e)+1,g="")}(v=t.month),s="?after=".concat(p,"-").concat(v,"-01T00:00:00&before=").concat(f+g,"-").concat(d,"-01T00:00:00"),console.log();break;case"footer":o=a,s=t;break;default:console.log("default")}var h=Object(l.useState)([]),b=Object(c.a)(h,2),y=b[0],w=b[1];return Object(l.useEffect)((function(){document.getElementById("footer_dark").style.display="none",document.getElementById("spinner").style.display="block",function(){var a,n,c,l;r.a.async((function(p){for(;;)switch(p.prev=p.next){case 0:if(!i){p.next=8;break}return p.next=3,r.a.awrap(fetch("".concat(E,"/categories/")));case 3:return a=p.sent,p.next=6,r.a.awrap(a.json());case 6:p.sent.map((function(e){return e.slug===t[0]?s="?categories="+e.id+u:""}));case 8:if(!m){p.next=16;break}return p.next=11,r.a.awrap(fetch("".concat(E,"/tags/")));case 11:return n=p.sent,p.next=14,r.a.awrap(n.json());case 14:p.sent.map((function(e){return e.slug===t?s="?tags="+e.id:""}));case 16:return p.next=18,r.a.awrap(fetch("".concat(E,"/").concat(o,"/").concat(s)));case 18:return c=p.sent,p.next=21,r.a.awrap(c.json());case 21:l=p.sent,e.pages=c.headers.get("X-WP-TotalPages"),l.data?w(!1):0===l.length?w(!1):w(l),document.getElementById("spinner").style.display="none",document.getElementById("footer_dark").style.display="block",document.querySelector("form")&&(document.querySelector("input[aria-label='Name']").classList.add("form-control"),document.querySelector("input[type='Email']").classList.add("form-control"),document.querySelector("textarea[aria-label='Message']").classList.add("form-control"),document.querySelector("input[aria-label='Website']").classList.add("form-control"),document.querySelector("button[name='submit']").classList.add("btn")),window.scrollTo(0,0);case 28:case"end":return p.stop()}}))}()}),[n]),y}}).call(this,t(9))},17:function(e,a,t){"use strict";var n=t(0),r=t.n(n),c=t(37),l=t(44),o=t(16),s=t(14),i=t(22),m=t(13),u=Object(m.f)((function(e){var a,t=e.postType,n=e.endpoint,c=e.rand,l=Object(s.a)(t,n,c);return l&&(a=l.map((function(e){return e.title.rendered}))),l?r.a.createElement(o.a,{md:9,lg:9,xl:9},r.a.createElement(i.a,{title:a}),r.a.createElement("h1",null,a),r.a.createElement("div",{onClick:function(a){var t=a.target.closest("a");if(null===t)return;if("_blank"===t.getAttribute("target")){var n=t+" ";if(!n)return;a.preventDefault();var r=n.split(/href="(.*?...)"/)[0].replace(window.Configs.reactUrl,"").replace(":3000","");window.open(r,"_blank")}else{var c=t+" ";if(!c)return;a.preventDefault();var l=c.split(/href="(.*?...)"/)[0].replace(window.Configs.reactUrl,"").replace(":3000","");e.history.push(l)}},dangerouslySetInnerHTML:{__html:l.map((function(e){return e.content_shortcode}))},className:"wp-html"})):r.a.createElement("div",{className:"wp-html"},r.a.createElement("h1",null,"404 Not Found"))})),p=t(24);a.a=function(e){e.props;var a=e.match,t="",n="",s="",i="",m="",f=Math.random();return a?(n=a.params.id,s=a.params.post,i=a.params.pageNum,a.params.year?(t="archive",n={year:a.params.year,month:a.params.month},m="Archive: | "+a.params.month+"/"+a.params.year):a.params.tag?(t="tag",n=a.params.tag,m=a.params.tag.replace(/^\w/,(function(e){return e.toUpperCase()}))):a.params.post?(t="post",n="?slug="+a.params.id):a.params.pageNum?(t="category",n=[a.params.title,a.params.pageNum],m=a.params.title.replace(/^\w/,(function(e){return e.toUpperCase()}))):a.params.blogPage?(t="post",n=["/?page="+a.params.blogPage],i=a.params.blogPage,m=window.Configs.companyTitle):(t="category",n=[a.params.title,"1"],m=a.params.title.replace(/^\w/,(function(e){return e.toUpperCase()})))):(t="post",n=["?page=1"],i="1",m=window.Configs.companyTitle),s?r.a.createElement("div",{className:"category-wrapper close-nav"},r.a.createElement(p.a,null,r.a.createElement(o.a,{md:3,lg:3,xl:3,className:"sidebar-container"},r.a.createElement(c.a,null)),r.a.createElement(u,{postType:t,endpoint:n,rand:f}))):r.a.createElement("div",{className:"category-wrapper close-nav",style:{minHeight:"100vh"}},r.a.createElement(p.a,null,r.a.createElement(o.a,{md:3,lg:3,xl:3,className:"sidebar-container"},r.a.createElement(c.a,null)),r.a.createElement(l.a,{postType:t,endpoint:n,rand:f,currentPage:i,title:m})))}},22:function(e,a,t){"use strict";(function(e){var n=t(0),r=t.n(n),c=t(46),l=t.n(c);a.a=function(a){return r.a.createElement(l.a,null,r.a.createElement("title",null,a.title+" | "+e.Configs.companyTitle))}}).call(this,t(9))},28:function(e,a,t){"use strict";var n=t(0),r=t.n(n),c=t(14),l=t(22),o=t(13);a.a=Object(o.f)((function(e){var a,t,n;if(e.id?(a=e.id,t=Object(c.a)("page",a,e.id),n=t):e.match&&(a=e.match.params.id,t=Object(c.a)("page",a,e.match),n=t),n){var o=n.map((function(e){return e.title.rendered}));return r.a.createElement("div",{id:"single",className:"page-wrapper",style:{minHeight:"100vh"}},r.a.createElement(l.a,{title:o}),r.a.createElement("div",{className:"wp-page-html"},r.a.createElement("div",{onClick:function(a){var t=a.target.closest("a");if(null===t)return;if(t.hasAttribute("data-toggle"))return;if("_blank"===t.getAttribute("target")){var n=t+" ";if(!n)return;a.preventDefault();var r=n.split(/href="(.*?...)"/)[0].replace(window.Configs.reactUrl,"").replace(":3000","");window.open(r,"_blank")}else{var c=t+" ";if(!c)return;a.preventDefault();var l=c.split(/href="(.*?...)"/)[0].replace(window.Configs.reactUrl,"").replace(":3000","");e.history.push(l)}},dangerouslySetInnerHTML:{__html:n.map((function(e){return e.content_shortcode}))}})))}return e.match?r.a.createElement("div",{className:"page-wrapper wp-page-html"},r.a.createElement("h1",null,"404 Not Found")):r.a.createElement("div",{className:"page-wrapper",style:{minHeight:"101vh"}})}))},37:function(e,a,t){"use strict";(function(e){var n=t(5),r=t.n(n),c=t(12),l=t(0),o=t.n(l),s=t(7),i=t(29),m=t(13);a.a=Object(m.f)((function(a){var t=Object(l.useState)([]),n=Object(c.a)(t,2),m=n[0],u=n[1];Object(l.useEffect)((function(){!function(){var a,t;r.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,r.a.awrap(fetch("".concat(e.Configs.apiUrl,"/sidebar/json")));case 2:return a=n.sent,n.next=5,r.a.awrap(a.json());case 5:t=n.sent,u(t);case 7:case"end":return n.stop()}}))}()}),[]);var p=e.Configs.apiDomain,f=e.Configs.reactUrl,g=0;return o.a.createElement("div",{id:"sidebar",className:"sidebar"},m.map((function(e){return g++,o.a.createElement(i.a,{key:g,defaultActiveKey:"/home",className:"flex-column widget-container"},o.a.createElement("label",{className:"sidebar-title"},e.title),e.links.map((function(e){if(e.html){return o.a.createElement("div",{key:Math.random(),onClick:d,dangerouslySetInnerHTML:{__html:e.html}})}return("_blank"===e.target?"":" react-link")?o.a.createElement(s.b,{key:Math.random(),to:function(){return e.url.replace(p,"").replace(f,"")},className:"navbar-left nav-link react-link"},e.label):o.a.createElement("a",{key:Math.random(),href:e.url,className:"navbar-left nav-link",rel:"noopener noreferrer",target:"_blank"},e.label)})))})));function d(e){var t=e.target.closest("a");if(null!==t)if("_blank"===t.getAttribute("target")){var n=t+" ";if(!n)return;e.preventDefault();var r=n.split(/href="(.*?...)"/)[0].replace(window.Configs.reactUrl,"").replace(":3000","");window.open(r,"_blank")}else{var c=t+" ";if(!c)return;e.preventDefault();var l=c.split(/href="(.*?...)"/)[0].replace(window.Configs.reactUrl,"").replace(":3000","");a.history.push(l)}}}))}).call(this,t(9))},40:function(e,a,t){"use strict";(function(e){var n=t(5),r=t.n(n),c=t(12),l=t(0),o=t.n(l),s=t(7),i=t(25),m=t(29);a.a=function(a){var t,n=Object(l.useState)([]),u=Object(c.a)(n,2),p=u[0],f=u[1],g=Object(l.useState)([]),d=Object(c.a)(g,2),v=d[0],E=d[1],h=Object(l.useState)(!1),b=Object(c.a)(h,2),y=b[0],w=b[1],k=e.Configs.apiUrl,N=e.Configs.apiDomain,C=e.Configs.reactUrl,x=e.Configs.brandingLogo,j=e.Configs.companyTitle,O=e.Configs.navbarClasses;return Object(l.useEffect)((function(){!function(){var e,a;r.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.a.awrap(fetch("".concat(k,"/menu.json")));case 2:return e=t.sent,t.next=5,r.a.awrap(e.json());case 5:a=t.sent,f(a);case 7:case"end":return t.stop()}}))}()}),[k]),Object(l.useEffect)((function(){!function(){var a,t;r.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,r.a.awrap(fetch("".concat(e.Configs.apiUrl,"/bloginfo")));case 2:return a=n.sent,n.next=5,r.a.awrap(a.json());case 5:t=n.sent,E(t);case 7:case"end":return n.stop()}}))}()}),[]),e.frontPage=v[2],e.Bloginfo=v,t=x?o.a.createElement("img",{alt:j,src:x,height:"32",className:"d-inline-block align-top"}):"",o.a.createElement(i.a,{expanded:y,collapseOnSelect:!0,expand:"lg",className:O},o.a.createElement(i.a.Brand,{href:"#home"},t,o.a.createElement("div",{className:"bloginfo"},o.a.createElement("span",{className:"blog-title"},v[0]),o.a.createElement("br",null),o.a.createElement("span",{className:"blog-description"},v[1]))),o.a.createElement(i.a.Toggle,{id:"navbar-toggler",onClick:function(){return w(!y&&"expanded")},"aria-controls":"responsive-navbar-nav",className:"navbar-toggle",style:{display:"none"}}),o.a.createElement(i.a.Collapse,{id:"responsive-navbar-nav"},o.a.createElement(m.a,{className:"ml-auto"},p.map((function(e){return o.a.createElement(s.b,{key:e.ID,onClick:function(){return w(!1)},to:function(){return e.url.replace(N,"").replace(C,"")},className:"navbar-right nav-link react-link"},e.title)})))))}}).call(this,t(9))},44:function(e,a,t){"use strict";(function(e){var n=t(0),r=t.n(n),c=t(7),l=t(21),o=t(24),s=t(16),i=t(14),m=t(45),u=t(22);a.a=function(a){var t,n,p=a.postType,f=a.endpoint,g=a.rand,d=e.Configs.apiDomain,v=e.Configs.reactUrl,E=e.Configs.defaultThumb,h=Object(i.a)(p,f,g),b=a.title;return h?r.a.createElement(s.a,{id:"post-list",className:"main-content",md:9,lg:9,xl:9},r.a.createElement(u.a,{title:b}),h.map((function(e){return t=e.fimg_url?e.fimg_url:E,n=new Date(e.date).toDateString(),r.a.createElement(l.a,{key:e.id},r.a.createElement(l.a.Body,null,r.a.createElement(o.a,null,r.a.createElement(s.a,{md:4,className:"post-list-img"},r.a.createElement(l.a.Img,{variant:"left",src:t})),r.a.createElement(s.a,{md:8},r.a.createElement(l.a.Title,null,e.title.rendered),r.a.createElement(l.a.Subtitle,{className:"mb-2 text-muted"},n),r.a.createElement(l.a.Text,null,function(e){var a=document.createElement("textarea");return a.innerHTML=e,a.value}(e.excerpt.rendered)),r.a.createElement(c.b,{to:e.link.replace(d,"").replace(v,""),className:"react-link"},"View Article")))))})),r.a.createElement(m.a,{currentPage:a.currentPage})):r.a.createElement("div",{className:"page-wrapper wp-html"},r.a.createElement("h1",null,"404 Not Found"))}}).call(this,t(9))},45:function(e,a,t){"use strict";(function(e){var n=t(0),r=t.n(n),c=t(7),l=t(52);a.a=function(a){var t,n=a.currentPage;n||(n="1");for(var o=[],s=1;s<=e.pages;s++)t=s===Number(n)?"active":"",o.push(r.a.createElement("li",{key:s,className:"page-item "+t},r.a.createElement(c.b,{to:"page="+s,className:"page-link",onClick:window.scrollTo(0,0)},s)));return e.pages>1?r.a.createElement(l.a,null,o):""}}).call(this,t(9))},47:function(e,a,t){"use strict";(function(e){var n=t(5),r=t.n(n),c=t(12),l=t(0),o=t.n(l),s=t(7);a.a=function(a){var t=Object(l.useState)([]),n=Object(c.a)(t,2),i=n[0],m=n[1];Object(l.useEffect)((function(){!function(){var a,t;r.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,r.a.awrap(fetch("".concat(e.Configs.apiUrl,"/footer")));case 2:return a=n.sent,n.next=5,r.a.awrap(a.json());case 5:t=n.sent,m(t);case 7:case"end":return n.stop()}}))}()}),[]);var u,p=e.Configs.apiDomain,f=e.Configs.reactUrl,g=e.Configs.footerClasses,d=0,v=0;return o.a.createElement("div",{id:"footer_dark",className:g,style:{display:"none"}},o.a.createElement("footer",null,o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},i.map((function(e){return d++,o.a.createElement("div",{key:e.title+d,className:"col-sm-6 col-md-3 item footer-menu-container"},o.a.createElement("h3",{className:"footer-title"},e.title),o.a.createElement("ul",null,e.links.map((function(e){v++;return(u="_blank"===e.target?"":" react-link")?o.a.createElement("li",{key:2354+v},o.a.createElement(s.b,{to:function(){return e.url.replace(p,"").replace(f,"")},role:"tab","data-rb-event-key":"1","aria-selected":"true",className:"navbar-footer nav-link"+u,target:e.target},e.label,o.a.createElement("ion-icon",{name:"open-outline"}))):o.a.createElement("li",{key:2354+v},o.a.createElement("a",{href:e.url,role:"tab","data-rb-event-key":"1","aria-selected":"true",className:"navbar-footer nav-link"+u,rel:"noopener noreferrer",target:e.target},e.label,o.a.createElement("ion-icon",{name:"open-outline"})))}))))})),o.a.createElement("div",{className:"col-md-6 item text company-info"},o.a.createElement("h3",null,e.Configs.companyTitle),o.a.createElement("p",null,e.Configs.companyDesc))),o.a.createElement("div",{className:"col item social"},o.a.createElement("a",{href:e.Configs.facebookUrl,target:"blank"},o.a.createElement("i",{className:"icon ion-social-facebook"})),o.a.createElement("a",{href:e.Configs.twitterUrl},o.a.createElement("i",{className:"icon ion-social-twitter"})),o.a.createElement("a",{href:e.Configs.snapchatUrl},o.a.createElement("i",{className:"icon ion-social-snapchat"})),o.a.createElement("a",{href:e.Configs.instagramUrl},o.a.createElement("i",{className:"icon ion-social-instagram"}))),o.a.createElement("p",{className:"copyright"},e.Configs.copyright,"  | Powered by ",o.a.createElement("a",{href:"http://simplereactwordpress.com",style:{color:"#fff"}},"Simple React WordPress\xae")))))}}).call(this,t(9))},48:function(e,a,t){"use strict";(function(e){var n=t(0),r=t.n(n),c=t(28),l=t(17);a.a=function(){return"blog/"===e.Configs.frontPage?r.a.createElement(l.a,null):r.a.createElement(c.a,{id:e.Configs.frontPage})}}).call(this,t(9))},49:function(e,a,t){"use strict";(function(e){var n=t(0),r=t.n(n),c=t(14);a.a=function(){var a=e.Configs.fofBackground;Object(c.a)();return r.a.createElement("div",{className:"react-fof-wrapper",style:{minHeight:"100vh",backgroundImage:"url(".concat(a,")")}},r.a.createElement("div",{id:"four-o-four"},r.a.createElement("h2",{style:{fontSize:"5em"}},"404"),r.a.createElement("p",null,"Page not found")))}}).call(this,t(9))},50:function(e,a,t){"use strict";(function(e){t.d(a,"a",(function(){return n}));Boolean("localhost"===e.location.hostname||"[::1]"===e.location.hostname||e.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function n(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}}).call(this,t(9))},53:function(e,a,t){e.exports=t(69)},69:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(23),l=t.n(c),o=t(13),s=t(40),i=t(17),m=t(28),u=t(47),p=t(48),f=t(49);var g=function(){return r.a.createElement("div",{className:"app-wrapper",style:{minHeight:"100vh"}},r.a.createElement(s.a,null),r.a.createElement(o.c,null,r.a.createElement(o.a,{path:"/category/:title",exact:!0,component:i.a}),r.a.createElement(o.a,{path:"/category/:title/page=:pageNum",exact:!0,component:i.a}),r.a.createElement(o.a,{path:"/tag/:tag",exact:!0,component:i.a}),r.a.createElement(o.a,{path:"/archive/:year/:month",exact:!0,component:i.a}),r.a.createElement(o.a,{path:"/:post/:id/",exact:!0,component:i.a}),r.a.createElement(o.a,{path:"/page=:blogPage",exact:!0,component:i.a}),r.a.createElement(o.a,{path:"/:id/",exact:!0,component:m.a}),r.a.createElement(o.a,{path:"/",exact:!0,component:p.a}),r.a.createElement(o.a,{component:f.a})),r.a.createElement(u.a,null))},d=t(51),v=t(50),E=t(7);l.a.render(r.a.createElement("div",{id:"spinner-container",className:"spinner-div"},r.a.createElement(d.a,{animation:"border",variant:"primary"})),document.getElementById("spinner")),l.a.render(r.a.createElement(E.a,null,r.a.createElement(g,null)),document.getElementById("root")),v.a()}},[[53,1,2]]]);
//# sourceMappingURL=main.2d3a6282.chunk.js.map