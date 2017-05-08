"use strict";define("dummy/app",["exports","ember","dummy/resolver","ember-load-initializers","dummy/config/environment"],function(e,t,l,r,n){t.default.MODEL_FACTORY_INJECTIONS=!0;var a=t.default.Application.extend({modulePrefix:n.default.modulePrefix,podModulePrefix:n.default.podModulePrefix,Resolver:l.default});(0,r.default)(a,n.default.modulePrefix),e.default=a}),define("dummy/components/-leadlight-axis",["exports","ember-leadlight/components/-leadlight-axis/component"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/-leadlight-source",["exports","ember-leadlight/components/-leadlight-source/component"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/leadlight-layout",["exports","ember-leadlight/components/leadlight-layout/component"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/controllers/application",["exports","ember","faker","ember-leadlight"],function(e,t,l,r){var n=t.default.Controller,a=t.default.A,u=a(Array.from(Array(20),function(){return{title:l.system.commonFileName(),content:l.lorem.paragraphs(5,"\n\n")}})),o=[[1,u[0].title,u[1].title,u[4].title,u[5].title],[[0,u[2].title],[0,u[3].title]]];e.default=n.extend({documents:u,panes:(0,r.deserialize)(o,function(e){return u.findBy("title",e)}),actions:{layoutChanged:function(e){this.set("panes",e)}}})}),define("dummy/helpers/-leadlight-path",["exports","ember-leadlight/helpers/-leadlight-path"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"panePath",{enumerable:!0,get:function(){return t.panePath}})}),define("dummy/helpers/and",["exports","ember","ember-truth-helpers/helpers/and"],function(e,t,l){var r=null;t.default.Helper?r=t.default.Helper.helper(l.andHelper):t.default.HTMLBars.makeBoundHelper&&(r=t.default.HTMLBars.makeBoundHelper(l.andHelper)),e.default=r}),define("dummy/helpers/app-version",["exports","ember","dummy/config/environment"],function(e,t,l){function r(){return n}e.appVersion=r;var n=l.default.APP.version;e.default=t.default.Helper.helper(r)}),define("dummy/helpers/eq",["exports","ember","ember-truth-helpers/helpers/equal"],function(e,t,l){var r=null;t.default.Helper?r=t.default.Helper.helper(l.equalHelper):t.default.HTMLBars.makeBoundHelper&&(r=t.default.HTMLBars.makeBoundHelper(l.equalHelper)),e.default=r}),define("dummy/helpers/gt",["exports","ember","ember-truth-helpers/helpers/gt"],function(e,t,l){var r=null;t.default.Helper?r=t.default.Helper.helper(l.gtHelper):t.default.HTMLBars.makeBoundHelper&&(r=t.default.HTMLBars.makeBoundHelper(l.gtHelper)),e.default=r}),define("dummy/helpers/gte",["exports","ember","ember-truth-helpers/helpers/gte"],function(e,t,l){var r=null;t.default.Helper?r=t.default.Helper.helper(l.gteHelper):t.default.HTMLBars.makeBoundHelper&&(r=t.default.HTMLBars.makeBoundHelper(l.gteHelper)),e.default=r}),define("dummy/helpers/is-array",["exports","ember","ember-truth-helpers/helpers/is-array"],function(e,t,l){var r=null;t.default.Helper?r=t.default.Helper.helper(l.isArrayHelper):t.default.HTMLBars.makeBoundHelper&&(r=t.default.HTMLBars.makeBoundHelper(l.isArrayHelper)),e.default=r}),define("dummy/helpers/local-class",["exports","ember-css-modules/helpers/local-class"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"localClass",{enumerable:!0,get:function(){return t.localClass}})}),define("dummy/helpers/lt",["exports","ember","ember-truth-helpers/helpers/lt"],function(e,t,l){var r=null;t.default.Helper?r=t.default.Helper.helper(l.ltHelper):t.default.HTMLBars.makeBoundHelper&&(r=t.default.HTMLBars.makeBoundHelper(l.ltHelper)),e.default=r}),define("dummy/helpers/lte",["exports","ember","ember-truth-helpers/helpers/lte"],function(e,t,l){var r=null;t.default.Helper?r=t.default.Helper.helper(l.lteHelper):t.default.HTMLBars.makeBoundHelper&&(r=t.default.HTMLBars.makeBoundHelper(l.lteHelper)),e.default=r}),define("dummy/helpers/not-eq",["exports","ember","ember-truth-helpers/helpers/not-equal"],function(e,t,l){var r=null;t.default.Helper?r=t.default.Helper.helper(l.notEqualHelper):t.default.HTMLBars.makeBoundHelper&&(r=t.default.HTMLBars.makeBoundHelper(l.notEqualHelper)),e.default=r}),define("dummy/helpers/not",["exports","ember","ember-truth-helpers/helpers/not"],function(e,t,l){var r=null;t.default.Helper?r=t.default.Helper.helper(l.notHelper):t.default.HTMLBars.makeBoundHelper&&(r=t.default.HTMLBars.makeBoundHelper(l.notHelper)),e.default=r}),define("dummy/helpers/or",["exports","ember","ember-truth-helpers/helpers/or"],function(e,t,l){var r=null;t.default.Helper?r=t.default.Helper.helper(l.orHelper):t.default.HTMLBars.makeBoundHelper&&(r=t.default.HTMLBars.makeBoundHelper(l.orHelper)),e.default=r}),define("dummy/helpers/xor",["exports","ember","ember-truth-helpers/helpers/xor"],function(e,t,l){var r=null;t.default.Helper?r=t.default.Helper.helper(l.xorHelper):t.default.HTMLBars.makeBoundHelper&&(r=t.default.HTMLBars.makeBoundHelper(l.xorHelper)),e.default=r}),define("dummy/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","dummy/config/environment"],function(e,t,l){var r=l.default.APP,n=r.name,a=r.version;e.default={name:"App Version",initialize:(0,t.default)(n,a)}}),define("dummy/initializers/container-debug-adapter",["exports","ember-resolver/container-debug-adapter"],function(e,t){e.default={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0];e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("dummy/initializers/ember-css-modules",["exports","ember-css-modules/initializers/ember-css-modules"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"initialize",{enumerable:!0,get:function(){return t.initialize}})}),define("dummy/initializers/export-application-global",["exports","ember","dummy/config/environment"],function(e,t,l){function r(){var e=arguments[1]||arguments[0];if(l.default.exportApplicationGlobal!==!1){var r;if("undefined"!=typeof window)r=window;else if("undefined"!=typeof global)r=global;else{if("undefined"==typeof self)return;r=self}var n,a=l.default.exportApplicationGlobal;n="string"==typeof a?a:t.default.String.classify(l.default.modulePrefix),r[n]||(r[n]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete r[n]}}))}}e.initialize=r,e.default={name:"export-application-global",initialize:r}}),define("dummy/initializers/truth-helpers",["exports","ember","ember-truth-helpers/utils/register-helper","ember-truth-helpers/helpers/and","ember-truth-helpers/helpers/or","ember-truth-helpers/helpers/equal","ember-truth-helpers/helpers/not","ember-truth-helpers/helpers/is-array","ember-truth-helpers/helpers/not-equal","ember-truth-helpers/helpers/gt","ember-truth-helpers/helpers/gte","ember-truth-helpers/helpers/lt","ember-truth-helpers/helpers/lte"],function(e,t,l,r,n,a,u,o,s,i,d,p,m){function f(){t.default.Helper||((0,l.registerHelper)("and",r.andHelper),(0,l.registerHelper)("or",n.orHelper),(0,l.registerHelper)("eq",a.equalHelper),(0,l.registerHelper)("not",u.notHelper),(0,l.registerHelper)("is-array",o.isArrayHelper),(0,l.registerHelper)("not-eq",s.notEqualHelper),(0,l.registerHelper)("gt",i.gtHelper),(0,l.registerHelper)("gte",d.gteHelper),(0,l.registerHelper)("lt",p.ltHelper),(0,l.registerHelper)("lte",m.lteHelper))}e.initialize=f,e.default={name:"truth-helpers",initialize:f}}),define("dummy/resolver",["exports","ember-resolver"],function(e,t){e.default=t.default}),define("dummy/router",["exports","ember","dummy/config/environment"],function(e,t,l){var r=t.default.Router.extend({location:l.default.locationType,rootURL:l.default.rootURL});r.map(function(){}),e.default=r}),define("dummy/styles/app",["exports"],function(e){e.default={}}),define("dummy/styles/application",["exports"],function(e){e.default={"--border-color":"#222","--background-color":"#334","--highlight-color":"#36e","main-layout":"_main-layout_15x03s",sidebar:"_sidebar_15x03s","document-root":"_document-root_15x03s",document:"_document_15x03s","tab-bar":"_tab-bar_15x03s",tab:"_tab_15x03s",active:"_active_15x03s","tab-title":"_tab-title_15x03s","close-message":"_close-message_15x03s",content:"_content_15x03s"}}),define("dummy/templates/application",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"Hf3Udove",block:'{"statements":[["block",["leadlight-layout"],null,[["panes","update","class"],[["get",["panes"]],["helper",["action"],[["get",[null]],"layoutChanged"],null],["helper",["concat"],[["helper",["unbound"],[["get",["__styles__","main-layout"]]],null]],null]]],7]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","        "],["open-element","div",[]],["dynamic-attr","onclick",["helper",["action"],[["get",[null]],["get",["pane","close"]]],null],null],["dynamic-attr","class",["concat",[["helper",["unbound"],[["get",["__styles__","close-message"]]],null]]]],["flush-element"],["text","(Click to Close Pane)"],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","        "],["open-element","div",[]],["dynamic-attr","class",["concat",[["helper",["unbound"],[["get",["__styles__","content"]]],null]]]],["flush-element"],["append",["unknown",["pane","activeDocument","content"]],false],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","            "],["open-element","div",[]],["dynamic-attr","class",["concat",[["helper",["unbound"],[["get",["__styles__","tab-title"]]],null]]]],["flush-element"],["append",["unknown",["document","title"]],false],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["block",["pane","source"],null,[["document","title","class"],[["get",["document"]],["get",["document","title"]],["helper",["concat"],[["helper",["local-class"],[["helper",["concat"],["tab",["helper",["if"],[["helper",["eq"],[["get",["document"]],["get",["pane","activeDocument"]]],null]," active"],null]],null]],[["from"],[["helper",["unbound"],[["get",["__styles__"]]],null]]]]],null]]],2]],"locals":["document"]},{"statements":[["text","    "],["open-element","div",[]],["dynamic-attr","class",["concat",[["helper",["unbound"],[["get",["__styles__","document"]]],null]]]],["flush-element"],["text","\\n      "],["open-element","div",[]],["dynamic-attr","class",["concat",[["helper",["unbound"],[["get",["__styles__","tab-bar"]]],null]]]],["flush-element"],["text","\\n"],["block",["each"],[["get",["pane","documents"]]],null,3],["text","      "],["close-element"],["text","\\n\\n"],["block",["if"],[["get",["pane","activeDocument"]]],null,1,0],["text","    "],["close-element"],["text","\\n"]],"locals":["pane"]},{"statements":[["text","        "],["append",["unknown",["document","title"]],false],["text","\\n"]],"locals":[]},{"statements":[["block",["layout","source"],null,[["document","title"],[["get",["document"]],["get",["document","title"]]]],5]],"locals":["document"]},{"statements":[["text","  "],["open-element","div",[]],["dynamic-attr","class",["concat",[["helper",["unbound"],[["get",["__styles__","sidebar"]]],null]]]],["flush-element"],["text","\\n"],["block",["each"],[["get",["documents"]]],[["key"],["title"]],6],["text","  "],["close-element"],["text","\\n\\n"],["block",["layout","panes"],null,[["class"],[["helper",["concat"],[["helper",["unbound"],[["get",["__styles__","document-root"]]],null]],null]]],4]],"locals":["layout"]}],"hasPartials":false}',meta:{moduleName:"dummy/templates/application.hbs"}})}),define("dummy/config/environment",["ember"],function(e){var t="dummy";try{var l=t+"/config/environment",r=document.querySelector('meta[name="'+l+'"]').getAttribute("content"),n=JSON.parse(unescape(r)),a={default:n};return Object.defineProperty(a,"__esModule",{value:!0}),a}catch(e){throw new Error('Could not read config from meta tag with name "'+l+'".')}}),runningTests||require("dummy/app").default.create({name:"ember-leadlight",version:"0.1.0+b70e8d78"});