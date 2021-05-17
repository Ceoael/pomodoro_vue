(function(e){function t(t){for(var r,i,c=t[0],s=t[1],u=t[2],d=0,b=[];d<c.length;d++)i=c[d],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&b.push(o[i][0]),o[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);l&&l(t);while(b.length)b.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,c=1;c<n.length;c++){var s=n[c];0!==o[s]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/pomodoro_vue/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var l=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"15c1":function(e,t,n){"use strict";n("8d56")},"17c1":function(e,t,n){"use strict";n("a8ce")},"25cb":function(e,t,n){},"356d":function(e,t,n){"use strict";n("ef00")},"37b2":function(e,t,n){},"41a8":function(e,t,n){"use strict";n("6b2f")},"4e0a":function(e,t,n){"use strict";n("ae45")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function o(e,t,n,o,a,i){var c=Object(r["w"])("pomodoro-builder");return Object(r["p"])(),Object(r["d"])(c)}var a={ref:"alarmSound"},i=Object(r["g"])("source",{src:"/sounds/mixkit-unlock-game-notification-253.wav"},null,-1);function c(e,t,n,o,c,s){var u=Object(r["w"])("backdrop"),l=Object(r["w"])("settings-builder"),d=Object(r["w"])("modal"),b=Object(r["w"])("navigation"),p=Object(r["w"])("display"),f=Object(r["w"])("ResetButton"),m=Object(r["w"])("Button"),v=Object(r["w"])("ButtonWrapper"),g=Object(r["w"])("pomodoro-builder-wrapper");return Object(r["p"])(),Object(r["d"])(g,null,{default:Object(r["E"])((function(){return[Object(r["g"])(u,{show:o.showSettings,onCloseBackdrop:o.closeSettings},null,8,["show","onCloseBackdrop"]),Object(r["g"])(d,{modalOpen:o.showSettings,onModalOff:o.closeSettings,modalName:"Settings"},{default:Object(r["E"])((function(){return[Object(r["g"])(l,{onModalOff:o.closeSettings},null,8,["onModalOff"])]})),_:1},8,["modalOpen","onModalOff"]),Object(r["g"])(b,{longBreakIsActive:o.longBreakIsActive,timerIsRunning:o.countdownIsRunning,breakIsActive:o.breakIsActive,onSettingsOn:o.openSettings,onTurnOnBreakTab:o.turnOnBreakTab},null,8,["longBreakIsActive","timerIsRunning","breakIsActive","onSettingsOn","onTurnOnBreakTab"]),Object(r["g"])(p,{breakIsActive:o.breakIsActive,currentBreakTime:o.currentBreakTime,currentSessionTime:o.currentSessionTime},null,8,["breakIsActive","currentBreakTime","currentSessionTime"]),Object(r["g"])(v,null,{default:Object(r["E"])((function(){return[Object(r["g"])(f,{timerIsRunning:o.countdownIsRunning,onResetButton:o.resetCurrentTabTime},null,8,["timerIsRunning","onResetButton"]),Object(r["g"])(m,{startButton:o.countdownIsRunning,onStartButton:o.startButtonHandler},null,8,["startButton","onStartButton"])]})),_:1}),Object(r["g"])("audio",a,[i],512)]})),_:1})}n("99af");var s=Object(r["G"])("data-v-10424d44");Object(r["s"])("data-v-10424d44");var u={class:"pomodoroBuilderWrapper"};Object(r["q"])();var l=s((function(e,t,n,o,a,i){return Object(r["p"])(),Object(r["d"])("div",u,[Object(r["v"])(e.$slots,"default",{},void 0,!0)])})),d={name:"PomodoroBuilderWrapper"};n("15c1");d.render=l,d.__scopeId="data-v-10424d44";var b=d,p=Object(r["G"])("data-v-1cc39fac");Object(r["s"])("data-v-1cc39fac");var f={class:"Navigation"},m=Object(r["g"])("span",{class:["material-icons","Navigation__icon"]},"settings",-1);Object(r["q"])();var v=p((function(e,t,n,o,a,i){return Object(r["p"])(),Object(r["d"])("div",f,[Object(r["g"])("button",{class:["Navigation__Button",{"Navigation__Button--active":!n.breakIsActive},{"Navigation__Button--block":n.timerIsRunning}],onClick:t[1]||(t[1]=function(e){return o.turnOnBreakTab(!1)})},"Session",2),Object(r["g"])("button",{class:["Navigation__Button",{"Navigation__Button--active":n.breakIsActive},{"Navigation__Button--block":n.timerIsRunning}],onClick:t[2]||(t[2]=function(e){return o.turnOnBreakTab(!0)})},Object(r["y"])(o.breakType),3),Object(r["g"])("button",{class:["Navigation__Button","Navigation__Button--settings",{"Navigation__Button--block":n.timerIsRunning}],onClick:t[3]||(t[3]=function(){return o.settingsOn&&o.settingsOn.apply(o,arguments)})},[m],2)])})),g={name:"Navigation",emits:["settingsOn","turnOnBreakTab"],props:{breakIsActive:{type:Boolean,required:!0},longBreakIsActive:{type:Boolean,required:!0},timerIsRunning:{type:Boolean,required:!0}},setup:function(e,t){var n=Object(r["b"])((function(){return e.longBreakIsActive?"Long Break":"Short Break"})),o=function(){e.timerIsRunning||t.emit("settingsOn")},a=function(n){e.timerIsRunning||t.emit("turnOnBreakTab",n)};return{breakType:n,settingsOn:o,turnOnBreakTab:a}}};n("17c1");g.render=v,g.__scopeId="data-v-1cc39fac";var O=g,j=Object(r["G"])("data-v-45124e78");Object(r["s"])("data-v-45124e78");var B={class:"Display"},k={class:"Display__value"};Object(r["q"])();var h=j((function(e,t,n,o,a,i){return Object(r["p"])(),Object(r["d"])("div",B,[Object(r["g"])("p",k,Object(r["y"])(o.displayedValue||"00:00"),1)])})),S={name:"Display",props:{breakIsActive:{type:Boolean,required:!0},currentBreakTime:{type:String,required:!0},currentSessionTime:{type:String,required:!0}},setup:function(e){var t=Object(r["b"])((function(){return e.breakIsActive?e.currentBreakTime:e.currentSessionTime}));return{displayedValue:t}}};n("356d");S.render=h,S.__scopeId="data-v-45124e78";var y=S,T=Object(r["G"])("data-v-06bce9d8"),_=T((function(e,t,n,o,a,i){return Object(r["p"])(),Object(r["d"])("button",{class:"Button",onClick:t[1]||(t[1]=function(){return o.startButtonHandler&&o.startButtonHandler.apply(o,arguments)})},Object(r["y"])(o.buttonTitle),1)})),I={name:"Button",emits:["startButton"],props:{startButton:{type:Boolean,required:!0}},setup:function(e,t){var n=Object(r["b"])((function(){return e.startButton?"Stop":"Start"})),o=function(){t.emit("startButton")};return{buttonTitle:n,startButtonHandler:o}}};n("d64d");I.render=_,I.__scopeId="data-v-06bce9d8";var L=I,w=n("5530"),C=Object(r["G"])("data-v-9391ffae");Object(r["s"])("data-v-9391ffae");var q={class:"Modal__header"},R=Object(r["g"])("div",{class:"Modal__X"},null,-1),M={class:"Modal__contentWrapper"};Object(r["q"])();var A=C((function(e,t,n,o,a,i){return Object(r["p"])(),Object(r["d"])(r["a"],{to:"body"},[Object(r["g"])("div",{class:"Modal",style:Object(w["a"])({background:n.backgroundColor},i.modalVisible())},[Object(r["g"])("div",q,[Object(r["g"])("p",null,Object(r["y"])(n.modalName),1),n.showCloseX?(Object(r["p"])(),Object(r["d"])("div",{key:0,class:"Modal__closeButton",onClick:t[1]||(t[1]=function(e){return i.closeModal()})},[R])):Object(r["e"])("",!0)]),Object(r["g"])("div",M,[Object(r["v"])(e.$slots,"default",{},void 0,!0)])],4)])})),N={props:{backgroundColor:{type:String,required:!1,default:"#343840"},modalOpen:{type:Boolean,required:!0},modalName:{type:String,required:!0},showCloseX:{type:Boolean,default:!0}},emits:["modalOff"],methods:{modalVisible:function(){return{opacity:this.modalOpen?1:0,transform:this.modalOpen?"translate(-50%, -50%)":"translate(-50%, -200vh)"}},closeModal:function(){this.$emit("modalOff",!0)}}};n("792e");N.render=A,N.__scopeId="data-v-9391ffae";var x=N,G=Object(r["G"])("data-v-809d7516"),H=G((function(e,t,n,o,a,i){return Object(r["p"])(),Object(r["d"])(r["a"],{to:n.renderTo},[n.show?(Object(r["p"])(),Object(r["d"])("div",{key:0,class:"Backdrop",onClick:t[1]||(t[1]=function(e){return i.close()})})):Object(r["e"])("",!0)],8,["to"])})),P={props:{show:{type:Boolean,required:!0},renderTo:{type:String,required:!1,default:"body"}},emits:["closeBackdrop"],methods:{close:function(){this.$emit("closeBackdrop",!0)}}};n("c838");P.render=H,P.__scopeId="data-v-809d7516";var F=P;function W(e,t,n,o,a,i){var c=Object(r["w"])("settings-form");return Object(r["p"])(),Object(r["d"])(c,{onChangeSettings:o.editSettings,onCloseSettings:o.closeSettingsModal},null,8,["onChangeSettings","onCloseSettings"])}var E=n("3835"),D=(n("4fad"),Object(r["G"])("data-v-26b73a8c"));Object(r["s"])("data-v-26b73a8c");var V={class:"SettingsForm"},$={class:"SettingsForm__ButtonWrapper"},X=Object(r["f"])("CANCEL"),J=Object(r["f"])("OK");Object(r["q"])();var K=D((function(e,t,n,o,a,i){var c=Object(r["w"])("Input"),s=Object(r["w"])("Button"),u=Object(r["w"])("Form");return Object(r["p"])(),Object(r["d"])("div",V,[Object(r["g"])(u,{ref:"formRef",class:"SettingsForm__Form",onSubmit:o.handleSubmit,"validation-schema":o.schema},{default:D((function(){return[Object(r["g"])(c,{name:"session",type:"number",label:"Session",placeholder:o.timerSettings.session},null,8,["placeholder"]),Object(r["g"])(c,{name:"shortBreak",type:"number",label:"Short Break",placeholder:o.timerSettings.shortBreak},null,8,["placeholder"]),Object(r["g"])(c,{name:"longBreak",type:"number",label:"Long Break",placeholder:o.timerSettings.longBreak},null,8,["placeholder"]),Object(r["g"])(c,{name:"longBreakInterval",type:"number",label:"Long Break Interval",placeholder:o.timerSettings.longBreakInterval},null,8,["placeholder"]),Object(r["g"])("div",$,[Object(r["g"])(s,{type:"button",onButtonClicked:o.handleCancelButton},{default:D((function(){return[X]})),_:1},8,["onButtonClicked"]),Object(r["g"])(s,{type:"submit"},{default:D((function(){return[J]})),_:1})])]})),_:1},8,["onSubmit","validation-schema"])])})),z=n("5502"),Q=n("7bb1"),U=n("506a"),Y=(n("b0c0"),Object(r["G"])("data-v-5a9698d2"));Object(r["s"])("data-v-5a9698d2");var Z={class:"Input"},ee={class:"Input__wrapper"};Object(r["q"])();var te=Y((function(e,t,n,o,a,i){return Object(r["p"])(),Object(r["d"])("div",Z,[Object(r["g"])("div",ee,[Object(r["g"])("label",{class:"Input__label",for:n.name},Object(r["y"])(n.label),9,["for"]),Object(r["g"])("input",{class:["Input__input",{"Input__input--error":!!o.errorMessage}],name:n.name,id:n.name,type:n.type,value:o.inputValue,placeholder:n.placeholder,onInput:t[1]||(t[1]=function(){return o.handleChange&&o.handleChange.apply(o,arguments)}),onBlur:t[2]||(t[2]=function(){return o.handleBlur&&o.handleBlur.apply(o,arguments)})},null,42,["name","id","type","value","placeholder"])]),Object(r["F"])(Object(r["g"])("p",{class:"Input__error"},Object(r["y"])(o.errorMessage),513),[[r["B"],o.errorMessage]])])})),ne=(n("a9e3"),{name:"Input",props:{type:{type:String,default:"text"},value:{type:Number,required:!1},name:{type:String,required:!0},label:{type:String,required:!0},placeholder:{type:Number,required:!1}},setup:function(e){var t=Object(Q["b"])(e.name,void 0,{initialValue:e.value}),n=t.value,r=t.errorMessage,o=t.handleBlur,a=t.handleChange,i=t.meta;return{handleChange:a,handleBlur:o,errorMessage:r,inputValue:n,meta:i}}});n("9f781");ne.render=te,ne.__scopeId="data-v-5a9698d2";var re=ne,oe=Object(r["G"])("data-v-14c6fd38"),ae=oe((function(e,t,n,o,a,i){return Object(r["p"])(),Object(r["d"])("button",{class:"Button",onClick:t[1]||(t[1]=function(){return i.clickHandler&&i.clickHandler.apply(i,arguments)}),type:n.type},[Object(r["v"])(e.$slots,"default",{},void 0,!0)],8,["type"])})),ie={emits:["buttonClicked"],props:{type:{type:String,required:!1}},methods:{clickHandler:function(){this.$emit("buttonClicked")}}};n("5efd");ie.render=ae,ie.__scopeId="data-v-14c6fd38";var ce=ie,se={components:{Form:Q["a"],Input:re,Button:ce},emits:["changeSettings","closeSettings"],setup:function(e,t){var n=Object(z["b"])(),o=Object(r["u"])(null),a=Object(r["b"])((function(){return n.getters["pomodoro/timerSettings"]})),i=Object(U["b"])().shape({session:Object(U["a"])().typeError("session must be a number").required().min(.1).max(120),shortBreak:Object(U["a"])().typeError("short break must be a number").required().min(.1).max(30),longBreak:Object(U["a"])().typeError("long break must be a number").required().min(.1).max(120),longBreakInterval:Object(U["a"])().typeError("long break interval must be a number").required().min(2).max(10)}),c=function(e,n){var r=n.resetForm;r(),t.emit("changeSettings",e),t.emit("closeSettings")},s=function(){o.value.resetForm(),t.emit("closeSettings")};return{formRef:o,handleSubmit:c,handleCancelButton:s,schema:i,timerSettings:a}}};n("6423");se.render=K,se.__scopeId="data-v-26b73a8c";var ue=se,le={components:{SettingsForm:ue},emits:["modalOff"],setup:function(e,t){var n=Object(z["b"])(),r=function(){t.emit("modalOff")},o=function(e){var t=a(e);n.dispatch("pomodoro/timerSettings",{value:t}),r()};function a(e){for(var t={},n=0,r=Object.entries(e);n<r.length;n++){var o=Object(E["a"])(r[n],2),a=o[0],i=o[1];t[a]=+i}return t}return{closeSettingsModal:r,editSettings:o}}};le.render=W;var de=le,be=Object(r["G"])("data-v-39d3404a");Object(r["s"])("data-v-39d3404a");var pe=Object(r["g"])("span",{class:["material-icons","RestartButton__icon"]},"restart_alt",-1);Object(r["q"])();var fe=be((function(e,t,n,o,a,i){return Object(r["p"])(),Object(r["d"])("button",{class:["RestartButton",{"RestartButton--block":n.timerIsRunning}],onClick:t[1]||(t[1]=function(){return o.clickHandler&&o.clickHandler.apply(o,arguments)})},[pe],2)})),me={name:"ResetButton",props:{timerIsRunning:{type:Boolean,required:!0}},emits:["resetButton"],setup:function(e,t){return{clickHandler:function(){e.timerIsRunning||t.emit("resetButton")}}}};n("41a8");me.render=fe,me.__scopeId="data-v-39d3404a";var ve=me,ge=Object(r["G"])("data-v-486a68f4");Object(r["s"])("data-v-486a68f4");var Oe={class:"ButtonWrapper"};Object(r["q"])();var je=ge((function(e,t,n,o,a,i){return Object(r["p"])(),Object(r["d"])("div",Oe,[Object(r["v"])(e.$slots,"default",{},void 0,!0)])})),Be={name:"ButtonsWrapper"};n("4e0a");Be.render=je,Be.__scopeId="data-v-486a68f4";var ke=Be,he={name:"PomodoroBuilder",components:{PomodoroBuilderWrapper:b,Navigation:O,Display:y,Button:L,SettingsBuilder:de,Modal:x,Backdrop:F,ResetButton:ve,ButtonWrapper:ke},setup:function(){var e=Object(z["b"])(),t=null,n=Object(r["u"])(null),o=Object(r["u"])(!1),a=Object(r["u"])(!1),i=Object(r["u"])(!1),c=Object(r["u"])(!1),s=Object(r["b"])((function(){return e.getters["pomodoro/timerSettings"]}));Object(r["D"])(s,(function(t){var n=t.session,r=t.shortBreak,a=t.longBreakInterval;e.dispatch("pomodoro/sessionTimeLeft",{value:n}),e.dispatch("pomodoro/breakTimeLeft",{value:r}),e.dispatch("pomodoro/sessionsToLongBreak",{value:a}),o.value=!1,c.value=!1}));var u=Object(r["b"])((function(){return j(e.getters["pomodoro/breakTimeLeft"])})),l=Object(r["b"])((function(){return j(e.getters["pomodoro/sessionTimeLeft"])})),d=Object(r["b"])((function(){return e.getters["pomodoro/sessionsToLongBreak"]})),b=function(e){return o.value=e},p=function(){a.value=!0},f=function(){a.value=!1},m=function(){o.value?1===d.value?e.dispatch("pomodoro/breakTimeLeft",{value:s.value.longBreak}):e.dispatch("pomodoro/breakTimeLeft",{value:s.value.shortBreak}):e.dispatch("pomodoro/sessionTimeLeft",{value:s.value.session})},v=function(){i.value?(clearInterval(t),i.value=!1):(O(),i.value=!0)};function g(){n.value.play()}function O(){t=setInterval((function(){o.value?e.dispatch("pomodoro/decrementBreakTimeLeft"):e.dispatch("pomodoro/decrementSessionTimeLeft")}),1e3)}function j(e){var t=function(e){return e<10?"0".concat(e):"".concat(e)},n=Math.floor(e/60),r=e%60;return"".concat(t(n),":").concat(t(r))}return Object(r["D"])(l,(function(n){"00:00"===n&&(g(),e.dispatch("pomodoro/decrementBreakInterval"),i.value=!1,clearInterval(t),o.value=!0,e.dispatch("pomodoro/sessionTimeLeft",{value:s.value.session}))})),Object(r["D"])(u,(function(n){"00:00"===n&&(g(),i.value=!1,clearInterval(t),d.value>1?(c.value=!1,e.dispatch("pomodoro/breakTimeLeft",{value:s.value.shortBreak})):1===d.value?(c.value=!0,e.dispatch("pomodoro/breakTimeLeft",{value:s.value.longBreak})):d.value<=0&&(c.value=!1,e.dispatch("pomodoro/sessionsToLongBreak",{value:s.value.longBreakInterval}),e.dispatch("pomodoro/breakTimeLeft",{value:s.value.shortBreak})),o.value=!1)})),{alarmSound:n,breakIsActive:o,showSettings:a,closeSettings:f,openSettings:p,currentBreakTime:u,currentSessionTime:l,turnOnBreakTab:b,countdownIsRunning:i,startButtonHandler:v,longBreakIsActive:c,resetCurrentTabTime:m}}};he.render=c;var Se=he,ye={name:"App",components:{PomodoroBuilder:Se}};n("7b7f");ye.render=o;var Te=ye,_e={timerSettings:function(e){return e.timerSettings},sessionTimeLeft:function(e){return e.sessionTimeLeft},breakTimeLeft:function(e){return e.breakTimeLeft},sessionsToLongBreak:function(e){return e.sessionsToLongBreak}},Ie={setTimerSettings:function(e,t){e.timerSettings=t.value},setSessionTimeLeft:function(e,t){e.sessionTimeLeft=60*t.value},setBreakTimeLeft:function(e,t){e.breakTimeLeft=60*t.value},setSessionsToLongBreak:function(e,t){e.sessionsToLongBreak=t.value},decrementSessionTimeLeft:function(e){e.sessionTimeLeft-=1},decrementBreakTimeLeft:function(e){e.breakTimeLeft-=1},decrementBreakInterval:function(e){e.sessionsToLongBreak-=1}},Le={timerSettings:function(e,t){e.commit("setTimerSettings",{value:t.value})},sessionTimeLeft:function(e,t){e.commit("setSessionTimeLeft",{value:t.value})},breakTimeLeft:function(e,t){e.commit("setBreakTimeLeft",{value:t.value})},sessionsToLongBreak:function(e,t){e.commit("setSessionsToLongBreak",{value:t.value})},decrementSessionTimeLeft:function(e){e.commit("decrementSessionTimeLeft")},decrementBreakTimeLeft:function(e){e.commit("decrementBreakTimeLeft")},decrementBreakInterval:function(e){e.commit("decrementBreakInterval")}},we={namespaced:!0,state:function(){return{timerSettings:{session:25,shortBreak:5,longBreak:15,longBreakInterval:2},sessionTimeLeft:1500,breakTimeLeft:300,sessionsToLongBreak:2}},getters:_e,mutations:Ie,actions:Le},Ce=we,qe=Object(z["a"])({modules:{pomodoro:Ce}}),Re=qe;Object(r["c"])(Te).use(Re).mount("#app")},"5efd":function(e,t,n){"use strict";n("fa10")},6423:function(e,t,n){"use strict";n("9ae4")},"6b2f":function(e,t,n){},"792e":function(e,t,n){"use strict";n("9f78")},"7b7f":function(e,t,n){"use strict";n("25cb")},"8d56":function(e,t,n){},"92ad":function(e,t,n){},"9ae4":function(e,t,n){},"9f78":function(e,t,n){},"9f781":function(e,t,n){"use strict";n("92ad")},a8ce:function(e,t,n){},ae45:function(e,t,n){},aed6:function(e,t,n){},c838:function(e,t,n){"use strict";n("aed6")},d64d:function(e,t,n){"use strict";n("37b2")},ef00:function(e,t,n){},fa10:function(e,t,n){}});
//# sourceMappingURL=app.e326cbcc.js.map