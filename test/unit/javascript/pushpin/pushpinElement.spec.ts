import { StageComponent } from "aurelia-testing";
import { bootstrap } from "aurelia-bootstrapper";

describe("the Aurelia Materialize CSS PushpinElement", () => {
    let sut, defaultOptions;

    beforeEach(() => {
        sut = StageComponent
                .withResources("./../../../../base/dist/amd/javascript/pushpin/pushpinElement")
                .inView("<m:pushpin></m:pushpin>");
        
        defaultOptions = {
            bottom: Infinity,
            offset: 0,
            top: 0,
        };
    });

    it("must perform the pushpin jQuery method on the given element", done => {

        // arrange
        spyOn($.fn, "pushpin");
        
        // act
        sut.create(bootstrap)

        // assert
        .then(() => expect($.fn.pushpin).toHaveBeenCalled())
        .then(done);    
    });

    it("must call the pushpin method with a custom bottom set", done => {

        // arrange
        spyOn($.fn, "pushpin");
        defaultOptions.bottom = '1500';
        sut.inView("<m:pushpin bottom='1500'></m:pushpin>")   

        // act
        .create(bootstrap)

        // assert
        .then(() => expect($.fn.pushpin).toHaveBeenCalledWith(defaultOptions))
        .then(done);
    });

    it("must call the pushpin method with a custom offset set", done => {

        // arrange
        spyOn($.fn, "pushpin");
        defaultOptions.offset = '1500';
        sut.inView("<m:pushpin offset='1500'></m:pushpin>")   

        // act
        .create(bootstrap)

        // assert
        .then(() => expect($.fn.pushpin).toHaveBeenCalledWith(defaultOptions))
        .then(done);
    });

    it("must call the pushpin method with a custom top set", done => {
        
        // arrange
        spyOn($.fn, "pushpin");
        defaultOptions.top = '1500';
        sut.inView("<m:pushpin top='1500'></m:pushpin>")   

        // act
        .create(bootstrap)

        // assert
        .then(() => expect($.fn.pushpin).toHaveBeenCalledWith(defaultOptions))
        .then(done);
    });
});
