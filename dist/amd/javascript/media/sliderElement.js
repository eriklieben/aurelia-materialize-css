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
    var SliderElement = (function () {
        function SliderElement() {
        }
        SliderElement.prototype.attached = function () {
            var options = { full_width: false };
            if (this.fullscreen.toLowerCase() === "true") {
                this.element.classList.add("fullscreen");
                options.full_width = true;
            }
            $(this.element).slider(options);
        };
        SliderElement.prototype.detached = function () {
            this.element.classList.remove("fullscreen");
        };
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', String)
        ], SliderElement.prototype, "id", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime, defaultValue: "false" }), 
            __metadata('design:type', String)
        ], SliderElement.prototype, "fullscreen", void 0);
        SliderElement = __decorate([
            aurelia_framework_1.customElement(config_1.config.slider),
            aurelia_framework_1.containerless,
            aurelia_framework_1.inlineView("<template><div class='slider' ref='element' id='${id}'><ul class='slides'><slot></slot></ul></div></template>"), 
            __metadata('design:paramtypes', [])
        ], SliderElement);
        return SliderElement;
    }());
    exports.SliderElement = SliderElement;
});

//# sourceMappingURL=sliderElement.js.map
