(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-29d28852"],{1502:function(t,e,a){"use strict";a("c003")},"1bdc":function(t,e,a){},5930:function(t,e,a){"use strict";a("8511")},8511:function(t,e,a){},"91b4":function(t,e,a){},a9a2:function(t,e,a){"use strict";a("1bdc")},c003:function(t,e,a){},cd92:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"columns fixed-page"},[a("div",{staticClass:"column main-column"},[a("div",{staticClass:"flexrow filters"},[a("div",{staticClass:"flexrow-item"},[a("combobox-task-type",{staticClass:"flexrow-item",attrs:{label:t.$t("quota.type_label"),"task-type-list":t.productionShotTaskTypes},model:{value:t.taskTypeId,callback:function(e){t.taskTypeId=e},expression:"taskTypeId"}})],1),a("div",{staticClass:"flexrow-item"},[a("combobox",{staticClass:"flexrow-item",attrs:{label:t.$t("quota.detail_label"),options:t.detailLevelOptions},model:{value:t.detailLevelString,callback:function(e){t.detailLevelString=e},expression:"detailLevelString"}})],1),"day"===t.detailLevelString?a("combobox",{staticClass:"flexrow-item",attrs:{label:t.$t("quota.month_label"),options:t.monthOptions},model:{value:t.monthString,callback:function(e){t.monthString=e},expression:"monthString"}}):t._e(),a("combobox",{staticClass:"flexrow-item",attrs:{label:t.$t("quota.year_label"),options:t.yearOptions},model:{value:t.yearString,callback:function(e){t.yearString=e},expression:"yearString"}}),a("div",{staticClass:"flexrow-item"},[a("combobox",{staticClass:"flexrow-item",attrs:{label:t.$t("quota.count_label"),options:t.countModeOptions},model:{value:t.countMode,callback:function(e){t.countMode=e},expression:"countMode"}})],1),a("div",{staticClass:"flexrow-item"},[a("info-question-mark",{staticClass:"mt2",attrs:{text:t.$t("quota.explaination")}})],1),a("div",{staticClass:"filler"}),a("button-simple",{staticClass:"flexrow-item",attrs:{title:t.$t("quota.export_quotas"),icon:"download"},on:{click:t.exportQuotas}})],1),a("div",{staticClass:"flexrow mb2 mt0"},[a("search-field",{ref:"search-field",staticClass:"search-field flexrow-item",on:{change:t.onSearchChange}}),a("span",{staticClass:"label flexrow-item"},[t._v(" "+t._s(t.$t("quota.highlight_quotas"))+" ")]),a("text-field",{staticClass:"flexrow-item max-quota-input",attrs:{type:"number"},model:{value:t.maxQuota,callback:function(e){t.maxQuota=e},expression:"maxQuota"}})],1),a("quota",{ref:"quota-list",attrs:{taskTypeId:t.taskTypeId,detailLevel:t.detailLevelString,year:t.currentYear,month:t.currentMonth,week:t.currentWeek,day:t.currentDay,currentPerson:t.currentPerson,countMode:t.currentMode,searchText:t.searchText,maxQuota:t.maxQuota}})],1),t.showInfo?a("div",{staticClass:"column side-column"},[a("people-quota-info",{attrs:{person:t.currentPerson,year:t.currentYear,month:t.currentMonth,week:t.currentWeek,day:t.currentDay,"is-loading":t.isPersonShotsLoading,"is-loading-error":!1,shots:t.personShots,"count-mode":t.countMode},on:{close:t.hideSideInfo}})],1):t._e()])},r=[],n=a("7f45"),s=a.n(n),i=a("2f62"),u=a("3455"),c=a("8c97"),l=a("3657"),d=a("9d8b"),h=a("de40"),p=a("992f"),f=a("e4fd"),y=a("c009"),m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"people-timesheet-info"},[a("div",{staticClass:"close"},[a("router-link",{staticClass:"close-button",attrs:{to:t.closeRoute}},[a("x-icon")],1)],1),a("div",{staticClass:"flexrow"},[a("people-avatar",{staticClass:"flexrow-item",attrs:{person:t.person,"no-cache":!0}}),a("page-title",{staticClass:"flexrow-item",attrs:{text:t.person.full_name}})],1),t.isMonthInfo?a("div",{staticClass:"info-date"},[t._v(" "+t._s(t.monthString)+" "+t._s(t.year)+" ")]):t.isWeekInfo?a("div",{staticClass:"info-date"},[t._v(" week "+t._s(t.week)+", "+t._s(t.startDay)+" - "+t._s(t.endDay)+" "+t._s(t.weekMonth)+" "+t._s(t.year)+" ")]):t.isDayInfo?a("div",{staticClass:"info-date"},[t._v(" "+t._s(t.day)+" "+t._s(t.monthString)+" "+t._s(t.year)+" ")]):t._e(),a("quota-shot-list",{staticClass:"time-spent-list",attrs:{"count-mode":t.countMode,shots:t.shots,"is-loading":t.isLoading,"is-error":t.isLoadingError}})],1)},b=[],g=a("0a35"),v=a("8d07"),k=a("eb8c"),w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"data-list"},[t.isLoading?t._e():a("table",{staticClass:"details table"},[a("thead",[a("tr",[a("th",[t._v(t._s(t.$t("quota.details_name")))]),a("th",[t._v(" "+t._s("seconds"===this.countMode?t.$t("quota.details_seconds"):t.$t("quota.details_frames"))+" ")]),a("th",[t._v(t._s(t.$t("quota.weight")))])])]),a("tbody",t._l(t.shots,(function(e){return a("tr",{key:"shot-quota-"+e.id},[a("td",[t._v(t._s(e.full_name))]),a("td",[t._v(t._s(t.getQuota(e)))]),a("td",[t._v(t._s(e.weight))])])})),0)]),a("table-info",{attrs:{"is-loading":t.isLoading,"is-error":t.isLoadingError}})],1)},_=[],O=a("bcd2"),M=a("e60b");function S(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,o)}return a}function L(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?S(Object(a),!0).forEach((function(e){q(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):S(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function q(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var j={name:"quota-shot-list",components:{TableInfo:M["a"]},data:function(){return{projectNames:{}}},props:{shots:{type:Array,default:function(){return[]}},isLoading:{type:Boolean,default:!1},isLoadingError:{type:Boolean,default:!1},countMode:{type:String,default:"frames"}},computed:L({},Object(i["c"])(["currentProduction","lastProductionScreen","taskTypeMap"])),methods:L(L({},Object(i["b"])([])),{},{getQuota:function(t){return"seconds"===this.countMode?Object(O["d"])(t.nb_frames,this.currentProduction,t):t.nb_frames}}),watch:{}},x=j,P=(a("5930"),a("0c7c")),C=Object(P["a"])(x,w,_,!1,null,"08efedbe",null),I=C.exports;function $(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,o)}return a}function T(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?$(Object(a),!0).forEach((function(e){D(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):$(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function D(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var Q={name:"shot-quota-info",components:{XIcon:g["hb"],PageTitle:v["a"],PeopleAvatar:k["a"],QuotaShotList:I},props:{person:{type:Object,default:function(){}},year:{type:Number,default:0},month:{type:Number,default:0},week:{type:Number,default:0},day:{type:Number,default:0},countMode:{type:String,default:"frames"},isLoading:{type:Boolean,default:!1},isLoadingError:{type:Boolean,default:!1},shots:{type:Array,default:function(){return[]}}},computed:T(T({},Object(i["c"])(["currentEpisode","currentProduction"])),{},{startDay:function(){return s()().day("Monday").year(this.year).week(this.week).date()},endDay:function(){return s()().day("Monday").year(this.year).week(this.week).add("days",6).date()},weekMonth:function(){return s()().day("Monday").year(this.year).week(this.week).format("MMM")},monthString:function(){return Object(l["s"])(this.month)},isMonthInfo:function(){return this.$route.path.indexOf("month")>0},isWeekInfo:function(){return this.$route.path.indexOf("week")>0},isDayInfo:function(){return this.$route.path.indexOf("day")>0},closeRoute:function(){if(!this.currentProduction)return{};var t={name:"quota",production_id:this.currentProduction.id};return this.isMonthInfo?t={name:"quota-month",params:{year:this.year}}:this.isWeekInfo?t={name:"quota-week",params:{year:this.year}}:this.isDayInfo&&(t={name:"quota-day",params:{year:this.year,month:this.month}}),this.currentEpisode&&(t.name="episode-".concat(t.name),t.params.episode_id=this.currentEpisode.id),t}}),methods:T(T({},Object(i["b"])([])),{},{onCloseClicked:function(){this.$emit("close")}})},E=Q,R=(a("a9a2"),Object(P["a"])(E,m,b,!1,null,"5ef21a06",null)),Y=R.exports,N=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"data-list"},[a("div",{ref:"body",staticClass:"datatable-wrapper"},[a("table",{staticClass:"datatable"},[a("thead",{staticClass:"datatable-head"},[a("tr",[a("th",{ref:"rowHeaderName",staticClass:"name datatable-row-header",attrs:{scope:"col"}},[t._v(" "+t._s(t.$t("quota.name"))+" ")]),a("th",{staticClass:"average datatable-row-header",style:{left:t.averageColumnX},attrs:{scope:"col"}},[t._v(" "+t._s(t.$t("quota.average"))+" ")]),t._l(t.monthRange,(function(e){return"month"===t.detailLevel?a("th",{key:"month-"+e,attrs:{scope:"col"}},[t._v(" "+t._s(t.monthToString(e))+" ")]):t._e()})),t._l(t.weekRange,(function(e){return"week"===t.detailLevel?a("th",{key:"week-"+e,attrs:{scope:"col"}},[t._v(" "+t._s(e)+" ")]):t._e()})),t._l(t.dayRange,(function(e){return"day"===t.detailLevel?a("th",{key:"day-"+e,attrs:{scope:"col"}},[t._v(" "+t._s(e)+" ")]):t._e()}))],2)]),this.quotaLength>0&&!t.isLoading?a("tbody",{staticClass:"datatable-body"},t._l(t.filteredPersonIds,(function(e){return a("tr",{key:"name-"+e,staticClass:"datatable-row"},[a("th",{staticClass:"name datatable-row-header",attrs:{scope:"row"}},[a("div",{staticClass:"flexrow"},[a("people-avatar",{attrs:{size:30,person:t.personMap.get(e)}}),t._v(" "+t._s(t.personMap.get(e).full_name)+" ")],1)]),"month"===t.detailLevel?a("td",{staticClass:"average datatable-row-header",style:{left:t.averageColumnX}},[t._v(" "+t._s(t.getQuotaAverage(e,{year:t.year}))+" ")]):t._e(),"week"===t.detailLevel?a("td",{staticClass:"average datatable-row-header",style:{left:t.averageColumnX}},[t._v(" "+t._s(t.getQuotaAverage(e,{year:t.year}))+" ")]):t._e(),"day"===t.detailLevel?a("td",{staticClass:"average datatable-row-header",style:{left:t.averageColumnX}},[t._v(" "+t._s(t.getQuotaAverage(e,{year:t.year,month:t.month}))+" ")]):t._e(),t._l(t.monthRange,(function(o){return"month"===t.detailLevel?a("td",{key:"month-"+o,class:{selected:t.isMonthSelected(e,t.year,o),"quota-low":t.isMonthQuotaLow(e,t.year,o)}},[t.getQuota(e,{year:t.year,month:o})?a("router-link",{staticClass:"quota-button",attrs:{to:t.episodifyRoute({name:"quota-month-person",params:{person_id:e,year:t.year,month:o}})}},[t._v(" "+t._s("seconds"===t.countMode?t.getQuota(e,{year:t.year,month:o}).toFixed(2):t.getQuota(e,{year:t.year,month:o}))+" ")]):a("span",[t._v("-")])],1):t._e()})),t._l(t.weekRange,(function(o){return"week"===t.detailLevel?a("td",{key:"week-"+o,class:{selected:t.isWeekSelected(e,t.year,o),"quota-low":t.isWeekQuotaLow(e,t.year,t.month)}},[t.getQuota(e,{year:t.year,week:o})?a("router-link",{staticClass:"quota-button",attrs:{to:t.episodifyRoute({name:"quota-week-person",params:{person_id:e,year:t.year,week:o}})}},[t._v(" "+t._s("seconds"===t.countMode?t.getQuota(e,{year:t.year,week:o}).toFixed(2):t.getQuota(e,{year:t.year,week:o}))+" ")]):a("span",[t._v(" - ")])],1):t._e()})),t._l(t.dayRange,(function(o){return"day"===t.detailLevel?a("td",{key:"day-"+o,class:{weekend:t.isWeekend(t.year,t.month,o),selected:t.isDaySelected(e,t.year,t.month,o),"quota-low":t.isDayQuotaLow(e,t.year,t.month,o)}},[t.getQuota(e,{year:t.year,month:t.month,day:o})?a("router-link",{staticClass:"quota-button",attrs:{to:t.episodifyRoute({name:"quota-day-person",params:{person_id:e,year:t.year,month:t.month,day:o}})}},[t._v(" "+t._s("seconds"===t.countMode?t.getQuota(e,{year:t.year,month:t.month,day:o}).toFixed(2):t.getQuota(e,{year:t.year,month:t.month,day:o}))+" ")]):a("span",[t._v(" - ")])],1):t._e()}))],2)})),0):t._e()])]),0!==this.quotaLength||t.isLoading?t._e():a("div",{staticClass:"has-text-centered empty-quota"},[a("p",{staticClass:"info"},[t._v(t._s(t.$t("quota.no_quota")))])]),a("table-info",{attrs:{"is-loading":t.isLoading,"is-error":t.isError}})],1)},W=[],A=a("2017");function X(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,o)}return a}function F(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?X(Object(a),!0).forEach((function(e){B(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):X(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function B(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var z={name:"quota",components:{PeopleAvatar:k["a"],TableInfo:M["a"]},props:{taskTypeId:{type:String,required:!0},detailLevel:{type:String,default:"day",required:!0},countMode:{type:String,default:"frames",required:!0},year:{type:Number,default:0},month:{type:Number,default:0},week:{type:Number,default:0},day:{type:Number,default:0},searchText:{type:String,default:""},maxQuota:{default:0}},data:function(){return{currentMonth:s()().month()+1,currentYear:s()().year(),currentWeek:s()().week(),detailsTitle:"",detailsMap:{},isPanelShown:!1,isLoading:!0,isError:!1,personIds:[],quotaMap:{},quotaLength:0,selected:void 0,averageColumnX:"12rem"}},mounted:function(){var t=this;this.shotMap.size<2?(this.isLoading=!0,setTimeout((function(){t.loadShots((function(e){e||t.loadData()}))}),100)):(this.isShotsLoading||(this.isLoading=!1),this.loadData())},computed:F(F({},Object(i["c"])(["currentEpisode","isShotsLoading","shotMap","personMap"])),{},{monthRange:function(){return Object(l["n"])(this.year,this.currentYear,this.currentMonth)},dayRange:function(){return Object(l["j"])(this.year,this.month,this.currentYear,this.currentMonth)},weekRange:function(){return Object(l["p"])(this.year,this.currentYear,this.currentWeek)},filteredPersonIds:function(){var t=this.personIds;return this.searchText.length>0&&(t=Object(A["k"])(this.personIndex,this.searchText.split(" ")).map((function(t){return t.id}))),t}}),methods:F(F({},Object(i["b"])(["loadShots","computeQuota","getPeriodDetails"])),{},{episodifyRoute:function(t){return this.currentEpisode&&Object(d["a"])(t,this.currentEpisode.id),t},isWeekend:function(t,e,a){var o=s()("".concat(t,"-").concat(e,"-").concat(a),"YYYY-MM-DD");return a<10&&(o=s()("".concat(t,"-").concat(e,"-0").concat(a),"YYYY-MM-DD")),[0,6].includes(o.day())},loadData:function(){var t=this;this.taskTypeId&&(this.isLoading=!0,this.computeQuota({taskTypeId:this.taskTypeId,detailLevel:this.detailLevel,countMode:this.countMode}).then((function(e){t.quotaMap=e,t.quotaLength=Object.keys(t.quotaMap).length,t.calcAverageColumnX(),t.$nextTick((function(){t.isLoading=!1}))})))},loadDetails:function(t,e){var a=this;this.loadShots((function(o){a.isLoading=!0,o?console.error(o):a.taskTypeId&&a.getPeriodDetails({taskTypeId:a.taskTypeId,detailLevel:a.detailLevel,personId:t,dateString:e}).then((function(t){a.detailsMap=t}))}))},monthToString:l["s"],dateDigit:function(t){return t.toString().padStart(2,"0")},getQuota:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(e.day){var a="".concat(e.year,"-").concat(this.dateDigit(e.month),"-").concat(this.dateDigit(e.day));return this.quotaMap[t].day[this.countMode][a]}if(e.week){var o="".concat(e.year,"-").concat(e.week);return this.quotaMap[t].week[this.countMode][o]}var r="".concat(e.year,"-").concat(this.dateDigit(e.month));return this.quotaMap[t].month[this.countMode][r]},getQuotaAverage:function(t){var e,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=0,r=0;if("day"===this.detailLevel){var n="".concat(a.year,"-").concat(this.dateDigit(a.month));r=this.quotaMap[t].month[this.countMode][n],e=this.quotaMap[t].day.entries[n]}else if("week"===this.detailLevel){var s=a.year;r=this.quotaMap[t].year[this.countMode][s],e=this.quotaMap[t].week.entries[s]}else if("month"===this.detailLevel){var i=a.year;r=this.quotaMap[t].year[this.countMode][i],e=this.quotaMap[t].month.entries[i]}return o=r/e,o?o.toFixed(2):"-"},isDaySelected:function(t,e,a,o){return this.$route.params.person_id&&this.$route.params.person_id===t&&""+this.$route.params.year===""+e&&""+this.$route.params.month===""+a&&""+this.$route.params.day===""+o},isWeekSelected:function(t,e,a){return this.$route.params.person_id&&this.$route.params.person_id===t&&""+this.$route.params.year===""+e&&""+this.$route.params.week===""+a},isMonthSelected:function(t,e,a){return this.$route.params.person_id&&this.$route.params.person_id===t&&""+this.$route.params.year===""+e&&""+this.$route.params.month===""+a},isDayQuotaLow:function(t,e,a,o){var r=this.getQuota(t,{year:e,month:a,day:o});return null!==r&&this.maxQuota>r},isWeekQuotaLow:function(t,e,a){return this.maxQuota>this.getQuota(t,{year:e,week:a})},isMonthQuotaLow:function(t,e,a){return this.maxQuota>this.getQuota(t,{year:e,month:a})},calcAverageColumnX:function(){this.quotaLength>0&&(this.averageColumnX="".concat(this.$refs.rowHeaderName.offsetWidth,"px"))},resetPersonIds:function(){var t=this,e=Object.keys(this.quotaMap),a=e.map((function(e){return t.personMap.get(e)}));this.personIndex=Object(A["d"])(a),this.personIds=e.sort((function(e,a){var o=t.personMap.get(e).full_name,r=t.personMap.get(a).full_name;return o.localeCompare(r)}))}}),watch:{taskTypeId:function(){this.taskTypeId&&this.loadData()},detailLevel:function(){},countMode:function(){},quotaMap:function(){this.resetPersonIds()},$route:function(){var t=this,e=document.getElementsByClassName("selected");0===e.length&&setTimeout((function(){t.$refs.body.scrollLeft+=380}),100)}}},H=z,J=(a("1502"),Object(P["a"])(H,N,W,!1,null,"3d1900a8",null)),G=J.exports,K=a("4d04"),U=a("7bf8");function V(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,o)}return a}function Z(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?V(Object(a),!0).forEach((function(e){tt(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):V(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function tt(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var et={name:"production-quota",components:{ButtonSimple:h["a"],Combobox:p["a"],ComboboxTaskType:f["a"],InfoQuestionMark:y["a"],PeopleQuotaInfo:Y,Quota:G,SearchField:K["a"],TextField:U["a"]},data:function(){return{taskTypeId:"",countMode:"frames",countModeOptions:[{label:"Frames",value:"frames"},{label:"Seconds",value:"seconds"},{label:"Count",value:"count"}],detailLevelOptions:[{label:"Day",value:"day"},{label:"Week",value:"week"},{label:"Month",value:"month"}],currentYear:s()().year(),currentMonth:s()().month()+1,currentWeek:s()().week(),currentDay:s()().date(),currentPerson:this.getCurrentPerson(),currentMode:"frames",detailLevelString:"day",detailLevel:"day",isLoading:!1,isLoadingError:!1,isPersonShotsLoading:!1,maxQuota:0,monthString:"".concat(s()().month()+1),personShots:[],searchText:"",showInfo:!1,yearString:"".concat(s()().year())}},mounted:function(){this.loadRoute()},computed:Z(Z({},Object(i["c"])(["currentEpisode","currentProduction","productionShotTaskTypes","shotTaskTypes","personMap"])),{},{yearOptions:function(){var t=2018,e=s()().year();return Object(l["v"])(t,e).map((function(t){return{label:t,value:"".concat(t)}}))},monthOptions:function(){var t="".concat(s()().year()),e=1,a=s()().month()+1,o=Object(l["v"])(e,12);return t===this.yearString&&(o=Object(l["v"])(e,a)),o.map((function(t){return{label:Object(l["s"])(t),value:"".concat(t)}}))}}),methods:Z(Z({},Object(i["b"])(["computeQuota","getPersonQuotaShots","loadShots"])),{},{getCurrentPerson:function(){var t=this.$route.params.person_id;return t&&this.personMap?this.personMap.get(t):{}},loadRoute:function(){var t=this,e=this.$route.params,a=e.month,o=e.year,r=e.week,n=e.day,s=this.$route.query,i=s.countMode,u=s.taskTypeId;if(this.$route.path.indexOf("week")>0&&(this.detailLevel="week"),this.$route.path.indexOf("month")>0&&(this.detailLevel="month"),this.$route.path.indexOf("day")>0&&(this.detailLevel="day"),this.currentPerson=this.getCurrentPerson(),this.detailLevelString=this.detailLevel,i&&(this.countMode=i,this.currentMode=this.countMode),u)this.taskTypeId=u;else{var c="quota:".concat(this.currentProduction.id,":task-type-id");this.taskTypeId=localStorage.getItem(c)||this.shotTaskTypes[0].id}a&&(this.currentMonth=Number(a),this.monthString="".concat(a)),o&&(this.currentYear=Number(o),this.yearString="".concat(o)),r&&(this.currentWeek=Number(r),this.weekString="".concat(r)),n&&(this.currentDay=Number(n)),this.$route.path.indexOf("person")>0?(this.isPersonShotsLoading=!0,this.getPersonQuotaShots({personId:this.currentPerson.id,detailLevel:this.detailLevel,taskTypeId:this.taskTypeId,year:o,month:a,week:r,day:n}).then((function(e){t.isPersonShotsLoading=!1,t.personShots=e,t.showSideInfo()}))):this.hideSideInfo()},showSideInfo:function(){this.showInfo=!0},hideSideInfo:function(){this.showInfo=!1},episodifyRoute:function(t){return this.currentEpisode&&Object(d["a"])(t,this.currentEpisode.id),t},exportQuotas:function(){var t=this,e=this.$refs["quota-list"].quotaMap,a=["quotas",this.detailLevel,this.currentYear];"day"===this.detailLevel&&a.push(this.currentMonth);var o=c["a"].slugify(a.join("_")),r=Object.keys(e).map((function(e){return t.personMap.get(e)})).sort((function(t,e){return t.full_name.localeCompare(e.full_name)}));u["a"].generateQuotas(o,e,r,this.countMode,this.detailLevel,this.currentYear,this.currentMonth,this.currentWeek)},onSearchChange:function(t){this.searchText=t}}),watch:{detailLevelString:function(){if(this.detailLevel!==this.detailLevelString){var t={name:"quota-".concat(this.detailLevelString),params:{year:this.currentYear},query:{countMode:this.countMode}};"day"===this.detailLevelString&&(t.params.month=this.currentMonth),this.$router.push(this.episodifyRoute(t))}},yearString:function(){var t=Number(this.yearString),e=s()().month()+1;if(this.currentYear!==t){var a={name:"quota-".concat(this.detailLevelString),params:{year:t},query:{countMode:this.countMode}};"day"===this.detailLevelString&&(a.params.month="".concat(Math.min(Number(this.monthString),e))),this.$router.push(this.episodifyRoute(a))}},monthString:function(){if(this.currentMonth!==Number(this.monthString)){var t={name:"quota-day",params:{year:this.currentYear,month:Number(this.monthString)},query:{countMode:this.countMode}};this.$router.push(this.episodifyRoute(t))}},countMode:function(){this.currentMode!==this.countMode&&(this.$route.query.countMode!==this.countMode&&this.$router.push({query:{countMode:this.countMode}}),this.currentMode=this.countMode)},taskTypeId:function(){var t="quota:".concat(this.currentProduction.id,":task-type-id");localStorage.setItem(t,this.taskTypeId),this.$route.query.taskTypeId!==this.taskTypeId&&this.$router.push({query:{taskTypeId:this.taskTypeId}})},currentProduction:function(){var t=this;this.isLoading=!0,this.loadShots((function(){t.loadRoute(),t.isLoading=!1}))},currentEpisode:function(){var t=this;this.isLoading=!0,this.loadShots((function(){t.loadRoute(),t.isLoading=!1}))},$route:function(){this.loadRoute()}}},at=et,ot=(a("eed7"),Object(P["a"])(at,o,r,!1,null,"48983e23",null));e["default"]=ot.exports},eed7:function(t,e,a){"use strict";a("91b4")}}]);
//# sourceMappingURL=chunk-29d28852.8cb52b8c.js.map