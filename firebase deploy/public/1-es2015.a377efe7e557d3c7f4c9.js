(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"26NW":function(l,n,t){"use strict";var e=this&&this.__decorate||function(l,n,t,e){var u,o=arguments.length,r=o<3?n:null===e?e=Object.getOwnPropertyDescriptor(n,t):e;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(l,n,t,e);else for(var i=l.length-1;i>=0;i--)(u=l[i])&&(r=(o<3?u(r):o>3?u(n,t,r):u(n,t))||r);return o>3&&r&&Object.defineProperty(n,t,r),r},u=this&&this.__metadata||function(l,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(l,n)},o=t("8Y7J"),r=t("WzYf"),i=function(){function l(l){this.differs=l,this.carouselClasses="",this.options={}}return Object.defineProperty(l.prototype,"items",{set:function(l){this._items=l,l&&!this.differ&&(this.differ=this.differs.find(l).create(null))},enumerable:!0,configurable:!0}),l.prototype.ngDoCheck=function(){if(this.differ){var l=this.differ.diff(this._items);if(l){var n=!1,t=function(){n=!0};l.forEachAddedItem(t),l.forEachMovedItem(t),l.forEachRemovedItem(t),n&&this.reInit()}}},l.prototype.reInit=function(){var l=this;this.$owlChild.$owl&&this.$owlChild.$owl.css("display","none"),setTimeout((function(){if(l.$owlChild.destroyOwl(),l.$owlChild.$owl){var n=l._items&&l._items.length;n&&n<=l.$owlChild.currentSlideIndex&&(l.$owlChild.currentSlideIndex=n),l.$owlChild.$owl.css("display","block")}l.$owlChild.initOwl()}),0)},l.prototype.refresh=function(){this.trigger("refresh.owl.carousel")},l.prototype.next=function(l){this.trigger("next.owl.carousel",l)},l.prototype.previous=function(l){this.trigger("prev.owl.carousel",l)},l.prototype.to=function(l){this.trigger("to.owl.carousel",l)},l.prototype.trigger=function(l,n){this.$owlChild.trigger(l,n)},e([o.ViewChild("owl"),u("design:type",r.OwlChild)],l.prototype,"$owlChild",void 0),e([o.Input(),u("design:type",Object)],l.prototype,"carouselClasses",void 0),e([o.Input(),u("design:type",Object)],l.prototype,"options",void 0),e([o.Input(),u("design:type",Array),u("design:paramtypes",[Array])],l.prototype,"items",null),e([o.Component({selector:"owl-carousel",template:'<owl-carousel-child #owl [ngClass]="carouselClasses" [options]="options" ><ng-content></ng-content></owl-carousel-child>'}),u("design:paramtypes",[o.IterableDiffers])],l)}();n.OwlCarousel=i},"6jz6":function(l,n,t){"use strict";var e=t("8Y7J"),u=t("iInd"),o=t("SVse");t("LmEr"),t.d(n,"a",(function(){return r})),t.d(n,"b",(function(){return i}));var r=e["\u0275crt"]({encapsulation:0,styles:[[".bg-black[_ngcontent-%COMP%]{background-color:#000;border-radius:60px 60px 0 0;overflow:hidden}.foot-img[_ngcontent-%COMP%]{width:100%;height:260px;-o-object-fit:cover;object-fit:cover}.w-rt-80[_ngcontent-%COMP%]{width:80%}.w-rt-80[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:30px;color:#fff}.w-lt-80[_ngcontent-%COMP%]{width:80%}.w-lt-80[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{color:#fff;font-size:4 0}.w-lt-80[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{color:#fff}.socialicons[_ngcontent-%COMP%]{display:block;background-color:#fff;width:60px;padding:16px;border-radius:100px;transition:.8s all ease}.socialicons[_ngcontent-%COMP%]:hover{background-color:var(--prime)}@media (max-width:1600px){.w-lt-80[_ngcontent-%COMP%], .w-rt-80[_ngcontent-%COMP%]{width:90%}}"]],data:{}});function i(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,39,"section",[],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,38,"div",[["class","bg-black"]],null,null,null,null,null)),(l()(),e["\u0275eld"](2,0,null,null,11,"div",[["class","row mx-0"]],null,null,null,null,null)),(l()(),e["\u0275eld"](3,0,null,null,1,"div",[["class","col-md-6 px-0"]],null,null,null,null,null)),(l()(),e["\u0275eld"](4,0,null,null,0,"iframe",[["allowfullscreen",""],["aria-hidden","false"],["class","foot-img"],["frameborder","0"],["src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62800.08111695696!2d76.29758779964331!3d10.341478760023936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0802012ad4535d%3A0x124f8453253d1195!2sPotta%20-%20Elanjipra%20Rd%2C%20Elanjipra%2C%20Kerala%20680721!5e0!3m2!1sen!2sin!4v1598520271393!5m2!1sen!2sin"],["style","border:0;"],["tabindex","0"]],null,null,null,null,null)),(l()(),e["\u0275eld"](5,0,null,null,8,"div",[["class","col-md-6 px-0 d-flex align-items-center"]],null,null,null,null,null)),(l()(),e["\u0275eld"](6,0,null,null,7,"div",[["class","w-rt-80 px-5 py-4"]],null,null,null,null,null)),(l()(),e["\u0275eld"](7,0,null,null,1,"h3",[["class","mb-3"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Discuss how we can get you future-ready!"])),(l()(),e["\u0275eld"](9,0,null,null,4,"div",[["class","animated-button2"]],null,null,null,null,null)),(l()(),e["\u0275eld"](10,0,null,null,3,"a",[["routerLink","/contact"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(l,n,t){var u=!0;return"click"===n&&(u=!1!==e["\u0275nov"](l,11).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&u),u}),null,null)),e["\u0275did"](11,671744,null,0,u.m,[u.l,u.a,o.LocationStrategy],{routerLink:[0,"routerLink"]},null),(l()(),e["\u0275eld"](12,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Contact Us"])),(l()(),e["\u0275eld"](14,0,null,null,23,"div",[["class","row mx-0"]],null,null,null,null,null)),(l()(),e["\u0275eld"](15,0,null,null,14,"div",[["class","col-md-6 px-0"]],null,null,null,null,null)),(l()(),e["\u0275eld"](16,0,null,null,13,"div",[["class","w-lt-80 ml-md-auto text-md-right px-5 py-5"]],null,null,null,null,null)),(l()(),e["\u0275eld"](17,0,null,null,1,"span",[["class","material-icons"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["location_on"])),(l()(),e["\u0275eld"](19,0,null,null,10,"h5",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["LC Maze Solutions"])),(l()(),e["\u0275eld"](21,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Elinjipra P.O,Chalakudy"])),(l()(),e["\u0275eld"](23,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Pin: 680721"])),(l()(),e["\u0275eld"](25,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e["\u0275eld"](26,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["info@lcmaze.com"])),(l()(),e["\u0275eld"](28,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["+91 9747877576"])),(l()(),e["\u0275eld"](30,0,null,null,7,"div",[["class","col-md-6 px-0 d-flex align-items-center"]],null,null,null,null,null)),(l()(),e["\u0275eld"](31,0,null,null,6,"div",[["class","w-rt-80 px-5 pt-5 d-flex"]],null,null,null,null,null)),(l()(),e["\u0275eld"](32,0,null,null,1,"a",[["class","socialicons mr-md-4"],["href","https://www.facebook.com/lcmaze"],["target","_blank"]],null,null,null,null,null)),(l()(),e["\u0275eld"](33,0,null,null,0,"img",[["alt",""],["src","assets/images/socialicons/facebook.svg"]],null,null,null,null,null)),(l()(),e["\u0275eld"](34,0,null,null,1,"a",[["class","socialicons mr-md-4"],["href","https://www.instagram.com/lcmaze/"],["target","_blank"]],null,null,null,null,null)),(l()(),e["\u0275eld"](35,0,null,null,0,"img",[["alt",""],["src","assets/images/socialicons/instagram.svg"]],null,null,null,null,null)),(l()(),e["\u0275eld"](36,0,null,null,1,"a",[["class","socialicons mr-md-4"],["href","https://www.youtube.com/channel/UCDHWHfaJGqGkMSEcv372rRQ"],["target","_blank"]],null,null,null,null,null)),(l()(),e["\u0275eld"](37,0,null,null,0,"img",[["alt",""],["src","assets/images/socialicons/youtube.svg"]],null,null,null,null,null)),(l()(),e["\u0275eld"](38,0,null,null,1,"div",[["class","pt-3 pb-4 text-light text-center"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\xa9 LC Maze 2020. All Rights Reserved"]))],(function(l,n){l(n,11,0,"/contact")}),(function(l,n){l(n,10,0,e["\u0275nov"](n,11).target,e["\u0275nov"](n,11).href)}))}},"7ldv":function(l,n,t){"use strict";t.d(n,"a",(function(){return e}));class e{constructor(){}ngOnInit(){}}},LmEr:function(l,n,t){"use strict";t.d(n,"a",(function(){return e}));class e{constructor(){}ngOnInit(){}}},Lxe2:function(l,n,t){"use strict";var e=t("8Y7J");t("7ldv"),t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return o}));var u=e["\u0275crt"]({encapsulation:0,styles:[["h2[_ngcontent-%COMP%]{color:#3d3d3d;font-weight:300;font-size:40px}h1[_ngcontent-%COMP%]{font-weight:700;font-size:64px;color:var(--prime)}.line[_ngcontent-%COMP%]{width:80px;height:3px;background-color:#3d3d3d}@media (max-width:1600px){h2[_ngcontent-%COMP%]{font-size:26px}h1[_ngcontent-%COMP%]{font-size:45px}}"]],data:{}});function o(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"h2",[["class","mb-1"]],null,null,null,null,null)),(l()(),e["\u0275ted"](1,null,["",""])),(l()(),e["\u0275eld"](2,0,null,null,1,"h1",[["class","mb-3"]],null,null,null,null,null)),(l()(),e["\u0275ted"](3,null,["",""])),(l()(),e["\u0275eld"](4,0,null,null,0,"div",[["class","line"]],null,null,null,null,null))],null,(function(l,n){var t=n.component;l(n,1,0,t.small),l(n,3,0,t.big)}))}},RCrd:function(l,n,t){"use strict";var e=t("8Y7J"),u=t("SVse"),o=t("iInd");t("hrlM"),t.d(n,"a",(function(){return r})),t.d(n,"b",(function(){return i}));var r=e["\u0275crt"]({encapsulation:0,styles:[[".navbar[_ngcontent-%COMP%]{position:absolute;top:0;width:100%;z-index:100}.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:220px}.navbar-toggler[_ngcontent-%COMP%]:focus{outline:0}.rectangle[_ngcontent-%COMP%]{width:400px;height:400px;background-color:var(--prime);border-radius:60px;position:absolute;z-index:99;top:-275px;left:-45px;transform:rotate(12deg)}.nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]{font-size:16px;color:#fff;font-weight:500;padding:30px 20px;transition:.2s ease all;text-transform:uppercase}.nav-item[_ngcontent-%COMP%]   .dark[_ngcontent-%COMP%]{color:#3d3d3d}.nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover{color:var(--prime)}@media (max-width:991.98px){.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:200px}.rectangle[_ngcontent-%COMP%]{top:-310px;left:-125px}.navbar-nav[_ngcontent-%COMP%]{background-color:var(--prime2);width:100%}.nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]{color:#fff;padding:14px 20px}.nav-item[_ngcontent-%COMP%]   .dark[_ngcontent-%COMP%]{color:#fff}.nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover{color:#000}}"]],data:{}});function i(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,45,"nav",[["class","navbar navbar-expand-lg p-0 pt-3"]],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,1,"a",[["class","logo ml-3 ml-lg-5"],["href","index.html"]],null,null,null,null,null)),(l()(),e["\u0275eld"](2,0,null,null,0,"img",[["alt",""],["src","assets/images/logo-white.png"]],null,null,null,null,null)),(l()(),e["\u0275eld"](3,0,null,null,5,"button",[["class","navbar-toggler p-0 mr-3"],["data-target","#navbarSupportedContent"],["data-toggle","collapse"],["type","button"]],null,null,null,null,null)),(l()(),e["\u0275eld"](4,0,null,null,4,"span",[["class","material-icons"]],null,null,null,null,null)),e["\u0275prd"](512,null,u["\u0275NgStyleImpl"],u["\u0275NgStyleR2Impl"],[e.ElementRef,e.KeyValueDiffers,e.Renderer2]),e["\u0275did"](6,278528,null,0,u.NgStyle,[u["\u0275NgStyleImpl"]],{ngStyle:[0,"ngStyle"]},null),e["\u0275pod"](7,{color:0}),(l()(),e["\u0275ted"](-1,null,["menu"])),(l()(),e["\u0275eld"](9,0,null,null,36,"div",[["class","collapse navbar-collapse mt-3 mt-lg-0 mr-lg-5"],["id","navbarSupportedContent"]],null,null,null,null,null)),(l()(),e["\u0275eld"](10,0,null,null,35,"ul",[["class","navbar-nav ml-auto"]],null,null,null,null,null)),(l()(),e["\u0275eld"](11,0,null,null,6,"li",[["class","nav-item"]],null,null,null,null,null)),(l()(),e["\u0275eld"](12,0,null,null,5,"a",[["class","nav-link"],["routerLink","/"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(l,n,t){var u=!0;return"click"===n&&(u=!1!==e["\u0275nov"](l,16).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&u),u}),null,null)),e["\u0275prd"](512,null,u["\u0275NgClassImpl"],u["\u0275NgClassR2Impl"],[e.IterableDiffers,e.KeyValueDiffers,e.ElementRef,e.Renderer2]),e["\u0275did"](14,278528,null,0,u.NgClass,[u["\u0275NgClassImpl"]],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e["\u0275pod"](15,{dark:0}),e["\u0275did"](16,671744,null,0,o.m,[o.l,o.a,u.LocationStrategy],{routerLink:[0,"routerLink"]},null),(l()(),e["\u0275ted"](-1,null,["Home"])),(l()(),e["\u0275eld"](18,0,null,null,6,"li",[["class","nav-item"]],null,null,null,null,null)),(l()(),e["\u0275eld"](19,0,null,null,5,"a",[["class","nav-link"],["routerLink","/about"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(l,n,t){var u=!0;return"click"===n&&(u=!1!==e["\u0275nov"](l,23).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&u),u}),null,null)),e["\u0275prd"](512,null,u["\u0275NgClassImpl"],u["\u0275NgClassR2Impl"],[e.IterableDiffers,e.KeyValueDiffers,e.ElementRef,e.Renderer2]),e["\u0275did"](21,278528,null,0,u.NgClass,[u["\u0275NgClassImpl"]],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e["\u0275pod"](22,{dark:0}),e["\u0275did"](23,671744,null,0,o.m,[o.l,o.a,u.LocationStrategy],{routerLink:[0,"routerLink"]},null),(l()(),e["\u0275ted"](-1,null,["About Us"])),(l()(),e["\u0275eld"](25,0,null,null,6,"li",[["class","nav-item"]],null,null,null,null,null)),(l()(),e["\u0275eld"](26,0,null,null,5,"a",[["class","nav-link"],["routerLink","/services"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(l,n,t){var u=!0;return"click"===n&&(u=!1!==e["\u0275nov"](l,30).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&u),u}),null,null)),e["\u0275prd"](512,null,u["\u0275NgClassImpl"],u["\u0275NgClassR2Impl"],[e.IterableDiffers,e.KeyValueDiffers,e.ElementRef,e.Renderer2]),e["\u0275did"](28,278528,null,0,u.NgClass,[u["\u0275NgClassImpl"]],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e["\u0275pod"](29,{dark:0}),e["\u0275did"](30,671744,null,0,o.m,[o.l,o.a,u.LocationStrategy],{routerLink:[0,"routerLink"]},null),(l()(),e["\u0275ted"](-1,null,["Services"])),(l()(),e["\u0275eld"](32,0,null,null,6,"li",[["class","nav-item"]],null,null,null,null,null)),(l()(),e["\u0275eld"](33,0,null,null,5,"a",[["class","nav-link"],["routerLink","/portfolio"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(l,n,t){var u=!0;return"click"===n&&(u=!1!==e["\u0275nov"](l,37).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&u),u}),null,null)),e["\u0275prd"](512,null,u["\u0275NgClassImpl"],u["\u0275NgClassR2Impl"],[e.IterableDiffers,e.KeyValueDiffers,e.ElementRef,e.Renderer2]),e["\u0275did"](35,278528,null,0,u.NgClass,[u["\u0275NgClassImpl"]],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e["\u0275pod"](36,{dark:0}),e["\u0275did"](37,671744,null,0,o.m,[o.l,o.a,u.LocationStrategy],{routerLink:[0,"routerLink"]},null),(l()(),e["\u0275ted"](-1,null,["Portfolio"])),(l()(),e["\u0275eld"](39,0,null,null,6,"li",[["class","nav-item"]],null,null,null,null,null)),(l()(),e["\u0275eld"](40,0,null,null,5,"a",[["class","nav-link"],["routerLink","/contact"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(l,n,t){var u=!0;return"click"===n&&(u=!1!==e["\u0275nov"](l,44).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&u),u}),null,null)),e["\u0275prd"](512,null,u["\u0275NgClassImpl"],u["\u0275NgClassR2Impl"],[e.IterableDiffers,e.KeyValueDiffers,e.ElementRef,e.Renderer2]),e["\u0275did"](42,278528,null,0,u.NgClass,[u["\u0275NgClassImpl"]],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e["\u0275pod"](43,{dark:0}),e["\u0275did"](44,671744,null,0,o.m,[o.l,o.a,u.LocationStrategy],{routerLink:[0,"routerLink"]},null),(l()(),e["\u0275ted"](-1,null,["Contact"])),(l()(),e["\u0275eld"](46,0,null,null,0,"div",[["class","rectangle"]],null,null,null,null,null))],(function(l,n){var t=n.component,e=l(n,7,0,!1===t.navbar?"#fff":"#3d3d3d");l(n,6,0,e);var u=l(n,15,0,!0===t.navbar);l(n,14,0,"nav-link",u),l(n,16,0,"/");var o=l(n,22,0,!0===t.navbar);l(n,21,0,"nav-link",o),l(n,23,0,"/about");var r=l(n,29,0,!0===t.navbar);l(n,28,0,"nav-link",r),l(n,30,0,"/services");var i=l(n,36,0,!0===t.navbar);l(n,35,0,"nav-link",i),l(n,37,0,"/portfolio");var a=l(n,43,0,!0===t.navbar);l(n,42,0,"nav-link",a),l(n,44,0,"/contact")}),(function(l,n){l(n,12,0,e["\u0275nov"](n,16).target,e["\u0275nov"](n,16).href),l(n,19,0,e["\u0275nov"](n,23).target,e["\u0275nov"](n,23).href),l(n,26,0,e["\u0275nov"](n,30).target,e["\u0275nov"](n,30).href),l(n,33,0,e["\u0275nov"](n,37).target,e["\u0275nov"](n,37).href),l(n,40,0,e["\u0275nov"](n,44).target,e["\u0275nov"](n,44).href)}))}},WzYf:function(l,n,t){"use strict";var e=this&&this.__decorate||function(l,n,t,e){var u,o=arguments.length,r=o<3?n:null===e?e=Object.getOwnPropertyDescriptor(n,t):e;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(l,n,t,e);else for(var i=l.length-1;i>=0;i--)(u=l[i])&&(r=(o<3?u(r):o>3?u(n,t,r):u(n,t))||r);return o>3&&r&&Object.defineProperty(n,t,r),r},u=this&&this.__metadata||function(l,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(l,n)},o=t("8Y7J"),r=function(){function l(l){this.el=l,this.owlClass=!0,this.options={},"undefined"==typeof $&&"undefined"!=typeof jQuery&&($=jQuery)}return l.prototype.ngOnInit=function(){"undefined"!=typeof window&&$&&"function"==typeof $.fn.owlCarousel&&(this.$owl=$(this.el.nativeElement))},l.prototype.ngAfterViewInit=function(){this.initOwl()},l.prototype.initOwl=function(){var l=this;if(this.$owl){var n={};Object.assign(n,this.options),this.currentSlideIndex&&(n.startPosition=this.currentSlideIndex),this.$owl.owlCarousel(n),this.$owl.on("changed.owl.carousel",(function(n){l.currentSlideIndex=n.item.index}))}},l.prototype.trigger=function(l,n){this.$owl&&this.$owl.trigger(l,n)},l.prototype.ngOnDestroy=function(){this.destroyOwl(),delete this.$owl},l.prototype.destroyOwl=function(){this.$owl&&this.$owl.trigger("destroy.owl.carousel").removeClass("owl-loaded owl-hidden").find(".owl-stage:empty, .owl-item:empty").remove()},e([o.HostBinding("class.owl-carousel"),u("design:type",Object)],l.prototype,"owlClass",void 0),e([o.Input(),u("design:type",Object)],l.prototype,"options",void 0),e([o.Component({selector:"owl-carousel-child",template:"<ng-content></ng-content>"}),u("design:paramtypes",[o.ElementRef])],l)}();n.OwlChild=r},bjCr:function(l,n,t){"use strict";var e=this&&this.__decorate||function(l,n,t,e){var u,o=arguments.length,r=o<3?n:null===e?e=Object.getOwnPropertyDescriptor(n,t):e;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(l,n,t,e);else for(var i=l.length-1;i>=0;i--)(u=l[i])&&(r=(o<3?u(r):o>3?u(n,t,r):u(n,t))||r);return o>3&&r&&Object.defineProperty(n,t,r),r},u=this&&this.__metadata||function(l,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(l,n)},o=t("8Y7J"),r=t("SVse"),i=t("26NW"),a=t("WzYf");!function(l){for(var t in l)n.hasOwnProperty(t)||(n[t]=l[t])}(t("26NW"));var s=e([o.NgModule({imports:[r.CommonModule],declarations:[i.OwlCarousel,a.OwlChild],exports:[i.OwlCarousel]}),u("design:paramtypes",[])],(function(){}));n.OwlModule=s},hrlM:function(l,n,t){"use strict";t.d(n,"a",(function(){return e}));class e{constructor(){this.navbar=!0}ngOnInit(){}}},j1ZV:function(l,n,t){"use strict";t.d(n,"a",(function(){return e}));class e{}}}]);