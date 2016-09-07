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

    it("must register the pushpin attribute", () => {
        expect(sut.resources)
            .toContain("./javascript/pushpin/pushpinAttribute");
    });

    it("must register the scrollspy attribute", () => {
        expect(sut.resources)
            .toContain("./javascript/scrollspy/scrollspyAttribute");
    });

    it("must register the badge attribute", () => {
        expect(sut.resources)
            .toContain("./components/badge/badgeAttribute");
    });

    it("must register the breadcrumb attribute", () => {
        expect(sut.resources)
            .toContain("./components/breadcrumbs/breadcrumbAttribute");
    });

    it("must register the breadcrumbs attribute", () => {
        expect(sut.resources)
            .toContain("./components/breadcrumbs/breadcrumbsAttribute");
    });

    it("must register the button attribute", () => {
        expect(sut.resources)
            .toContain("./components/button/buttonAttribute");
    });

    it("must register the card attribute", () => {
        expect(sut.resources)
            .toContain("./components/card/cardAttribute");
    });

    it("must register the cardTitle attribute", () => {
        expect(sut.resources)
            .toContain("./components/card/cardTitleAttribute");
    });

    it("must register the cardAction attribute", () => {
        expect(sut.resources)
            .toContain("./components/card/cardActionAttribute");
    });

    it("must register the cardImage attribute", () => {
        expect(sut.resources)
            .toContain("./components/card/cardImageAttribute");
    });

    it("must register the cardReveal attribute", () => {
        expect(sut.resources)
            .toContain("./components/card/cardRevealAttribute");
    });

    it("must register the cardPanel attribute", () => {
        expect(sut.resources)
            .toContain("./components/card/cardPanelAttribute");
    });

    it("must register the select (forms) attribute", () => {
        expect(sut.resources)
            .toContain("./components/forms/selectAttribute");
    });

    it("must register the pickadate (forms) attribute", () => {
        expect(sut.resources)
            .toContain("./components/forms/pickadateAttribute");
    });

    it("must register the icon attribute", () => {
        expect(sut.resources)
            .toContain("./components/icon/iconAttribute");
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

    it("must not register the pushpin attribute", () => {
        expect(sut.resources)
            .not.toContain("./javascript/pushpin/pushpinAttribute");
    });

    it("must not register the scrollspy attribute", () => {
        expect(sut.resources)
            .not.toContain("./javascript/scrollspy/scrollspyAttribute");
    });

    it("must not register the badge attribute", () => {
        expect(sut.resources)
            .not.toContain("./components/badge/badgeAttribute");
    });

     it("must not register the breadcrumb attribute", () => {
        expect(sut.resources)
            .not.toContain("./components/breadcrumbs/breadcrumbAttribute");
    });

     it("must not register the breadcrumbs attribute", () => {
        expect(sut.resources)
            .not.toContain("./components/breadcrumbs/breadcrumbsAttribute");
    }); 

    it("must not register the button attribute", () => {
        expect(sut.resources)
            .not.toContain("./components/button/buttonAttribute");
    });       

    it("must register the card attribute", () => {
        expect(sut.resources)
            .not.toContain("./components/card/cardAttribute");
    });

    it("must register the cardTitle attribute", () => {
        expect(sut.resources)
            .not.toContain("./components/card/cardTitleAttribute");
    });

    it("must register the cardAction attribute", () => {
        expect(sut.resources)
            .not.toContain("./components/card/cardActionAttribute");
    });

    it("must register the cardImage attribute", () => {
        expect(sut.resources)
            .not.toContain("./components/card/cardImageAttribute");
    });

    it("must not register the cardReveal attribute", () => {
        expect(sut.resources)
            .not.toContain("./components/card/cardRevealAttribute");
    });

    it("must not register the cardPanel attribute", () => {
        expect(sut.resources)
            .not.toContain("./components/card/cardPanelAttribute");
    });

    it("must not register the select (forms) attribute", () => {
        expect(sut.resources)
            .not.toContain("./components/forms/selectAttribute");
    });

    it("must not register the pickadate (forms) attribute", () => {
        expect(sut.resources)
            .not.toContain("./components/forms/pickadateAttribute");
    });

    it("must not register the icon attribute", () => {
        expect(sut.resources)
            .not.toContain("./components/icon/iconAttribute");
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

    it("must register the pushin element", () => {
        expect(sut.resources)
            .toContain("./javascript/pushpin/pushpinElement");
    });

    it("must register the scrollspy element", () => {
        expect(sut.resources)
            .toContain("./javascript/scrollspy/scrollspyElement");
    });

    it("must register the badge element", () => {
        expect(sut.resources)
            .toContain("./components/badge/badgeElement");
    });

    it("must register the breadcrumb element", () => {
        expect(sut.resources)
            .toContain("./components/breadcrumbs/breadcrumbElement");
    });

    it("must register the breadcrumbs element", () => {
        expect(sut.resources)
            .toContain("./components/breadcrumbs/breadcrumbsElement");
    });    

    it("must register the button element", () => {
        expect(sut.resources)
            .toContain("./components/button/buttonElement");
    }); 

    it("must register the card element", () => {
        expect(sut.resources)
            .toContain("./components/card/cardElement");
    });

    it("must register the cardTitle element", () => {
        expect(sut.resources)
            .toContain("./components/card/cardTitleElement");
    });

    it("must register the cardAction element", () => {
        expect(sut.resources)
            .toContain("./components/card/cardActionElement");
    });

    it("must register the cardImage element", () => {
        expect(sut.resources)
            .toContain("./components/card/cardImageElement");
    });

    it("must register the cardReveal element", () => {
        expect(sut.resources)
            .toContain("./components/card/cardRevealElement");
    });

    it("must register the cardPanel element", () => {
        expect(sut.resources)
            .toContain("./components/card/cardPanelElement");
    });

    it("must register the icon element", () => {
        expect(sut.resources)
            .toContain("./components/icon/iconElement");
    });

    it("must register the collection element", () => {
        expect(sut.resources)
            .toContain("./components/collections/collectionElement");
    });       

    it("must register the collection header element", () => {
        expect(sut.resources)
            .toContain("./components/collections/collectionHeaderElement");
    }); 

    it("must register the collection item element", () => {
        expect(sut.resources)
            .toContain("./components/collections/collectionItemElement");
    }); 

    it("must register the link collection element", () => {
        expect(sut.resources)
            .toContain("./components/collections/linkCollectionElement");
    }); 

    it("must register the collection link item element", () => {
        expect(sut.resources)
            .toContain("./components/collections/collectionLinkItemElement");
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

    it("must not register the pushin element", () => {
        expect(sut.resources)
            .not.toContain("./javascript/pushpin/pushpinElement");
    });

    it("must not register the scrollspy element", () => {
        expect(sut.resources)
            .not.toContain("./javascript/scrollspy/scrollspyElement");
    });

    it("must not register the badge element", () => {
        expect(sut.resources)
            .not.toContain("./components/badge/badgeElement");
    });

    it("must not register the breadcrumb element", () => {
        expect(sut.resources)
            .not.toContain("./components/breadcrumbs/breadcrumbElement");
    });

    it("must not register the breadcrumbs element", () => {
        expect(sut.resources)
            .not.toContain("./components/breadcrumbs/breadcrumbsElement");
    });

    it("must not register the button element", () => {
        expect(sut.resources)
            .not.toContain("./components/button/buttonElement");
    });  
 
    it("must not register the card element", () => {
        expect(sut.resources)
            .not.toContain("./components/card/cardElement");
    });

    it("must not register the cardTitle element", () => {
        expect(sut.resources)
            .not.toContain("./components/card/cardTitleElement");
    });

    it("must not register the cardAction element", () => {
        expect(sut.resources)
            .not.toContain("./components/card/cardActionElement");
    });

    it("must not register the cardImage element", () => {
        expect(sut.resources)
            .not.toContain("./components/card/cardImageElement");
    });

    it("must not register the cardReveal element", () => {
        expect(sut.resources)
            .not.toContain("./components/card/cardRevealElement");
    });

    it("must not register the cardPanel element", () => {
        expect(sut.resources)
            .not.toContain("./components/card/cardPanelElement");
    });

    it("must not register the icon element", () => {
        expect(sut.resources)
            .not.toContain("./components/icon/iconElement");
    });

    it("must not register the collection element", () => {
        expect(sut.resources)
            .not.toContain("./components/collections/collectionElement");
    });       

    it("must not register the collection header element", () => {
        expect(sut.resources)
            .not.toContain("./components/collections/collectionHeaderElement");
    }); 

    it("must not register the collection item element", () => {
        expect(sut.resources)
            .not.toContain("./components/collections/collectionItemElement");
    }); 

    it("must not register the link collection element", () => {
        expect(sut.resources)
            .not.toContain("./components/collections/linkCollectionElement");
    }); 

    it("must not register the collection link item element", () => {
        expect(sut.resources)
            .not.toContain("./components/collections/collectionLinkItemElement");
    });     
});