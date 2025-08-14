import {
  Aggregate,
  AutoCompleteEditCell,
  BatchEdit,
  BatchEditRender,
  BooleanEditCell,
  BooleanFilterUI,
  Cell,
  CellRenderer,
  CellRendererFactory,
  CellType,
  CheckBoxFilter,
  CheckBoxFilterBase,
  Clipboard,
  Column,
  ColumnChooser,
  ColumnMenu,
  ComboboxEditCell,
  CommandColumn,
  CommandColumnModel,
  CommandColumnRenderer,
  ContentRender,
  ContextMenu,
  Data,
  DateFilterUI,
  DatePickerEditCell,
  DefaultEditCell,
  DetailRow,
  DialogEdit,
  DialogEditRender,
  DropDownEditCell,
  Edit,
  EditCellBase,
  EditRender,
  EditSettings,
  ExcelExport,
  ExcelFilter,
  ExcelFilterBase,
  ExportHelper,
  ExportValueFormatter,
  ExternalMessage,
  Filter,
  FilterCellRenderer,
  FilterSettings,
  FlMenuOptrUI,
  ForeignKey,
  Freeze,
  Global,
  Grid,
  GridColumn,
  Group,
  GroupCaptionCellRenderer,
  GroupCaptionEmptyCellRenderer,
  GroupLazyLoadRenderer,
  GroupModelGenerator,
  GroupSettings,
  HeaderCellRenderer,
  HeaderRender,
  IndentCellRenderer,
  InfiniteScroll,
  InfiniteScrollSettings,
  InlineEdit,
  InlineEditRender,
  InterSectionObserver,
  LazyLoadGroup,
  LoadingIndicator,
  Logger,
  MaskedTextBoxCellEdit,
  MultiSelectEditCell,
  NormalEdit,
  NumberFilterUI,
  NumericContainer,
  NumericEditCell,
  Page,
  Pager,
  PagerDropDown,
  PagerMessage,
  PdfExport,
  Predicate,
  Print,
  Render,
  RenderType,
  Reorder,
  Resize,
  ResizeSettings,
  ResponsiveDialogAction,
  ResponsiveDialogRenderer,
  ResponsiveToolbarAction,
  Row,
  RowDD,
  RowDropSettings,
  RowModelGenerator,
  RowRenderer,
  Scroll,
  Search,
  SearchSettings,
  Selection,
  SelectionSettings,
  ServiceLocator,
  Sort,
  SortDescriptor,
  SortSettings,
  StackedColumn,
  StackedHeaderCellRenderer,
  StringFilterUI,
  TextWrapSettings,
  TimePickerEditCell,
  ToggleEditCell,
  Toolbar,
  ToolbarItem,
  ValueFormatter,
  VirtualContentRenderer,
  VirtualElementHandler,
  VirtualHeaderRenderer,
  VirtualRowModelGenerator,
  VirtualScroll,
  accessPredicate,
  actionBegin,
  actionComplete,
  actionFailure,
  addBegin,
  addBiggerDialog,
  addComplete,
  addDeleteAction,
  addFixedColumnBorder,
  addRemoveActiveClasses,
  addRemoveEventListener,
  addStickyColumnPosition,
  addedRecords,
  addedRow,
  afterContentRender,
  afterFilterColumnMenuClose,
  appendChildren,
  appendInfiniteContent,
  applyBiggerTheme,
  applyStickyLeftRightPosition,
  ariaColIndex,
  ariaRowIndex,
  autoCol,
  batchAdd,
  batchCancel,
  batchCnfrmDlgCancel,
  batchDelete,
  batchEditFormRendered,
  batchForm,
  beforeAutoFill,
  beforeBatchAdd,
  beforeBatchCancel,
  beforeBatchDelete,
  beforeBatchSave,
  beforeCellFocused,
  beforeCheckboxRenderer,
  beforeCheckboxRendererQuery,
  beforeCheckboxfilterRenderer,
  beforeCopy,
  beforeCustomFilterOpen,
  beforeDataBound,
  beforeDetailTemplateDetach,
  beforeExcelExport,
  beforeFltrcMenuOpen,
  beforeFragAppend,
  beforeOpen,
  beforeOpenAdaptiveDialog,
  beforeOpenColumnChooser,
  beforePaste,
  beforePdfExport,
  beforePrint,
  beforeRefreshOnDataChange,
  beforeStartEdit,
  beginEdit,
  bulkSave,
  cBoxFltrBegin,
  cBoxFltrComplete,
  calculateAggregate,
  cancelBegin,
  capitalizeFirstLetter,
  captionActionComplete,
  cellDeselected,
  cellDeselecting,
  cellEdit,
  cellFocused,
  cellSave,
  cellSaved,
  cellSelected,
  cellSelecting,
  cellSelectionBegin,
  cellSelectionComplete,
  change,
  changedRecords,
  checkBoxChange,
  checkDepth,
  checkIsVirtual,
  checkScrollReset,
  clearReactVueTemplates,
  click,
  closeBatch,
  closeEdit,
  closeFilterDialog,
  closeInline,
  colGroup,
  colGroupRefresh,
  columnChooserCancelBtnClick,
  columnChooserClose,
  columnChooserOpened,
  columnChooserSearch,
  columnChooserUpdate,
  columnDataStateChange,
  columnDeselected,
  columnDeselecting,
  columnDrag,
  columnDragStart,
  columnDragStop,
  columnDrop,
  columnMenuClick,
  columnMenuOpen,
  columnPositionChanged,
  columnSelected,
  columnSelecting,
  columnSelectionBegin,
  columnSelectionComplete,
  columnVisibilityChanged,
  columnWidthChanged,
  columnsPrepared,
  commandClick,
  commandColumnDestroy,
  compareChanges,
  componentRendered,
  content,
  contentReady,
  contextMenuClick,
  contextMenuOpen,
  create,
  createCboxWithWrap,
  createEditElement,
  createVirtualValidationForm,
  created,
  crudAction,
  customFilterClose,
  dataBound,
  dataReady,
  dataSourceChanged,
  dataSourceModified,
  dataStateChange,
  dblclick,
  deleteBegin,
  deleteComplete,
  deletedRecords,
  destroy,
  destroyAutoFillElements,
  destroyChildGrid,
  destroyEditForm,
  destroyForm,
  destroyed,
  detachDetailTemplate,
  detailDataBound,
  detailIndentCellInfo,
  detailLists,
  detailStateChange,
  dialogDestroy,
  distinctStringValues,
  doesImplementInterface,
  doubleTap,
  downArrow,
  editBegin,
  editComplete,
  editNextValCell,
  editReset,
  editedRow,
  endAdd,
  endDelete,
  endEdit,
  ensureFirstRow,
  ensureLastRow,
  enter,
  enterKeyHandler,
  eventPromise,
  excelAggregateQueryCellInfo,
  excelExportComplete,
  excelHeaderQueryCellInfo,
  excelQueryCellInfo,
  expandChildGrid,
  exportDataBound,
  exportDetailDataBound,
  exportDetailTemplate,
  exportGroupCaption,
  exportRowDataBound,
  extend,
  extendObjWithFn,
  filterAfterOpen,
  filterBeforeOpen,
  filterBegin,
  filterCboxValue,
  filterChoiceRequest,
  filterCmenuSelect,
  filterComplete,
  filterDialogClose,
  filterDialogCreated,
  filterMenuClose,
  filterOpen,
  filterSearchBegin,
  findCellIndex,
  fltrPrevent,
  focus,
  foreignKeyData,
  freezeRefresh,
  freezeRender,
  frozenContent,
  frozenDirection,
  frozenHeader,
  frozenHeight,
  frozenLeft,
  frozenRight,
  generateExpandPredicates,
  generateQuery,
  getActualPropFromColl,
  getActualProperties,
  getActualRowHeight,
  getAggregateQuery,
  getCellByColAndRowIndex,
  getCellFromRow,
  getCellsByTableName,
  getCloneProperties,
  getCollapsedRowsCount,
  getColumnByForeignKeyValue,
  getColumnModelByFieldName,
  getColumnModelByUid,
  getComplexFieldID,
  getCustomDateFormat,
  getDatePredicate,
  getEditedDataIndex,
  getElementIndex,
  getExpandedState,
  getFilterBarOperator,
  getFilterMenuPostion,
  getForeignData,
  getForeignKeyData,
  getGroupKeysAndFields,
  getListHeight,
  getNumberFormat,
  getObject,
  getParentIns,
  getParsedFieldID,
  getPosition,
  getPredicates,
  getPrintGridModel,
  getPrototypesOfObj,
  getRowHeight,
  getRowIndexFromElement,
  getScrollBarWidth,
  getScrollWidth,
  getStateEventArgument,
  getTransformValues,
  getUid,
  getUpdateUsingRaf,
  getVirtualData,
  getVisiblePage,
  getZIndexCalcualtion,
  gridChkBox,
  gridContent,
  gridFooter,
  gridHeader,
  groupAggregates,
  groupBegin,
  groupCaptionRow,
  groupCaptionRowLeftRightPos,
  groupCollapse,
  groupComplete,
  groupReorderRowObject,
  headerCellInfo,
  headerContent,
  headerDrop,
  headerRefreshed,
  headerValueAccessor,
  hierarchyPrint,
  immutableBatchCancel,
  inArray,
  inBoundModelChanged,
  infiniteAppendElements,
  infiniteCrudCancel,
  infiniteEditHandler,
  infinitePageQuery,
  infiniteRemoveElements,
  infiniteScrollComplete,
  infiniteScrollHandler,
  infiniteShowHide,
  initForeignKeyColumn,
  initialCollapse,
  initialEnd,
  initialFrozenColumnIndex,
  initialLoad,
  isActionPrevent,
  isCellHaveWidth,
  isChildColumn,
  isComplexField,
  isEditable,
  isExportColumns,
  isGroupAdaptive,
  isRowEnteredInGrid,
  ispercentageWidth,
  iterateArrayOrObject,
  iterateExtend,
  keyPressed,
  lastRowCellBorderUpdated,
  lazyLoadGroupCollapse,
  lazyLoadGroupExpand,
  lazyLoadScrollHandler,
  leftRight,
  load,
  measureColumnDepth,
  menuClass,
  modelChanged,
  movableContent,
  movableHeader,
  nextCellIndex,
  onEmpty,
  onResize,
  open,
  padZero,
  pageBegin,
  pageComplete,
  pageDown,
  pageUp,
  pagerRefresh,
  parents,
  parentsUntil,
  partialRefresh,
  pdfAggregateQueryCellInfo,
  pdfExportComplete,
  pdfHeaderQueryCellInfo,
  pdfQueryCellInfo,
  performComplexDataOperation,
  prepareColumns,
  preventBatch,
  preventFrozenScrollRefresh,
  printComplete,
  printGridInit,
  pushuid,
  queryCellInfo,
  recordAdded,
  recordClick,
  recordDoubleClick,
  recursive,
  refreshAggregateCell,
  refreshAggregates,
  refreshComplete,
  refreshCustomFilterClearBtn,
  refreshCustomFilterOkBtn,
  refreshExpandandCollapse,
  refreshFilteredColsUid,
  refreshFooterRenderer,
  refreshForeignData,
  refreshFrozenColumns,
  refreshFrozenHeight,
  refreshFrozenPosition,
  refreshHandlers,
  refreshInfiniteCurrentViewData,
  refreshInfiniteEditrowindex,
  refreshInfiniteModeBlocks,
  refreshInfinitePersistSelection,
  refreshResizePosition,
  refreshSplitFrozenColumn,
  refreshVirtualBlock,
  refreshVirtualCache,
  refreshVirtualEditFormCells,
  refreshVirtualFrozenHeight,
  refreshVirtualFrozenRows,
  refreshVirtualLazyLoadCache,
  refreshVirtualMaxPage,
  registerEventHandlers,
  removeAddCboxClasses,
  removeElement,
  removeEventHandlers,
  removeInfiniteRows,
  renderResponsiveChangeAction,
  renderResponsiveCmenu,
  renderResponsiveColumnChooserDiv,
  reorderBegin,
  reorderComplete,
  resetCachedRowIndex,
  resetColandRowSpanStickyPosition,
  resetColspanGroupCaption,
  resetColumns,
  resetDialogAppend,
  resetInfiniteBlocks,
  resetRowIndex,
  resetVirtualFocus,
  resizeClassList,
  resizeStart,
  resizeStop,
  restoreFocus,
  row,
  rowCell,
  rowDataBound,
  rowDeselected,
  rowDeselecting,
  rowDrag,
  rowDragAndDrop,
  rowDragAndDropBegin,
  rowDragAndDropComplete,
  rowDragStart,
  rowDragStartHelper,
  rowDrop,
  rowModeChange,
  rowPositionChanged,
  rowSelected,
  rowSelecting,
  rowSelectionBegin,
  rowSelectionComplete,
  rowsAdded,
  rowsRemoved,
  rtlUpdated,
  saveComplete,
  scroll,
  scrollToEdit,
  searchBegin,
  searchComplete,
  selectRowOnContextOpen,
  selectVirtualRow,
  setChecked,
  setColumnIndex,
  setComplexFieldID,
  setCssInGridPopUp,
  setDisplayValue,
  setFormatter,
  setFreezeSelection,
  setFullScreenDialog,
  setGroupCache,
  setHeightToFrozenElement,
  setInfiniteCache,
  setInfiniteColFrozenHeight,
  setInfiniteFrozenHeight,
  setReorderDestinationElement,
  setRowElements,
  setStyleAndAttributes,
  setValidationRuels,
  setVirtualPageQuery,
  shiftEnter,
  shiftTab,
  showAddNewRowFocus,
  showEmptyGrid,
  sliceElements,
  sortBegin,
  sortComplete,
  stickyScrollComplete,
  summaryIterator,
  tab,
  table,
  tbody,
  templateCompiler,
  textWrapRefresh,
  toggleFilterUI,
  toogleCheckbox,
  toolbarClick,
  toolbarRefresh,
  tooltipDestroy,
  uiUpdate,
  ungroupBegin,
  ungroupComplete,
  upArrow,
  updateColumnTypeForExportColumns,
  updateData,
  updatecloneRow,
  valCustomPlacement,
  validateVirtualForm,
  valueAccessor,
  virtaulCellFocus,
  virtaulKeyHandler,
  virtualScrollAddActionBegin,
  virtualScrollEdit,
  virtualScrollEditActionBegin,
  virtualScrollEditCancel,
  virtualScrollEditSuccess,
  wrap
} from "./chunk-SOHG4NXT.js";
import "./chunk-LIV5E5HL.js";
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
  ɵɵqueryRefresh
} from "./chunk-UOGKAELO.js";
import "./chunk-WDMUDEB6.js";

// node_modules/@syncfusion/ej2-angular-grids/fesm2020/syncfusion-ej2-angular-grids.mjs
var _c0 = ["template"];
var _c1 = ["headerTemplate"];
var _c2 = ["commandsTemplate"];
var _c3 = ["filterItemTemplate"];
var _c4 = ["editTemplate"];
var _c5 = ["filterTemplate"];
var _c6 = ["footerTemplate"];
var _c7 = ["groupFooterTemplate"];
var _c8 = ["groupCaptionTemplate"];
var _c9 = ["rowTemplate"];
var _c10 = ["emptyRecordTemplate"];
var _c11 = ["detailTemplate"];
var _c12 = ["toolbarTemplate"];
var _c13 = ["pagerTemplate"];
var _c14 = ["editSettingsTemplate"];
var _c15 = ["groupSettingsCaptionTemplate"];
var _c16 = ["columnChooserSettingsHeaderTemplate"];
var _c17 = ["columnChooserSettingsTemplate"];
var _c18 = ["columnChooserSettingsFooterTemplate"];
var input$3 = ["allowEditing", "allowFiltering", "allowGrouping", "allowReordering", "allowResizing", "allowSearching", "allowSorting", "autoFit", "clipMode", "columns", "commands", "customAttributes", "dataSource", "defaultValue", "disableHtmlEncode", "displayAsCheckBox", "edit", "editTemplate", "editType", "enableGroupByFormat", "field", "filter", "filterBarTemplate", "filterTemplate", "foreignKeyField", "foreignKeyValue", "format", "formatter", "freeze", "headerTemplate", "headerText", "headerTextAlign", "headerValueAccessor", "hideAtMedia", "index", "isFrozen", "isIdentity", "isPrimaryKey", "lockColumn", "maxWidth", "minWidth", "showColumnMenu", "showInColumnChooser", "sortComparer", "template", "templateOptions", "textAlign", "type", "uid", "validationRules", "valueAccessor", "visible", "width"];
var outputs$5 = [];
var StackedColumnDirective = class extends ComplexBase {
  constructor(viewContainerRef) {
    super();
    this.viewContainerRef = viewContainerRef;
    setValue("currentInstance", this, this.viewContainerRef);
    this.registerEvents(outputs$5);
    this.directivePropList = input$3;
  }
};
StackedColumnDirective.ɵfac = function StackedColumnDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || StackedColumnDirective)(ɵɵdirectiveInject(ViewContainerRef));
};
StackedColumnDirective.ɵdir = ɵɵdefineDirective({
  type: StackedColumnDirective,
  selectors: [["e-stacked-column"]],
  contentQueries: function StackedColumnDirective_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, _c0, 5);
      ɵɵcontentQuery(dirIndex, _c1, 5);
      ɵɵcontentQuery(dirIndex, _c2, 5);
      ɵɵcontentQuery(dirIndex, _c3, 5);
      ɵɵcontentQuery(dirIndex, _c4, 5);
      ɵɵcontentQuery(dirIndex, _c5, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.template = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.headerTemplate = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.commandsTemplate = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.filter_itemTemplate = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.editTemplate = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.filterTemplate = _t.first);
    }
  },
  inputs: {
    allowEditing: "allowEditing",
    allowFiltering: "allowFiltering",
    allowGrouping: "allowGrouping",
    allowReordering: "allowReordering",
    allowResizing: "allowResizing",
    allowSearching: "allowSearching",
    allowSorting: "allowSorting",
    autoFit: "autoFit",
    clipMode: "clipMode",
    columns: "columns",
    commands: "commands",
    customAttributes: "customAttributes",
    dataSource: "dataSource",
    defaultValue: "defaultValue",
    disableHtmlEncode: "disableHtmlEncode",
    displayAsCheckBox: "displayAsCheckBox",
    edit: "edit",
    editTemplate: "editTemplate",
    editType: "editType",
    enableGroupByFormat: "enableGroupByFormat",
    field: "field",
    filter: "filter",
    filterBarTemplate: "filterBarTemplate",
    filterTemplate: "filterTemplate",
    foreignKeyField: "foreignKeyField",
    foreignKeyValue: "foreignKeyValue",
    format: "format",
    formatter: "formatter",
    freeze: "freeze",
    headerTemplate: "headerTemplate",
    headerText: "headerText",
    headerTextAlign: "headerTextAlign",
    headerValueAccessor: "headerValueAccessor",
    hideAtMedia: "hideAtMedia",
    index: "index",
    isFrozen: "isFrozen",
    isIdentity: "isIdentity",
    isPrimaryKey: "isPrimaryKey",
    lockColumn: "lockColumn",
    maxWidth: "maxWidth",
    minWidth: "minWidth",
    showColumnMenu: "showColumnMenu",
    showInColumnChooser: "showInColumnChooser",
    sortComparer: "sortComparer",
    template: "template",
    templateOptions: "templateOptions",
    textAlign: "textAlign",
    type: "type",
    uid: "uid",
    validationRules: "validationRules",
    valueAccessor: "valueAccessor",
    visible: "visible",
    width: "width"
  },
  standalone: false,
  features: [ɵɵInheritDefinitionFeature]
});
__decorate([Template()], StackedColumnDirective.prototype, "template", void 0);
__decorate([Template()], StackedColumnDirective.prototype, "headerTemplate", void 0);
__decorate([Template()], StackedColumnDirective.prototype, "commandsTemplate", void 0);
__decorate([Template()], StackedColumnDirective.prototype, "filter_itemTemplate", void 0);
__decorate([Template()], StackedColumnDirective.prototype, "editTemplate", void 0);
__decorate([Template()], StackedColumnDirective.prototype, "filterTemplate", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StackedColumnDirective, [{
    type: Directive,
    args: [{
      selector: "ejs-grid>e-columns>e-column>e-stacked-columns>e-stacked-column",
      inputs: input$3,
      outputs: outputs$5,
      queries: {}
    }]
  }], function() {
    return [{
      type: ViewContainerRef
    }];
  }, {
    template: [{
      type: ContentChild,
      args: ["template"]
    }],
    headerTemplate: [{
      type: ContentChild,
      args: ["headerTemplate"]
    }],
    commandsTemplate: [{
      type: ContentChild,
      args: ["commandsTemplate"]
    }],
    filter_itemTemplate: [{
      type: ContentChild,
      args: ["filterItemTemplate"]
    }],
    editTemplate: [{
      type: ContentChild,
      args: ["editTemplate"]
    }],
    filterTemplate: [{
      type: ContentChild,
      args: ["filterTemplate"]
    }]
  });
})();
var StackedColumnsDirective = class extends ArrayBase {
  constructor() {
    super("columns");
  }
};
StackedColumnsDirective.ɵfac = function StackedColumnsDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || StackedColumnsDirective)();
};
StackedColumnsDirective.ɵdir = ɵɵdefineDirective({
  type: StackedColumnsDirective,
  selectors: [["e-stacked-columns"]],
  contentQueries: function StackedColumnsDirective_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, StackedColumnDirective, 4);
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StackedColumnsDirective, [{
    type: Directive,
    args: [{
      selector: "ejs-grid>e-columns>e-column>e-stacked-columns",
      queries: {
        children: new ContentChildren(StackedColumnDirective)
      }
    }]
  }], function() {
    return [];
  }, null);
})();
var input$2 = ["allowEditing", "allowFiltering", "allowGrouping", "allowReordering", "allowResizing", "allowSearching", "allowSorting", "autoFit", "clipMode", "columns", "commands", "customAttributes", "dataSource", "defaultValue", "disableHtmlEncode", "displayAsCheckBox", "edit", "editTemplate", "editType", "enableGroupByFormat", "field", "filter", "filterBarTemplate", "filterTemplate", "foreignKeyField", "foreignKeyValue", "format", "formatter", "freeze", "headerTemplate", "headerText", "headerTextAlign", "headerValueAccessor", "hideAtMedia", "index", "isFrozen", "isIdentity", "isPrimaryKey", "lockColumn", "maxWidth", "minWidth", "showColumnMenu", "showInColumnChooser", "sortComparer", "template", "templateOptions", "textAlign", "type", "uid", "validationRules", "valueAccessor", "visible", "width"];
var outputs$4 = [];
var ColumnDirective = class extends ComplexBase {
  constructor(viewContainerRef) {
    super();
    this.viewContainerRef = viewContainerRef;
    this.tags = ["columns"];
    setValue("currentInstance", this, this.viewContainerRef);
    this.registerEvents(outputs$4);
    this.directivePropList = input$2;
  }
};
ColumnDirective.ɵfac = function ColumnDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || ColumnDirective)(ɵɵdirectiveInject(ViewContainerRef));
};
ColumnDirective.ɵdir = ɵɵdefineDirective({
  type: ColumnDirective,
  selectors: [["e-column"]],
  contentQueries: function ColumnDirective_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, _c0, 5);
      ɵɵcontentQuery(dirIndex, _c1, 5);
      ɵɵcontentQuery(dirIndex, _c2, 5);
      ɵɵcontentQuery(dirIndex, _c3, 5);
      ɵɵcontentQuery(dirIndex, _c4, 5);
      ɵɵcontentQuery(dirIndex, _c5, 5);
      ɵɵcontentQuery(dirIndex, StackedColumnsDirective, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.template = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.headerTemplate = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.commandsTemplate = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.filter_itemTemplate = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.editTemplate = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.filterTemplate = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.childColumns = _t.first);
    }
  },
  inputs: {
    allowEditing: "allowEditing",
    allowFiltering: "allowFiltering",
    allowGrouping: "allowGrouping",
    allowReordering: "allowReordering",
    allowResizing: "allowResizing",
    allowSearching: "allowSearching",
    allowSorting: "allowSorting",
    autoFit: "autoFit",
    clipMode: "clipMode",
    columns: "columns",
    commands: "commands",
    customAttributes: "customAttributes",
    dataSource: "dataSource",
    defaultValue: "defaultValue",
    disableHtmlEncode: "disableHtmlEncode",
    displayAsCheckBox: "displayAsCheckBox",
    edit: "edit",
    editTemplate: "editTemplate",
    editType: "editType",
    enableGroupByFormat: "enableGroupByFormat",
    field: "field",
    filter: "filter",
    filterBarTemplate: "filterBarTemplate",
    filterTemplate: "filterTemplate",
    foreignKeyField: "foreignKeyField",
    foreignKeyValue: "foreignKeyValue",
    format: "format",
    formatter: "formatter",
    freeze: "freeze",
    headerTemplate: "headerTemplate",
    headerText: "headerText",
    headerTextAlign: "headerTextAlign",
    headerValueAccessor: "headerValueAccessor",
    hideAtMedia: "hideAtMedia",
    index: "index",
    isFrozen: "isFrozen",
    isIdentity: "isIdentity",
    isPrimaryKey: "isPrimaryKey",
    lockColumn: "lockColumn",
    maxWidth: "maxWidth",
    minWidth: "minWidth",
    showColumnMenu: "showColumnMenu",
    showInColumnChooser: "showInColumnChooser",
    sortComparer: "sortComparer",
    template: "template",
    templateOptions: "templateOptions",
    textAlign: "textAlign",
    type: "type",
    uid: "uid",
    validationRules: "validationRules",
    valueAccessor: "valueAccessor",
    visible: "visible",
    width: "width"
  },
  standalone: false,
  features: [ɵɵInheritDefinitionFeature]
});
__decorate([Template()], ColumnDirective.prototype, "template", void 0);
__decorate([Template()], ColumnDirective.prototype, "headerTemplate", void 0);
__decorate([Template()], ColumnDirective.prototype, "commandsTemplate", void 0);
__decorate([Template()], ColumnDirective.prototype, "filter_itemTemplate", void 0);
__decorate([Template()], ColumnDirective.prototype, "editTemplate", void 0);
__decorate([Template()], ColumnDirective.prototype, "filterTemplate", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ColumnDirective, [{
    type: Directive,
    args: [{
      selector: "ejs-grid>e-columns>e-column",
      inputs: input$2,
      outputs: outputs$4,
      queries: {
        childColumns: new ContentChild(StackedColumnsDirective)
      }
    }]
  }], function() {
    return [{
      type: ViewContainerRef
    }];
  }, {
    template: [{
      type: ContentChild,
      args: ["template"]
    }],
    headerTemplate: [{
      type: ContentChild,
      args: ["headerTemplate"]
    }],
    commandsTemplate: [{
      type: ContentChild,
      args: ["commandsTemplate"]
    }],
    filter_itemTemplate: [{
      type: ContentChild,
      args: ["filterItemTemplate"]
    }],
    editTemplate: [{
      type: ContentChild,
      args: ["editTemplate"]
    }],
    filterTemplate: [{
      type: ContentChild,
      args: ["filterTemplate"]
    }]
  });
})();
var ColumnsDirective = class extends ArrayBase {
  constructor() {
    super("columns");
  }
};
ColumnsDirective.ɵfac = function ColumnsDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || ColumnsDirective)();
};
ColumnsDirective.ɵdir = ɵɵdefineDirective({
  type: ColumnsDirective,
  selectors: [["e-columns"]],
  contentQueries: function ColumnsDirective_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, ColumnDirective, 4);
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ColumnsDirective, [{
    type: Directive,
    args: [{
      selector: "ejs-grid>e-columns",
      queries: {
        children: new ContentChildren(ColumnDirective)
      }
    }]
  }], function() {
    return [];
  }, null);
})();
var input$1 = ["columnName", "customAggregate", "field", "footerTemplate", "format", "groupCaptionTemplate", "groupFooterTemplate", "type"];
var outputs$3 = [];
var AggregateColumnDirective = class extends ComplexBase {
  constructor(viewContainerRef) {
    super();
    this.viewContainerRef = viewContainerRef;
    setValue("currentInstance", this, this.viewContainerRef);
    this.registerEvents(outputs$3);
    this.directivePropList = input$1;
  }
};
AggregateColumnDirective.ɵfac = function AggregateColumnDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || AggregateColumnDirective)(ɵɵdirectiveInject(ViewContainerRef));
};
AggregateColumnDirective.ɵdir = ɵɵdefineDirective({
  type: AggregateColumnDirective,
  selectors: [["e-column"]],
  contentQueries: function AggregateColumnDirective_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, _c6, 5);
      ɵɵcontentQuery(dirIndex, _c7, 5);
      ɵɵcontentQuery(dirIndex, _c8, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.footerTemplate = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.groupFooterTemplate = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.groupCaptionTemplate = _t.first);
    }
  },
  inputs: {
    columnName: "columnName",
    customAggregate: "customAggregate",
    field: "field",
    footerTemplate: "footerTemplate",
    format: "format",
    groupCaptionTemplate: "groupCaptionTemplate",
    groupFooterTemplate: "groupFooterTemplate",
    type: "type"
  },
  standalone: false,
  features: [ɵɵInheritDefinitionFeature]
});
__decorate([Template()], AggregateColumnDirective.prototype, "footerTemplate", void 0);
__decorate([Template()], AggregateColumnDirective.prototype, "groupFooterTemplate", void 0);
__decorate([Template()], AggregateColumnDirective.prototype, "groupCaptionTemplate", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AggregateColumnDirective, [{
    type: Directive,
    args: [{
      selector: "ejs-grid>e-aggregates>e-aggregate>e-columns>e-column",
      inputs: input$1,
      outputs: outputs$3,
      queries: {}
    }]
  }], function() {
    return [{
      type: ViewContainerRef
    }];
  }, {
    footerTemplate: [{
      type: ContentChild,
      args: ["footerTemplate"]
    }],
    groupFooterTemplate: [{
      type: ContentChild,
      args: ["groupFooterTemplate"]
    }],
    groupCaptionTemplate: [{
      type: ContentChild,
      args: ["groupCaptionTemplate"]
    }]
  });
})();
var AggregateColumnsDirective = class extends ArrayBase {
  constructor() {
    super("columns");
  }
};
AggregateColumnsDirective.ɵfac = function AggregateColumnsDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || AggregateColumnsDirective)();
};
AggregateColumnsDirective.ɵdir = ɵɵdefineDirective({
  type: AggregateColumnsDirective,
  selectors: [["e-columns"]],
  contentQueries: function AggregateColumnsDirective_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, AggregateColumnDirective, 4);
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AggregateColumnsDirective, [{
    type: Directive,
    args: [{
      selector: "ejs-grid>e-aggregates>e-aggregate>e-columns",
      queries: {
        children: new ContentChildren(AggregateColumnDirective)
      }
    }]
  }], function() {
    return [];
  }, null);
})();
var input = ["columns"];
var outputs$2 = [];
var AggregateDirective = class extends ComplexBase {
  constructor(viewContainerRef) {
    super();
    this.viewContainerRef = viewContainerRef;
    this.tags = ["columns"];
    setValue("currentInstance", this, this.viewContainerRef);
    this.registerEvents(outputs$2);
    this.directivePropList = input;
  }
};
AggregateDirective.ɵfac = function AggregateDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || AggregateDirective)(ɵɵdirectiveInject(ViewContainerRef));
};
AggregateDirective.ɵdir = ɵɵdefineDirective({
  type: AggregateDirective,
  selectors: [["e-aggregate"]],
  contentQueries: function AggregateDirective_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, AggregateColumnsDirective, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.childColumns = _t.first);
    }
  },
  inputs: {
    columns: "columns"
  },
  standalone: false,
  features: [ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AggregateDirective, [{
    type: Directive,
    args: [{
      selector: "ejs-grid>e-aggregates>e-aggregate",
      inputs: input,
      outputs: outputs$2,
      queries: {
        childColumns: new ContentChild(AggregateColumnsDirective)
      }
    }]
  }], function() {
    return [{
      type: ViewContainerRef
    }];
  }, null);
})();
var AggregatesDirective = class extends ArrayBase {
  constructor() {
    super("aggregates");
  }
};
AggregatesDirective.ɵfac = function AggregatesDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || AggregatesDirective)();
};
AggregatesDirective.ɵdir = ɵɵdefineDirective({
  type: AggregatesDirective,
  selectors: [["e-aggregates"]],
  contentQueries: function AggregatesDirective_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, AggregateDirective, 4);
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AggregatesDirective, [{
    type: Directive,
    args: [{
      selector: "ejs-grid>e-aggregates",
      queries: {
        children: new ContentChildren(AggregateDirective)
      }
    }]
  }], function() {
    return [];
  }, null);
})();
var inputs$1 = ["adaptiveUIMode", "aggregates", "allowExcelExport", "allowFiltering", "allowGrouping", "allowKeyboard", "allowMultiSorting", "allowPaging", "allowPdfExport", "allowReordering", "allowResizing", "allowRowDragAndDrop", "allowSelection", "allowSorting", "allowTextWrap", "autoFit", "childGrid", "clipMode", "columnChooserSettings", "columnMenuItems", "columnQueryMode", "columns", "contextMenuItems", "cssClass", "currencyCode", "currentAction", "currentViewData", "dataSource", "detailTemplate", "editSettings", "ej2StatePersistenceVersion", "emptyRecordTemplate", "enableAdaptiveUI", "enableAltRow", "enableAutoFill", "enableColumnVirtualization", "enableHeaderFocus", "enableHover", "enableHtmlSanitizer", "enableImmutableMode", "enableInfiniteScrolling", "enablePersistence", "enableRtl", "enableStickyHeader", "enableVirtualMaskRow", "enableVirtualization", "exportGrids", "filterSettings", "frozenColumns", "frozenRows", "gridLines", "groupSettings", "height", "hierarchyPrintMode", "infiniteScrollSettings", "loadingIndicator", "locale", "pageSettings", "pagerTemplate", "parentDetails", "printMode", "query", "queryString", "resizeSettings", "rowDropSettings", "rowHeight", "rowRenderingMode", "rowTemplate", "searchSettings", "selectedRowIndex", "selectionSettings", "showColumnChooser", "showColumnMenu", "showHider", "sortSettings", "textWrapSettings", "toolbar", "toolbarTemplate", "width"];
var outputs$1 = ["actionBegin", "actionComplete", "actionFailure", "batchAdd", "batchCancel", "batchDelete", "beforeAutoFill", "beforeBatchAdd", "beforeBatchDelete", "beforeBatchSave", "beforeCopy", "beforeDataBound", "beforeDetailTemplateDetach", "beforeExcelExport", "beforeOpenAdaptiveDialog", "beforeOpenColumnChooser", "beforePaste", "beforePdfExport", "beforePrint", "beginEdit", "cellDeselected", "cellDeselecting", "cellEdit", "cellSave", "cellSaved", "cellSelected", "cellSelecting", "checkBoxChange", "columnDataStateChange", "columnDeselected", "columnDeselecting", "columnDrag", "columnDragStart", "columnDrop", "columnMenuClick", "columnMenuOpen", "columnSelected", "columnSelecting", "commandClick", "contextMenuClick", "contextMenuOpen", "created", "dataBound", "dataSourceChanged", "dataStateChange", "destroyed", "detailDataBound", "excelAggregateQueryCellInfo", "excelExportComplete", "excelHeaderQueryCellInfo", "excelQueryCellInfo", "exportDetailDataBound", "exportDetailTemplate", "exportGroupCaption", "headerCellInfo", "keyPressed", "lazyLoadGroupCollapse", "lazyLoadGroupExpand", "load", "pdfAggregateQueryCellInfo", "pdfExportComplete", "pdfHeaderQueryCellInfo", "pdfQueryCellInfo", "printComplete", "queryCellInfo", "recordClick", "recordDoubleClick", "resizeStart", "resizeStop", "resizing", "rowDataBound", "rowDeselected", "rowDeselecting", "rowDrag", "rowDragStart", "rowDragStartHelper", "rowDrop", "rowSelected", "rowSelecting", "toolbarClick", "dataSourceChange"];
var twoWays$1 = ["dataSource"];
var GridComponent = class GridComponent2 extends Grid {
  constructor(ngEle, srenderer, viewContainerRef, injector) {
    super();
    this.ngEle = ngEle;
    this.srenderer = srenderer;
    this.viewContainerRef = viewContainerRef;
    this.injector = injector;
    this.tags = ["columns", "aggregates"];
    this.element = this.ngEle.nativeElement;
    this.injectedModules = this.injectedModules || [];
    try {
      let mod = this.injector.get("GridsFilter");
      if (this.injectedModules.indexOf(mod) === -1) {
        this.injectedModules.push(mod);
      }
    } catch {
    }
    try {
      let mod = this.injector.get("GridsPage");
      if (this.injectedModules.indexOf(mod) === -1) {
        this.injectedModules.push(mod);
      }
    } catch {
    }
    try {
      let mod = this.injector.get("GridsSelection");
      if (this.injectedModules.indexOf(mod) === -1) {
        this.injectedModules.push(mod);
      }
    } catch {
    }
    try {
      let mod = this.injector.get("GridsSort");
      if (this.injectedModules.indexOf(mod) === -1) {
        this.injectedModules.push(mod);
      }
    } catch {
    }
    try {
      let mod = this.injector.get("GridsGroup");
      if (this.injectedModules.indexOf(mod) === -1) {
        this.injectedModules.push(mod);
      }
    } catch {
    }
    try {
      let mod = this.injector.get("GridsReorder");
      if (this.injectedModules.indexOf(mod) === -1) {
        this.injectedModules.push(mod);
      }
    } catch {
    }
    try {
      let mod = this.injector.get("GridsRowDD");
      if (this.injectedModules.indexOf(mod) === -1) {
        this.injectedModules.push(mod);
      }
    } catch {
    }
    try {
      let mod = this.injector.get("GridsDetailRow");
      if (this.injectedModules.indexOf(mod) === -1) {
        this.injectedModules.push(mod);
      }
    } catch {
    }
    try {
      let mod = this.injector.get("GridsToolbar");
      if (this.injectedModules.indexOf(mod) === -1) {
        this.injectedModules.push(mod);
      }
    } catch {
    }
    try {
      let mod = this.injector.get("GridsAggregate");
      if (this.injectedModules.indexOf(mod) === -1) {
        this.injectedModules.push(mod);
      }
    } catch {
    }
    try {
      let mod = this.injector.get("GridsSearch");
      if (this.injectedModules.indexOf(mod) === -1) {
        this.injectedModules.push(mod);
      }
    } catch {
    }
    try {
      let mod = this.injector.get("GridsVirtualScroll");
      if (this.injectedModules.indexOf(mod) === -1) {
        this.injectedModules.push(mod);
      }
    } catch {
    }
    try {
      let mod = this.injector.get("GridsEdit");
      if (this.injectedModules.indexOf(mod) === -1) {
        this.injectedModules.push(mod);
      }
    } catch {
    }
    try {
      let mod = this.injector.get("GridsResize");
      if (this.injectedModules.indexOf(mod) === -1) {
        this.injectedModules.push(mod);
      }
    } catch {
    }
    try {
      let mod = this.injector.get("GridsExcelExport");
      if (this.injectedModules.indexOf(mod) === -1) {
        this.injectedModules.push(mod);
      }
    } catch {
    }
    try {
      let mod = this.injector.get("GridsPdfExport");
      if (this.injectedModules.indexOf(mod) === -1) {
        this.injectedModules.push(mod);
      }
    } catch {
    }
    try {
      let mod = this.injector.get("GridsCommandColumn");
      if (this.injectedModules.indexOf(mod) === -1) {
        this.injectedModules.push(mod);
      }
    } catch {
    }
    try {
      let mod = this.injector.get("GridsContextMenu");
      if (this.injectedModules.indexOf(mod) === -1) {
        this.injectedModules.push(mod);
      }
    } catch {
    }
    try {
      let mod = this.injector.get("GridsFreeze");
      if (this.injectedModules.indexOf(mod) === -1) {
        this.injectedModules.push(mod);
      }
    } catch {
    }
    try {
      let mod = this.injector.get("GridsColumnMenu");
      if (this.injectedModules.indexOf(mod) === -1) {
        this.injectedModules.push(mod);
      }
    } catch {
    }
    try {
      let mod = this.injector.get("GridsColumnChooser");
      if (this.injectedModules.indexOf(mod) === -1) {
        this.injectedModules.push(mod);
      }
    } catch {
    }
    try {
      let mod = this.injector.get("GridsForeignKey");
      if (this.injectedModules.indexOf(mod) === -1) {
        this.injectedModules.push(mod);
      }
    } catch {
    }
    try {
      let mod = this.injector.get("GridsInfiniteScroll");
      if (this.injectedModules.indexOf(mod) === -1) {
        this.injectedModules.push(mod);
      }
    } catch {
    }
    try {
      let mod = this.injector.get("GridsLazyLoadGroup");
      if (this.injectedModules.indexOf(mod) === -1) {
        this.injectedModules.push(mod);
      }
    } catch {
    }
    this.registerEvents(outputs$1);
    this.addTwoWay.call(this, twoWays$1);
    setValue("currentInstance", this, this.viewContainerRef);
    this.context = new ComponentBase();
  }
  ngOnInit() {
    this.context.ngOnInit(this);
  }
  ngAfterViewInit() {
    this.context.ngAfterViewInit(this);
  }
  ngOnDestroy() {
    this.context.ngOnDestroy(this);
  }
  ngAfterContentChecked() {
    this.tagObjects[0].instance = this.childColumns;
    if (this.childAggregates) {
      this.tagObjects[1].instance = this.childAggregates;
    }
    this.context.ngAfterContentChecked(this);
  }
};
GridComponent.ɵfac = function GridComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || GridComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(Injector));
};
GridComponent.ɵcmp = ɵɵdefineComponent({
  type: GridComponent,
  selectors: [["ejs-grid"]],
  contentQueries: function GridComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, _c9, 5);
      ɵɵcontentQuery(dirIndex, _c10, 5);
      ɵɵcontentQuery(dirIndex, _c11, 5);
      ɵɵcontentQuery(dirIndex, _c12, 5);
      ɵɵcontentQuery(dirIndex, _c13, 5);
      ɵɵcontentQuery(dirIndex, _c14, 5);
      ɵɵcontentQuery(dirIndex, _c15, 5);
      ɵɵcontentQuery(dirIndex, _c16, 5);
      ɵɵcontentQuery(dirIndex, _c17, 5);
      ɵɵcontentQuery(dirIndex, _c18, 5);
      ɵɵcontentQuery(dirIndex, ColumnsDirective, 5);
      ɵɵcontentQuery(dirIndex, AggregatesDirective, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.rowTemplate = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.emptyRecordTemplate = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.detailTemplate = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.toolbarTemplate = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.pagerTemplate = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.editSettings_template = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.groupSettings_captionTemplate = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.columnChooserSettings_headerTemplate = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.columnChooserSettings_template = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.columnChooserSettings_footerTemplate = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.childColumns = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.childAggregates = _t.first);
    }
  },
  inputs: {
    adaptiveUIMode: "adaptiveUIMode",
    aggregates: "aggregates",
    allowExcelExport: "allowExcelExport",
    allowFiltering: "allowFiltering",
    allowGrouping: "allowGrouping",
    allowKeyboard: "allowKeyboard",
    allowMultiSorting: "allowMultiSorting",
    allowPaging: "allowPaging",
    allowPdfExport: "allowPdfExport",
    allowReordering: "allowReordering",
    allowResizing: "allowResizing",
    allowRowDragAndDrop: "allowRowDragAndDrop",
    allowSelection: "allowSelection",
    allowSorting: "allowSorting",
    allowTextWrap: "allowTextWrap",
    autoFit: "autoFit",
    childGrid: "childGrid",
    clipMode: "clipMode",
    columnChooserSettings: "columnChooserSettings",
    columnMenuItems: "columnMenuItems",
    columnQueryMode: "columnQueryMode",
    columns: "columns",
    contextMenuItems: "contextMenuItems",
    cssClass: "cssClass",
    currencyCode: "currencyCode",
    currentAction: "currentAction",
    currentViewData: "currentViewData",
    dataSource: "dataSource",
    detailTemplate: "detailTemplate",
    editSettings: "editSettings",
    ej2StatePersistenceVersion: "ej2StatePersistenceVersion",
    emptyRecordTemplate: "emptyRecordTemplate",
    enableAdaptiveUI: "enableAdaptiveUI",
    enableAltRow: "enableAltRow",
    enableAutoFill: "enableAutoFill",
    enableColumnVirtualization: "enableColumnVirtualization",
    enableHeaderFocus: "enableHeaderFocus",
    enableHover: "enableHover",
    enableHtmlSanitizer: "enableHtmlSanitizer",
    enableImmutableMode: "enableImmutableMode",
    enableInfiniteScrolling: "enableInfiniteScrolling",
    enablePersistence: "enablePersistence",
    enableRtl: "enableRtl",
    enableStickyHeader: "enableStickyHeader",
    enableVirtualMaskRow: "enableVirtualMaskRow",
    enableVirtualization: "enableVirtualization",
    exportGrids: "exportGrids",
    filterSettings: "filterSettings",
    frozenColumns: "frozenColumns",
    frozenRows: "frozenRows",
    gridLines: "gridLines",
    groupSettings: "groupSettings",
    height: "height",
    hierarchyPrintMode: "hierarchyPrintMode",
    infiniteScrollSettings: "infiniteScrollSettings",
    loadingIndicator: "loadingIndicator",
    locale: "locale",
    pageSettings: "pageSettings",
    pagerTemplate: "pagerTemplate",
    parentDetails: "parentDetails",
    printMode: "printMode",
    query: "query",
    queryString: "queryString",
    resizeSettings: "resizeSettings",
    rowDropSettings: "rowDropSettings",
    rowHeight: "rowHeight",
    rowRenderingMode: "rowRenderingMode",
    rowTemplate: "rowTemplate",
    searchSettings: "searchSettings",
    selectedRowIndex: "selectedRowIndex",
    selectionSettings: "selectionSettings",
    showColumnChooser: "showColumnChooser",
    showColumnMenu: "showColumnMenu",
    showHider: "showHider",
    sortSettings: "sortSettings",
    textWrapSettings: "textWrapSettings",
    toolbar: "toolbar",
    toolbarTemplate: "toolbarTemplate",
    width: "width"
  },
  outputs: {
    actionBegin: "actionBegin",
    actionComplete: "actionComplete",
    actionFailure: "actionFailure",
    batchAdd: "batchAdd",
    batchCancel: "batchCancel",
    batchDelete: "batchDelete",
    beforeAutoFill: "beforeAutoFill",
    beforeBatchAdd: "beforeBatchAdd",
    beforeBatchDelete: "beforeBatchDelete",
    beforeBatchSave: "beforeBatchSave",
    beforeCopy: "beforeCopy",
    beforeDataBound: "beforeDataBound",
    beforeDetailTemplateDetach: "beforeDetailTemplateDetach",
    beforeExcelExport: "beforeExcelExport",
    beforeOpenAdaptiveDialog: "beforeOpenAdaptiveDialog",
    beforeOpenColumnChooser: "beforeOpenColumnChooser",
    beforePaste: "beforePaste",
    beforePdfExport: "beforePdfExport",
    beforePrint: "beforePrint",
    beginEdit: "beginEdit",
    cellDeselected: "cellDeselected",
    cellDeselecting: "cellDeselecting",
    cellEdit: "cellEdit",
    cellSave: "cellSave",
    cellSaved: "cellSaved",
    cellSelected: "cellSelected",
    cellSelecting: "cellSelecting",
    checkBoxChange: "checkBoxChange",
    columnDataStateChange: "columnDataStateChange",
    columnDeselected: "columnDeselected",
    columnDeselecting: "columnDeselecting",
    columnDrag: "columnDrag",
    columnDragStart: "columnDragStart",
    columnDrop: "columnDrop",
    columnMenuClick: "columnMenuClick",
    columnMenuOpen: "columnMenuOpen",
    columnSelected: "columnSelected",
    columnSelecting: "columnSelecting",
    commandClick: "commandClick",
    contextMenuClick: "contextMenuClick",
    contextMenuOpen: "contextMenuOpen",
    created: "created",
    dataBound: "dataBound",
    dataSourceChanged: "dataSourceChanged",
    dataStateChange: "dataStateChange",
    destroyed: "destroyed",
    detailDataBound: "detailDataBound",
    excelAggregateQueryCellInfo: "excelAggregateQueryCellInfo",
    excelExportComplete: "excelExportComplete",
    excelHeaderQueryCellInfo: "excelHeaderQueryCellInfo",
    excelQueryCellInfo: "excelQueryCellInfo",
    exportDetailDataBound: "exportDetailDataBound",
    exportDetailTemplate: "exportDetailTemplate",
    exportGroupCaption: "exportGroupCaption",
    headerCellInfo: "headerCellInfo",
    keyPressed: "keyPressed",
    lazyLoadGroupCollapse: "lazyLoadGroupCollapse",
    lazyLoadGroupExpand: "lazyLoadGroupExpand",
    load: "load",
    pdfAggregateQueryCellInfo: "pdfAggregateQueryCellInfo",
    pdfExportComplete: "pdfExportComplete",
    pdfHeaderQueryCellInfo: "pdfHeaderQueryCellInfo",
    pdfQueryCellInfo: "pdfQueryCellInfo",
    printComplete: "printComplete",
    queryCellInfo: "queryCellInfo",
    recordClick: "recordClick",
    recordDoubleClick: "recordDoubleClick",
    resizeStart: "resizeStart",
    resizeStop: "resizeStop",
    resizing: "resizing",
    rowDataBound: "rowDataBound",
    rowDeselected: "rowDeselected",
    rowDeselecting: "rowDeselecting",
    rowDrag: "rowDrag",
    rowDragStart: "rowDragStart",
    rowDragStartHelper: "rowDragStartHelper",
    rowDrop: "rowDrop",
    rowSelected: "rowSelected",
    rowSelecting: "rowSelecting",
    toolbarClick: "toolbarClick",
    dataSourceChange: "dataSourceChange"
  },
  standalone: false,
  features: [ɵɵInheritDefinitionFeature],
  decls: 0,
  vars: 0,
  template: function GridComponent_Template(rf, ctx) {
  },
  encapsulation: 2,
  changeDetection: 0
});
__decorate([Template()], GridComponent.prototype, "rowTemplate", void 0);
__decorate([Template()], GridComponent.prototype, "emptyRecordTemplate", void 0);
__decorate([Template()], GridComponent.prototype, "detailTemplate", void 0);
__decorate([Template()], GridComponent.prototype, "toolbarTemplate", void 0);
__decorate([Template()], GridComponent.prototype, "pagerTemplate", void 0);
__decorate([Template()], GridComponent.prototype, "editSettings_template", void 0);
__decorate([Template()], GridComponent.prototype, "groupSettings_captionTemplate", void 0);
__decorate([Template()], GridComponent.prototype, "columnChooserSettings_headerTemplate", void 0);
__decorate([Template()], GridComponent.prototype, "columnChooserSettings_template", void 0);
__decorate([Template()], GridComponent.prototype, "columnChooserSettings_footerTemplate", void 0);
GridComponent = __decorate([ComponentMixins([ComponentBase])], GridComponent);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GridComponent, [{
    type: Component,
    args: [{
      selector: "ejs-grid",
      inputs: inputs$1,
      outputs: outputs$1,
      template: "",
      changeDetection: ChangeDetectionStrategy.OnPush,
      queries: {
        childColumns: new ContentChild(ColumnsDirective),
        childAggregates: new ContentChild(AggregatesDirective)
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
    rowTemplate: [{
      type: ContentChild,
      args: ["rowTemplate"]
    }],
    emptyRecordTemplate: [{
      type: ContentChild,
      args: ["emptyRecordTemplate"]
    }],
    detailTemplate: [{
      type: ContentChild,
      args: ["detailTemplate"]
    }],
    toolbarTemplate: [{
      type: ContentChild,
      args: ["toolbarTemplate"]
    }],
    pagerTemplate: [{
      type: ContentChild,
      args: ["pagerTemplate"]
    }],
    editSettings_template: [{
      type: ContentChild,
      args: ["editSettingsTemplate"]
    }],
    groupSettings_captionTemplate: [{
      type: ContentChild,
      args: ["groupSettingsCaptionTemplate"]
    }],
    columnChooserSettings_headerTemplate: [{
      type: ContentChild,
      args: ["columnChooserSettingsHeaderTemplate"]
    }],
    columnChooserSettings_template: [{
      type: ContentChild,
      args: ["columnChooserSettingsTemplate"]
    }],
    columnChooserSettings_footerTemplate: [{
      type: ContentChild,
      args: ["columnChooserSettingsFooterTemplate"]
    }]
  });
})();
var GridModule = class {
};
GridModule.ɵfac = function GridModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || GridModule)();
};
GridModule.ɵmod = ɵɵdefineNgModule({
  type: GridModule,
  declarations: [GridComponent, StackedColumnDirective, StackedColumnsDirective, ColumnDirective, ColumnsDirective, AggregateColumnDirective, AggregateColumnsDirective, AggregateDirective, AggregatesDirective],
  imports: [CommonModule],
  exports: [GridComponent, StackedColumnDirective, StackedColumnsDirective, ColumnDirective, ColumnsDirective, AggregateColumnDirective, AggregateColumnsDirective, AggregateDirective, AggregatesDirective]
});
GridModule.ɵinj = ɵɵdefineInjector({
  imports: [[CommonModule]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GridModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      declarations: [GridComponent, StackedColumnDirective, StackedColumnsDirective, ColumnDirective, ColumnsDirective, AggregateColumnDirective, AggregateColumnsDirective, AggregateDirective, AggregatesDirective],
      exports: [GridComponent, StackedColumnDirective, StackedColumnsDirective, ColumnDirective, ColumnsDirective, AggregateColumnDirective, AggregateColumnsDirective, AggregateDirective, AggregatesDirective]
    }]
  }], null, null);
})();
var FilterService = {
  provide: "GridsFilter",
  useValue: Filter
};
var PageService = {
  provide: "GridsPage",
  useValue: Page
};
var SelectionService = {
  provide: "GridsSelection",
  useValue: Selection
};
var SortService = {
  provide: "GridsSort",
  useValue: Sort
};
var GroupService = {
  provide: "GridsGroup",
  useValue: Group
};
var ReorderService = {
  provide: "GridsReorder",
  useValue: Reorder
};
var RowDDService = {
  provide: "GridsRowDD",
  useValue: RowDD
};
var DetailRowService = {
  provide: "GridsDetailRow",
  useValue: DetailRow
};
var ToolbarService = {
  provide: "GridsToolbar",
  useValue: Toolbar
};
var AggregateService = {
  provide: "GridsAggregate",
  useValue: Aggregate
};
var SearchService = {
  provide: "GridsSearch",
  useValue: Search
};
var VirtualScrollService = {
  provide: "GridsVirtualScroll",
  useValue: VirtualScroll
};
var EditService = {
  provide: "GridsEdit",
  useValue: Edit
};
var ResizeService = {
  provide: "GridsResize",
  useValue: Resize
};
var ExcelExportService = {
  provide: "GridsExcelExport",
  useValue: ExcelExport
};
var PdfExportService = {
  provide: "GridsPdfExport",
  useValue: PdfExport
};
var CommandColumnService = {
  provide: "GridsCommandColumn",
  useValue: CommandColumn
};
var ContextMenuService = {
  provide: "GridsContextMenu",
  useValue: ContextMenu
};
var FreezeService = {
  provide: "GridsFreeze",
  useValue: Freeze
};
var ColumnMenuService = {
  provide: "GridsColumnMenu",
  useValue: ColumnMenu
};
var ColumnChooserService = {
  provide: "GridsColumnChooser",
  useValue: ColumnChooser
};
var ForeignKeyService = {
  provide: "GridsForeignKey",
  useValue: ForeignKey
};
var InfiniteScrollService = {
  provide: "GridsInfiniteScroll",
  useValue: InfiniteScroll
};
var LazyLoadGroupService = {
  provide: "GridsLazyLoadGroup",
  useValue: LazyLoadGroup
};
var GridAllModule = class {
};
GridAllModule.ɵfac = function GridAllModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || GridAllModule)();
};
GridAllModule.ɵmod = ɵɵdefineNgModule({
  type: GridAllModule,
  imports: [CommonModule, GridModule],
  exports: [GridModule]
});
GridAllModule.ɵinj = ɵɵdefineInjector({
  providers: [FilterService, PageService, SelectionService, SortService, GroupService, ReorderService, RowDDService, DetailRowService, ToolbarService, AggregateService, SearchService, VirtualScrollService, EditService, ResizeService, ExcelExportService, PdfExportService, CommandColumnService, ContextMenuService, FreezeService, ColumnMenuService, ColumnChooserService, ForeignKeyService, InfiniteScrollService, LazyLoadGroupService],
  imports: [[CommonModule, GridModule], GridModule]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GridAllModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, GridModule],
      exports: [GridModule],
      providers: [FilterService, PageService, SelectionService, SortService, GroupService, ReorderService, RowDDService, DetailRowService, ToolbarService, AggregateService, SearchService, VirtualScrollService, EditService, ResizeService, ExcelExportService, PdfExportService, CommandColumnService, ContextMenuService, FreezeService, ColumnMenuService, ColumnChooserService, ForeignKeyService, InfiniteScrollService, LazyLoadGroupService]
    }]
  }], null, null);
})();
var inputs = ["cssClass", "currentPage", "customText", "enableExternalMessage", "enablePagerMessage", "enablePersistence", "enableQueryString", "enableRtl", "externalMessage", "locale", "pageCount", "pageSize", "pageSizes", "template", "totalRecordsCount"];
var outputs = ["click", "created", "dropDownChanged", "currentPageChange", "pageSizeChange", "pageCountChange", "pageSizesChange"];
var twoWays = ["currentPage", "pageSize", "pageCount", "pageSizes"];
var PagerComponent = class PagerComponent2 extends Pager {
  constructor(ngEle, srenderer, viewContainerRef, injector) {
    super();
    this.ngEle = ngEle;
    this.srenderer = srenderer;
    this.viewContainerRef = viewContainerRef;
    this.injector = injector;
    this.element = this.ngEle.nativeElement;
    this.injectedModules = this.injectedModules || [];
    this.registerEvents(outputs);
    this.addTwoWay.call(this, twoWays);
    setValue("currentInstance", this, this.viewContainerRef);
    this.context = new ComponentBase();
  }
  ngOnInit() {
    this.context.ngOnInit(this);
  }
  ngAfterViewInit() {
    this.context.ngAfterViewInit(this);
  }
  ngOnDestroy() {
    this.context.ngOnDestroy(this);
  }
  ngAfterContentChecked() {
    this.context.ngAfterContentChecked(this);
  }
};
PagerComponent.ɵfac = function PagerComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || PagerComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(Injector));
};
PagerComponent.ɵcmp = ɵɵdefineComponent({
  type: PagerComponent,
  selectors: [["ejs-pager"]],
  contentQueries: function PagerComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, _c0, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.template = _t.first);
    }
  },
  inputs: {
    cssClass: "cssClass",
    currentPage: "currentPage",
    customText: "customText",
    enableExternalMessage: "enableExternalMessage",
    enablePagerMessage: "enablePagerMessage",
    enablePersistence: "enablePersistence",
    enableQueryString: "enableQueryString",
    enableRtl: "enableRtl",
    externalMessage: "externalMessage",
    locale: "locale",
    pageCount: "pageCount",
    pageSize: "pageSize",
    pageSizes: "pageSizes",
    template: "template",
    totalRecordsCount: "totalRecordsCount"
  },
  outputs: {
    click: "click",
    created: "created",
    dropDownChanged: "dropDownChanged",
    currentPageChange: "currentPageChange",
    pageSizeChange: "pageSizeChange",
    pageCountChange: "pageCountChange",
    pageSizesChange: "pageSizesChange"
  },
  standalone: false,
  features: [ɵɵInheritDefinitionFeature],
  decls: 0,
  vars: 0,
  template: function PagerComponent_Template(rf, ctx) {
  },
  encapsulation: 2,
  changeDetection: 0
});
__decorate([Template()], PagerComponent.prototype, "template", void 0);
PagerComponent = __decorate([ComponentMixins([ComponentBase])], PagerComponent);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PagerComponent, [{
    type: Component,
    args: [{
      selector: "ejs-pager",
      inputs,
      outputs,
      template: "",
      changeDetection: ChangeDetectionStrategy.OnPush,
      queries: {}
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
    }]
  });
})();
var PagerModule = class {
};
PagerModule.ɵfac = function PagerModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || PagerModule)();
};
PagerModule.ɵmod = ɵɵdefineNgModule({
  type: PagerModule,
  declarations: [PagerComponent],
  imports: [CommonModule],
  exports: [PagerComponent]
});
PagerModule.ɵinj = ɵɵdefineInjector({
  imports: [[CommonModule]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PagerModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      declarations: [PagerComponent],
      exports: [PagerComponent]
    }]
  }], null, null);
})();
var PagerAllModule = class {
};
PagerAllModule.ɵfac = function PagerAllModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || PagerAllModule)();
};
PagerAllModule.ɵmod = ɵɵdefineNgModule({
  type: PagerAllModule,
  imports: [CommonModule, PagerModule],
  exports: [PagerModule]
});
PagerAllModule.ɵinj = ɵɵdefineInjector({
  providers: [],
  imports: [[CommonModule, PagerModule], PagerModule]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PagerAllModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, PagerModule],
      exports: [PagerModule],
      providers: []
    }]
  }], null, null);
})();
export {
  Aggregate,
  AggregateColumnDirective,
  AggregateColumnsDirective,
  AggregateDirective,
  AggregateService,
  AggregatesDirective,
  AutoCompleteEditCell,
  BatchEdit,
  BatchEditRender,
  BooleanEditCell,
  BooleanFilterUI,
  Cell,
  CellRenderer,
  CellRendererFactory,
  CellType,
  CheckBoxFilter,
  CheckBoxFilterBase,
  Clipboard,
  Column,
  ColumnChooser,
  ColumnChooserService,
  ColumnDirective,
  ColumnMenu,
  ColumnMenuService,
  ColumnsDirective,
  ComboboxEditCell,
  CommandColumn,
  CommandColumnModel,
  CommandColumnRenderer,
  CommandColumnService,
  ContentRender,
  ContextMenu,
  ContextMenuService,
  Data,
  DateFilterUI,
  DatePickerEditCell,
  DefaultEditCell,
  DetailRow,
  DetailRowService,
  DialogEdit,
  DialogEditRender,
  DropDownEditCell,
  Edit,
  EditCellBase,
  EditRender,
  EditService,
  EditSettings,
  ExcelExport,
  ExcelExportService,
  ExcelFilter,
  ExcelFilterBase,
  ExportHelper,
  ExportValueFormatter,
  ExternalMessage,
  Filter,
  FilterCellRenderer,
  FilterService,
  FilterSettings,
  FlMenuOptrUI,
  ForeignKey,
  ForeignKeyService,
  Freeze,
  FreezeService,
  Global,
  Grid,
  GridAllModule,
  GridColumn,
  GridComponent,
  GridModule,
  Group,
  GroupCaptionCellRenderer,
  GroupCaptionEmptyCellRenderer,
  GroupLazyLoadRenderer,
  GroupModelGenerator,
  GroupService,
  GroupSettings,
  HeaderCellRenderer,
  HeaderRender,
  IndentCellRenderer,
  InfiniteScroll,
  InfiniteScrollService,
  InfiniteScrollSettings,
  InlineEdit,
  InlineEditRender,
  InterSectionObserver,
  LazyLoadGroup,
  LazyLoadGroupService,
  LoadingIndicator,
  Logger,
  MaskedTextBoxCellEdit,
  MultiSelectEditCell,
  NormalEdit,
  NumberFilterUI,
  NumericContainer,
  NumericEditCell,
  Page,
  PageService,
  Pager,
  PagerAllModule,
  PagerComponent,
  PagerDropDown,
  PagerMessage,
  PagerModule,
  PdfExport,
  PdfExportService,
  Predicate,
  Print,
  Render,
  RenderType,
  Reorder,
  ReorderService,
  Resize,
  ResizeService,
  ResizeSettings,
  ResponsiveDialogAction,
  ResponsiveDialogRenderer,
  ResponsiveToolbarAction,
  Row,
  RowDD,
  RowDDService,
  RowDropSettings,
  RowModelGenerator,
  RowRenderer,
  Scroll,
  Search,
  SearchService,
  SearchSettings,
  Selection,
  SelectionService,
  SelectionSettings,
  ServiceLocator,
  Sort,
  SortDescriptor,
  SortService,
  SortSettings,
  StackedColumn,
  StackedColumnDirective,
  StackedColumnsDirective,
  StackedHeaderCellRenderer,
  StringFilterUI,
  TextWrapSettings,
  TimePickerEditCell,
  ToggleEditCell,
  Toolbar,
  ToolbarItem,
  ToolbarService,
  ValueFormatter,
  VirtualContentRenderer,
  VirtualElementHandler,
  VirtualHeaderRenderer,
  VirtualRowModelGenerator,
  VirtualScroll,
  VirtualScrollService,
  accessPredicate,
  actionBegin,
  actionComplete,
  actionFailure,
  addBegin,
  addBiggerDialog,
  addComplete,
  addDeleteAction,
  addFixedColumnBorder,
  addRemoveActiveClasses,
  addRemoveEventListener,
  addStickyColumnPosition,
  addedRecords,
  addedRow,
  afterContentRender,
  afterFilterColumnMenuClose,
  appendChildren,
  appendInfiniteContent,
  applyBiggerTheme,
  applyStickyLeftRightPosition,
  ariaColIndex,
  ariaRowIndex,
  autoCol,
  batchAdd,
  batchCancel,
  batchCnfrmDlgCancel,
  batchDelete,
  batchEditFormRendered,
  batchForm,
  beforeAutoFill,
  beforeBatchAdd,
  beforeBatchCancel,
  beforeBatchDelete,
  beforeBatchSave,
  beforeCellFocused,
  beforeCheckboxRenderer,
  beforeCheckboxRendererQuery,
  beforeCheckboxfilterRenderer,
  beforeCopy,
  beforeCustomFilterOpen,
  beforeDataBound,
  beforeDetailTemplateDetach,
  beforeExcelExport,
  beforeFltrcMenuOpen,
  beforeFragAppend,
  beforeOpen,
  beforeOpenAdaptiveDialog,
  beforeOpenColumnChooser,
  beforePaste,
  beforePdfExport,
  beforePrint,
  beforeRefreshOnDataChange,
  beforeStartEdit,
  beginEdit,
  bulkSave,
  cBoxFltrBegin,
  cBoxFltrComplete,
  calculateAggregate,
  cancelBegin,
  capitalizeFirstLetter,
  captionActionComplete,
  cellDeselected,
  cellDeselecting,
  cellEdit,
  cellFocused,
  cellSave,
  cellSaved,
  cellSelected,
  cellSelecting,
  cellSelectionBegin,
  cellSelectionComplete,
  change,
  changedRecords,
  checkBoxChange,
  checkDepth,
  checkIsVirtual,
  checkScrollReset,
  clearReactVueTemplates,
  click,
  closeBatch,
  closeEdit,
  closeFilterDialog,
  closeInline,
  colGroup,
  colGroupRefresh,
  columnChooserCancelBtnClick,
  columnChooserClose,
  columnChooserOpened,
  columnChooserSearch,
  columnChooserUpdate,
  columnDataStateChange,
  columnDeselected,
  columnDeselecting,
  columnDrag,
  columnDragStart,
  columnDragStop,
  columnDrop,
  columnMenuClick,
  columnMenuOpen,
  columnPositionChanged,
  columnSelected,
  columnSelecting,
  columnSelectionBegin,
  columnSelectionComplete,
  columnVisibilityChanged,
  columnWidthChanged,
  columnsPrepared,
  commandClick,
  commandColumnDestroy,
  compareChanges,
  componentRendered,
  content,
  contentReady,
  contextMenuClick,
  contextMenuOpen,
  create,
  createCboxWithWrap,
  createEditElement,
  createVirtualValidationForm,
  created,
  crudAction,
  customFilterClose,
  dataBound,
  dataReady,
  dataSourceChanged,
  dataSourceModified,
  dataStateChange,
  dblclick,
  deleteBegin,
  deleteComplete,
  deletedRecords,
  destroy,
  destroyAutoFillElements,
  destroyChildGrid,
  destroyEditForm,
  destroyForm,
  destroyed,
  detachDetailTemplate,
  detailDataBound,
  detailIndentCellInfo,
  detailLists,
  detailStateChange,
  dialogDestroy,
  distinctStringValues,
  doesImplementInterface,
  doubleTap,
  downArrow,
  editBegin,
  editComplete,
  editNextValCell,
  editReset,
  editedRow,
  endAdd,
  endDelete,
  endEdit,
  ensureFirstRow,
  ensureLastRow,
  enter,
  enterKeyHandler,
  eventPromise,
  excelAggregateQueryCellInfo,
  excelExportComplete,
  excelHeaderQueryCellInfo,
  excelQueryCellInfo,
  expandChildGrid,
  exportDataBound,
  exportDetailDataBound,
  exportDetailTemplate,
  exportGroupCaption,
  exportRowDataBound,
  extend,
  extendObjWithFn,
  filterAfterOpen,
  filterBeforeOpen,
  filterBegin,
  filterCboxValue,
  filterChoiceRequest,
  filterCmenuSelect,
  filterComplete,
  filterDialogClose,
  filterDialogCreated,
  filterMenuClose,
  filterOpen,
  filterSearchBegin,
  findCellIndex,
  fltrPrevent,
  focus,
  foreignKeyData,
  freezeRefresh,
  freezeRender,
  frozenContent,
  frozenDirection,
  frozenHeader,
  frozenHeight,
  frozenLeft,
  frozenRight,
  generateExpandPredicates,
  generateQuery,
  getActualPropFromColl,
  getActualProperties,
  getActualRowHeight,
  getAggregateQuery,
  getCellByColAndRowIndex,
  getCellFromRow,
  getCellsByTableName,
  getCloneProperties,
  getCollapsedRowsCount,
  getColumnByForeignKeyValue,
  getColumnModelByFieldName,
  getColumnModelByUid,
  getComplexFieldID,
  getCustomDateFormat,
  getDatePredicate,
  getEditedDataIndex,
  getElementIndex,
  getExpandedState,
  getFilterBarOperator,
  getFilterMenuPostion,
  getForeignData,
  getForeignKeyData,
  getGroupKeysAndFields,
  getListHeight,
  getNumberFormat,
  getObject,
  getParentIns,
  getParsedFieldID,
  getPosition,
  getPredicates,
  getPrintGridModel,
  getPrototypesOfObj,
  getRowHeight,
  getRowIndexFromElement,
  getScrollBarWidth,
  getScrollWidth,
  getStateEventArgument,
  getTransformValues,
  getUid,
  getUpdateUsingRaf,
  getVirtualData,
  getVisiblePage,
  getZIndexCalcualtion,
  gridChkBox,
  gridContent,
  gridFooter,
  gridHeader,
  groupAggregates,
  groupBegin,
  groupCaptionRow,
  groupCaptionRowLeftRightPos,
  groupCollapse,
  groupComplete,
  groupReorderRowObject,
  headerCellInfo,
  headerContent,
  headerDrop,
  headerRefreshed,
  headerValueAccessor,
  hierarchyPrint,
  immutableBatchCancel,
  inArray,
  inBoundModelChanged,
  infiniteAppendElements,
  infiniteCrudCancel,
  infiniteEditHandler,
  infinitePageQuery,
  infiniteRemoveElements,
  infiniteScrollComplete,
  infiniteScrollHandler,
  infiniteShowHide,
  initForeignKeyColumn,
  initialCollapse,
  initialEnd,
  initialFrozenColumnIndex,
  initialLoad,
  isActionPrevent,
  isCellHaveWidth,
  isChildColumn,
  isComplexField,
  isEditable,
  isExportColumns,
  isGroupAdaptive,
  isRowEnteredInGrid,
  ispercentageWidth,
  iterateArrayOrObject,
  iterateExtend,
  keyPressed,
  lastRowCellBorderUpdated,
  lazyLoadGroupCollapse,
  lazyLoadGroupExpand,
  lazyLoadScrollHandler,
  leftRight,
  load,
  measureColumnDepth,
  menuClass,
  modelChanged,
  movableContent,
  movableHeader,
  nextCellIndex,
  onEmpty,
  onResize,
  open,
  padZero,
  pageBegin,
  pageComplete,
  pageDown,
  pageUp,
  pagerRefresh,
  parents,
  parentsUntil,
  partialRefresh,
  pdfAggregateQueryCellInfo,
  pdfExportComplete,
  pdfHeaderQueryCellInfo,
  pdfQueryCellInfo,
  performComplexDataOperation,
  prepareColumns,
  preventBatch,
  preventFrozenScrollRefresh,
  printComplete,
  printGridInit,
  pushuid,
  queryCellInfo,
  recordAdded,
  recordClick,
  recordDoubleClick,
  recursive,
  refreshAggregateCell,
  refreshAggregates,
  refreshComplete,
  refreshCustomFilterClearBtn,
  refreshCustomFilterOkBtn,
  refreshExpandandCollapse,
  refreshFilteredColsUid,
  refreshFooterRenderer,
  refreshForeignData,
  refreshFrozenColumns,
  refreshFrozenHeight,
  refreshFrozenPosition,
  refreshHandlers,
  refreshInfiniteCurrentViewData,
  refreshInfiniteEditrowindex,
  refreshInfiniteModeBlocks,
  refreshInfinitePersistSelection,
  refreshResizePosition,
  refreshSplitFrozenColumn,
  refreshVirtualBlock,
  refreshVirtualCache,
  refreshVirtualEditFormCells,
  refreshVirtualFrozenHeight,
  refreshVirtualFrozenRows,
  refreshVirtualLazyLoadCache,
  refreshVirtualMaxPage,
  registerEventHandlers,
  removeAddCboxClasses,
  removeElement,
  removeEventHandlers,
  removeInfiniteRows,
  renderResponsiveChangeAction,
  renderResponsiveCmenu,
  renderResponsiveColumnChooserDiv,
  reorderBegin,
  reorderComplete,
  resetCachedRowIndex,
  resetColandRowSpanStickyPosition,
  resetColspanGroupCaption,
  resetColumns,
  resetDialogAppend,
  resetInfiniteBlocks,
  resetRowIndex,
  resetVirtualFocus,
  resizeClassList,
  resizeStart,
  resizeStop,
  restoreFocus,
  row,
  rowCell,
  rowDataBound,
  rowDeselected,
  rowDeselecting,
  rowDrag,
  rowDragAndDrop,
  rowDragAndDropBegin,
  rowDragAndDropComplete,
  rowDragStart,
  rowDragStartHelper,
  rowDrop,
  rowModeChange,
  rowPositionChanged,
  rowSelected,
  rowSelecting,
  rowSelectionBegin,
  rowSelectionComplete,
  rowsAdded,
  rowsRemoved,
  rtlUpdated,
  saveComplete,
  scroll,
  scrollToEdit,
  searchBegin,
  searchComplete,
  selectRowOnContextOpen,
  selectVirtualRow,
  setChecked,
  setColumnIndex,
  setComplexFieldID,
  setCssInGridPopUp,
  setDisplayValue,
  setFormatter,
  setFreezeSelection,
  setFullScreenDialog,
  setGroupCache,
  setHeightToFrozenElement,
  setInfiniteCache,
  setInfiniteColFrozenHeight,
  setInfiniteFrozenHeight,
  setReorderDestinationElement,
  setRowElements,
  setStyleAndAttributes,
  setValidationRuels,
  setVirtualPageQuery,
  shiftEnter,
  shiftTab,
  showAddNewRowFocus,
  showEmptyGrid,
  sliceElements,
  sortBegin,
  sortComplete,
  stickyScrollComplete,
  summaryIterator,
  tab,
  table,
  tbody,
  templateCompiler,
  textWrapRefresh,
  toggleFilterUI,
  toogleCheckbox,
  toolbarClick,
  toolbarRefresh,
  tooltipDestroy,
  uiUpdate,
  ungroupBegin,
  ungroupComplete,
  upArrow,
  updateColumnTypeForExportColumns,
  updateData,
  updatecloneRow,
  valCustomPlacement,
  validateVirtualForm,
  valueAccessor,
  virtaulCellFocus,
  virtaulKeyHandler,
  virtualScrollAddActionBegin,
  virtualScrollEdit,
  virtualScrollEditActionBegin,
  virtualScrollEditCancel,
  virtualScrollEditSuccess,
  wrap
};
//# sourceMappingURL=@syncfusion_ej2-angular-grids.js.map
