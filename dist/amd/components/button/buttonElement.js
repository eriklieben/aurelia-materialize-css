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
    var ButtonElement = (function () {
        function ButtonElement() {
            this.disabled = false;
            this.flat = false;
            this.floating = false;
            this.large = false;
        }
        ButtonElement.prototype.attached = function () {
            var _this = this;
            if (this.flat) {
                this.element.classList.add("btn-flat");
            }
            else if (this.floating) {
                this.element.classList.add("btn-floating");
            }
            else {
                this.element.classList.add("btn");
            }
            if (this.large) {
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
        ButtonElement.prototype.detached = function () {
            var _this = this;
            this.element.classList.remove("btn-flat", "btn-floating", "btn-large", "btn", "disabled", "waves-effect");
            config_1.config.allowedWaves.map(function (val) { return "waves-" + val; }).forEach(function (val) { return _this.element.classList.remove(val); });
        };
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', Object)
        ], ButtonElement.prototype, "disabled", void 0);
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', Object)
        ], ButtonElement.prototype, "flat", void 0);
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', Object)
        ], ButtonElement.prototype, "floating", void 0);
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', Object)
        ], ButtonElement.prototype, "large", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultValue: "" }), 
            __metadata('design:type', String)
        ], ButtonElement.prototype, "waves", void 0);
        ButtonElement = __decorate([
            aurelia_framework_1.customElement(config_1.config.button),
            aurelia_framework_1.containerless(),
            aurelia_framework_1.inlineView("<template><a ref='element'><slot></slot></a></template>"), 
            __metadata('design:paramtypes', [])
        ], ButtonElement);
        return ButtonElement;
    }());
    exports.ButtonElement = ButtonElement;
});

//# sourceMappingURL=buttonElement.js.map
