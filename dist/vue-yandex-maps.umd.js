!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self)["vue-yandex-maps"]={})}(this,function(e){"use strict";function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,o)}return n}function h(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach(function(e){a(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e){return function(e){if(Array.isArray(e))return l(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function c(e,t){var c=t.options,u=t.callbacks,p=t.map,m=t.useObjectManager,d=t.objectManagerClusterize,f=t.useHtmlInLayout?'\n    <div v-html="properties.balloonContentHeader"></div>\n    <div v-html="properties.balloonContentBody"></div>\n    <div v-html="properties.balloonContentFooter"></div>\n  ':"\n    <div>{{ properties.balloonContentHeader }}</div>\n    <div>{{ properties.balloonContentBody }}</div>\n    <div>{{ properties.balloonContentFooter }}</div>\n  ",y={},n=[];if(e.forEach(function(e){e.clusterName?y[e.clusterName]=y[e.clusterName]?[].concat(s(y[e.clusterName]),[e]):[e]:n.push(e)}),Object.keys(y).forEach(function(e){var t=h({},c[e])||{},n=u[e]||{},o=t.layout||f;t.clusterBalloonItemContentLayout=ymaps.templateLayoutFactory.createClass(o);var r=t.clusterBalloonLayout||t.clusterLayout;delete t.clusterBalloonLayout;var a=r?ymaps.templateLayoutFactory.createClass(r):t.clusterBalloonContentLayout||"cluster#balloonTwoColumns";t.clusterBalloonContentLayout=a;var i=t.clusterIconContentLayout;if(t.clusterIconContentLayout=i&&ymaps.templateLayoutFactory.createClass(i),m){var s=new ymaps.ObjectManager(Object.assign({clusterize:d},t));Object.keys(n).forEach(function(e){s.clusters.events.add(e,n[e])}),s.add(y[e]),p.geoObjects.add(s)}else{var l=new ymaps.Clusterer(t);Object.keys(n).forEach(function(e){l.events.add(e,n[e])}),t.createCluster&&(l.createCluster=t.createCluster),l.add(y[e]),p.geoObjects.add(l)}}),n.length){var o=m?new ymaps.ObjectManager({clusterize:!1}):new ymaps.GeoObjectCollection;n.forEach(function(e){return o.add(e)}),p.geoObjects.add(o)}}function v(e){return e.charAt(0).toUpperCase()+e.slice(1)}function u(e,t){var a=[];return function e(t,n){if(t===n)return!0;if(t instanceof Date&&n instanceof Date)return+t==+n;if("function"==typeof t&&"function"==typeof n)return!0;if("object"!==i(t)||"object"!==i(n))return!1;if(function(e,t){for(var n=a.length;n--;)if(!(a[n][0]!==e&&a[n][0]!==t||a[n][1]!==t&&a[n][1]!==e))return!0;return!1}(t,n))return!0;a.push([t,n]);var o=Object.keys(t),r=o.length;if(Object.keys(n).length!==r)return!1;for(;r--;)if(!e(t[o[r]],n[o[r]]))return!1;return!0}(e,t)}var g=new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.events={},this.ymapReady=!1,this.scriptIsNotAttached=!0}var t,n,o;return t=e,(n=[{key:"$on",value:function(e,t){var n=this;return this.events[e]||(this.events[e]=[]),this.events[e].push(t),function(){n.events[e]=n.events[e].filter(function(e){return t!==e})}}},{key:"$emit",value:function(e,t){var n=this.events[e];n&&n.forEach(function(e){return e(t)})}}])&&r(t.prototype,n),o&&r(t,o),Object.defineProperty(t,"prototype",{writable:!1}),e}()),t=["fullscreenControl","geolocationControl","routeEditor","rulerControl","searchControl","trafficControl","typeSelector","zoomControl","routeButtonControl","routePanelControl","smallMapDefaultSet","mediumMapDefaultSet","largeMapDefaultSet"];function n(e){return 0===e.filter(function(e){return![].concat(t,["default"]).includes(e)}).length}function p(){var v=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};return new Promise(function(e,t){if(window.ymaps)return e();if(document.getElementById("vue-yandex-maps"))g.$on("scriptIsLoaded",e);else{var n=document.createElement("SCRIPT"),o=v.apiKey,r=void 0===o?"":o,a=v.lang,i=void 0===a?"ru_RU":a,s=v.version,l=void 0===s?"2.1":s,c=v.coordorder,u=void 0===c?"latlong":c,p=v.debug,m=void 0!==p&&p,d=v.enterprise,f=void 0!==d&&d,y=m?"debug":"release",h="lang=".concat(i).concat(r&&"&apikey=".concat(r),"&mode=").concat(y,"&coordorder=").concat(u),b="https://".concat(f?"enterprise.":"","api-maps.yandex.ru/").concat(l,"/?").concat(h);n.setAttribute("src",b),n.setAttribute("async",""),n.setAttribute("defer",""),n.setAttribute("id","vue-yandex-maps"),document.head.appendChild(n),g.scriptIsNotAttached=!1,n.onload=function(){ymaps.ready(function(){g.ymapReady=!0,g.$emit("scriptIsLoaded"),e()})},n.onerror=t}})}var m,d=1;var f=g,y=["actionend","balloonclose","balloonopen","click","contextmenu","dblclick","destroy","hintclose","hintopen","optionschange","sizechange","typechange"],b={pluginOptions:{},provide:function(){var t,r,e,o,a,i,s=this,n=[],l=[];return null!=this.balloonComponent&&(o=this.balloonComponent,a=null,i="vue-balloon-".concat(d),d+=1,e=function(e,t){var n=ymaps.templateLayoutFactory.createClass('<div id="'.concat(i,'"><div>'),{build:function(){n.superclass.build.call(this),(a=new m({parent:e.$root,data:function(){return{props:e.$props,listeners:e.$listeners}},propsData:{marker:t,component:o}})).$mount("#".concat(i))},clear:function(){a.$destroy(),a=null,n.superclass.clear.call(this)}});return n}),{useObjectManager:this.useObjectManager,addMarker:this.addMarker,deleteMarker:function(e){s.myMap.geoObjects&&(n.push(e),t&&clearTimeout(t),t=setTimeout(function(){s.deleteMarkers(n),n=[]},0))},compareValues:function(e){var t=e.newVal,n=e.oldVal,o=e.marker;u(t,n)||(l.push(o),r&&clearTimeout(r),r=setTimeout(function(){s.setMarkers(l),l=[]},0))},makeComponentBalloonTemplate:e}},data:function(){return{ymapId:"yandexMap".concat(Math.round(1e5*Math.random())),style:this.ymapClass?"":"width: 100%; height: 100%;",isReady:!1,debounce:null}},props:{coords:{type:Array,required:!0},zoom:{validator:function(e){return!Number.isNaN(e)},default:18},bounds:Array,clusterOptions:{type:Object,default:function(){return{}}},clusterCallbacks:{type:Object,default:function(){return{}}},behaviors:{type:Array,default:function(){return["default"]}},controls:{type:Array,default:function(){return["default"]},validator:function(e){return n(e)}},detailedControls:{type:Object,validator:function(e){return n(Object.keys(e))}},scrollZoom:{type:Boolean,default:!0},mapType:{type:String,default:"map",validator:function(e){return["map","satellite","hybrid"].includes(e)}},placemarks:{type:Array,default:function(){return[]}},useObjectManager:{type:Boolean,default:!1},objectManagerClusterize:{type:Boolean,default:!0},ymapClass:String,initWithoutMarkers:{type:Boolean,default:!0},debug:{type:Boolean,default:!1},settings:{type:Object,default:function(){return{}}},options:{type:Object,default:function(){return{}}},mapEvents:{type:Array,default:function(){return[]}},showAllMarkers:Boolean,disablePan:Boolean,balloonComponent:{type:[Object,Function],default:function(){return null}},useHtmlInLayout:Boolean},computed:{coordinates:function(){return this.coords.map(function(e){return+e})}},methods:{init:function(){var a=this;if(this.myMap={},this.markers=[],window.ymaps&&ymaps.GeoObjectCollection&&(this.initWithoutMarkers||this.$slots.default||this.placemarks.length)){if(this.$emit("map-initialization-started"),this.myMap=new ymaps.Map(this.ymapId,{center:this.coordinates,zoom:+this.zoom,bounds:this.bounds,behaviors:this.behaviors,controls:this.controls,type:"yandex#".concat(this.mapType)},this.options),(this.mapEvents.length?this.mapEvents:y).forEach(function(t){return a.myMap.events.add(t,function(e){return a.$emit(t,e)})}),this.myMap.events.add("boundschange",function(e){var t=e.originalEvent,n=t.newZoom,o=t.newCenter,r=t.newBounds;a.$emit("boundschange",e),a.$emit("update:zoom",n),a.$emit("update:coords",o),a.$emit("update:bounds",r)}),this.detailedControls)Object.keys(this.detailedControls).forEach(function(e){a.myMap.controls.remove(e),a.myMap.controls.add(e,a.detailedControls[e])});!1===this.scrollZoom&&this.myMap.behaviors.disable("scrollZoom"),this.isReady=!0,this.$emit("map-was-initialized",this.myMap)}},addMarker:function(e){var t=this;this.markers.push(e),this.debounce&&clearTimeout(this.debounce),this.debounce=setTimeout(function(){t.setMarkers(t.markers)},0)},setMarkers:function(e){var t=this,n={options:this.clusterOptions,callbacks:this.clusterCallbacks,map:this.myMap,useObjectManager:this.useObjectManager,objectManagerClusterize:this.objectManagerClusterize,useHtmlInLayout:this.useHtmlInLayout};if(this.markers!==e){var o=e.map(function(e){return t.useObjectManager?e.id:e.properties.get("markerId")});this.deleteMarkers(o),c(e,n),this.$emit("markers-was-change",o)}else c(e,n);this.markers=[],this.showAllMarkers&&this.myMap.setBounds(this.myMap.geoObjects.getBounds())},deleteMarkers:function(a){var i=this,t=[];this.myMap.geoObjects.each(function(e){return t.push(e)}),t.forEach(function(t){var n=[];if(i.useObjectManager)t.remove(a);else{var e,o=function(e){var t=e.properties.get("markerId");a.includes(t)&&n.push(e)};if(t.each)t.each(o),e=t.getLength();else if(t.getGeoObjects){var r=t.getGeoObjects();r.forEach(o),e=r.length}0===e||e===n.length?i.myMap.geoObjects.remove(t):n.length&&n.forEach(function(e){return t.remove(e)})}}),this.$emit("markers-was-delete",a)}},watch:{coordinates:function(e){this.myMap&&(this.disablePan?this.myMap.setCenter&&this.myMap.setCenter(e):this.myMap.panTo&&this.myMap.getZoom()&&this.myMap.panTo(e,{checkZoomRange:!0}))},zoom:function(){this.myMap&&this.myMap.setZoom(this.zoom)},bounds:function(e){this.myMap&&this.myMap.setBounds&&this.myMap.setBounds(e)}},render:function(e){return e("section",{class:"ymap-container",ref:"mapContainer"},[e("div",{attrs:{id:this.ymapId,class:this.ymapClass,style:this.style}}),this.isReady&&e("div",[this.$slots.default])])},mounted:function(){var e=this;if(this.$attrs["map-link"]||this.$attrs.mapLink)throw new Error("Vue-yandex-maps: Attribute mapLink is not supported. Use settings.");if(this.placemarks&&this.placemarks.length)throw new Error("Vue-yandex-maps: Attribute placemarks is not supported. Use marker component.");this.mapObserver=new MutationObserver(function(){e.myMap.container&&e.myMap.container.fitToViewport()});var t=this.$refs.mapContainer;if(this.mapObserver.observe(t,{attributes:!0,childList:!0,characterData:!0,subtree:!1}),f.scriptIsNotAttached){var n=this.debug;p(h(h(h({},this.$options.pluginOptions),this.settings),{},{debug:n}))}f.ymapReady?ymaps.ready(this.init):f.$on("scriptIsLoaded",this.init)},beforeDestroy:function(){this.myMap&&this.myMap.geoObjects&&this.myMap.geoObjects.removeAll()}},k=["placemark","polyline","rectangle","polygon","circle"],O=["balloonclose","balloonopen","click","contextmenu","dblclick","drag","dragend","dragstart","hintclose","hintopen","mouseenter","mouseleave"],C={inject:["useObjectManager","addMarker","deleteMarker","compareValues","makeComponentBalloonTemplate"],props:{coords:Array,hintContent:String,icon:Object,balloon:Object,markerType:{type:String,validator:function(e){return k.includes(e.toLowerCase())},default:"placemark"},markerFill:Object,markerStroke:Object,clusterName:[String,Number],circleRadius:{validator:function(e){return!Number.isNaN(e)},default:1e3},balloonTemplate:String,markerId:{type:[String,Number],required:!0},properties:Object,options:Object,balloonComponentProps:{type:Object,default:function(){return{}}},markerEvents:{type:Array,default:function(){return[]}},balloonHtmlContent:{type:String,default:""}},data:function(){return{unwatchArr:[]}},render:function(e){return e(null)},mounted:function(){var n=this;Object.keys(this.$props).forEach(function(e){"balloonComponentProps"!==e&&n.unwatchArr.push(n.$watch(e,function(e,t){return n.compareValues({newVal:e,oldVal:t,marker:n.defineMarker()})}))}),this.addMarker(this.defineMarker())},methods:{defineMarker:function(){var n=this,e={markerId:this.markerId,markerType:this.markerType||"placemark",coords:function t(e){return e.map(function(e){return Array.isArray(e)?t(e):+e})}(this.coords),hintContent:this.hintContent,markerFill:this.markerFill,circleRadius:+this.circleRadius,clusterName:this.clusterName,markerStroke:this.markerStroke,balloon:this.balloon,properties:this.properties,options:this.options,balloonOptions:{}},t=null,o=null;this.balloonTemplate&&(t=ymaps.templateLayoutFactory.createClass(this.balloonTemplate)),t=ymaps.templateLayoutFactory.createClass(this.balloonHtmlContent),this.$slots.balloonLayout&&(o=ymaps.templateLayoutFactory.createClass(this.$slots.balloonLayout[0].elm.outerHTML)),this.makeComponentBalloonTemplate&&(t=this.makeComponentBalloonTemplate(this,e)),null!=t&&(e.balloonOptions.balloonContentLayout=t),null!=o&&(e.balloonOptions.balloonLayout=o),this.icon&&["default#image","default#imageWithContent"].includes(this.icon.layout)?(e.iconContent=this.icon.content,e.iconLayout=this.icon.layout,e.iconImageHref=this.icon.imageHref,e.iconImageSize=this.icon.imageSize,e.iconImageOffset=this.icon.imageOffset,e.iconContentOffset=this.icon.contentOffset,this.icon.contentLayout&&"string"==typeof this.icon.contentLayout&&(e.iconContentLayout=ymaps.templateLayoutFactory.createClass(this.icon.contentLayout))):e.icon=this.icon;var r,a=function(e,t){var n=v(e);if(!t)return n;switch(n){case"Placemark":return"Point";case"Polyline":return"LineString";default:return n}}(e.markerType,this.useObjectManager),i={hintContent:e.hintContent,iconContent:e.icon?e.icon.content:e.iconContent,markerId:e.markerId},s=e.balloon?{balloonContentHeader:e.balloon.header,balloonContentBody:e.balloon.body,balloonContentFooter:e.balloon.footer}:{},l=Object.assign(i,s,e.properties),c=e.iconLayout?{iconLayout:e.iconLayout,iconImageHref:e.iconImageHref,iconImageSize:e.iconImageSize,iconImageOffset:e.iconImageOffset,iconContentOffset:e.iconContentOffset,iconContentLayout:e.iconContentLayout}:{preset:e.icon&&"islands#".concat((r=e,(r.icon.color||"blue")+(r.icon.glyph?v(r.icon.glyph):r.icon.content?"Stretchy":"")),"Icon")},u=e.markerStroke?{strokeColor:e.markerStroke.color||"0066ffff",strokeOpacity:0<=parseFloat(e.markerStroke.opacity)?parseFloat(e.markerStroke.opacity):1,strokeStyle:e.markerStroke.style,strokeWidth:0<=parseFloat(e.markerStroke.width)?parseFloat(e.markerStroke.width):1}:{},p=e.markerFill?{fill:e.markerFill.enabled||!0,fillColor:e.markerFill.color||"0066ff99",fillOpacity:0<=parseFloat(e.markerFill.opacity)?parseFloat(e.markerFill.opacity):1,fillImageHref:e.markerFill.imageHref||""}:{},m=Object.assign(c,u,p,e.balloonOptions,e.options);"Circle"===a&&(e.coords=[e.coords,e.circleRadius]);var d,f,y,h={properties:l,options:m,markerType:a,coords:e.coords,clusterName:e.clusterName},b=(d=h,f=this.useObjectManager,this.$emit,(y=f?{type:"Feature",id:d.properties.markerId,geometry:{type:d.markerType,coordinates:d.coords},properties:d.properties,options:d.options}:new ymaps[d.markerType](d.coords,d.properties,d.options)).clusterName=d.clusterName,y);this.useObjectManager||(this.markerEvents.length?this.markerEvents:O).forEach(function(t){return b.events.add(t,function(e){return n.$emit(t,e)})});return b}},beforeDestroy:function(){this.unwatchArr.forEach(function(e){return e()}),this.deleteMarker(this.markerId)}};b.install=function e(t){var n,o=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};e.installed||(3!=+t.version[0]?(e.installed=!0,"function"==typeof(n=t).extend&&(m=n.extend({props:["marker","component"],template:'<component :is="component" v-bind="{ marker, ...props.balloonComponentProps }" v-on="listeners" />'})),b.pluginOptions=o,t.component("yandex-map",b),t.component("ymap-marker",C)):console.warn("Vue-yandex-maps: This version is only compatible with Vue 2.X. Please install vue-yandex-maps@next"))},"undefined"!=typeof window&&window.Vue&&window.Vue.use(b);var M=p,j=b,w=C;e.default=b,e.loadYmap=M,e.yandexMap=j,e.ymapMarker=w,Object.defineProperty(e,"__esModule",{value:!0})});
