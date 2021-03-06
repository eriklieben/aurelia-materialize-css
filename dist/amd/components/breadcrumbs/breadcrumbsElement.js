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
    var BreadcrumbsElement = (function () {
        function BreadcrumbsElement() {
        }
        BreadcrumbsElement.prototype.attached = function () {
            this.element.classList.add("nav-wrapper");
        };
        BreadcrumbsElement.prototype.detached = function () {
            this.element.classList.remove("nav-wrapper");
        };
        BreadcrumbsElement = __decorate([
            aurelia_framework_1.customElement(config_1.config.breadcrumbs),
            aurelia_framework_1.containerless(),
            aurelia_framework_1.inlineView("<template><div ref='element'><div class='col s12'><slot></slot></div></div></template>"), 
            __metadata('design:paramtypes', [])
        ], BreadcrumbsElement);
        return BreadcrumbsElement;
    }());
    exports.BreadcrumbsElement = BreadcrumbsElement;
});

//# sourceMappingURL=breadcrumbsElement.js.map
