System.register(["aurelia-framework", "aurelia-dependency-injection", "./../../config"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var aurelia_framework_1, aurelia_dependency_injection_1, config_1;
    var CollapsibleHeaderAttribute;
    return {
        setters:[
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (aurelia_dependency_injection_1_1) {
                aurelia_dependency_injection_1 = aurelia_dependency_injection_1_1;
            },
            function (config_1_1) {
                config_1 = config_1_1;
            }],
        execute: function() {
            CollapsibleHeaderAttribute = (function () {
                function CollapsibleHeaderAttribute(element) {
                    this.element = element;
                }
                CollapsibleHeaderAttribute.prototype.attached = function () {
                    this.element.classList.add("collapsible-header");
                };
                CollapsibleHeaderAttribute.prototype.detached = function () {
                    this.element.classList.remove("collapsible-header");
                };
                CollapsibleHeaderAttribute = __decorate([
                    aurelia_framework_1.customAttribute(config_1.config.collapsibleHeader),
                    aurelia_dependency_injection_1.inject(Element), 
                    __metadata('design:paramtypes', [Element])
                ], CollapsibleHeaderAttribute);
                return CollapsibleHeaderAttribute;
            }());
            exports_1("CollapsibleHeaderAttribute", CollapsibleHeaderAttribute);
        }
    }
});

//# sourceMappingURL=collapsibleHeaderAttribute.js.map
