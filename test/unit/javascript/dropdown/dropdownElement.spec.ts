import { StageComponent } from "aurelia-testing";
import { bootstrap } from "aurelia-bootstrapper";
import { config } from "./../../../../src/config";

describe("the Aurelia Materialize CSS DropdownElement", () => {
    let sut, defaultOptions;

    beforeEach(() => {
        sut = StageComponent
                .withResources("./../../../../base/dist/amd/javascript/dropdown/dropdownElement")
                .inView("<m:dropdown id='someId'></m:dropdown>");
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
        sut.inView("<m:dropdown id='someId' in-duration='1500'></m:dropdown>")
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
        sut.inView("<m:dropdown id='someId' out-duration='1500'></m:dropdown>")
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
        sut.inView("<m:dropdown id='someId' constrain-width='false'></m:dropdown>")
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
        sut.inView("<m:dropdown id='someId' hover='true'></m:dropdown>")
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
        sut.inView("<m:dropdown id='someId' gutter='1500'></m:dropdown>")
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
        sut.inView("<m:dropdown id='someId' below-origin='true'></m:dropdown>")
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
        sut.inView("<m:dropdown id='someId' alignment='right'></m:dropdown>")
        // act
        .create(bootstrap)
        // assert            
        .then(() => expect($.fn.dropdown).toHaveBeenCalledWith(defaultOptions))
        .then(done);
    });
});
