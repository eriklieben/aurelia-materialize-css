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
    var CollectionItemElement = (function () {
        function CollectionItemElement() {
        }
        CollectionItemElement.prototype.attached = function () {
            if (this.dismissable !== undefined && (this.dismissable.trim() === "" || this.dismissable === "true")) {
                this.element.classList.add("dismissable");
            }
        };
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', String)
        ], CollectionItemElement.prototype, "dismissable", void 0);
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', String)
        ], CollectionItemElement.prototype, "class", void 0);
        CollectionItemElement = __decorate([
            aurelia_framework_1.customElement(config_1.config.collectionItem),
            aurelia_framework_1.containerless(),
            aurelia_framework_1.inlineView("<template><li ref=\"element\" class=\"collection-item ${class}\"><slot></slot></li></template>"), 
            __metadata('design:paramtypes', [])
        ], CollectionItemElement);
        return CollectionItemElement;
    }());
    exports.CollectionItemElement = CollectionItemElement;
});

//# sourceMappingURL=collectionItemElement.js.map
