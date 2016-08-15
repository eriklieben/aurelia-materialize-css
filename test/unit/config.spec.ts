import {config} from "./../../src/config";

describe("the Aurelia Materialize CSS config", () => {

    it("must have a property prefix with the default value 'm:'", () => {
        expect(config.prefix).toBe("m:");
    });

    it("must have a property collapsible with the default value 'm:collapsible'", () => {
        expect(config.collapsible).toBe("m:collapsible");
    });

    it("must have a property collapsibleBody with the default value 'm:collapsible-body'", () => {
        expect(config.collapsibleBody).toBe("m:collapsible-body");
    });

    it("must have a property collapsibleHeader with the default value 'm:collapsible-header'", () => {
        expect(config.collapsibleHeader).toBe("m:collapsible-header");
    });

    it("must have a property collapsibleItem with the default value 'm:collapsible-item'", () => {
        expect(config.collapsibleItem).toBe("m:collapsible-item");
    });

     it("must have a property dropdown with the default value 'm:dropdown'", () => {
        expect(config.dropdown).toBe("m:dropdown");
    });

    it("must have a property dropdownDivider with the default value 'm:dropdown-divider'", () => {
        expect(config.dropdownDivider).toBe("m:dropdown-divider");
    });

    it("must have a property dropdownItem with the default value 'm:dropdown-item'", () => {
        expect(config.dropdownItem).toBe("m:dropdown-item");
    });
    
    it("must have a property boxed with the default value 'm:boxed'", () => {
        expect(config.boxed).toBe("m:boxed");
    });

    it("must have a property slide with the default value 'm:slide'", () => {
        expect(config.slide).toBe("m:slide");
    });

    it("must have a property slider with the default value 'm:slider'", () => {
        expect(config.slider).toBe("m:slider");
    });

    it("must have a property modal with the default value 'm:modal'", () => {
        expect(config.modal).toBe("m:modal");
    });

    it("must have a property modalTrigger with the default value 'm:modal-trigger'", () => {
        expect(config.modalTrigger).toBe("m:modal-trigger");
    });

    it("must have a property modalContent with the default value 'm:modal-content'", () => {
        expect(config.modalContent).toBe("m:modal-content");
    });

    it("must have a property modalFooter with the default value 'm:modal-footer'", () => {
        expect(config.modalFooter).toBe("m:modal-footer");
    });

    it("must have a property pushpin with the default value 'm:pushpin'", () => {
        expect(config.pushpin).toBe("m:pushpin");
    });

    it("must have a property scrollSpy with the default value 'm:scrollspy'", () => {
        expect(config.scrollSpy).toBe("m:scrollspy");
    });

    it("must have a property badge with the default value 'm:badge'", () => {
        expect(config.badge).toBe("m:badge");
    });

    it("must have a property breadcrumb with the default value 'm:breadcrumb'", () => {
        expect(config.breadcrumb).toBe("m:breadcrumb");
    });

    it("must have a property breadcrumb with the default value 'm:breadcrumbs'", () => {
        expect(config.breadcrumb).toBe("m:breadcrumb");
    });

    it("must have a property breadcrumbs with the default value 'm:breadcrumbs'", () => {
        expect(config.breadcrumbs).toBe("m:breadcrumbs");
    });

    it("must have a property badge with the default value 'm:button'", () => {
        expect(config.button).toBe("m:button");
    });  
    
    it("must have a property allowedWaves with the default allowed waves", () => {
        expect(config.allowedWaves).toEqual(["light", "red", "yellow", "orange", "purple", "green", "teal"]);
    });    

    it("must have a property card with the default value 'm:card'", () => {
        expect(config.card).toBe("m:card");
    });

    it("must have a property cardTitle with the default value 'm:card-title'", () => {
        expect(config.cardTitle).toBe("m:card-title");
    });

    it("must have a property cardAction with the default value 'm:card-action'", () => {
        expect(config.cardAction).toBe("m:card-action");
    });

    it("must have a property cardImage with the default value 'm:card-image'", () => {
        expect(config.cardImage).toBe("m:card-image");
    });

    it("must have a property cardReveal with the default value 'm:card-reveal'", () => {
        expect(config.cardReveal).toBe("m:card-reveal");
    });

    it("must have a property cardPanel with the default value 'm:card-panel'", () => {
        expect(config.cardPanel).toBe("m:card-panel");
    });    
});
