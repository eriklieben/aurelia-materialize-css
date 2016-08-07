var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-framework", "./../../config"], function (require, exports, aurelia_framework_1, config_1) {
    "use strict";
    var DropdownElement = (function () {
        function DropdownElement() {
            this.id = null;
        }
        DropdownElement.prototype.attached = function () {
            if (!this.id || this.id.trim().length === 0) {
                throw new Error("id is a required attribute for the element " + config_1.config.dropdown + ".");
            }
            var options = {
                alignment: this.alignment,
                belowOrigin: this.belowOrigin,
                constrain_width: this.constrainWidth,
                gutter: this.gutter,
                hover: this.hover,
                inDuration: this.inDuration,
                outDuration: this.outDuration,
            };
            $(this.dropdownBtn).dropdown(options);
        };
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', String)
        ], DropdownElement.prototype, "title", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }), 
            __metadata('design:type', String)
        ], DropdownElement.prototype, "id", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime, defaultValue: "left" }), 
            __metadata('design:type', String)
        ], DropdownElement.prototype, "alignment", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime, defaultValue: false }), 
            __metadata('design:type', Boolean)
        ], DropdownElement.prototype, "belowOrigin", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime, defaultValue: true }), 
            __metadata('design:type', Boolean)
        ], DropdownElement.prototype, "constrainWidth", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime, defaultValue: 0 }), 
            __metadata('design:type', Number)
        ], DropdownElement.prototype, "gutter", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime, defaultValue: false }), 
            __metadata('design:type', Boolean)
        ], DropdownElement.prototype, "hover", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime, defaultValue: 300 }), 
            __metadata('design:type', Number)
        ], DropdownElement.prototype, "inDuration", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime, defaultValue: 225 }), 
            __metadata('design:type', Number)
        ], DropdownElement.prototype, "outDuration", void 0);
        DropdownElement = __decorate([
            aurelia_framework_1.customElement(config_1.config.dropdown),
            aurelia_framework_1.containerless,
            aurelia_framework_1.inlineView("<template><a class='dropdown-button btn' ref='dropdownBtn' id='${id}-button' data-activates='${id}'>${title}</a>" +
                "<ul id='${id}' class='dropdown-content'><slot></slot></ul></template>"), 
            __metadata('design:paramtypes', [])
        ], DropdownElement);
        return DropdownElement;
    }());
    exports.DropdownElement = DropdownElement;
});

//# sourceMappingURL=dropdownElement.js.map
