"use strict";(self.webpackChunksakai_ng=self.webpackChunksakai_ng||[]).push([[422],{8422:(S,T,i)=>{i.r(T),i.d(T,{TableDemoModule:()=>$});var h=i(6814),g=i(95),y=i(3557),_=i(5219),b=i(9862),e=i(4769),D=i(981),Z=i(8814),u=i(9232),l=i(707),m=i(3714),p=i(4480),v=i(4104),x=i(1312),A=i(6340),P=i(3904);function U(t,c){if(1&t){const n=e.EpF();e.TgZ(0,"button",13),e.NdJ("click",function(){e.CHM(n);const a=e.oxw();return e.KtG(a.openNew())}),e.qZA(),e.TgZ(1,"button",14),e.NdJ("click",function(){e.CHM(n);const a=e.oxw();return e.KtG(a.deleteSelectedProducts())}),e.qZA()}if(2&t){const n=e.oxw();e.xp6(1),e.Q6J("label",n.Delete)("disabled",!n.selectedProducts||!n.selectedProducts.length)}}function B(t,c){1&t&&e._UZ(0,"p-fileUpload",15)(1,"button",16),2&t&&e.Q6J("maxFileSize",1e6)}function N(t,c){if(1&t){const n=e.EpF();e.TgZ(0,"div",17)(1,"h5",18),e._uU(2,"Manage Companys"),e.qZA(),e.TgZ(3,"span",19),e._UZ(4,"i",20),e.TgZ(5,"input",21),e.NdJ("input",function(a){e.CHM(n),e.oxw();const r=e.MAs(6);return e.KtG(r.filterGlobal(a.target.value,"contains"))}),e.qZA()()()}}function w(t,c){1&t&&(e.TgZ(0,"tr")(1,"th",22),e._UZ(2,"p-tableHeaderCheckbox"),e.qZA(),e.TgZ(3,"th"),e._uU(4,"ID"),e.qZA(),e.TgZ(5,"th",23),e._uU(6,"Name "),e._UZ(7,"p-sortIcon",24),e.qZA(),e.TgZ(8,"th"),e._uU(9,"Action"),e.qZA()())}function I(t,c){if(1&t){const n=e.EpF();e.TgZ(0,"tr")(1,"td"),e._UZ(2,"p-tableCheckbox",25),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td")(8,"button",26),e.NdJ("click",function(){const r=e.CHM(n).$implicit,s=e.oxw();return e.KtG(s.editProduct(r))}),e.qZA(),e.TgZ(9,"button",27),e.NdJ("click",function(){const r=e.CHM(n).$implicit,s=e.oxw();return e.KtG(s.deleteProduct(r))}),e.qZA()()()}if(2&t){const n=c.$implicit;e.xp6(2),e.Q6J("value",n),e.xp6(2),e.Oqu(n.company_id),e.xp6(2),e.Oqu(n.company_name)}}function J(t,c){if(1&t&&(e.TgZ(0,"div",17),e._uU(1),e.qZA()),2&t){const n=e.oxw();e.xp6(1),e.hij("In total there are ",n.products?n.products.length:0," products.")}}function k(t,c){1&t&&(e.TgZ(0,"small",32),e._uU(1,"Color Name is required."),e.qZA())}function E(t,c){if(1&t){const n=e.EpF();e.TgZ(0,"div",28)(1,"label",29),e._uU(2,"Color Name"),e.qZA(),e.TgZ(3,"input",30),e.NdJ("ngModelChange",function(a){e.CHM(n);const r=e.oxw();return e.KtG(r.product.company_name=a)}),e.qZA(),e.YNc(4,k,2,0,"small",31),e.qZA()}if(2&t){const n=e.oxw();e.xp6(3),e.Q6J("ngModel",n.product.company_name),e.xp6(1),e.Q6J("ngIf",n.submitted&&!n.product.company_name)}}function F(t,c){if(1&t){const n=e.EpF();e.TgZ(0,"button",33),e.NdJ("click",function(){e.CHM(n);const a=e.oxw();return e.KtG(a.hideDialog())}),e.qZA(),e.TgZ(1,"button",34),e.NdJ("click",function(){e.CHM(n);const a=e.oxw();return e.KtG(a.saveProduct())}),e.qZA()}}const R=function(){return["name","country.name","representative.name","status"]},Y=function(){return{"min-width":"75rem"}},M=function(){return{width:"450px"}};let z=(()=>{var t;class c{constructor(o,a,r,s,f){this.http=o,this.productService=a,this.messageService=r,this.confirmationService=s,this.api=f,this.productDialog=!1,this.submitted=!1,this.data1=[]}ngOnInit(){this.getDeviceDATA()}getDeviceDATA(){const o=this.api.baseUrl,a=localStorage.getItem("token"),r=(new b.WM).set("Authorization",`Bearer ${a}`);this.http.get(o+"/master/company_name",{headers:r}).subscribe(s=>{console.log(s),this.data1=s,this.products=this.data1.data},s=>{console.error(s)})}openNew(){this.product={},this.submitted=!1,this.productDialog=!0}deleteSelectedProducts(){this.confirmationService.confirm({message:"Are you sure you want to delete the selected products?",header:"Confirm",icon:"pi pi-exclamation-triangle",accept:()=>{this.products=this.products.filter(o=>!this.selectedProducts?.includes(o)),this.selectedProducts=null,this.messageService.add({severity:"success",summary:"Successful",detail:"Products Deleted",life:3e3})}})}editProduct(o){this.product={...o},this.productDialog=!0}deleteProduct(o){this.confirmationService.confirm({message:"Are you sure you want to delete "+o.company_name+"?",header:"Confirm",icon:"pi pi-exclamation-triangle",accept:()=>{this.DeleteCompany(o.company_id)}})}hideDialog(){this.productDialog=!1,this.submitted=!1}saveProduct(){this.submitted=!0,this.product.company_name?.trim()&&(this.product.company_id?this.updateCompany(this.product.company_id,this.product.company_name):this.AddCompany(this.product.company_name),this.products=[...this.products],this.productDialog=!1,this.product={})}findIndexById(o){let a=-1;for(let r=0;r<this.products.length;r++)if(this.products[r].company_id===o){a=r;break}return a}updateCompany(o,a){const r={company_id:o,company_name:a},s=this.api.baseUrl,f=localStorage.getItem("token"),d=(new b.WM).set("Authorization",`Bearer ${f}`);this.http.post(s+"/master/edit_company_name",r,{headers:d}).subscribe(C=>{console.log(C),this.messageService.add({severity:"success",summary:"Successful",detail:"Company Updated",life:3e3}),this.getDeviceDATA()},C=>{console.error(C)})}AddCompany(o){const a={company_name:o},r=this.api.baseUrl,s=localStorage.getItem("token"),f=(new b.WM).set("Authorization",`Bearer ${s}`);this.http.post(r+"/master/add_company_name",a,{headers:f}).subscribe(d=>{console.log(d),this.messageService.add({severity:"success",summary:"Successful",detail:"Company Created",life:3e3}),this.getDeviceDATA()},d=>{console.error(d)})}DeleteCompany(o){const a={company_id:o},r=this.api.baseUrl,s=localStorage.getItem("token"),f=(new b.WM).set("Authorization",`Bearer ${s}`);this.http.post(r+"/master/delete_company_name",a,{headers:f}).subscribe(d=>{console.log(d),this.messageService.add({severity:"success",summary:"Successful",detail:"Company Deleted",life:3e3}),this.getDeviceDATA()},d=>{console.error(d)})}}return(t=c).\u0275fac=function(o){return new(o||t)(e.Y36(b.eN),e.Y36(D.M),e.Y36(_.ez),e.Y36(_.YP),e.Y36(Z.s))},t.\u0275cmp=e.Xpm({type:t,selectors:[["ng-component"]],features:[e._Bn([_.ez,_.YP])],decls:15,vars:18,consts:[[1,"card"],["styleClass","mb-4 gap-2"],["pTemplate","left"],["pTemplate","right"],["dataKey","company_id","currentPageReportTemplate","Showing {first} to {last} of {totalRecords} entries",3,"value","rows","paginator","globalFilterFields","tableStyle","selection","rowHover","showCurrentPageReport","selectionChange"],["dt",""],["pTemplate","caption"],["pTemplate","header"],["pTemplate","body"],["pTemplate","summary"],["header","Product Details","styleClass","p-fluid",3,"visible","modal","visibleChange"],["pTemplate","content"],["pTemplate","footer"],["pButton","","pRipple","","label","New","icon","pi pi-plus",1,"p-button-primary","mr-2",3,"click"],["pButton","","pRipple","","icon","pi pi-trash",1,"p-button-danger",3,"label","disabled","click"],["mode","basic","accept","image/*","label","Import","chooseLabel","Import",1,"mr-2","inline-block",3,"maxFileSize"],["pButton","","pRipple","","label","Export","icon","pi pi-upload",1,"p-button-help"],[1,"flex","align-items-center","justify-content-between"],[1,"m-0"],[1,"p-input-icon-left"],[1,"pi","pi-search"],["pInputText","","type","text","placeholder","Search...",3,"input"],[2,"width","4rem"],["pSortableColumn","name",2,"min-width","15rem"],["field","name"],[3,"value"],["pButton","","pRipple","","icon","pi pi-pencil",1,"p-button-rounded","p-button-primary","mr-2",3,"click"],["pButton","","pRipple","","icon","pi pi-trash",1,"p-button-rounded","p-button-danger",3,"click"],[1,"field"],["for","name"],["type","text","pInputText","","id","name","required","","autofocus","",3,"ngModel","ngModelChange"],["class","p-error",4,"ngIf"],[1,"p-error"],["pButton","","pRipple","","label","Cancel","icon","pi pi-times",1,"p-button-text",3,"click"],["pButton","","pRipple","","label","Save","icon","pi pi-check",1,"p-button-text",3,"click"]],template:function(o,a){1&o&&(e.TgZ(0,"div",0),e._UZ(1,"p-toast"),e.TgZ(2,"p-toolbar",1),e.YNc(3,U,2,2,"ng-template",2),e.YNc(4,B,2,1,"ng-template",3),e.qZA(),e.TgZ(5,"p-table",4,5),e.NdJ("selectionChange",function(s){return a.selectedProducts=s}),e.YNc(7,N,6,0,"ng-template",6),e.YNc(8,w,10,0,"ng-template",7),e.YNc(9,I,10,3,"ng-template",8),e.YNc(10,J,2,1,"ng-template",9),e.qZA()(),e.TgZ(11,"p-dialog",10),e.NdJ("visibleChange",function(s){return a.productDialog=s}),e.YNc(12,E,5,2,"ng-template",11),e.YNc(13,F,2,0,"ng-template",12),e.qZA(),e._UZ(14,"p-confirmDialog")),2&o&&(e.xp6(5),e.Q6J("value",a.products)("rows",4)("paginator",!0)("globalFilterFields",e.DdM(14,R))("tableStyle",e.DdM(15,Y))("selection",a.selectedProducts)("rowHover",!0)("showCurrentPageReport",!0),e.xp6(6),e.Akn(e.DdM(16,M)),e.Q6J("visible",a.productDialog)("modal",!0),e.xp6(3),e.Akn(e.DdM(17,M)))},dependencies:[h.O5,g.Fj,g.JJ,g.Q7,g.On,u.iA,_.jx,u.lQ,u.fz,u.UA,u.Mo,l.Hq,m.o,p.H,v.FN,x.V,A.o,P.Q],encapsulation:2}),c})(),H=(()=>{var t;class c{}return(t=c).\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[y.Bz.forChild([{path:"",component:z}]),y.Bz]}),c})();var K=i(6804),j=i(4055),O=i(3965),Q=i(6651),G=i(7902),W=i(6022);let $=(()=>{var t;class c{}return(t=c).\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[h.ez,H,g.u5,u.U$,W.Xt,l.hJ,G.JH,m.j,K.KZ,p.T,j.q4,O.kW,Q.q,v.EV,x.S,A.V,P.D]}),c})()},6651:(S,T,i)=>{i.d(T,{q:()=>u});var h=i(1180),g=i(6814),y=i(4769);let u=(()=>{var l;class m{}return l=m,(0,h.Z)(m,"\u0275fac",function(v){return new(v||l)}),(0,h.Z)(m,"\u0275mod",y.oAB({type:l})),(0,h.Z)(m,"\u0275inj",y.cJS({imports:[g.ez]})),m})()}}]);