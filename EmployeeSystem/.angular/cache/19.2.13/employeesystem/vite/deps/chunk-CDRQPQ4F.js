import {
  attributes,
  createElement,
  getTemplateEngine,
  getValue,
  isNullOrUndefined,
  isObject,
  isUndefined,
  setTemplateEngine,
  setValue
} from "./chunk-J6KMUI6T.js";
import {
  EventEmitter
} from "./chunk-UOGKAELO.js";

// node_modules/@syncfusion/ej2-angular-base/src/util.js
function applyMixins(derivedClass, baseClass) {
  baseClass.forEach(function(baseClass2) {
    Object.getOwnPropertyNames(baseClass2.prototype).forEach(function(name) {
      if (!Object.prototype.hasOwnProperty.call(derivedClass.prototype, name) || baseClass2.isFormBase && name !== "constructor") {
        derivedClass.prototype["".concat(name)] = baseClass2.prototype["".concat(name)];
      }
    });
  });
}
function ComponentMixins(baseClass) {
  return function(derivedClass) {
    applyMixins(derivedClass, baseClass);
  };
}
function registerEvents(eventList, obj, direct) {
  var ngEventsEmitter = {};
  if (eventList && eventList.length) {
    for (var _i = 0, eventList_1 = eventList; _i < eventList_1.length; _i++) {
      var event_1 = eventList_1[_i];
      if (direct === true) {
        obj.propCollection["".concat(event_1)] = new EventEmitter(false);
        obj["".concat(event_1)] = obj.propCollection["".concat(event_1)];
      } else {
        ngEventsEmitter["".concat(event_1)] = new EventEmitter(false);
      }
    }
    if (direct !== true) {
      obj.setProperties(ngEventsEmitter, true);
    }
  }
}
function clearTemplate(_this, templateNames, index) {
  var _a;
  var regTemplates = Object.keys(_this.registeredTemplate);
  if (regTemplates.length) {
    var regProperties = templateNames && templateNames.filter(function(val) {
      return /\./g.test(val) ? false : true;
    });
    var tabaccordionTemp = /tab|accordion|toolbar/.test((_a = _this.getModuleName) === null || _a === void 0 ? void 0 : _a.call(_this));
    for (var _i = 0, _b = regProperties && regProperties || regTemplates; _i < _b.length; _i++) {
      var registeredTemplate = _b[_i];
      if (index && index.length) {
        for (var e = 0; e < index.length; e++) {
          if (tabaccordionTemp) {
            for (var m = 0; m < _this.registeredTemplate["".concat(registeredTemplate)].length; m++) {
              var value = _this.registeredTemplate["".concat(registeredTemplate)][parseInt(m.toString(), 10)];
              if (value && value === index["".concat(e)]) {
                value.destroy();
                _this.registeredTemplate["".concat(registeredTemplate)].splice(m, 1);
              }
            }
          } else {
            for (var m = 0; m < _this.registeredTemplate.template.length; m++) {
              var value = _this.registeredTemplate.template[parseInt(m.toString(), 10)].rootNodes[0];
              if (value === index["".concat(e)]) {
                var rt = _this.registeredTemplate["".concat(registeredTemplate)];
                rt[parseInt(m.toString(), 10)].destroy();
              }
            }
          }
        }
      } else {
        if (_this.registeredTemplate["".concat(registeredTemplate)]) {
          for (var _c = 0, _d = _this.registeredTemplate["".concat(registeredTemplate)]; _c < _d.length; _c++) {
            var rt = _d[_c];
            if (!rt.destroyed) {
              if (rt._view) {
                var pNode = rt._view.renderer.parentNode(rt.rootNodes[0]);
                if (!isNullOrUndefined(pNode)) {
                  for (var m = 0; m < rt.rootNodes.length; m++) {
                    pNode.appendChild(rt.rootNodes[parseInt(m.toString(), 10)]);
                  }
                }
              }
              rt.destroy();
            }
          }
        }
      }
      if (!tabaccordionTemp || !index) {
        delete _this.registeredTemplate["".concat(registeredTemplate)];
      }
    }
  }
  var _loop_1 = function(tagObject2) {
    if (tagObject2.instance) {
      tagObject2.instance.clearTemplate(templateNames && templateNames.filter(function(val) {
        var regExp = RegExp;
        return new regExp(tagObject2.name).test(val) ? true : false;
      }));
    }
  };
  for (var _e = 0, _f = _this.tagObjects; _e < _f.length; _e++) {
    var tagObject = _f[_e];
    _loop_1(tagObject);
  }
}
function setValue2(nameSpace, value, object) {
  var keys = nameSpace.replace(/\[/g, ".").replace(/\]/g, "").split(".");
  var fromObj = object || {};
  for (var i = 0; i < keys.length; i++) {
    var key = keys[parseInt(i.toString(), 10)];
    if (i + 1 === keys.length) {
      fromObj["".concat(key)] = value === void 0 ? {} : value;
    } else if (fromObj["".concat(key)] === void 0) {
      fromObj["".concat(key)] = {};
    }
    fromObj = fromObj["".concat(key)];
  }
  return fromObj;
}

// node_modules/@syncfusion/ej2-angular-base/src/complex-array-base.js
var refRegex = /Ref$/;
var ComplexBase = (
  /** @class */
  function() {
    function ComplexBase2() {
      this.hasChanges = false;
      this.propCollection = {};
      this.dataSource = {};
      this.tags = [];
      this.tagObjects = [];
    }
    ComplexBase2.prototype.ngOnInit = function() {
      this.registeredTemplate = {};
      for (var _i = 0, _a = this.tags; _i < _a.length; _i++) {
        var tag = _a[_i];
        var objInstance = getValue("child" + tag.substring(0, 1).toUpperCase() + tag.substring(1), this);
        if (objInstance) {
          this.tagObjects.push({
            instance: objInstance,
            name: tag
          });
        }
      }
      var templateProperties = Object.keys(this);
      for (var i = 0; i < templateProperties.length; i++) {
        var tempProp = getValue(templateProperties[parseInt(i.toString(), 10)], this);
        if (typeof tempProp === "object" && tempProp && tempProp.elementRef) {
          if (!getValue(templateProperties[parseInt(i.toString(), 10)].indexOf("Ref") !== -1 ? templateProperties[parseInt(i.toString(), 10)] : templateProperties[parseInt(i.toString(), 10)] + "Ref", this)) {
            setValue(templateProperties[parseInt(i.toString(), 10)].indexOf("Ref") !== -1 ? templateProperties[parseInt(i.toString(), 10)] : templateProperties[parseInt(i.toString(), 10)] + "Ref", tempProp, this);
          }
          if (getValue("viewContainerRef", this) && !getValue("_viewContainerRef", tempProp.elementRef.nativeElement) && !getValue("propName", tempProp.elementRef.nativeElement)) {
            setValue("_viewContainerRef", getValue("viewContainerRef", this), tempProp.elementRef.nativeElement);
            setValue("propName", templateProperties[parseInt(i.toString(), 10)].replace("Ref", ""), tempProp.elementRef.nativeElement);
          }
        }
      }
      templateProperties = Object.keys(this);
      templateProperties = templateProperties.filter(function(val) {
        return /Ref$/i.test(val);
      });
      for (var _b = 0, templateProperties_1 = templateProperties; _b < templateProperties_1.length; _b++) {
        var tempName = templateProperties_1[_b];
        var propName = tempName.replace("Ref", "");
        setValue(propName.replace("_", "."), getValue(propName, this), this.propCollection);
      }
      var propList = Object.keys(this);
      if (this.directivePropList) {
        for (var k = 0; k < this.directivePropList.length; k++) {
          var dirPropName = this.directivePropList[parseInt(k.toString(), 10)];
          if (propList.indexOf(dirPropName) !== -1 && (getValue(dirPropName, this) === false || getValue(dirPropName, this))) {
            setValue(dirPropName, getValue(dirPropName, this), this.propCollection);
          }
        }
        this.hasChanges = true;
      }
      this.isInitChanges = true;
    };
    ComplexBase2.prototype.registerEvents = function(eventList) {
      registerEvents(eventList, this, true);
    };
    ComplexBase2.prototype.ngOnChanges = function(changes) {
      for (var _i = 0, _a = Object.keys(changes); _i < _a.length; _i++) {
        var propName = _a[_i];
        var changedVal = changes["".concat(propName)];
        this.propCollection["".concat(propName)] = changedVal.currentValue;
      }
      this.isUpdated = false;
      this.hasChanges = true;
    };
    ComplexBase2.prototype.clearTemplate = function(templateNames) {
      clearTemplate(this, templateNames);
    };
    ComplexBase2.prototype.getProperties = function() {
      for (var _i = 0, _a = this.tagObjects; _i < _a.length; _i++) {
        var tagObject = _a[_i];
        this.propCollection[tagObject.name] = tagObject.instance.getProperties();
      }
      return this.propCollection;
    };
    ComplexBase2.prototype.isChanged = function() {
      var result = this.hasChanges;
      if (!isNullOrUndefined(this.propCollection[this.property])) {
        var tempProps = this.propCollection[this.property];
        var props = Object.keys(tempProps[0]);
        for (var d = 0; d < props.length; d++) {
          if (!isNullOrUndefined(this.propCollection[props[parseInt(d.toString(), 10)]])) {
            var val = getValue(props[parseInt(d.toString(), 10)], this);
            var propVal = this.propCollection[this.property][0][props[parseInt(d.toString(), 10)]];
            if (!isNullOrUndefined(val) && this.propCollection[props[parseInt(d.toString(), 10)]] !== val && propVal !== val) {
              setValue(props[parseInt(d.toString(), 10)], val, this.propCollection[this.property][0]);
              setValue(props[parseInt(d.toString(), 10)], val, this.propCollection);
              this.hasChanges = true;
              this.isUpdated = false;
            }
          }
        }
      }
      for (var _i = 0, _a = this.tagObjects; _i < _a.length; _i++) {
        var item = _a[_i];
        result = result || item.instance.hasChanges;
      }
      return result || this.hasChanges;
    };
    ComplexBase2.prototype.ngAfterContentChecked = function() {
      this.hasChanges = this.isChanged();
      if (this.isInitChanges || this.hasChanges) {
        var templateProperties = Object.keys(this);
        templateProperties = templateProperties.filter(function(val) {
          return refRegex.test(val);
        });
        for (var _i = 0, templateProperties_2 = templateProperties; _i < templateProperties_2.length; _i++) {
          var tempName = templateProperties_2[_i];
          var propName = tempName.replace("Ref", "");
          setValue(propName.replace("_", "."), getValue(propName, this), this.propCollection);
        }
      }
    };
    ComplexBase2.prototype.ngAfterViewChecked = function() {
      if (this.isUpdated) {
        this.hasChanges = false;
      }
    };
    ComplexBase2.prototype.ngAfterViewInit = function() {
      this.isInitChanges = false;
    };
    ComplexBase2.prototype.ngOnDestroy = function() {
      this.directivePropList = [];
    };
    return ComplexBase2;
  }()
);
var ArrayBase = (
  /** @class */
  function() {
    function ArrayBase2(propertyName) {
      this.list = [];
      this.hasChanges = false;
      this.propertyName = propertyName;
    }
    ArrayBase2.prototype.ngOnInit = function() {
      this.isInitChanges = true;
    };
    ArrayBase2.prototype.ngAfterContentInit = function() {
      var _this = this;
      var index = 0;
      this.list = this.children.map(function(child) {
        child.dirIndex = index++;
        child.property = _this.propertyName;
        return child;
      });
      this.hasChanges = true;
    };
    ArrayBase2.prototype.getProperties = function() {
      var onlyProp = [];
      for (var _i = 0, _a = this.list; _i < _a.length; _i++) {
        var item = _a[_i];
        onlyProp.push(item.getProperties());
      }
      return onlyProp;
    };
    ArrayBase2.prototype.isChanged = function() {
      var _this = this;
      var result = false;
      var index = 0;
      var isSourceChanged = false;
      var childrenDataSource = this.children.map(function(child) {
        return child;
      });
      if (this.list.length === this.children.length) {
        for (var i = 0; i < this.list.length; i++) {
          if (this.list[parseInt(i.toString(), 10)].propCollection.dataSource) {
            if (this.list[parseInt(i.toString(), 10)].dataSource && this.list[parseInt(i.toString(), 10)].propCollection.dataSource !== this.list[parseInt(i.toString(), 10)].dataSource) {
              this.list[parseInt(i.toString(), 10)].propCollection.dataSource = this.list[parseInt(i.toString(), 10)].dataSource;
              this.list[parseInt(i.toString(), 10)].hasChanges = true;
            }
            if (this.list[parseInt(i.toString(), 10)].property !== "series") {
              isSourceChanged = JSON.stringify(this.list[parseInt(i.toString(), 10)].propCollection.dataSource) !== JSON.stringify(childrenDataSource[parseInt(i.toString(), 10)].propCollection.dataSource);
            }
          }
          isSourceChanged = this.list[parseInt(i.toString(), 10)].hasChanges !== childrenDataSource[parseInt(i.toString(), 10)].hasChanges;
        }
      }
      this.hasNewChildren = this.list.length !== this.children.length || isSourceChanged ? true : null;
      if (this.hasNewChildren) {
        this.list = this.children.map(function(child) {
          child.dirIndex = index++;
          child.property = _this.propertyName;
          return child;
        });
      }
      for (var _i = 0, _a = this.list; _i < _a.length; _i++) {
        var item = _a[_i];
        result = result || item.hasChanges;
      }
      return !!this.list.length && result;
    };
    ArrayBase2.prototype.clearTemplate = function(templateNames) {
      var _this = this;
      for (var _i = 0, _a = this.list; _i < _a.length; _i++) {
        var item = _a[_i];
        item.clearTemplate(templateNames && templateNames.map(function(val) {
          var regExp = RegExp;
          return new regExp(_this.propertyName).test(val) ? val.replace(_this.propertyName + ".", "") : val;
        }));
      }
    };
    ArrayBase2.prototype.ngAfterContentChecked = function() {
      this.hasChanges = this.isChanged();
      for (var i = 0; i < this.list.length; i++) {
        if (getValue("childColumns", this.list[parseInt(i.toString(), 10)]) && getValue("property", this.list[parseInt(i.toString(), 10)]) === "columns") {
          setValue("columns", getValue("childColumns", this.list[parseInt(i.toString(), 10)]).getProperties(), this.list[parseInt(i.toString(), 10)].propCollection);
        }
        this.list[parseInt(i.toString(), 10)].isUpdated = true;
      }
    };
    ArrayBase2.prototype.ngAfterViewInit = function() {
      this.isInitChanges = false;
    };
    ArrayBase2.prototype.ngOnDestroy = function() {
      this.list = [];
    };
    return ArrayBase2;
  }()
);

// node_modules/@syncfusion/ej2-angular-base/src/component-base.js
var ComponentBase = (
  /** @class */
  function() {
    function ComponentBase2() {
      this.isProtectedOnChange = true;
      this.isFormInit = true;
    }
    ComponentBase2.prototype.saveChanges = function(key, newValue, oldValue) {
      if (this.isProtectedOnChange) {
        return;
      }
      this.oldProperties["".concat(key)] = oldValue;
      this.changedProperties["".concat(key)] = newValue;
      this.finalUpdate();
      var changeTime = setTimeout(this.dataBind.bind(this));
      var clearUpdate = function() {
        clearTimeout(changeTime);
      };
      this.finalUpdate = clearUpdate;
    };
    ComponentBase2.prototype.ngOnInit = function(isTempRef) {
      var tempOnThis = isTempRef || this;
      tempOnThis.registeredTemplate = {};
      tempOnThis.ngBoundedEvents = {};
      tempOnThis.isAngular = true;
      tempOnThis.isFormInit = true;
      if (isTempRef) {
        this.tags = isTempRef.tags;
      }
      tempOnThis.tags = this.tags || [];
      tempOnThis.complexTemplate = this.complexTemplate || [];
      tempOnThis.tagObjects = [];
      tempOnThis.ngAttr = this.getAngularAttr(tempOnThis.element);
      tempOnThis.createElement = function(tagName, prop) {
        var ele = tempOnThis.srenderer ? tempOnThis.srenderer.createElement(tagName) : createElement(tagName);
        if (typeof prop === "undefined") {
          return ele;
        }
        ele.innerHTML = prop.innerHTML ? prop.innerHTML : "";
        if (prop.className !== void 0) {
          ele.className = prop.className;
        }
        if (prop.id !== void 0) {
          ele.id = prop.id;
        }
        if (prop.styles !== void 0) {
          ele.setAttribute("style", prop.styles);
        }
        if (tempOnThis.ngAttr !== void 0) {
          ele.setAttribute(tempOnThis.ngAttr, "");
        }
        if (prop.attrs !== void 0) {
          attributes(ele, prop.attrs);
        }
        return ele;
      };
      for (var _i = 0, _a = tempOnThis.tags; _i < _a.length; _i++) {
        var tag = _a[_i];
        var tagObject = {
          instance: getValue("child" + tag.substring(0, 1).toUpperCase() + tag.substring(1), tempOnThis),
          name: tag
        };
        tempOnThis.tagObjects.push(tagObject);
      }
      var complexTemplates = Object.keys(tempOnThis);
      for (var i = 0; i < complexTemplates.length; i++) {
        var compProp = getValue(complexTemplates[parseInt(i.toString(), 10)], tempOnThis);
        if (typeof compProp === "object" && compProp && compProp.elementRef) {
          if (typeof compProp === "object" && compProp && compProp.elementRef && complexTemplates[parseInt(i.toString(), 10)].indexOf("_") !== -1 && complexTemplates[parseInt(i.toString(), 10)].indexOf("Ref") === -1) {
            setValue(complexTemplates[parseInt(i.toString(), 10)] + "Ref", compProp, tempOnThis);
          }
          if (tempOnThis.viewContainerRef && !getValue("_viewContainerRef", compProp.elementRef.nativeElement) && !getValue("propName", compProp.elementRef.nativeElement)) {
            setValue("_viewContainerRef", tempOnThis.viewContainerRef, compProp.elementRef.nativeElement);
            setValue("propName", complexTemplates[parseInt(i.toString(), 10)].replace("Ref", ""), compProp.elementRef.nativeElement);
          }
        }
      }
      complexTemplates = Object.keys(tempOnThis);
      complexTemplates = complexTemplates.filter(function(val2) {
        return /Ref$/i.test(val2) && /_/i.test(val2);
      });
      for (var _b = 0, complexTemplates_1 = complexTemplates; _b < complexTemplates_1.length; _b++) {
        var tempName = complexTemplates_1[_b];
        var propName = tempName.replace("Ref", "");
        var val = {};
        setValue(propName.replace("_", "."), getValue(propName, tempOnThis), val);
        tempOnThis.setProperties(val, true);
      }
    };
    ComponentBase2.prototype.getAngularAttr = function(ele) {
      var attributes2 = ele.attributes;
      var length = attributes2.length;
      var ngAr;
      for (var i = 0; i < length; i++) {
        if (/_ngcontent/g.test(attributes2[parseInt(i.toString(), 10)].name)) {
          ngAr = attributes2[parseInt(i.toString(), 10)].name;
        }
      }
      return ngAr;
    };
    ComponentBase2.prototype.ngAfterViewInit = function(isTempRef) {
      var tempAfterViewThis = isTempRef || this;
      var regExp = /ejs-tab|ejs-accordion/g;
      if (regExp.test(tempAfterViewThis.ngEle.nativeElement.outerHTML)) {
        tempAfterViewThis.ngEle.nativeElement.style.visibility = "hidden";
      }
      var templateProperties = Object.keys(tempAfterViewThis);
      templateProperties = templateProperties.filter(function(val) {
        return /Ref$/i.test(val);
      });
      var ngtempRef = tempAfterViewThis.getModuleName() === "DocumentEditor";
      for (var _i = 0, templateProperties_1 = templateProperties; _i < templateProperties_1.length; _i++) {
        var tempName = templateProperties_1[_i];
        var propName = tempName.replace("Ref", "");
        setValue(propName.replace("_", "."), getValue(propName + "Ref", tempAfterViewThis), tempAfterViewThis);
      }
      var appendToComponent = function(tempAfterViewThis2) {
        if (typeof window !== "undefined" && tempAfterViewThis2.element) {
          tempAfterViewThis2.appendTo(tempAfterViewThis2.element);
          tempAfterViewThis2.ngEle.nativeElement.style.visibility = "";
        }
      };
      if (!ngtempRef && !tempAfterViewThis.getModuleName().includes("btn")) {
        setTimeout(function() {
          appendToComponent(tempAfterViewThis);
        });
      } else {
        appendToComponent(tempAfterViewThis);
      }
    };
    ComponentBase2.prototype.ngOnDestroy = function(isTempRef) {
      var tempOnDestroyThis = isTempRef || this;
      setTimeout(function() {
        if (typeof window !== "undefined" && tempOnDestroyThis.element.classList.contains("e-control")) {
          if (tempOnDestroyThis.ngOnFocus !== void 0 && tempOnDestroyThis.ngOnBlur !== void 0) {
            var ele = tempOnDestroyThis.inputElement || tempOnDestroyThis.element;
            ele.removeEventListener("focus", tempOnDestroyThis.ngOnFocusBound);
            ele.removeEventListener("blur", tempOnDestroyThis.ngOnBlurBound);
            tempOnDestroyThis.ngOnFocusBound = null;
            tempOnDestroyThis.ngOnBlurBound = null;
          }
          tempOnDestroyThis.destroy();
          tempOnDestroyThis.clearTemplate(null);
          setTimeout(function() {
            for (var _i = 0, _a = Object.keys(tempOnDestroyThis); _i < _a.length; _i++) {
              var key = _a[_i];
              var value = tempOnDestroyThis["".concat(key)];
              if (value && /object/.test(typeof value) && Object.keys(value).length !== 0) {
                if (/properties|changedProperties|childChangedProperties|oldProperties|moduleLoader/.test(key)) {
                  for (var _b = 0, _c = Object.keys(tempOnDestroyThis["".concat(key)]); _b < _c.length; _b++) {
                    var propKey = _c[_b];
                    var propValue = value["".concat(propKey)];
                    if (propValue && /object/.test(typeof propValue) && Object.keys(propValue).length !== 0 && (propValue.parent || propValue.parentObj)) {
                      tempOnDestroyThis["".concat(key)]["".concat(propKey)] = null;
                    }
                  }
                } else {
                  if (value.parent || value.parentObj) {
                    tempOnDestroyThis["".concat(key)] = null;
                  }
                }
              }
            }
          });
        }
      });
    };
    ComponentBase2.prototype.clearTemplate = function(templateNames, index) {
      clearTemplate(this, templateNames, index);
    };
    ComponentBase2.prototype.ngAfterContentChecked = function(isTempRef) {
      var tempAfterContentThis = isTempRef || this;
      for (var _i = 0, _a = tempAfterContentThis.tagObjects; _i < _a.length; _i++) {
        var tagObject = _a[_i];
        if (!isUndefined(tagObject.instance) && (tagObject.instance.isInitChanges || tagObject.instance.hasChanges || tagObject.instance.hasNewChildren)) {
          var propObj = {};
          if (tagObject.instance.isInitChanges) {
            var complexDirProps = void 0;
            var list = getValue("instance.list", tagObject);
            if (list && list.length) {
              complexDirProps = list[0].directivePropList;
            }
            var skip = true;
            if (tempAfterContentThis.getModuleName && tempAfterContentThis.getModuleName() === "gantt") {
              skip = false;
            }
            if (complexDirProps && skip && complexDirProps.indexOf(tagObject.instance.propertyName) === -1) {
              var compDirPropList = Object.keys(tagObject.instance.list[0].propCollection);
              for (var h = 0; h < tagObject.instance.list.length; h++) {
                tagObject.instance.list["".concat(h)].propCollection[tagObject.instance.propertyName] = [];
                var obj = {};
                for (var k = 0; k < compDirPropList.length; k++) {
                  var complexPropName = compDirPropList[parseInt(k.toString(), 10)];
                  obj["".concat(complexPropName)] = tagObject.instance.list["".concat(h)].propCollection["".concat(complexPropName)];
                }
                var _loop_1 = function(i2) {
                  var tag2 = tagObject.instance.list["".concat(h)].tags[parseInt(i2.toString(), 10)];
                  var childObj = getValue("child" + tag2.substring(0, 1).toUpperCase() + tag2.substring(1), tagObject.instance.list["".concat(h)]);
                  if (childObj) {
                    var innerchildObj = tagObject.instance.list["".concat(h)]["child" + tag2.substring(0, 1).toUpperCase() + tag2.substring(1)];
                    var updateChildTag_1 = function(innerchild) {
                      var innerLevelTag = [];
                      if (innerchild) {
                        for (var j = 0; j < innerchild.list.length; j++) {
                          var innerTag = innerchild.list[0].tags[0];
                          if (innerTag) {
                            var innerchildTag = getValue("child" + innerTag.substring(0, 1).toUpperCase() + innerTag.substring(1), innerchild.list[parseInt(j.toString(), 10)]);
                            if (innerchildTag) {
                              innerchild.list[parseInt(j.toString(), 10)].tagObjects.push({
                                instance: innerchildTag,
                                name: innerTag
                              });
                              innerLevelTag.push(innerchildTag);
                            }
                          }
                        }
                      }
                      if (innerLevelTag.length !== 0) {
                        for (var l = 0; l < innerLevelTag.length; l++) {
                          updateChildTag_1(innerLevelTag[parseInt(l.toString(), 10)]);
                        }
                      }
                    };
                    updateChildTag_1(innerchildObj);
                    tagObject.instance.list["".concat(h)].tagObjects.push({
                      instance: childObj,
                      name: tag2
                    });
                  }
                };
                for (var i = 0; i < tagObject.instance.list["".concat(h)].tags.length; i++) {
                  _loop_1(i);
                }
                tagObject.instance.list["".concat(h)].propCollection[tagObject.instance.propertyName].push(obj);
              }
            }
            propObj[tagObject.name] = tagObject.instance.getProperties();
            tempAfterContentThis.setProperties(propObj, tagObject.instance.isInitChanges);
          } else {
            var hasDiffLength = false;
            if (tempAfterContentThis[tagObject.name].length !== tagObject.instance.list.length || /diagram|DashboardLayout/.test(tempAfterContentThis.getModuleName())) {
              tempAfterContentThis[tagObject.name] = tagObject.instance.list;
              hasDiffLength = true;
            }
            for (var _b = 0, _c = tagObject.instance.list; _b < _c.length; _b++) {
              var list = _c[_b];
              if (list.tags) {
                for (var _d = 0, _e = list.tags; _d < _e.length; _d++) {
                  var tag = _e[_d];
                  var innerChild = getValue("child" + tag.substring(0, 1).toUpperCase() + tag.substring(1), list);
                  if (innerChild) {
                    list.tagObjects.push({
                      instance: innerChild,
                      name: tag
                    });
                  }
                }
              }
              var curIndex = tagObject.instance.list.indexOf(list);
              var curChild = getValue(tagObject.name, tempAfterContentThis)["".concat(curIndex)];
              var complexTemplates = Object.keys(curChild);
              complexTemplates = complexTemplates.filter(function(val) {
                return /Ref$/i.test(val);
              });
              if (curChild.properties && Object.keys(curChild.properties).length !== 0) {
                for (var _f = 0, complexTemplates_2 = complexTemplates; _f < complexTemplates_2.length; _f++) {
                  var complexPropName = complexTemplates_2[_f];
                  complexPropName = complexPropName.replace(/Ref/, "");
                  curChild.properties["".concat(complexPropName)] = !curChild.properties["".concat(complexPropName)] ? curChild.propCollection["".concat(complexPropName)] : curChild.properties["".concat(complexPropName)];
                }
              }
              if (!isUndefined(curChild) && !isUndefined(curChild.setProperties)) {
                if (/diagram|DashboardLayout/.test(tempAfterContentThis.getModuleName())) {
                  curChild.setProperties(list.getProperties(), true);
                } else {
                  curChild.setProperties(list.getProperties());
                }
              }
              list.isUpdated = true;
            }
            if (/grid/.test(tempAfterContentThis.getModuleName()) && hasDiffLength || /chart/.test(tempAfterContentThis.getModuleName())) {
              propObj[tagObject.name] = tagObject.instance.getProperties();
              tempAfterContentThis.setProperties(propObj, tagObject.instance.isInitChanges);
            }
          }
        }
      }
    };
    ComponentBase2.prototype.registerEvents = function(eventList) {
      registerEvents(eventList, this);
    };
    ComponentBase2.prototype.twoWaySetter = function(newVal, prop) {
      var oldVal = getValue(prop, this.properties);
      if (oldVal === newVal) {
        return;
      }
      this.saveChanges(prop, newVal, oldVal);
      setValue(prop, isNullOrUndefined(newVal) ? null : newVal, this.properties);
      getValue(prop + "Change", this).emit(newVal);
    };
    ComponentBase2.prototype.addTwoWay = function(propList) {
      var _this = this;
      var _loop_2 = function(prop2) {
        getValue(prop2, this_1);
        Object.defineProperty(this_1, prop2, {
          get: function() {
            return getValue(prop2, _this.properties);
          },
          set: function(newVal) {
            return _this.twoWaySetter(newVal, prop2);
          }
        });
        setValue(prop2 + "Change", new EventEmitter(), this_1);
      };
      var this_1 = this;
      for (var _i = 0, propList_1 = propList; _i < propList_1.length; _i++) {
        var prop = propList_1[_i];
        _loop_2(prop);
      }
    };
    ComponentBase2.prototype.addEventListener = function(eventName, handler) {
      var eventObj = getValue(eventName, this);
      if (!isUndefined(eventObj)) {
        if (!this.ngBoundedEvents["".concat(eventName)]) {
          this.ngBoundedEvents["".concat(eventName)] = /* @__PURE__ */ new Map();
        }
        this.ngBoundedEvents["".concat(eventName)].set(handler, eventObj.subscribe(handler));
      }
    };
    ComponentBase2.prototype.removeEventListener = function(eventName, handler) {
      var eventObj = getValue(eventName, this);
      if (!isUndefined(eventObj)) {
        this.ngBoundedEvents["".concat(eventName)].get(handler).unsubscribe();
      }
    };
    ComponentBase2.prototype.trigger = function(eventName, eventArgs, success) {
      var eventObj = getValue(eventName, this);
      var prevDetection = this.isProtectedOnChange;
      this.isProtectedOnChange = false;
      if (eventArgs) {
        eventArgs.name = eventName;
      }
      if (!isUndefined(eventObj)) {
        eventObj.next(eventArgs);
      }
      var localEventObj = getValue("local" + eventName.charAt(0).toUpperCase() + eventName.slice(1), this);
      if (!isUndefined(localEventObj)) {
        localEventObj.call(this, eventArgs);
      }
      this.isProtectedOnChange = prevDetection;
      if (success) {
        this.preventChange = this.isPreventChange;
        success.call(this, eventArgs);
      }
      this.isPreventChange = false;
    };
    return ComponentBase2;
  }()
);

// node_modules/@syncfusion/ej2-angular-base/src/template.js
var stringCompiler = getTemplateEngine();
function compile(templateEle, helper) {
  if (typeof templateEle === "string" || typeof templateEle === "function" && templateEle.prototype && templateEle.prototype.CSPTemplate) {
    return stringCompiler(templateEle, helper);
  } else {
    var contRef_1 = templateEle.elementRef.nativeElement._viewContainerRef;
    var pName_1 = templateEle.elementRef.nativeElement.propName;
    return function(data, component, propName) {
      var context = {
        $implicit: data
      };
      var conRef = contRef_1 ? contRef_1 : component.viewContainerRef;
      var viewRef = conRef.createEmbeddedView(templateEle, context);
      if (/EJS-MENTION|EJS-DROPDOWNLIST/.test(getValue("currentInstance.element.nodeName", conRef)) || /E-TABITEM/.test(getValue("element.nativeElement.nodeName", conRef)) && getValue("currentInstance.headerTemplateRef", conRef)) {
        viewRef.detectChanges();
      } else {
        viewRef.markForCheck();
      }
      var viewCollection = component && component.registeredTemplate ? component.registeredTemplate : getValue("currentInstance.registeredTemplate", conRef);
      propName = propName && component.registeredTemplate ? propName : pName_1;
      if (typeof viewCollection["".concat(propName)] === "undefined") {
        viewCollection["".concat(propName)] = [];
      }
      viewCollection["".concat(propName)].push(viewRef);
      return viewRef.rootNodes;
    };
  }
}
function Template(defaultValue) {
  return function(target, key) {
    var propertyDescriptor = {
      set: setter(key),
      get: getter(key, defaultValue),
      enumerable: true,
      configurable: true
    };
    Object.defineProperty(target, key, propertyDescriptor);
  };
}
function setter(key) {
  return function(val) {
    if (val === void 0) {
      return;
    }
    setValue(key + "Ref", val, this);
    if (typeof val !== "string") {
      val.elementRef.nativeElement._viewContainerRef = this.viewContainerRef;
      val.elementRef.nativeElement.propName = key;
    } else {
      if (this.saveChanges) {
        this.saveChanges(key, val, void 0);
        this.dataBind();
      }
    }
  };
}
function getter(key, defaultValue) {
  return function() {
    return getValue(key + "Ref", this) || defaultValue;
  };
}
setTemplateEngine({
  compile
});

// node_modules/@syncfusion/ej2-angular-base/src/form-base.js
var FormBase = (
  /** @class */
  function() {
    function FormBase2() {
    }
    FormBase2.prototype.propagateChange = function(_) {
      return;
    };
    FormBase2.prototype.propagateTouch = function() {
      return;
    };
    FormBase2.prototype.localChange = function(e) {
      var value = e.checked === void 0 ? e.value : e.checked;
      this.objCheck = isObject(value);
      if (this.isUpdated === true) {
        this.angularValue = this.oldValue;
      }
      if (this.objCheck === true) {
        this.duplicateValue = JSON.stringify(value);
        this.duplicateAngularValue = JSON.stringify(this.angularValue);
        if (this.duplicateValue !== this.duplicateAngularValue && this.propagateChange !== void 0 && value !== void 0) {
          this.propagateChange(value);
          this.angularValue = value;
        }
      } else {
        if (value !== this.angularValue && this.propagateChange !== void 0 && value !== void 0) {
          if (value !== "" && value !== null) {
            this.propagateChange(value);
            this.angularValue = value;
          } else {
            var optionalValue = value;
            this.propagateChange(optionalValue);
            this.angularValue = value;
          }
        }
      }
      this.cdr.markForCheck();
    };
    FormBase2.prototype.registerOnChange = function(registerFunction) {
      this.propagateChange = registerFunction;
    };
    FormBase2.prototype.registerOnTouched = function(registerFunction) {
      this.propagateTouch = registerFunction;
    };
    FormBase2.prototype.twoWaySetter = function(newVal, prop) {
      var oldVal = this.oldValue || getValue(prop, this.properties);
      var ele = this.inputElement || this.element;
      if (ele && oldVal === newVal && this.value === newVal && (ele.value === void 0 || ele.value === "")) {
        return;
      }
      this.saveChanges(prop, newVal, oldVal);
      setValue(prop, isNullOrUndefined(newVal) ? null : newVal, this.properties);
      getValue(prop + "Change", this).emit(newVal);
    };
    FormBase2.prototype.ngAfterViewInit = function(isTempRef) {
      var tempFormAfterViewThis = isTempRef || this;
      tempFormAfterViewThis.ngOnBlurBound = this.ngOnBlur.bind(this);
      tempFormAfterViewThis.ngOnFocusBound = this.ngOnFocus.bind(this);
      if (typeof window !== "undefined") {
        if (tempFormAfterViewThis.getModuleName().includes("dropdowntree")) {
          setTimeout(function() {
            tempFormAfterViewThis.appendTo(tempFormAfterViewThis.element);
          });
        } else {
          tempFormAfterViewThis.appendTo(tempFormAfterViewThis.element);
        }
        var ele = tempFormAfterViewThis.inputElement || tempFormAfterViewThis.element;
        ele.addEventListener("focus", tempFormAfterViewThis.ngOnFocusBound);
        ele.addEventListener("blur", tempFormAfterViewThis.ngOnBlurBound);
      }
      this.isFormInit = false;
    };
    FormBase2.prototype.setDisabledState = function(disabled) {
      this.enabled = !disabled;
      this.disabled = disabled;
    };
    FormBase2.prototype.writeValue = function(value) {
      var regExp = /ejs-radiobutton/g;
      if (this.checked === void 0) {
        this.value = value;
      } else {
        if (this.ngEle) {
          if (typeof value === "boolean") {
            if (regExp.test(this.ngEle.nativeElement.outerHTML)) {
              this.checked = value === this.value;
            } else {
              this.checked = value;
            }
          } else {
            this.checked = value === this.value;
          }
        }
      }
      this.angularValue = value;
      this.isUpdated = true;
      this.preventChange = this.isFormInit ? false : true;
      this.cdr.markForCheck();
      if (value === null) {
        return;
      }
    };
    FormBase2.prototype.ngOnFocus = function(e) {
      if (this.skipFromEvent !== true) {
        this.focus.emit(e);
      }
      this.cdr.markForCheck();
    };
    FormBase2.prototype.ngOnBlur = function(e) {
      this.propagateTouch();
      if (this.skipFromEvent !== true) {
        this.blur.emit(e);
      }
      this.cdr.markForCheck();
    };
    FormBase2.isFormBase = true;
    return FormBase2;
  }()
);

export {
  ComponentMixins,
  setValue2 as setValue,
  ComplexBase,
  ArrayBase,
  ComponentBase,
  Template
};
//# sourceMappingURL=chunk-CDRQPQ4F.js.map
