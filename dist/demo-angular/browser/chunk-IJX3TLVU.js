import{A as _,Ba as b,Ga as E,L as n,S,T as M,Vb as B,W as o,X as j,Y as i,_b as q,aa as k,bb as $,db as O,fa as l,ga as d,gb as Q,hb as w,hc as R,ic as z,jb as N,jc as P,ka as s,kc as A,na as m,oa as D,p as T,pa as f,q as C,s as x,t as I,ta as u,u as F,va as y,wa as g,za as v,zc as H}from"./chunk-JQQTIQ75.js";var V=["*",[["p-header"]],[["p-footer"]]],G=["*","p-header","p-footer"];function J(e,c){e&1&&s(0)}function K(e,c){if(e&1&&(l(0,"div",8),f(1,1),o(2,J,1,0,"ng-container",6),d()),e&2){let t=m();n(2),i("ngTemplateOutlet",t.headerTemplate)}}function L(e,c){e&1&&s(0)}function W(e,c){if(e&1&&(l(0,"div",9),v(1),o(2,L,1,0,"ng-container",6),d()),e&2){let t=m();n(),b(" ",t.header," "),n(),i("ngTemplateOutlet",t.titleTemplate)}}function X(e,c){e&1&&s(0)}function Y(e,c){if(e&1&&(l(0,"div",10),v(1),o(2,X,1,0,"ng-container",6),d()),e&2){let t=m();n(),b(" ",t.subheader," "),n(),i("ngTemplateOutlet",t.subtitleTemplate)}}function Z(e,c){e&1&&s(0)}function ee(e,c){e&1&&s(0)}function te(e,c){if(e&1&&(l(0,"div",11),f(1,2),o(2,ee,1,0,"ng-container",6),d()),e&2){let t=m();n(2),i("ngTemplateOutlet",t.footerTemplate)}}var ae=({dt:e})=>`
.p-card {
    background: ${e("card.background")};
    color: ${e("card.color")};
    box-shadow: ${e("card.shadow")};
    border-radius: ${e("card.border.radius")};
    display: flex;
    flex-direction: column;
}

.p-card-caption {
    display: flex;
    flex-direction: column;
    gap: ${e("card.caption.gap")};
}

.p-card-body {
    padding: ${e("card.body.padding")};
    display: flex;
    flex-direction: column;
    gap: ${e("card.body.gap")};
}

.p-card-title {
    font-size: ${e("card.title.font.size")};
    font-weight: ${e("card.title.font.weight")};
}

.p-card-subtitle {
    color: ${e("card.subtitle.color")};
}
`,ne={root:"p-card p-component",header:"p-card-header",body:"p-card-body",caption:"p-card-caption",title:"p-card-title",subtitle:"p-card-subtitle",content:"p-card-content",footer:"p-card-footer"},U=(()=>{class e extends q{name="card";theme=ae;classes=ne;static \u0275fac=(()=>{let t;return function(a){return(t||(t=_(e)))(a||e)}})();static \u0275prov=T({token:e,factory:e.\u0275fac})}return e})();var be=(()=>{class e extends H{header;subheader;set style(t){B.equals(this._style(),t)||this._style.set(t)}styleClass;headerFacet;footerFacet;templates;headerTemplate;titleTemplate;subtitleTemplate;contentTemplate;footerTemplate;_style=S(null);_componentStyle=x(U);ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"header":this.headerTemplate=t.template;break;case"title":this.titleTemplate=t.template;break;case"subtitle":this.subtitleTemplate=t.template;break;case"content":this.contentTemplate=t.template;break;case"footer":this.footerTemplate=t.template;break;default:this.contentTemplate=t.template;break}})}getBlockableElement(){return this.el.nativeElement.children[0]}static \u0275fac=(()=>{let t;return function(a){return(t||(t=_(e)))(a||e)}})();static \u0275cmp=I({type:e,selectors:[["p-card"]],contentQueries:function(r,a,h){if(r&1&&(u(h,R,5),u(h,z,5),u(h,P,4)),r&2){let p;y(p=g())&&(a.headerFacet=p.first),y(p=g())&&(a.footerFacet=p.first),y(p=g())&&(a.templates=p)}},inputs:{header:"header",subheader:"subheader",style:"style",styleClass:"styleClass"},features:[E([U]),M],ngContentSelectors:G,decls:9,vars:10,consts:[[3,"ngClass","ngStyle"],["class","p-card-header",4,"ngIf"],[1,"p-card-body"],["class","p-card-title",4,"ngIf"],["class","p-card-subtitle",4,"ngIf"],[1,"p-card-content"],[4,"ngTemplateOutlet"],["class","p-card-footer",4,"ngIf"],[1,"p-card-header"],[1,"p-card-title"],[1,"p-card-subtitle"],[1,"p-card-footer"]],template:function(r,a){r&1&&(D(V),l(0,"div",0),o(1,K,3,1,"div",1),l(2,"div",2),o(3,W,3,2,"div",3)(4,Y,3,2,"div",4),l(5,"div",5),f(6),o(7,Z,1,0,"ng-container",6),d(),o(8,te,3,1,"div",7),d()()),r&2&&(k(a.styleClass),i("ngClass","p-card p-component")("ngStyle",a._style()),j("data-pc-name","card"),n(),i("ngIf",a.headerFacet||a.headerTemplate),n(2),i("ngIf",a.header||a.titleTemplate),n(),i("ngIf",a.subheader||a.subtitleTemplate),n(3),i("ngTemplateOutlet",a.contentTemplate),n(),i("ngIf",a.footerFacet||a.footerTemplate))},dependencies:[$,O,w,Q],encapsulation:2,changeDetection:0})}return e})(),Te=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275mod=F({type:e});static \u0275inj=C({imports:[N,A]})}return e})();export{be as a,Te as b};
