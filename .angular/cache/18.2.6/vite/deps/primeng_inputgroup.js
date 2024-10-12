import {
  BaseComponent
} from "./chunk-5UZ25CIA.js";
import {
  BaseStyle,
  SharedModule
} from "./chunk-BKBBF4WT.js";
import "./chunk-3HMRNJKG.js";
import {
  CommonModule
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
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵgetInheritedFactory,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵstyleMap
} from "./chunk-Q4V3VSNF.js";
import "./chunk-XPU7EA6D.js";
import "./chunk-QN5HDKTT.js";
import "./chunk-MHK6ZZQX.js";
import "./chunk-WDMUDEB6.js";

// node_modules/primeng/fesm2022/primeng-inputgroup.mjs
var _c0 = ["*"];
var theme = ({
  dt
}) => `
.p-inputgroup {
    display: flex;
    align-items: stretch;
    width: 100%;
}

p-inputgroup-addon {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    background: ${dt("inputgroup.addon.background")};
    color: ${dt("inputgroup.addon.color")};
    border-top: 1px solid ${dt("inputgroup.addon.border.color")};
    border-left: 1px solid ${dt("inputgroup.addon.border.color")};
    border-bottom: 1px solid ${dt("inputgroup.addon.border.color")};
    padding: 0.5rem 0.75rem;
    min-width: 2.5rem;
}

.p-inputgroup .p-floatlabel {
    display: flex;
    align-items: stretch;
    width: 100%;
}

.p-inputgroup .p-inputtext,
.p-inputgroup-fluid .p-inputtext,
.p-inputgroup .p-inputwrapper,
.p-inputgroup-fluid .p-input {
    flex: 1 1 auto;
    width: 1%;
}

p-inputgroup-addon:last-child {
    border-right: 1px solid ${dt("inputgroup.addon.border.color")};
}

.p-inputgroup > .p-component,
.p-inputgroup > .p-inputwrapper > .p-inputtext,
.p-inputgroup > .p-floatlabel > .p-component {
    border-radius: 0;
    margin: 0;
}

.p-inputgroup > .p-component + p-inputgroup-addon,
.p-inputgroup > .p-inputwrapper > .p-inputtext + p-inputgroup-addon,
.p-inputgroup > .p-floatlabel > .p-component + p-inputgroup-addon {
    border-left: 0 none;
}

.p-inputgroup > .p-component:focus,
.p-inputgroup > .p-inputwrapper > .p-inputtext:focus,
.p-inputgroup > .p-floatlabel > .p-component:focus {
    z-index: 1;
}

.p-inputgroup > .p-component:focus ~ label,
.p-inputgroup > .p-inputwrapper > .p-inputtext:focus~label,
.p-inputgroup > .p-floatlabel > .p-component:focus~label {
    z-index: 1;
}

p-inputgroup-addon:first-child,
.p-inputgroup button:first-child,
.p-inputgroup input:first-child,
.p-inputgroup > .p-inputwrapper:first-child,
.p-inputgroup > .p-inputwrapper:first-child > .p-inputtext {
    border-top-left-radius: ${dt("inputgroup.addon.border.radius")};
    border-bottom-left-radius: ${dt("inputgroup.addon.border.radius")};
}

.p-inputgroup .p-floatlabel:first-child input {
    border-top-left-radius: ${dt("inputgroup.addon.border.radius")};
    border-bottom-left-radius: ${dt("inputgroup.addon.border.radius")};
}

p-inputgroup-addon:last-child,
.p-inputgroup button:last-child,
.p-inputgroup input:last-child,
.p-inputgroup > .p-inputwrapper:last-child,
.p-inputgroup > .p-inputwrapper:last-child > .p-inputtext {
    border-top-right-radius: ${dt("inputgroup.addon.border.radius")};
    border-bottom-right-radius: ${dt("inputgroup.addon.border.radius")};
}

.p-inputgroup .p-floatlabel:last-child input {
    border-top-right-radius: ${dt("inputgroup.addon.border.radius")};
    border-bottom-right-radius: ${dt("inputgroup.addon.border.radius")};
}

.p-inputgroup-fluid .p-button {
    width: auto;
}

.p-inputgroup-fluid .p-button.p-button-icon-only {
    width: 2.5rem;
}
`;
var classes = {
  root: ({
    props
  }) => ["p-inputgroup", {
    "p-inputgroup-fluid": props.fluid
  }]
};
var InputGroupStyle = class _InputGroupStyle extends BaseStyle {
  name = "inputgroup";
  theme = theme;
  classes = classes;
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵInputGroupStyle_BaseFactory;
    return function InputGroupStyle_Factory(__ngFactoryType__) {
      return (ɵInputGroupStyle_BaseFactory || (ɵInputGroupStyle_BaseFactory = ɵɵgetInheritedFactory(_InputGroupStyle)))(__ngFactoryType__ || _InputGroupStyle);
    };
  })();
  static ɵprov = ɵɵdefineInjectable({
    token: _InputGroupStyle,
    factory: _InputGroupStyle.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputGroupStyle, [{
    type: Injectable
  }], null, null);
})();
var InputGroupClasses;
(function(InputGroupClasses2) {
  InputGroupClasses2["root"] = "p-inputgroup";
})(InputGroupClasses || (InputGroupClasses = {}));
var InputGroup = class _InputGroup extends BaseComponent {
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
  _componentStyle = inject(InputGroupStyle);
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵInputGroup_BaseFactory;
    return function InputGroup_Factory(__ngFactoryType__) {
      return (ɵInputGroup_BaseFactory || (ɵInputGroup_BaseFactory = ɵɵgetInheritedFactory(_InputGroup)))(__ngFactoryType__ || _InputGroup);
    };
  })();
  static ɵcmp = ɵɵdefineComponent({
    type: _InputGroup,
    selectors: [["p-inputgroup"], ["p-inputGroup"]],
    hostAttrs: [1, "p-inputgroup"],
    hostVars: 5,
    hostBindings: function InputGroup_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵattribute("data-pc-name", ctx.inputgroup);
        ɵɵstyleMap(ctx.style);
        ɵɵclassMap(ctx.styleClass);
      }
    },
    inputs: {
      style: "style",
      styleClass: "styleClass"
    },
    features: [ɵɵProvidersFeature([InputGroupStyle]), ɵɵInheritDefinitionFeature],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function InputGroup_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputGroup, [{
    type: Component,
    args: [{
      selector: "p-inputgroup, p-inputGroup",
      template: ` <ng-content></ng-content> `,
      providers: [InputGroupStyle],
      host: {
        class: "p-inputgroup",
        "[attr.data-pc-name]": "inputgroup",
        "[class]": "styleClass",
        "[style]": "style"
      }
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
var InputGroupModule = class _InputGroupModule {
  static ɵfac = function InputGroupModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InputGroupModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _InputGroupModule,
    declarations: [InputGroup],
    imports: [CommonModule],
    exports: [InputGroup, SharedModule]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [CommonModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputGroupModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      exports: [InputGroup, SharedModule],
      declarations: [InputGroup]
    }]
  }], null, null);
})();
export {
  InputGroup,
  InputGroupModule
};
//# sourceMappingURL=primeng_inputgroup.js.map
