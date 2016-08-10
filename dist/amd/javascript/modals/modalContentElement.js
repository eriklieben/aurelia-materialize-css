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
    var ModelContentElement = (function () {
        function ModelContentElement() {
        }
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], ModelContentElement.prototype, "class", void 0);
        ModelContentElement = __decorate([
            aurelia_framework_1.customElement(config_1.config.modalContent),
            aurelia_framework_1.containerless,
            aurelia_framework_1.inlineView("<template><div class='modal-content ${class}'><slot></slot></div></template>"), 
            __metadata('design:paramtypes', [])
        ], ModelContentElement);
        return ModelContentElement;
    }());
    exports.ModelContentElement = ModelContentElement;
});

//# sourceMappingURL=modalContentElement.js.map
