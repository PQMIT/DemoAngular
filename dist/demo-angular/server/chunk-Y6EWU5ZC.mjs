import './polyfills.server.mjs';
import{s as z,t as B}from"./chunk-GXNIAPDR.mjs";import{D as V,E as j,ga as q,ha as H,ia as C,ja as M,l as y}from"./chunk-X7HGEV3L.mjs";import{Bb as T,Cb as F,Ha as l,Ia as _,Ib as A,Ja as f,Oa as w,Pa as O,Q as P,Qa as D,Ra as h,T as n,U as u,ca as d,ea as c,na as a,oa as s,pa as v,pc as R,sc as $,t as k,ta as E,tc as N,ua as b,va as p,y as S,z as L}from"./chunk-MCTP4ACZ.mjs";import"./chunk-5XUXGTUW.mjs";var W=()=>[10,20,30],I=t=>["/moviesView",t];function G(t,i){if(t&1&&(a(0,"span",5),l(1),s()),t&2){let e=p();n(),_(e.ogDataMovie==null||e.ogDataMovie.data==null||e.ogDataMovie.data.seoOnPage==null?null:e.ogDataMovie.data.seoOnPage.titleHead)}}function K(t,i){t&1&&(a(0,"span",5),l(1,"PHIM M\u1EDAI C\u1EACP NH\u1EACT"),s())}function J(t,i){t&1&&(a(0,"div",6)(1,"p"),l(2,"\u0110ang t\xECm ki\u1EBFm ..."),s()())}function Q(t,i){t&1&&(a(0,"div",7),v(1,"i",8),a(2,"p"),l(3,"Kh\xF4ng t\xECm th\u1EA5y phim n\xE0o"),s()())}function X(t,i){if(t&1&&v(0,"img",20),t&2){let e=p().$implicit,o=p(2);c("src",(o.ogDataMovie==null||o.ogDataMovie.data==null?null:o.ogDataMovie.data.APP_DOMAIN_CDN_IMAGE)+"/"+e.poster_url,P)("alt",e.name)("routerLink",h(3,I,e.slug))}}function Y(t,i){if(t&1&&v(0,"img",20),t&2){let e=p().$implicit;c("src",e.poster_url,P)("alt",e.name)("routerLink",h(3,I,e.slug))}}function Z(t,i){t&1&&v(0,"i",24)}function ee(t,i){t&1&&v(0,"i",25)}function te(t,i){if(t&1){let e=E();a(0,"p-button",21),b("onClick",function(r){S(e);let g=p().$implicit,m=p(2);return L(m.handleLike(r,m.listMovies.indexOf(g),g))}),d(1,Z,1,0,"i",22)(2,ee,1,0,"i",23),s()}if(t&2){let e=p().$implicit,o=p(2);c("outlined",!0),n(),c("ngIf",!o.isStatusLike[o.listMovies.indexOf(e)]),n(),c("ngIf",o.isStatusLike[o.listMovies.indexOf(e)])}}function ie(t,i){if(t&1&&(a(0,"span",28),l(1),s()),t&2){let e=i.$implicit;n(),_(e.name)}}function oe(t,i){if(t&1&&(a(0,"div")(1,"h4"),l(2,"Th\u1EC3 lo\u1EA1i:"),s(),a(3,"div",26),d(4,ie,2,1,"span",27),s()()),t&2){let e=p().$implicit;n(4),c("ngForOf",e.category)}}function ne(t,i){if(t&1&&(a(0,"div",11),d(1,X,1,5,"img",12)(2,Y,1,5,"img",12),a(3,"div",13)(4,"h2",14),l(5),s(),a(6,"div",15)(7,"div",16)(8,"h4"),l(9),s(),a(10,"h4"),l(11," Th\u1EDDi l\u01B0\u1EE3ng: "),a(12,"span",17),l(13),s()(),a(14,"h4"),l(15," T\u1EADp hi\u1EC7n t\u1EA1i: "),a(16,"span",17),l(17),s()()(),a(18,"div",18)(19,"h4"),l(20),s(),a(21,"h4"),l(22),s(),a(23,"span"),d(24,te,3,3,"p-button",19),s()()(),d(25,oe,5,1,"div",4),s()()),t&2){let e=i.$implicit,o=p(2);n(),c("ngIf",o.ogDataMovie.data),n(),c("ngIf",!o.ogDataMovie.data),n(2),c("routerLink",h(11,I,e.slug)),n(),_(e.name),n(4),f("N\u0103m ph\xE1t h\xE0nh: ",e.year,""),n(4),_(e.time||"\u0110ang c\u1EADp nh\u1EADt"),n(4),_(e.episode_current||"\u0110ang c\u1EADp nh\u1EADt"),n(3),f("Ch\u1EA5t l\u01B0\u1EE3ng phim: ",e.quality||"FHD",""),n(2),f("Ng\xF4n ng\u1EEF: ",e.lang||"Vietsub",""),n(2),c("ngIf",e),n(),c("ngIf",e.category)}}function ae(t,i){if(t&1){let e=E();a(0,"div"),d(1,ne,26,13,"div",9),a(2,"p-paginator",10),b("onPageChange",function(r){S(e);let g=p();return L(g.paginate(r))}),s()()}if(t&2){let e=p();n(),c("ngForOf",e.listMovies),n(),c("rows",e.rows)("totalRecords",(e.ogDataMovie==null||e.ogDataMovie.data==null||e.ogDataMovie.data.params==null||e.ogDataMovie.data.params.pagination==null?null:e.ogDataMovie.data.params.pagination.totalItems)||e.ogDataMovie.pagination.totalItems)("rowsPerPageOptions",D(8,W))("first",e.first)("showPageLinks",!0)("showFirstLastIcon",!0)("showCurrentPageReport",!0)}}var U=class t{constructor(i,e,o,r,g){this.route=i;this.moviesService=e;this.router=o;this.storageService=r;this.messageService=g}isLoading=!0;first=0;ogDataMovie={};listMovies=[];rows=10;categoryType="";currentPage=1;queryParam="";isStatusLike=[];showSuccess(i){this.messageService.add({severity:"success",summary:"Success",detail:`${i.name} - Saved`})}showInfo(){this.messageService.add({severity:"info",summary:"Info",detail:"Message Content"})}showWarn(i){this.messageService.add({severity:"warn",summary:"Warn",detail:`${i.name} - Unsaved`})}ngOnInit(){this.route.paramMap.subscribe(i=>{this.categoryType=i.get("slug")||"",console.log(i)}),this.route.queryParams.subscribe(i=>{this.currentPage=i.page?+i.page:1}),this.getMovie(this.currentPage,this.rows)}getMovie(i,e){if(!this.categoryType)return;this.isLoading=!0;let o=`${this.categoryType}?page=${i}&limit=${e}`;switch(console.log(o),this.categoryType){case"phim-moi-cap-nhat":this.moviesService.getPhimMoiCapNhat(o).subscribe({next:r=>{this.ogDataMovie=r,this.listMovies=r?.items;let g=this.storageService.getLocalStorage("moviesSaved")||[];this.isStatusLike=this.listMovies.map(m=>g?.some(x=>x._id===m._id))},error:r=>{console.error("L\u1ED7i khi t\xECm ki\u1EBFm phim:",r)},complete:()=>{this.isLoading=!1}});break;default:this.moviesService.getPhimFromCategory(o).subscribe({next:r=>{this.ogDataMovie=r,this.listMovies=r.data.items;let g=this.storageService.getLocalStorage("moviesSaved")||[];this.isStatusLike=this.listMovies.map(m=>g?.some(x=>x._id===m._id))},error:r=>{console.error("L\u1ED7i khi t\xECm ki\u1EBFm phim:",r)},complete:()=>{this.isLoading=!1}});break}}paginate(i){this.first=i.first,this.currentPage=i.page+1,this.rows=i.rows,this.router.navigate(["/movieListCategory/"+this.categoryType],{queryParams:{page:this.currentPage,limit:this.rows}}),this.getMovie(this.currentPage,this.rows)}handleLike(i,e,o){console.log("handleLike",e,o);let r=this.storageService.getLocalStorage("moviesSaved")||[];this.isStatusLike[e]=!this.isStatusLike[e],console.log(this.isStatusLike[e]),!r?.some(m=>m._id===o._id)&&this.isStatusLike[e]?(r.push(o),this.storageService.setLocalStorage("moviesSaved",r),this.showSuccess(o)):(r=r.filter(m=>m._id!==o._id),this.storageService.setLocalStorage("moviesSaved",r),this.showWarn(o))}static \u0275fac=function(e){return new(e||t)(u(R),u(C),u($),u(M),u(y))};static \u0275cmp=k({type:t,selectors:[["app-movie-list-category"]],standalone:!0,features:[w([C,M,y]),O],decls:8,vars:5,consts:[[1,"container"],["style","color: #10b981",4,"ngIf"],["class","skeleton-loader",4,"ngIf"],["class","no-movies-found",4,"ngIf"],[4,"ngIf"],[2,"color","#10b981"],[1,"skeleton-loader"],[1,"no-movies-found"],[1,"pi","pi-search"],["class","movie-card",4,"ngFor","ngForOf"],["currentPageReportTemplate","Trang {currentPage} / {totalPages}","pageLinkSize","10",3,"onPageChange","rows","totalRecords","rowsPerPageOptions","first","showPageLinks","showFirstLastIcon","showCurrentPageReport"],[1,"movie-card"],[3,"src","alt","routerLink",4,"ngIf"],[1,"movie-content"],[2,"cursor","pointer",3,"routerLink"],[1,"subcontent"],[1,"left-subcontent"],[2,"color","rgb(23, 151, 87)","padding","5px","font-style","italic"],[1,"right-subcontent"],["severity","danger",3,"outlined","onClick",4,"ngIf"],[3,"src","alt","routerLink"],["severity","danger",3,"onClick","outlined"],["class","pi pi-heart",4,"ngIf"],["class","pi pi-heart-fill",4,"ngIf"],[1,"pi","pi-heart"],[1,"pi","pi-heart-fill"],[1,"category-container"],["class","category-badge",4,"ngFor","ngForOf"],[1,"category-badge"]],template:function(e,o){e&1&&(a(0,"div",0)(1,"h1"),d(2,G,2,1,"span",1)(3,K,2,0,"span",1),s(),d(4,J,3,0,"div",2)(5,Q,4,0,"div",3)(6,ae,3,9,"div",4),s(),v(7,"p-toast")),e&2&&(n(2),c("ngIf",o.ogDataMovie.data),n(),c("ngIf",!o.ogDataMovie.data),n(),c("ngIf",o.isLoading),n(),c("ngIf",!o.isLoading&&o.listMovies.length===0),n(),c("ngIf",!o.isLoading&&o.listMovies.length>0))},dependencies:[A,T,F,N,B,z,j,V,H,q],styles:[".container[_ngcontent-%COMP%]{padding:20px;max-width:60vw;margin:auto;color:#10b981}.movie-card[_ngcontent-%COMP%]{border:1px solid #ccc;border-radius:8px;padding:10px;margin:10px 0;display:flex;flex-direction:row;align-items:center}.movie-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;flex-grow:1;padding-left:4rem}.movie-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:250px;height:auto;border-radius:4px;margin-right:10px;cursor:pointer}.skeleton-loader[_ngcontent-%COMP%]{width:100%;height:200px;background:#f0f0f0;animation:_ngcontent-%COMP%_pulse 1.5s infinite}.subcontent[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:flex-start}.left-subcontent[_ngcontent-%COMP%]{margin-right:2rem}.category-container[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:5px}.category-badge[_ngcontent-%COMP%]{background-color:#6495ed;color:#fff;padding:4px 6px;text-transform:uppercase;transition:background-color .3s;cursor:pointer;font-size:smaller}.category-badge[_ngcontent-%COMP%]:hover{background-color:#255cbd}.no-movies-found[_ngcontent-%COMP%]{text-align:center;padding:40px;color:#666}.no-movies-found[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:50px;color:#ff6f61;margin-bottom:20px}.no-movies-found[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:18px;color:#333}.no-movies-found[_ngcontent-%COMP%]   .search-term[_ngcontent-%COMP%]{font-weight:700;font-size:20px;color:#ff6f61}@keyframes _ngcontent-%COMP%_pulse{0%{background-color:#f0f0f0}50%{background-color:#e0e0e0}to{background-color:#f0f0f0}}"]})};export{U as MovieListCategoryComponent};
