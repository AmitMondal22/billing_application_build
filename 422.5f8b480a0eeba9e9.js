"use strict";(self.webpackChunksakai_ng=self.webpackChunksakai_ng||[]).push([[422],{8422:(w,A,n)=>{n.r(A),n.d(A,{TableDemoModule:()=>$});var m=n(6814),b=n(95),t=n(3557),T=n(5219),C=n(9862),e=n(4769),P=n(981),M=n(8814),v=n(9232),p=n(707),f=n(3714),c=n(4480),D=n(4104),s=n(1312),u=n(6340),h=n(3904);function g(o,_){if(1&o){const i=e.EpF();e.TgZ(0,"button",13),e.NdJ("click",function(){e.CHM(i);const r=e.oxw();return e.KtG(r.openNew())}),e.qZA(),e.TgZ(1,"button",14),e.NdJ("click",function(){e.CHM(i);const r=e.oxw();return e.KtG(r.deleteSelectedProducts())}),e.qZA()}if(2&o){const i=e.oxw();e.xp6(1),e.Q6J("label",i.Delete)("disabled",!i.selectedProducts||!i.selectedProducts.length)}}function y(o,_){1&o&&e._UZ(0,"p-fileUpload",15)(1,"button",16),2&o&&e.Q6J("maxFileSize",1e6)}function I(o,_){if(1&o){const i=e.EpF();e.TgZ(0,"div",17)(1,"h5",18),e._uU(2,"Manage Companys"),e.qZA(),e.TgZ(3,"span",19),e._UZ(4,"i",20),e.TgZ(5,"input",21),e.NdJ("input",function(r){e.CHM(i),e.oxw();const l=e.MAs(6);return e.KtG(l.filterGlobal(r.target.value,"contains"))}),e.qZA()()()}}function S(o,_){1&o&&(e.TgZ(0,"tr")(1,"th",22),e._UZ(2,"p-tableHeaderCheckbox"),e.qZA(),e.TgZ(3,"th"),e._uU(4,"ID"),e.qZA(),e.TgZ(5,"th",23),e._uU(6,"Name "),e._UZ(7,"p-sortIcon",24),e.qZA(),e.TgZ(8,"th"),e._uU(9,"Action"),e.qZA()())}function E(o,_){if(1&o){const i=e.EpF();e.TgZ(0,"tr")(1,"td"),e._UZ(2,"p-tableCheckbox",25),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td")(8,"button",26),e.NdJ("click",function(){const l=e.CHM(i).$implicit,d=e.oxw();return e.KtG(d.editProduct(l))}),e.qZA(),e.TgZ(9,"button",27),e.NdJ("click",function(){const l=e.CHM(i).$implicit,d=e.oxw();return e.KtG(d.deleteProduct(l))}),e.qZA()()()}if(2&o){const i=_.$implicit;e.xp6(2),e.Q6J("value",i),e.xp6(2),e.Oqu(i.company_id),e.xp6(2),e.Oqu(i.company_name)}}function U(o,_){if(1&o&&(e.TgZ(0,"div",17),e._uU(1),e.qZA()),2&o){const i=e.oxw();e.xp6(1),e.hij("In total there are ",i.products?i.products.length:0," products.")}}function J(o,_){1&o&&(e.TgZ(0,"small",32),e._uU(1,"Company Name is required."),e.qZA())}function k(o,_){if(1&o){const i=e.EpF();e.TgZ(0,"div",28)(1,"label",29),e._uU(2,"Company Name"),e.qZA(),e.TgZ(3,"input",30),e.NdJ("ngModelChange",function(r){e.CHM(i);const l=e.oxw();return e.KtG(l.product.company_name=r)}),e.qZA(),e.YNc(4,J,2,0,"small",31),e.qZA()}if(2&o){const i=e.oxw();e.xp6(3),e.Q6J("ngModel",i.product.company_name),e.xp6(1),e.Q6J("ngIf",i.submitted&&!i.product.company_name)}}function F(o,_){if(1&o){const i=e.EpF();e.TgZ(0,"button",33),e.NdJ("click",function(){e.CHM(i);const r=e.oxw();return e.KtG(r.hideDialog())}),e.qZA(),e.TgZ(1,"button",34),e.NdJ("click",function(){e.CHM(i);const r=e.oxw();return e.KtG(r.saveProduct())}),e.qZA()}}const O=function(){return["name","country.name","representative.name","status"]},Y=function(){return{"min-width":"75rem"}},N=function(){return{width:"450px"}};let R=(()=>{var o;class _{constructor(a,r,l,d,Z){this.http=a,this.productService=r,this.messageService=l,this.confirmationService=d,this.api=Z,this.productDialog=!1,this.submitted=!1,this.data1=[]}ngOnInit(){this.getDeviceDATA()}getDeviceDATA(){const a=this.api.baseUrl,r=localStorage.getItem("token"),l=(new C.WM).set("Authorization",`Bearer ${r}`);this.http.get(a+"/master/company_name",{headers:l}).subscribe(d=>{console.log(d),this.data1=d,this.products=this.data1.data},d=>{console.error(d)})}openNew(){this.product={},this.submitted=!1,this.productDialog=!0}deleteSelectedProducts(){this.confirmationService.confirm({message:"Are you sure you want to delete the selected products?",header:"Confirm",icon:"pi pi-exclamation-triangle",accept:()=>{this.products=this.products.filter(a=>!this.selectedProducts?.includes(a)),this.selectedProducts=null,this.messageService.add({severity:"success",summary:"Successful",detail:"Products Deleted",life:3e3})}})}editProduct(a){this.product={...a},this.productDialog=!0}deleteProduct(a){this.confirmationService.confirm({message:"Are you sure you want to delete "+a.company_name+"?",header:"Confirm",icon:"pi pi-exclamation-triangle",accept:()=>{this.DeleteCompany(a.company_id)}})}hideDialog(){this.productDialog=!1,this.submitted=!1}saveProduct(){this.submitted=!0,this.product.company_name?.trim()&&(this.product.company_id?this.updateCompany(this.product.company_id,this.product.company_name):this.AddCompany(this.product.company_name),this.products=[...this.products],this.productDialog=!1,this.product={})}findIndexById(a){let r=-1;for(let l=0;l<this.products.length;l++)if(this.products[l].company_id===a){r=l;break}return r}updateCompany(a,r){const l={company_id:a,company_name:r},d=this.api.baseUrl,Z=localStorage.getItem("token"),x=(new C.WM).set("Authorization",`Bearer ${Z}`);this.http.post(d+"/master/edit_company_name",l,{headers:x}).subscribe(B=>{console.log(B),this.messageService.add({severity:"success",summary:"Successful",detail:"Company Updated",life:3e3}),this.getDeviceDATA()},B=>{console.error(B)})}AddCompany(a){const r={company_name:a},l=this.api.baseUrl,d=localStorage.getItem("token"),Z=(new C.WM).set("Authorization",`Bearer ${d}`);this.http.post(l+"/master/add_company_name",r,{headers:Z}).subscribe(x=>{console.log(x),this.messageService.add({severity:"success",summary:"Successful",detail:"Company Created",life:3e3}),this.getDeviceDATA()},x=>{console.error(x)})}DeleteCompany(a){const r={company_id:a},l=this.api.baseUrl,d=localStorage.getItem("token"),Z=(new C.WM).set("Authorization",`Bearer ${d}`);this.http.post(l+"/master/delete_company_name",r,{headers:Z}).subscribe(x=>{console.log(x),this.messageService.add({severity:"success",summary:"Successful",detail:"Company Deleted",life:3e3}),this.getDeviceDATA()},x=>{console.error(x)})}}return(o=_).\u0275fac=function(a){return new(a||o)(e.Y36(C.eN),e.Y36(P.M),e.Y36(T.ez),e.Y36(T.YP),e.Y36(M.s))},o.\u0275cmp=e.Xpm({type:o,selectors:[["ng-component"]],features:[e._Bn([T.ez,T.YP])],decls:15,vars:18,consts:[[1,"card"],["styleClass","mb-4 gap-2"],["pTemplate","left"],["pTemplate","right"],["dataKey","company_id","currentPageReportTemplate","Showing {first} to {last} of {totalRecords} entries",3,"value","rows","paginator","globalFilterFields","tableStyle","selection","rowHover","showCurrentPageReport","selectionChange"],["dt",""],["pTemplate","caption"],["pTemplate","header"],["pTemplate","body"],["pTemplate","summary"],["header","Product Details","styleClass","p-fluid",3,"visible","modal","visibleChange"],["pTemplate","content"],["pTemplate","footer"],["pButton","","pRipple","","label","New","icon","pi pi-plus",1,"p-button-primary","mr-2",3,"click"],["pButton","","pRipple","","icon","pi pi-trash",1,"p-button-danger",3,"label","disabled","click"],["mode","basic","accept","image/*","label","Import","chooseLabel","Import",1,"mr-2","inline-block",3,"maxFileSize"],["pButton","","pRipple","","label","Export","icon","pi pi-upload",1,"p-button-help"],[1,"flex","align-items-center","justify-content-between"],[1,"m-0"],[1,"p-input-icon-left"],[1,"pi","pi-search"],["pInputText","","type","text","placeholder","Search...",3,"input"],[2,"width","4rem"],["pSortableColumn","name",2,"min-width","15rem"],["field","name"],[3,"value"],["pButton","","pRipple","","icon","pi pi-pencil",1,"p-button-rounded","p-button-primary","mr-2",3,"click"],["pButton","","pRipple","","icon","pi pi-trash",1,"p-button-rounded","p-button-danger",3,"click"],[1,"field"],["for","name"],["type","text","pInputText","","id","name","required","","autofocus","",3,"ngModel","ngModelChange"],["class","p-error",4,"ngIf"],[1,"p-error"],["pButton","","pRipple","","label","Cancel","icon","pi pi-times",1,"p-button-text",3,"click"],["pButton","","pRipple","","label","Save","icon","pi pi-check",1,"p-button-text",3,"click"]],template:function(a,r){1&a&&(e.TgZ(0,"div",0),e._UZ(1,"p-toast"),e.TgZ(2,"p-toolbar",1),e.YNc(3,g,2,2,"ng-template",2),e.YNc(4,y,2,1,"ng-template",3),e.qZA(),e.TgZ(5,"p-table",4,5),e.NdJ("selectionChange",function(d){return r.selectedProducts=d}),e.YNc(7,I,6,0,"ng-template",6),e.YNc(8,S,10,0,"ng-template",7),e.YNc(9,E,10,3,"ng-template",8),e.YNc(10,U,2,1,"ng-template",9),e.qZA()(),e.TgZ(11,"p-dialog",10),e.NdJ("visibleChange",function(d){return r.productDialog=d}),e.YNc(12,k,5,2,"ng-template",11),e.YNc(13,F,2,0,"ng-template",12),e.qZA(),e._UZ(14,"p-confirmDialog")),2&a&&(e.xp6(5),e.Q6J("value",r.products)("rows",4)("paginator",!0)("globalFilterFields",e.DdM(14,O))("tableStyle",e.DdM(15,Y))("selection",r.selectedProducts)("rowHover",!0)("showCurrentPageReport",!0),e.xp6(6),e.Akn(e.DdM(16,N)),e.Q6J("visible",r.productDialog)("modal",!0),e.xp6(3),e.Akn(e.DdM(17,N)))},dependencies:[m.O5,b.Fj,b.JJ,b.Q7,b.On,v.iA,T.jx,v.lQ,v.fz,v.UA,v.Mo,p.Hq,f.o,c.H,D.FN,s.V,u.o,h.Q],encapsulation:2}),_})(),Q=(()=>{var o;class _{}return(o=_).\u0275fac=function(a){return new(a||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[t.Bz.forChild([{path:"",component:R}]),t.Bz]}),_})();var K=n(6804),j=n(4055),z=n(3965),H=n(6651),W=n(7902),G=n(6022);let $=(()=>{var o;class _{}return(o=_).\u0275fac=function(a){return new(a||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[m.ez,Q,b.u5,v.U$,G.Xt,p.hJ,W.JH,f.j,K.KZ,c.T,j.q4,z.kW,H.q,D.EV,s.S,u.V,h.D]}),_})()},6651:(w,A,n)=>{n.d(A,{q:()=>v});var m=n(1180),b=n(6814),t=n(4769);let v=(()=>{var p;class f{}return p=f,(0,m.Z)(f,"\u0275fac",function(D){return new(D||p)}),(0,m.Z)(f,"\u0275mod",t.oAB({type:p})),(0,m.Z)(f,"\u0275inj",t.cJS({imports:[b.ez]})),f})()},6340:(w,A,n)=>{n.d(A,{V:()=>D,o:()=>c});var m=n(1180),b=n(6814),t=n(4769),T=n(5219);function C(s,u){1&s&&t.GkF(0)}function e(s,u){if(1&s&&(t.TgZ(0,"div",4),t.YNc(1,C,1,0,"ng-container",5),t.qZA()),2&s){const h=t.oxw();t.xp6(1),t.Q6J("ngTemplateOutlet",h.startTemplate)}}function P(s,u){1&s&&t.GkF(0)}function M(s,u){if(1&s&&(t.TgZ(0,"div",6),t.YNc(1,P,1,0,"ng-container",5),t.qZA()),2&s){const h=t.oxw();t.xp6(1),t.Q6J("ngTemplateOutlet",h.centerTemplate)}}function v(s,u){1&s&&t.GkF(0)}function p(s,u){if(1&s&&(t.TgZ(0,"div",7),t.YNc(1,v,1,0,"ng-container",5),t.qZA()),2&s){const h=t.oxw();t.xp6(1),t.Q6J("ngTemplateOutlet",h.endTemplate)}}const f=["*"];let c=(()=>{var s;class u{constructor(g){(0,m.Z)(this,"el",void 0),(0,m.Z)(this,"style",void 0),(0,m.Z)(this,"styleClass",void 0),(0,m.Z)(this,"templates",void 0),(0,m.Z)(this,"startTemplate",void 0),(0,m.Z)(this,"endTemplate",void 0),(0,m.Z)(this,"centerTemplate",void 0),this.el=g}getBlockableElement(){return this.el.nativeElement.children[0]}ngAfterContentInit(){this.templates.forEach(g=>{switch(g.getType()){case"left":this.startTemplate=g.template;break;case"right":this.endTemplate=g.template;break;case"center":this.centerTemplate=g.template}})}}return s=u,(0,m.Z)(u,"\u0275fac",function(g){return new(g||s)(t.Y36(t.SBq))}),(0,m.Z)(u,"\u0275cmp",t.Xpm({type:s,selectors:[["p-toolbar"]],contentQueries:function(g,y,I){if(1&g&&t.Suo(I,T.jx,4),2&g){let S;t.iGM(S=t.CRH())&&(y.templates=S)}},hostAttrs:[1,"p-element"],inputs:{style:"style",styleClass:"styleClass"},ngContentSelectors:f,decls:5,vars:7,consts:[["role","toolbar",3,"ngClass","ngStyle"],["class","p-toolbar-group-left p-toolbar-group-start",4,"ngIf"],["class","p-toolbar-group-center",4,"ngIf"],["class","p-toolbar-group-right p-toolbar-group-end",4,"ngIf"],[1,"p-toolbar-group-left","p-toolbar-group-start"],[4,"ngTemplateOutlet"],[1,"p-toolbar-group-center"],[1,"p-toolbar-group-right","p-toolbar-group-end"]],template:function(g,y){1&g&&(t.F$t(),t.TgZ(0,"div",0),t.Hsn(1),t.YNc(2,e,2,1,"div",1),t.YNc(3,M,2,1,"div",2),t.YNc(4,p,2,1,"div",3),t.qZA()),2&g&&(t.Tol(y.styleClass),t.Q6J("ngClass","p-toolbar p-component")("ngStyle",y.style),t.xp6(2),t.Q6J("ngIf",y.startTemplate),t.xp6(1),t.Q6J("ngIf",y.centerTemplate),t.xp6(1),t.Q6J("ngIf",y.endTemplate))},dependencies:[b.mk,b.O5,b.tP,b.PC],styles:[".p-toolbar{display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap}.p-toolbar-group-start,.p-toolbar-group-center,.p-toolbar-group-end,.p-toolbar-group-left,.p-toolbar-group-right{display:flex;align-items:center}\n"],encapsulation:2,changeDetection:0})),u})(),D=(()=>{var s;class u{}return s=u,(0,m.Z)(u,"\u0275fac",function(g){return new(g||s)}),(0,m.Z)(u,"\u0275mod",t.oAB({type:s})),(0,m.Z)(u,"\u0275inj",t.cJS({imports:[b.ez]})),u})()}}]);