import { StageComponent } from "aurelia-testing";
import { bootstrap } from "aurelia-bootstrapper";

describe("the Aurelia Materialize CSS DropdownAttribute", () => {
    let sut, defaultOptions;

    beforeEach(() => {
        sut = StageComponent
                .withResources("./../../../../base/dist/amd/javascript/dropdown/dropdownAttribute")
                .inView("<div m:dropdown></div>");
        defaultOptions = {
            alignment: "left",
            belowOrigin: false,
            constrain_width: true,
            gutter: 0,
            hover: false,
            inDuration: 300,
            outDuration: 225,
        };
    });

    afterEach(() => sut.dispose());

    it("must perform the dropdown jQuery method on the given element", done => {
        // arrange
        spyOn($.fn, "dropdown");
        sut
        // act
        .create(bootstrap)
        // assert            
        .then(() => expect($.fn.dropdown).toHaveBeenCalled())
        .then(done);
    });

    it("must perform the dropdown jQuery method on the given element with the default options by default", done => {
        // arrange
        spyOn($.fn, "dropdown");
        sut
        // act
        .create(bootstrap)
        // assert            
        .then(() => expect($.fn.dropdown).toHaveBeenCalledWith(defaultOptions))
        .then(done);
    });

    it("must call the dropdown method with a custom in-duration set", done => {
        // arrange
        spyOn($.fn, "dropdown");
        defaultOptions.inDuration = '1500';
        sut.inView("<div m:dropdown='in-duration:1500;'></div>")
        // act
        .create(bootstrap)
        // assert            
        .then(() => expect($.fn.dropdown).toHaveBeenCalledWith(defaultOptions))
        .then(done);
    });

    it("must call the dropdown method with a custom out-duration set", done => {
        // arrange
        spyOn($.fn, "dropdown");
        defaultOptions.outDuration = '1500';
        sut.inView("<div m:dropdown='out-duration:1500;'></div>")
        // act
        .create(bootstrap)
        // assert            
        .then(() => expect($.fn.dropdown).toHaveBeenCalledWith(defaultOptions))
        .then(done);
    });

    it("must call the dropdown method with a custom constrain-width set", done => {
        // arrange
        spyOn($.fn, "dropdown");
        defaultOptions.constrain_width = 'false';
        sut.inView("<div m:dropdown='constrain-width:false;'></div>")
        // act
        .create(bootstrap)
        // assert            
        .then(() => expect($.fn.dropdown).toHaveBeenCalledWith(defaultOptions))
        .then(done);
    });

    it("must call the dropdown method with a custom hover set", done => {
        // arrange
        spyOn($.fn, "dropdown");
        defaultOptions.hover = 'true';
        sut.inView("<div m:dropdown='hover:true;'></div>")
        // act
        .create(bootstrap)
        // assert            
        .then(() => expect($.fn.dropdown).toHaveBeenCalledWith(defaultOptions))
        .then(done);        
    });

    it("must call the dropdown method with a custom gutter set", done => {
        // arrange
        spyOn($.fn, "dropdown");
        defaultOptions.gutter = '1500';
        sut.inView("<div m:dropdown='gutter:1500;'></div>")
        // act
        .create(bootstrap)
        // assert            
        .then(() => expect($.fn.dropdown).toHaveBeenCalledWith(defaultOptions))
        .then(done);   
    });

    it("must call the dropdown method with a custom below-origin set", done => {
        // arrange
        spyOn($.fn, "dropdown");
        defaultOptions.belowOrigin = 'true';
        sut.inView("<div m:dropdown='below-origin:true;'></div>")
        // act
        .create(bootstrap)
        // assert            
        .then(() => expect($.fn.dropdown).toHaveBeenCalledWith(defaultOptions))
        .then(done); 
    });

    it("must call the dropdown method with a custom alignment set", done => {
        // arrange
        spyOn($.fn, "dropdown");
        defaultOptions.alignment = 'right';
        sut.inView("<div m:dropdown='alignment:right;'></div>")
        // act
        .create(bootstrap)
        // assert            
        .then(() => expect($.fn.dropdown).toHaveBeenCalledWith(defaultOptions))
        .then(done); 
    });

    it("must add the class 'dropdown-button' to the given element on attached", done =>
        // arrange & act
        sut.create(bootstrap)
        // assert
        .then(() => {
            expect(sut.element.classList).toContain("dropdown-button");
        })
        .then(done));

    it("must remove the class 'dropdown-button' from the given element on detached", done =>
        // arrange
        sut
            .manuallyHandleLifecycle()
            .create(bootstrap)
            .then(() => sut.attached())
            .then(() => expect(sut.element.classList).toContain("dropdown-button"))
        // act
        .then(() => sut.detached())
        // assert
        .then(() => {
             expect(sut.element.classList).not.toContain("dropdown-button");
        })
        .then(done));
});
