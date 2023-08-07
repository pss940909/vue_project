"use strict";(self["webpackChunkvue_finalproject"]=self["webpackChunkvue_finalproject"]||[]).push([[528],{3528:function(o,e,t){t.r(e),t.d(e,{default:function(){return ao}});var a=t(3396),l=t(7139);const n={class:"text-end mt-4"},s={class:"table mt-4"},d=(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th",{width:"200"},"優惠活動名稱"),(0,a._)("th",null,"優惠卷代碼"),(0,a._)("th",{width:"200"},"折扣方案"),(0,a._)("th",{width:"200"},"到期日"),(0,a._)("th",{width:"150"},"是否啟用"),(0,a._)("th",{width:"200"},"編輯")])],-1),i={class:"text-right"},p={class:"text-danger fw-bold"},u={class:"text-right"},c={key:0,class:"text-success"},r={key:1,class:"text-muted"},m={class:"btn-group"},h=["onClick"],b=["onClick"];function _(o,e,t,_,C,f){const v=(0,a.up)("vue-loading"),g=(0,a.up)("coupon-modal"),w=(0,a.up)("del-coupon");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(v,{active:C.isLoading},null,8,["active"]),(0,a._)("div",n,[(0,a._)("button",{class:"btn btn-primary text-white",onClick:e[0]||(e[0]=o=>f.openModal(!0))}," 新增優惠卷 ")]),(0,a._)("table",s,[d,(0,a._)("tbody",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(C.coupons,(e=>((0,a.wg)(),(0,a.iD)("tr",{key:e.id},[(0,a._)("td",null,(0,l.zw)(e.title),1),(0,a._)("td",null,(0,l.zw)(e.code),1),(0,a._)("td",i,[(0,a._)("span",p,(0,l.zw)(e.percent)+"%",1),(0,a.Uk)(" off ")]),(0,a._)("td",u,(0,l.zw)(o.$filters.date(e.due_date)),1),(0,a._)("td",null,[e.is_enabled?((0,a.wg)(),(0,a.iD)("span",c,"啟用")):((0,a.wg)(),(0,a.iD)("span",r,"未啟用"))]),(0,a._)("td",null,[(0,a._)("div",m,[(0,a._)("button",{class:"btn btn-outline-primary btn-sm",onClick:o=>f.openModal(!1,e)}," 編輯 ",8,h),(0,a._)("button",{class:"btn btn-outline-danger btn-sm",onClick:o=>f.openDelModal(e)}," 刪除 ",8,b)])])])))),128))])]),(0,a.Wm)(g,{ref:"couponModal",onCreateCoupon:f.createCoupon,coupon:C.tempCoupon},null,8,["onCreateCoupon","coupon"]),(0,a.Wm)(w,{ref:"delModal",coupon:C.tempCoupon,onDelCoupon:f.delCoupon},null,8,["coupon","onDelCoupon"])],64)}var C=t(9242);const f={class:"modal",ref:"modal"},v={class:"modal-dialog modal-lg",role:"document"},g={class:"modal-content border-0"},w=(0,a._)("div",{class:"modal-header bg-dark text-white"},[(0,a._)("h5",{class:"modal-title",id:"exampleModalLabel"},[(0,a._)("span",null,"新增優惠卷")]),(0,a._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),x={class:"modal-body"},y={class:"mb-3"},M=(0,a._)("label",{for:"title",class:"form-label"},"優惠活動名稱",-1),k={class:"row gx-2"},D={class:"mb-3 col-sm-6"},L=(0,a._)("label",{for:"code",class:"form-label"},"優惠卷代碼",-1),$={class:"mb-3 col-sm-6"},U=(0,a._)("label",{for:"percent",class:"form-label"},"折扣方案",-1),z={class:"mb-3"},V=(0,a._)("label",{for:"due_date",class:"form-label"},"到期日",-1),Z={class:"mb-3"},N={class:"form-check"},j=(0,a._)("label",{class:"form-check-label",for:"is_enabled"}," 是否啟用 ",-1),W={class:"modal-footer"};function H(o,e,t,l,n,s){return(0,a.wg)(),(0,a.iD)("div",f,[(0,a._)("div",v,[(0,a._)("div",g,[w,(0,a._)("div",x,[(0,a._)("div",y,[M,(0,a.wy)((0,a._)("input",{type:"text",class:"form-control",id:"title",placeholder:"請輸入優惠活動名稱","onUpdate:modelValue":e[0]||(e[0]=o=>n.tempCoupon.title=o)},null,512),[[C.nr,n.tempCoupon.title,void 0,{trim:!0}]])]),(0,a._)("div",k,[(0,a._)("div",D,[L,(0,a.wy)((0,a._)("input",{type:"text",class:"form-control",id:"code",placeholder:"請輸入優惠卷代碼","onUpdate:modelValue":e[1]||(e[1]=o=>n.tempCoupon.code=o)},null,512),[[C.nr,n.tempCoupon.code,void 0,{trim:!0}]])]),(0,a._)("div",$,[U,(0,a.wy)((0,a._)("input",{type:"number",class:"form-control",id:"percent",min:"0",max:"100",placeholder:"請輸入折扣方案","onUpdate:modelValue":e[2]||(e[2]=o=>n.tempCoupon.percent=o)},null,512),[[C.nr,n.tempCoupon.percent,void 0,{number:!0}]])])]),(0,a._)("div",z,[V,(0,a.wy)((0,a._)("input",{type:"date",class:"form-control",id:"due_date",placeholder:"請輸入到期日","onUpdate:modelValue":e[3]||(e[3]=o=>n.tempCoupon.due_date=o),min:"2023-08-07",max:"2033-12-31"},null,512),[[C.nr,n.tempCoupon.due_date]])]),(0,a._)("div",Z,[(0,a._)("div",N,[(0,a.wy)((0,a._)("input",{class:"form-check-input",type:"checkbox","true-value":1,"false-value":0,id:"is_enabled","onUpdate:modelValue":e[4]||(e[4]=o=>n.tempCoupon.is_enabled=o)},null,512),[[C.e8,n.tempCoupon.is_enabled]]),j])])]),(0,a._)("div",W,[(0,a._)("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal",onClick:e[5]||(e[5]=(0,C.iM)(((...e)=>o.hideModal&&o.hideModal(...e)),["prevent"]))}," 取消 "),(0,a._)("button",{type:"button",class:"btn btn-primary",onClick:e[6]||(e[6]=(0,C.iM)(((...o)=>s.createCoupon&&s.createCoupon(...o)),["prevent"]))}," 確認 ")])])])],512)}var Y=t(4667),K={data(){return{tempCoupon:{}}},props:{coupon:{type:Object,default(){return{}}}},watch:{coupon:{handler(o){this.tempCoupon=o,this.tempCoupon.due_date=this.$filters.date(o.due_date)},immediate:!0,deep:!0}},computed:{due_date(){return Math.floor(new Date(this.tempCoupon.due_date).getTime()/1e3)}},methods:{createCoupon(){this.tempCoupon.due_date=this.due_date,this.$emit("createCoupon",this.tempCoupon)}},mixins:[Y.Z]},O=t(89);const T=(0,O.Z)(K,[["render",H]]);var q=T;const A={class:"modal fade",id:"delModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},B={class:"modal-dialog"},E={class:"modal-content"},F={class:"modal-header bg-danger text-white"},G={class:"modal-title",id:"exampleModalLabel"},I=(0,a._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),J={class:"modal-body"},P={class:"fw-bold text-danger"},Q={class:"modal-footer"};function R(o,e,t,n,s,d){return(0,a.wg)(),(0,a.iD)("div",A,[(0,a._)("div",B,[(0,a._)("div",E,[(0,a._)("div",F,[(0,a._)("h5",G," 確定刪除 "+(0,l.zw)(t.coupon.title)+" - 優惠卷? ",1),I]),(0,a._)("div",J,[(0,a.Uk)(" 確定要刪除 "),(0,a._)("span",P,(0,l.zw)(t.coupon.code),1),(0,a.Uk)(" 嗎？(刪除後無法恢復) ")]),(0,a._)("div",Q,[(0,a._)("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal",onClick:e[0]||(e[0]=(...e)=>o.hideModal&&o.hideModal(...e))}," 取消 "),(0,a._)("button",{type:"button",class:"btn btn-danger",onClick:e[1]||(e[1]=(...o)=>d.confirmDel&&d.confirmDel(...o))}," 確定刪除 ")])])])],512)}var S={mixins:[Y.Z],props:["coupon"],methods:{confirmDel(){this.$emit("delCoupon",this.coupon.id)}}};const X=(0,O.Z)(S,[["render",R]]);var oo=X,eo={components:{CouponModal:q,DelCoupon:oo},data(){return{isLoading:!1,coupons:[],pagination:{},tempCoupon:{},isNew:null}},methods:{getCouponList(o=1){this.isLoading=!0;const e=`https://vue3-course-api.hexschool.io/api/pss940909/admin/coupons?page=${o}`;this.axios.get(e).then((o=>{o.data.success&&(this.isLoading=!1,this.coupons=o.data.coupons,this.pagination=o.data.pagination,console.log(this.coupons))}))},openModal(o,e){this.isNew=o,this.isNew?this.tempCoupon={}:this.tempCoupon=e,this.$refs.couponModal.showModal()},openDelModal(o){this.tempCoupon=o,this.$refs.delModal.showModal()},createCoupon(o){if(this.isNew){const e="https://vue3-course-api.hexschool.io/api/pss940909/admin/coupon";this.axios.post(e,{data:o}).then((o=>{console.log(o.data),o.data.success&&(this.$refs.couponModal.hideModal(),this.getCouponList())}))}else{const e=`https://vue3-course-api.hexschool.io/api/pss940909/admin/coupon/${o.id}`;this.axios.put(e,{data:o}).then((o=>{o.data.success&&(this.$refs.couponModal.hideModal(),this.getCouponList())}))}},delCoupon(o){const e=`https://vue3-course-api.hexschool.io/api/pss940909/admin/coupon/${o}`;this.axios.delete(e).then((o=>{o.data.success&&(this.$refs.delModal.hideModal(),this.getCouponList())}))}},computed:{},created(){this.getCouponList()}};const to=(0,O.Z)(eo,[["render",_]]);var ao=to}}]);
//# sourceMappingURL=528.c00ec351.js.map