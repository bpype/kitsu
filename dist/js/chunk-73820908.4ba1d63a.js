(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-73820908"],{"05f2":function(t,e,s){"use strict";var i=s("722b"),n=s.n(i);n.a},1008:function(t,e,s){"use strict";var i=s("2451"),n=s.n(i);n.a},1922:function(t,e,s){"use strict";var i=s("6a2a"),n=s.n(i);n.a},2451:function(t,e,s){},"361f":function(t,e,s){},"5ddb":function(t,e,s){},"6a2a":function(t,e,s){},"70f5":function(t,e,s){"use strict";var i=s("ce84"),n=s.n(i);n.a},"722b":function(t,e,s){},9355:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a",{staticClass:"button",attrs:{title:t.title,href:t.path,target:t.target}},["plus"===t.icon?s("plus-icon",{staticClass:"icon is-small"}):t._e(),"download"===t.icon?s("download-icon",{staticClass:"icon is-small"}):t._e(),"upload"===t.icon?s("upload-icon",{staticClass:"icon is-small"}):t._e(),s("span",{staticClass:"text is-hidden-touch"},[t._v(" "+t._s(t.text)+" ")])],1)},n=[],a=s("0a35"),o={name:"button-href-link",components:{PlusIcon:a["B"],DownloadIcon:a["m"],UploadIcon:a["K"]},props:{text:{default:"",type:String},path:{default:"",type:String},icon:{default:"",type:String},title:{default:"",type:String},styleclass:{default:"",type:String},target:{default:"_self",type:String}}},r=o,c=(s("f4d2"),s("2877")),l=Object(c["a"])(r,i,n,!1,null,"a4487af4",null);e["a"]=l.exports},"97bb":function(t,e,s){},"9cf0":function(t,e,s){"use strict";var i=s("361f"),n=s.n(i);n.a},a34a:function(t,e,s){"use strict";var i=s("5ddb"),n=s.n(i);n.a},ce84:function(t,e,s){},f4d2:function(t,e,s){"use strict";var i=s("97bb"),n=s.n(i);n.a},fd5f:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"breakdown page"},[s("div",{staticClass:"breakdown-columns"},[s("div",{staticClass:"breakdown-column casting-column"},[s("div",{staticClass:"flexrow mb1"},[s("combobox-styled",{staticClass:"mr1",attrs:{label:t.$t("main.for"),options:t.castingTypeOptions},model:{value:t.castingType,callback:function(e){t.castingType=e},expression:"castingType"}}),t.isShotCasting?s("combobox-styled",{attrs:{label:t.$t("shots.fields.sequence"),options:t.castingSequenceOptions},model:{value:t.sequenceId,callback:function(e){t.sequenceId=e},expression:"sequenceId"}}):t._e(),t.isAssetCasting?s("combobox-styled",{attrs:{label:t.$t("tasks.fields.asset_type"),options:t.castingAssetTypesOptions},model:{value:t.assetTypeId,callback:function(e){t.assetTypeId=e},expression:"assetTypeId"}}):t._e(),s("span",{staticClass:"filler"}),s("button-simple",{staticClass:"flexrow-item",attrs:{title:t.$t("main.csv.import_file"),icon:"upload","is-responsive":!0},on:{click:t.showImportModal}}),s("button-href-link",{staticClass:"flexrow-item",attrs:{title:t.$t("main.csv.export_file"),icon:"download","is-responsive":!0,path:t.exportUrlPath}})],1),t.isLoading?s("spinner",{staticClass:"mt1"}):s("div",{staticClass:"mt1"},t._l(t.castingEntities,(function(e){return s("shot-line",{key:e.id,attrs:{"entity-id":e.id,selected:t.selection[e.id],name:e.name,assets:t.castingByType[e.id]||[],"read-only":!t.isCurrentUserManager},on:{"edit-label":t.onEditLabelClicked,"remove-one":t.removeOneAsset,"remove-ten":t.removeTenAssets,click:t.selectEntity}})})),1)],1),t.isCurrentUserManager?s("div",{directives:[{name:"scroll",rawName:"v-scroll",value:t.onAssetListScroll,expression:"onAssetListScroll"}],ref:"asset-list",staticClass:"breakdown-column assets-column"},[s("h2",{staticClass:"subtitle"},[t._v(" "+t._s(t.$t("breakdown.all_assets"))+" ")]),s("div",{staticClass:"filters-area flexrow"},[s("search-field",{staticClass:"flexrow-item",on:{change:t.onSearchChange}})],1),t.isAssetsLoading?s("spinner"):t._l(t.availableAssetsByType,(function(e){return s("div",{key:e.length>0?e[0].asset_type_name:"",staticClass:"type-assets"},[s("div",{staticClass:"asset-type"},[t._v(" "+t._s(e.length>0?e[0].asset_type_name:"")+" ")]),s("div",{staticClass:"asset-list"},t._l(e,(function(e){return s("available-asset-block",{key:e.id,attrs:{asset:e,active:Object.keys(t.selection).length>0},on:{"add-one":t.addOneAsset,"add-ten":t.addTenAssets}})})),1)])}))],2):t._e()]),s("import-render-modal",{attrs:{active:t.modals.isImportRenderDisplayed,"is-loading":t.loading.importing,"is-error":t.errors.importing,"parsed-csv":t.parsedCSV,"form-data":t.importCsvFormData,columns:t.csvColumns,dataMatchers:t.dataMatchers,database:t.filteredCasting,"disable-update":!0},on:{reupload:t.resetImport,cancel:t.hideImportRenderModal,confirm:t.uploadImportFile}}),s("import-modal",{ref:"import-modal",attrs:{active:t.modals.importing,"is-loading":t.loading.importing,"is-error":t.errors.importing,"form-data":t.importCsvFormData,columns:t.csvColumns},on:{cancel:t.hideImportModal,confirm:t.renderImport}}),s("edit-label-modal",{ref:"edit-label-modal",attrs:{active:t.modals.isEditLabelDisplayed,"is-loading":t.loading.editLabel,"is-error":t.loading.editError,asset:t.editedAsset,label:t.editedAssetLinkLabel},on:{cancel:function(e){t.modals.isEditLabelDisplayed=!1},confirm:t.confirmEditLabel}})],1)},n=[],a=(s("a4d3"),s("99af"),s("4de4"),s("c740"),s("4160"),s("c975"),s("a15b"),s("fb6a"),s("b0c0"),s("e439"),s("dbb4"),s("b64b"),s("498a"),s("159b"),s("ade3")),o=s("2f62"),r=s("3657"),c=s("3455"),l=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{class:{asset:!0,active:t.active},attrs:{id:"casting-"+t.asset.id,title:t.asset.name}},[s("div",{staticClass:"asset-add",on:{click:t.addOneAsset}},[t._v(" + 1 ")]),s("div",{staticClass:"asset-add-10",on:{click:t.addTenAssets}},[t._v(" + 10 ")]),t.asset.preview_file_id.length>0?s("div",{staticClass:"asset-picture"},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"/api/pictures/thumbnails-square/preview-files/"+t.asset.preview_file_id+".png",expression:"'/api/pictures/thumbnails-square/preview-files/' + asset.preview_file_id + '.png'"}],attrs:{alt:""}})]):s("div",{staticClass:"asset-picture"},[s("span",{staticClass:"empty-picture"},[t._v(" "+t._s(t.asset.name)+" ")])])])},d=[],u={name:"available-asset-block",props:{asset:{default:function(){return{id:"",name:""}},type:Object},active:{default:!1,type:Boolean}},computed:{},methods:{addOneAsset:function(t){this.active&&this.$emit("add-one",this.asset.id)},addTenAssets:function(t){this.active&&this.$emit("add-ten",this.asset.id)}}},p=u,h=(s("05f2"),s("2877")),f=Object(h["a"])(p,l,d,!1,null,"1241cdcc",null),m=f.exports,b=s("9355"),v=s("de40"),y=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.label.length>0?s("label",{staticClass:"label"},[t._v(" "+t._s(t.label)+" ")]):t._e(),s("div",{class:{combo:!0,open:t.showList}},[s("div",{staticClass:"flexrow",on:{click:t.toggleList}},[s("div",{staticClass:"selected-line flexrow-item"},[t._v(" "+t._s(t.selectedOption?t.selectedOption.label:"")+" ")]),s("chevron-down-icon",{staticClass:"down-icon flexrow-item"})],1),t.showList?s("div",{ref:"select",staticClass:"select-input"},t._l(t.options,(function(e){return s("div",{key:e.id,staticClass:"option-line",on:{click:function(s){return t.selectOption(e)},mouseup:function(s){return"button"in s&&1!==s.button?null:t.openRoute(e)}}},[t._v(" "+t._s(e.label)+" ")])})),0):t._e()]),s("div",{class:{"c-mask":!0,"is-active":t.showList},on:{click:t.toggleList}})])},g=[],O=(s("7db0"),s("0a35"));function C(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,i)}return s}function _(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?C(Object(s),!0).forEach((function(e){Object(a["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):C(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var w={name:"combobox-styled",components:{ChevronDownIcon:O["e"]},data:function(){return{selectedOption:{label:"",value:""},showList:!1}},props:{label:{default:"",type:String},options:{default:function(){return[]},type:Array},value:{default:"",type:String}},mounted:function(){this.options.length>0&&(this.selectedOption=this.options[0])},computed:_({},Object(o["c"])(["isDarkTheme"])),methods:{selectOption:function(t){this.$emit("input",t.value),this.selectedOption=t,this.showList=!1},openRoute:function(t){var e=this.$router.resolve(t.route).href,s="".concat(window.location.protocol,"//").concat(window.location.host).concat(e);window.open(s,"_blank")},toggleList:function(){this.showList=!this.showList}},watch:{options:function(){var t=this;if(this.options.length>0){var e=this.options.find((function(e){return e.value===t.value}));this.selectedOption=e||this.options[0]}},value:function(){var t=this;this.selectedOption=this.options.find((function(e){return e.value===t.value}))}}},I=w,A=(s("1922"),Object(h["a"])(I,y,g,!1,null,"17773d83",null)),k=A.exports,S=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{class:{modal:!0,"is-active":t.active}},[s("div",{staticClass:"modal-background"}),s("div",{staticClass:"modal-content"},[s("div",{staticClass:"box content"},[s("h1",{staticClass:"title"},[t._v(" "+t._s(t.$t("breakdown.edit_label"))+" ")]),s("form",{on:{submit:function(t){t.preventDefault()}}},[s("combobox",{directives:[{name:"focus",rawName:"v-focus"}],ref:"typeField",attrs:{label:t.$t("breakdown.label"),options:t.typeOptions},on:{enter:t.confirm},model:{value:t.form.label,callback:function(e){t.$set(t.form,"label",e)},expression:"form.label"}}),s("modal-footer",{attrs:{"is-loading":t.isLoading},on:{confirm:t.confirm,cancel:function(e){return t.$emit("cancel")}}})],1)])])])},E=[],T=s("d065"),L=s("992f"),j=s("d5c9");function x(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,i)}return s}function $(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?x(Object(s),!0).forEach((function(e){Object(a["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):x(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var q={name:"edit-label-modal",mixins:[T["a"]],components:{Combobox:L["a"],ModalFooter:j["a"]},props:{active:{type:Boolean,default:!1},isError:{type:Boolean,default:!1},isLoading:{type:Boolean,default:!1},label:{type:String}},mounted:function(){this.form.label=this.label},data:function(){return{asset:null,form:{label:"animate"},typeOptions:[{label:this.$t("breakdown.options.animate"),value:"animate"},{label:this.$t("breakdown.options.fixed"),value:"fixed"}]}},computed:$({},Object(o["c"])([])),methods:$({},Object(o["b"])([]),{confirm:function(){return this.$emit("confirm",this.form)}}),watch:{label:function(){this.form.label=this.label}}},P=q,D=(s("1008"),Object(h["a"])(P,S,E,!1,null,"025efb2d",null)),M=D.exports,B=s("4918"),F=s("440f"),R=s("4d04"),U=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{class:{shot:!0,selected:t.selected,unselectable:!0},attrs:{id:t.entityId},on:{click:function(e){return t.onClicked(e)}}},[s("div",{staticClass:"flexrow"},[s("div",{staticClass:"shot-name flexrow-item"},[t._v(" "+t._s(t.name)+" ")]),s("div",{staticClass:"asset-list flexrow-item"},[t._l(t.assets,(function(e){return s("div",{key:e.length>0?e[0].asset_type_name:"",staticClass:"asset-type-line flexrow"},[s("span",{staticClass:"asset-type-name flexrow-item"},[t._v(" "+t._s(e.length>0?e[0].asset_type_name:"")+" ")]),s("div",{staticClass:"asset-type-items flexrow-item"},t._l(e,(function(e){return s("asset-block",{key:e.id,staticClass:"flexrow-item",attrs:{asset:e,"nb-occurences":e.nb_occurences,"read-only":t.readOnly},on:{"edit-label":t.onEditLabelClicked,"remove-one":t.removeOneAsset,"remove-ten":t.removeTenAssets}})})),1)])})),0===t.assets.length?s("div",{staticClass:"asset-type-line flexrow empty"},[t._v(" "+t._s(t.$t("breakdown.empty"))+" ")]):t._e()],2)])])},N=[],K=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{class:{asset:!0,big:!0,casted:!0,active:t.active,labelled:!0},attrs:{title:t.asset.name+" ("+t.nbOccurences+")"}},[s("div",{staticClass:"asset-wrapper"},[t.readOnly?t._e():s("div",{staticClass:"asset-add",on:{click:t.removeOneAsset}},[t._v(" - 1 ")]),t.readOnly?t._e():s("div",{staticClass:"asset-add-10",on:{click:t.removeTenAssets}},[t._v(" - 10 ")]),t.asset.preview_file_id?s("div",{staticClass:"asset-picture"},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"/api/pictures/thumbnails-square/preview-files/"+t.asset.preview_file_id+".png",expression:"'/api/pictures/thumbnails-square/preview-files/' + asset.preview_file_id + '.png'"}],attrs:{alt:""}}),t.nbOccurences>1?s("span",{staticClass:"nb-occurences"},[t._v(" "+t._s(t.nbOccurences)+" ")]):t._e()]):s("div",{staticClass:"asset-picture"},[s("span",{staticClass:"empty-picture"},[t._v(" "+t._s(t.shortenName(t.asset.name))+" ("+t._s(t.nbOccurences)+") ")])])]),s("div",{staticClass:"asset-label",on:{click:t.onEditLabelClicked}},[t._v(" "+t._s(t.asset.label||t.$t("breakdown.options.animate"))+" ")])])},V=[],z=(s("a9e3"),s("8c97")),H={name:"asset-block",components:{},data:function(){return{initialLoading:!0,loading:{EditLabel:!1}}},props:{asset:{default:function(){return{id:"",name:""}},type:Object},nbOccurences:{default:1,type:Number},active:{default:!0,type:Boolean},readOnly:{default:!1,type:Boolean}},computed:{},methods:{removeOneAsset:function(t){this.$emit("remove-one",this.asset.asset_id)},removeTenAssets:function(t){this.$emit("remove-ten",this.asset.asset_id)},shortenName:function(t){return z["a"].shortenText(t,13)},onEditLabelClicked:function(){this.readOnly||this.$emit("edit-label",this.asset,this.asset.label)}}},J=H,G=(s("70f5"),Object(h["a"])(J,K,V,!1,null,"5d19f97e",null)),Q=G.exports,W={name:"shot-line",props:{entityId:{default:"",type:String},selected:{default:!1,type:Boolean},name:{default:"",type:String},assets:{default:function(){return[]},type:Array},readOnly:{default:!1,type:Boolean}},components:{AssetBlock:Q},methods:{onClicked:function(t){this.$emit("click",this.entityId,t)},onEditLabelClicked:function(t,e){this.$emit("edit-label",t,e,this.entityId)},removeOneAsset:function(t){this.$emit("remove-one",t,this.entityId)},removeTenAssets:function(t){this.$emit("remove-ten",t,this.entityId)}}},X=W,Y=(s("9cf0"),Object(h["a"])(X,U,N,!1,null,"78186f59",null)),Z=Y.exports,tt=s("be83");function et(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,i)}return s}function st(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?et(Object(s),!0).forEach((function(e){Object(a["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):et(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var it={name:"breakdown",components:{AvailableAssetBlock:m,ButtonHrefLink:b["a"],ButtonSimple:v["a"],ComboboxStyled:k,EditLabelModal:M,ImportModal:F["a"],ImportRenderModal:B["a"],SearchField:R["a"],ShotLine:Z,Spinner:tt["a"]},data:function(){return{assetTypeId:"",castingType:"shot",castingTypeOptions:[{label:this.$t("shots.title"),value:"shot"},{label:this.$t("assets.title"),value:"asset"}],csvColumns:["Episode","Parent","Name","Asset Type","Asset","Occurences","Label"],dataMatchers:["Episode","Name","Asset Type","Asset"],editedAsset:null,editedEntityId:null,editedAssetLinkLabel:null,episodeId:"",importCsvFormData:{},isLoading:!1,selection:{},sequenceId:"",errors:{editLabel:!1,importing:!1},loading:{editLabel:!1,importing:!1},modals:{isEditLabelDisplayed:!1,isImportRenderDisplayed:!1,importing:!1},parsedCSV:[]}},mounted:function(){this.isLoading||this.reset(),this.setLastProductionScreen("breakdown")},computed:st({},Object(o["c"])(["assetMap","assetsByType","casting","castingAssetTypeAssets","castingAssetTypesOptions","castingByType","castingCurrentShot","castingSequenceId","castingSequenceOptions","castingSequenceShots","currentEpisode","currentProduction","displayedShots","getEpisodeOptions","isCastingSaveActive","isCurrentUserManager","isAssetsLoading","isShotsLoading","isTVShow","sequences","sequenceMap","shots","shotMap"]),{availableAssetsByType:function(){var t=[];return this.assetsByType.forEach((function(e){var s=e.filter((function(t){return!t.canceled}));s.length>0&&t.push(s)})),t},exportUrlPath:function(){return"/api/export/csv/projects/".concat(this.currentProduction.id,"/casting.csv")},isAssetCasting:function(){return"asset"===this.castingType},isShotCasting:function(){return"shot"===this.castingType},castingEntities:function(){return this.isShotCasting?this.castingSequenceShots:this.castingAssetTypeAssets},editLabelModal:function(){return this.$refs["edit-label-modal"]},filteredCasting:function(){var t=this,e={};return this.castingEntities.forEach((function(s){t.castingByType[s.id]&&t.castingByType[s.id].forEach((function(t){t.forEach((function(t){var s="".concat(t.asset_name).concat(t.asset_type_name).concat(t.name);e[s]=!0}))}))})),e}}),methods:st({},Object(o["b"])(["addAssetToCasting","displayMoreAssets","loadShots","loadAssets","removeAssetFromCasting","saveCasting","setAssetSearch","setCastingAssetType","setCastingAssetTypes","setCastingEpisode","setCastingSequence","setCastingShot","setAssetLinkLabel","setLastProductionScreen","uploadCastingFile"]),{reset:function(){var t=this;this.isLoading=!0,setTimeout((function(){t.reloadShots()}),100)},reloadShots:function(){var t=this;this.isLoading=!0,this.loadShots((function(){t.isTVShow?(t.currentEpisode&&(t.episodeId=t.currentEpisode.id),t.setCastingEpisode(t.episodeId)):t.setCastingEpisode(null),t.loadAssets(!0).then((function(){t.isLoading=!1,t.displayMoreAssets(),t.setCastingAssetTypes(),t.resetSelection()}))}))},resetSelection:function(){var t={};this.isShotCasting?this.castingSequenceShots.forEach((function(e){t[e.id]=!1})):this.castingAssetTypeAssets.forEach((function(e){t[e.id]=!1})),this.selection=t},onSearchChange:function(t){this.setAssetSearch(t)},selectEntity:function(t,e){e.ctrlKey||e.shitKey||this.clearSelection(),this.previousEntityId&&e.shiftKey&&this.selectRange(this.previousEntityId,t),this.previousEntityId&&e.shiftKey||(this.previousEntityId=t),this.selection[t]=!0},clearSelection:function(){var t=this;Object.keys(this.selection).filter((function(e){return t.selection[e]})).forEach((function(e){t.selection[e]=!1}))},selectRange:function(t,e){var s=this,i=Object.keys(this.selection),n=i.findIndex((function(e){return e===t})),a=i.findIndex((function(t){return t===e})),o=[];o=n<a?Object(r["j"])(n,a):Object(r["j"])(a,n),o.forEach((function(t){t>=0&&(s.selection[i[t]]=!0)}))},addOneAsset:function(t){var e=this;Object.keys(this.selection).filter((function(t){return e.selection[t]})).forEach((function(s){e.addAssetToCasting({entityId:s,assetId:t,nbOccurences:1}),e.saveCasting(s).catch(console.error)}))},addTenAssets:function(t){var e=this;Object.keys(this.selection).filter((function(t){return e.selection[t]})).forEach((function(s){e.addAssetToCasting({entityId:s,assetId:t,nbOccurences:10}),e.saveCasting(s).catch(console.error)}))},removeOneAsset:function(t,e){this.removeAssetFromCasting({entityId:e,assetId:t,nbOccurences:1}),this.saveCasting(e).catch(console.error)},removeTenAssets:function(t,e){this.removeAssetFromCasting({entityId:e,assetId:t,nbOccurences:10}),this.saveCasting(e).catch(console.error)},onAssetListScroll:function(t,e){var s=this.$refs["asset-list"],i=s.scrollHeight-s.offsetHeight;i<e.scrollTop+100&&this.displayMoreAssets()},showImportModal:function(){this.modals.importing=!0},hideImportModal:function(){this.modals.importing=!1},showImportRenderModal:function(){this.modals.isImportRenderDisplayed=!0},hideImportRenderModal:function(){this.modals.isImportRenderDisplayed=!1},cleanUpCsv:function(t){return t.forEach((function(t){t.forEach((function(t,e,s){s[e]=t.trim()}))})),t[0].forEach((function(t,e,s){s[e]=t[0].toUpperCase()+t.slice(1)})),t},renderImport:function(t,e){var s=this;this.loading.importing=!0,this.errors.importing=!1,"file"===e&&(t=t.get("file")),c["a"].processCSV(t).then((function(t){s.cleanUpCsv(t),s.parsedCSV=t,s.hideImportModal(),s.loading.importing=!1,s.showImportRenderModal()}))},uploadImportFile:function(t){var e=this,s=new FormData,i="import.csv",n=new File([t.join("\n")],i,{type:"text/csv"});s.append("file",n),this.loading.importing=!0,this.errors.importing=!1,this.importCsvFormData=s,this.uploadCastingFile(this.importCsvFormData).then((function(){e.loading.importing=!1,e.hideImportRenderModal(),e.reloadShots()})).catch((function(){e.loading.importing=!1,e.errors.importing=!0}))},resetImport:function(){this.errors.importing=!1,this.hideImportRenderModal(),this.importCsvFormData=void 0,this.$refs["import-modal"].reset(),this.showImportModal()},updateUrl:function(){var t=!1,e={};if(this.isAssetCasting){var s=this.$route.params.asset_type_id;s!==this.assetTypeId&&(t=!0,e={name:"breakdown-asset-type",params:{production_id:this.currentProduction.id,asset_type_id:this.assetTypeId}})}else{var i=this.$route.params.sequence_id;i!==this.sequenceId&&(t=!0,e={name:"breakdown-sequence",params:{production_id:this.currentProduction.id,sequence_id:this.sequenceId}})}if(t){var n=this.$route.params.episode_id;!n&&this.currentEpisode&&(n=this.currentEpisode.id),n&&(e.name="episode-".concat(e.name),e.params.episode_id=n),this.$router.push(e)}},onEditLabelClicked:function(t,e,s){this.editedAsset=t,this.editedEntityId=s,this.editedAssetLinkLabel=e,this.modals.isEditLabelDisplayed=!0},confirmEditLabel:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},s=e.label;this.loading.editLabel=!0,this.setAssetLinkLabel({label:s,asset:this.editedAsset,targetEntityId:this.editedEntityId}).then((function(){t.modals.isEditLabelDisplayed=!1,t.loading.editLabel=!1})).catch((function(e){console.error(e),t.errors.editLabel=!0,t.loading.editLabel=!1}))}}),watch:{$route:function(){},castingType:function(){if(this.isShotCasting&&this.sequences.length>0&&(this.sequenceId=this.sequences[0].id),this.isAssetCasting&&this.castingAssetTypesOptions.length>0){var t=this.$route.params.asset_type_id;this.castingType="asset",t?this.assetTypeId=t:this.castingAssetTypesOptions.length>0&&(this.assetTypeId=this.castingAssetTypesOptions[0].value)}},sequenceId:function(){this.sequences&&this.sequences.length>0&&(this.setCastingSequence(this.sequenceId),this.updateUrl(),this.resetSelection())},assetTypeId:function(){this.castingAssetTypesOptions&&(this.setCastingAssetType(this.assetTypeId),this.updateUrl(),this.resetSelection())},episodeId:function(){},castingSequenceOptions:function(){if(this.$route.path.indexOf("asset-type")<0){var t=this.$route.params.sequence_id;t&&this.sequenceMap[t]?this.sequenceId=t:this.castingSequenceOptions.length>0?this.sequenceId=this.castingSequenceOptions[0].value:this.sequenceId=""}},castingAssetTypesOptions:function(){if(this.$route.path.indexOf("asset-type")>0){var t=this.$route.params.asset_type_id;this.castingType="asset",t?this.assetTypeId=t:this.castingAssetTypesOptions.length>0?this.assetTypeId=this.castingAssetTypesOptions[0].value:this.assetTypeId=""}},currentProduction:function(){this.reset()},currentEpisode:function(){this.currentEpisode&&this.episodeId!==this.currentEpisode.id&&!this.isLoading&&this.reset()},sequences:function(){this.$store.commit("CASTING_SET_SEQUENCES",this.sequences)}},metaInfo:function(){var t=this.$t("breakdown.title");return{title:"".concat(this.currentProduction.name," ").concat(t," - Kitsu")}}},nt=it,at=(s("a34a"),Object(h["a"])(nt,i,n,!1,null,"72f8cd90",null));e["default"]=at.exports}}]);
//# sourceMappingURL=chunk-73820908.4ba1d63a.js.map