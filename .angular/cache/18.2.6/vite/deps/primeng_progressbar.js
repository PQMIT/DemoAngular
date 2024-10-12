import {
  BaseComponent
} from "./chunk-5UZ25CIA.js";
import {
  BaseStyle,
  PrimeTemplate
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
  ContentChildren,
  Injectable,
  Input,
  NgModule,
  ViewEncapsulation$1,
  booleanAttribute,
  inject,
  numberAttribute,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵInputTransformsFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetInheritedFactory,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate2
} from "./chunk-Q4V3VSNF.js";
import "./chunk-XPU7EA6D.js";
import "./chunk-QN5HDKTT.js";
import "./chunk-MHK6ZZQX.js";
import "./chunk-WDMUDEB6.js";

// node_modules/primeng/fesm2022/primeng-progressbar.mjs
var _c0 = (a0, a1) => ({
  "p-progressbar p-component": true,
  "p-progressbar-determinate": a0,
  "p-progressbar-indeterminate": a1
});
var _c1 = (a0) => ({
  $implicit: a0
});
function ProgressBar_div_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵstyleProp("display", ctx_r0.value != null && ctx_r0.value !== 0 ? "flex" : "none");
    ɵɵattribute("data-pc-section", "label");
    ɵɵadvance();
    ɵɵtextInterpolate2(" ", ctx_r0.value, "", ctx_r0.unit, " ");
  }
}
function ProgressBar_div_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function ProgressBar_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 3)(1, "div", 4);
    ɵɵtemplate(2, ProgressBar_div_1_div_2_Template, 2, 5, "div", 5)(3, ProgressBar_div_1_ng_container_3_Template, 1, 0, "ng-container", 6);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassMap(ctx_r0.valueStyleClass);
    ɵɵstyleProp("width", ctx_r0.value + "%")("background", ctx_r0.color);
    ɵɵproperty("ngClass", "p-progressbar-value p-progressbar-value-animate");
    ɵɵattribute("data-pc-section", "value");
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r0.showValue && !ctx_r0.contentTemplate);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.contentTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(11, _c1, ctx_r0.value));
  }
}
function ProgressBar_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 7);
    ɵɵelement(1, "div", 8);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassMap(ctx_r0.valueStyleClass);
    ɵɵproperty("ngClass", "p-progressbar-indeterminate-container");
    ɵɵattribute("data-pc-section", "container");
    ɵɵadvance();
    ɵɵstyleProp("background", ctx_r0.color);
    ɵɵattribute("data-pc-section", "value");
  }
}
var theme = ({
  dt
}) => `
.p-progressbar {
    position: relative;
    overflow: hidden;
    height: ${dt("progressbar.height")};
    background: ${dt("progressbar.background")};
    border-radius: ${dt("progressbar.border.radius")};
}

.p-progressbar-value {
    margin: 0;
    background: ${dt("progressbar.value.background")};
}

.p-progressbar-label {
    color: ${dt("progressbar.label.color")};
    font-size: ${dt("progressbar.label.font.size")};
    font-weight: ${dt("progressbar.label.font.weight")};
}

.p-progressbar-determinate .p-progressbar-value {
    height: 100%;
    width: 0%;
    position: absolute;
    display: none;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    transition: width 1s ease-in-out;
}

.p-progressbar-determinate .p-progressbar-label {
    display: inline-flex;
}

.p-progressbar-indeterminate .p-progressbar-value::before {
    content: "";
    position: absolute;
    background: inherit;
    top: 0;
    left: 0;
    bottom: 0;
    will-change: left, right;
    animation: p-progressbar-indeterminate-anim 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
}

.p-progressbar-indeterminate .p-progressbar-value::after {
    content: "";
    position: absolute;
    background: inherit;
    top: 0;
    left: 0;
    bottom: 0;
    will-change: left, right;
    animation: p-progressbar-indeterminate-anim-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
    animation-delay: 1.15s;
}

@-webkit-keyframes p-progressbar-indeterminate-anim {
    0% {
        left: -35%;
        right: 100%;
    }
    60% {
        left: 100%;
        right: -90%;
    }
    100% {
        left: 100%;
        right: -90%;
    }
}
@keyframes p-progressbar-indeterminate-anim {
    0% {
        left: -35%;
        right: 100%;
    }
    60% {
        left: 100%;
        right: -90%;
    }
    100% {
        left: 100%;
        right: -90%;
    }
}
@-webkit-keyframes p-progressbar-indeterminate-anim-short {
    0% {
        left: -200%;
        right: 100%;
    }
    60% {
        left: 107%;
        right: -8%;
    }
    100% {
        left: 107%;
        right: -8%;
    }
}
@keyframes p-progressbar-indeterminate-anim-short {
    0% {
        left: -200%;
        right: 100%;
    }
    60% {
        left: 107%;
        right: -8%;
    }
    100% {
        left: 107%;
        right: -8%;
    }
}
`;
var classes = {
  root: ({
    instance
  }) => ["p-progressbar p-component", {
    "p-progressbar-determinate": instance.determinate,
    "p-progressbar-indeterminate": instance.indeterminate
  }],
  value: "p-progressbar-value",
  label: "p-progressbar-label"
};
var ProgressBarStyle = class _ProgressBarStyle extends BaseStyle {
  name = "progressbar";
  theme = theme;
  classes = classes;
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵProgressBarStyle_BaseFactory;
    return function ProgressBarStyle_Factory(__ngFactoryType__) {
      return (ɵProgressBarStyle_BaseFactory || (ɵProgressBarStyle_BaseFactory = ɵɵgetInheritedFactory(_ProgressBarStyle)))(__ngFactoryType__ || _ProgressBarStyle);
    };
  })();
  static ɵprov = ɵɵdefineInjectable({
    token: _ProgressBarStyle,
    factory: _ProgressBarStyle.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProgressBarStyle, [{
    type: Injectable
  }], null, null);
})();
var ProgressBarClasses;
(function(ProgressBarClasses2) {
  ProgressBarClasses2["root"] = "p-progressbar";
  ProgressBarClasses2["value"] = "p-progressbar-value";
  ProgressBarClasses2["label"] = "p-progressbar-label";
})(ProgressBarClasses || (ProgressBarClasses = {}));
var ProgressBar = class _ProgressBar extends BaseComponent {
  /**
   * Current value of the progress.
   * @group Props
   */
  value;
  /**
   * Whether to display the progress bar value.
   * @group Props
   */
  showValue = true;
  /**
   * Style class of the element.
   * @group Props
   */
  styleClass;
  /**
   * Style class of the value element.
   * @group Props
   */
  valueStyleClass;
  /**
   * Inline style of the element.
   * @group Props
   */
  style;
  /**
   * Unit sign appended to the value.
   * @group Props
   */
  unit = "%";
  /**
   * Defines the mode of the progress
   * @group Props
   */
  mode = "determinate";
  /**
   * Color for the background of the progress.
   * @group Props
   */
  color;
  templates;
  contentTemplate;
  _componentStyle = inject(ProgressBarStyle);
  ngAfterContentInit() {
    this.templates?.forEach((item) => {
      switch (item.getType()) {
        case "content":
          this.contentTemplate = item.template;
          break;
        default:
          this.contentTemplate = item.template;
      }
    });
  }
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵProgressBar_BaseFactory;
    return function ProgressBar_Factory(__ngFactoryType__) {
      return (ɵProgressBar_BaseFactory || (ɵProgressBar_BaseFactory = ɵɵgetInheritedFactory(_ProgressBar)))(__ngFactoryType__ || _ProgressBar);
    };
  })();
  static ɵcmp = ɵɵdefineComponent({
    type: _ProgressBar,
    selectors: [["p-progressBar"], ["p-progressbar"]],
    contentQueries: function ProgressBar_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templates = _t);
      }
    },
    inputs: {
      value: [2, "value", "value", numberAttribute],
      showValue: [2, "showValue", "showValue", booleanAttribute],
      styleClass: "styleClass",
      valueStyleClass: "valueStyleClass",
      style: "style",
      unit: "unit",
      mode: "mode",
      color: "color"
    },
    features: [ɵɵProvidersFeature([ProgressBarStyle]), ɵɵInputTransformsFeature, ɵɵInheritDefinitionFeature],
    decls: 3,
    vars: 14,
    consts: [["role", "progressbar", 3, "ngStyle", "ngClass"], ["style", "display:flex", 3, "ngClass", "class", "width", "background", 4, "ngIf"], [3, "ngClass", "class", 4, "ngIf"], [2, "display", "flex", 3, "ngClass"], [1, "p-progressbar-label"], [3, "display", 4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "ngClass"], [1, "p-progressbar-value", "p-progressbar-value-animate"]],
    template: function ProgressBar_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵtemplate(1, ProgressBar_div_1_Template, 4, 13, "div", 1)(2, ProgressBar_div_2_Template, 2, 7, "div", 2);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵclassMap(ctx.styleClass);
        ɵɵproperty("ngStyle", ctx.style)("ngClass", ɵɵpureFunction2(11, _c0, ctx.mode === "determinate", ctx.mode === "indeterminate"));
        ɵɵattribute("aria-valuemin", 0)("aria-valuenow", ctx.value)("aria-valuemax", 100)("data-pc-name", "progressbar")("data-pc-section", "root");
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.mode === "determinate");
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.mode === "indeterminate");
      }
    },
    dependencies: [NgClass, NgIf, NgTemplateOutlet, NgStyle],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProgressBar, [{
    type: Component,
    args: [{
      selector: "p-progressBar, p-progressbar",
      template: `
        <div
            role="progressbar"
            [class]="styleClass"
            [ngStyle]="style"
            [attr.aria-valuemin]="0"
            [attr.aria-valuenow]="value"
            [attr.aria-valuemax]="100"
            [attr.data-pc-name]="'progressbar'"
            [attr.data-pc-section]="'root'"
            [ngClass]="{
                'p-progressbar p-component': true,
                'p-progressbar-determinate': mode === 'determinate',
                'p-progressbar-indeterminate': mode === 'indeterminate',
            }"
        >
            <div
                *ngIf="mode === 'determinate'"
                [ngClass]="'p-progressbar-value p-progressbar-value-animate'"
                [class]="valueStyleClass"
                [style.width]="value + '%'"
                style="display:flex"
                [style.background]="color"
                [attr.data-pc-section]="'value'"
            >
                <div class="p-progressbar-label">
                    <div
                        *ngIf="showValue && !contentTemplate"
                        [style.display]="value != null && value !== 0 ? 'flex' : 'none'"
                        [attr.data-pc-section]="'label'"
                    >
                        {{ value }}{{ unit }}
                    </div>
                    <ng-container *ngTemplateOutlet="contentTemplate; context: { $implicit: value }"></ng-container>
                </div>
            </div>
            <div
                *ngIf="mode === 'indeterminate'"
                [ngClass]="'p-progressbar-indeterminate-container'"
                [class]="valueStyleClass"
                [attr.data-pc-section]="'container'"
            >
                <div
                    class="p-progressbar-value p-progressbar-value-animate"
                    [style.background]="color"
                    [attr.data-pc-section]="'value'"
                ></div>
            </div>
        </div>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      providers: [ProgressBarStyle]
    }]
  }], null, {
    value: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    showValue: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    styleClass: [{
      type: Input
    }],
    valueStyleClass: [{
      type: Input
    }],
    style: [{
      type: Input
    }],
    unit: [{
      type: Input
    }],
    mode: [{
      type: Input
    }],
    color: [{
      type: Input
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var ProgressBarModule = class _ProgressBarModule {
  static ɵfac = function ProgressBarModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProgressBarModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _ProgressBarModule,
    declarations: [ProgressBar],
    imports: [CommonModule],
    exports: [ProgressBar]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [CommonModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProgressBarModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      exports: [ProgressBar],
      declarations: [ProgressBar]
    }]
  }], null, null);
})();
export {
  ProgressBar,
  ProgressBarModule
};
//# sourceMappingURL=primeng_progressbar.js.map
