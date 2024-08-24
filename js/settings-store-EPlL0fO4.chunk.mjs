(function(){"use strict";try{if(typeof document<"u"){var t=document.createElement("style");t.appendChild(document.createTextNode(".material-design-icon[data-v-251fe753]{display:flex;align-self:center;justify-self:center;align-items:center;justify-content:center}.settings-section[data-v-251fe753]{display:block;margin-bottom:auto;padding:30px}.settings-section[data-v-251fe753]:not(:last-child){border-bottom:1px solid var(--color-border)}.settings-section--limit-width>*[data-v-251fe753]{max-width:900px}.settings-section__name[data-v-251fe753]{display:inline-flex;align-items:center;justify-content:center;font-size:20px;font-weight:700;max-width:900px}.settings-section__info[data-v-251fe753]{display:flex;align-items:center;justify-content:center;width:var(--default-clickable-area);height:var(--default-clickable-area);margin:calc((var(--default-clickable-area) - 16px) / 2 * -1);margin-left:0;color:var(--color-text-maxcontrast)}.settings-section__info[data-v-251fe753]:hover,.settings-section__info[data-v-251fe753]:focus,.settings-section__info[data-v-251fe753]:active{color:var(--color-main-text)}.settings-section__desc[data-v-251fe753]{margin-top:-.2em;margin-bottom:1em;color:var(--color-text-maxcontrast);max-width:900px}.checkbox-radio-switch[data-v-a72a40ed]{display:flex}.checkbox-radio-switch__input[data-v-a72a40ed]{position:fixed;z-index:-1;top:-5000px;left:-5000px;opacity:0}.checkbox-radio-switch__label[data-v-a72a40ed]{display:flex;align-items:center;-webkit-user-select:none;user-select:none;height:32px;width:32px;border-radius:44px;padding:0;margin:2px}.checkbox-radio-switch__label[data-v-a72a40ed],.checkbox-radio-switch__label *[data-v-a72a40ed]{cursor:pointer}.checkbox-radio-switch__icon[data-v-a72a40ed]{margin-right:4px;margin-left:4px;color:var(--color-primary-element);width:var(--icon-size);height:var(--icon-size)}.checkbox-radio-switch--disabled .checkbox-radio-switch__label[data-v-a72a40ed]{opacity:.7}.checkbox-radio-switch--disabled .checkbox-radio-switch__label .checkbox-radio-switch__icon[data-v-a72a40ed]{color:var(--color-text-light)}.checkbox-radio-switch:not(.checkbox-radio-switch--disabled) .checkbox-radio-switch__input:hover+.checkbox-radio-switch__label[data-v-a72a40ed],.checkbox-radio-switch:not(.checkbox-radio-switch--disabled) .checkbox-radio-switch__input:focus+.checkbox-radio-switch__label[data-v-a72a40ed]{background-color:var(--color-primary-element-light)}.checkbox-radio-switch:not(.checkbox-radio-switch--disabled) .checkbox-radio-switch__input:focus+.checkbox-radio-switch__label[data-v-a72a40ed]{box-shadow:0 0 0 2px var(--color-primary-element)}.checkbox-radio-switch-switch:not(.checkbox-radio-switch--checked) .checkbox-radio-switch__icon[data-v-a72a40ed]{color:var(--color-text-lighter)}.checkbox-radio-switch-switch.checkbox-radio-switch--disabled.checkbox-radio-switch--checked .checkbox-radio-switch__icon[data-v-a72a40ed]{color:var(--color-primary-element-light)}.checkbox-radio-switch .sr-only[data-v-a72a40ed]{position:absolute;left:-10000px;top:auto;width:1px;height:1px;overflow:hidden}table.grid th[data-v-85173cd9]{color:var(--color-text-light);height:44px}table.grid .group-header th[data-v-85173cd9]{padding-top:16px;height:60px}table.grid th.group-header-section[data-v-85173cd9]{font-size:16px;font-weight:700}table.grid th.activity_select_group[data-v-85173cd9]{color:var(--color-main-text)}.sr-only[data-v-85173cd9]{position:absolute;left:-10000px;top:auto;width:1px;height:1px;overflow:hidden}")),document.head.appendChild(t)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
import{r as rt,y as at,n as Q,a as st,b as C,l as g,f as ct,_ as lt}from"./NcCheckboxRadioSwitch-D2GbHtCS-DkAPkbep.chunk.mjs";import{b as z,V as ut,t as G}from"./index-CTfcNKj-.chunk.mjs";import{B as F,z as P}from"./NcNoteCard-BLPU1den-jHWP7RrG.chunk.mjs";import{l as U}from"./logger-CimJwhmx.chunk.mjs";function dt(e){var i=Number(e.version.split(".")[0]);if(i>=2)e.mixin({beforeCreate:o});else{var n=e.prototype._init;e.prototype._init=function(r){r===void 0&&(r={}),r.init=r.init?[o].concat(r.init):o,n.call(this,r)}}function o(){var r=this.$options;r.store?this.$store=typeof r.store=="function"?r.store():r.store:r.parent&&r.parent.$store&&(this.$store=r.parent.$store)}}var ht=typeof window<"u"?window:typeof z<"u"?z:{},y=ht.__VUE_DEVTOOLS_GLOBAL_HOOK__;function pt(e){y&&(e._devtoolHook=y,y.emit("vuex:init",e),y.on("vuex:travel-to-state",function(i){e.replaceState(i)}),e.subscribe(function(i,n){y.emit("vuex:mutation",i,n)},{prepend:!0}),e.subscribeAction(function(i,n){y.emit("vuex:action",i,n)},{prepend:!0}))}function ft(e,i){return e.filter(i)[0]}function D(e,i){if(i===void 0&&(i=[]),e===null||typeof e!="object")return e;var n=ft(i,function(r){return r.original===e});if(n)return n.copy;var o=Array.isArray(e)?[]:{};return i.push({original:e,copy:o}),Object.keys(e).forEach(function(r){o[r]=D(e[r],i)}),o}function b(e,i){Object.keys(e).forEach(function(n){return i(e[n],n)})}function X(e){return e!==null&&typeof e=="object"}function mt(e){return e&&typeof e.then=="function"}function vt(e,i){return function(){return e(i)}}var v=function(e,i){this.runtime=i,this._children=Object.create(null),this._rawModule=e;var n=e.state;this.state=(typeof n=="function"?n():n)||{}},R={namespaced:{configurable:!0}};R.namespaced.get=function(){return!!this._rawModule.namespaced},v.prototype.addChild=function(e,i){this._children[e]=i},v.prototype.removeChild=function(e){delete this._children[e]},v.prototype.getChild=function(e){return this._children[e]},v.prototype.hasChild=function(e){return e in this._children},v.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)},v.prototype.forEachChild=function(e){b(this._children,e)},v.prototype.forEachGetter=function(e){this._rawModule.getters&&b(this._rawModule.getters,e)},v.prototype.forEachAction=function(e){this._rawModule.actions&&b(this._rawModule.actions,e)},v.prototype.forEachMutation=function(e){this._rawModule.mutations&&b(this._rawModule.mutations,e)},Object.defineProperties(v.prototype,R);var _=function(e){this.register([],e,!1)};_.prototype.get=function(e){return e.reduce(function(i,n){return i.getChild(n)},this.root)},_.prototype.getNamespace=function(e){var i=this.root;return e.reduce(function(n,o){return i=i.getChild(o),n+(i.namespaced?o+"/":"")},"")},_.prototype.update=function(e){tt([],this.root,e)},_.prototype.register=function(e,i,n){var o=this;n===void 0&&(n=!0);var r=new v(i,n);if(e.length===0)this.root=r;else{var a=this.get(e.slice(0,-1));a.addChild(e[e.length-1],r)}i.modules&&b(i.modules,function(s,c){o.register(e.concat(c),s,n)})},_.prototype.unregister=function(e){var i=this.get(e.slice(0,-1)),n=e[e.length-1],o=i.getChild(n);o&&o.runtime&&i.removeChild(n)},_.prototype.isRegistered=function(e){var i=this.get(e.slice(0,-1)),n=e[e.length-1];return i?i.hasChild(n):!1};function tt(e,i,n){if(i.update(n),n.modules)for(var o in n.modules){if(!i.getChild(o))return;tt(e.concat(o),i.getChild(o),n.modules[o])}}var f,m=function(e){var i=this;e===void 0&&(e={}),!f&&typeof window<"u"&&window.Vue&&et(window.Vue);var n=e.plugins;n===void 0&&(n=[]);var o=e.strict;o===void 0&&(o=!1),this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new _(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._watcherVM=new f,this._makeLocalGettersCache=Object.create(null);var r=this,a=this,s=a.dispatch,c=a.commit;this.dispatch=function(d,h){return s.call(r,d,h)},this.commit=function(d,h,p){return c.call(r,d,h,p)},this.strict=o;var u=this._modules.root.state;M(this,u,[],this._modules.root),I(this,u),n.forEach(function(d){return d(i)});var l=e.devtools!==void 0?e.devtools:f.config.devtools;l&&pt(this)},H={state:{configurable:!0}};H.state.get=function(){return this._vm._data.$$state},H.state.set=function(e){},m.prototype.commit=function(e,i,n){var o=this,r=A(e,i,n),a=r.type,s=r.payload,c={type:a,payload:s},u=this._mutations[a];u&&(this._withCommit(function(){u.forEach(function(l){l(s)})}),this._subscribers.slice().forEach(function(l){return l(c,o.state)}))},m.prototype.dispatch=function(e,i){var n=this,o=A(e,i),r=o.type,a=o.payload,s={type:r,payload:a},c=this._actions[r];if(c){try{this._actionSubscribers.slice().filter(function(l){return l.before}).forEach(function(l){return l.before(s,n.state)})}catch{}var u=c.length>1?Promise.all(c.map(function(l){return l(a)})):c[0](a);return new Promise(function(l,d){u.then(function(h){try{n._actionSubscribers.filter(function(p){return p.after}).forEach(function(p){return p.after(s,n.state)})}catch{}l(h)},function(h){try{n._actionSubscribers.filter(function(p){return p.error}).forEach(function(p){return p.error(s,n.state,h)})}catch{}d(h)})})}},m.prototype.subscribe=function(e,i){return Y(e,this._subscribers,i)},m.prototype.subscribeAction=function(e,i){var n=typeof e=="function"?{before:e}:e;return Y(n,this._actionSubscribers,i)},m.prototype.watch=function(e,i,n){var o=this;return this._watcherVM.$watch(function(){return e(o.state,o.getters)},i,n)},m.prototype.replaceState=function(e){var i=this;this._withCommit(function(){i._vm._data.$$state=e})},m.prototype.registerModule=function(e,i,n){n===void 0&&(n={}),typeof e=="string"&&(e=[e]),this._modules.register(e,i),M(this,this.state,e,this._modules.get(e),n.preserveState),I(this,this.state)},m.prototype.unregisterModule=function(e){var i=this;typeof e=="string"&&(e=[e]),this._modules.unregister(e),this._withCommit(function(){var n=V(i.state,e.slice(0,-1));f.delete(n,e[e.length-1])}),Z(this)},m.prototype.hasModule=function(e){return typeof e=="string"&&(e=[e]),this._modules.isRegistered(e)},m.prototype.hotUpdate=function(e){this._modules.update(e),Z(this,!0)},m.prototype._withCommit=function(e){var i=this._committing;this._committing=!0,e(),this._committing=i},Object.defineProperties(m.prototype,H);function Y(e,i,n){return i.indexOf(e)<0&&(n&&n.prepend?i.unshift(e):i.push(e)),function(){var o=i.indexOf(e);o>-1&&i.splice(o,1)}}function Z(e,i){e._actions=Object.create(null),e._mutations=Object.create(null),e._wrappedGetters=Object.create(null),e._modulesNamespaceMap=Object.create(null);var n=e.state;M(e,n,[],e._modules.root,!0),I(e,n,i)}function I(e,i,n){var o=e._vm;e.getters={},e._makeLocalGettersCache=Object.create(null);var r=e._wrappedGetters,a={};b(r,function(c,u){a[u]=vt(c,e),Object.defineProperty(e.getters,u,{get:function(){return e._vm[u]},enumerable:!0})});var s=f.config.silent;f.config.silent=!0,e._vm=new f({data:{$$state:i},computed:a}),f.config.silent=s,e.strict&&Et(e),o&&(n&&e._withCommit(function(){o._data.$$state=null}),f.nextTick(function(){return o.$destroy()}))}function M(e,i,n,o,r){var a=!n.length,s=e._modules.getNamespace(n);if(o.namespaced&&(e._modulesNamespaceMap[s],e._modulesNamespaceMap[s]=o),!a&&!r){var c=V(i,n.slice(0,-1)),u=n[n.length-1];e._withCommit(function(){f.set(c,u,o.state)})}var l=o.context=gt(e,s,n);o.forEachMutation(function(d,h){var p=s+h;yt(e,p,d,l)}),o.forEachAction(function(d,h){var p=d.root?h:s+h,E=d.handler||d;bt(e,p,E,l)}),o.forEachGetter(function(d,h){var p=s+h;Ct(e,p,d,l)}),o.forEachChild(function(d,h){M(e,i,n.concat(h),d,r)})}function gt(e,i,n){var o=i==="",r={dispatch:o?e.dispatch:function(a,s,c){var u=A(a,s,c),l=u.payload,d=u.options,h=u.type;return(!d||!d.root)&&(h=i+h),e.dispatch(h,l)},commit:o?e.commit:function(a,s,c){var u=A(a,s,c),l=u.payload,d=u.options,h=u.type;(!d||!d.root)&&(h=i+h),e.commit(h,l,d)}};return Object.defineProperties(r,{getters:{get:o?function(){return e.getters}:function(){return _t(e,i)}},state:{get:function(){return V(e.state,n)}}}),r}function _t(e,i){if(!e._makeLocalGettersCache[i]){var n={},o=i.length;Object.keys(e.getters).forEach(function(r){if(r.slice(0,o)===i){var a=r.slice(o);Object.defineProperty(n,a,{get:function(){return e.getters[r]},enumerable:!0})}}),e._makeLocalGettersCache[i]=n}return e._makeLocalGettersCache[i]}function yt(e,i,n,o){var r=e._mutations[i]||(e._mutations[i]=[]);r.push(function(a){n.call(e,o.state,a)})}function bt(e,i,n,o){var r=e._actions[i]||(e._actions[i]=[]);r.push(function(a){var s=n.call(e,{dispatch:o.dispatch,commit:o.commit,getters:o.getters,state:o.state,rootGetters:e.getters,rootState:e.state},a);return mt(s)||(s=Promise.resolve(s)),e._devtoolHook?s.catch(function(c){throw e._devtoolHook.emit("vuex:error",c),c}):s})}function Ct(e,i,n,o){e._wrappedGetters[i]||(e._wrappedGetters[i]=function(r){return n(o.state,o.getters,r.state,r.getters)})}function Et(e){e._vm.$watch(function(){return this._data.$$state},function(){},{deep:!0,sync:!0})}function V(e,i){return i.reduce(function(n,o){return n[o]},e)}function A(e,i,n){return X(e)&&e.type&&(n=i,i=e,e=e.type),{type:e,payload:i,options:n}}function et(e){f&&e===f||(f=e,dt(f))}var B=x(function(e,i){var n={};return S(i).forEach(function(o){var r=o.key,a=o.val;n[r]=function(){var s=this.$store.state,c=this.$store.getters;if(e){var u=T(this.$store,"mapState",e);if(!u)return;s=u.context.state,c=u.context.getters}return typeof a=="function"?a.call(this,s,c):s[a]},n[r].vuex=!0}),n}),it=x(function(e,i){var n={};return S(i).forEach(function(o){var r=o.key,a=o.val;n[r]=function(){for(var s=[],c=arguments.length;c--;)s[c]=arguments[c];var u=this.$store.commit;if(e){var l=T(this.$store,"mapMutations",e);if(!l)return;u=l.context.commit}return typeof a=="function"?a.apply(this,[u].concat(s)):u.apply(this.$store,[a].concat(s))}}),n}),L=x(function(e,i){var n={};return S(i).forEach(function(o){var r=o.key,a=o.val;a=e+a,n[r]=function(){if(!(e&&!T(this.$store,"mapGetters",e)))return this.$store.getters[a]},n[r].vuex=!0}),n}),j=x(function(e,i){var n={};return S(i).forEach(function(o){var r=o.key,a=o.val;n[r]=function(){for(var s=[],c=arguments.length;c--;)s[c]=arguments[c];var u=this.$store.dispatch;if(e){var l=T(this.$store,"mapActions",e);if(!l)return;u=l.context.dispatch}return typeof a=="function"?a.apply(this,[u].concat(s)):u.apply(this.$store,[a].concat(s))}}),n}),kt=function(e){return{mapState:B.bind(null,e),mapGetters:L.bind(null,e),mapMutations:it.bind(null,e),mapActions:j.bind(null,e)}};function S(e){return wt(e)?Array.isArray(e)?e.map(function(i){return{key:i,val:i}}):Object.keys(e).map(function(i){return{key:i,val:e[i]}}):[]}function wt(e){return Array.isArray(e)||X(e)}function x(e){return function(i,n){return typeof i!="string"?(n=i,i=""):i.charAt(i.length-1)!=="/"&&(i+="/"),e(i,n)}}function T(e,i,n){var o=e._modulesNamespaceMap[n];return o}function At(e){e===void 0&&(e={});var i=e.collapsed;i===void 0&&(i=!0);var n=e.filter;n===void 0&&(n=function(d,h,p){return!0});var o=e.transformer;o===void 0&&(o=function(d){return d});var r=e.mutationTransformer;r===void 0&&(r=function(d){return d});var a=e.actionFilter;a===void 0&&(a=function(d,h){return!0});var s=e.actionTransformer;s===void 0&&(s=function(d){return d});var c=e.logMutations;c===void 0&&(c=!0);var u=e.logActions;u===void 0&&(u=!0);var l=e.logger;return l===void 0&&(l=console),function(d){var h=D(d.state);typeof l>"u"||(c&&d.subscribe(function(p,E){var k=D(E);if(n(p,h,k)){var O=J(),$=r(p),ot="mutation "+p.type+O;W(l,ot,i),l.log("%c prev state","color: #9E9E9E; font-weight: bold",o(h)),l.log("%c mutation","color: #03A9F4; font-weight: bold",$),l.log("%c next state","color: #4CAF50; font-weight: bold",o(k)),q(l)}h=k}),u&&d.subscribeAction(function(p,E){if(a(p,E)){var k=J(),O=s(p),$="action "+p.type+k;W(l,$,i),l.log("%c action","color: #03A9F4; font-weight: bold",O),q(l)}}))}}function W(e,i,n){var o=n?e.groupCollapsed:e.group;try{o.call(e,i)}catch{e.log(i)}}function q(e){try{e.groupEnd()}catch{e.log("—— log end ——")}}function J(){var e=new Date;return" @ "+w(e.getHours(),2)+":"+w(e.getMinutes(),2)+":"+w(e.getSeconds(),2)+"."+w(e.getMilliseconds(),3)}function Mt(e,i){return new Array(i+1).join(e)}function w(e,i){return Mt("0",i-e.toString().length)+e}var St={Store:m,install:et,version:"3.6.2",mapState:B,mapMutations:it,mapGetters:L,mapActions:j,createNamespacedHelpers:kt,createLogger:At};const nt=St;rt(at);const xt={name:"HelpCircleIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var Tt=function(){var e=this,i=e._self._c;return i("span",e._b({staticClass:"material-design-icon help-circle-icon",attrs:{"aria-hidden":e.title?null:!0,"aria-label":e.title,role:"img"},on:{click:function(n){return e.$emit("click",n)}}},"span",e.$attrs,!1),[i("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[i("path",{attrs:{d:"M15.07,11.25L14.17,12.17C13.45,12.89 13,13.5 13,15H11V14.5C11,13.39 11.45,12.39 12.17,11.67L13.41,10.41C13.78,10.05 14,9.55 14,9C14,7.89 13.1,7 12,7A2,2 0 0,0 10,9H8A4,4 0 0,1 12,5A4,4 0 0,1 16,9C16,9.88 15.64,10.67 15.07,11.25M13,19H11V17H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2Z"}},[e.title?i("title",[e._v(e._s(e.title))]):e._e()])])])},Ot=[],$t=Q(xt,Tt,Ot,!1,null,null);const Gt=$t.exports,Ht={name:"NcSettingsSection",components:{HelpCircle:Gt},props:{name:{type:String,required:!0},description:{type:String,default:""},docUrl:{type:String,default:""},limitWidth:{type:Boolean,default:!0}},data(){return{docNameTranslated:st("External documentation for {name}",{name:this.name})}},computed:{forceLimitWidth(){var e,i;if(this.limitWidth)return!0;const[n]=(i=(e=window._oc_config)==null?void 0:e.version.split(".",2))!=null?i:[];return n&&Number.parseInt(n)>=30},hasDescription(){return this.description.length>0},hasDocUrl(){return this.docUrl.length>0}}};var Nt=function(){var e=this,i=e._self._c;return i("div",{staticClass:"settings-section",class:{"settings-section--limit-width":e.forceLimitWidth}},[i("h2",{staticClass:"settings-section__name"},[e._v(" "+e._s(e.name)+" "),e.hasDocUrl?i("a",{staticClass:"settings-section__info",attrs:{href:e.docUrl,title:e.docNameTranslated,"aria-label":e.docNameTranslated,target:"_blank",rel:"noreferrer nofollow"}},[i("HelpCircle",{attrs:{size:20}})],1):e._e()]),e.hasDescription?i("p",{staticClass:"settings-section__desc"},[e._v(" "+e._s(e.description)+" ")]):e._e(),e._t("default")],2)},Dt=[],It=Q(Ht,Nt,Dt,!1,null,"251fe753");const ve=It.exports,Vt={name:"CheckboxBlankOutlineIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var Bt=function(){var e=this,i=e._self._c;return i("span",e._b({staticClass:"material-design-icon checkbox-blank-outline-icon",attrs:{"aria-hidden":e.title?null:!0,"aria-label":e.title,role:"img"},on:{click:function(n){return e.$emit("click",n)}}},"span",e.$attrs,!1),[i("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[i("path",{attrs:{d:"M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z"}},[e.title?i("title",[e._v(e._s(e.title))]):e._e()])])])},Lt=[],jt=C(Vt,Bt,Lt,!1,null,null);const Kt=jt.exports,zt={name:"CheckboxBlankIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var Ft=function(){var e=this,i=e._self._c;return i("span",e._b({staticClass:"material-design-icon checkbox-blank-icon",attrs:{"aria-hidden":e.title?null:!0,"aria-label":e.title,role:"img"},on:{click:function(n){return e.$emit("click",n)}}},"span",e.$attrs,!1),[i("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[i("path",{attrs:{d:"M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z"}},[e.title?i("title",[e._v(e._s(e.title))]):e._e()])])])},Pt=[],Ut=C(zt,Ft,Pt,!1,null,null);const Rt=Ut.exports,Yt={name:"MinusBoxIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var Zt=function(){var e=this,i=e._self._c;return i("span",e._b({staticClass:"material-design-icon minus-box-icon",attrs:{"aria-hidden":e.title?null:!0,"aria-label":e.title,role:"img"},on:{click:function(n){return e.$emit("click",n)}}},"span",e.$attrs,!1),[i("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[i("path",{attrs:{d:"M17,13H7V11H17M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z"}},[e.title?i("title",[e._v(e._s(e.title))]):e._e()])])])},Wt=[],qt=C(Yt,Zt,Wt,!1,null,null);const Jt=qt.exports,Qt={name:"CheckboxMarkedIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var Xt=function(){var e=this,i=e._self._c;return i("span",e._b({staticClass:"material-design-icon checkbox-marked-icon",attrs:{"aria-hidden":e.title?null:!0,"aria-label":e.title,role:"img"},on:{click:function(n){return e.$emit("click",n)}}},"span",e.$attrs,!1),[i("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[i("path",{attrs:{d:"M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z"}},[e.title?i("title",[e._v(e._s(e.title))]):e._e()])])])},te=[],ee=C(Qt,Xt,te,!1,null,null);const ie=ee.exports,ne={name:"Checkbox",props:{id:{type:String,required:!0,validator:e=>e.trim()!==""},checked:{type:[Boolean,Array,String],default:!1},value:{type:String,default:null},disabled:{type:Boolean,default:!1},indeterminate:{type:Boolean,default:!1},wrapperElement:{type:String,default:"span"},name:{type:String,default:null}},computed:{size(){return 24},cssVars(){return{"--icon-size":this.size+"px"}},isChecked(){return[...this.checked].indexOf(this.value)>-1},checkboxRadioIconElement(){return this.indeterminate?Jt:this.disabled&&!this.isChecked?Rt:this.isChecked?ie:Kt}},methods:{onToggle(){if(this.disabled)return;if(typeof this.checked=="boolean"){this.$emit("update:checked",!this.isChecked);return}const e=this.getInputsSet().filter(i=>i.checked).map(i=>i.value);this.$emit("update:checked",e)},getInputsSet(){return[...document.getElementsByName(this.name)]}}};var oe=function(){var e=this,i=e._self._c;return i(e.wrapperElement,{tag:"element",staticClass:"checkbox-radio-switch checkbox-radio-switch-checkbox",class:{"checkbox-radio-switch--checked":e.isChecked,"checkbox-radio-switch--disabled":e.disabled,"checkbox-radio-switch--indeterminate":e.indeterminate},style:e.cssVars},[i("input",{staticClass:"checkbox-radio-switch__input",attrs:{id:e.id,disabled:e.disabled,indeterminate:e.indeterminate,name:e.name,type:"checkbox"},domProps:{checked:e.isChecked,value:e.value},on:{change:e.onToggle}}),i("label",{staticClass:"checkbox-radio-switch__label",attrs:{for:e.id}},[i(e.checkboxRadioIconElement,{tag:"component",staticClass:"checkbox-radio-switch__icon",attrs:{size:e.size,"aria-hidden":"true"}}),i("span",{staticClass:"sr-only"},[e._t("default")],2)],1)])},re=[],ae=C(ne,oe,re,!1,null,"a72a40ed");const se=ae.exports;function K(e,i){return e.methods.includes(i)}function N(e,i){for(const n of e)if(K(n,i)&&!n[i])return!0;return!1}const ce={name:"ActivityGrid",components:{Checkbox:se},computed:{...L(["checkedActivities"]),...B(["methods","activityGroups","emailEnabled","isEmailSet","settingBatchtime"])},methods:{isActivityEnabled:K,...j(["toggleMethodForMethodAndActivity","toggleMethodForGroup"]),actionName(e){return e==="email"?t("activity","Send email"):t("activity","Send push notification")}}};var le=function(){var e=this,i=e._self._c;return i("table",{staticClass:"grid activitysettings"},[i("caption",{staticClass:"sr-only"},[e._v(" "+e._s(e.t("activity","Activity notification configuration"))+" ")]),e._l(e.activityGroups,function(n,o){return i("tbody",{key:o},[i("tr",{staticClass:"group-header"},[i("th",{staticClass:"group-header-section"},[e._v(" "+e._s(n.name)+" ")]),e._l(e.methods,function(r,a){return i("th",{key:a,staticClass:"activity_select_group"},[e._v(" "+e._s(r)+" ")])})],2),e._l(n.activities,function(r,a){return i("tr",{key:a},[i("th",{attrs:{scope:"row"}},[i("span",{domProps:{innerHTML:e._s(r.desc)}})]),e._l(e.methods,function(s,c){return i("td",{key:c},[i("Checkbox",{attrs:{id:"".concat(a,"_").concat(c),disabled:!e.isActivityEnabled(r,c),checked:e.checkedActivities,value:"".concat(a,"_").concat(c)},on:{"update:checked":function(u){return e.toggleMethodForMethodAndActivity({groupKey:o,activityKey:a,methodKey:c})}}},[e._v(" "+e._s(e.actionName(c))+" ")])],1)})],2)})],2)})],2)},ue=[],de=C(ce,le,ue,!1,null,"85173cd9");const ge=de.exports;ut.use(nt);const _e=new nt.Store({strict:!0,state:{setting:g("activity","setting"),activityGroups:g("activity","activity_groups"),isEmailSet:g("activity","is_email_set"),emailEnabled:g("activity","email_enabled"),activityDigestEnabled:g("activity","activity_digest_enabled",!1),settingBatchtime:g("activity","setting_batchtime"),methods:g("activity","methods"),endpoint:""},getters:{checkedActivities(e){const i=(n,o)=>{const r=[];return o.email&&r.push({activityKey:n,method:"email",activity:o}),o.notification&&r.push({activityKey:n,method:"notification",activity:o}),r};return Object.values(e.activityGroups).map(n=>Object.entries(n.activities)).reduce((n,o)=>n.concat(o),[]).map(([n,o])=>i(n,o)).reduce((n,o)=>n.concat(o),[]).filter(({activity:n,method:o})=>n[o]).map(({activityKey:n,method:o})=>"".concat(n,"_").concat(o))}},mutations:{SET_METHOD_FOR_METHOD_AND_ACTIVITY(e,{groupKey:i,activityKey:n,methodKey:o,value:r}){const a=e.activityGroups[i].activities[n];K(a,o)&&(a[o]=r)},SET_ENDPOINT(e,{endpoint:i}){e.endpoint=i},SET_SETTING_BATCHTIME(e,{settingBatchtime:i}){e.settingBatchtime=i},TOGGLE_ACTIVITY_DIGEST(e,{activityDigestEnabled:i}){e.activityDigestEnabled=i},TOGGLE_EMAIL_ENABLED(e,{emailEnabled:i}){e.emailEnabled=i}},actions:{setEndpoint({commit:e},{endpoint:i}){e("SET_ENDPOINT",{endpoint:i})},toggleMethodForMethodAndActivity({commit:e,state:i,dispatch:n},{groupKey:o,activityKey:r,methodKey:a}){const s=i.activityGroups[o].activities[r],c=N([s],a);e("SET_METHOD_FOR_METHOD_AND_ACTIVITY",{groupKey:o,activityKey:r,methodKey:a,value:c}),n("saveSettings")},toggleMethodForGroup({commit:e,state:i,dispatch:n},{groupKey:o,methodKey:r}){const a=Object.values(i.activityGroups[o].activities),s=N(a,r);for(const c in i.activityGroups[o].activities)e("SET_METHOD_FOR_METHOD_AND_ACTIVITY",{groupKey:o,activityKey:c,methodKey:r,value:s});n("saveSettings")},toggleMethodsForActivity({commit:e,state:i,dispatch:n},{groupKey:o,activityKey:r}){const a=i.activityGroups[o].activities[r],s=a.methods.map(c=>N([a],c)).includes(!0);for(const c of a.methods)e("SET_METHOD_FOR_METHOD_AND_ACTIVITY",{groupKey:o,activityKey:r,methodKey:c,value:s});n("saveSettings")},setSettingBatchtime({commit:e,dispatch:i},{settingBatchtime:n}){e("SET_SETTING_BATCHTIME",{settingBatchtime:n}),i("saveSettings")},toggleActivityDigestEnabled({commit:e,dispatch:i},{activityDigestEnabled:n}){e("TOGGLE_ACTIVITY_DIGEST",{activityDigestEnabled:n}),i("saveSettings")},toggleEmailEnabled({commit:e},{emailEnabled:i}){e("TOGGLE_EMAIL_ENABLED",{emailEnabled:i});try{OCP.AppConfig.setValue("activity","enable_email",i?"yes":"no"),F(G("activity","Your settings have been updated."))}catch(n){P(G("activity","Unable to save the settings")),U.error("An error occurred while saving the activity settings",n)}},async saveSettings({state:e,getters:i}){try{const n=new FormData;i.checkedActivities.forEach(r=>{n.append(r,"1")}),n.append("notify_setting_batchtime","".concat(e.settingBatchtime)),n.append("activity_digest","".concat(e.activityDigestEnabled?1:0));const o=await ct.post(lt(e.endpoint),n);F(o.data.data.message)}catch(n){P(G("activity","Unable to save the settings")),U.error("An error occurred while saving the activity settings",n)}}}});export{ge as A,ve as N,nt as V,j as a,B as m,_e as s};
