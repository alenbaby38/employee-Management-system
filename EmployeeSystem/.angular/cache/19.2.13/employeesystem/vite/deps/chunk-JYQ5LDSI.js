import {
  Animation,
  Browser,
  ChildProperty,
  Complex,
  Component,
  Event,
  NotifyPropertyChanges,
  Property,
  animationMode,
  compile,
  createElement,
  extend,
  isBlazor,
  isNullOrUndefined,
  merge,
  remove,
  resetBlazorTemplate,
  updateBlazorTemplate
} from "./chunk-J6KMUI6T.js";

// node_modules/@syncfusion/ej2-svg-base/src/svg-render/svg-renderer.js
var SvgRenderer = (
  /** @class */
  function() {
    function SvgRenderer2(rootID) {
      this.svgLink = "http://www.w3.org/2000/svg";
      this.rootId = rootID;
    }
    SvgRenderer2.prototype.getOptionValue = function(options, key) {
      return options[key];
    };
    SvgRenderer2.prototype.createSvg = function(options) {
      if (isNullOrUndefined(options.id)) {
        options.id = this.rootId + "_svg";
      }
      this.svgObj = document.getElementById(options.id);
      if (isNullOrUndefined(document.getElementById(options.id))) {
        this.svgObj = document.createElementNS(this.svgLink, "svg");
      }
      this.svgObj = this.setElementAttributes(options, this.svgObj);
      this.setSVGSize(options.width, options.height);
      return this.svgObj;
    };
    SvgRenderer2.prototype.setSVGSize = function(width, height) {
      var element = document.getElementById(this.rootId);
      var size = !isNullOrUndefined(element) ? element.getBoundingClientRect() : null;
      if (isNullOrUndefined(this.width) || this.width <= 0) {
        this.svgObj.setAttribute("width", width ? width.toString() : size.width.toString());
      } else {
        this.svgObj.setAttribute("width", this.width.toString());
      }
      if (isNullOrUndefined(this.height) || this.height <= 0) {
        this.svgObj.setAttribute("height", height ? height.toString() : "450");
      } else {
        this.svgObj.setAttribute("height", this.height.toString());
      }
    };
    SvgRenderer2.prototype.drawPath = function(options) {
      var path = document.getElementById(options.id);
      if (path === null) {
        path = document.createElementNS(this.svgLink, "path");
      }
      path = this.setElementAttributes(options, path);
      return path;
    };
    SvgRenderer2.prototype.drawLine = function(options) {
      var line = document.getElementById(options.id);
      if (line === null) {
        line = document.createElementNS(this.svgLink, "line");
      }
      line = this.setElementAttributes(options, line);
      return line;
    };
    SvgRenderer2.prototype.drawRectangle = function(options) {
      var rectangle = document.getElementById(options.id);
      if (rectangle === null) {
        rectangle = document.createElementNS(this.svgLink, "rect");
      }
      rectangle = this.setElementAttributes(options, rectangle);
      return rectangle;
    };
    SvgRenderer2.prototype.drawCircle = function(options) {
      var circle = document.getElementById(options.id);
      if (circle === null) {
        circle = document.createElementNS(this.svgLink, "circle");
      }
      circle = this.setElementAttributes(options, circle);
      return circle;
    };
    SvgRenderer2.prototype.drawPolyline = function(options) {
      var polyline = document.getElementById(options.id);
      if (polyline === null) {
        polyline = document.createElementNS(this.svgLink, "polyline");
      }
      polyline = this.setElementAttributes(options, polyline);
      return polyline;
    };
    SvgRenderer2.prototype.drawEllipse = function(options) {
      var ellipse = document.getElementById(options.id);
      if (ellipse === null) {
        ellipse = document.createElementNS(this.svgLink, "ellipse");
      }
      ellipse = this.setElementAttributes(options, ellipse);
      return ellipse;
    };
    SvgRenderer2.prototype.drawPolygon = function(options) {
      var polygon = document.getElementById(options.id);
      if (polygon === null) {
        polygon = document.createElementNS(this.svgLink, "polygon");
      }
      polygon = this.setElementAttributes(options, polygon);
      return polygon;
    };
    SvgRenderer2.prototype.drawImage = function(options) {
      var img = document.createElementNS(this.svgLink, "image");
      img.setAttributeNS(null, "height", options.height.toString());
      img.setAttributeNS(null, "width", options.width.toString());
      img.setAttributeNS("http://www.w3.org/1999/xlink", "href", options.href);
      img.setAttributeNS(null, "x", options.x.toString());
      img.setAttributeNS(null, "y", options.y.toString());
      img.setAttributeNS(null, "id", options.id);
      img.setAttributeNS(null, "visibility", options.visibility);
      if (!isNullOrUndefined(this.getOptionValue(options, "clip-path"))) {
        img.setAttributeNS(null, "clip-path", this.getOptionValue(options, "clip-path"));
      }
      if (!isNullOrUndefined(options.preserveAspectRatio)) {
        img.setAttributeNS(null, "preserveAspectRatio", options.preserveAspectRatio);
      }
      return img;
    };
    SvgRenderer2.prototype.createText = function(options, label) {
      var text = document.createElementNS(this.svgLink, "text");
      text = this.setElementAttributes(options, text);
      if (!isNullOrUndefined(label)) {
        text.textContent = label;
      }
      return text;
    };
    SvgRenderer2.prototype.createTSpan = function(options, label) {
      var tSpan = document.createElementNS(this.svgLink, "tspan");
      tSpan = this.setElementAttributes(options, tSpan);
      if (!isNullOrUndefined(label)) {
        tSpan.textContent = label;
      }
      return tSpan;
    };
    SvgRenderer2.prototype.createTitle = function(text) {
      var title = document.createElementNS(this.svgLink, "title");
      title.textContent = text;
      return title;
    };
    SvgRenderer2.prototype.createDefs = function() {
      var defs = document.createElementNS(this.svgLink, "defs");
      return defs;
    };
    SvgRenderer2.prototype.createClipPath = function(options) {
      var clipPath = document.createElementNS(this.svgLink, "clipPath");
      clipPath = this.setElementAttributes(options, clipPath);
      return clipPath;
    };
    SvgRenderer2.prototype.createForeignObject = function(options) {
      var foreignObject = document.createElementNS(this.svgLink, "foreignObject");
      foreignObject = this.setElementAttributes(options, foreignObject);
      return foreignObject;
    };
    SvgRenderer2.prototype.createGroup = function(options) {
      var group = document.createElementNS(this.svgLink, "g");
      group = this.setElementAttributes(options, group);
      return group;
    };
    SvgRenderer2.prototype.createPattern = function(options, element) {
      var pattern = document.createElementNS(this.svgLink, element);
      pattern = this.setElementAttributes(options, pattern);
      return pattern;
    };
    SvgRenderer2.prototype.createRadialGradient = function(colors, name, options) {
      var colorName;
      if (!isNullOrUndefined(colors[0].colorStop)) {
        var newOptions = {
          "id": this.rootId + "_" + name + "radialGradient",
          "cx": options.cx + "%",
          "cy": options.cy + "%",
          "r": options.r + "%",
          "fx": options.fx + "%",
          "fy": options.fy + "%"
        };
        this.drawGradient("radialGradient", newOptions, colors);
        colorName = "url(#" + this.rootId + "_" + name + "radialGradient)";
      } else {
        colorName = colors[0].color.toString();
      }
      return colorName;
    };
    SvgRenderer2.prototype.createLinearGradient = function(colors, name, options) {
      var colorName;
      if (!isNullOrUndefined(colors[0].colorStop)) {
        var newOptions = {
          "id": this.rootId + "_" + name + "linearGradient",
          "x1": options.x1 + "%",
          "y1": options.y1 + "%",
          "x2": options.x2 + "%",
          "y2": options.y2 + "%"
        };
        this.drawGradient("linearGradient", newOptions, colors);
        colorName = "url(#" + this.rootId + "_" + name + "linearGradient)";
      } else {
        colorName = colors[0].color.toString();
      }
      return colorName;
    };
    SvgRenderer2.prototype.drawGradient = function(gradientType, options, colors) {
      var defs = this.createDefs();
      var gradient = document.createElementNS(this.svgLink, gradientType);
      gradient = this.setElementAttributes(options, gradient);
      for (var i = 0; i < colors.length; i++) {
        var stop_1 = document.createElementNS(this.svgLink, "stop");
        stop_1.setAttribute("offset", colors[i].colorStop);
        stop_1.setAttribute("stop-color", colors[i].color);
        stop_1.setAttribute("stop-opacity", colors[i].opacity ? colors[i].opacity : "1");
        if (!isNullOrUndefined(colors[i].style)) {
          stop_1.style.cssText = colors[i].style;
        }
        gradient.appendChild(stop_1);
      }
      defs.appendChild(gradient);
      return defs;
    };
    SvgRenderer2.prototype.drawClipPath = function(options) {
      var defs = this.createDefs();
      var clipPath = this.createClipPath({
        "id": options.id
      });
      options.id = options.id + "_Rect";
      var rect = this.drawRectangle(options);
      clipPath.appendChild(rect);
      defs.appendChild(clipPath);
      return defs;
    };
    SvgRenderer2.prototype.drawCircularClipPath = function(options) {
      var defs = this.createDefs();
      var clipPath = this.createClipPath({
        "id": options.id
      });
      options.id = options.id + "_Circle";
      var circle = this.drawCircle(options);
      clipPath.appendChild(circle);
      defs.appendChild(clipPath);
      return defs;
    };
    SvgRenderer2.prototype.setElementAttributes = function(options, element) {
      var keys = Object.keys(options);
      for (var i = 0; i < keys.length; i++) {
        if (keys[i] === "style") {
          element.style.cssText = options[keys[i]];
        } else {
          element.setAttribute(keys[i], options[keys[i]]);
        }
      }
      return element;
    };
    SvgRenderer2.prototype.createCanvas = function() {
      return null;
    };
    return SvgRenderer2;
  }()
);

// node_modules/@syncfusion/ej2-svg-base/src/svg-render/canvas-renderer.js
var CanvasRenderer = (
  /** @class */
  function() {
    function CanvasRenderer2(rootID) {
      this.rootId = rootID;
    }
    CanvasRenderer2.prototype.getOptionValue = function(options, key) {
      return options[key];
    };
    CanvasRenderer2.prototype.createCanvas = function(options) {
      var canvasObj = document.createElement("canvas");
      canvasObj.setAttribute("id", this.rootId + "_canvas");
      this.ctx = canvasObj.getContext("2d");
      this.canvasObj = canvasObj;
      this.setCanvasSize(options.width, options.height);
      return this.canvasObj;
    };
    CanvasRenderer2.prototype.setCanvasSize = function(width, height) {
      var element = document.getElementById(this.rootId);
      var size = !isNullOrUndefined(element) ? element.getBoundingClientRect() : null;
      if (isNullOrUndefined(this.width)) {
        this.canvasObj.setAttribute("width", width ? width.toString() : size.width.toString());
      } else {
        this.canvasObj.setAttribute("width", this.width.toString());
      }
      if (isNullOrUndefined(this.height)) {
        this.canvasObj.setAttribute("height", height ? height.toString() : "450");
      } else {
        this.canvasObj.setAttribute("height", this.height.toString());
      }
    };
    CanvasRenderer2.prototype.setAttributes = function(options) {
      this.ctx.lineWidth = this.getOptionValue(options, "stroke-width");
      var dashArray = this.getOptionValue(options, "stroke-dasharray");
      if (!isNullOrUndefined(dashArray)) {
        var dashArrayString = dashArray.split(",");
        this.ctx.setLineDash([parseInt(dashArrayString[0], 10), parseInt(dashArrayString[1], 10)]);
      }
      this.ctx.strokeStyle = this.getOptionValue(options, "stroke");
    };
    CanvasRenderer2.prototype.drawLine = function(options) {
      this.ctx.save();
      this.ctx.beginPath();
      this.ctx.lineWidth = this.getOptionValue(options, "stroke-width");
      this.ctx.strokeStyle = options.stroke;
      this.ctx.moveTo(options.x1, options.y1);
      this.ctx.lineTo(options.x2, options.y2);
      this.ctx.stroke();
      this.ctx.restore();
    };
    CanvasRenderer2.prototype.drawRectangle = function(options, canvasTranslate) {
      var canvasCtx = this.ctx;
      var cornerRadius = options.rx;
      this.ctx.save();
      this.ctx.beginPath();
      if (canvasTranslate) {
        this.ctx.translate(canvasTranslate[0], canvasTranslate[1]);
      }
      this.ctx.globalAlpha = this.getOptionValue(options, "opacity");
      this.setAttributes(options);
      this.ctx.rect(options.x, options.y, options.width, options.height);
      if (cornerRadius !== null && cornerRadius >= 0) {
        this.drawCornerRadius(options);
      } else {
        if (options.fill === "none") {
          options.fill = "transparent";
        }
        this.ctx.fillStyle = options.fill;
        this.ctx.fillRect(options.x, options.y, options.width, options.height);
        this.ctx.stroke();
      }
      this.ctx.restore();
      this.ctx = canvasCtx;
      return this.canvasObj;
    };
    CanvasRenderer2.prototype.drawCornerRadius = function(options) {
      var cornerRadius = options.rx;
      var x = options.x;
      var y = options.y;
      var width = options.width;
      var height = options.height;
      if (options.fill === "none") {
        options.fill = "transparent";
      }
      this.ctx.fillStyle = options.fill;
      if (width < 2 * cornerRadius) {
        cornerRadius = width / 2;
      }
      if (height < 2 * cornerRadius) {
        cornerRadius = height / 2;
      }
      this.ctx.beginPath();
      this.ctx.moveTo(x + width - cornerRadius, y);
      this.ctx.arcTo(x + width, y, x + width, y + height, cornerRadius);
      this.ctx.arcTo(x + width, y + height, x, y + height, cornerRadius);
      this.ctx.arcTo(x, y + height, x, y, cornerRadius);
      this.ctx.arcTo(x, y, x + width, y, cornerRadius);
      this.ctx.closePath();
      this.ctx.fill();
      this.ctx.stroke();
    };
    CanvasRenderer2.prototype.drawPath = function(options, canvasTranslate) {
      var path = options.d;
      var dataSplit = path.split(" ");
      var borderWidth = this.getOptionValue(options, "stroke-width");
      var canvasCtx = this.ctx;
      var flag = true;
      this.ctx.save();
      this.ctx.beginPath();
      if (canvasTranslate) {
        this.ctx.translate(canvasTranslate[0], canvasTranslate[1]);
      }
      this.ctx.globalAlpha = options.opacity ? options.opacity : this.getOptionValue(options, "fill-opacity");
      this.setAttributes(options);
      for (var i = 0; i < dataSplit.length; i = i + 3) {
        var x1 = parseFloat(dataSplit[i + 1]);
        var y1 = parseFloat(dataSplit[i + 2]);
        switch (dataSplit[i]) {
          case "M":
            if (!options.innerR && !options.cx) {
              this.ctx.moveTo(x1, y1);
            }
            break;
          case "L":
            if (!options.innerR) {
              this.ctx.lineTo(x1, y1);
            }
            break;
          case "Q":
            var q1 = parseFloat(dataSplit[i + 3]);
            var q2 = parseFloat(dataSplit[i + 4]);
            this.ctx.quadraticCurveTo(x1, y1, q1, q2);
            i = i + 2;
            break;
          case "C":
            var c1 = parseFloat(dataSplit[i + 3]);
            var c2 = parseFloat(dataSplit[i + 4]);
            var c3 = parseFloat(dataSplit[i + 5]);
            var c4 = parseFloat(dataSplit[i + 6]);
            this.ctx.bezierCurveTo(x1, y1, c1, c2, c3, c4);
            i = i + 4;
            break;
          case "A":
            if (!options.innerR) {
              if (options.cx) {
                this.ctx.arc(options.cx, options.cy, options.radius, 0, 2 * Math.PI, options.counterClockWise);
              } else {
                this.ctx.moveTo(options.x, options.y);
                this.ctx.arc(options.x, options.y, options.radius, options.start, options.end, options.counterClockWise);
                this.ctx.lineTo(options.x, options.y);
              }
            } else if (flag) {
              this.ctx.arc(options.x, options.y, options.radius, options.start, options.end, options.counterClockWise);
              this.ctx.arc(options.x, options.y, options.innerR, options.end, options.start, !options.counterClockWise);
              flag = false;
            }
            i = i + 5;
            break;
          case "z":
          case "Z":
            this.ctx.closePath();
            i = i - 2;
            break;
        }
      }
      if (options.fill !== "none" && options.fill !== void 0) {
        this.ctx.fillStyle = options.fill;
        this.ctx.fill();
      }
      if (borderWidth > 0) {
        this.ctx.stroke();
      }
      this.ctx.restore();
      this.ctx = canvasCtx;
      return this.canvasObj;
    };
    CanvasRenderer2.prototype.createText = function(options, label, transX, transY, dy, isTSpan) {
      var fontWeight = this.getOptionValue(options, "font-weight");
      if (!isNullOrUndefined(fontWeight) && fontWeight.toLowerCase() === "regular") {
        fontWeight = "normal";
      }
      var fontSize = this.getOptionValue(options, "font-size");
      var fontFamily = this.getOptionValue(options, "font-family");
      var fontStyle = this.getOptionValue(options, "font-style").toLowerCase();
      var font = fontStyle + " " + fontWeight + " " + fontSize + " " + fontFamily;
      var anchor = this.getOptionValue(options, "text-anchor");
      var opacity = options.opacity !== void 0 ? options.opacity : 1;
      if (anchor === "middle") {
        anchor = "center";
      }
      this.ctx.save();
      this.ctx.fillStyle = options.fill;
      this.ctx.font = font;
      this.ctx.textAlign = anchor;
      this.ctx.globalAlpha = opacity;
      if (options.baseline) {
        this.ctx.textBaseline = options.baseline;
      }
      if (!isTSpan) {
        var txtlngth = 0;
        this.ctx.translate(options.x + txtlngth / 2 + (transX ? transX : 0), options.y + (transY ? transY : 0));
        this.ctx.rotate(options.labelRotation * Math.PI / 180);
      }
      this.ctx.fillText(label, isTSpan ? options.x : 0, isTSpan ? dy : 0);
      this.ctx.restore();
      return this.canvasObj;
    };
    CanvasRenderer2.prototype.drawCircle = function(options, canvasTranslate) {
      var canvasCtx = this.ctx;
      this.ctx.save();
      this.ctx.beginPath();
      this.ctx.arc(options.cx, options.cy, options.r, 0, 2 * Math.PI);
      this.ctx.fillStyle = options.fill;
      this.ctx.globalAlpha = options.opacity;
      this.ctx.fill();
      if (canvasTranslate) {
        this.ctx.translate(canvasTranslate[0], canvasTranslate[1]);
      }
      this.setAttributes(options);
      this.ctx.stroke();
      this.ctx.restore();
      this.ctx = canvasCtx;
      return this.canvasObj;
    };
    CanvasRenderer2.prototype.drawPolyline = function(options) {
      this.ctx.save();
      this.ctx.beginPath();
      var points = options.points.split(" ");
      for (var i = 0; i < points.length - 1; i++) {
        var point = points[i].split(",");
        var x = parseFloat(point[0]);
        var y = parseFloat(point[1]);
        if (i === 0) {
          this.ctx.moveTo(x, y);
        } else {
          this.ctx.lineTo(x, y);
        }
      }
      this.ctx.lineWidth = this.getOptionValue(options, "stroke-width");
      this.ctx.strokeStyle = options.stroke;
      this.ctx.stroke();
      this.ctx.restore();
    };
    CanvasRenderer2.prototype.drawEllipse = function(options, canvasTranslate) {
      var canvasCtx = this.ctx;
      var circumference = Math.max(options.rx, options.ry);
      var scaleX = options.rx / circumference;
      var scaleY = options.ry / circumference;
      this.ctx.save();
      this.ctx.beginPath();
      this.ctx.translate(options.cx, options.cy);
      if (canvasTranslate) {
        this.ctx.translate(canvasTranslate[0], canvasTranslate[1]);
      }
      this.ctx.save();
      this.ctx.scale(scaleX, scaleY);
      this.ctx.arc(0, 0, circumference, 0, 2 * Math.PI, false);
      this.ctx.fillStyle = options.fill;
      this.ctx.fill();
      this.ctx.restore();
      this.ctx.lineWidth = this.getOptionValue(options, "stroke-width");
      this.ctx.strokeStyle = options.stroke;
      this.ctx.stroke();
      this.ctx.restore();
      this.ctx = canvasCtx;
    };
    CanvasRenderer2.prototype.drawImage = function(options) {
      this.ctx.save();
      var imageObj = new Image();
      if (!isNullOrUndefined(options.href)) {
        imageObj.src = options.href;
        this.ctx.drawImage(imageObj, options.x, options.y, options.width, options.height);
      }
      this.ctx.restore();
    };
    CanvasRenderer2.prototype.createLinearGradient = function(colors) {
      var myGradient;
      if (!isNullOrUndefined(colors[0].colorStop)) {
        myGradient = this.ctx.createLinearGradient(0, 0, 0, this.canvasObj.height);
      }
      var color = this.setGradientValues(colors, myGradient);
      return color;
    };
    CanvasRenderer2.prototype.createRadialGradient = function(colors) {
      var myGradient;
      if (!isNullOrUndefined(colors[0].colorStop)) {
        myGradient = this.ctx.createRadialGradient(0, 0, 0, 0, 0, this.canvasObj.height);
      }
      var colorName = this.setGradientValues(colors, myGradient);
      return colorName;
    };
    CanvasRenderer2.prototype.setGradientValues = function(colors, myGradient) {
      var colorName;
      if (!isNullOrUndefined(colors[0].colorStop)) {
        for (var i = 0; i <= colors.length - 1; i++) {
          var color = colors[i].color;
          var newColorStop = colors[i].colorStop.slice(0, -1);
          var stopColor = parseInt(newColorStop, 10) / 100;
          myGradient.addColorStop(stopColor, color);
        }
        colorName = myGradient.toString();
      } else {
        colorName = colors[0].color.toString();
      }
      return colorName;
    };
    CanvasRenderer2.prototype.setElementAttributes = function(options, element) {
      var keys = Object.keys(options);
      var values = Object.keys(options).map(function(key) {
        return options[key];
      });
      for (var i = 0; i < keys.length; i++) {
        element.setAttribute(keys[i], values[i]);
      }
      return null;
    };
    CanvasRenderer2.prototype.updateCanvasAttributes = function(options) {
      this.setElementAttributes(options, this.canvasObj);
      var ctx = this.ctx;
      if (!isNullOrUndefined(this.dataUrl)) {
        var img_1 = new Image();
        img_1.onload = function() {
          ctx.drawImage(img_1, 0, 0);
        };
        img_1.src = this.dataUrl;
      }
    };
    CanvasRenderer2.prototype.clearRect = function(rect) {
      this.ctx.restore();
      this.ctx.clearRect(rect.x, rect.y, rect.width, rect.height);
    };
    CanvasRenderer2.prototype.createGroup = function() {
      return null;
    };
    CanvasRenderer2.prototype.drawClipPath = function() {
      return null;
    };
    CanvasRenderer2.prototype.drawCircularClipPath = function() {
      return null;
    };
    CanvasRenderer2.prototype.canvasClip = function(options) {
      this.ctx.save();
      this.ctx.fillStyle = "transparent";
      this.ctx.rect(options.x, options.y, options.width, options.height);
      this.ctx.fill();
      this.ctx.clip();
    };
    CanvasRenderer2.prototype.canvasRestore = function() {
      this.ctx.restore();
    };
    CanvasRenderer2.prototype.drawPolygon = function() {
      return null;
    };
    CanvasRenderer2.prototype.createDefs = function() {
      return null;
    };
    CanvasRenderer2.prototype.createClipPath = function() {
      return null;
    };
    CanvasRenderer2.prototype.createSvg = function() {
      return null;
    };
    return CanvasRenderer2;
  }()
);

// node_modules/@syncfusion/ej2-svg-base/src/tooltip/helper.js
var __extends = /* @__PURE__ */ function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
function measureText(text, font, themeFontStyle, isHeader) {
  var breakText = text || "";
  var htmlObject = document.getElementById("chartmeasuretext");
  if (htmlObject === null) {
    htmlObject = createElement("text", {
      id: "chartmeasuretext"
    });
    document.body.appendChild(htmlObject);
  }
  if (typeof text === "string" && (text.indexOf("<") > -1 || text.indexOf(">") > -1)) {
    var textArray = text.split(" ");
    for (var i = 0; i < textArray.length; i++) {
      if (textArray[i].indexOf("<br/>") === -1) {
        textArray[i] = textArray[i].replace(/[<>]/g, "&");
      }
    }
    text = textArray.join(" ");
  }
  htmlObject.innerHTML = breakText.indexOf("<br>") > -1 || breakText.indexOf("<br/>") > -1 ? breakText : text;
  htmlObject.style.position = "fixed";
  htmlObject.style.fontSize = font.size || (isHeader ? themeFontStyle.headerTextSize : themeFontStyle.size);
  htmlObject.style.fontStyle = font.fontStyle || themeFontStyle.fontStyle;
  htmlObject.style.fontFamily = font.fontFamily || themeFontStyle.fontFamily;
  htmlObject.style.visibility = "hidden";
  htmlObject.style.top = "-100";
  htmlObject.style.left = "0";
  htmlObject.style.whiteSpace = "nowrap";
  htmlObject.style.lineHeight = "normal";
  var fontWidth = htmlObject.clientWidth;
  var fontHeight = htmlObject.clientHeight;
  var fontWeight = htmlObject.style.fontWeight;
  htmlObject.style.fontWeight = font.fontWeight || themeFontStyle.fontWeight;
  return new Size(htmlObject.style.fontWeight === "bold" && fontWeight === "normal" ? Math.max(fontWidth, htmlObject.clientWidth) : htmlObject.clientWidth, htmlObject.style.fontWeight === "bold" && fontWeight === "normal" ? Math.max(fontHeight, htmlObject.clientHeight) : htmlObject.clientHeight);
}
function withInAreaBounds(x, y, areaBounds, width, height) {
  if (width === void 0) {
    width = 0;
  }
  if (height === void 0) {
    height = 0;
  }
  return x >= areaBounds.x - width && x <= areaBounds.x + areaBounds.width + width && y >= areaBounds.y - height && y <= areaBounds.y + areaBounds.height + height;
}
function findDirection(rX, rY, rect, arrowLocation, arrowPadding, top, bottom, left, tipX, tipY, controlName) {
  if (controlName === void 0) {
    controlName = "";
  }
  var direction = "";
  var startX = rect.x;
  var startY = rect.y;
  var width = rect.x + rect.width;
  var height = rect.y + rect.height;
  if (top) {
    direction = direction.concat("M " + startX + " " + (startY + rY) + " Q " + startX + " " + startY + " " + (startX + rX) + " " + startY + "  L " + (width - rX) + " " + startY + " Q " + width + " " + startY + " " + width + " " + (startY + rY));
    direction = direction.concat(" L " + width + " " + (height - rY) + " Q " + width + " " + height + " " + (width - rX) + " " + height);
    if (arrowPadding !== 0) {
      if (controlName === "RangeNavigator") {
        if (arrowLocation.x - arrowPadding > width / 2) {
          direction = direction.concat(" L " + (arrowLocation.x + arrowPadding) + " " + height);
          direction = direction.concat(" L " + (tipX + arrowPadding) + " " + (height + arrowPadding) + " L " + arrowLocation.x + " " + height);
        } else {
          direction = direction.concat(" L " + arrowLocation.x + " " + height);
          direction = direction.concat(" L " + (tipX - arrowPadding) + " " + (height + arrowPadding) + " L " + (arrowLocation.x - arrowPadding) + " " + height);
        }
      } else {
        direction = direction.concat(" L " + (arrowLocation.x + arrowPadding) + " " + height);
        direction = direction.concat(" L " + tipX + " " + (height + arrowPadding) + " L " + (arrowLocation.x - arrowPadding) + " " + height);
      }
    }
    if (arrowLocation.x - arrowPadding > startX) {
      direction = direction.concat(" L " + (startX + rX) + " " + height + " Q " + startX + " " + height + " " + startX + " " + (height - rY) + " z");
    } else {
      if (arrowPadding === 0) {
        direction = direction.concat(" L " + (startX + rX) + " " + height + " Q " + startX + " " + height + " " + startX + " " + (height - rY) + " z");
      } else {
        direction = direction.concat(" L " + startX + " " + (height + rY) + " z");
      }
    }
  } else if (bottom) {
    direction = direction.concat("M " + startX + " " + (startY + rY) + " Q " + startX + " " + startY + " " + (startX + rX) + " " + startY + " L " + (arrowLocation.x - arrowPadding) + " " + startY);
    direction = direction.concat(" L " + tipX + " " + arrowLocation.y);
    direction = direction.concat(" L " + (arrowLocation.x + arrowPadding) + " " + startY);
    direction = direction.concat(" L " + (width - rX) + " " + startY + " Q " + width + " " + startY + " " + width + " " + (startY + rY));
    direction = direction.concat(" L " + width + " " + (height - rY) + " Q " + width + " " + height + " " + (width - rX) + " " + height + " L " + (startX + rX) + " " + height + " Q " + startX + " " + height + " " + startX + " " + (height - rY) + " z");
  } else if (left) {
    direction = direction.concat("M " + startX + " " + (startY + rY) + " Q " + startX + " " + startY + " " + (startX + rX) + " " + startY);
    direction = direction.concat(" L " + (width - rX) + " " + startY + " Q " + width + " " + startY + " " + width + " " + ((controlName === "RangeNavigator" ? 0 : startY + rY) + " L " + width + " " + (controlName === "RangeNavigator" ? 0 : arrowLocation.y - arrowPadding)));
    direction = controlName === "RangeNavigator" ? direction.concat(" L " + (width + arrowPadding) + " 0") : direction.concat(" L " + (width + arrowPadding) + " " + tipY);
    direction = controlName === "RangeNavigator" ? direction.concat(" L " + width + " " + (arrowLocation.y - rY)) : direction.concat(" L " + width + " " + (arrowLocation.y + arrowPadding));
    direction = direction.concat(" L " + width + " " + (height - rY) + " Q " + width + " " + height + " " + (width - rX) + " " + height);
    direction = direction.concat(" L " + (startX + rX) + " " + height + " Q " + startX + " " + height + " " + startX + " " + (height - rY) + " z");
  } else {
    direction = direction.concat("M " + (startX + rX) + " " + startY + " Q " + startX + " " + startY + " " + startX + " " + ((controlName === "RangeNavigator" ? 0 : startY + rY) + " L " + startX + " " + (controlName === "RangeNavigator" ? 0 : arrowLocation.y - arrowPadding)));
    direction = controlName === "RangeNavigator" ? direction.concat(" L " + (startX - arrowPadding) + " 0") : direction.concat(" L " + (startX - arrowPadding) + " " + tipY);
    direction = controlName === "RangeNavigator" ? direction.concat(" L " + startX + " " + (arrowLocation.y - rY)) : direction.concat(" L " + startX + " " + (arrowLocation.y + arrowPadding));
    direction = direction.concat(" L " + startX + " " + (height - rY) + " Q " + startX + " " + height + " " + (startX + rX) + " " + height);
    direction = direction.concat(" L " + (width - rX) + " " + height + " Q " + width + " " + height + " " + width + " " + (height - rY) + " L " + width + " " + (startY + rY) + " Q " + width + " " + startY + " " + (width - rX) + " " + startY + " z");
  }
  return direction;
}
var Size = (
  /** @class */
  /* @__PURE__ */ function() {
    function Size2(width, height) {
      this.width = width;
      this.height = height;
    }
    return Size2;
  }()
);
var Rect = (
  /** @class */
  /* @__PURE__ */ function() {
    function Rect2(x, y, width, height) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
    }
    return Rect2;
  }()
);
var Side = (
  /** @class */
  /* @__PURE__ */ function() {
    function Side2(bottom, right) {
      this.isRight = right;
      this.isBottom = bottom;
    }
    return Side2;
  }()
);
var CustomizeOption = (
  /** @class */
  /* @__PURE__ */ function() {
    function CustomizeOption2(id) {
      this.id = id;
    }
    return CustomizeOption2;
  }()
);
var TextOption = (
  /** @class */
  function(_super) {
    __extends(TextOption2, _super);
    function TextOption2(id, x, y, anchor, text, transform, baseLine, labelRotation) {
      if (transform === void 0) {
        transform = "";
      }
      var _this = _super.call(this, id) || this;
      _this.transform = "";
      _this.baseLine = "auto";
      _this.labelRotation = 0;
      _this.x = x;
      _this.y = y;
      _this.anchor = anchor;
      _this.text = text;
      _this.transform = transform;
      _this.baseLine = baseLine;
      _this.labelRotation = labelRotation;
      return _this;
    }
    return TextOption2;
  }(CustomizeOption)
);
function getElement(id) {
  return document.getElementById(id);
}
function removeElement(id) {
  var element = getElement(id);
  if (element) {
    remove(element);
  }
}
function drawSymbol(location, shape, size, url, options, role, label) {
  var renderer = new SvgRenderer("");
  var temp = calculateShapes(location, size, shape, options, url);
  var htmlObject = renderer["draw" + temp.functionName](temp.renderOption);
  htmlObject.setAttribute("role", role);
  htmlObject.setAttribute("aria-label", label);
  return htmlObject;
}
function calculateShapes(location, size, shape, options, url) {
  var path;
  var functionName = "Path";
  var width = size.width;
  var height = size.height;
  var locX = location.x;
  var locY = location.y;
  var x = location.x + -width / 2;
  var y = location.y + -height / 2;
  switch (shape) {
    case "Circle":
    case "Bubble":
      functionName = "Ellipse";
      merge(options, {
        "rx": width / 2,
        "ry": height / 2,
        "cx": locX,
        "cy": locY
      });
      break;
    case "Plus":
      path = "M " + x + " " + locY + " L " + (locX + width / 2) + " " + locY + " M " + locX + " " + (locY + height / 2) + " L " + locX + " " + (locY + -height / 2);
      merge(options, {
        "d": path,
        stroke: options.fill
      });
      break;
    case "Cross":
      path = "M " + x + " " + (locY + -height / 2) + " L " + (locX + width / 2) + " " + (locY + height / 2) + " M " + x + " " + (locY + height / 2) + " L " + (locX + width / 2) + " " + (locY + -height / 2);
      merge(options, {
        "d": path,
        stroke: options.fill
      });
      break;
    case "HorizontalLine":
      path = "M " + x + " " + locY + " L " + (locX + width / 2) + " " + locY;
      merge(options, {
        "d": path,
        stroke: options.fill
      });
      break;
    case "VerticalLine":
      path = "M " + locX + " " + (locY + height / 2) + " L " + locX + " " + (locY + -height / 2);
      merge(options, {
        "d": path,
        stroke: options.fill
      });
      break;
    case "Diamond":
      path = "M " + x + " " + locY + " L " + locX + " " + (locY + -height / 2) + " L " + (locX + width / 2) + " " + locY + " L " + locX + " " + (locY + height / 2) + " L " + x + " " + locY + " z";
      merge(options, {
        "d": path
      });
      break;
    case "Rectangle":
      path = "M " + x + " " + (locY + -height / 2) + " L " + (locX + width / 2) + " " + (locY + -height / 2) + " L " + (locX + width / 2) + " " + (locY + height / 2) + " L " + x + " " + (locY + height / 2) + " L " + x + " " + (locY + -height / 2) + " z";
      merge(options, {
        "d": path
      });
      break;
    case "Triangle":
      path = "M " + x + " " + (locY + height / 2) + " L " + locX + " " + (locY + -height / 2) + " L " + (locX + width / 2) + " " + (locY + height / 2) + " L " + x + " " + (locY + height / 2) + " z";
      merge(options, {
        "d": path
      });
      break;
    case "InvertedTriangle":
      path = "M " + (locX + width / 2) + " " + (locY - height / 2) + " L " + locX + " " + (locY + height / 2) + " L " + (locX - width / 2) + " " + (locY - height / 2) + " L " + (locX + width / 2) + " " + (locY - height / 2) + " z";
      merge(options, {
        "d": path
      });
      break;
    case "Pentagon":
      var eq = 72;
      var xValue = void 0;
      var yValue = void 0;
      for (var i = 0; i <= 5; i++) {
        xValue = width / 2 * Math.cos(Math.PI / 180 * (i * eq));
        yValue = height / 2 * Math.sin(Math.PI / 180 * (i * eq));
        if (i === 0) {
          path = "M " + (locX + xValue) + " " + (locY + yValue) + " ";
        } else {
          path = path.concat("L " + (locX + xValue) + " " + (locY + yValue) + " ");
        }
      }
      path = path.concat("Z");
      merge(options, {
        "d": path
      });
      break;
    case "Image":
      functionName = "Image";
      merge(options, {
        "href": url,
        "height": height,
        "width": width,
        x,
        y
      });
      break;
    case "Star": {
      var cornerPoints = 5;
      var outerRadius = Math.min(width, height) / 2;
      var innerRadius = outerRadius / 2;
      var angle = Math.PI / cornerPoints;
      var starPath = "";
      for (var i = 0; i < 2 * cornerPoints; i++) {
        var radius = i % 2 === 0 ? outerRadius : innerRadius;
        var currentX = locX + radius * Math.cos(i * angle - Math.PI / 2);
        var currentY = locY + radius * Math.sin(i * angle - Math.PI / 2);
        starPath += (i === 0 ? "M" : "L") + currentX + "," + currentY;
      }
      starPath += "Z";
      merge(options, {
        "d": starPath
      });
      break;
    }
  }
  return {
    renderOption: options,
    functionName
  };
}
var PathOption = (
  /** @class */
  function(_super) {
    __extends(PathOption2, _super);
    function PathOption2(id, fill, width, color, opacity, dashArray, d) {
      var _this = _super.call(this, id) || this;
      _this.opacity = opacity;
      _this.fill = fill;
      _this.stroke = color;
      _this["stroke-width"] = width;
      _this["stroke-dasharray"] = dashArray;
      _this.d = d;
      return _this;
    }
    return PathOption2;
  }(CustomizeOption)
);
function textElement(options, font, color, parent, themeStyle) {
  var renderOptions = {};
  var renderer = new SvgRenderer("");
  renderOptions = {
    "id": options.id,
    "x": options.x,
    "y": options.y,
    "fill": color,
    "font-size": font.size || themeStyle.size,
    "font-style": font.fontStyle || themeStyle.fontStyle,
    "font-family": font.fontFamily || themeStyle.fontFamily,
    "font-weight": font.fontWeight || themeStyle.fontWeight,
    "text-anchor": options.anchor,
    "transform": options.transform,
    "opacity": font.opacity,
    "dominant-baseline": options.baseLine
  };
  var text = typeof options.text === "string" ? options.text : options.text[0];
  var htmlObject = renderer.createText(renderOptions, text);
  if (parent) {
    parent.appendChild(htmlObject);
  }
  return htmlObject;
}
var TooltipLocation = (
  /** @class */
  /* @__PURE__ */ function() {
    function TooltipLocation2(x, y) {
      this.x = x;
      this.y = y;
    }
    return TooltipLocation2;
  }()
);

// node_modules/@syncfusion/ej2-svg-base/src/tooltip/interface.js
function getTooltipThemeColor(theme) {
  var style;
  switch (theme) {
    case "Highcontrast":
    case "HighContrast":
      style = {
        tooltipFill: "#ffffff",
        tooltipBoldLabel: "#000000",
        tooltipLightLabel: "#000000",
        tooltipHeaderLine: "#969696",
        textStyle: {
          fontFamily: "Segoe UI",
          color: "#000000",
          fontWeight: null,
          size: "12px",
          headerTextSize: "12px",
          boldTextSize: "12px"
        }
      };
      break;
    case "MaterialDark":
    case "FabricDark":
    case "BootstrapDark":
      style = {
        tooltipFill: theme === "MaterialDark" ? "#F4F4F4" : theme === "FabricDark" ? "#A19F9D" : "#F0F0F0",
        tooltipBoldLabel: theme === "MaterialDark" ? "rgba(18, 18, 18, 1)" : theme === "FabricDark" ? "#DADADA" : "#1A1A1A",
        tooltipLightLabel: theme === "MaterialDark" ? "rgba(18, 18, 18, 1)" : theme === "FabricDark" ? "#DADADA" : "#1A1A1A",
        tooltipHeaderLine: "#9A9A9A",
        textStyle: theme === "MaterialDark" ? {
          fontFamily: "Roboto",
          color: "rgba(18, 18, 18, 1)",
          fontWeight: null,
          size: "12px",
          headerTextSize: "12px",
          boldTextSize: "12px"
        } : theme === "FabricDark" ? {
          fontFamily: "Segoe UI",
          color: "#DADADA",
          fontWeight: null,
          size: "12px",
          headerTextSize: "12px",
          boldTextSize: "12px"
        } : {
          fontFamily: "Helvetica",
          color: "#1A1A1A",
          fontWeight: null,
          size: "12px",
          headerTextSize: "12px",
          boldTextSize: "12px"
        }
      };
      break;
    case "Bootstrap4":
      style = {
        tooltipFill: "#212529",
        tooltipBoldLabel: "#F9FAFB",
        tooltipLightLabel: "#F9FAFB",
        tooltipHeaderLine: "rgba(255, 255, 255, 0.2)",
        textStyle: {
          fontFamily: "Helvetica",
          color: "#F9FAFB",
          fontWeight: null,
          size: "12px",
          headerTextSize: "12px",
          boldTextSize: "12px"
        }
      };
      break;
    case "Tailwind3":
      style = {
        tooltipFill: "#111827",
        tooltipBoldLabel: "#F9FAFB",
        tooltipLightLabel: "#F9FAFB",
        tooltipHeaderLine: "#D1D5DB",
        textStyle: {
          fontFamily: "Inter",
          color: "#F9FAFB",
          fontWeight: "500",
          size: "12px",
          headerTextSize: "12px",
          boldTextSize: "12px"
        }
      };
      break;
    case "Tailwind3Dark":
      style = {
        tooltipFill: "#F9FAFB",
        tooltipBoldLabel: "#1F2937",
        tooltipLightLabel: "#1F2937",
        tooltipHeaderLine: "#374151",
        textStyle: {
          fontFamily: "Inter",
          color: "#1F2937",
          fontWeight: null,
          size: "12px",
          headerTextSize: "12px",
          boldTextSize: "12px"
        }
      };
      break;
    case "Tailwind":
      style = {
        tooltipFill: "#111827",
        tooltipBoldLabel: "#F9FAFB",
        tooltipLightLabel: "#F9FAFB",
        tooltipHeaderLine: "#6B7280",
        textStyle: {
          fontFamily: "Inter",
          color: "#F9FAFB",
          fontWeight: null,
          size: "12px",
          headerTextSize: "12px",
          boldTextSize: "12px"
        }
      };
      break;
    case "TailwindDark":
      style = {
        tooltipFill: "#E9ECEF",
        tooltipBoldLabel: "#1F2937",
        tooltipLightLabel: "#1F2937",
        tooltipHeaderLine: "#9CA3AF",
        textStyle: {
          fontFamily: "Inter",
          color: "#1F2937",
          fontWeight: null,
          size: "12px",
          headerTextSize: "12px",
          boldTextSize: "12px"
        }
      };
      break;
    case "Bootstrap5":
      style = {
        tooltipFill: "#000000E5",
        tooltipBoldLabel: "#FFFFFF",
        tooltipLightLabel: "#FFFFFF",
        tooltipHeaderLine: "#FFFFFF",
        textStyle: {
          fontFamily: "Segoe UI",
          color: "#FFFFFF",
          fontWeight: null,
          size: "12px",
          headerTextSize: "16px",
          boldTextSize: "14px"
        }
      };
      break;
    case "Bootstrap5Dark":
      style = {
        tooltipFill: "#FFFFFFE5",
        tooltipBoldLabel: "#212529",
        tooltipLightLabel: "#212529",
        tooltipHeaderLine: "#212529",
        textStyle: {
          fontFamily: "Helvetica",
          color: "#212529",
          fontWeight: null,
          size: "12px",
          headerTextSize: "16px",
          boldTextSize: "14px"
        }
      };
      break;
    case "Fluent":
      style = {
        tooltipFill: "#FFFFFF",
        tooltipBoldLabel: "#323130",
        tooltipLightLabel: "#323130",
        tooltipHeaderLine: "#D2D0CE",
        textStyle: {
          fontFamily: "Segoe UI",
          color: "#323130",
          fontWeight: null,
          size: "12px",
          headerTextSize: "12px",
          boldTextSize: "12px"
        }
      };
      break;
    case "FluentDark":
      style = {
        tooltipFill: "#323130",
        tooltipBoldLabel: "#F3F2F2",
        tooltipLightLabel: "#F3F2F1",
        tooltipHeaderLine: "#3B3A39",
        textStyle: {
          fontFamily: "Segoe UI",
          color: "#F3F2F1",
          fontWeight: null,
          size: "12px",
          headerTextSize: "12px",
          boldTextSize: "12px"
        }
      };
      break;
    case "Fluent2":
      style = {
        tooltipFill: "#FFFFFF",
        tooltipBoldLabel: "#242424",
        tooltipLightLabel: "#242424",
        tooltipHeaderLine: "#D2D0CE",
        textStyle: {
          fontFamily: "Segoe UI",
          color: "#242424",
          fontWeight: null,
          size: "12px",
          headerTextSize: "12px",
          boldTextSize: "12px"
        }
      };
      break;
    case "Fluent2Dark":
      style = {
        tooltipFill: "#292929",
        tooltipBoldLabel: "#FFFFFF",
        tooltipLightLabel: "#FFFFFF",
        tooltipHeaderLine: "#3B3A39",
        textStyle: {
          fontFamily: "Segoe UI",
          color: "#FFFFFF",
          fontWeight: null,
          size: "12px",
          headerTextSize: "12px",
          boldTextSize: "12px"
        }
      };
      break;
    case "Fluent2HighContrast":
      style = {
        tooltipFill: "#000000",
        tooltipBoldLabel: "#FFFFFF",
        tooltipLightLabel: "#FFFFFF",
        tooltipHeaderLine: "#3B3A39",
        textStyle: {
          fontFamily: "Segoe UI",
          color: "#FFFFFF",
          fontWeight: null,
          size: "12px",
          headerTextSize: "12px",
          boldTextSize: "12px"
        }
      };
      break;
    case "Material3":
      style = {
        tooltipFill: "#313033",
        tooltipBoldLabel: "#F4EFF4",
        tooltipLightLabel: "#F4EFF4",
        tooltipHeaderLine: "#F4EFF4",
        textStyle: {
          fontFamily: "Roboto",
          color: "#F4EFF4",
          fontWeight: null,
          size: "12px",
          headerTextSize: "12px",
          boldTextSize: "12px"
        }
      };
      break;
    case "Material3Dark":
      style = {
        tooltipFill: "#E6E1E5",
        tooltipBoldLabel: "#313033",
        tooltipLightLabel: "#313033",
        tooltipHeaderLine: "#313033",
        textStyle: {
          fontFamily: "Roboto",
          color: "#313033",
          fontWeight: null,
          size: "12px",
          headerTextSize: "12px",
          boldTextSize: "12px"
        }
      };
      break;
    default:
      style = {
        tooltipFill: theme === "Material" ? "#000816" : theme === "Fabric" ? "#FFFFFF" : "#212529",
        tooltipBoldLabel: theme === "Material" ? "rgba(249, 250, 251, 1)" : theme === "Fabric" ? "#333333" : "#F9FAFB",
        tooltipLightLabel: theme === "Material" ? "rgba(249, 250, 251, 1)" : theme === "Fabric" ? "#333333" : "#F9FAFB",
        tooltipHeaderLine: theme === "Fabric" ? "#D2D0CE" : "#ffffff",
        textStyle: theme === "Material" ? {
          fontFamily: "Roboto",
          color: "rgba(249, 250, 251, 1)",
          fontWeight: null,
          size: "12px",
          headerTextSize: "12px",
          boldTextSize: "12px"
        } : theme === "Fabric" ? {
          fontFamily: "Segoe UI",
          color: "#333333",
          fontWeight: null,
          size: "12px",
          headerTextSize: "12px",
          boldTextSize: "12px"
        } : {
          fontFamily: "Helvetica",
          color: "#F9FAFB",
          fontWeight: null,
          size: "12px",
          headerTextSize: "12px",
          boldTextSize: "12px"
        }
      };
      break;
  }
  return style;
}

// node_modules/@syncfusion/ej2-svg-base/src/tooltip/tooltip.js
var __extends2 = /* @__PURE__ */ function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var __decorate = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var TextStyle = (
  /** @class */
  function(_super) {
    __extends2(TextStyle2, _super);
    function TextStyle2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([Property(null)], TextStyle2.prototype, "size", void 0);
    __decorate([Property("")], TextStyle2.prototype, "color", void 0);
    __decorate([Property("Segoe UI")], TextStyle2.prototype, "fontFamily", void 0);
    __decorate([Property("Normal")], TextStyle2.prototype, "fontWeight", void 0);
    __decorate([Property("Normal")], TextStyle2.prototype, "fontStyle", void 0);
    __decorate([Property(1)], TextStyle2.prototype, "opacity", void 0);
    __decorate([Property(null)], TextStyle2.prototype, "headerTextSize", void 0);
    __decorate([Property(null)], TextStyle2.prototype, "boldTextSize", void 0);
    return TextStyle2;
  }(ChildProperty)
);
var TooltipBorder = (
  /** @class */
  function(_super) {
    __extends2(TooltipBorder2, _super);
    function TooltipBorder2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([Property("")], TooltipBorder2.prototype, "color", void 0);
    __decorate([Property(1)], TooltipBorder2.prototype, "width", void 0);
    __decorate([Property("")], TooltipBorder2.prototype, "dashArray", void 0);
    return TooltipBorder2;
  }(ChildProperty)
);
var AreaBounds = (
  /** @class */
  function(_super) {
    __extends2(AreaBounds2, _super);
    function AreaBounds2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([Property(0)], AreaBounds2.prototype, "x", void 0);
    __decorate([Property(0)], AreaBounds2.prototype, "y", void 0);
    __decorate([Property(0)], AreaBounds2.prototype, "width", void 0);
    __decorate([Property(0)], AreaBounds2.prototype, "height", void 0);
    return AreaBounds2;
  }(ChildProperty)
);
var ToolLocation = (
  /** @class */
  function(_super) {
    __extends2(ToolLocation2, _super);
    function ToolLocation2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([Property(0)], ToolLocation2.prototype, "x", void 0);
    __decorate([Property(0)], ToolLocation2.prototype, "y", void 0);
    return ToolLocation2;
  }(ChildProperty)
);
var Tooltip = (
  /** @class */
  function(_super) {
    __extends2(Tooltip2, _super);
    function Tooltip2(options, element) {
      return _super.call(this, options, element) || this;
    }
    Tooltip2.prototype.preRender = function() {
      this.allowServerDataBinding = false;
      this.initPrivateVariable();
      if (!this.isCanvas) {
        this.removeSVG();
      }
      this.createTooltipElement();
    };
    Tooltip2.prototype.initPrivateVariable = function() {
      this.renderer = new SvgRenderer(this.element.id);
      this.themeStyle = getTooltipThemeColor(this.theme);
      this.formattedText = [];
      this.padding = 5;
      this.highlightPadding = 3;
      this.areaMargin = 10;
      this.isFirst = true;
      this.markerPoint = [];
    };
    Tooltip2.prototype.removeSVG = function() {
      var svgObject = document.getElementById(this.element.id + "_svg");
      var templateObject = document.getElementById(this.element.id + "parent_template");
      if (this.blazorTemplate) {
        resetBlazorTemplate(this.element.id + "parent_template_blazorTemplate");
      }
      if (svgObject && svgObject.parentNode) {
        remove(svgObject);
      }
      if (templateObject && templateObject.parentNode) {
        remove(templateObject);
      }
    };
    Tooltip2.prototype.render = function() {
      this.fadeOuted = false;
      if (!this.template) {
        this.renderText(this.isFirst);
        var argsData = {
          cancel: false,
          name: "tooltipRender",
          tooltip: this
        };
        this.trigger("tooltipRender", argsData);
        var markerSide = this.renderTooltipElement(this.areaBounds, this.location);
        this.drawMarker(markerSide.isBottom, markerSide.isRight, this.markerSize);
      } else {
        this.updateTemplateFn();
        this.createTemplate(this.areaBounds, this.location);
      }
      this.trigger("loaded", {
        tooltip: this
      });
      var element = document.getElementById("chartmeasuretext");
      if (element) {
        remove(element);
      }
      this.allowServerDataBinding = true;
    };
    Tooltip2.prototype.createTooltipElement = function() {
      this.textElements = [];
      if (!this.template || this.shared) {
        if (this.enableRTL) {
          this.element.setAttribute("dir", "ltr");
        }
        var svgObject = this.renderer.createSvg({
          id: this.element.id + "_svg"
        });
        this.element.appendChild(svgObject);
        var groupElement = document.getElementById(this.element.id + "_group");
        if (!groupElement) {
          groupElement = this.renderer.createGroup({
            id: this.element.id + "_group"
          });
          groupElement.setAttribute("transform", "translate(0,0)");
        }
        svgObject.appendChild(groupElement);
        var pathElement = this.renderer.drawPath({
          "id": this.element.id + "_path",
          "stroke-width": (this.theme === "Fabric" || this.theme === "Fluent" || this.theme === "Fluent2" || this.theme === "Fluent2HighContrast") && !this.border.width ? 1 : this.border.width,
          "fill": this.fill || this.themeStyle.tooltipFill,
          "opacity": (this.theme === "TailwindDark" || this.theme === "Tailwind" || this.theme === "Tailwind3Dark" || this.theme === "Tailwind3" || this.theme === "Bootstrap5" || this.theme === "Bootstrap5Dark" || this.theme.indexOf("Fluent2") > -1) && this.opacity === 0.75 ? 1 : this.opacity,
          "stroke": this.border.color || (this.theme === "Fabric" || this.theme === "Fluent" || this.theme === "Fluent2" ? "#D2D0CE" : this.border.color)
        });
        groupElement.appendChild(pathElement);
      }
    };
    Tooltip2.prototype.drawMarker = function(isBottom, isRight, size) {
      if (this.shapes.length <= 0) {
        return null;
      }
      var shapeOption;
      var count = 0;
      var markerGroup = this.renderer.createGroup({
        id: this.element.id + "_trackball_group"
      });
      var groupElement = getElement(this.element.id + "_group");
      if (!groupElement) {
        return null;
      }
      var x = (this.enableRTL ? this.elementSize.width - size / 2 : this.marginX * 2 + size / 2) + (isRight ? this.arrowPadding : 0);
      for (var _i = 0, _a = this.shapes; _i < _a.length; _i++) {
        var shape = _a[_i];
        if (shape !== "None") {
          shapeOption = new PathOption(this.element.id + "_Trackball_" + count, this.palette[count], 1, "#cccccc", 1, null);
          if (this.markerPoint[count]) {
            var padding = 0;
            if (this.header.indexOf("<br") > -1) {
              padding = this.header.split(/<br.*?>/g).length + count;
            }
            var tooltipContent = this.formattedText && this.formattedText.length >= 2 ? this.getTooltipTextContent(this.formattedText[1]) + ", " + this.getTooltipTextContent(this.formattedText[0]) : "";
            markerGroup.appendChild(drawSymbol(new TooltipLocation(x, this.markerPoint[count] - this.padding + (isBottom ? this.arrowPadding : padding)), shape, new Size(size, size), "", shapeOption, "img", tooltipContent));
          }
          count++;
        }
      }
      groupElement.appendChild(markerGroup);
    };
    Tooltip2.prototype.renderTooltipElement = function(areaBounds, location) {
      var tooltipDiv = getElement(this.element.id);
      var arrowLocation = new TooltipLocation(0, 0);
      var tipLocation = new TooltipLocation(0, 0);
      var svgObject = getElement(this.element.id + "_svg");
      var groupElement = getElement(this.element.id + "_group");
      var pathElement = getElement(this.element.id + "_path");
      var rect;
      var isTop = false;
      var isLeft = false;
      var isBottom = false;
      var x = 0;
      var y = 0;
      if (!isNullOrUndefined(groupElement)) {
        if (this.header !== "" && this.showHeaderLine) {
          this.elementSize.height += this.marginY;
        }
        if (this.isFixed) {
          var width = this.elementSize.width + 2 * this.marginX;
          var height = this.elementSize.height + 2 * this.marginY;
          rect = new Rect(location.x, location.y, width, height);
        } else if (this.content.length > 1) {
          rect = this.sharedTooltipLocation(areaBounds, this.location.x, this.location.y);
          isTop = true;
        } else {
          rect = this.tooltipLocation(areaBounds, location, arrowLocation, tipLocation);
          if (!this.inverted) {
            isTop = rect.y < location.y + this.clipBounds.y;
            isBottom = !isTop;
            y = isTop ? 0 : this.arrowPadding;
          } else {
            isLeft = rect.x < location.x + this.clipBounds.x;
            x = isLeft ? 0 : this.arrowPadding;
            if (this.allowHighlight) {
              rect.x += isLeft ? this.highlightPadding : -(2 * this.highlightPadding);
            }
          }
        }
        if (this.header !== "" && this.showHeaderLine) {
          var wrapPadding = 2;
          var padding = 0;
          var wrapHeader = this.isWrap ? this.wrappedText : this.header;
          if (this.isWrap && typeof wrapHeader === "string" && (wrapHeader.indexOf("<") > -1 || wrapHeader.indexOf(">") > -1)) {
            var textArray = wrapHeader.split("<br>");
            wrapPadding = textArray.length;
          }
          if (this.header.indexOf("<br") > -1) {
            padding = 5 * (this.header.split(/<br.*?>/g).length - 1);
          }
          var key = "properties";
          var font = extend({}, this.textStyle, null, true)[key];
          var headerSize = measureText(this.isWrap ? this.wrappedText : this.header, font, this.themeStyle.textStyle).height + this.marginY * wrapPadding + (isBottom ? this.arrowPadding : 0) + (this.isWrap ? 5 : padding);
          var xLength = this.marginX * 3 + (!isLeft && !isTop && !isBottom ? this.arrowPadding : 0);
          var direction = "M " + xLength + " " + headerSize + "L " + (rect.width + (!isLeft && !isTop && !isBottom ? this.arrowPadding : 0) - this.marginX * 2) + " " + headerSize;
          var pathElement_1 = this.renderer.drawPath({
            "id": this.element.id + "_header_path",
            "stroke-width": 1,
            "fill": null,
            "opacity": this.theme === "Material3" || this.theme === "Material3Dark" ? 0.2 : 0.8,
            "stroke": this.themeStyle.tooltipHeaderLine,
            "d": direction
          });
          groupElement.appendChild(pathElement_1);
        }
        var start = this.border.width / 2;
        var pointRect = new Rect(start + x, start + y, rect.width - start, rect.height - start);
        groupElement.setAttribute("opacity", "1");
        if (this.enableAnimation && !this.isFirst && !this.crosshair) {
          this.animateTooltipDiv(tooltipDiv, rect);
        } else {
          this.updateDiv(tooltipDiv, rect.x, rect.y);
        }
        svgObject.setAttribute("height", (rect.height + this.border.width + (!!this.inverted ? 0 : this.arrowPadding) + 5).toString());
        svgObject.setAttribute("width", (rect.width + this.border.width + (!this.inverted ? 0 : this.arrowPadding) + 5).toString());
        svgObject.setAttribute("opacity", "1");
        if (!isNullOrUndefined(this.tooltipPlacement)) {
          isTop = this.tooltipPlacement.indexOf("Top") > -1;
          isBottom = this.tooltipPlacement.indexOf("Bottom") > -1;
          isLeft = this.tooltipPlacement.indexOf("Left") > -1;
        }
        pathElement.setAttribute("d", findDirection(this.rx, this.ry, pointRect, arrowLocation, this.arrowPadding, isTop, isBottom, isLeft, tipLocation.x, tipLocation.y, this.controlName));
        if (this.enableShadow && this.theme !== "Bootstrap4" || this.theme.indexOf("Fluent2") > -1) {
          var shadowId = this.element.id + "_shadow";
          if (this.theme === "Tailwind" || this.theme === "TailwindDark" || this.theme === "Tailwind3" || this.theme === "Tailwind3Dark" || this.theme === "Bootstrap5" || this.theme === "Bootstrap5Dark") {
            pathElement.setAttribute("box-shadow", "0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1)");
          } else {
            pathElement.setAttribute("filter", Browser.isIE ? "" : "url(#" + shadowId + ")");
          }
          var shadow = '<filter id="' + shadowId + '" height="130%"><feGaussianBlur in="SourceAlpha" stdDeviation="3"/>';
          if (this.theme.indexOf("Fluent2") > -1) {
            shadow += '<feOffset dx="-1" dy="3.6" result="offsetblur"/><feComponentTransfer><feFuncA type="linear" slope="0.2"/>';
          } else {
            shadow += '<feOffset dx="3" dy="3" result="offsetblur"/><feComponentTransfer><feFuncA type="linear" slope="0.5"/>';
          }
          shadow += '</feComponentTransfer><feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge></filter>';
          var defElement = this.renderer.createDefs();
          defElement.setAttribute("id", this.element.id + "SVG_tooltip_definition");
          groupElement.appendChild(defElement);
          defElement.innerHTML = shadow;
        }
        var borderColor = (this.theme === "Fabric" || this.theme === "Fluent" || this.theme === "Fluent2") && !this.border.color ? "#D2D0CE" : this.theme === "Fluent2HighContrast" ? "#FFFFFF" : this.border.color;
        pathElement.setAttribute("stroke", borderColor);
        if (!isNullOrUndefined(this.border.dashArray)) {
          pathElement.setAttribute("stroke-dasharray", this.border.dashArray);
        }
        this.changeText(new TooltipLocation(x, y), isBottom, !isLeft && !isTop && !isBottom);
        if (this.revert) {
          this.inverted = !this.inverted;
          this.revert = false;
        }
      }
      return new Side(isBottom, !isLeft && !isTop && !isBottom);
    };
    Tooltip2.prototype.changeText = function(point, isBottom, isRight) {
      var element = document.getElementById(this.element.id + "_text");
      if (isBottom) {
        element.setAttribute("transform", "translate(0," + this.arrowPadding + ")");
      }
      if (isRight) {
        element.setAttribute("transform", "translate(" + this.arrowPadding + " 0)");
      }
    };
    Tooltip2.prototype.findFormattedText = function() {
      this.formattedText = [];
      if (this.header.replace(/<b>/g, "").replace(/<\/b>/g, "").trim() !== "") {
        this.formattedText = this.formattedText.concat(this.header);
      }
      this.formattedText = this.formattedText.concat(this.content);
    };
    Tooltip2.prototype.renderText = function(isRender) {
      var height = 0;
      var width = 0;
      var subWidth = 0;
      var lines;
      var key = "properties";
      var font = extend({}, this.textStyle, null, true)[key];
      var groupElement = getElement(this.element.id + "_group");
      var tspanElement;
      var textCollection;
      var tspanStyle = "";
      var line;
      var tspanOption;
      this.findFormattedText();
      this.isWrap = false;
      var isRtlEnabled = document.body.getAttribute("dir") === "rtl";
      var anchor = isRtlEnabled && !this.enableRTL ? "end" : "start";
      this.leftSpace = this.areaBounds.x + this.location.x;
      this.rightSpace = this.areaBounds.x + this.areaBounds.width - this.leftSpace;
      var headerContent = this.header.replace(/<b>/g, "").replace(/<\/b>/g, "").trim();
      var isBoldTag = this.header.indexOf("<b>") > -1 && this.header.indexOf("</b>") > -1;
      var headerWidth = measureText(this.formattedText[0], font, this.themeStyle.textStyle).width + 2 * this.marginX + this.arrowPadding;
      var isLeftSpace = this.location.x - headerWidth < this.location.x;
      var isRightSpace = this.areaBounds.x + this.areaBounds.width < this.location.x + headerWidth;
      var header;
      var headerSpace = headerContent !== "" && this.showHeaderLine ? this.marginY : 0;
      var isRow = true;
      var isColumn = true;
      this.markerPoint = [];
      var markerSize = this.shapes.length > 0 ? 10 : 0;
      var markerPadding = this.shapes.length > 0 ? 5 : 0;
      var spaceWidth = 4;
      var subStringLength;
      var fontSize = "12px";
      var fontWeight = "400";
      var labelColor = this.themeStyle.tooltipLightLabel;
      var dy = 22 / parseFloat(fontSize) * parseFloat(font.size || this.themeStyle.textStyle.size);
      var contentWidth = [];
      var textHeight = 0;
      if (!isRender || this.isCanvas) {
        removeElement(this.element.id + "_text");
        removeElement(this.element.id + "_header_path");
        removeElement(this.element.id + "_trackball_group");
        removeElement(this.element.id + "SVG_tooltip_definition");
      }
      if (this.controlName === "Chart" && parseFloat(fontSize) < parseFloat(font.size || this.themeStyle.textStyle.headerTextSize)) {
        textHeight = parseFloat(font.size || this.themeStyle.textStyle.size) - parseFloat(fontSize);
      }
      var options = new TextOption(this.element.id + "_text", this.marginX * 2, textHeight + this.marginY * 2 + this.padding * 2 + (this.marginY === 2 ? this.controlName === "RangeNavigator" ? 5 : 3 : 0), anchor, "");
      var parentElement = textElement(options, font, font.color || this.themeStyle.tooltipBoldLabel, groupElement, this.themeStyle.textStyle);
      var withoutHeader = this.formattedText.length === 1 && this.formattedText[0].indexOf(" : <b>") > -1;
      var isHeader = this.header !== "";
      var size = isHeader && isBoldTag ? 16 : 13;
      for (var k = 0, pointsLength = this.formattedText.length; k < pointsLength; k++) {
        textCollection = this.formattedText[k].replace(/<(b|strong)>/g, "<b>").replace(/<\/(b|strong)>/g, "</b>").split(/<br.*?>/g);
        if (this.isTextWrap && this.header !== this.formattedText[k] && this.formattedText[k].indexOf("<br") === -1) {
          subStringLength = Math.round(this.leftSpace > this.rightSpace ? this.leftSpace / size : this.rightSpace / size);
          textCollection = this.formattedText[k].match(new RegExp(".{1," + subStringLength + "}", "g"));
        }
        if (k === 0 && !withoutHeader && this.isTextWrap && (this.leftSpace < headerWidth || isLeftSpace) && (this.rightSpace < headerWidth || isRightSpace)) {
          subStringLength = Math.round(this.leftSpace > this.rightSpace ? this.leftSpace / size : this.rightSpace / size);
          header = headerContent !== "" ? headerContent : this.formattedText[k];
          textCollection = header.match(new RegExp(".{1," + subStringLength + "}", "g"));
          this.wrappedText = isBoldTag ? "<b>" + textCollection.join("<br>") + "</b>" : textCollection.join("<br>");
          this.isWrap = textCollection.length > 1;
        }
        if (textCollection[0] === "") {
          continue;
        }
        if (k !== 0 || headerContent === "") {
          this.markerPoint.push((headerContent !== "" && this.showHeaderLine ? this.marginY : 0) + options.y + height - (textHeight !== 0 ? textHeight / this.markerSize * (parseFloat(font.size || this.themeStyle.textStyle.headerTextSize) / this.markerSize) : 0));
        }
        for (var i = 0, len = textCollection.length; i < len; i++) {
          lines = textCollection[i].replace(/<b>/g, "<br><b>").replace(/<\/b>/g, "</b><br>").replace(/:/g, this.enableRTL ? "<br>‎: <br>" : "<br>‎:<br>").split("<br>");
          if (this.enableRTL && lines.length > 0 && textCollection[i].match(/:/g)) {
            lines[0] = lines[0].trim();
            lines.reverse();
          }
          subWidth = 0;
          isColumn = true;
          height += dy;
          for (var j = 0, len_1 = lines.length; j < len_1; j++) {
            line = lines[j];
            if (this.enableRTL && line !== "" && this.isRTLText(line)) {
              line = line.concat("‎");
            }
            if (!/\S/.test(line) && line !== "") {
              line = " ";
            }
            if (!isColumn && line === " " || line.replace(/<b>/g, "").replace(/<\/b>/g, "").trim() !== "") {
              subWidth += line !== " " ? spaceWidth : 0;
              if (isColumn && !isRow) {
                if (this.header.indexOf("<br") > -1 && k !== 0) {
                  headerSpace += this.header.split(/<br.*?>/g).length;
                }
                tspanOption = {
                  x: this.marginX * 2 + (markerSize + markerPadding),
                  dy: dy + (isColumn ? headerSpace : 0),
                  fill: ""
                };
                headerSpace = null;
              } else {
                if (isRow && isColumn) {
                  tspanOption = {
                    x: headerContent === "" ? this.marginX * 2 + (markerSize + markerPadding) : this.marginX * 2 + (this.isWrap ? markerSize + markerPadding : 0)
                  };
                } else {
                  tspanOption = {};
                }
              }
              isColumn = false;
              tspanElement = this.renderer.createTSpan(tspanOption, "");
              parentElement.appendChild(tspanElement);
              if (line.indexOf("<b>") > -1 || isBoldTag && j === 0 && k === 0 && (isHeader || this.isWrap)) {
                fontWeight = "600";
                labelColor = this.themeStyle.tooltipBoldLabel;
                tspanStyle = "font-weight:" + fontWeight;
                font.fontWeight = fontWeight;
                tspanElement.setAttribute("fill", this.textStyle.color || labelColor);
              } else {
                tspanStyle = fontWeight === "600" ? "font-weight:" + fontWeight : "";
                font.fontWeight = fontWeight;
                tspanElement.setAttribute("fill", this.textStyle.color || labelColor);
              }
              if (line.indexOf("</b>") > -1 || isBoldTag && j === len_1 - 1 && k === 0 && (isHeader || this.isWrap)) {
                fontWeight = "Normal";
                labelColor = this.themeStyle.tooltipLightLabel;
              }
              if (tspanStyle !== "") {
                tspanElement.style.fontWeight = tspanStyle.split("font-weight:")[1];
                tspanElement.style.color = tspanElement.getAttribute("fill");
              }
              tspanElement.style.fontFamily = "inherit";
              tspanElement.style.fontStyle = "inherit";
              tspanElement.style.fontSize = this.header === this.formattedText[k] ? font.size || this.themeStyle.textStyle.headerTextSize : line.indexOf("<b>") > -1 || line.indexOf("</b>") > -1 ? font.size || this.themeStyle.textStyle.boldTextSize : font.size || this.themeStyle.textStyle.size;
              tspanElement.style.fontWeight = this.header === this.formattedText[k] && (this.header.indexOf("<b>") === -1 || this.header.indexOf("</b>") === -1) ? this.textStyle.fontWeight || (this.theme.indexOf("Tailwind3") > -1 ? "500" : "600") : line.indexOf("<b>") > -1 || line.indexOf("</b>") > -1 ? this.theme.indexOf("Bootstrap5") > -1 ? this.textStyle.fontWeight || "600" : "bold" : (line.indexOf("<b>") === -1 || line.indexOf("</b>") === -1) && (this.theme.indexOf("Bootstrap5") > -1 || this.theme.indexOf("Tailwind3") > -1) ? this.textStyle.fontWeight || (this.theme.indexOf("Tailwind3") > -1 ? "500" : "600") : this.textStyle.fontWeight || font.fontWeight;
              var textFont = extend({}, this.textStyle, null, true)[key];
              textFont.fontWeight = tspanElement.style.fontWeight;
              textFont.size = tspanElement.style.fontSize;
              isRow = false;
              tspanElement.textContent = line = this.getTooltipTextContent(line);
              subWidth += measureText(line, textFont, this.themeStyle.textStyle).width;
            }
          }
          subWidth -= spaceWidth;
          width = Math.max(width, subWidth);
          contentWidth.push(subWidth);
        }
      }
      this.elementSize = new Size(width + (width > 0 ? 2 * this.marginX : 0), height);
      this.elementSize.width += markerSize + markerPadding;
      var element = parentElement.childNodes[0];
      if (headerContent !== "" && element && !this.isWrap) {
        font.fontWeight = "600";
        var width_1 = (this.elementSize.width + 2 * this.padding) / 2 - measureText(headerContent, font, this.themeStyle.textStyle, true).width / 2;
        element.setAttribute("x", width_1.toString());
      }
      this.renderContentRTL(parentElement, isHeader, markerSize + markerPadding, contentWidth);
    };
    Tooltip2.prototype.renderContentRTL = function(textElement2, isHeader, markerSize, contentWidth) {
      if (this.enableRTL) {
        var tspanElement = void 0;
        var contentWidthIndex = isHeader ? 1 : 0;
        for (var i = 0; i < textElement2.childNodes.length; i++) {
          tspanElement = textElement2.childNodes[i];
          if ((!isHeader || i > 0) && !isNullOrUndefined(tspanElement.getAttribute("x"))) {
            tspanElement.setAttribute("x", (this.elementSize.width - (markerSize + contentWidth[contentWidthIndex])).toString());
            contentWidthIndex++;
          }
        }
      }
    };
    Tooltip2.prototype.getTooltipTextContent = function(tooltipText) {
      var characterCollection = tooltipText.match(/<[a-zA-Z\/](.|\n)*?>/g);
      if (isNullOrUndefined(characterCollection)) {
        return tooltipText;
      }
      var isRtlText = this.isRTLText(tooltipText);
      for (var i = 0; i < characterCollection.length; i++) {
        if (this.isValidHTMLElement(characterCollection[i].replace("<", "").replace("/", "").replace(">", "").trim())) {
          tooltipText = tooltipText.replace(characterCollection[i], isRtlText ? "‎" : "");
        }
      }
      return tooltipText;
    };
    Tooltip2.prototype.isValidHTMLElement = function(element) {
      return document.createElement(element).toString() !== "[object HTMLUnknownElement]";
    };
    Tooltip2.prototype.isRTLText = function(tooltipContent) {
      return /[\u0590-\u07FF\u200F\u202B\u202E\uFB1D-\uFDFD\uFE70-\uFEFC]/.test(tooltipContent);
    };
    Tooltip2.prototype.createTemplate = function(areaBounds, location) {
      var argsData = {
        cancel: false,
        name: "tooltipRender",
        tooltip: this
      };
      this.trigger("tooltipRender", argsData);
      var parent = document.getElementById(this.element.id);
      if (this.isCanvas) {
        this.removeSVG();
      }
      var firstElement = !isNullOrUndefined(parent) ? parent.firstElementChild : null;
      if (firstElement) {
        remove(firstElement);
      }
      if (!argsData.cancel) {
        var elem = createElement("div", {
          id: this.element.id + "parent_template"
        });
        var templateElement = void 0;
        if (this.controlName === "Chart" && this.shared) {
          for (var i = 0; i < this.data.length; i++) {
            var sharedTemplateElement = this.templateFn(this.data[i], this.controlInstance, elem.id, elem.id + "_blazorTemplate", "");
            if (i === 0) {
              templateElement = sharedTemplateElement;
            } else {
              if (sharedTemplateElement.length > 1) {
                templateElement[i].outerHTML = sharedTemplateElement[i].outerHTML || sharedTemplateElement[i].textContent;
              } else {
                templateElement[templateElement.length - 1].outerHTML += sharedTemplateElement[0].outerHTML;
              }
            }
          }
        } else {
          templateElement = this.templateFn(this.data, this.controlInstance, elem.id, elem.id + "_blazorTemplate", "");
        }
        while (templateElement && templateElement.length > 0) {
          if (isBlazor() || templateElement.length === 1) {
            elem.appendChild(templateElement[0]);
            templateElement = null;
          } else {
            elem.appendChild(templateElement[0]);
          }
        }
        if (!isNullOrUndefined(parent)) {
          parent.appendChild(elem);
        }
        var element = this.isCanvas ? elem : this.element;
        var rect = element.getBoundingClientRect();
        this.padding = 0;
        this.elementSize = new Size(rect.width, rect.height);
        var tooltipRect = this.shared ? this.sharedTooltipLocation(areaBounds, this.location.x, this.location.y) : this.tooltipLocation(areaBounds, location, new TooltipLocation(0, 0), new TooltipLocation(0, 0));
        if (this.enableAnimation && !this.isFirst && !this.crosshair) {
          this.animateTooltipDiv(this.element, tooltipRect);
        } else {
          this.updateDiv(element, tooltipRect.x, tooltipRect.y);
        }
        if (this.blazorTemplate) {
          var tooltipRendered = function() {
            var rect1 = getElement(thisObject_1.element.id).getBoundingClientRect();
            thisObject_1.elementSize = new Size(rect1.width, rect1.height);
            var tooltipRect1 = thisObject_1.tooltipLocation(areaBounds, location, new TooltipLocation(0, 0), new TooltipLocation(0, 0));
            thisObject_1.updateDiv(getElement(thisObject_1.element.id), tooltipRect1.x, tooltipRect1.y);
          };
          var thisObject_1 = this;
          tooltipRendered.bind(thisObject_1, areaBounds, location);
          updateBlazorTemplate(this.element.id + "parent_template_blazorTemplate", this.blazorTemplate.name, this.blazorTemplate.parent, void 0, tooltipRendered);
        }
      } else {
        remove(getElement(this.element.id + "_tooltip"));
      }
    };
    Tooltip2.prototype.sharedTooltipLocation = function(bounds, x, y) {
      var width = this.elementSize.width + 2 * this.marginX;
      var height = this.elementSize.height + 2 * this.marginY;
      var tooltipRect = new Rect(x + 2 * this.padding, y - height - this.padding, width, height);
      if (tooltipRect.y < bounds.y) {
        tooltipRect.y += tooltipRect.height + 2 * this.padding;
      }
      if (tooltipRect.y + tooltipRect.height > bounds.y + bounds.height) {
        tooltipRect.y = Math.max(bounds.y + bounds.height - (tooltipRect.height + 2 * this.padding), bounds.y);
      }
      if (tooltipRect.x + tooltipRect.width > bounds.x + bounds.width) {
        tooltipRect.x = bounds.x + this.location.x - (tooltipRect.width + 4 * this.padding);
      }
      if (tooltipRect.x < bounds.x) {
        tooltipRect.x = bounds.x;
      }
      return tooltipRect;
    };
    Tooltip2.prototype.getCurrentPosition = function(bounds, symbolLocation, arrowLocation, tipLocation) {
      var position = this.tooltipPlacement;
      var clipX = this.clipBounds.x;
      var clipY = this.clipBounds.y;
      var markerHeight = this.offset;
      var width = this.elementSize.width + 2 * this.marginX;
      var height = this.elementSize.height + 2 * this.marginY;
      var location = new TooltipLocation(symbolLocation.x, symbolLocation.y);
      if (position === "Top" || position === "Bottom") {
        location = new TooltipLocation(location.x + clipX - this.elementSize.width / 2 - this.padding, location.y + clipY - this.elementSize.height - 2 * this.padding - this.arrowPadding - markerHeight);
        arrowLocation.x = tipLocation.x = width / 2;
        if (position === "Bottom") {
          location.y = symbolLocation.y + clipY + markerHeight;
        }
        if (bounds.x + bounds.width < location.x + width) {
          location.x = bounds.width > width ? bounds.x + bounds.width - width + 6 : bounds.x;
          arrowLocation.x = tipLocation.x = bounds.width > width ? bounds.x + symbolLocation.x - location.x : symbolLocation.x;
        } else if (bounds.x > location.x) {
          location.x = bounds.x;
          arrowLocation.x = tipLocation.x = symbolLocation.x;
        }
      } else {
        location = new TooltipLocation(location.x + clipX + markerHeight, location.y + clipY - this.elementSize.height / 2 - this.padding);
        arrowLocation.y = tipLocation.y = height / 2;
        if (position === "Left") {
          location.x = symbolLocation.x + clipX - markerHeight - (width + this.arrowPadding);
        }
        if (bounds.y + bounds.height < location.y + height) {
          location.y = bounds.height > height ? bounds.y + bounds.height - height + 6 : bounds.y;
          arrowLocation.y = tipLocation.y = bounds.height > height ? bounds.y + symbolLocation.y - location.y : symbolLocation.y;
        } else if (bounds.y > location.y) {
          location.y = bounds.y;
          arrowLocation.y = tipLocation.y = symbolLocation.y;
        }
      }
      return new Rect(location.x, location.y, width, height);
    };
    Tooltip2.prototype.tooltipLocation = function(bounds, symbolLocation, arrowLocation, tipLocation) {
      if (!isNullOrUndefined(this.tooltipPlacement)) {
        var tooltipRect = this.getCurrentPosition(bounds, symbolLocation, arrowLocation, tipLocation);
        return tooltipRect;
      }
      var location = new TooltipLocation(symbolLocation.x, symbolLocation.y);
      var width = this.elementSize.width + 2 * this.marginX;
      var height = this.elementSize.height + 2 * this.marginY;
      var markerHeight = this.offset;
      var clipX = this.clipBounds.x;
      var clipY = this.clipBounds.y;
      var boundsX = bounds.x;
      var boundsY = bounds.y;
      this.outOfBounds = false;
      if (!this.inverted) {
        location = new TooltipLocation(location.x + clipX - this.elementSize.width / 2 - this.padding, location.y + clipY - this.elementSize.height - 2 * (this.allowHighlight ? this.highlightPadding : this.padding) - this.arrowPadding - markerHeight);
        arrowLocation.x = tipLocation.x = width / 2;
        if ((location.y < boundsY || this.isNegative) && !(this.controlName === "Progressbar")) {
          location.y = (symbolLocation.y < 0 ? 0 : symbolLocation.y) + clipY + markerHeight;
        }
        if (location.y + height + this.arrowPadding > boundsY + bounds.height) {
          location.y = Math.min(symbolLocation.y, boundsY + bounds.height) + clipY - this.elementSize.height - 2 * this.padding - this.arrowPadding - markerHeight;
        }
        if ((location.x + width > boundsX + bounds.width && location.y < boundsY || this.isNegative) && !(this.controlName === "Progressbar")) {
          location.y = (symbolLocation.y < 0 ? 0 : symbolLocation.y) + clipY + markerHeight;
        }
        tipLocation.x = width / 2;
        if (location.x < boundsX && !(this.controlName === "Progressbar")) {
          arrowLocation.x -= boundsX - location.x;
          tipLocation.x -= boundsX - location.x;
          location.x = boundsX;
        }
        if (location.x + width > boundsX + bounds.width && !(this.controlName === "Progressbar")) {
          arrowLocation.x += location.x + width - (boundsX + bounds.width);
          tipLocation.x += location.x + width - (boundsX + bounds.width);
          location.x -= location.x + width - (boundsX + bounds.width);
        }
        if (location.x < boundsX && !(this.controlName === "Progressbar")) {
          arrowLocation.x -= boundsX - location.x;
          tipLocation.x -= boundsX - location.x;
          location.x = boundsX;
        }
        if (arrowLocation.x + this.arrowPadding > width - this.rx) {
          arrowLocation.x = width - this.rx - this.arrowPadding;
          tipLocation.x = width - this.rx - this.arrowPadding;
        }
        if (arrowLocation.x - this.arrowPadding < this.rx) {
          arrowLocation.x = tipLocation.x = this.rx + this.arrowPadding;
        }
        if (this.controlName === "Chart") {
          if (bounds.x + bounds.width - (location.x + arrowLocation.x) < this.areaMargin + this.arrowPadding || location.x + arrowLocation.x < this.areaMargin + this.arrowPadding) {
            this.outOfBounds = true;
          }
          if (this.template && location.y < 0) {
            location.y = symbolLocation.y + clipY + markerHeight;
          }
          if (!withInAreaBounds(location.x, location.y, bounds) || this.outOfBounds) {
            this.inverted = !this.inverted;
            this.revert = true;
            location = new TooltipLocation(symbolLocation.x + markerHeight + clipX, symbolLocation.y + clipY - this.elementSize.height / 2 - this.padding);
            tipLocation.x = arrowLocation.x = 0;
            tipLocation.y = arrowLocation.y = height / 2;
            if (location.x + this.arrowPadding + width > boundsX + bounds.width || this.isNegative) {
              location.x = (symbolLocation.x > boundsX + bounds.width ? bounds.width : symbolLocation.x) + clipX - markerHeight - (this.arrowPadding + width);
            }
            if (location.x < boundsX) {
              location.x = (symbolLocation.x < 0 ? 0 : symbolLocation.x) + markerHeight + clipX;
            }
            if (location.y <= boundsY) {
              tipLocation.y -= boundsY - location.y;
              arrowLocation.y -= boundsY - location.y;
              location.y = boundsY;
            }
            if (location.y + height >= bounds.height + boundsY) {
              arrowLocation.y += location.y + height - (bounds.height + boundsY);
              tipLocation.y += location.y + height - (bounds.height + boundsY);
              location.y -= location.y + height - (bounds.height + boundsY);
            }
            if (this.arrowPadding + arrowLocation.y > height - this.ry) {
              arrowLocation.y = height - this.arrowPadding - this.ry;
              tipLocation.y = height;
            }
            if (arrowLocation.y - this.arrowPadding < this.ry) {
              arrowLocation.y = this.arrowPadding + this.ry;
              tipLocation.y = 0;
            }
          }
        }
      } else {
        location = new TooltipLocation(location.x + clipX + markerHeight, location.y + clipY - this.elementSize.height / 2 - this.padding);
        arrowLocation.y = tipLocation.y = height / 2;
        if (location.x + width + this.arrowPadding > boundsX + bounds.width || this.isNegative) {
          location.x = (symbolLocation.x > bounds.width + bounds.x ? bounds.width : symbolLocation.x) + clipX - markerHeight - (width + this.arrowPadding);
        }
        if (location.x < boundsX) {
          location.x = (symbolLocation.x < 0 ? 0 : symbolLocation.x) + clipX + markerHeight;
        }
        if (location.x + width + this.arrowPadding > boundsX + bounds.width) {
          location.x = (symbolLocation.x > bounds.width + bounds.x ? bounds.width : symbolLocation.x) + clipX - markerHeight - (width + this.arrowPadding);
        }
        if (location.y <= boundsY) {
          arrowLocation.y -= boundsY - location.y;
          tipLocation.y -= boundsY - location.y;
          location.y = boundsY;
        }
        if (location.y + height >= boundsY + bounds.height) {
          arrowLocation.y += location.y + height - (boundsY + bounds.height);
          tipLocation.y += location.y + height - (boundsY + bounds.height);
          location.y -= location.y + height - (boundsY + bounds.height);
        }
        if (arrowLocation.y + this.arrowPadding > height - this.ry) {
          arrowLocation.y = height - this.ry - this.arrowPadding;
          tipLocation.y = height;
        }
        if (arrowLocation.y - this.arrowPadding < this.ry) {
          arrowLocation.y = tipLocation.y = this.ry + this.arrowPadding;
        }
        if (this.controlName === "Chart") {
          if (location.y + arrowLocation.y < this.areaMargin + this.arrowPadding || bounds.y + bounds.height - (location.y + arrowLocation.y) < this.areaMargin + this.arrowPadding) {
            this.outOfBounds = true;
          }
          if (!withInAreaBounds(location.x, location.y, bounds) || this.outOfBounds) {
            this.inverted = !this.inverted;
            location = new TooltipLocation(symbolLocation.x + clipX - this.padding - this.elementSize.width / 2, symbolLocation.y + clipY - this.elementSize.height - 2 * this.padding - markerHeight - this.arrowPadding);
            this.revert = true;
            tipLocation.x = arrowLocation.x = width / 2;
            tipLocation.y = arrowLocation.y = 0;
            if (location.y < boundsY || this.isNegative) {
              location.y = (symbolLocation.y < 0 ? 0 : symbolLocation.y) + markerHeight + clipY;
            }
            if (location.y + this.arrowPadding + height > boundsY + bounds.height) {
              location.y = Math.min(symbolLocation.y, boundsY + bounds.height) + clipY - this.elementSize.height - 2 * this.padding - markerHeight - this.arrowPadding;
            }
            tipLocation.x = width / 2;
            if (location.x < boundsX) {
              tipLocation.x -= boundsX - location.x;
              arrowLocation.x -= boundsX - location.x;
              location.x = boundsX;
            }
            if (location.x + width > bounds.width + boundsX) {
              arrowLocation.x += location.x + width - (bounds.width + boundsX);
              tipLocation.x += location.x + width - (bounds.width + boundsX);
              location.x -= location.x + width - (bounds.width + boundsX);
            }
            if (this.arrowPadding + arrowLocation.x > width - this.rx) {
              tipLocation.x = width - this.rx - this.arrowPadding;
              arrowLocation.x = width - this.rx - this.arrowPadding;
            }
            if (arrowLocation.x - this.arrowPadding < this.rx) {
              arrowLocation.x = tipLocation.x = this.rx + this.arrowPadding;
            }
          }
        }
      }
      return new Rect(location.x, location.y, width, height);
    };
    Tooltip2.prototype.animateTooltipDiv = function(tooltipDiv, rect) {
      var _this = this;
      var x = parseFloat(tooltipDiv.style.left);
      var y = parseFloat(tooltipDiv.style.top);
      var duration = this.duration === 0 && animationMode === "Enable" ? 300 : this.duration;
      if (this.controlName === "Chart" && this.shared && !this.enableRTL) {
        var transformValues = this.element.style.transform.split(/[(),\s]+/);
        x = parseFloat(transformValues[1]);
        y = parseFloat(transformValues[2]);
        tooltipDiv.style.transition = "transform " + duration + "ms ease";
      }
      var currenDiff;
      new Animation({}).animate(tooltipDiv, {
        duration,
        progress: function(args) {
          currenDiff = args.timeStamp / args.duration;
          tooltipDiv.style.animation = null;
          if (_this.controlName === "Chart" && _this.shared && !_this.enableRTL) {
            tooltipDiv.style.transform = "translate(" + (x + (rect.x - x)) + "px," + (y + rect.y - y) + "px)";
            tooltipDiv.style.left = "";
            tooltipDiv.style.top = "";
          } else if (_this.controlName === "Chart" && _this.showNearestTooltip) {
            tooltipDiv.style.transition = "left " + args.duration + "ms ease-out, top " + args.duration + "ms ease-out";
            tooltipDiv.style.left = rect.x + "px";
            tooltipDiv.style.top = rect.y + "px";
          } else {
            tooltipDiv.style.left = x + currenDiff * (rect.x - x) + "px";
            tooltipDiv.style.top = y + currenDiff * (rect.y - y) + "px";
            tooltipDiv.style.transform = _this.controlName === "RangeNavigator" ? tooltipDiv.style.transform : "";
          }
        },
        end: function(model) {
          _this.updateDiv(tooltipDiv, rect.x, rect.y);
          _this.trigger("animationComplete", {
            tooltip: _this
          });
        }
      });
    };
    Tooltip2.prototype.updateDiv = function(tooltipDiv, x, y) {
      if (this.controlName === "Chart" && this.shared && !this.crosshair && !this.enableRTL) {
        tooltipDiv.style.transform = "translate(" + x + "px," + y + "px)";
        tooltipDiv.style.left = "";
        tooltipDiv.style.top = "";
      } else {
        tooltipDiv.style.left = x + "px";
        tooltipDiv.style.top = y + "px";
        tooltipDiv.style.transform = this.controlName === "RangeNavigator" ? tooltipDiv.style.transform : "";
      }
    };
    Tooltip2.prototype.updateTemplateFn = function() {
      if (this.template) {
        try {
          if (typeof this.template !== "function" && document.querySelectorAll(this.template).length) {
            this.templateFn = compile(document.querySelector(this.template).innerHTML.trim());
          } else {
            this.templateFn = compile(this.template);
          }
        } catch (e) {
          this.templateFn = compile(this.template);
        }
      }
    };
    Tooltip2.prototype.fadeOut = function() {
      var _this = this;
      var tooltipElement = this.isCanvas && !this.template ? getElement(this.element.id + "_svg") : getElement(this.element.id);
      var tooltipDiv = getElement(this.element.id);
      if (tooltipElement) {
        var tooltipGroup_1 = tooltipElement.firstChild;
        if (tooltipGroup_1.nodeType !== Node.ELEMENT_NODE) {
          tooltipGroup_1 = tooltipElement.firstElementChild;
        }
        if (this.isCanvas && !this.template) {
          tooltipGroup_1 = document.getElementById(this.element.id + "_group") ? document.getElementById(this.element.id + "_group") : tooltipGroup_1;
        }
        if (!tooltipGroup_1) {
          return null;
        }
        var opacity_1 = parseFloat(tooltipGroup_1.getAttribute("opacity"));
        opacity_1 = !isNullOrUndefined(opacity_1) ? opacity_1 : 1;
        new Animation({}).animate(tooltipGroup_1, {
          duration: 200,
          progress: function(args) {
            _this.progressAnimation(tooltipGroup_1, opacity_1, args.timeStamp / args.duration);
          },
          end: function() {
            _this.fadeOuted = true;
            _this.endAnimation(tooltipGroup_1);
            tooltipDiv.style.transition = "";
          }
        });
      }
    };
    Tooltip2.prototype.progressAnimation = function(tooltipGroup, opacity, timeStamp) {
      tooltipGroup.style.animation = "";
      tooltipGroup.setAttribute("opacity", (opacity - timeStamp).toString());
    };
    Tooltip2.prototype.endAnimation = function(tooltipGroup) {
      tooltipGroup.setAttribute("opacity", "0");
      if (this.template) {
        tooltipGroup.style.display = "none";
      }
      this.trigger("animationComplete", {
        tooltip: this
      });
    };
    Tooltip2.prototype.getPersistData = function() {
      var keyEntity = [];
      return this.addOnPersist(keyEntity);
    };
    Tooltip2.prototype.getModuleName = function() {
      return "tooltip";
    };
    Tooltip2.prototype.destroy = function() {
      _super.prototype.destroy.call(this);
      this.element.classList.remove("e-tooltip");
    };
    Tooltip2.prototype.onPropertyChanged = function(newProp, oldProp) {
      if (this.blazorTemplate) {
        resetBlazorTemplate(this.element.id + "parent_template_blazorTemplate");
      }
      this.isFirst = false;
      this.render();
    };
    __decorate([Property(false)], Tooltip2.prototype, "enable", void 0);
    __decorate([Property(false)], Tooltip2.prototype, "shared", void 0);
    __decorate([Property(false)], Tooltip2.prototype, "crosshair", void 0);
    __decorate([Property(false)], Tooltip2.prototype, "enableShadow", void 0);
    __decorate([Property(null)], Tooltip2.prototype, "fill", void 0);
    __decorate([Property("")], Tooltip2.prototype, "header", void 0);
    __decorate([Property(0.75)], Tooltip2.prototype, "opacity", void 0);
    __decorate([Complex({
      size: "12px",
      fontWeight: null,
      color: null,
      fontStyle: "Normal",
      fontFamily: null
    }, TextStyle)], Tooltip2.prototype, "textStyle", void 0);
    __decorate([Property(null)], Tooltip2.prototype, "template", void 0);
    __decorate([Property(true)], Tooltip2.prototype, "enableAnimation", void 0);
    __decorate([Property(300)], Tooltip2.prototype, "duration", void 0);
    __decorate([Property(false)], Tooltip2.prototype, "inverted", void 0);
    __decorate([Property(false)], Tooltip2.prototype, "isNegative", void 0);
    __decorate([Complex({
      color: null,
      width: null
    }, TooltipBorder)], Tooltip2.prototype, "border", void 0);
    __decorate([Property([])], Tooltip2.prototype, "content", void 0);
    __decorate([Property(10)], Tooltip2.prototype, "markerSize", void 0);
    __decorate([Complex({
      x: 0,
      y: 0
    }, ToolLocation)], Tooltip2.prototype, "clipBounds", void 0);
    __decorate([Property([])], Tooltip2.prototype, "palette", void 0);
    __decorate([Property([])], Tooltip2.prototype, "shapes", void 0);
    __decorate([Complex({
      x: 0,
      y: 0
    }, ToolLocation)], Tooltip2.prototype, "location", void 0);
    __decorate([Property(0)], Tooltip2.prototype, "offset", void 0);
    __decorate([Property(4)], Tooltip2.prototype, "rx", void 0);
    __decorate([Property(4)], Tooltip2.prototype, "ry", void 0);
    __decorate([Property(5)], Tooltip2.prototype, "marginX", void 0);
    __decorate([Property(5)], Tooltip2.prototype, "marginY", void 0);
    __decorate([Property(7)], Tooltip2.prototype, "arrowPadding", void 0);
    __decorate([Property(null)], Tooltip2.prototype, "data", void 0);
    __decorate([Property("Material")], Tooltip2.prototype, "theme", void 0);
    __decorate([Complex({
      x: 0,
      y: 0,
      width: 0,
      height: 0
    }, AreaBounds)], Tooltip2.prototype, "areaBounds", void 0);
    __decorate([Property(null)], Tooltip2.prototype, "availableSize", void 0);
    __decorate([Property()], Tooltip2.prototype, "blazorTemplate", void 0);
    __decorate([Property(false)], Tooltip2.prototype, "isCanvas", void 0);
    __decorate([Property(false)], Tooltip2.prototype, "isTextWrap", void 0);
    __decorate([Property(false)], Tooltip2.prototype, "isFixed", void 0);
    __decorate([Property(null)], Tooltip2.prototype, "tooltipPlacement", void 0);
    __decorate([Property(null)], Tooltip2.prototype, "controlInstance", void 0);
    __decorate([Property("")], Tooltip2.prototype, "controlName", void 0);
    __decorate([Property(false)], Tooltip2.prototype, "showNearestTooltip", void 0);
    __decorate([Event()], Tooltip2.prototype, "tooltipRender", void 0);
    __decorate([Event()], Tooltip2.prototype, "loaded", void 0);
    __decorate([Event()], Tooltip2.prototype, "animationComplete", void 0);
    __decorate([Property(false)], Tooltip2.prototype, "enableRTL", void 0);
    __decorate([Property(false)], Tooltip2.prototype, "allowHighlight", void 0);
    __decorate([Property(true)], Tooltip2.prototype, "showHeaderLine", void 0);
    Tooltip2 = __decorate([NotifyPropertyChanges], Tooltip2);
    return Tooltip2;
  }(Component)
);

export {
  SvgRenderer,
  CanvasRenderer,
  measureText,
  Size,
  Rect,
  TextOption,
  getElement,
  removeElement,
  PathOption,
  textElement,
  Tooltip
};
//# sourceMappingURL=chunk-JYQ5LDSI.js.map
