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
            this.boxed = (this.prefix + "boxed").trim();
            this.slide = (this.prefix + "slide").trim();
            this.slider = (this.prefix + "slider").trim();
            this.modal = (this.prefix + "modal").trim();
            this.modalTrigger = (this.prefix + "modal-trigger").trim();
            this.modalContent = (this.prefix + "modal-content").trim();
            this.modalFooter = (this.prefix + "modal-footer").trim();
            this.pushpin = (this.prefix + "pushpin").trim();
            this.scrollSpy = (this.prefix + "scrollspy").trim();
            this.badge = (this.prefix + "badge").trim();
            this.breadcrumb = (this.prefix + "breadcrumb").trim();
            this.breadcrumbs = (this.prefix + "breadcrumbs").trim();
            this.button = (this.prefix + "button").trim();
            this.allowedWaves = ["light", "red", "yellow", "orange", "purple", "green", "teal"];
            this.card = (this.prefix + "card").trim();
            this.cardTitle = (this.prefix + "card-title").trim();
            this.cardAction = (this.prefix + "card-action").trim();
            this.cardImage = (this.prefix + "card-image").trim();
            this.cardReveal = (this.prefix + "card-reveal").trim();
            this.cardPanel = (this.prefix + "card-panel").trim();
            this.materialSelect = (this.prefix + "select").trim();
            this.pickadate = (this.prefix + "pickadate").trim();
            this.icon = (this.prefix + "icon").trim();
            this.collection = (this.prefix + "collection").trim();
            this.collectionItem = (this.prefix + "collection-item").trim();
            this.collectionHeader = (this.prefix + "collection-header").trim();
            this.linkCollection = (this.prefix + "link-collection").trim();
            this.collectionLinkItem = (this.prefix + "collection-link-item").trim();
        }
        Configuration.prototype.set = function (config) {
            for (var attrname in config) {
                if (config.hasOwnProperty(attrname)) {
                    this[attrname] = config[attrname];
                }
            }
        };
        return Configuration;
    }());
    exports.Configuration = Configuration;
    exports.config = new Configuration();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = exports.config;
});

//# sourceMappingURL=config.js.map
