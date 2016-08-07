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
var aurelia_dependency_injection_1 = require("aurelia-dependency-injection");
var config_1 = require("./../../config");
var CollapsibleBodyAttribute = (function () {
    function CollapsibleBodyAttribute(element) {
        this.element = element;
    }
    CollapsibleBodyAttribute.prototype.attached = function () {
        this.element.classList.add("collapsible-body");
    };
    CollapsibleBodyAttribute.prototype.detached = function () {
        this.element.classList.remove("collapsible-body");
    };
    CollapsibleBodyAttribute = __decorate([
        aurelia_framework_1.customAttribute(config_1.config.collapsibleBody),
        aurelia_dependency_injection_1.inject(Element), 
        __metadata('design:paramtypes', [Element])
    ], CollapsibleBodyAttribute);
    return CollapsibleBodyAttribute;
}());
exports.CollapsibleBodyAttribute = CollapsibleBodyAttribute;

//# sourceMappingURL=collapsibleBodyAttribute.js.map
