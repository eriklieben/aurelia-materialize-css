"use strict";
require("@eriklieben/materialize-css");
var materialConfig = require("./config");
var MaterializeCssOptions = (function () {
    function MaterializeCssOptions() {
        this.enableAttributes = true;
        this.enableElements = true;
        this.attributeFilter = undefined;
        this.elementFilter = undefined;
        this.configuration = new materialConfig.Configuration();
    }
    return MaterializeCssOptions;
}());
exports.MaterializeCssOptions = MaterializeCssOptions;
function configure(config, options) {
    options = Object.assign(new MaterializeCssOptions(), options);
    materialConfig.config = options.configuration;
    var attributes = [
        "./javascript/collapsible/collapsibleAttribute",
        "./javascript/collapsible/collapsibleBodyAttribute",
        "./javascript/collapsible/collapsibleHeaderAttribute",
    ];
    var elements = [
        "./javascript/collapsible/collapsibleElement",
        "./javascript/collapsible/collapsibleBodyElement",
        "./javascript/collapsible/collapsibleHeaderElement",
        "./javascript/collapsible/collapsibleItemElement",
    ];
    if (options.attributeFilter) {
        attributes = attributes.filter(options.attributeFilter);
    }
    if (options.elementFilter) {
        elements = elements.filter(options.elementFilter);
    }
    if (options.enableAttributes) {
        config.globalResources(attributes);
    }
    if (options.enableElements) {
        config.globalResources(elements);
    }
}
exports.configure = configure;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = MaterializeCssOptions;

//# sourceMappingURL=index.js.map