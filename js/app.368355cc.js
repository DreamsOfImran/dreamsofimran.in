(function(t){function n(n){for(var a,o,i=n[0],l=n[1],c=n[2],m=0,p=[];m<i.length;m++)o=i[m],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&p.push(s[o][0]),s[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);d&&d(n);while(p.length)p.shift()();return r.push.apply(r,c||[]),e()}function e(){for(var t,n=0;n<r.length;n++){for(var e=r[n],a=!0,i=1;i<e.length;i++){var l=e[i];0!==s[l]&&(a=!1)}a&&(r.splice(n--,1),t=o(o.s=e[0]))}return t}var a={},s={app:0},r=[];function o(n){if(a[n])return a[n].exports;var e=a[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=t,o.c=a,o.d=function(t,n,e){o.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,n){if(1&n&&(t=o(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var a in t)o.d(e,a,function(n){return t[n]}.bind(null,a));return e},o.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(n,"a",n),n},o.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},o.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=n,i=i.slice();for(var c=0;c<i.length;c++)n(i[c]);var d=l;r.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},2583:function(t,n,e){"use strict";var a=e("6290"),s=e.n(a);s.a},"56d7":function(t,n,e){"use strict";e.r(n);e("e260"),e("e6cf"),e("cca6"),e("a79d"),e("0cdd");var a=e("2b0e"),s=e("5f5b");e("ab8b"),e("2dd8");a["default"].use(s["a"]);var r=e("8cb8"),o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},i=[],l={name:"App"},c=l,d=e("2877"),m=Object(d["a"])(c,o,i,!1,null,null,null),p=m.exports,u=e("8c4f"),b=e("58ca"),f=function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.loading?e("div",{staticClass:"vh-100 align-items-center d-flex justify-content-center"},[e("breeding-rhombus-spinner",{attrs:{"animation-duration":2e3,size:100,color:"#b8a07e"}})],1):e("div",[e("nav-bar"),e("Header"),e("About"),e("Gallery"),e("Blogs"),e("Contact"),e("Footer")],1)},h=[],g=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("b-navbar",{directives:[{name:"show",rawName:"v-show",value:t.showNavBar,expression:"showNavBar"}],attrs:{id:"main-nav",toggleable:"lg",fixed:"top"}},[e("b-container",{staticClass:"py-0"},[e("b-navbar-brand",{staticClass:"logo",staticStyle:{"font-family":"'Satisfy', cursive"},attrs:{href:"#"}},[t._v(" Dreams of Imran ")]),e("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),e("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[e("b-navbar-nav",{staticClass:"ml-auto"},[e("b-nav-item",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#header",expression:"'#header'"}],attrs:{href:"#"}},[t._v(" Home ")]),e("b-nav-item",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#about",expression:"'#about'"}],attrs:{href:"#"}},[t._v(" About ")]),e("b-nav-item",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#portfolio",expression:"'#portfolio'"}],attrs:{href:"#"}},[t._v(" Gallery ")]),e("b-nav-item",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#journal",expression:"'#journal'"}],attrs:{href:"#"}},[t._v(" Blogs ")]),e("b-nav-item",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#contact",expression:"'#contact'"}],attrs:{href:"#"}},[t._v(" Contact ")])],1)],1)],1)],1)},v=[],y={name:"NavBar",data:function(){return{showNavBar:!1}},mounted:function(){window.addEventListener("scroll",this.onScroll)},beforeDestroy:function(){window.removeEventListener("scroll",this.onScroll)},methods:{onScroll:function(){var t=window.pageYOffset||document.documentElement.scrollTop;this.showNavBar=t>300}}},w=y,x=Object(d["a"])(w,g,v,!1,null,null,null),C=x.exports,_=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"home",attrs:{id:"header"}},[e("b-container",[e("vue-typed-js",{attrs:{strings:["Developer","Designer","Freelancer","Photographer"],loop:!0,"smart-backspace":!0,"back-speed":50,"show-cursor":!0,"type-speed":100}},[e("div",{staticClass:"header-content"},[e("h1",[t._v("Imran Basha")]),e("p",[e("span",{staticClass:"typing"})])])])],1)],1)},E=[],k={name:"Header"},T=k,j=Object(d["a"])(T,_,E,!1,null,null,null),O=j.exports,I=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"paddsection",attrs:{id:"about"}},[e("b-container",[e("b-row",{staticClass:"justify-content-between"},[e("b-col",{attrs:{lg:"4"}},[e("div",{staticClass:"div-img-bg"},[e("div",{staticClass:"about-img"},[e("b-img",{staticClass:"img-responsive",attrs:{src:"img/about.jpeg",alt:"me"}})],1)])]),e("b-col",{attrs:{lg:"7"}},[e("div",{staticClass:"about-descr"},[e("p",{staticClass:"p-heading"},[t._v(" FullStack Developer, Geek, Designer, Reader & always a Lifetime Learner! ")]),e("p",{staticClass:"separator"},[t._v(" I’m a developer from India, with 2+ years of experience. I almost code every day, and I still love it as much now as when I first discovered it. Writing code has always been easy to me as breathing, and even if I didn’t get paid for doing it. I love to do it anyhow because it is fun. The sense of accomplishment when solving a really complicated problem cannot be beat! It just feels as if you have been at the best party in town. How come not everybody wants to be a developer. ")]),e("br"),e("p",{staticClass:"separator"},[t._v(" Do you need help with a project or do you just want to say hello? "),e("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#contact",expression:"'#contact'"}],staticClass:"about-contact-link",attrs:{href:"#"}},[t._v("Contact me.")])])]),e("div",{staticClass:"pb-0 pt-4",attrs:{id:"footer"}},[e("div",{staticClass:"socials-media about-container"},[e("ul",{staticClass:"list-unstyled"},t._l(t.socialLinks,(function(n){return e("li",{key:n.id},[e("a",{attrs:{href:n.url,target:"_blank"}},[e("v-icon",{attrs:{large:""}},[t._v("fab fa-"+t._s(n.name))])],1)])})),0)])])])],1)],1),e("div",{attrs:{id:"services"}},[e("b-container",[e("b-container",[e("div",{staticClass:"section-title text-center"},[e("h2",[t._v("Tools I have played with")])])]),e("carousel",{staticClass:"text-center",attrs:{autoplay:!0,loop:!0,responsive:{0:{items:1,nav:!1},600:{items:3,nav:!1},1e3:{items:5,nav:!1}},dots:!1}},t._l(t.logosList,(function(t){return e("div",{key:t.id,staticClass:"services-block"},[e("a",{attrs:{href:t.url,target:"_blank"}},[e("img",{staticClass:"m-auto",staticStyle:{width:"80px!important"},attrs:{src:"img/logos/"+t.name+".png",alt:t.name,height:"80"}})])])})),0)],1)],1)],1)},N=[],S=e("7ec7"),A=e.n(S),B={name:"About",components:{carousel:A.a},data:function(){return{logosList:[{id:1,name:"ruby",url:"https://www.ruby-lang.org"},{id:2,name:"vuejs",url:"https://vuejs.org"},{id:3,name:"golang",url:"https://golang.org"},{id:4,name:"rails",url:"https://rubyonrails.org"},{id:5,name:"python",url:"https://www.python.org"},{id:6,name:"flutter",url:"https://flutter.dev"},{id:7,name:"docker",url:"https://www.docker.com"},{id:8,name:"java",url:"https://www.java.com"},{id:9,name:"c-sharp",url:"https://docs.microsoft.com/en-us/dotnet/csharp"}],socialLinks:[{id:1,name:"facebook-square",url:"https://www.facebook.com/DreamsOfImran"},{id:2,name:"twitter",url:"https://twitter.com/DreamsOfImran"},{id:3,name:"instagram",url:"https://www.instagram.com/dreamsofimran"},{id:4,name:"github-square",url:"https://github.com/DreamsOfImran"},{id:5,name:"medium-m",url:"https://medium.com/@DreamsOfImran"},{id:6,name:"dev",url:"https://dev.to/dreamsofimran"}]}}},D=B,R=e("6544"),L=e.n(R),z=e("132d"),F=Object(d["a"])(D,I,N,!1,null,null,null),H=F.exports;L()(F,{VIcon:z["a"]});var M=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"text-center paddsection",attrs:{id:"portfolio"}},[e("b-container",[e("div",{staticClass:"section-title text-center"},[e("h2",[t._v("Experiments with camera")])])]),t.showImages?e("carousel-3d",{attrs:{width:350,height:300,display:7,autoplay:!0,"autoplay-hover-pause":!1,border:0}},t._l(t.imageList,(function(n,a){return e("slide",{key:a,attrs:{index:a}},[e("a",{attrs:{href:n.permalink,target:"_blank"}},[e("v-img",{staticClass:"insta-img",attrs:{src:n.media_url,"lazy-src":n.media_url},scopedSlots:t._u([{key:"placeholder",fn:function(){return[e("b-row",{staticClass:"h-100",attrs:{"align-v":"center","align-h":"center"}},[e("fulfilling-bouncing-circle-spinner",{attrs:{"animation-duration":4e3,size:40,color:"#dc3545"}})],1)]},proxy:!0}],null,!0)})],1)])})),1):t._e()],1)},$=[],P=(e("99af"),e("a15b"),e("4583")),V={name:"Gallery",components:{FulfillingBouncingCircleSpinner:P["c"]},data:function(){return{imageList:[],showImages:!1}},mounted:function(){this.fetchInstaImages()},methods:{fetchInstaImages:function(){var t=this,n=["id","media_type","media_url","permalink"];this.$http.get("https://graph.instagram.com/me/media?fields=".concat(n.join(),"&access_token=").concat("IGQVJXVnZAuaHRnY2tJNGZAtSVZA4WEk0UXVUVlllWkhzb1BkNnVIYWVpdWxnZAFh0enlnQmlYZAl9NbkNNR0hweWxYd3d1TUFtbTRkcHFJeTEwVVJZAQVJRZAWNiV1M5clBvXzBKTVlFMFNWc0pyZAE5SbDlCNwZDZD")).then((function(n){t.imageList=n.data.data,t.showImages=!0})).catch((function(n){t.imageList=nil}))}}},Y=V,G=e("adda"),U=Object(d["a"])(Y,M,$,!1,null,null,null),W=U.exports;L()(U,{VImg:G["a"]});var Z=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"text-left paddsection",attrs:{id:"journal"}},[e("b-container",{staticClass:"p-0"},[e("div",{staticClass:"section-title text-center"},[e("h2",[t._v("Blogs")])])]),e("b-container",[e("div",{staticClass:"journal-block"},[e("b-row",[e("b-col",{attrs:{lg:"4",md:"6"}},[e("div",{staticClass:"journal-info"},[e("a",{attrs:{href:"https://blog.francium.tech/learn-grpc-and-protobuf-with-golang-8456a2e64977?source=friends_link&sk=cfc3716536dd5972e6e5d744703194ea",target:"_blank"}},[e("img",{staticClass:"img-responsive",attrs:{src:"https://cdn-images-1.medium.com/max/800/1*JzeYG3sdWeKfcQ_A69m8oA.jpeg",alt:"img"}})]),e("div",{staticClass:"journal-txt"},[e("h4",[e("a",{attrs:{href:"https://blog.francium.tech/learn-grpc-and-protobuf-with-golang-8456a2e64977?source=friends_link&sk=cfc3716536dd5972e6e5d744703194ea",target:"_blank"}},[t._v(" Learn gRPC and Protobuf with GoLang ")])]),e("p",{staticClass:"separator"},[t._v(" This blog introduces you to gRPC and protobuf (protocol buffers) using GoLang. ")])])])])],1)],1)])],1)},q=[],J={name:"Blogs"},Q=J,K=Object(d["a"])(Q,Z,q,!1,null,null,null),X=K.exports,tt=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"paddsection",attrs:{id:"contact"}},[e("b-container",[e("div",{staticClass:"contact-block"},[e("b-row",[e("b-col",{attrs:{lg:"6"}},[e("div",{staticClass:"contact-contact"},[e("h2",{staticClass:"mb-30"},[t._v(" GET IN TOUCH ")]),e("ul",{staticClass:"contact-details"},[e("li",[e("span",[t._v("Broadway")])]),e("li",[e("span",[t._v("Chennai, Tamil Nadu")])]),e("li",[e("span",[t._v("+91 8056032342")])]),e("li",[e("span",[t._v("mail@dreamsofimran.in")])])])])]),e("b-col",{attrs:{lg:"6"}},[e("b-form",{staticClass:"contactForm",on:{submit:function(n){return n.preventDefault(),t.sendMessage()}}},[e("b-row",[e("b-col",{staticClass:"py-0",attrs:{lg:"6"}},[e("b-form-group",{staticClass:"contact-block1"},[e("b-input",{staticClass:"form-control-contact py-4",attrs:{id:"name",type:"text",name:"name",placeholder:"YOUR NAME",required:""},model:{value:t.message.name,callback:function(n){t.$set(t.message,"name",n)},expression:"message.name"}})],1)],1),e("b-col",{staticClass:"py-0",attrs:{lg:"6"}},[e("b-form-group",[e("b-input",{staticClass:"form-control-contact py-4",attrs:{id:"email",type:"email",name:"email",placeholder:"YOUR EMAIL",required:""},model:{value:t.message.email,callback:function(n){t.$set(t.message,"email",n)},expression:"message.email"}})],1)],1),e("b-col",{staticClass:"py-0",attrs:{lg:"12"}},[e("b-form-group",[e("b-input",{staticClass:"form-control-contact py-4",attrs:{id:"subject",type:"text",name:"subject",placeholder:"SUBJECT",required:""},model:{value:t.message.subject,callback:function(n){t.$set(t.message,"subject",n)},expression:"message.subject"}})],1)],1),e("b-col",{staticClass:"py-0",attrs:{lg:"12"}},[e("b-form-group",[e("b-textarea",{staticClass:"form-control-contact",attrs:{name:"message",rows:"4",placeholder:"MESSAGE",required:""},model:{value:t.message.messageBody,callback:function(n){t.$set(t.message,"messageBody",n)},expression:"message.messageBody"}})],1)],1),e("b-col",{staticClass:"py-0",attrs:{lg:"12"}},[e("b-btn",{staticClass:"btn-default btn-send w-100 bg-dark",attrs:{type:"submit",disabled:t.sending}},[t.sending?e("atom-spinner",{staticClass:"mx-auto",attrs:{"animation-duration":1e3,size:40}}):e("span",[t._v(" Send Message ")])],1)],1)],1)],1)],1)],1)],1)])],1)},nt=[],et=(e("b0c0"),e("d3b7"),{generateEmailTemplate:function(t){var n='\n    <!doctype html>\n    <html>\n      <head>\n        <meta name="viewport" content="width=device-width" />\n        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />\n        <title>Simple Transactional Email</title>\n        <style>\n          /* -------------------------------------\n              GLOBAL RESETS\n          ------------------------------------- */\n\n          /*All the styling goes here*/\n\n          img {\n            border: none;\n            -ms-interpolation-mode: bicubic;\n            max-width: 100%;\n          }\n\n          body {\n            background-color: #f6f6f6;\n            font-family: sans-serif;\n            -webkit-font-smoothing: antialiased;\n            font-size: 14px;\n            line-height: 1.4;\n            margin: 0;\n            padding: 0;\n            -ms-text-size-adjust: 100%;\n            -webkit-text-size-adjust: 100%;\n          }\n\n          table {\n            border-collapse: separate;\n            mso-table-lspace: 0pt;\n            mso-table-rspace: 0pt;\n            width: 100%; }\n            table td {\n              font-family: sans-serif;\n              font-size: 14px;\n              vertical-align: top;\n              text-align: left;\n          }\n\n          /* -------------------------------------\n              BODY & CONTAINER\n          ------------------------------------- */\n\n          .body {\n            background-color: #f6f6f6;\n            width: 100%;\n          }\n\n          /* Set a max-width, and make it display as block so it will automatically stretch to that width, but will also shrink down on a phone or something */\n          .container {\n            display: block;\n            margin: 0 auto !important;\n            /* makes it centered */\n            max-width: 580px;\n            padding: 10px;\n            width: 580px;\n          }\n\n          /* This should also be a block element, so that it will fill 100% of the .container */\n          .content {\n            box-sizing: border-box;\n            display: block;\n            margin: 0 auto;\n            max-width: 580px;\n            padding: 10px;\n          }\n\n          /* -------------------------------------\n              HEADER, FOOTER, MAIN\n          ------------------------------------- */\n          .main {\n            background: #ffffff;\n            border-radius: 3px;\n            width: 100%;\n          }\n          .msg-details td {\n            text-align: center;\n          }\n\n          .wrapper {\n            box-sizing: border-box;\n            padding: 20px;\n          }\n\n          .content-block {\n            padding-bottom: 10px;\n            padding-top: 10px;\n          }\n\n          .footer {\n            clear: both;\n            margin-top: 10px;\n            text-align: center;\n            width: 100%;\n          }\n            .footer td,\n            .footer p,\n            .footer span,\n            .footer a {\n              color: #999999;\n              font-size: 12px;\n              text-align: center;\n          }\n\n          /* -------------------------------------\n              TYPOGRAPHY\n          ------------------------------------- */\n          h1,\n          h2,\n          h3,\n          h4 {\n            color: #000000;\n            font-family: sans-serif;\n            font-weight: 400;\n            line-height: 1.4;\n            margin: 0;\n            margin-bottom: 30px;\n          }\n\n          h1 {\n            font-size: 35px;\n            font-weight: 300;\n            text-align: center;\n            text-transform: capitalize;\n          }\n\n          p,\n          ul,\n          ol {\n            font-family: sans-serif;\n            font-size: 14px;\n            font-weight: normal;\n            margin: 0;\n            margin-bottom: 15px;\n          }\n            p li,\n            ul li,\n            ol li {\n              list-style-position: inside;\n              margin-left: 5px;\n          }\n\n          a {\n            color: #3498db;\n            text-decoration: underline;\n          }\n\n          /* -------------------------------------\n              BUTTONS\n          ------------------------------------- */\n          .btn {\n            box-sizing: border-box;\n            width: 100%; }\n            .btn > tbody > tr > td {\n              padding-bottom: 15px; }\n            .btn table {\n              width: auto;\n          }\n            .btn table td {\n              background-color: #ffffff;\n              border-radius: 5px;\n              text-align: center;\n          }\n            .btn a {\n              background-color: #ffffff;\n              border: solid 1px #3498db;\n              border-radius: 5px;\n              box-sizing: border-box;\n              color: #3498db;\n              cursor: pointer;\n              display: inline-block;\n              font-size: 14px;\n              font-weight: bold;\n              margin: 0;\n              padding: 12px 25px;\n              text-decoration: none;\n              text-transform: capitalize;\n          }\n\n          .btn-primary table td {\n            background-color: #3498db;\n          }\n\n          .btn-primary a {\n            background-color: #3498db;\n            border-color: #3498db;\n            color: #ffffff;\n          }\n\n          /* -------------------------------------\n              OTHER STYLES THAT MIGHT BE USEFUL\n          ------------------------------------- */\n          .last {\n            margin-bottom: 0;\n          }\n\n          .first {\n            margin-top: 0;\n          }\n\n          .align-center {\n            text-align: center;\n          }\n\n          .align-right {\n            text-align: right;\n          }\n\n          .align-left {\n            text-align: left;\n          }\n\n          .clear {\n            clear: both;\n          }\n\n          .mt0 {\n            margin-top: 0;\n          }\n\n          .mb0 {\n            margin-bottom: 0;\n          }\n\n          .preheader {\n            color: transparent;\n            display: none;\n            height: 0;\n            max-height: 0;\n            max-width: 0;\n            opacity: 0;\n            overflow: hidden;\n            mso-hide: all;\n            visibility: hidden;\n            width: 0;\n          }\n\n          .powered-by a {\n            text-decoration: none;\n          }\n\n          hr {\n            border: 0;\n            border-bottom: 1px solid #f6f6f6;\n            margin: 20px 0;\n          }\n\n          /* -------------------------------------\n              RESPONSIVE AND MOBILE FRIENDLY STYLES\n          ------------------------------------- */\n          @media only screen and (max-width: 620px) {\n            table[class=body] h1 {\n              font-size: 28px !important;\n              margin-bottom: 10px !important;\n            }\n            table[class=body] p,\n            table[class=body] ul,\n            table[class=body] ol,\n            table[class=body] td,\n            table[class=body] span,\n            table[class=body] a {\n              font-size: 16px !important;\n            }\n            table[class=body] .wrapper,\n            table[class=body] .article {\n              padding: 10px !important;\n            }\n            table[class=body] .content {\n              padding: 0 !important;\n            }\n            table[class=body] .container {\n              padding: 0 !important;\n              width: 100% !important;\n            }\n            table[class=body] .main {\n              border-left-width: 0 !important;\n              border-radius: 0 !important;\n              border-right-width: 0 !important;\n            }\n            table[class=body] .btn table {\n              width: 100% !important;\n            }\n            table[class=body] .btn a {\n              width: 100% !important;\n            }\n            table[class=body] .img-responsive {\n              height: auto !important;\n              max-width: 100% !important;\n              width: auto !important;\n            }\n          }\n\n          /* -------------------------------------\n              PRESERVE THESE STYLES IN THE HEAD\n          ------------------------------------- */\n          @media all {\n            .ExternalClass {\n              width: 100%;\n            }\n            .ExternalClass,\n            .ExternalClass p,\n            .ExternalClass span,\n            .ExternalClass font,\n            .ExternalClass td,\n            .ExternalClass div {\n              line-height: 100%;\n            }\n            .apple-link a {\n              color: inherit !important;\n              font-family: inherit !important;\n              font-size: inherit !important;\n              font-weight: inherit !important;\n              line-height: inherit !important;\n              text-decoration: none !important;\n            }\n            #MessageViewBody a {\n              color: inherit;\n              text-decoration: none;\n              font-size: inherit;\n              font-family: inherit;\n              font-weight: inherit;\n              line-height: inherit;\n            }\n            .btn-primary table td:hover {\n              background-color: #34495e !important;\n            }\n            .btn-primary a:hover {\n              background-color: #34495e !important;\n              border-color: #34495e !important;\n            }\n          }\n\n        </style>\n      </head>\n      <body class="">\n        <span class="preheader">This is preheader text. Some clients will show this text as a preview.</span>\n        <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="body">\n          <tr>\n            <td>&nbsp;</td>\n            <td class="container">\n              <div class="content">\n\n                \x3c!-- START CENTERED WHITE CONTAINER --\x3e\n                <table role="presentation" class="main">\n\n                  \x3c!-- START MAIN CONTENT AREA --\x3e\n                  <tr>\n                    <td class="wrapper">\n                      <table role="presentation" border="0" cellpadding="0" cellspacing="0">\n                        <tr>\n                          <td>\n                            <p>Hi Imran,</p>\n                            <p>You got a new message from '.concat(t.name,'</p>\n                            <table role="presentation" border="0" cellpadding="0" cellspacing="0">\n                              <tbody>\n                                <tr>\n                                  <td align="left">\n                                    <table role="presentation" border="1" cellpadding="0" cellspacing="0" class="msg-details">\n                                      <tbody>\n                                        <tr>\n                                          <td>Name</td>\n                                          <td>').concat(t.name,"</td>\n                                        </tr>\n                                        <tr>\n                                          <td>Email</td>\n                                          <td>").concat(t.email,"</td>\n                                        </tr>\n                                        <tr>\n                                          <td>IP Address</td>\n                                          <td>").concat(t.ipAddress,"</td>\n                                        </tr>\n                                        <tr>\n                                          <td>Subject</td>\n                                          <td>").concat(t.subject,"</td>\n                                        </tr>\n                                        <tr>\n                                          <td>Message</td>\n                                          <td>").concat(t.messageBody,'</td>\n                                        </tr>\n                                      </tbody>\n                                    </table>\n                                  </td>\n                                </tr>\n                              </tbody>\n                            </table>\n                            <p>Hope you got some free time to respond. Don\'t ignore any emails.</p>\n                            <p>Have a great day!</p>\n                          </td>\n                        </tr>\n                      </table>\n                    </td>\n                  </tr>\n\n                \x3c!-- END MAIN CONTENT AREA --\x3e\n                </table>\n                \x3c!-- END CENTERED WHITE CONTAINER --\x3e\n\n                \x3c!-- START FOOTER --\x3e\n                <div class="footer">\n                  <table role="presentation" border="0" cellpadding="0" cellspacing="0">\n                    <tr>\n                      <td class="content-block">\n                        <span class="apple-link">From DreamsOfImran.in</span>\n                      </td>\n                    </tr>\n                    <tr>\n                      <td class="content-block powered-by">\n                        Designed by <a href="https://dreamsofimran.in">Imran Basha</a>.\n                      </td>\n                    </tr>\n                  </table>\n                </div>\n                \x3c!-- END FOOTER --\x3e\n\n              </div>\n            </td>\n            <td>&nbsp;</td>\n          </tr>\n        </table>\n      </body>\n    </html>\n    ');return n}}),at=et,st={name:"Contact",components:{AtomSpinner:P["a"]},data:function(){return{sending:!1,message:{name:"",email:"",ipAddress:"",subject:"",messageBody:""}}},mounted:function(){this.getIPAddress()},methods:{sendMessage:function(){var t=this;this.sending=!0;var n=at.generateEmailTemplate(this.message);Email.send({SecureToken:"6765f161-888e-4952-a20c-9bc64fa60755",To:"mail@dreamsofimran.in",From:"ibasha66@gmail.com",Subject:this.message.subject,Body:n}).then((function(n){"OK"===n?(t.$toast("Your Message Sent Successfully!"),t.clearForm(),t.sending=!1):(t.clearForm(),t.$toast.error("Oops! Something went wrong."),t.sending=!1)}))},getIPAddress:function(){var t=this;fetch("https://api.ipify.org?format=json").then((function(t){return t.json()})).then((function(n){var e=n.ip;t.message.ipAddress=e}))},clearForm:function(){this.message.name="",this.message.email="",this.message.subject="",this.message.messageBody=""}}},rt=st,ot=Object(d["a"])(rt,tt,nt,!1,null,null,null),it=ot.exports,lt=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"text-center",attrs:{id:"footer"}},[e("b-container",[e("div",{staticClass:"socials-media text-center"},[e("ul",{staticClass:"list-unstyled"},t._l(t.socialLinks,(function(n){return e("li",{key:n.id},[e("a",{attrs:{href:n.url,target:"_blank"}},[e("v-icon",{attrs:{medium:""}},[t._v("fab fa-"+t._s(n.name))])],1)])})),0)]),e("p",[t._v(" © Copyrights "),e("a",{attrs:{href:"javascript:void(0);"}},[e("b",[t._v("Imran Basha")])]),t._v(". All rights reserved. ")])])],1)},ct=[],dt={name:"Footer",data:function(){return{socialLinks:[{id:1,name:"facebook-square",url:"https://www.facebook.com/DreamsOfImran"},{id:2,name:"twitter",url:"https://twitter.com/DreamsOfImran"},{id:3,name:"instagram",url:"https://www.instagram.com/dreamsofimran"},{id:4,name:"github-square",url:"https://github.com/DreamsOfImran"},{id:5,name:"medium-m",url:"https://medium.com/@DreamsOfImran"},{id:6,name:"dev",url:"https://dev.to/dreamsofimran"}]}}},mt=dt,pt=Object(d["a"])(mt,lt,ct,!1,null,null,null),ut=pt.exports;L()(pt,{VIcon:z["a"]});var bt={name:"Home",components:{BreedingRhombusSpinner:P["b"],NavBar:C,Header:O,About:H,Gallery:W,Blogs:X,Contact:it,Footer:ut},data:function(){return{loading:!0}},mounted:function(){this.loader()},methods:{loader:function(){var t=this;setTimeout((function(){t.loading=!1}),4e3)}}},ft=bt,ht=Object(d["a"])(ft,f,h,!1,null,null,null),gt=ht.exports,vt=function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)},yt=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"notfound"}},[e("div",{staticClass:"notfound"},[e("div",{staticClass:"notfound-404"},[e("h1",[t._v("404")]),e("h2",[t._v("Page not found")])]),e("a",{attrs:{href:"/"}},[t._v("Go Back")])])])}],wt=(e("2583"),{}),xt=Object(d["a"])(wt,vt,yt,!1,null,"d6fa2b94",null),Ct=xt.exports;a["default"].use(u["a"]),a["default"].use(b["a"]);var _t=new u["a"]({mode:"history",routes:[{path:"/",component:gt},{path:"*",component:Ct}]}),Et=_t,kt=e("bc3a"),Tt=e.n(kt),jt=(e("15f5"),e("f309"));a["default"].use(jt["a"]);var Ot=new jt["a"]({icons:{iconfont:"fa"}}),It=e("fa87"),Nt=e.n(It),St=e("f13c"),At=e.n(St),Bt=e("3cf7"),Dt=e.n(Bt),Rt=e("2bdd"),Lt=e.n(Rt);e("da96");a["default"].use(r["default"]),a["default"].use(At.a),a["default"].use(Dt.a),a["default"].use(Nt.a),a["default"].use(Lt.a,{config:{id:"UA-157840704-1"}}),a["default"].prototype.$http=Tt.a,a["default"].config.productionTip=!1,new a["default"]({router:Et,vuetify:Ot,render:function(t){return t(p)}}).$mount("#app")},6290:function(t,n,e){}});
//# sourceMappingURL=app.368355cc.js.map