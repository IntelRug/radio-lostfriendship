(function(e){function t(t){for(var n,r,o=t[0],c=t[1],l=t[2],d=0,f=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&f.push(a[r][0]),a[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);u&&u(t);while(f.length)f.shift()();return i.push.apply(i,l||[]),s()}function s(){for(var e,t=0;t<i.length;t++){for(var s=i[t],n=!0,o=1;o<s.length;o++){var c=s[o];0!==a[c]&&(n=!1)}n&&(i.splice(t--,1),e=r(r.s=s[0]))}return e}var n={},a={app:0},i=[];function r(t){if(n[t])return n[t].exports;var s=n[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=e,r.c=n,r.d=function(e,t,s){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(s,n,function(t){return e[t]}.bind(null,n));return s},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var u=c;i.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("cd49")},2034:function(e,t,s){"use strict";var n=s("8309"),a=s.n(n);a.a},4678:function(e,t,s){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(e){var t=i(e);return s(t)}function i(e){if(!s.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}a.keys=function(){return Object.keys(n)},a.resolve=i,e.exports=a,a.id="4678"},6761:function(e,t,s){"use strict";var n=s("e5f5"),a=s.n(n);a.a},8309:function(e,t,s){},b67e:function(e,t,s){},c712:function(e,t,s){},cd49:function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var n=s("f9a4"),a=s.n(n),i=s("2b0e"),r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"page__wrapper"},[s("div",{staticClass:"page__content"},[s("router-view")],1)])},o=[],c=s("d4ec"),l=s("99de"),u=s("7e84"),d=s("262e"),f=s("9ab4"),v=s("60a3"),h=function(e){function t(){return Object(c["a"])(this,t),Object(l["a"])(this,Object(u["a"])(t).apply(this,arguments))}return Object(d["a"])(t,e),t}(v["d"]);h=f["a"]([Object(v["a"])({})],h);var p,b=h,j=b,m=(s("f565"),s("2877")),y=Object(m["a"])(j,r,o,!1,null,null,null),_=y.exports,g=s("8c4f"),k=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content"},[s("div",{staticClass:"content__player"},[s("div",{staticClass:"player"},[s("audio",{ref:"audio",attrs:{hidden:""}}),e._m(0),s("div",{staticClass:"player__meta"},[s("div",{staticClass:"player__meta-title",domProps:{innerHTML:e._s(e.title)}}),s("div",{staticClass:"player__meta-artist",class:{"player__meta-artist_live":"livestream"===e.type},domProps:{innerHTML:e._s(e.artist)}})]),s("div",{staticClass:"player__progress"},[s("div",{staticClass:"player__progress-time"},[e._v(" "+e._s(e._f("toHHMMSS")(e.progress))+" ")]),s("div",{staticClass:"player__progress-background"},[s("div",{staticClass:"player__progress-color",style:{width:e.progressInPercents+"%"}})]),s("div",{staticClass:"player__progress-time"},[e._v(" "+e._s(e._f("toHHMMSS")(e.duration))+" ")])]),s("div",{staticClass:"player__controls"},[s("button",{staticClass:"player__play-button",on:{click:e.play}},[s("svg",{directives:[{name:"show",rawName:"v-show",value:!e.isPlaying,expression:"!isPlaying"}],staticClass:"player__icon"},[s("use",{attrs:{"xlink:href":"/img/icon.svg#icon_play"}})]),s("svg",{directives:[{name:"show",rawName:"v-show",value:e.isPlaying,expression:"isPlaying"}],staticClass:"player__icon"},[s("use",{attrs:{"xlink:href":"/img/icon.svg#icon_pause"}})])]),s("div",{ref:"selection",staticClass:"player__stream-selection"},[s("button",{staticClass:"player__dropdown-button",on:{click:function(t){e.dropdown=!e.dropdown}}},[e._v(" "+e._s(e.source.name)+" ")]),s("ul",{staticClass:"player__dropdown",class:{player__dropdown_active:e.dropdown}},e._l(e.streams.filter((function(t){return t.name!==e.source.name})),(function(t){return s("li",{key:t.id,staticClass:"player__dropdown-item",on:{click:function(s){return e.selectStream(t.id)}}},[e._v(" "+e._s(t.name)+" ")])})),0)]),s("div",{staticClass:"player__volume"},[s("div",{staticClass:"player__volume-icon"},[s("svg",{staticClass:"player__icon"},[s("use",{attrs:{"xlink:href":"/img/icon.svg#icon_volume_mute"}})])]),s("div",{staticClass:"player__volume-slider"},[s("SeekBar",{attrs:{value:e.volume},on:{"update:value":e.setVolume}})],1),s("div",{staticClass:"player__volume-icon"},[s("svg",{staticClass:"player__icon"},[s("use",{attrs:{"xlink:href":"/img/icon.svg#icon_volume_up"}})])])])])])]),s("div",{staticClass:"content__ad"},[s("Ad")],1)])},w=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"player__header"},[s("h1",{staticClass:"player__title"},[e._v(" Radio LostFriendship ")]),s("a",{staticClass:"player__playlist",attrs:{href:"/playlist/RadioLostFriendship.m3u"}},[e._v(" M3U ")])])}],I=(s("99af"),s("7db0"),s("b0c0"),s("d3b7"),s("acd8"),s("e25e"),s("1276"),s("96cf"),s("bee2")),x=s("bc3a"),O=s.n(x),C=s("7f45"),M=s.n(C),S=s("a78e"),P=s.n(S),z=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"seek-bar",on:{mousedown:e.onMouseDown}},[s("div",{staticClass:"seek-bar__box"},[s("div",{ref:"bg",staticClass:"seek-bar__bg",style:{width:100*e.valueSynced+"%"}},[s("div",{ref:"seeker",staticClass:"seek-bar__seeker",class:{"seek-bar__seeker_active":e.pointerDown}})])])])},D=[],Y=p=function(e){function t(){var e;return Object(c["a"])(this,t),e=Object(l["a"])(this,Object(u["a"])(t).apply(this,arguments)),e.pointerDown=!1,e}return Object(d["a"])(t,e),Object(I["a"])(t,[{key:"mounted",value:function(){var e=this;document.addEventListener("mouseup",(function(){e.pointerDown=!1})),document.addEventListener("mousemove",(function(t){e.onMouseMove(t)}))}},{key:"onMouseDown",value:function(e){this.pointerDown=!0,this.valueSynced=p.getPosition(this.bg.parentElement,e)}},{key:"onMouseMove",value:function(e){this.pointerDown&&(this.valueSynced=p.getPosition(this.bg.parentElement,e))}}],[{key:"getPosition",value:function(e,t){if(void 0!==e&&null!==e&&void 0!==t){var s=e.getBoundingClientRect().left,n=(t.pageX-s)/e.clientWidth;return n<0?n=0:n>1&&(n=1),n}return 0}}]),t}(v["d"]);f["a"]([Object(v["b"])("value",{default:0})],Y.prototype,"valueSynced",void 0),f["a"]([Object(v["c"])()],Y.prototype,"bg",void 0),f["a"]([Object(v["c"])()],Y.prototype,"timestamp",void 0),Y=p=f["a"]([Object(v["a"])({})],Y);var H,E,A=Y,T=A,L=(s("6761"),Object(m["a"])(T,z,D,!1,null,null,null)),R=L.exports,$=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},U=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"ad"},[s("p",{staticClass:"ad__text"},[e._v(" Join our Discord: "),s("a",{staticClass:"ad__link",attrs:{href:"https://discord.gg/bHyMcva"}},[e._v("https://discord.gg/tFEEYzm")])])])}],B=(H=Object(v["a"])({}),H(E=function(e){function t(){return Object(c["a"])(this,t),Object(l["a"])(this,Object(u["a"])(t).apply(this,arguments))}return Object(d["a"])(t,e),t}(v["d"]))||E),F=B,G=(s("fd9a"),Object(m["a"])(F,$,U,!1,null,null,null)),N=G.exports,V=function(e){function t(){var e;return Object(c["a"])(this,t),e=Object(l["a"])(this,Object(u["a"])(t).apply(this,arguments)),e.liveInfo=null,e.now=0,e.isPlaying=!1,e.streams=[{id:1,name:"320 KBIT/S MP3",url:"https://radio.lostfriendship.net/320",offset:10},{id:2,name:"128 KBIT/S MP3",url:"https://radio.lostfriendship.net/128",offset:10},{id:3,name:"64 KBIT/S OGG",url:"https://radio.lostfriendship.net/64",offset:5}],e.selectedStreamId=1,e.dropdown=!1,e.volume=.5,e}return Object(d["a"])(t,e),Object(I["a"])(t,[{key:"ontrackChanged",value:function(){var e=this;setTimeout((function(){e.getMetadata()}),5e3)}},{key:"onPlayingStateChanged",value:function(e){return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(this.$nextTick());case 2:e?(this.audio.src="".concat(this.source.url,"?t=").concat(Date.now()),this.audio.load(),this.audio.play()):(this.audio.pause(),this.audio.src="/silence.mp3",this.audio.load());case 3:case"end":return t.stop()}}),null,this)}},{key:"onVolumeChanged",value:function(e){return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:this.audio.volume=e,P.a.set("volume",String(e),{expires:3650});case 2:case"end":return t.stop()}}),null,this)}},{key:"created",value:function(){var e=this;this.getMetadata(),this.getLiveInfoInterval=setInterval(this.getMetadata,1e4),this.nowInterval=setInterval((function(){e.now=Math.floor(Date.now()/1e3)}),500)}},{key:"mounted",value:function(){var e=this;document.onclick=function(t){e.selection.contains(t.target)||(e.dropdown=!1)},this.audio.volume=this.volume,this.audio.onpause=function(){e.isPlaying=!1},this.audio.onplay=function(){e.isPlaying=!0},this.getCookies()}},{key:"beforeDestroy",value:function(){clearInterval(this.getLiveInfoInterval),clearInterval(this.nowInterval)}},{key:"getCookies",value:function(){this.volume=parseFloat(P.a.get("volume")||"0.5"),this.selectedStreamId=parseInt(P.a.get("stream_id")||"1",10)}},{key:"getMetadata",value:function(){var e,t;return regeneratorRuntime.async((function(s){while(1)switch(s.prev=s.next){case 0:return s.prev=0,s.next=3,regeneratorRuntime.awrap(O.a.get("https://airtime.lostfriendship.net/api/live-info"));case 3:e=s.sent,this.liveInfo=e.data,this.liveInfo&&(t="Europe/London",this.liveInfo.previous.startsAt=M.a.tz(this.liveInfo.previous.starts,"YYYY-MM-DD HH-mm-ss",t).unix(),this.liveInfo.current.startsAt=M.a.tz(this.liveInfo.current.starts,"YYYY-MM-DD HH-mm-ss",t).unix(),this.liveInfo.next.startsAt=M.a.tz(this.liveInfo.next.starts,"YYYY-MM-DD HH-mm-ss",t).unix(),this.liveInfo.previous.endsAt=M.a.tz(this.liveInfo.previous.ends,"YYYY-MM-DD HH-mm-ss",t).unix(),this.liveInfo.current.endsAt=M.a.tz(this.liveInfo.current.ends,"YYYY-MM-DD HH-mm-ss",t).unix(),this.liveInfo.next.endsAt=M.a.tz(this.liveInfo.next.ends,"YYYY-MM-DD HH-mm-ss",t).unix(),"track"===this.liveInfo.previous.type&&(this.liveInfo.previous.metadata.seconds=M.a.duration(this.liveInfo.previous.metadata.length).asSeconds()),"track"===this.liveInfo.current.type&&(this.liveInfo.current.metadata.seconds=M.a.duration(this.liveInfo.current.metadata.length).asSeconds()),"track"===this.liveInfo.next.type&&(this.liveInfo.next.metadata.seconds=M.a.duration(this.liveInfo.next.metadata.length).asSeconds())),s.next=10;break;case 8:s.prev=8,s.t0=s["catch"](0);case 10:case"end":return s.stop()}}),null,this,[[0,8]])}},{key:"play",value:function(){this.isPlaying=!this.isPlaying}},{key:"selectStream",value:function(e){return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:if(this.selectedStreamId=e,P.a.set("stream_id",String(e),{expires:3650}),this.dropdown=!1,!this.isPlaying){t.next=10;break}return this.isPlaying=!1,t.next=7,regeneratorRuntime.awrap(this.$nextTick());case 7:return t.next=9,regeneratorRuntime.awrap(this.$nextTick());case 9:this.isPlaying=!0;case 10:case"end":return t.stop()}}),null,this)}},{key:"setVolume",value:function(e){this.volume=e}},{key:"track",get:function(){if(this.liveInfo){if(this.liveInfo.current.endsAt-this.now<=-this.source.offset)return"next";if(this.liveInfo.current.startsAt-this.now>-this.source.offset)return"previous"}return"current"}},{key:"type",get:function(){return this.liveInfo?this.liveInfo[this.track].type:"track"}},{key:"title",get:function(){return this.liveInfo?"livestream"===this.type?this.liveInfo[this.track].name.split("-")[0]:this.liveInfo[this.track].metadata.track_title||"Unknown title":"Unknown title"}},{key:"artist",get:function(){return this.liveInfo?"livestream"===this.type?"LiveStream":this.liveInfo[this.track].metadata.artist_name||"Unknown artist":"Unknown artist"}},{key:"duration",get:function(){return this.liveInfo&&this.liveInfo[this.track].endsAt-this.liveInfo[this.track].startsAt||0}},{key:"progress",get:function(){if(this.liveInfo){var e=this.now-this.liveInfo[this.track].startsAt-this.source.offset;return e<0?0:e>=this.duration?this.duration:e||0}return 0}},{key:"progressInPercents",get:function(){return 100/this.duration*this.progress}},{key:"source",get:function(){var e=this;return this.streams.find((function(t){return t.id===e.selectedStreamId}))}}]),t}(v["d"]);f["a"]([Object(v["c"])()],V.prototype,"audio",void 0),f["a"]([Object(v["c"])()],V.prototype,"selection",void 0),f["a"]([Object(v["e"])("track")],V.prototype,"ontrackChanged",null),f["a"]([Object(v["e"])("isPlaying")],V.prototype,"onPlayingStateChanged",null),f["a"]([Object(v["e"])("volume")],V.prototype,"onVolumeChanged",null),V=f["a"]([Object(v["a"])({components:{Ad:N,SeekBar:R},filters:{toHHMMSS:function(e){var t=parseFloat(String(e)),s=Math.floor(t/3600),n=Math.floor((t-60*s*60)/60),a=Math.floor(t-60*n-60*s*60);return a<10&&(a="0".concat(a)),s&&n<10&&(n="0".concat(n)),"".concat(s?"".concat(s,":"):"").concat(n,":").concat(a)}}})],V);var J=V,K=J,q=(s("2034"),Object(m["a"])(K,k,w,!1,null,null,null)),W=q.exports;i["a"].use(g["a"]);var X=[{path:"/",name:"home",component:W},{path:"*",redirect:"/"}],Q=new g["a"]({mode:"history",base:"/",routes:X}),Z=Q,ee=s("2f62");i["a"].use(ee["a"]);var te=new ee["a"].Store({state:{},mutations:{},actions:{},modules:{}});a()(),i["a"].config.productionTip=!1,new i["a"]({router:Z,store:te,render:function(e){return e(_)}}).$mount("#app")},e5f5:function(e,t,s){},f565:function(e,t,s){"use strict";var n=s("c712"),a=s.n(n);a.a},fd9a:function(e,t,s){"use strict";var n=s("b67e"),a=s.n(n);a.a}});
//# sourceMappingURL=app.d46fb2cb.js.map