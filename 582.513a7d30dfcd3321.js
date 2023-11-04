"use strict";(self.webpackChunksakai_ng=self.webpackChunksakai_ng||[]).push([[582],{2582:(S,l,o)=>{o.r(l),o.d(l,{DashboardModule:()=>C});var d=o(6814),p=o(95),m=o(9252),v=o(1122),y=o(9232),Z=o(707),h=o(1913),f=o(74),c=o(3557),t=o(4769),b=o(981),x=o(3859);const a=function(){return{width:"2.5rem",height:"2.5rem"}};let A=(()=>{var n;class r{constructor(e,i){this.productService=e,this.layoutService=i,this.subscription=this.layoutService.configUpdate$.subscribe(()=>{this.initChart()})}ngOnInit(){this.initChart(),this.productService.getProductsSmall().then(e=>this.products=e),this.items=[{label:"Add New",icon:"pi pi-fw pi-plus"},{label:"Remove",icon:"pi pi-fw pi-minus"}]}initChart(){const e=getComputedStyle(document.documentElement),i=e.getPropertyValue("--text-color"),u=e.getPropertyValue("--text-color-secondary"),g=e.getPropertyValue("--surface-border");this.chartData={labels:["January","February","March","April","May","June","July"],datasets:[{label:"First Dataset",data:[65,59,80,81,56,55,40],fill:!1,backgroundColor:e.getPropertyValue("--bluegray-700"),borderColor:e.getPropertyValue("--bluegray-700"),tension:.4},{label:"Second Dataset",data:[28,48,40,19,86,27,90],fill:!1,backgroundColor:e.getPropertyValue("--green-600"),borderColor:e.getPropertyValue("--green-600"),tension:.4}]},this.chartOptions={plugins:{legend:{labels:{color:i}}},scales:{x:{ticks:{color:u},grid:{color:g,drawBorder:!1}},y:{ticks:{color:u},grid:{color:g,drawBorder:!1}}}}}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}}return(n=r).\u0275fac=function(e){return new(e||n)(t.Y36(b.M),t.Y36(x.P))},n.\u0275cmp=t.Xpm({type:n,selectors:[["ng-component"]],decls:57,vars:8,consts:[[1,"grid"],[1,"col-12","lg:col-6","xl:col-3"],[1,"card","mb-0"],[1,"flex","justify-content-between","mb-3"],[1,"block","text-500","font-medium","mb-3"],[1,"text-900","font-medium","text-xl"],[1,"flex","align-items-center","justify-content-center","bg-blue-100","border-round",3,"ngStyle"],[1,"pi","pi-shopping-cart","text-blue-500","text-xl"],[1,"text-green-500","font-medium"],[1,"text-500"],[1,"flex","align-items-center","justify-content-center","bg-orange-100","border-round",3,"ngStyle"],[1,"pi","pi-map-marker","text-orange-500","text-xl"],[1,"flex","align-items-center","justify-content-center","bg-cyan-100","border-round",3,"ngStyle"],[1,"pi","pi-inbox","text-cyan-500","text-xl"],[1,"flex","align-items-center","justify-content-center","bg-purple-100","border-round",3,"ngStyle"],[1,"pi","pi-comment","text-purple-500","text-xl"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div")(5,"span",4),t._uU(6,"Orders"),t.qZA(),t.TgZ(7,"div",5),t._uU(8,"152"),t.qZA()(),t.TgZ(9,"div",6),t._UZ(10,"i",7),t.qZA()(),t.TgZ(11,"span",8),t._uU(12,"24 new "),t.qZA(),t.TgZ(13,"span",9),t._uU(14,"since last visit"),t.qZA()()(),t.TgZ(15,"div",1)(16,"div",2)(17,"div",3)(18,"div")(19,"span",4),t._uU(20,"Revenue"),t.qZA(),t.TgZ(21,"div",5),t._uU(22," \u20b920000.00"),t.qZA()(),t.TgZ(23,"div",10),t._UZ(24,"i",11),t.qZA()(),t.TgZ(25,"span",8),t._uU(26,"%52+ "),t.qZA(),t.TgZ(27,"span",9),t._uU(28,"since last week"),t.qZA()()(),t.TgZ(29,"div",1)(30,"div",2)(31,"div",3)(32,"div")(33,"span",4),t._uU(34,"Customers"),t.qZA(),t.TgZ(35,"div",5),t._uU(36,"28441"),t.qZA()(),t.TgZ(37,"div",12),t._UZ(38,"i",13),t.qZA()(),t.TgZ(39,"span",8),t._uU(40,"520 "),t.qZA(),t.TgZ(41,"span",9),t._uU(42,"newly registered"),t.qZA()()(),t.TgZ(43,"div",1)(44,"div",2)(45,"div",3)(46,"div")(47,"span",4),t._uU(48,"Comments"),t.qZA(),t.TgZ(49,"div",5),t._uU(50,"152 Unread"),t.qZA()(),t.TgZ(51,"div",14),t._UZ(52,"i",15),t.qZA()(),t.TgZ(53,"span",8),t._uU(54,"85 "),t.qZA(),t.TgZ(55,"span",9),t._uU(56,"responded"),t.qZA()()()()),2&e&&(t.xp6(9),t.Q6J("ngStyle",t.DdM(4,a)),t.xp6(14),t.Q6J("ngStyle",t.DdM(5,a)),t.xp6(14),t.Q6J("ngStyle",t.DdM(6,a)),t.xp6(14),t.Q6J("ngStyle",t.DdM(7,a)))},dependencies:[d.PC],encapsulation:2}),r})(),U=(()=>{var n;class r{}return(n=r).\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[c.Bz.forChild([{path:"",component:A}]),c.Bz]}),r})();var T=o(5905);let C=(()=>{var n;class r{}return(n=r).\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({providers:[T.$],imports:[d.ez,p.u5,m.S,v.$9,y.U$,h.l,f.ml,Z.hJ,U]}),r})()}}]);