"use strict";(self.webpackChunksakai_ng=self.webpackChunksakai_ng||[]).push([[26],{3026:(B,A,r)=>{r.d(A,{D:()=>at});var u=r(5219),g=r(9862),l=r(253),t=r(4769),D=r(5118),P=r(8814),M=r(981),b=r(6814),Z=r(9232),y=r(707),T=r(95),E=r(4480),U=r(4104),_=r(6340),c=r(3714),m=r(5167),p=r(1312),h=r(7680);function w(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"div",15)(1,"button",16),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.openNew())}),t.qZA(),t.TgZ(2,"button",17),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.ShowPaid())}),t.qZA(),t.TgZ(3,"button",18),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.ShowDue())}),t.qZA()()}}function v(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"button",19),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.dt1.exportCSV())}),t.qZA()}}function q(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"div",25)(1,"h5",26),t._uU(2,"Manage Products"),t.qZA(),t.TgZ(3,"span",27),t._UZ(4,"i",28),t.TgZ(5,"input",29),t.NdJ("input",function(n){t.CHM(e),t.oxw();const a=t.MAs(1),d=t.oxw();return t.KtG(d.onGlobalFilter(a,n))}),t.qZA()()()}}function S(o,s){1&o&&(t.TgZ(0,"tr")(1,"th",30),t._uU(2,"Billing ID"),t._UZ(3,"p-sortIcon",31),t.qZA(),t.TgZ(4,"th",32),t._uU(5,"Payment Status "),t.qZA(),t.TgZ(6,"th",33),t._uU(7,"Transaction Date "),t.qZA(),t.TgZ(8,"th",34),t._uU(9,"Amount "),t.qZA(),t.TgZ(10,"th",35),t._uU(11,"View Bill Details"),t.qZA()())}function k(o,s){1&o&&(t.ynx(0),t.TgZ(1,"h5",38),t._uU(2,"DUE"),t.qZA(),t.BQk())}function J(o,s){1&o&&(t.ynx(0),t.TgZ(1,"h5",39),t._uU(2,"PAID"),t.qZA(),t.BQk())}function R(o,s){if(1&o&&(t.ynx(0),t.TgZ(1,"h5",40),t._uU(2),t.qZA(),t.BQk()),2&o){const e=t.oxw().$implicit;t.xp6(2),t.Oqu(e.billing_id?"DUE PAYMENT":"COUNTER PAYMENT")}}function K(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"div")(1,"button",41),t.NdJ("click",function(){t.CHM(e);const n=t.oxw().$implicit,a=t.oxw(2);return t.KtG(a.showBill(n))}),t.qZA()()}}function Y(o,s){if(1&o&&(t.TgZ(0,"tr")(1,"td",36)(2,"span",37),t._uU(3,"billing_id"),t.qZA(),t._uU(4),t.qZA(),t.TgZ(5,"td",35)(6,"span",37),t._uU(7,"payment_flag"),t.qZA(),t.YNc(8,k,3,0,"ng-container",13),t.YNc(9,J,3,0,"ng-container",13),t.YNc(10,R,3,1,"ng-container",13),t.qZA(),t.TgZ(11,"td",36)(12,"span",37),t._uU(13,"transaction_date"),t.qZA(),t._uU(14),t.qZA(),t.TgZ(15,"td",36)(16,"span",37),t._uU(17,"amount"),t.qZA(),t._uU(18),t.ALo(19,"currency"),t.qZA(),t.TgZ(20,"td",35),t.YNc(21,K,2,0,"div",13),t.qZA()()),2&o){const e=s.$implicit;t.xp6(4),t.hij(" ",e.billing_id," "),t.xp6(4),t.Q6J("ngIf","D"==e.payment_flag),t.xp6(1),t.Q6J("ngIf","P"==e.payment_flag),t.xp6(1),t.Q6J("ngIf","A"==e.payment_flag),t.xp6(4),t.hij(" ",e.transaction_date," "),t.xp6(4),t.hij(" ",t.xi3(19,7,e.amount,"INR")," "),t.xp6(3),t.Q6J("ngIf",e.billing_id)}}const N=function(){return["billing_id","payment_flag","transaction_date","amount"]},I=function(){return[10,20,30]};function Q(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"p-table",20,21),t.NdJ("selectionChange",function(n){t.CHM(e);const a=t.oxw();return t.KtG(a.selectedProducts=n)}),t.YNc(2,q,6,0,"ng-template",22),t.YNc(3,S,12,0,"ng-template",23),t.YNc(4,Y,22,10,"ng-template",24),t.qZA()}if(2&o){const e=t.oxw();t.Q6J("value",e.PaidtransDtls)("columns",e.cols)("rows",10)("globalFilterFields",t.DdM(9,N))("paginator",!0)("rowsPerPageOptions",t.DdM(10,I))("showCurrentPageReport",!0)("selection",e.selectedProducts)("rowHover",!0)}}function F(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"div",25)(1,"h5",43),t._uU(2),t.ALo(3,"currency"),t.qZA(),t.TgZ(4,"span",27),t._UZ(5,"i",28),t.TgZ(6,"input",29),t.NdJ("input",function(n){t.CHM(e),t.oxw();const a=t.MAs(1),d=t.oxw();return t.KtG(d.onGlobalFilter(a,n))}),t.qZA()()()}if(2&o){const e=t.oxw(2);t.xp6(2),t.AsE("Customer Name: ",e.custDtls.name.toUpperCase()," | Amount: ",t.xi3(3,2,e.BalanceAmount,"INR"),"")}}function G(o,s){1&o&&(t.TgZ(0,"tr")(1,"th",30),t._uU(2,"Billing ID"),t._UZ(3,"p-sortIcon",31),t.qZA(),t.TgZ(4,"th",32),t._uU(5,"Payment Status "),t.qZA(),t.TgZ(6,"th",33),t._uU(7,"Transaction Date "),t.qZA(),t.TgZ(8,"th",34),t._uU(9,"Amount "),t.qZA(),t.TgZ(10,"th",35),t._uU(11,"View Bill Details"),t.qZA()())}function L(o,s){1&o&&(t.ynx(0),t.TgZ(1,"h5",38),t._uU(2,"DUE"),t.qZA(),t.BQk())}function H(o,s){1&o&&(t.ynx(0),t.TgZ(1,"h5",39),t._uU(2,"PAID"),t.qZA(),t.BQk())}function W(o,s){if(1&o&&(t.ynx(0),t.TgZ(1,"h5",40),t._uU(2),t.qZA(),t.BQk()),2&o){const e=t.oxw().$implicit;t.xp6(2),t.Oqu(e.billing_id?"DUE PAYMENT":"COUNTER PAYMENT")}}function j(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"div")(1,"button",41),t.NdJ("click",function(){t.CHM(e);const n=t.oxw().$implicit,a=t.oxw(2);return t.KtG(a.showBill(n))}),t.qZA()()}}function z(o,s){if(1&o&&(t.TgZ(0,"tr")(1,"td",36)(2,"span",37),t._uU(3,"billing_id"),t.qZA(),t._uU(4),t.qZA(),t.TgZ(5,"td",35)(6,"span",37),t._uU(7,"payment_flag"),t.qZA(),t.YNc(8,L,3,0,"ng-container",13),t.YNc(9,H,3,0,"ng-container",13),t.YNc(10,W,3,1,"ng-container",13),t.qZA(),t.TgZ(11,"td",36)(12,"span",37),t._uU(13,"transaction_date"),t.qZA(),t._uU(14),t.qZA(),t.TgZ(15,"td",36)(16,"span",37),t._uU(17,"amount"),t.qZA(),t._uU(18),t.ALo(19,"currency"),t.qZA(),t.TgZ(20,"td",35),t.YNc(21,j,2,0,"div",13),t.qZA()()),2&o){const e=s.$implicit;t.xp6(4),t.hij(" ",e.billing_id," "),t.xp6(4),t.Q6J("ngIf","D"==e.payment_flag),t.xp6(1),t.Q6J("ngIf","P"==e.payment_flag),t.xp6(1),t.Q6J("ngIf","A"==e.payment_flag),t.xp6(4),t.hij(" ",e.transaction_date," "),t.xp6(4),t.hij(" ",t.xi3(19,7,e.amount,"INR")," "),t.xp6(3),t.Q6J("ngIf",e.billing_id)}}function $(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"p-table",20,42),t.NdJ("selectionChange",function(n){t.CHM(e);const a=t.oxw();return t.KtG(a.selectedProducts=n)}),t.YNc(2,F,7,5,"ng-template",22),t.YNc(3,G,12,0,"ng-template",23),t.YNc(4,z,22,10,"ng-template",24),t.qZA()}if(2&o){const e=t.oxw();t.Q6J("value",e.DuetransDtls)("columns",e.cols)("rows",10)("globalFilterFields",t.DdM(9,N))("paginator",!0)("rowsPerPageOptions",t.DdM(10,I))("showCurrentPageReport",!0)("selection",e.selectedProducts)("rowHover",!0)}}const V=function(o){return{"ng-invalid ng-dirty":o}};function X(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"div",44)(1,"label",45),t._uU(2,"Name"),t.qZA(),t.TgZ(3,"input",46),t.NdJ("ngModelChange",function(n){t.CHM(e);const a=t.oxw();return t.KtG(a.custDtls.name=n)}),t.qZA()(),t.TgZ(4,"div",44)(5,"label",45),t._uU(6,"Amount"),t.qZA(),t.TgZ(7,"p-inputNumber",47),t.NdJ("ngModelChange",function(n){t.CHM(e);const a=t.oxw();return t.KtG(a.depositAmount=n)}),t.qZA()()}if(2&o){const e=t.oxw();t.xp6(3),t.Q6J("ngModel",e.custDtls.name),t.xp6(4),t.Q6J("ngModel",e.depositAmount)("ngClass",t.VKq(3,V,e.submitted&&!e.custDtls.name))}}function tt(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"button",48),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.hideDialog())}),t.qZA(),t.TgZ(1,"button",49),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.saveProduct())}),t.qZA()}}function et(o,s){if(1&o&&(t.TgZ(0,"span"),t._uU(1,"Are you sure you want to delete "),t.TgZ(2,"b"),t._uU(3),t.qZA(),t._uU(4,"?"),t.qZA()),2&o){const e=t.oxw();t.xp6(3),t.Oqu(e.product.name)}}function nt(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"button",50),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.deleteProductDialog=!1)}),t.qZA(),t.TgZ(1,"button",51),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.confirmDelete())}),t.qZA()}}function ot(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"button",50),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.deleteProductsDialog=!1)}),t.qZA(),t.TgZ(1,"button",51),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.confirmDeleteSelected())}),t.qZA()}}function it(o,s){1&o&&(t.TgZ(0,"div",52),t._UZ(1,"p-progressSpinner"),t.qZA())}const lt=function(){return{width:"550px"}},O=function(){return{width:"450px"}};let at=(()=>{var o;class s{constructor(i,n,a,d,x){this.dialogService=i,this.http=n,this.api=a,this.productService=d,this.messageService=x,this.productDialog=!1,this.deleteProductDialog=!1,this.deleteProductsDialog=!1,this.products=[],this.product={},this.selectedProducts=[],this.submitted=!1,this.cols=[],this.statuses=[],this.rowsPerPageOptions=[5,10,20],this.spinner=!1,this.PaidtransDtls=[],this.DuetransDtls=[],this.showPaidBill=!1,this.showDueBill=!1,this.BalanceAmount=0}ngOnInit(){this.productService.getProducts().then(i=>this.products=i),this.cols=[{field:"billing_id",header:"billing_id"},{field:"payment_flag",header:"payment_flag"},{field:"transaction_date",header:"transaction_date"},{field:"amount",header:"amount"}],this.statuses=[{label:"INSTOCK",value:"instock"},{label:"LOWSTOCK",value:"lowstock"},{label:"OUTOFSTOCK",value:"outofstock"}],this.getCustomerTrans()}openNew(){this.product={},this.submitted=!1,this.productDialog=!0}deleteSelectedProducts(){this.deleteProductsDialog=!0}editProduct(i){this.productDialog=!0}deleteProduct(i){this.deleteProductDialog=!0,this.product={...i}}confirmDeleteSelected(){this.deleteProductsDialog=!1,this.products=this.products.filter(i=>!this.selectedProducts.includes(i)),this.messageService.add({severity:"success",summary:"Successful",detail:"Products Deleted",life:3e3}),this.selectedProducts=[]}confirmDelete(){this.deleteProductDialog=!1,this.products=this.products.filter(i=>i.id!==this.product.id),this.messageService.add({severity:"success",summary:"Successful",detail:"Product Deleted",life:3e3}),this.product={}}hideDialog(){this.productDialog=!1,this.submitted=!1}saveProduct(){this.submitted=!0;const n={customer_id:this.custDtls.id,amount:this.depositAmount};this.spinner=!0;const a=this.api.baseUrl,d=localStorage.getItem("token"),x=(new g.WM).set("Authorization",`Bearer ${d}`);this.http.post(a+"/customer/customer_deposit",n,{headers:x}).subscribe(f=>{console.log(f),this.spinner=!1,this.messageService.add({severity:"success",summary:"Successfully",detail:"Amount Deposit",life:3e3}),this.hideDialog()},f=>{this.spinner=!1,console.error(f),this.hideDialog(),this.messageService.add({severity:"error",summary:"Error",detail:"While Amount Deposit",life:3e3})})}findIndexById(i){let n=-1;for(let a=0;a<this.products.length;a++)if(this.products[a].id===i){n=a;break}return n}createId(){let i="";for(let a=0;a<5;a++)i+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(Math.floor(62*Math.random()));return i}onGlobalFilter(i,n){i.filterGlobal(n.target.value,"contains")}getCustomerTrans(){this.dueAmt=0,this.advAmt=0;const n={id:this.productService.cust_id};this.spinner=!0;const a=this.api.baseUrl,d=localStorage.getItem("token"),x=(new g.WM).set("Authorization",`Bearer ${d}`);this.http.post(a+"/customer/customer_trans",n,{headers:x}).subscribe(f=>{console.log(f),this.custData=f,this.custDtls=this.custData.data.personal_details,this.spinner=!1;for(let C=0;C<this.custData.data.trans_details.length;C++)"P"==this.custData.data.trans_details[C].payment_flag?this.PaidtransDtls.push(this.custData.data.trans_details[C]):(this.DuetransDtls.push(this.custData.data.trans_details[C]),"D"==this.custData.data.trans_details[C].payment_flag?this.dueAmt+=Number(this.custData.data.trans_details[C].amount):this.advAmt+=Number(this.custData.data.trans_details[C].amount));this.BalanceAmount=Number(Number(this.dueAmt)-Number(this.advAmt)),this.messageService.add({severity:"success",summary:"Success",detail:"Get Customer",life:3e3})},f=>{this.spinner=!1,console.error(f)})}ShowPaid(){this.showPaidBill=!0,this.showDueBill=!1}ShowDue(){this.showPaidBill=!1,this.showDueBill=!0}showBill(i){this.productService.billing_id=0,this.productService.billing_id=i.billing_id,this.ref=this.dialogService.open(l.u,{header:"Full Billing Details",data:{id:i.billing_id},width:"70%",contentStyle:{overflow:"auto"},baseZIndex:1e4,maximizable:!0}),this.ref.onClose.subscribe(n=>{n&&this.messageService.add({severity:"info",summary:"Product Selected",detail:n.name})}),this.ref.onMaximize.subscribe(n=>{this.messageService.add({severity:"info",summary:"Maximized",detail:`maximized: ${n.maximized}`})})}}return(o=s).\u0275fac=function(i){return new(i||o)(t.Y36(D.xA),t.Y36(g.eN),t.Y36(P.s),t.Y36(M.M),t.Y36(u.ez))},o.\u0275cmp=t.Xpm({type:o,selectors:[["ng-component"]],features:[t._Bn([u.ez])],decls:24,vars:19,consts:[[1,"grid"],[1,"col-12"],[1,"card","px-6","py-6"],["styleClass","mb-4"],["pTemplate","left"],["pTemplate","right"],["responsiveLayout","scroll","currentPageReportTemplate","Showing {first} to {last} of {totalRecords} entries","selectionMode","multiple","dataKey","id",3,"value","columns","rows","globalFilterFields","paginator","rowsPerPageOptions","showCurrentPageReport","selection","rowHover","selectionChange",4,"ngIf"],["header","Deposit amount into the customer account",1,"p-fluid",3,"visible","modal","visibleChange"],["pTemplate","content"],["pTemplate","footer"],["header","Confirm",3,"visible","modal","visibleChange"],[1,"flex","align-items-center","justify-content-center"],[1,"pi","pi-exclamation-triangle","mr-3",2,"font-size","2rem"],[4,"ngIf"],["class","spinner_overlay",4,"ngIf"],[1,"my-2"],["pButton","","pRipple","","label","Adjust Amount","icon","pi pi-plus",1,"p-button-primary","mr-2",3,"click"],["pButton","","pRipple","","label","Show Paid Bill","icon","pi pi-eye",1,"p-button-success","mr-2",3,"click"],["pButton","","pRipple","","label","Show Due Bill","icon","pi pi-eye",1,"p-button-danger","mr-2",3,"click"],["pButton","","pRipple","","label","Export","icon","pi pi-upload",1,"p-button-help",3,"click"],["responsiveLayout","scroll","currentPageReportTemplate","Showing {first} to {last} of {totalRecords} entries","selectionMode","multiple","dataKey","id",3,"value","columns","rows","globalFilterFields","paginator","rowsPerPageOptions","showCurrentPageReport","selection","rowHover","selectionChange"],["dt",""],["pTemplate","caption"],["pTemplate","header"],["pTemplate","body"],[1,"flex","flex-column","md:flex-row","md:justify-content-between","md:align-items-center"],[1,"m-0"],[1,"block","mt-2","md:mt-0","p-input-icon-left"],[1,"pi","pi-search"],["pInputText","","type","text","placeholder","Search...",1,"w-full","sm:w-auto",3,"input"],["pSortableColumn","billing_id"],["field","billing_id"],["pSortableColumn","payment_flag",2,"text-align","center"],["pSortableColumn","transaction_date"],["pSortableColumn","amount"],[2,"text-align","center"],[2,"width","14%","min-width","10rem"],[1,"p-column-title"],[2,"color","rgb(218, 10, 10)"],[2,"color","rgb(6, 151, 66)"],[2,"color","rgb(212, 191, 7)"],["pButton","","pRipple","","icon","pi pi-eye",1,"p-button-rounded","p-button-primary","mr-2",3,"click"],["dt1",""],[1,"m-0",2,"color","rgb(209, 7, 7)"],[1,"field"],["for","name"],["type","text","pInputText","","id","name","disabled","",3,"ngModel","ngModelChange"],["required","","autofocus","","mode","currency","inputId","currency-india","currency","INR","currencyDisplay","code","locale","en-IN",3,"ngModel","ngClass","ngModelChange"],["pButton","","pRipple","","label","Cancel","icon","pi pi-times",1,"p-button-text",3,"click"],["pButton","","pRipple","","label","Save","icon","pi pi-check",1,"p-button-text",3,"click"],["pButton","","pRipple","","icon","pi pi-times","label","No",1,"p-button-text",3,"click"],["pButton","","pRipple","","icon","pi pi-check","label","Yes",1,"p-button-text",3,"click"],[1,"spinner_overlay"]],template:function(i,n){1&i&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2),t._UZ(3,"p-toast"),t.TgZ(4,"p-toolbar",3),t.YNc(5,w,4,0,"ng-template",4),t.YNc(6,v,1,0,"ng-template",5),t.qZA(),t.YNc(7,Q,5,11,"p-table",6),t.YNc(8,$,5,11,"p-table",6),t.qZA(),t.TgZ(9,"p-dialog",7),t.NdJ("visibleChange",function(d){return n.productDialog=d}),t.YNc(10,X,8,5,"ng-template",8),t.YNc(11,tt,2,0,"ng-template",9),t.qZA(),t.TgZ(12,"p-dialog",10),t.NdJ("visibleChange",function(d){return n.deleteProductDialog=d}),t.TgZ(13,"div",11),t._UZ(14,"i",12),t.YNc(15,et,5,1,"span",13),t.qZA(),t.YNc(16,nt,2,0,"ng-template",9),t.qZA(),t.TgZ(17,"p-dialog",10),t.NdJ("visibleChange",function(d){return n.deleteProductsDialog=d}),t.TgZ(18,"div",11),t._UZ(19,"i",12),t.TgZ(20,"span"),t._uU(21,"Are you sure you want to delete selected products?"),t.qZA()(),t.YNc(22,ot,2,0,"ng-template",9),t.qZA()()(),t.YNc(23,it,2,0,"div",14)),2&i&&(t.xp6(7),t.Q6J("ngIf",n.showPaidBill),t.xp6(1),t.Q6J("ngIf",n.showDueBill),t.xp6(1),t.Akn(t.DdM(16,lt)),t.Q6J("visible",n.productDialog)("modal",!0),t.xp6(3),t.Akn(t.DdM(17,O)),t.Q6J("visible",n.deleteProductDialog)("modal",!0),t.xp6(3),t.Q6J("ngIf",n.product),t.xp6(2),t.Akn(t.DdM(18,O)),t.Q6J("visible",n.deleteProductsDialog)("modal",!0),t.xp6(6),t.Q6J("ngIf",n.spinner))},dependencies:[b.mk,b.O5,Z.iA,u.jx,Z.lQ,Z.fz,y.Hq,T.Fj,T.JJ,T.Q7,T.On,E.H,U.FN,_.o,c.o,m.Rn,p.V,h.G,b.H9],encapsulation:2}),s})()},6340:(B,A,r)=>{r.d(A,{V:()=>U,o:()=>E});var u=r(1180),g=r(6814),l=r(4769),t=r(5219);function D(_,c){1&_&&l.GkF(0)}function P(_,c){if(1&_&&(l.TgZ(0,"div",4),l.YNc(1,D,1,0,"ng-container",5),l.qZA()),2&_){const m=l.oxw();l.xp6(1),l.Q6J("ngTemplateOutlet",m.startTemplate)}}function M(_,c){1&_&&l.GkF(0)}function b(_,c){if(1&_&&(l.TgZ(0,"div",6),l.YNc(1,M,1,0,"ng-container",5),l.qZA()),2&_){const m=l.oxw();l.xp6(1),l.Q6J("ngTemplateOutlet",m.centerTemplate)}}function Z(_,c){1&_&&l.GkF(0)}function y(_,c){if(1&_&&(l.TgZ(0,"div",7),l.YNc(1,Z,1,0,"ng-container",5),l.qZA()),2&_){const m=l.oxw();l.xp6(1),l.Q6J("ngTemplateOutlet",m.endTemplate)}}const T=["*"];let E=(()=>{var _;class c{constructor(p){(0,u.Z)(this,"el",void 0),(0,u.Z)(this,"style",void 0),(0,u.Z)(this,"styleClass",void 0),(0,u.Z)(this,"templates",void 0),(0,u.Z)(this,"startTemplate",void 0),(0,u.Z)(this,"endTemplate",void 0),(0,u.Z)(this,"centerTemplate",void 0),this.el=p}getBlockableElement(){return this.el.nativeElement.children[0]}ngAfterContentInit(){this.templates.forEach(p=>{switch(p.getType()){case"left":this.startTemplate=p.template;break;case"right":this.endTemplate=p.template;break;case"center":this.centerTemplate=p.template}})}}return _=c,(0,u.Z)(c,"\u0275fac",function(p){return new(p||_)(l.Y36(l.SBq))}),(0,u.Z)(c,"\u0275cmp",l.Xpm({type:_,selectors:[["p-toolbar"]],contentQueries:function(p,h,w){if(1&p&&l.Suo(w,t.jx,4),2&p){let v;l.iGM(v=l.CRH())&&(h.templates=v)}},hostAttrs:[1,"p-element"],inputs:{style:"style",styleClass:"styleClass"},ngContentSelectors:T,decls:5,vars:7,consts:[["role","toolbar",3,"ngClass","ngStyle"],["class","p-toolbar-group-left p-toolbar-group-start",4,"ngIf"],["class","p-toolbar-group-center",4,"ngIf"],["class","p-toolbar-group-right p-toolbar-group-end",4,"ngIf"],[1,"p-toolbar-group-left","p-toolbar-group-start"],[4,"ngTemplateOutlet"],[1,"p-toolbar-group-center"],[1,"p-toolbar-group-right","p-toolbar-group-end"]],template:function(p,h){1&p&&(l.F$t(),l.TgZ(0,"div",0),l.Hsn(1),l.YNc(2,P,2,1,"div",1),l.YNc(3,b,2,1,"div",2),l.YNc(4,y,2,1,"div",3),l.qZA()),2&p&&(l.Tol(h.styleClass),l.Q6J("ngClass","p-toolbar p-component")("ngStyle",h.style),l.xp6(2),l.Q6J("ngIf",h.startTemplate),l.xp6(1),l.Q6J("ngIf",h.centerTemplate),l.xp6(1),l.Q6J("ngIf",h.endTemplate))},dependencies:[g.mk,g.O5,g.tP,g.PC],styles:[".p-toolbar{display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap}.p-toolbar-group-start,.p-toolbar-group-center,.p-toolbar-group-end,.p-toolbar-group-left,.p-toolbar-group-right{display:flex;align-items:center}\n"],encapsulation:2,changeDetection:0})),c})(),U=(()=>{var _;class c{}return _=c,(0,u.Z)(c,"\u0275fac",function(p){return new(p||_)}),(0,u.Z)(c,"\u0275mod",l.oAB({type:_})),(0,u.Z)(c,"\u0275inj",l.cJS({imports:[g.ez]})),c})()}}]);