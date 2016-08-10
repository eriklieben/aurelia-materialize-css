import {configure} from "./../../src/index";
import MaterializeCssOptions from "./../../src/index";

class ConfigStub {

    private resources: Array<string> = [];

    public globalResources(resources) {
        this.resources = resources;
    }
}

describe("the Aurelia Materialize CSS configuration with the option enableAttributes true", () => {
    let sut;

    beforeEach(() => {
        sut = new ConfigStub();
        let options = new MaterializeCssOptions();
        options.enableAttributes = true;
        options.enableElements = false;
        configure(sut, options);
    });

    it("must register the collapsible attribute", () => {
        expect(sut.resources)
            .toContain("./javascript/collapsible/collapsibleAttribute");
    });

    it("must register the collapsible body attribute", () => {
        expect(sut.resources)
            .toContain("./javascript/collapsible/collapsibleBodyAttribute");
    });

    it("must register the collapsible header attribute", () => {
        expect(sut.resources)
            .toContain("./javascript/collapsible/collapsibleHeaderAttribute");
    });

    it("must register the dropdown attribute", () => {
        expect(sut.resources)
            .toContain("./javascript/dropdown/dropdownAttribute");
    });

    it("must register the dropdown divider attribute", () => {
        expect(sut.resources)
            .toContain("./javascript/dropdown/dropdownDividerAttribute");
    });

    it("must register the media boxed attribute", () => {
        expect(sut.resources)
            .toContain("./javascript/media/boxedAttribute");
    }); 

    it("must register the modals modal-trigger attribute", () => {
        expect(sut.resources)
            .toContain("./javascript/modals/modalTriggerAttribute");
    });
});

describe("the Aurelia Materialize CSS configuration with the option enableAttributes false", () => {
    let sut;

    beforeEach(() => {
        sut = new ConfigStub();
        let options = new MaterializeCssOptions();
        options.enableAttributes = false;
        configure(sut, options);
    });

    it("must no register the collapsible attribute", () => {
        expect(sut.resources)
            .not.toContain("./javascript/collapsible/collapsibleAttribute");
    });

    it("must not register the collapsible body attribute", () => {
        expect(sut.resources)
            .not.toContain("./javascript/collapsible/collapsibleBodyAttribute");
    });

    it("must not register the collapsible header attribute", () => {
        expect(sut.resources)
            .not.toContain("./javascript/collapsible/collapsibleHeaderAttribute");
    });

    it("must register the dropdown attribute", () => {
        expect(sut.resources)
            .not.toContain("./javascript/dropdown/dropdownAttribute");
    });

    it("must register the dropdown divider attribute", () => {
        expect(sut.resources)
            .not.toContain("./javascript/dropdown/dropdownDividerAttribute");
    });

    it("must not register the media boxed attribute", () => {
        expect(sut.resources)
            .not.toContain("./javascript/media/boxedAttribute");
    });

    it("must not register the modals modal-trigger attribute", () => {
        expect(sut.resources)
            .not.toContain("./javascript/modals/modalTriggerAttribute");
    });
});

describe("the Aurelia Materialize CSS configuration with the option enableElements true", () => {
    let sut;

    beforeEach(() => {
        sut = new ConfigStub();
        let options = new MaterializeCssOptions();
        options.enableElements = true;
        configure(sut, options);
    });

    it("must register the collapsible element", () => {
        expect(sut.resources)
            .toContain("./javascript/collapsible/collapsibleElement");
    });

    it("must register the collapsible body element", () => {
        expect(sut.resources)
            .toContain("./javascript/collapsible/collapsibleBodyElement");
    });

    it("must register the collapsible header element", () => {
        expect(sut.resources)
            .toContain("./javascript/collapsible/collapsibleHeaderElement");
    });

    it("must register the collapsible item element", () => {
        expect(sut.resources)
            .toContain("./javascript/collapsible/collapsibleItemElement");
    });

    it("must register the dropdown element", () => {
        expect(sut.resources)
            .toContain("./javascript/dropdown/dropdownElement");
    });

    it("must register the dropdown divider element", () => {
        expect(sut.resources)
            .toContain("./javascript/dropdown/dropdownDividerElement");
    });

    it("must register the dropdown item element", () => {
        expect(sut.resources)
            .toContain("./javascript/dropdown/dropdownItemElement");
    });

    it("must register the media slide element", () => {
        expect(sut.resources)
            .toContain("./javascript/media/slideElement");
    });

    it("must register the media slider element", () => {
        expect(sut.resources)
            .toContain("./javascript/media/sliderElement");
    });

    it("must register the modals modal-content element", () => {
        expect(sut.resources)
            .toContain("./javascript/modals/modalContentElement");
    });

    it("must register the modals modal element", () => {
        expect(sut.resources)
            .toContain("./javascript/modals/modalElement");
    });

    it("must register the modals modal-footer element", () => {
        expect(sut.resources)
            .toContain("./javascript/modals/modalFooterElement");
    });        
});

describe("the Aurelia Materialize CSS configuration with the option enableElements false", () => {
    let sut;

    beforeEach(() => {
        sut = new ConfigStub();
        let options = new MaterializeCssOptions();
        options.enableElements = false;
        configure(sut, options);
    });

    it("must not register the collapsible element", () => {
        expect(sut.resources)
            .not.toContain("./javascript/collapsible/collapsibleElement");
    });

    it("must not register the collapsible body element", () => {
        expect(sut.resources)
            .not.toContain("./javascript/collapsible/collapsibleBodyElement");
    });

    it("must not register the collapsible header element", () => {
        expect(sut.resources)
            .not.toContain("./javascript/collapsible/collapsibleHeaderElement");
    });

    it("must not register the collapsible item element", () => {
        expect(sut.resources)
            .not.toContain("./javascript/collapsible/collapsibleItemElement");
    });

    it("must register the dropdown element", () => {
        expect(sut.resources)
            .not.toContain("./javascript/dropdown/dropdownElement");
    });

    it("must register the dropdown divider element", () => {
        expect(sut.resources)
            .not.toContain("./javascript/dropdown/dropdownDividerElement");
    });

    it("must register the dropdown item element", () => {
        expect(sut.resources)
            .not.toContain("./javascript/dropdown/dropdownItemElement");
    });

    it("must not register the media slide element", () => {
        expect(sut.resources)
            .not.toContain("./javascript/media/slideElement");
    });

    it("must not register the media slider element", () => {
        expect(sut.resources)
            .not.toContain("./javascript/media/sliderElement");
    });

   it("must not register the modals modal-content element", () => {
        expect(sut.resources)
            .not.toContain("./javascript/modals/modalContentElement");
    });

    it("must not register the modals modal element", () => {
        expect(sut.resources)
            .not.toContain("./javascript/modals/modalElement");
    });

    it("must not register the modals modal-footer element", () => {
        expect(sut.resources)
            .not.toContain("./javascript/modals/modalFooterElement");
    });    
});