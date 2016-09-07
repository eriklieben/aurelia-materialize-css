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
    var CollectionElement = (function () {
        function CollectionElement() {
            this.data = [];
        }
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', Array)
        ], CollectionElement.prototype, "data", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultValue: "" }), 
            __metadata('design:type', String)
        ], CollectionElement.prototype, "class", void 0);
        CollectionElement = __decorate([
            aurelia_framework_1.customElement(config_1.config.linkCollection),
            aurelia_framework_1.containerless(),
            aurelia_framework_1.inlineView("<template><div class=\"collection ${class}\" ref=\"element\">\n<template repeat.for=\"item of data\" part=\"item-template\" class=\"collection-item\">\n   <a href=\"#${item}\">${item}</a>\n</template>\n<slot></slot></div></template>"), 
            __metadata('design:paramtypes', [])
        ], CollectionElement);
        return CollectionElement;
    }());
    exports.CollectionElement = CollectionElement;
});

//# sourceMappingURL=linkCollectionElement.js.map
