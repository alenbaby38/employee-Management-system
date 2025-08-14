import {
  DashboardLayout,
  PaneProperties,
  Panel,
  Splitter,
  Timeline,
  TimelineAlign,
  TimelineItem,
  TimelineOrientation
} from "./chunk-6WKFZVAN.js";
import {
  ArrayBase,
  ComplexBase,
  ComponentBase,
  ComponentMixins,
  Template,
  setValue
} from "./chunk-CDRQPQ4F.js";
import "./chunk-J6KMUI6T.js";
import {
  CommonModule
} from "./chunk-PDYOBC5X.js";
import "./chunk-JL63MSYC.js";
import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ContentChildren,
  Directive,
  ElementRef,
  Injector,
  NgModule,
  Renderer2,
  ViewContainerRef,
  __decorate,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵloadQuery,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵqueryRefresh
} from "./chunk-UOGKAELO.js";
import "./chunk-WDMUDEB6.js";

// node_modules/@syncfusion/ej2-angular-layouts/fesm2020/syncfusion-ej2-angular-layouts.mjs
var _c0 = ["content"];
var _c1 = [[["div"]]];
var _c2 = ["div"];
var _c3 = ["header"];
var _c4 = ["template"];
var _c5 = ["oppositeContent"];
var input$2 = ["collapsed", "collapsible", "content", "cssClass", "max", "min", "resizable", "size"];
var outputs$5 = [];
var PaneDirective = class extends ComplexBase {
  constructor(viewContainerRef) {
    super();
    this.viewContainerRef = viewContainerRef;
    setValue("currentInstance", this, this.viewContainerRef);
    this.registerEvents(outputs$5);
    this.directivePropList = input$2;
  }
};
PaneDirective.ɵfac = function PaneDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || PaneDirective)(ɵɵdirectiveInject(ViewContainerRef));
};
PaneDirective.ɵdir = ɵɵdefineDirective({
  type: PaneDirective,
  selectors: [["e-pane"]],
  contentQueries: function PaneDirective_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, _c0, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.content = _t.first);
    }
  },
  inputs: {
    collapsed: "collapsed",
    collapsible: "collapsible",
    content: "content",
    cssClass: "cssClass",
    max: "max",
    min: "min",
    resizable: "resizable",
    size: "size"
  },
  standalone: false,
  features: [ɵɵInheritDefinitionFeature]
});
__decorate([Template()], PaneDirective.prototype, "content", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PaneDirective, [{
    type: Directive,
    args: [{
      selector: "e-panes>e-pane",
      inputs: input$2,
      outputs: outputs$5,
      queries: {}
    }]
  }], function() {
    return [{
      type: ViewContainerRef
    }];
  }, {
    content: [{
      type: ContentChild,
      args: ["content"]
    }]
  });
})();
var PanesDirective = class extends ArrayBase {
  constructor() {
    super("panesettings");
  }
};
PanesDirective.ɵfac = function PanesDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || PanesDirective)();
};
PanesDirective.ɵdir = ɵɵdefineDirective({
  type: PanesDirective,
  selectors: [["e-panes"]],
  contentQueries: function PanesDirective_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, PaneDirective, 4);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.children = _t);
    }
  },
  standalone: false,
  features: [ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PanesDirective, [{
    type: Directive,
    args: [{
      selector: "ejs-splitter>e-panes",
      queries: {
        children: new ContentChildren(PaneDirective)
      }
    }]
  }], function() {
    return [];
  }, null);
})();
var inputs$2 = ["cssClass", "enableHtmlSanitizer", "enablePersistence", "enableReversePanes", "enableRtl", "enabled", "height", "locale", "orientation", "paneSettings", "separatorSize", "width"];
var outputs$4 = ["beforeCollapse", "beforeExpand", "beforeSanitizeHtml", "collapsed", "created", "expanded", "resizeStart", "resizeStop", "resizing"];
var twoWays$2 = [""];
var SplitterComponent = class SplitterComponent2 extends Splitter {
  constructor(ngEle, srenderer, viewContainerRef, injector) {
    super();
    this.ngEle = ngEle;
    this.srenderer = srenderer;
    this.viewContainerRef = viewContainerRef;
    this.injector = injector;
    this.tags = ["paneSettings"];
    this.element = this.ngEle.nativeElement;
    this.injectedModules = this.injectedModules || [];
    this.registerEvents(outputs$4);
    this.addTwoWay.call(this, twoWays$2);
    setValue("currentInstance", this, this.viewContainerRef);
    this.containerContext = new ComponentBase();
  }
  ngOnInit() {
    this.containerContext.ngOnInit(this);
  }
  ngAfterViewInit() {
    this.containerContext.ngAfterViewInit(this);
  }
  ngOnDestroy() {
    this.containerContext.ngOnDestroy(this);
  }
  ngAfterContentChecked() {
    this.tagObjects[0].instance = this.childPaneSettings;
    this.containerContext.ngAfterContentChecked(this);
  }
};
SplitterComponent.ɵfac = function SplitterComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || SplitterComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(Injector));
};
SplitterComponent.ɵcmp = ɵɵdefineComponent({
  type: SplitterComponent,
  selectors: [["ejs-splitter"]],
  contentQueries: function SplitterComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, PanesDirective, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.childPaneSettings = _t.first);
    }
  },
  inputs: {
    cssClass: "cssClass",
    enableHtmlSanitizer: "enableHtmlSanitizer",
    enablePersistence: "enablePersistence",
    enableReversePanes: "enableReversePanes",
    enableRtl: "enableRtl",
    enabled: "enabled",
    height: "height",
    locale: "locale",
    orientation: "orientation",
    paneSettings: "paneSettings",
    separatorSize: "separatorSize",
    width: "width"
  },
  outputs: {
    beforeCollapse: "beforeCollapse",
    beforeExpand: "beforeExpand",
    beforeSanitizeHtml: "beforeSanitizeHtml",
    collapsed: "collapsed",
    created: "created",
    expanded: "expanded",
    resizeStart: "resizeStart",
    resizeStop: "resizeStop",
    resizing: "resizing"
  },
  standalone: false,
  features: [ɵɵInheritDefinitionFeature],
  ngContentSelectors: _c2,
  decls: 1,
  vars: 0,
  template: function SplitterComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef(_c1);
      ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
SplitterComponent = __decorate([ComponentMixins([ComponentBase])], SplitterComponent);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SplitterComponent, [{
    type: Component,
    args: [{
      selector: "ejs-splitter",
      inputs: inputs$2,
      outputs: outputs$4,
      template: `<ng-content select='div'></ng-content>`,
      changeDetection: ChangeDetectionStrategy.OnPush,
      queries: {
        childPaneSettings: new ContentChild(PanesDirective)
      }
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: Renderer2
    }, {
      type: ViewContainerRef
    }, {
      type: Injector
    }];
  }, null);
})();
var SplitterModule = class {
};
SplitterModule.ɵfac = function SplitterModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || SplitterModule)();
};
SplitterModule.ɵmod = ɵɵdefineNgModule({
  type: SplitterModule,
  declarations: [SplitterComponent, PaneDirective, PanesDirective],
  imports: [CommonModule],
  exports: [SplitterComponent, PaneDirective, PanesDirective]
});
SplitterModule.ɵinj = ɵɵdefineInjector({
  imports: [[CommonModule]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SplitterModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      declarations: [SplitterComponent, PaneDirective, PanesDirective],
      exports: [SplitterComponent, PaneDirective, PanesDirective]
    }]
  }], null, null);
})();
var SplitterAllModule = class {
};
SplitterAllModule.ɵfac = function SplitterAllModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || SplitterAllModule)();
};
SplitterAllModule.ɵmod = ɵɵdefineNgModule({
  type: SplitterAllModule,
  imports: [CommonModule, SplitterModule],
  exports: [SplitterModule]
});
SplitterAllModule.ɵinj = ɵɵdefineInjector({
  providers: [],
  imports: [[CommonModule, SplitterModule], SplitterModule]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SplitterAllModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, SplitterModule],
      exports: [SplitterModule],
      providers: []
    }]
  }], null, null);
})();
var input$1 = ["col", "content", "cssClass", "enabled", "header", "id", "maxSizeX", "maxSizeY", "minSizeX", "minSizeY", "row", "sizeX", "sizeY", "zIndex"];
var outputs$3 = [];
var PanelDirective = class extends ComplexBase {
  constructor(viewContainerRef) {
    super();
    this.viewContainerRef = viewContainerRef;
    setValue("currentInstance", this, this.viewContainerRef);
    this.registerEvents(outputs$3);
    this.directivePropList = input$1;
  }
};
PanelDirective.ɵfac = function PanelDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || PanelDirective)(ɵɵdirectiveInject(ViewContainerRef));
};
PanelDirective.ɵdir = ɵɵdefineDirective({
  type: PanelDirective,
  selectors: [["e-panel"]],
  contentQueries: function PanelDirective_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, _c3, 5);
      ɵɵcontentQuery(dirIndex, _c0, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.header = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.content = _t.first);
    }
  },
  inputs: {
    col: "col",
    content: "content",
    cssClass: "cssClass",
    enabled: "enabled",
    header: "header",
    id: "id",
    maxSizeX: "maxSizeX",
    maxSizeY: "maxSizeY",
    minSizeX: "minSizeX",
    minSizeY: "minSizeY",
    row: "row",
    sizeX: "sizeX",
    sizeY: "sizeY",
    zIndex: "zIndex"
  },
  standalone: false,
  features: [ɵɵInheritDefinitionFeature]
});
__decorate([Template()], PanelDirective.prototype, "header", void 0);
__decorate([Template()], PanelDirective.prototype, "content", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PanelDirective, [{
    type: Directive,
    args: [{
      selector: "e-panels>e-panel",
      inputs: input$1,
      outputs: outputs$3,
      queries: {}
    }]
  }], function() {
    return [{
      type: ViewContainerRef
    }];
  }, {
    header: [{
      type: ContentChild,
      args: ["header"]
    }],
    content: [{
      type: ContentChild,
      args: ["content"]
    }]
  });
})();
var PanelsDirective = class extends ArrayBase {
  constructor() {
    super("panels");
  }
};
PanelsDirective.ɵfac = function PanelsDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || PanelsDirective)();
};
PanelsDirective.ɵdir = ɵɵdefineDirective({
  type: PanelsDirective,
  selectors: [["e-panels"]],
  contentQueries: function PanelsDirective_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, PanelDirective, 4);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.children = _t);
    }
  },
  standalone: false,
  features: [ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PanelsDirective, [{
    type: Directive,
    args: [{
      selector: "ejs-dashboardlayout>e-panels",
      queries: {
        children: new ContentChildren(PanelDirective)
      }
    }]
  }], function() {
    return [];
  }, null);
})();
var inputs$1 = ["allowDragging", "allowFloating", "allowPushing", "allowResizing", "cellAspectRatio", "cellSpacing", "columns", "draggableHandle", "enableHtmlSanitizer", "enablePersistence", "enableRtl", "locale", "mediaQuery", "panels", "resizableHandles", "showGridLines"];
var outputs$2 = ["change", "created", "destroyed", "drag", "dragStart", "dragStop", "resize", "resizeStart", "resizeStop"];
var twoWays$1 = [""];
var DashboardLayoutComponent = class DashboardLayoutComponent2 extends DashboardLayout {
  constructor(ngEle, srenderer, viewContainerRef, injector) {
    super();
    this.ngEle = ngEle;
    this.srenderer = srenderer;
    this.viewContainerRef = viewContainerRef;
    this.injector = injector;
    this.tags = ["panels"];
    this.element = this.ngEle.nativeElement;
    this.injectedModules = this.injectedModules || [];
    this.registerEvents(outputs$2);
    this.addTwoWay.call(this, twoWays$1);
    setValue("currentInstance", this, this.viewContainerRef);
    this.containerContext = new ComponentBase();
  }
  ngOnInit() {
    this.containerContext.ngOnInit(this);
  }
  ngAfterViewInit() {
    this.containerContext.ngAfterViewInit(this);
  }
  ngOnDestroy() {
    this.containerContext.ngOnDestroy(this);
  }
  ngAfterContentChecked() {
    this.tagObjects[0].instance = this.childPanels;
    this.containerContext.ngAfterContentChecked(this);
  }
};
DashboardLayoutComponent.ɵfac = function DashboardLayoutComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || DashboardLayoutComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(Injector));
};
DashboardLayoutComponent.ɵcmp = ɵɵdefineComponent({
  type: DashboardLayoutComponent,
  selectors: [["ejs-dashboardlayout"]],
  contentQueries: function DashboardLayoutComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, PanelsDirective, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.childPanels = _t.first);
    }
  },
  inputs: {
    allowDragging: "allowDragging",
    allowFloating: "allowFloating",
    allowPushing: "allowPushing",
    allowResizing: "allowResizing",
    cellAspectRatio: "cellAspectRatio",
    cellSpacing: "cellSpacing",
    columns: "columns",
    draggableHandle: "draggableHandle",
    enableHtmlSanitizer: "enableHtmlSanitizer",
    enablePersistence: "enablePersistence",
    enableRtl: "enableRtl",
    locale: "locale",
    mediaQuery: "mediaQuery",
    panels: "panels",
    resizableHandles: "resizableHandles",
    showGridLines: "showGridLines"
  },
  outputs: {
    change: "change",
    created: "created",
    destroyed: "destroyed",
    drag: "drag",
    dragStart: "dragStart",
    dragStop: "dragStop",
    resize: "resize",
    resizeStart: "resizeStart",
    resizeStop: "resizeStop"
  },
  standalone: false,
  features: [ɵɵInheritDefinitionFeature],
  ngContentSelectors: _c2,
  decls: 1,
  vars: 0,
  template: function DashboardLayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef(_c1);
      ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
DashboardLayoutComponent = __decorate([ComponentMixins([ComponentBase])], DashboardLayoutComponent);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DashboardLayoutComponent, [{
    type: Component,
    args: [{
      selector: "ejs-dashboardlayout",
      inputs: inputs$1,
      outputs: outputs$2,
      template: `<ng-content select='div'></ng-content>`,
      changeDetection: ChangeDetectionStrategy.OnPush,
      queries: {
        childPanels: new ContentChild(PanelsDirective)
      }
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: Renderer2
    }, {
      type: ViewContainerRef
    }, {
      type: Injector
    }];
  }, null);
})();
var DashboardLayoutModule = class {
};
DashboardLayoutModule.ɵfac = function DashboardLayoutModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || DashboardLayoutModule)();
};
DashboardLayoutModule.ɵmod = ɵɵdefineNgModule({
  type: DashboardLayoutModule,
  declarations: [DashboardLayoutComponent, PanelDirective, PanelsDirective],
  imports: [CommonModule],
  exports: [DashboardLayoutComponent, PanelDirective, PanelsDirective]
});
DashboardLayoutModule.ɵinj = ɵɵdefineInjector({
  imports: [[CommonModule]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DashboardLayoutModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      declarations: [DashboardLayoutComponent, PanelDirective, PanelsDirective],
      exports: [DashboardLayoutComponent, PanelDirective, PanelsDirective]
    }]
  }], null, null);
})();
var DashboardLayoutAllModule = class {
};
DashboardLayoutAllModule.ɵfac = function DashboardLayoutAllModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || DashboardLayoutAllModule)();
};
DashboardLayoutAllModule.ɵmod = ɵɵdefineNgModule({
  type: DashboardLayoutAllModule,
  imports: [CommonModule, DashboardLayoutModule],
  exports: [DashboardLayoutModule]
});
DashboardLayoutAllModule.ɵinj = ɵɵdefineInjector({
  providers: [],
  imports: [[CommonModule, DashboardLayoutModule], DashboardLayoutModule]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DashboardLayoutAllModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, DashboardLayoutModule],
      exports: [DashboardLayoutModule],
      providers: []
    }]
  }], null, null);
})();
var input = ["content", "cssClass", "disabled", "dotCss", "oppositeContent"];
var outputs$1 = [];
var ItemDirective = class extends ComplexBase {
  constructor(viewContainerRef) {
    super();
    this.viewContainerRef = viewContainerRef;
    setValue("currentInstance", this, this.viewContainerRef);
    this.registerEvents(outputs$1);
    this.directivePropList = input;
  }
};
ItemDirective.ɵfac = function ItemDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || ItemDirective)(ɵɵdirectiveInject(ViewContainerRef));
};
ItemDirective.ɵdir = ɵɵdefineDirective({
  type: ItemDirective,
  selectors: [["e-item"]],
  inputs: {
    content: "content",
    cssClass: "cssClass",
    disabled: "disabled",
    dotCss: "dotCss",
    oppositeContent: "oppositeContent"
  },
  standalone: false,
  features: [ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ItemDirective, [{
    type: Directive,
    args: [{
      selector: "ejs-timeline>e-items>e-item",
      inputs: input,
      outputs: outputs$1,
      queries: {}
    }]
  }], function() {
    return [{
      type: ViewContainerRef
    }];
  }, null);
})();
var ItemsDirective = class extends ArrayBase {
  constructor() {
    super("items");
  }
};
ItemsDirective.ɵfac = function ItemsDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || ItemsDirective)();
};
ItemsDirective.ɵdir = ɵɵdefineDirective({
  type: ItemsDirective,
  selectors: [["e-items"]],
  contentQueries: function ItemsDirective_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, ItemDirective, 4);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.children = _t);
    }
  },
  standalone: false,
  features: [ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ItemsDirective, [{
    type: Directive,
    args: [{
      selector: "ejs-timeline>e-items",
      queries: {
        children: new ContentChildren(ItemDirective)
      }
    }]
  }], function() {
    return [];
  }, null);
})();
var inputs = ["align", "cssClass", "enablePersistence", "enableRtl", "items", "locale", "orientation", "reverse", "template"];
var outputs = ["beforeItemRender", "created"];
var twoWays = [];
var TimelineComponent = class TimelineComponent2 extends Timeline {
  constructor(ngEle, srenderer, viewContainerRef, injector) {
    super();
    this.ngEle = ngEle;
    this.srenderer = srenderer;
    this.viewContainerRef = viewContainerRef;
    this.injector = injector;
    this.tags = ["items"];
    this.element = this.ngEle.nativeElement;
    this.injectedModules = this.injectedModules || [];
    this.registerEvents(outputs);
    this.addTwoWay.call(this, twoWays);
    setValue("currentInstance", this, this.viewContainerRef);
    this.containerContext = new ComponentBase();
  }
  ngOnInit() {
    this.containerContext.ngOnInit(this);
  }
  ngAfterViewInit() {
    this.containerContext.ngAfterViewInit(this);
  }
  ngOnDestroy() {
    this.containerContext.ngOnDestroy(this);
  }
  ngAfterContentChecked() {
    this.tagObjects[0].instance = this.childItems;
    this.containerContext.ngAfterContentChecked(this);
  }
};
TimelineComponent.ɵfac = function TimelineComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || TimelineComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(Injector));
};
TimelineComponent.ɵcmp = ɵɵdefineComponent({
  type: TimelineComponent,
  selectors: [["ejs-timeline"]],
  contentQueries: function TimelineComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, _c4, 5);
      ɵɵcontentQuery(dirIndex, _c0, 5);
      ɵɵcontentQuery(dirIndex, _c5, 5);
      ɵɵcontentQuery(dirIndex, ItemsDirective, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.template = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.content = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.oppositeContent = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.childItems = _t.first);
    }
  },
  inputs: {
    align: "align",
    cssClass: "cssClass",
    enablePersistence: "enablePersistence",
    enableRtl: "enableRtl",
    items: "items",
    locale: "locale",
    orientation: "orientation",
    reverse: "reverse",
    template: "template"
  },
  outputs: {
    beforeItemRender: "beforeItemRender",
    created: "created"
  },
  standalone: false,
  features: [ɵɵInheritDefinitionFeature],
  ngContentSelectors: _c2,
  decls: 1,
  vars: 0,
  template: function TimelineComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef(_c1);
      ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
__decorate([Template()], TimelineComponent.prototype, "template", void 0);
__decorate([Template()], TimelineComponent.prototype, "content", void 0);
__decorate([Template()], TimelineComponent.prototype, "oppositeContent", void 0);
TimelineComponent = __decorate([ComponentMixins([ComponentBase])], TimelineComponent);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TimelineComponent, [{
    type: Component,
    args: [{
      selector: "ejs-timeline",
      inputs,
      outputs,
      template: `<ng-content select='div'></ng-content>`,
      changeDetection: ChangeDetectionStrategy.OnPush,
      queries: {
        childItems: new ContentChild(ItemsDirective)
      }
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: Renderer2
    }, {
      type: ViewContainerRef
    }, {
      type: Injector
    }];
  }, {
    template: [{
      type: ContentChild,
      args: ["template"]
    }],
    content: [{
      type: ContentChild,
      args: ["content"]
    }],
    oppositeContent: [{
      type: ContentChild,
      args: ["oppositeContent"]
    }]
  });
})();
var TimelineModule = class {
};
TimelineModule.ɵfac = function TimelineModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || TimelineModule)();
};
TimelineModule.ɵmod = ɵɵdefineNgModule({
  type: TimelineModule,
  declarations: [TimelineComponent, ItemDirective, ItemsDirective],
  imports: [CommonModule],
  exports: [TimelineComponent, ItemDirective, ItemsDirective]
});
TimelineModule.ɵinj = ɵɵdefineInjector({
  imports: [[CommonModule]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TimelineModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      declarations: [TimelineComponent, ItemDirective, ItemsDirective],
      exports: [TimelineComponent, ItemDirective, ItemsDirective]
    }]
  }], null, null);
})();
var TimelineAllModule = class {
};
TimelineAllModule.ɵfac = function TimelineAllModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || TimelineAllModule)();
};
TimelineAllModule.ɵmod = ɵɵdefineNgModule({
  type: TimelineAllModule,
  imports: [CommonModule, TimelineModule],
  exports: [TimelineModule]
});
TimelineAllModule.ɵinj = ɵɵdefineInjector({
  providers: [],
  imports: [[CommonModule, TimelineModule], TimelineModule]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TimelineAllModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, TimelineModule],
      exports: [TimelineModule],
      providers: []
    }]
  }], null, null);
})();
export {
  DashboardLayout,
  DashboardLayoutAllModule,
  DashboardLayoutComponent,
  DashboardLayoutModule,
  ItemDirective,
  ItemsDirective,
  PaneDirective,
  PaneProperties,
  Panel,
  PanelDirective,
  PanelsDirective,
  PanesDirective,
  Splitter,
  SplitterAllModule,
  SplitterComponent,
  SplitterModule,
  Timeline,
  TimelineAlign,
  TimelineAllModule,
  TimelineComponent,
  TimelineItem,
  TimelineModule,
  TimelineOrientation
};
//# sourceMappingURL=@syncfusion_ej2-angular-layouts.js.map
