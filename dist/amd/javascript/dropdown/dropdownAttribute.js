var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-framework", "aurelia-dependency-injection", "./../../config"], function (require, exports, aurelia_framework_1, aurelia_dependency_injection_1, config_1) {
    "use strict";
    var DropdownAttribute = (function () {
        function DropdownAttribute(element) {
            this.element = element;
        }
        DropdownAttribute.prototype.attached = function () {
            var options = {
                alignment: this.alignment,
                belowOrigin: this.belowOrigin,
                constrain_width: this.constrainWidth,
                gutter: this.gutter,
                hover: this.hover,
                inDuration: this.inDuration,
                outDuration: this.outDuration,
            };
            this.element.classList.add("dropdown-button");
            $(this.element).dropdown(options);
        };
        DropdownAttribute.prototype.detached = function () {
            this.element.classList.remove("dropdown-button");
        };
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', String)
        ], DropdownAttribute.prototype, "title", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime, defaultValue: "left" }), 
            __metadata('design:type', String)
        ], DropdownAttribute.prototype, "alignment", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime, defaultValue: false }), 
            __metadata('design:type', Boolean)
        ], DropdownAttribute.prototype, "belowOrigin", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime, defaultValue: true }), 
            __metadata('design:type', Boolean)
        ], DropdownAttribute.prototype, "constrainWidth", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime, defaultValue: 0 }), 
            __metadata('design:type', Number)
        ], DropdownAttribute.prototype, "gutter", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime, defaultValue: false }), 
            __metadata('design:type', Boolean)
        ], DropdownAttribute.prototype, "hover", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime, defaultValue: 300 }), 
            __metadata('design:type', Number)
        ], DropdownAttribute.prototype, "inDuration", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime, defaultValue: 225 }), 
            __metadata('design:type', Number)
        ], DropdownAttribute.prototype, "outDuration", void 0);
        DropdownAttribute = __decorate([
            aurelia_framework_1.customAttribute(config_1.config.dropdown),
            aurelia_dependency_injection_1.inject(Element), 
            __metadata('design:paramtypes', [Element])
        ], DropdownAttribute);
        return DropdownAttribute;
    }());
    exports.DropdownAttribute = DropdownAttribute;
});

//# sourceMappingURL=dropdownAttribute.js.map
