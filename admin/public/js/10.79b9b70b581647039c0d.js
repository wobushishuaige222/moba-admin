webpackJsonp([10],{Ecz4:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("Xxa5"),r=n.n(a),i=n("exGp"),o=n.n(i),l={name:"hero-list",data:function(){return{data:[]}},mounted:function(){this.getData()},methods:{getData:function(){var t=this;return o()(r.a.mark(function e(){var n;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("hero");case 2:n=e.sent,t.data=n.data;case 4:case"end":return e.stop()}},e,t)}))()},handleEdit:function(t,e){this.$router.push({path:"/hero/edit",query:{id:e._id}})},handleDelete:function(t,e){var n=this;return o()(r.a.mark(function t(){return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.$http.delete("hero/"+e._id);case 2:t.sent,n.getData();case 4:case"end":return t.stop()}},t,n)}))()}}},u={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("strong",[t._v("这是英雄列表")]),t._v(" "),n("el-table",{attrs:{data:t.data}},[n("el-table-column",{attrs:{prop:"_id",label:"数据ID",width:"500"}}),t._v(" "),n("el-table-column",{attrs:{prop:"name",label:"英雄名称","min-width":"150"}}),t._v(" "),n("el-table-column",{attrs:{prop:"title",label:"称号","min-width":"150"}}),t._v(" "),n("el-table-column",{attrs:{label:"英雄头像","min-width":"150"},scopedSlots:t._u([{key:"default",fn:function(t){return[n("img",{staticStyle:{height:"50px",width:"50px","border-radius":"5px"},attrs:{src:t.row.avator}})]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{size:"mini"},on:{click:function(n){return t.handleEdit(e.$index,e.row)}}},[t._v("编辑")]),t._v(" "),n("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(n){return t.handleDelete(e.$index,e.row)}}},[t._v("删除")])]}}])})],1)],1)},staticRenderFns:[]};var s=n("VU/8")(l,u,!1,function(t){n("NEFX")},"data-v-74dcfa08",null);e.default=s.exports},NEFX:function(t,e){}});
//# sourceMappingURL=10.79b9b70b581647039c0d.js.map