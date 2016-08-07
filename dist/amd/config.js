define(["require", "exports"], function (require, exports) {
    "use strict";
    var Configuration = (function () {
        function Configuration() {
            this.prefix = "m:";
            this.collapsible = (this.prefix + "collapsible").trim();
            this.collapsibleBody = (this.prefix + "collapsible-body").trim();
            this.collapsibleHeader = (this.prefix + "collapsible-header").trim();
            this.collapsibleItem = (this.prefix + "collapsible-item").trim();
            this.dropdown = (this.prefix + "dropdown").trim();
            this.dropdownDivider = (this.prefix + "dropdown-divider").trim();
            this.dropdownItem = (this.prefix + "dropdown-item").trim();
        }
        return Configuration;
    }());
    exports.Configuration = Configuration;
    exports.config = new Configuration();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = exports.config;
});

//# sourceMappingURL=config.js.map
