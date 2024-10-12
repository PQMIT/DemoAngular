import {
  BaseComponent
} from "./chunk-5UZ25CIA.js";
import {
  BaseStyle,
  SharedModule
} from "./chunk-BKBBF4WT.js";
import "./chunk-3HMRNJKG.js";
import {
  CommonModule,
  NgClass,
  NgStyle
} from "./chunk-IPDESXSG.js";
import {
  Component,
  Injectable,
  Input,
  NgModule,
  inject,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵattribute,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetInheritedFactory,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty
} from "./chunk-Q4V3VSNF.js";
import "./chunk-XPU7EA6D.js";
import "./chunk-QN5HDKTT.js";
import "./chunk-MHK6ZZQX.js";
import "./chunk-WDMUDEB6.js";

// node_modules/primeng/fesm2022/primeng-inputgroupaddon.mjs
var _c0 = ["*"];
var classes = {
  root: "p-inputgroupaddon"
};
var InputGroupAddonStyle = class _InputGroupAddonStyle extends BaseStyle {
  name = "inputgroupaddon";
  classes = classes;
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵInputGroupAddonStyle_BaseFactory;
    return function InputGroupAddonStyle_Factory(__ngFactoryType__) {
      return (ɵInputGroupAddonStyle_BaseFactory || (ɵInputGroupAddonStyle_BaseFactory = ɵɵgetInheritedFactory(_InputGroupAddonStyle)))(__ngFactoryType__ || _InputGroupAddonStyle);
    };
  })();
  static ɵprov = ɵɵdefineInjectable({
    token: _InputGroupAddonStyle,
    factory: _InputGroupAddonStyle.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputGroupAddonStyle, [{
    type: Injectable
  }], null, null);
})();
var InputGroupAddon = class _InputGroupAddon extends BaseComponent {
  /**
   * Inline style of the element.
   * @group Props
   */
  style;
  /**
   * Class of the element.
   * @group Props
   */
  styleClass;
  _componentStyle = inject(InputGroupAddonStyle);
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵInputGroupAddon_BaseFactory;
    return function InputGroupAddon_Factory(__ngFactoryType__) {
      return (ɵInputGroupAddon_BaseFactory || (ɵInputGroupAddon_BaseFactory = ɵɵgetInheritedFactory(_InputGroupAddon)))(__ngFactoryType__ || _InputGroupAddon);
    };
  })();
  static ɵcmp = ɵɵdefineComponent({
    type: _InputGroupAddon,
    selectors: [["p-inputgroup-addon"], ["p-inputGroupAddon"]],
    inputs: {
      style: "style",
      styleClass: "styleClass"
    },
    features: [ɵɵProvidersFeature([InputGroupAddonStyle]), ɵɵInheritDefinitionFeature],
    ngContentSelectors: _c0,
    decls: 2,
    vars: 3,
    consts: [[1, "p-inputgroupaddon", 3, "ngClass", "ngStyle"]],
    template: function InputGroupAddon_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵelementStart(0, "div", 0);
        ɵɵprojection(1);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵproperty("ngClass", ctx.styleClass)("ngStyle", ctx.style);
        ɵɵattribute("data-pc-name", "inputgroupaddon");
      }
    },
    dependencies: [NgClass, NgStyle],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputGroupAddon, [{
    type: Component,
    args: [{
      selector: "p-inputgroup-addon, p-inputGroupAddon",
      template: `
        <div [attr.data-pc-name]="'inputgroupaddon'" class="p-inputgroupaddon" [ngClass]="styleClass" [ngStyle]="style">
            <ng-content></ng-content>
        </div>
    `,
      providers: [InputGroupAddonStyle]
    }]
  }], null, {
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }]
  });
})();
var InputGroupAddonModule = class _InputGroupAddonModule {
  static ɵfac = function InputGroupAddonModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InputGroupAddonModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _InputGroupAddonModule,
    declarations: [InputGroupAddon],
    imports: [CommonModule],
    exports: [InputGroupAddon, SharedModule]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [CommonModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputGroupAddonModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      exports: [InputGroupAddon, SharedModule],
      declarations: [InputGroupAddon]
    }]
  }], null, null);
})();
export {
  InputGroupAddon,
  InputGroupAddonModule
};
//# sourceMappingURL=primeng_inputgroupaddon.js.map
