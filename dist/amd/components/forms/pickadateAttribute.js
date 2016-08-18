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
    var PickADateAttribute = (function () {
        function PickADateAttribute(element) {
            this.element = element;
            this.options = "{}";
        }
        PickADateAttribute.prototype.attached = function () {
            this.element.classList.add("datepicker");
            $(this.element).pickadate(JSON.parse(this.options));
            this.picker = $(this.element).pickadate("picker");
            this.element.addEventListener("focus", this.openFunction.bind(this));
            $(this.picker).on({ "set": this.onSet.bind(this) });
        };
        PickADateAttribute.prototype.detached = function () {
            this.element.classList.remove("datepicker");
            this.element.removeEventListener("focus", this.openFunction);
            if (this.picker) {
                $(this.picker).stop();
            }
        };
        PickADateAttribute.prototype.onSet = function (value) {
            this.fireEvent(this.element, "input");
        };
        PickADateAttribute.prototype.valueChanged = function (newValue) {
            this.picker.set("select", newValue);
        };
        PickADateAttribute.prototype.openFunction = function () {
            this.picker.open();
        };
        PickADateAttribute.prototype.createEvent = function (name) {
            var event = document.createEvent("Event");
            event.initEvent(name, true, true);
            return event;
        };
        PickADateAttribute.prototype.fireEvent = function (element, name) {
            element.dispatchEvent(this.createEvent(name));
        };
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', Object)
        ], PickADateAttribute.prototype, "options", void 0);
        PickADateAttribute = __decorate([
            aurelia_framework_1.customAttribute(config_1.config.pickadate),
            aurelia_dependency_injection_1.inject(Element), 
            __metadata('design:paramtypes', [HTMLElement])
        ], PickADateAttribute);
        return PickADateAttribute;
    }());
    exports.PickADateAttribute = PickADateAttribute;
});

//# sourceMappingURL=pickadateAttribute.js.map
