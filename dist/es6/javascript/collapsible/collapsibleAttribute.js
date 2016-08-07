var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-framework", "aurelia-dependency-injection", "./../../config", "jquery"], function (require, exports, aurelia_framework_1, aurelia_dependency_injection_1, config_1, $) {
    "use strict";
    var CollapsibleAttribute = (function () {
        function CollapsibleAttribute(element) {
            this.element = element;
        }
        CollapsibleAttribute.prototype.attached = function () {
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
        CollapsibleAttribute.prototype.detached = function () {
            this.element.removeAttribute("data-collapsible");
            this.element.classList.remove("collapsible");
        };
        __decorate([
            aurelia_framework_1.bindable({ defaultValue: "accordion" }), 
            __metadata('design:type', String)
        ], CollapsibleAttribute.prototype, "type", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultValue: "" }), 
            __metadata('design:type', String)
        ], CollapsibleAttribute.prototype, "class", void 0);
        CollapsibleAttribute = __decorate([
            aurelia_framework_1.customAttribute(config_1.config.collapsible),
            aurelia_dependency_injection_1.inject(Element), 
            __metadata('design:paramtypes', [HTMLUListElement])
        ], CollapsibleAttribute);
        return CollapsibleAttribute;
    }());
    exports.CollapsibleAttribute = CollapsibleAttribute;
});

//# sourceMappingURL=collapsibleAttribute.js.map
