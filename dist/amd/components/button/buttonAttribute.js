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
    var ButtonAttribute = (function () {
        function ButtonAttribute(element) {
            this.element = element;
            this.disabled = false;
            this.flat = "false";
            this.floating = "false";
            this.large = "false";
        }
        ButtonAttribute.prototype.attached = function () {
            var _this = this;
            if (this.flat !== null && this.flat === "true") {
                this.element.classList.add("btn-flat");
            }
            else if (this.floating !== null && this.floating === "true") {
                this.element.classList.add("btn-floating");
            }
            else {
                this.element.classList.add("btn");
            }
            if (this.large !== null && this.large === "true") {
                this.element.classList.add("btn-large");
            }
            if (this.disabled) {
                this.element.classList.add("disabled");
            }
            this.element.classList.add("waves-effect");
            this.waves = this.waves.trim().toLowerCase();
            if (this.waves !== "") {
                if (!config_1.config.allowedWaves.some(function (val) { return val === _this.waves; })) {
                    return;
                }
                this.element.classList.add("waves-" + this.waves);
            }
        };
        ButtonAttribute.prototype.detached = function () {
            var _this = this;
            this.element.classList.remove("btn-flat", "btn-floating", "btn-large", "btn", "disabled", "waves-effect");
            config_1.config.allowedWaves.map(function (val) { return "waves-" + val; }).forEach(function (val) { return _this.element.classList.remove(val); });
        };
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', Object)
        ], ButtonAttribute.prototype, "disabled", void 0);
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', Object)
        ], ButtonAttribute.prototype, "flat", void 0);
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', Object)
        ], ButtonAttribute.prototype, "floating", void 0);
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', Object)
        ], ButtonAttribute.prototype, "large", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultValue: "" }), 
            __metadata('design:type', String)
        ], ButtonAttribute.prototype, "waves", void 0);
        ButtonAttribute = __decorate([
            aurelia_framework_1.customAttribute(config_1.config.button),
            aurelia_dependency_injection_1.inject(Element), 
            __metadata('design:paramtypes', [Element])
        ], ButtonAttribute);
        return ButtonAttribute;
    }());
    exports.ButtonAttribute = ButtonAttribute;
});

//# sourceMappingURL=buttonAttribute.js.map
