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
    var PushpinElement = (function () {
        function PushpinElement(element) {
            this.element = element;
            this.bottom = Infinity;
            this.offset = 0;
            this.top = 0;
        }
        PushpinElement.prototype.attached = function () {
            var options = {
                bottom: this.bottom,
                offset: this.offset,
                top: this.top,
            };
            $(this.element).pushpin(options);
        };
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', Object)
        ], PushpinElement.prototype, "bottom", void 0);
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', Object)
        ], PushpinElement.prototype, "offset", void 0);
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', Object)
        ], PushpinElement.prototype, "top", void 0);
        PushpinElement = __decorate([
            aurelia_framework_1.customElement(config_1.config.pushpin),
            aurelia_framework_1.inlineView("<template><slot></slot></template>"),
            aurelia_dependency_injection_1.inject(Element), 
            __metadata('design:paramtypes', [Element])
        ], PushpinElement);
        return PushpinElement;
    }());
    exports.PushpinElement = PushpinElement;
});

//# sourceMappingURL=pushpinElement.js.map
