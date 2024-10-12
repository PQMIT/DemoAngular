import {
  BaseComponent
} from "./chunk-5UZ25CIA.js";
import {
  BaseStyle,
  Footer,
  Header,
  ObjectUtils,
  PrimeTemplate,
  SharedModule
} from "./chunk-BKBBF4WT.js";
import "./chunk-3HMRNJKG.js";
import {
  CommonModule,
  NgClass,
  NgIf,
  NgStyle,
  NgTemplateOutlet
} from "./chunk-IPDESXSG.js";
import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ContentChildren,
  Injectable,
  Input,
  NgModule,
  ViewEncapsulation$1,
  inject,
  setClassMetadata,
  signal,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetInheritedFactory,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-Q4V3VSNF.js";
import "./chunk-XPU7EA6D.js";
import "./chunk-QN5HDKTT.js";
import "./chunk-MHK6ZZQX.js";
import "./chunk-WDMUDEB6.js";

// node_modules/primeng/fesm2022/primeng-card.mjs
var _c0 = ["*", [["p-header"]], [["p-footer"]]];
var _c1 = ["*", "p-header", "p-footer"];
function Card_div_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Card_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 8);
    ɵɵprojection(1, 1);
    ɵɵtemplate(2, Card_div_1_ng_container_2_Template, 1, 0, "ng-container", 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r0.headerTemplate);
  }
}
function Card_div_3_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Card_div_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 9);
    ɵɵtext(1);
    ɵɵtemplate(2, Card_div_3_ng_container_2_Template, 1, 0, "ng-container", 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r0.header, " ");
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.titleTemplate);
  }
}
function Card_div_4_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Card_div_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 10);
    ɵɵtext(1);
    ɵɵtemplate(2, Card_div_4_ng_container_2_Template, 1, 0, "ng-container", 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r0.subheader, " ");
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.subtitleTemplate);
  }
}
function Card_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Card_div_8_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Card_div_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 11);
    ɵɵprojection(1, 2);
    ɵɵtemplate(2, Card_div_8_ng_container_2_Template, 1, 0, "ng-container", 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r0.footerTemplate);
  }
}
var theme = ({
  dt
}) => `
.p-card {
    background: ${dt("card.background")};
    color: ${dt("card.color")};
    box-shadow: ${dt("card.shadow")};
    border-radius: ${dt("card.border.radius")};
    display: flex;
    flex-direction: column;
}

.p-card-caption {
    display: flex;
    flex-direction: column;
    gap: ${dt("card.caption.gap")};
}

.p-card-body {
    padding: ${dt("card.body.padding")};
    display: flex;
    flex-direction: column;
    gap: ${dt("card.body.gap")};
}

.p-card-title {
    font-size: ${dt("card.title.font.size")};
    font-weight: ${dt("card.title.font.weight")};
}

.p-card-subtitle {
    color: ${dt("card.subtitle.color")};
}
`;
var classes = {
  root: "p-card p-component",
  header: "p-card-header",
  body: "p-card-body",
  caption: "p-card-caption",
  title: "p-card-title",
  subtitle: "p-card-subtitle",
  content: "p-card-content",
  footer: "p-card-footer"
};
var CardStyle = class _CardStyle extends BaseStyle {
  name = "card";
  theme = theme;
  classes = classes;
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵCardStyle_BaseFactory;
    return function CardStyle_Factory(__ngFactoryType__) {
      return (ɵCardStyle_BaseFactory || (ɵCardStyle_BaseFactory = ɵɵgetInheritedFactory(_CardStyle)))(__ngFactoryType__ || _CardStyle);
    };
  })();
  static ɵprov = ɵɵdefineInjectable({
    token: _CardStyle,
    factory: _CardStyle.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CardStyle, [{
    type: Injectable
  }], null, null);
})();
var CardClasses;
(function(CardClasses2) {
  CardClasses2["root"] = "p-card";
  CardClasses2["header"] = "p-card-header";
  CardClasses2["body"] = "p-card-body";
  CardClasses2["caption"] = "p-card-caption";
  CardClasses2["title"] = "p-card-title";
  CardClasses2["subtitle"] = "p-card-subtitle";
  CardClasses2["content"] = "p-card-content";
  CardClasses2["footer"] = "p-card-footer";
})(CardClasses || (CardClasses = {}));
var Card = class _Card extends BaseComponent {
  /**
   * Header of the card.
   * @group Props
   */
  header;
  /**
   * Subheader of the card.
   * @group Props
   */
  subheader;
  /**
   * Inline style of the element.
   * @group Props
   */
  set style(value) {
    if (!ObjectUtils.equals(this._style(), value)) {
      this._style.set(value);
    }
  }
  /**
   * Class of the element.
   * @group Props
   */
  styleClass;
  headerFacet;
  footerFacet;
  templates;
  headerTemplate;
  titleTemplate;
  subtitleTemplate;
  contentTemplate;
  footerTemplate;
  _style = signal(null);
  _componentStyle = inject(CardStyle);
  ngAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "header":
          this.headerTemplate = item.template;
          break;
        case "title":
          this.titleTemplate = item.template;
          break;
        case "subtitle":
          this.subtitleTemplate = item.template;
          break;
        case "content":
          this.contentTemplate = item.template;
          break;
        case "footer":
          this.footerTemplate = item.template;
          break;
        default:
          this.contentTemplate = item.template;
          break;
      }
    });
  }
  getBlockableElement() {
    return this.el.nativeElement.children[0];
  }
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵCard_BaseFactory;
    return function Card_Factory(__ngFactoryType__) {
      return (ɵCard_BaseFactory || (ɵCard_BaseFactory = ɵɵgetInheritedFactory(_Card)))(__ngFactoryType__ || _Card);
    };
  })();
  static ɵcmp = ɵɵdefineComponent({
    type: _Card,
    selectors: [["p-card"]],
    contentQueries: function Card_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, Header, 5);
        ɵɵcontentQuery(dirIndex, Footer, 5);
        ɵɵcontentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.headerFacet = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.footerFacet = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templates = _t);
      }
    },
    inputs: {
      header: "header",
      subheader: "subheader",
      style: "style",
      styleClass: "styleClass"
    },
    features: [ɵɵProvidersFeature([CardStyle]), ɵɵInheritDefinitionFeature],
    ngContentSelectors: _c1,
    decls: 9,
    vars: 10,
    consts: [[3, "ngClass", "ngStyle"], ["class", "p-card-header", 4, "ngIf"], [1, "p-card-body"], ["class", "p-card-title", 4, "ngIf"], ["class", "p-card-subtitle", 4, "ngIf"], [1, "p-card-content"], [4, "ngTemplateOutlet"], ["class", "p-card-footer", 4, "ngIf"], [1, "p-card-header"], [1, "p-card-title"], [1, "p-card-subtitle"], [1, "p-card-footer"]],
    template: function Card_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef(_c0);
        ɵɵelementStart(0, "div", 0);
        ɵɵtemplate(1, Card_div_1_Template, 3, 1, "div", 1);
        ɵɵelementStart(2, "div", 2);
        ɵɵtemplate(3, Card_div_3_Template, 3, 2, "div", 3)(4, Card_div_4_Template, 3, 2, "div", 4);
        ɵɵelementStart(5, "div", 5);
        ɵɵprojection(6);
        ɵɵtemplate(7, Card_ng_container_7_Template, 1, 0, "ng-container", 6);
        ɵɵelementEnd();
        ɵɵtemplate(8, Card_div_8_Template, 3, 1, "div", 7);
        ɵɵelementEnd()();
      }
      if (rf & 2) {
        ɵɵclassMap(ctx.styleClass);
        ɵɵproperty("ngClass", "p-card p-component")("ngStyle", ctx._style());
        ɵɵattribute("data-pc-name", "card");
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.headerFacet || ctx.headerTemplate);
        ɵɵadvance(2);
        ɵɵproperty("ngIf", ctx.header || ctx.titleTemplate);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.subheader || ctx.subtitleTemplate);
        ɵɵadvance(3);
        ɵɵproperty("ngTemplateOutlet", ctx.contentTemplate);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.footerFacet || ctx.footerTemplate);
      }
    },
    dependencies: [NgClass, NgIf, NgTemplateOutlet, NgStyle],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Card, [{
    type: Component,
    args: [{
      selector: "p-card",
      template: `
        <div [ngClass]="'p-card p-component'" [ngStyle]="_style()" [class]="styleClass" [attr.data-pc-name]="'card'">
            <div class="p-card-header" *ngIf="headerFacet || headerTemplate">
                <ng-content select="p-header"></ng-content>
                <ng-container *ngTemplateOutlet="headerTemplate"></ng-container>
            </div>
            <div class="p-card-body">
                <div class="p-card-title" *ngIf="header || titleTemplate">
                    {{ header }}
                    <ng-container *ngTemplateOutlet="titleTemplate"></ng-container>
                </div>
                <div class="p-card-subtitle" *ngIf="subheader || subtitleTemplate">
                    {{ subheader }}
                    <ng-container *ngTemplateOutlet="subtitleTemplate"></ng-container>
                </div>
                <div class="p-card-content">
                    <ng-content></ng-content>
                    <ng-container *ngTemplateOutlet="contentTemplate"></ng-container>
                </div>
                <div class="p-card-footer" *ngIf="footerFacet || footerTemplate">
                    <ng-content select="p-footer"></ng-content>
                    <ng-container *ngTemplateOutlet="footerTemplate"></ng-container>
                </div>
            </div>
        </div>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      providers: [CardStyle]
    }]
  }], null, {
    header: [{
      type: Input
    }],
    subheader: [{
      type: Input
    }],
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    headerFacet: [{
      type: ContentChild,
      args: [Header]
    }],
    footerFacet: [{
      type: ContentChild,
      args: [Footer]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var CardModule = class _CardModule {
  static ɵfac = function CardModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CardModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _CardModule,
    declarations: [Card],
    imports: [CommonModule],
    exports: [Card, SharedModule]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [CommonModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CardModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      exports: [Card, SharedModule],
      declarations: [Card]
    }]
  }], null, null);
})();
export {
  Card,
  CardModule
};
//# sourceMappingURL=primeng_card.js.map
