"use strict";(self["webpackChunkxivtodo"]=self["webpackChunkxivtodo"]||[]).push([[843],{5705:function(t,e,s){s.r(e),s.d(e,{default:function(){return V}});var l=s(6252),i=s(3577),a={class:"container"},n={key:0,class:"fs-3 fw-lighter"},o={key:0,class:"text-info fs-6"},r=(0,l._)("div",{class:"spinner-border spinner-border-sm",role:"status"},null,-1),u=(0,l.Uk)(" Updating character data, this may take a minute... "),d=[r,u],c={key:1,class:"text-warning fs-6"},h=(0,l._)("hr",null,null,-1),g={class:"row"},w={class:"col-12 col-lg-4"},p={class:"col-12 col-lg-4"},m={class:"col-12 col-lg-4"},b=(0,l._)("hr",null,null,-1),T={class:"row"},y={class:"col-12 col-lg-4"},$={class:"col-12 col-lg-4"},v={class:"col-12 col-lg-4"},_=(0,l._)("hr",null,null,-1),W={class:"row"},x={class:"col-12 col-lg-4"},f={class:"col-12 col-lg-4"},k={class:"col-12 col-lg-4"},R=(0,l._)("hr",null,null,-1),D={class:"row"},U={class:"col-12 col-lg-4"},E={class:"col-12 col-lg-4"},z={class:"col-12 col-lg-4"},C=(0,l._)("hr",null,null,-1),S={class:"row"},A={class:"col-12 col-lg-4"},N={class:"col-12 col-lg-4"},q={class:"col-12 col-lg-4"};function L(t,e,s,r,u,L){var O=(0,l.up)("AlertMsg"),P=(0,l.up)("DutyList");return(0,l.wg)(),(0,l.iD)("div",a,[(0,l._)("h1",null,[(0,l.Uk)((0,i.zw)(t.$t("page.encounters"))+" ",1),this.$store.getters.hasCharacter?((0,l.wg)(),(0,l.iD)("span",n,[(0,l.Uk)((0,i.zw)(t.$t("message.clearedByCharacter",{characterName:this.$store.getters.character.Name}))+" ",1),this.$store.getters.activeCharacterOutOfDate?((0,l.wg)(),(0,l.iD)("div",o,d)):this.$store.getters.achievementsPublic?(0,l.kq)("",!0):((0,l.wg)(),(0,l.iD)("div",c," The achievements for this characters are not set to public in Lodestone. "))])):(0,l.kq)("",!0)]),this.$store.getters.userData?this.$store.getters.hasCharacter?(0,l.kq)("",!0):((0,l.wg)(),(0,l.j4)(O,{key:1,type:"normal",msg:"No characters found. You can add your characters from the <a href='/settings' class='alert-link'>Settings</a>."})):((0,l.wg)(),(0,l.j4)(O,{key:0,type:"normal",msg:"No characters found. You can <a href='"+this.$store.state.env.VUE_APP_DISCORD_AUTH_URI+"' class='alert-link'>sign in with Discord</a> to add them."},null,8,["msg"])),h,(0,l._)("div",g,[(0,l._)("h2",null,(0,i.zw)(t.$t("misc.expansion.arr")),1),(0,l._)("div",w,[(0,l.Wm)(P,{title:t.$t("encounters.dungeons"),duties:u.db.arrDungeons,type:"dngs",showTotal:!0},null,8,["title","duties"])]),(0,l._)("div",p,[(0,l.Wm)(P,{title:t.$t("encounters.trials"),duties:u.db.arrTrials,type:"trials",showTotal:!0},null,8,["title","duties"]),(0,l.Wm)(P,{title:t.$t("encounters.heTrials"),duties:u.db.arrTrialsEx,type:"high",showTotal:!0},null,8,["title","duties"])]),(0,l._)("div",m,[(0,l.Wm)(P,{title:t.$t("encounters.raids"),duties:u.db.arrRaids,type:"raids",showTotal:!0},null,8,["title","duties"]),(0,l.Wm)(P,{title:t.$t("encounters.heRaids"),duties:u.db.arrRaidsSavUlt,type:"high",showTotal:!0},null,8,["title","duties"])])]),b,(0,l._)("div",T,[(0,l._)("h2",null,(0,i.zw)(t.$t("misc.expansion.hw")),1),(0,l._)("div",y,[(0,l.Wm)(P,{title:t.$t("encounters.dungeons"),duties:u.db.hwDungeons,type:"dngs",showTotal:!0},null,8,["title","duties"])]),(0,l._)("div",$,[(0,l.Wm)(P,{title:t.$t("encounters.trials"),duties:u.db.hwTrials,type:"trials",showTotal:!0},null,8,["title","duties"]),(0,l.Wm)(P,{title:t.$t("encounters.heTrials"),duties:u.db.hwTrialsEx,type:"high",showTotal:!0},null,8,["title","duties"])]),(0,l._)("div",v,[(0,l.Wm)(P,{title:t.$t("encounters.raids"),duties:u.db.hwRaids,type:"raids",showTotal:!0},null,8,["title","duties"]),(0,l.Wm)(P,{title:t.$t("encounters.heRaids"),duties:u.db.hwRaidsSavUlt,type:"high",showTotal:!0},null,8,["title","duties"])])]),_,(0,l._)("div",W,[(0,l._)("h2",null,(0,i.zw)(t.$t("misc.expansion.sb")),1),(0,l._)("div",x,[(0,l.Wm)(P,{title:t.$t("encounters.dungeons"),duties:u.db.sbDungeons,type:"dngs",showTotal:!0},null,8,["title","duties"])]),(0,l._)("div",f,[(0,l.Wm)(P,{title:t.$t("encounters.trials"),duties:u.db.sbTrials,type:"trials",showTotal:!0},null,8,["title","duties"]),(0,l.Wm)(P,{title:t.$t("encounters.heTrials"),duties:u.db.sbTrialsEx,type:"high",showTotal:!0},null,8,["title","duties"])]),(0,l._)("div",k,[(0,l.Wm)(P,{title:t.$t("encounters.raids"),duties:u.db.sbRaids,type:"raids",showTotal:!0},null,8,["title","duties"]),(0,l.Wm)(P,{title:t.$t("encounters.heRaids"),duties:u.db.sbRaidsSavUlt,type:"high",showTotal:!0},null,8,["title","duties"]),(0,l.Wm)(P,{title:t.$t("encounters.exploratory"),duties:u.db.sbExploratory,type:"expl",showTotal:!0},null,8,["title","duties"])])]),R,(0,l._)("div",D,[(0,l._)("h2",null,(0,i.zw)(t.$t("misc.expansion.shb")),1),(0,l._)("div",U,[(0,l.Wm)(P,{title:t.$t("encounters.dungeons"),duties:u.db.shbDungeons,type:"dngs",showTotal:!0},null,8,["title","duties"])]),(0,l._)("div",E,[(0,l.Wm)(P,{title:t.$t("encounters.trials"),duties:u.db.shbTrials,type:"trials",showTotal:!0},null,8,["title","duties"]),(0,l.Wm)(P,{title:t.$t("encounters.heTrials"),duties:u.db.shbTrialsEx,type:"high",showTotal:!0},null,8,["title","duties"])]),(0,l._)("div",z,[(0,l.Wm)(P,{title:t.$t("encounters.raids"),duties:u.db.shbRaids,type:"raids",showTotal:!0},null,8,["title","duties"]),(0,l.Wm)(P,{title:t.$t("encounters.heRaids"),duties:u.db.shbRaidsSavUlt,type:"high",showTotal:!0},null,8,["title","duties"]),(0,l.Wm)(P,{title:t.$t("encounters.exploratory"),duties:u.db.shbExploratory,type:"expl",showTotal:!0},null,8,["title","duties"])])]),C,(0,l._)("div",S,[(0,l._)("h2",null,(0,i.zw)(t.$t("misc.expansion.ew")),1),(0,l._)("div",A,[(0,l.Wm)(P,{title:t.$t("encounters.dungeons"),duties:u.db.ewDungeons,type:"dngs",showTotal:!0},null,8,["title","duties"])]),(0,l._)("div",N,[(0,l.Wm)(P,{title:t.$t("encounters.trials"),duties:u.db.ewTrials,type:"trials",showTotal:!0},null,8,["title","duties"]),(0,l.Wm)(P,{title:t.$t("encounters.heTrials"),duties:u.db.ewTrialsEx,type:"high",showTotal:!0},null,8,["title","duties"])]),(0,l._)("div",q,[(0,l.Wm)(P,{title:t.$t("encounters.raids"),duties:u.db.ewRaids,type:"raids",showTotal:!0},null,8,["title","duties"]),(0,l.Wm)(P,{title:t.$t("encounters.heRaids"),duties:u.db.ewRaidsSavUlt,type:"high",showTotal:!0},null,8,["title","duties"])])])])}var O=s(6903),P=s(1585),Z=s(5729),j={name:"EncountersView",data:function(){return{db:Z}},components:{AlertMsg:O.Z,DutyList:P.Z}},I=s(3744);const M=(0,I.Z)(j,[["render",L]]);var V=M}}]);
//# sourceMappingURL=encounters-legacy.56edc170.js.map