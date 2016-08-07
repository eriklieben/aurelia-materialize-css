"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var aurelia_framework_1 = require("aurelia-framework");
var config_1 = require("./../../config");
var CollapsibleElement = (function () {
    function CollapsibleElement() {
    }
    CollapsibleElement.prototype.attached = function () {
        var _this = this;
        this.element.classList.add("collapsible");
        this.element.setAttribute("data-collapsible", this.type);
        if (this.class !== undefined && this.class !== null) {
            this.class.split(" ").forEach(function (element) {
                if (element !== "") {
                    _this.element.classList.add(element);
                }
            });
        }
        $(this.element).collapsible();
    };
    CollapsibleElement.prototype.detached = function () {
        this.element.removeAttribute("data-collapsible");
        this.element.classList.remove("collapsible");
    };
    __decorate([
        aurelia_framework_1.bindable(), 
        __metadata('design:type', String)
    ], CollapsibleElement.prototype, "id", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultValue: "accordion" }), 
        __metadata('design:type', String)
    ], CollapsibleElement.prototype, "type", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultValue: "" }), 
        __metadata('design:type', String)
    ], CollapsibleElement.prototype, "class", void 0);
    CollapsibleElement = __decorate([
        aurelia_framework_1.customElement(config_1.config.collapsible),
        aurelia_framework_1.containerless,
        aurelia_framework_1.inlineView("<template><ul ref='element' id='${id}'><slot></slot></ul></template>"), 
        __metadata('design:paramtypes', [])
    ], CollapsibleElement);
    return CollapsibleElement;
}());
exports.CollapsibleElement = CollapsibleElement;

//# sourceMappingURL=collapsibleElement.js.map
