(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(".activity-frequency__label[data-v-778e414b]{margin-top:24px;display:inline-block}.notification-frequency__select[data-v-778e414b]{margin-left:calc(var(--default-grid-baseline) * 2)}")),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
/*! third party licenses: js/vendor.LICENSE.txt */
import{V as n,t as m,a as u}from"./index-dHB94yC7.mjs";import{m as s,a as c,v as r,A as y,V as E,s as l}from"./settings-store-DahPyaqW.mjs";import{n as o,s as v}from"./NcCheckboxRadioSwitch-BOl1O2zi-CAT_fgk7.mjs";import"./_commonjsHelpers-BdswosdL.mjs";import"./NcNoteCard-B_Q1mnCM-20YDozNM.mjs";import"./logger-CcLDq3iB.mjs";const _={EmailFrequency:{EMAIL_SEND_HOURLY:0,EMAIL_SEND_DAILY:1,EMAIL_SEND_WEEKLY:2,EMAIL_SEND_ASAP:3}},d={name:"EmailSettings",data(){return{EmailFrequency:_.EmailFrequency}},computed:{...s(["emailEnabled","isEmailSet","settingBatchtime"])},methods:{...c(["setSettingBatchtime"])}};var g=function(){var e=this,i=e._self._c;return e.emailEnabled?i("div",[e.isEmailSet?e._e():i("p",[i("strong",[e._v(e._s(e.t("activity","You need to set up your email address before you can receive notification emails.")))])]),i("p",[i("label",{staticClass:"activity-frequency__label",attrs:{for:"activity_setting_batchtime"}},[e._v(" "+e._s(e.t("activity","Send activity emails"))+" ")]),i("select",{staticClass:"notification-frequency__select",attrs:{id:"activity_setting_batchtime",name:"activity_setting_batchtime"},on:{change:function(a){return e.setSettingBatchtime({settingBatchtime:a.target.value})}}},[i("option",{domProps:{value:e.EmailFrequency.EMAIL_SEND_ASAP,selected:e.settingBatchtime===e.EmailFrequency.EMAIL_SEND_ASAP}},[e._v(" "+e._s(e.t("activity","As soon as possible"))+" ")]),i("option",{domProps:{value:e.EmailFrequency.EMAIL_SEND_HOURLY,selected:e.settingBatchtime===e.EmailFrequency.EMAIL_SEND_HOURLY}},[e._v(" "+e._s(e.t("activity","Hourly"))+" ")]),i("option",{domProps:{value:e.EmailFrequency.EMAIL_SEND_DAILY,selected:e.settingBatchtime===e.EmailFrequency.EMAIL_SEND_DAILY}},[e._v(" "+e._s(e.t("activity","Daily"))+" ")]),i("option",{domProps:{value:e.EmailFrequency.EMAIL_SEND_WEEKLY,selected:e.settingBatchtime===e.EmailFrequency.EMAIL_SEND_WEEKLY}},[e._v(" "+e._s(e.t("activity","Weekly"))+" ")])])])]):e._e()},p=[],S=o(d,g,p,!1,null,"778e414b",null,null);const h=S.exports,A={name:"UserSettings",components:{NcSettingsSection:r,EmailSettings:h,ActivityGrid:y},computed:{...s({emailEnabled:"emailEnabled"}),settingDescription(){return this.emailEnabled?t("activity","Choose for which activities you want to get an email or push notification."):t("activity","Choose for which activities you want to get a push notification.")}},mounted(){this.setEndpoint({endpoint:"/apps/activity/settings"})},methods:{...c(["setEndpoint","toggleEmailEnabled"])}};var D=function(){var e=this,i=e._self._c;return i("NcSettingsSection",{attrs:{name:e.t("activity","Activity"),description:e.settingDescription}},[i("ActivityGrid"),i("EmailSettings")],1)},b=[],f=o(A,D,b,!1,null,null,null,null);const L=f.exports,N={name:"DailySummary",components:{NcCheckboxRadioSwitch:v,NcSettingsSection:r},computed:{...s(["activityDigestEnabled"])},mounted(){this.setEndpoint({endpoint:"/apps/activity/settings"})},methods:{...c(["setEndpoint","toggleActivityDigestEnabled"])}};var I=function(){var e=this,i=e._self._c;return i("NcSettingsSection",{attrs:{name:e.t("activity","Daily activity summary")}},[i("NcCheckboxRadioSwitch",{attrs:{"data-cy-checkbox":"",checked:e.activityDigestEnabled},on:{"update:checked":function(a){return e.toggleActivityDigestEnabled({activityDigestEnabled:a})}}},[e._v(" "+e._s(e.t("activity","Send daily activity summary in the morning"))+" ")])],1)},q=[],M=o(N,I,q,!1,null,null,null,null);const F=M.exports;n.prototype.t=m,n.prototype.n=u,n.use(E),new n({el:"#activity-user-settings",store:l,name:"ActivityPersonalSettings",render:e=>e(L)}),new n({el:"#activity-digest-user-settings",name:"ActivityDigestPersonalSettings",store:l,render:e=>e(F)});
