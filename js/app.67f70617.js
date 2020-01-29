(function(t){function e(e){for(var s,n,i=e[0],l=e[1],c=e[2],m=0,u=[];m<i.length;m++)n=i[m],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&u.push(r[n][0]),r[n]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);d&&d(e);while(u.length)u.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],s=!0,i=1;i<a.length;i++){var l=a[i];0!==r[l]&&(s=!1)}s&&(o.splice(e--,1),t=n(n.s=a[0]))}return t}var s={},r={app:0},o=[];function n(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=s,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(a,s,function(e){return t[e]}.bind(null,s));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var d=l;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("0cdd");var s=a("2b0e"),r=a("5f5b");a("ab8b"),a("2dd8");s["default"].use(r["a"]);var o=a("8cb8"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},i=[],l={name:"App"},c=l,d=a("2877"),m=Object(d["a"])(c,n,i,!1,null,null,null),u=m.exports,p=a("8c4f"),b=a("58ca"),f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.loading?a("div",{staticClass:"vh-100 align-items-center d-flex justify-content-center"},[a("breeding-rhombus-spinner",{attrs:{"animation-duration":2e3,size:100,color:"#b8a07e"}})],1):a("div",[a("b-navbar",{directives:[{name:"show",rawName:"v-show",value:t.showNavBar,expression:"showNavBar"}],attrs:{id:"main-nav",toggleable:"lg",fixed:"top"}},[a("b-container",{staticClass:"py-0"},[a("b-navbar-brand",{staticClass:"logo",staticStyle:{"font-family":"'Satisfy', cursive"},attrs:{href:"#"}},[t._v(" Dreams of Imran ")]),a("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),a("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[a("b-navbar-nav",{staticClass:"ml-auto"},[a("b-nav-item",{attrs:{href:"#header"}},[t._v(" Home ")]),a("b-nav-item",{attrs:{href:"#about"}},[t._v(" About ")]),a("b-nav-item",{attrs:{href:"#portfolio"}},[t._v(" Gallery ")]),a("b-nav-item",{attrs:{href:"#journal"}},[t._v(" Blogs ")]),a("b-nav-item",{attrs:{href:"#contact"}},[t._v(" Contact ")])],1)],1)],1)],1),a("div",{staticClass:"home",attrs:{id:"header"}},[a("b-container",[a("vue-typed-js",{attrs:{strings:["Developer","Designer","Freelancer","Photographer"],loop:!0,"smart-backspace":!0,"back-speed":50,"show-cursor":!0,"type-speed":100}},[a("div",{staticClass:"header-content"},[a("h1",[t._v("Imran Basha")]),a("p",[a("span",{staticClass:"typing"})])])])],1)],1),a("div",{staticClass:"paddsection",attrs:{id:"about"}},[a("b-container",[a("b-row",{staticClass:"justify-content-between"},[a("b-col",{attrs:{lg:"4"}},[a("div",{staticClass:"div-img-bg"},[a("div",{staticClass:"about-img"},[a("b-img",{staticClass:"img-responsive",attrs:{src:"img/about.jpeg",alt:"me"}})],1)])]),a("b-col",{attrs:{lg:"7"}},[a("div",{staticClass:"about-descr"},[a("p",{staticClass:"p-heading"},[t._v(" FullStack Developer, Geek, Designer, Reader & always a Lifetime Learner! ")]),a("p",{staticClass:"separator"},[t._v(" I’m a developer from India, with 2+ years of experience. I almost code every day, and I still love it as much now as when I first discovered it. Writing code has always been easy to me as breathing, and even if I didn’t get paid for doing it. I love to do it anyhow because it is fun. The sense of accomplishment when solving a really complicated problem cannot be beat! It just feels as if you have been at the best party in town. How come not everybody wants to be a developer. ")]),a("br"),a("p",{staticClass:"separator"},[t._v(" Do you need a help on a project or do you just want to say hello? "),a("a",{attrs:{href:"#contact"}},[t._v("Contact me.")])])]),a("div",{staticClass:"pb-0 pt-4",attrs:{id:"footer"}},[a("div",{staticClass:"socials-media text-left"},[a("ul",{staticClass:"list-unstyled"},t._l(t.socialLinks,(function(e){return a("li",{key:e.id},[a("a",{attrs:{href:e.url,target:"_blank"}},[a("v-icon",{attrs:{large:""}},[t._v("mdi-"+t._s(e.name))])],1)])})),0)])])])],1)],1),a("div",{attrs:{id:"services"}},[a("b-container",[a("b-container",[a("div",{staticClass:"section-title text-center"},[a("h2",[t._v("Tools I have played with")])])]),a("carousel",{staticClass:"text-center",attrs:{autoplay:!0,loop:!0,responsive:{0:{items:1,nav:!1},600:{items:3,nav:!1},1e3:{items:5,nav:!1}},dots:!1}},t._l(t.logosList,(function(t){return a("div",{key:t.id,staticClass:"services-block"},[a("a",{attrs:{href:t.url,target:"_blank"}},[a("img",{staticClass:"m-auto",staticStyle:{width:"80px!important"},attrs:{src:"img/logos/"+t.name+".png",alt:t.name,height:"80"}})])])})),0)],1)],1)],1),a("div",{staticClass:"text-center paddsection",attrs:{id:"portfolio"}},[a("b-container",[a("div",{staticClass:"section-title text-center"},[a("h2",[t._v("My Magics with Camera")])])]),a("b-container",[a("b-row",[a("b-col",{attrs:{md:"12"}},[a("div",{staticClass:"portfolio-container"},[t.showImages?a("carousel",{staticClass:"text-center",attrs:{autoplay:!0,responsive:{0:{items:1},768:{items:2},900:{items:4}},dots:!1}},t._l(t.imageList,(function(e){return a("a",{key:e.id,staticStyle:{color:"inherit"},attrs:{href:e.link,target:"_blank"}},[a("b-card",{staticClass:"mx-2",attrs:{"img-src":e.images.standard_resolution.url,"img-alt":"Image","img-height":"250","img-width":"250","img-top":"","no-body":""}},[a("div",[a("b-row",[a("b-col",[a("v-icon",{staticClass:"text-danger",attrs:{medium:""}},[t._v("mdi-heart")]),t._v(" "+t._s(e.likes.count)+" ")],1),a("b-col",[a("v-icon",{staticClass:"text-danger",attrs:{medium:""}},[t._v("mdi-comment-outline")]),t._v(" "+t._s(e.comments.count)+" ")],1)],1)],1)])],1)})),0):t._e()],1)])],1)],1)],1),a("div",{staticClass:"text-left paddsection",attrs:{id:"journal"}},[a("b-container",{staticClass:"p-0"},[a("div",{staticClass:"section-title text-center"},[a("h2",[t._v("Blogs")])])]),a("b-container",[a("div",{staticClass:"journal-block"},[a("b-row",[a("b-col",{attrs:{lg:"4",md:"6"}},[a("div",{staticClass:"journal-info"},[a("a",{attrs:{href:"https://blog.francium.tech/learn-grpc-and-protobuf-with-golang-8456a2e64977?source=friends_link&sk=cfc3716536dd5972e6e5d744703194ea",target:"_blank"}},[a("img",{staticClass:"img-responsive",attrs:{src:"https://cdn-images-1.medium.com/max/800/1*JzeYG3sdWeKfcQ_A69m8oA.jpeg",alt:"img"}})]),a("div",{staticClass:"journal-txt"},[a("h4",[a("a",{attrs:{href:"https://blog.francium.tech/learn-grpc-and-protobuf-with-golang-8456a2e64977?source=friends_link&sk=cfc3716536dd5972e6e5d744703194ea",target:"_blank"}},[t._v(" Learn gRPC and Protobuf with GoLang ")])]),a("p",{staticClass:"separator"},[t._v(" This blog introduces you to gRPC and protobuf (protocol buffers) using GoLang. ")])])])])],1)],1)])],1),a("div",{staticClass:"paddsection",attrs:{id:"contact"}},[a("b-container",[a("div",{staticClass:"contact-block"},[a("b-row",[a("b-col",{attrs:{lg:"6"}},[a("div",{staticClass:"contact-contact"},[a("h2",{staticClass:"mb-30"},[t._v(" GET IN TOUCH ")]),a("ul",{staticClass:"contact-details"},[a("li",[a("span",[t._v("Broadway")])]),a("li",[a("span",[t._v("Chennai, Tamil Nadu")])]),a("li",[a("span",[t._v("+91 8056032342")])]),a("li",[a("span",[t._v("contactme@dreamsofimran.in")])])])])]),a("b-col",{attrs:{lg:"6"}},[a("b-form",{staticClass:"contactForm",on:{submit:function(e){return e.preventDefault(),t.sendMessage()}}},[a("b-row",[a("b-col",{staticClass:"py-0",attrs:{lg:"6"}},[a("b-form-group",{staticClass:"contact-block1"},[a("b-input",{staticClass:"form-control-contact py-4",attrs:{id:"name",type:"text",name:"name",placeholder:"Your Name",required:""},model:{value:t.message.name,callback:function(e){t.$set(t.message,"name",e)},expression:"message.name"}})],1)],1),a("b-col",{staticClass:"py-0",attrs:{lg:"6"}},[a("b-form-group",[a("b-input",{staticClass:"form-control-contact py-4",attrs:{id:"email",type:"email",name:"email",placeholder:"Your Email",required:""},model:{value:t.message.email,callback:function(e){t.$set(t.message,"email",e)},expression:"message.email"}})],1)],1),a("b-col",{staticClass:"py-0",attrs:{lg:"12"}},[a("b-form-group",[a("b-input",{staticClass:"form-control-contact py-4",attrs:{id:"subject",type:"text",name:"subject",placeholder:"Subject",required:""},model:{value:t.message.subject,callback:function(e){t.$set(t.message,"subject",e)},expression:"message.subject"}})],1)],1),a("b-col",{staticClass:"py-0",attrs:{lg:"12"}},[a("b-form-group",[a("b-textarea",{staticClass:"form-control-contact",attrs:{name:"message",rows:"4",placeholder:"Message",required:""},model:{value:t.message.messageBody,callback:function(e){t.$set(t.message,"messageBody",e)},expression:"message.messageBody"}})],1)],1),a("b-col",{staticClass:"py-0",attrs:{lg:"12"}},[a("b-btn",{staticClass:"btn-default btn-send w-100 bg-dark",attrs:{type:"submit"}},[t._v(" Send Message ")])],1)],1)],1)],1)],1)],1)])],1),a("div",{staticClass:"text-center",attrs:{id:"footer"}},[a("b-container",[a("div",{staticClass:"socials-media text-center"},[a("ul",{staticClass:"list-unstyled"},t._l(t.socialLinks,(function(e){return a("li",{key:e.id},[a("a",{attrs:{href:e.url,target:"_blank"}},[a("v-icon",{attrs:{medium:""}},[t._v("mdi-"+t._s(e.name))])],1)])})),0)]),a("p",[t._v(" © Copyrights "),a("a",{attrs:{href:"javascript:void(0);"}},[a("b",[t._v("Imran Basha")])]),t._v(". All rights reserved. ")])])],1)],1)},g=[],v=a("7ec7"),h=a.n(v),y=a("4583"),w={name:"Home",components:{carousel:h.a,BreedingRhombusSpinner:y["a"]},data:function(){return{loading:!0,showNavBar:!1,imageList:[],showImages:!1,logosList:[{id:1,name:"ruby",url:"https://www.ruby-lang.org"},{id:2,name:"vuejs",url:"https://vuejs.org"},{id:3,name:"golang",url:"https://golang.org"},{id:4,name:"rails",url:"https://rubyonrails.org"},{id:5,name:"python",url:"https://www.python.org"},{id:6,name:"flutter",url:"https://flutter.dev"},{id:7,name:"docker",url:"https://www.docker.com"},{id:8,name:"java",url:"https://www.java.com"},{id:9,name:"c-sharp",url:"https://docs.microsoft.com/en-us/dotnet/csharp"}],socialLinks:[{id:1,name:"facebook-box",url:"https://www.facebook.com/DreamsOfImran"},{id:2,name:"twitter",url:"https://twitter.com/DreamsOfImran"},{id:3,name:"instagram",url:"https://www.instagram.com/dreamsofimran"},{id:4,name:"github-box",url:"https://github.com/DreamsOfImran"},{id:5,name:"medium",url:"https://medium.com/@DreamsOfImran"},{id:6,name:"dev-to",url:"https://dev.to/dreamsofimran"}],message:{name:"",email:"",subject:"",messageBody:""}}},mounted:function(){this.fetchInstaImages(),this.loader(),window.addEventListener("scroll",this.onScroll)},beforeDestroy:function(){window.removeEventListener("scroll",this.onScroll)},methods:{loader:function(){var t=this;setTimeout((function(){t.loading=!1}),3e3)},onScroll:function(){var t=window.pageYOffset||document.documentElement.scrollTop;this.showNavBar=t>300},fetchInstaImages:function(){var t=this;this.$http.get("https://api.instagram.com/v1/users/self/media/recent?access_token=".concat("8272330664.1677ed0.c558f1126b3f49019694d691a3a78fbb","&count=50")).then((function(e){t.imageList=e.data.data,t.showImages=!0})).catch((function(e){t.imageList=nil}))},sendMessage:function(){Email.send({SecureToken:"6765f161-888e-4952-a20c-9bc64fa60755",To:"contactme@dreamsofimran.in",From:"ibasha66@gmail.com",Subject:this.message.subject,Body:this.message.email+" "+this.message.messageBody}).then((function(t){return alert(t)}))}}},C=w,_=a("6544"),k=a.n(_),j=a("132d"),x=Object(d["a"])(C,f,g,!1,null,null,null),I=x.exports;k()(x,{VIcon:j["a"]}),s["default"].use(p["a"]),s["default"].use(b["a"]);var O=new p["a"]({routes:[{path:"/",component:I}]}),S=O,B=a("bc3a"),L=a.n(B),T=(a("d1e78"),a("f309"));s["default"].use(T["a"]);var D=new T["a"]({icons:{iconfont:"md"}});s["default"].use(o["default"]),s["default"].prototype.$http=L.a,s["default"].config.productionTip=!1,new s["default"]({router:S,vuetify:D,render:function(t){return t(u)}}).$mount("#app")}});
//# sourceMappingURL=app.67f70617.js.map