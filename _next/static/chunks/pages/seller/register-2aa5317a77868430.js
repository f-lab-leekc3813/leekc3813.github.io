(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[238],{38419:function(e,r,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/seller/register",function(){return s(56376)}])},56376:function(e,r,s){"use strict";s.r(r),s.d(r,{default:function(){return SellerRegister}});var t=s(85893),a=s(28231);function SellerRegister(){return(0,t.jsx)(a.Z,{isEdit:!1})}},28231:function(e,r,s){"use strict";s.d(r,{Z:function(){return SellerRegisterPage}});var t=s(85893),a=s(60294),i=s.n(a),l=s(64749),n=s(56697),o=s(60007);function SellerRegisterPageUI(e){return(0,t.jsx)("div",{className:i().body,children:(0,t.jsxs)("div",{className:i().wrapper,children:[e.isEdit?(0,t.jsx)("span",{className:i().registerTitle,children:"농장 수정하기"}):(0,t.jsx)("span",{className:i().registerTitle,children:"농장 등록하기"}),(0,t.jsxs)("div",{className:i().registerSection1,children:[(0,t.jsxs)("div",{className:i().registerBox,children:[(0,t.jsxs)("div",{className:i().registerInputBox,children:[(0,t.jsx)("span",{className:i().registerInputTitle,children:"농장명"}),(0,t.jsx)("input",{onChange:r=>e.onChangeDetailadress("farmName",r.target.value),name:"farmName",className:i().registerInput,type:"text"}),e.errorData.farmName&&(0,t.jsx)("span",{className:i().error,children:"농장명을 입력해주세요."})]}),(0,t.jsxs)("div",{className:i().registerInputBox,children:[(0,t.jsx)("span",{className:i().registerInputTitle,children:"평수"}),(0,t.jsx)("input",{onChange:r=>e.onChangeDetailadress("area",r.target.value),name:"area",className:i().registerInput,type:"text"}),e.errorData.area&&(0,t.jsx)("span",{className:i().error,children:"평수를 입력해주세요."})]})]}),(0,t.jsxs)("div",{className:i().registerBox,children:[(0,t.jsxs)("div",{className:i().registerInputBox,children:[(0,t.jsx)("span",{className:i().registerInputTitle,children:"재식수량"}),(0,t.jsx)("input",{onChange:r=>e.onChangeDetailadress("quantity",r.target.value),name:"quantity",className:i().registerInput,type:"text"}),e.errorData.quantity&&(0,t.jsx)("span",{className:i().error,children:"재식수량을 입력해주세요."})]}),(0,t.jsxs)("div",{className:i().registerInputBox,children:[(0,t.jsx)("span",{className:i().registerInputTitle,children:"재배방법"}),(0,t.jsx)(l.default,{style:{width:120},onChange:r=>e.onChangeDetailadress("method",r),options:[{value:"토경",name:"토경"},{value:"수경",name:"수경"}]}),e.errorData.method&&(0,t.jsx)("span",{className:i().error,children:"재배방법을 선택해주세요."})]})]})]}),e.isOpen&&(0,t.jsx)(n.Z,{open:e.isOpen,onOk:e.onToggleModal,onCancel:e.onToggleModal,children:(0,t.jsx)(o.ZP,{onComplete:e.handleComplete})}),(0,t.jsxs)("div",{className:i().registerSection2,children:[(0,t.jsx)("span",{className:i().registerInputTitle,children:"주소"}),(0,t.jsxs)("div",{className:i().registerInputForm,children:[(0,t.jsx)("input",{value:e.q1,className:i().registerNum,type:"text",placeholder:"주소번호",readOnly:!0}),(0,t.jsx)("button",{onClick:e.onToggleModal,className:i().searchButton,children:"검색"})]}),e.errorData.q1&&(0,t.jsx)("span",{className:i().error,children:"주소를 검색해주세요."}),(0,t.jsx)("input",{value:e.q3,className:i().reigsterAddress1,type:"text",placeholder:"주소",readOnly:!0}),e.errorData.q3&&(0,t.jsx)("span",{className:i().error,children:"주소를 검색해주세요."}),(0,t.jsx)("input",{onChange:r=>e.onChangeDetailadress("detailadress",r.target.value),className:i().reigsterAddress2,type:"text",placeholder:"상세주소"}),e.errorData.detailadress&&(0,t.jsx)("span",{className:i().error,children:"상세주소를 입력해주세요."})]}),(0,t.jsx)("div",{className:i().submitContainer,children:e.isEdit?(0,t.jsx)("button",{onClick:e.onClickSubmit,className:i().submitButton,children:"수정하기"}):(0,t.jsx)("button",{onClick:e.onClickSubmit,className:i().submitButton,children:"등록하기"})})]})})}var d=s(67294),c=s(11163),u=s(6154),g=s(73107);function SellerRegisterPage(e){let r=(0,c.useRouter)(),[s,a]=(0,d.useState)(!1),[i,l]=(0,d.useState)(e.isEdit),[n,o]=(0,d.useState)({q1:"",q3:"",detailadress:"",farmName:"",area:"",quantity:"",method:""}),[m,p]=(0,d.useState)({q1:!1,q3:!1,detailadress:!1,farmName:!1,area:!1,quantity:!1,method:!1}),onToggleModal=()=>{a(e=>!e)},onClickSubmit=async()=>{Object.keys(n).forEach(e=>{""===n[e]?p(r=>({...r,[e]:!0})):p(r=>({...r,[e]:!1}))});let e=Object.values(n).every(e=>""!==e.trim());if(e)try{if(i){let e=await u.Z.post("".concat(g._,"farms/update/"),{user_id:localStorage.getItem("id"),farm_id:r.asPath.slice(22),name:n.farmName,area:n.area,mail_number:n.q1,address:n.q3,address_detail:n.detailadress,method:n.method,quantity:n.quantity});201==e.status&&(alert("수정성공"),r.push("/seller"))}else{let e=await u.Z.post("".concat(g._,"farms/create/"),{user_id:localStorage.getItem("id"),name:n.farmName,area:n.area,mail_number:n.q1,address:n.q3,address_detail:n.detailadress,method:n.method,quantity:n.quantity});201==e.status&&(alert("등록성공"),r.push("/seller"))}}catch(e){console.log("error",e)}else alert("항목을 전부 채워주세요!")};return(0,t.jsx)(SellerRegisterPageUI,{onToggleModal:onToggleModal,q1:n.q1,q3:n.q3,detailadress:n.detailadress,isOpen:s,handleComplete:e=>{o(r=>({...r,q1:e.zonecode,q3:e.address})),onToggleModal()},onChangeDetailadress:(e,r)=>{o(s=>({...s,[e]:r}))},onClickSubmit:onClickSubmit,errorData:m,isEdit:i})}},60294:function(e){e.exports={body:"sellerRegister_body__wZeoN",wrapper:"sellerRegister_wrapper__IToWy",registerTitle:"sellerRegister_registerTitle__aMHnX",registerSection1:"sellerRegister_registerSection1__pU7Pl",registerBox:"sellerRegister_registerBox__Zj8XN",registerInputBox:"sellerRegister_registerInputBox__FQjGD",registerInputTitle:"sellerRegister_registerInputTitle__IJNd2",registerInput:"sellerRegister_registerInput__uzgdT",registerInputForm:"sellerRegister_registerInputForm__8daoC",error:"sellerRegister_error__foloN",registerSection2:"sellerRegister_registerSection2__7eK3X",registerNum:"sellerRegister_registerNum__Ylvda",searchButton:"sellerRegister_searchButton__1iTIk",reigsterAddress1:"sellerRegister_reigsterAddress1__3ilop",reigsterAddress2:"sellerRegister_reigsterAddress2__f9ae8",submitContainer:"sellerRegister_submitContainer__Lmga_",submitButton:"sellerRegister_submitButton__VAJBE"}}},function(e){e.O(0,[929,412,33,749,258,390,774,888,179],function(){return e(e.s=38419)}),_N_E=e.O()}]);