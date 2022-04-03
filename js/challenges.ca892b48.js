"use strict";(self["webpackChunkxivtodo"]=self["webpackChunkxivtodo"]||[]).push([[372,843],{585:function(e,t,l){l.d(t,{Z:function(){return v}});var s=l(252),i=l(577);const n=["src"],r={key:0,class:"fw-lighter text-muted"},u={class:"list-group list-group-flush"},a=(0,s._)("br",null,null,-1);function d(e,t,l,d,o,c){const h=(0,s.up)("DutyListItem");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("h3",null,[l.type?((0,s.wg)(),(0,s.iD)("img",{key:0,src:"/icons/duty-"+l.type+".png"},null,8,n)):(0,s.kq)("",!0),(0,s.Uk)((0,i.zw)(l.title),1)]),l.showTotal?((0,s.wg)(),(0,s.iD)("span",r,(0,i.zw)(l.duties.length)+" total",1)):(0,s.kq)("",!0),(0,s._)("ul",u,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(c.injectDutyCompletion(l.duties),(e=>((0,s.wg)(),(0,s.j4)(h,{key:e.Name,duty:e,clearedMaybe:!0,blur:!1},null,8,["duty"])))),128))]),a],64)}const o=["title"],c=(0,s.Uk)("   "),h=["href"],g={key:0,class:"icon-marker-msq","data-bs-toggle":"tooltip","data-bs-placement":"top",title:"MSQ content"};function b(e,t,l,n,r,u){return(0,s.wg)(),(0,s.iD)("li",{class:(0,i.C_)(["list-group-item d-flex justify-content-between align-items-center",{"text-secondary":-1==l.duty.cleared,"text-success":1==l.duty.cleared}])},[(0,s._)("span",{class:(0,i.C_)(["duty-list-item",{"bi-question-circle":-1==l.duty.cleared,"bi-check-circle":1==l.duty.cleared,"bi-circle":0==l.duty.cleared}]),title:l.duty.Name},[c,l.duty.LodestoneID&&!l.duty.blur?((0,s.wg)(),(0,s.iD)("a",{key:0,class:(0,i.C_)(["text-reset lodestone-tooltip eorzeadb_link",{"blur-maybe":l.duty.blur&&-1==l.duty.cleared,"blur-cleared":l.duty.blur&&1==l.duty.cleared,"blur-uncleared":l.duty.blur&&0==l.duty.cleared,"user-select-none":l.duty.blur}]),href:"https://na.finalfantasyxiv.com/lodestone/playguide/db/duty/"+l.duty.LodestoneID,target:"_blank",rel:"noopener noreferrer"},(0,i.zw)(l.duty.Name),11,h)):((0,s.wg)(),(0,s.iD)("span",{key:1,class:(0,i.C_)({"blur-maybe":l.duty.blur&&-1==l.duty.cleared,"blur-cleared":l.duty.blur&&1==l.duty.cleared,"blur-uncleared":l.duty.blur&&0==l.duty.cleared,"user-select-none":l.duty.blur,"text-bold":l.duty.Bold})},(0,i.zw)(l.duty.Name),3))],10,o),l.duty.IsMSQ?((0,s.wg)(),(0,s.iD)("span",g)):(0,s.kq)("",!0)],2)}var m={props:{duty:Object}},y=l(744);const p=(0,y.Z)(m,[["render",b]]);var f=p,D={props:{title:String,duties:Array,type:String,showTotal:Boolean},components:{DutyListItem:f},methods:{hasMaxIDOneOf(e,t){if(t.MaxIDOneOf.length>0)for(let l of t.MaxIDOneOf)if(e.has(l))return!0;return!1},injectDutyCompletion(e){let t=this.$store.getters.achievements,l=new Map;for(let i=0;i<t.length;i++)l.set(t[i].ID,t[i].Date);let s=this.$store.getters.settings.spoilersOption||0;for(let i of e){let e=0;if(this.$store.getters.achievementsPublic)if(i.ID&&l.has(i.ID))e=1;else if(i.MaxIDOneOf&&this.hasMaxIDOneOf(l,i))e=1;else if(i.MaxIDAllOf&&i.MaxIDAllOf.length>0){e=1;for(let t of i.MaxIDAllOf)l.has(t)||(e=0)}else i.MinID&&l.has(i.MinID)?e=-1:i.MinID&&!l.has(i.MinID)||!i.MinID&&i.MaxIDOneOf?e=0:i.ID||(e=-1);else e=-1;i.cleared=e;let t=!1;if(i.Spoilers&&"2"!=s){let n=!1;i.SpoilersUntil&&l.has(i.SpoilersUntil)&&(n=!0),("1"==s||0==e&&!n)&&(t=!0),this.$store.getters.achievementsPublic||n||(t=!0)}i.blur=t}return e},numClearedDuties(){return this.injectDutyCompletion(this.duties).filter((e=>1==e.cleared)).length}}};const w=(0,y.Z)(D,[["render",d]]);var v=w},332:function(e,t,l){l.r(t),l.d(t,{default:function(){return V}});var s=l(252),i=l(577);const n={class:"container"},r={key:0,class:"fs-3 fw-lighter"},u={key:0,class:"text-info fs-6"},a=(0,s._)("div",{class:"spinner-border spinner-border-sm",role:"status"},null,-1),d=(0,s.Uk)(" Updating character data, this may take a minute... "),o=[a,d],c={key:1,class:"text-warning fs-6"},h=(0,s._)("hr",null,null,-1),g={class:"row"},b=(0,s._)("h2",null,"Deep Dungeons",-1),m={class:"col-12 col-lg-4"},y={class:"col-12 col-lg-4"},p={class:"col-12 col-lg-4"},f=(0,s._)("hr",null,null,-1),D={class:"row"},w=(0,s._)("h2",null,"Exploration",-1),v={class:"col-12 col-lg-4"},_={class:"col-12 col-lg-4"},k={class:"col-12 col-lg-4"},x=(0,s._)("hr",null,null,-1),W={class:"row"},E=(0,s._)("h2",null,"Miscellaneous",-1),I={class:"col-12 col-lg-4"},S={class:"col-12 col-lg-4"},M={class:"col-12 col-lg-4"},A=(0,s._)("hr",null,null,-1),C={class:"row"},O=(0,s._)("h2",null,"Achievement FATEs",-1),T={class:"col-12 col-lg-4"},U={class:"col-12 col-lg-4"},B={class:"col-12 col-lg-4"},$=(0,s._)("hr",null,null,-1),H={class:"row"},L=(0,s._)("h2",null,"Blue Mage",-1),F={class:"col-12 col-lg-4"},j={class:"col-12 col-lg-4"},z={class:"col-12 col-lg-4"};function q(e,t,l,a,d,q){const N=(0,s.up)("AlertMsg"),R=(0,s.up)("DutyList");return(0,s.wg)(),(0,s.iD)("div",n,[(0,s._)("h1",null,[(0,s.Uk)((0,i.zw)(e.$t("page.challenges"))+" ",1),this.$store.getters.hasCharacter?((0,s.wg)(),(0,s.iD)("span",r,[(0,s.Uk)((0,i.zw)(e.$t("message.clearedByCharacter",{characterName:this.$store.getters.character.Name}))+" ",1),this.$store.getters.activeCharacterOutOfDate?((0,s.wg)(),(0,s.iD)("div",u,o)):this.$store.getters.achievementsPublic?(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("div",c," The achievements for this characters are not set to public in Lodestone. "))])):(0,s.kq)("",!0)]),this.$store.getters.userData?this.$store.getters.hasCharacter?(0,s.kq)("",!0):((0,s.wg)(),(0,s.j4)(N,{key:1,type:"normal",msg:"No characters found. You can add your characters from the <a href='/settings' class='alert-link'>Settings</a>."})):((0,s.wg)(),(0,s.j4)(N,{key:0,type:"normal",msg:"No characters found. You can <a href='"+this.$store.state.env.VUE_APP_DISCORD_AUTH_URI+"' class='alert-link'>sign in with Discord</a> to add them."},null,8,["msg"])),h,(0,s._)("div",g,[b,(0,s._)("div",m,[(0,s.Wm)(R,{title:"Palace of the Dead",duties:d.db.potd},null,8,["duties"])]),(0,s._)("div",y,[(0,s.Wm)(R,{title:"Heaven-on-High",duties:d.db.hoh},null,8,["duties"])]),(0,s._)("div",p,[(0,s.Wm)(R,{title:"Palace of the Dead (Solo)",duties:d.db.potdSolo},null,8,["duties"]),(0,s.Wm)(R,{title:"Heaven-on-High (Solo)",duties:d.db.hohSolo},null,8,["duties"])])]),f,(0,s._)("div",D,[w,(0,s._)("div",v,[(0,s.Wm)(R,{title:"A Realm Reborn",duties:d.db.arrExploration},null,8,["duties"]),(0,s.Wm)(R,{title:"Heavensward",duties:d.db.hwExploration},null,8,["duties"])]),(0,s._)("div",_,[(0,s.Wm)(R,{title:"Stormblood",duties:d.db.sbExploration},null,8,["duties"]),(0,s.Wm)(R,{title:"Shadowbringers",duties:d.db.shbExploration},null,8,["duties"]),(0,s.Wm)(R,{title:"Endwalker",duties:d.db.ewExploration},null,8,["duties"])]),(0,s._)("div",k,[(0,s.Wm)(R,{title:"Exploratory Missions",duties:d.db.explExploration},null,8,["duties"]),(0,s.Wm)(R,{title:"Sightseeing Logs",duties:d.db.sightseeingLogs},null,8,["duties"])])]),x,(0,s._)("div",W,[E,(0,s._)("div",I,[(0,s.Wm)(R,{title:"Shared FATE (ShB)",duties:d.db.shbSharedFATE},null,8,["duties"]),(0,s.Wm)(R,{title:"Shared FATE (EW)",duties:d.db.ewSharedFATE},null,8,["duties"])]),(0,s._)("div",S,[(0,s.Wm)(R,{title:"Bozjan Southern Front",duties:d.db.bozjanChallenges},null,8,["duties"]),(0,s.Wm)(R,{title:"Zadnor",duties:d.db.zadnorChallenges},null,8,["duties"])]),(0,s._)("div",M,[(0,s.Wm)(R,{title:"Treasure Hunt Clears",duties:d.db.treasureHunts},null,8,["duties"]),(0,s.Wm)(R,{title:"Trusts",duties:d.db.trusts},null,8,["duties"])])]),A,(0,s._)("div",C,[O,(0,s._)("div",T,[(0,s.Wm)(R,{title:"A Realm Reborn",duties:d.db.arrFATEs},null,8,["duties"])]),(0,s._)("div",U,[(0,s.Wm)(R,{title:"Heavensward",duties:d.db.hwFATEs},null,8,["duties"]),(0,s.Wm)(R,{title:"Stormblood",duties:d.db.sbFATEs},null,8,["duties"])]),(0,s._)("div",B,[(0,s.Wm)(R,{title:"Shadowbringer",duties:d.db.shbFATEs},null,8,["duties"]),(0,s.Wm)(R,{title:"Endwalker",duties:d.db.ewFATEs},null,8,["duties"])])]),$,(0,s._)("div",H,[L,(0,s._)("div",F,[(0,s.Wm)(R,{title:"BLU Encounters (ARR)",duties:d.db.arrBlu},null,8,["duties"]),(0,s.Wm)(R,{title:"BLU Encounters (HW)",duties:d.db.hwBlu},null,8,["duties"])]),(0,s._)("div",j,[(0,s.Wm)(R,{title:"BLU Encounters (SB)",duties:d.db.sbBlu},null,8,["duties"])]),(0,s._)("div",z,[(0,s.Wm)(R,{title:"Masked Carnivale",duties:d.db.maskedCarnivale},null,8,["duties"])])])])}var N=l(903),R=l(585),P=l(729),Z={name:"ChallengesView",data(){return{db:P}},components:{AlertMsg:N.Z,DutyList:R.Z}},Y=l(744);const Q=(0,Y.Z)(Z,[["render",q]]);var V=Q}}]);
//# sourceMappingURL=challenges.ca892b48.js.map