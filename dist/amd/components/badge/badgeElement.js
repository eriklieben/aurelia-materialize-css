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
    var BadgeElement = (function () {
        function BadgeElement() {
        }
        BadgeElement.prototype.attached = function () {
            this.element.classList.add("badge");
            if (this.new || this.element.attributes.getNamedItem("new") !== null) {
                this.element.classList.add("new");
            }
        };
        BadgeElement.prototype.detached = function () {
            this.element.classList.remove("badge");
        };
        BadgeElement.prototype.newChanged = function () {
            if (this.element) {
                (!this.new && this.element.attributes.getNamedItem("new") === null) ?
                    this.element.classList.remove("new") :
                    this.element.classList.add("new");
            }
        };
        __decorate([
            aurelia_framework_1.bindable({ defaultValue: false }), 
            __metadata('design:type', String)
        ], BadgeElement.prototype, "new", void 0);
        BadgeElement = __decorate([
            aurelia_framework_1.customElement(config_1.config.badge),
            aurelia_framework_1.inlineView("<template><span ref='element'><slot></slot></span></template>"), 
            __metadata('design:paramtypes', [])
        ], BadgeElement);
        return BadgeElement;
    }());
    exports.BadgeElement = BadgeElement;
});

//# sourceMappingURL=badgeElement.js.map
