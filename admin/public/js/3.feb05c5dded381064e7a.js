webpackJsonp([3],{"7wlo":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("Xxa5"),s=a.n(n),r=a("woOf"),i=a.n(r),l=a("exGp"),o=a.n(l),u={name:"ads-edit",props:{id:""},data:function(){return{model:{items:[]},options:[]}},mounted:function(){this.id&&this.fetch()},methods:{fetch:function(){var t=this;return o()(s.a.mark(function e(){var a;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("ads/edit/"+t.id);case 2:a=e.sent,t.model=i()({},t.model,a.data);case 4:case"end":return e.stop()}},e,t)}))()},save:function(){var t=this;return o()(s.a.mark(function e(){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0,!t.id){e.next=7;break}return e.next=4,t.$http.put("ads/"+t.id,t.model);case 4:e.sent,e.next=10;break;case 7:return e.next=9,t.$http.post("ads",t.model);case 9:e.sent;case 10:t.$router.push("/ads/list");case 11:case"end":return e.stop()}},e,t)}))()}}},c={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ads-edit"},[a("strong",[t._v(t._s(t.id?"编辑":"新建")+"广告位")]),t._v(" "),a("el-form",{attrs:{"label-width":"120px"},nativeOn:{submit:function(e){return e.preventDefault(),t.save(e)}}},[a("el-form-item",{attrs:{label:"名称"}},[a("el-input",{model:{value:t.model.name,callback:function(e){t.$set(t.model,"name",e)},expression:"model.name"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"广告"}},[a("el-button",{attrs:{type:"text"},on:{click:function(e){return t.model.items.push({})}}},[a("i",{staticClass:"el-icon-plus"}),t._v(" 添加广告\n    ")]),t._v(" "),a("el-row",t._l(t.model.items,function(e,n){return a("el-col",{key:n,staticStyle:{"margin-bottom":"15px"},attrs:{xl:12}},[a("el-form-item",{attrs:{label:"图标"}},[a("el-upload",{staticClass:"avatar-uploader",attrs:{action:"http://localhost:3000/admin/api/upload","show-file-list":!1,"on-success":function(a){return t.$set(e,"image",a.url)},headers:t.getAuthHeaders}},[e.image?a("img",{staticClass:"avatar",attrs:{src:e.image}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),t._v(" "),a("el-form-item",{attrs:{label:"跳转链接"}},[a("el-input",{attrs:{type:"textarea"},model:{value:e.url,callback:function(a){t.$set(e,"url",a)},expression:"item.url"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"操作"}},[a("el-button",{attrs:{type:"danger",size:"small"},on:{click:function(e){return t.model.items.splice(n,1)}}},[t._v("删除")])],1)],1)}),1)],1),t._v(" "),a("el-form-item",{attrs:{label:""}},[a("el-button",{attrs:{type:"primary","native-type":"submit",around:""}},[t._v("保存")])],1)],1)],1)},staticRenderFns:[]};var d=a("VU/8")(u,c,!1,function(t){a("Wu9+")},"data-v-6f348c0d",null);e.default=d.exports},"Wu9+":function(t,e){}});
//# sourceMappingURL=3.feb05c5dded381064e7a.js.map