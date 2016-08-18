import { StageComponent } from "aurelia-testing";
import { bootstrap } from "aurelia-bootstrapper";

describe("the Aurelia Materialize CSS PickADateAttribute", () => {
       let sut;

    beforeEach(() =>
        sut = StageComponent
                .withResources("./../../../../base/dist/amd/components/forms/pickadateAttribute")
                .inView("<span m:pickadate='options:{}'></span>"));

    afterEach(() => sut.dispose());

    it("must perform the pickadate(options) jQuery method on the given element on attached", done => {
        // arrange
        spyOn($.fn, "pickadate");
        sut
        // act
        .create(bootstrap)
        // assert
        .then(() => expect($.fn.pickadate).toHaveBeenCalledWith({}))
        .then(done);
    });

    it("must perform the pickadate('picker') jQuery method on the given element on attached", done => {
        // arrange
        spyOn($.fn, "pickadate");
        sut
        // act
        .create(bootstrap)
        // assert
        .then(() => expect($.fn.pickadate).toHaveBeenCalledWith("picker"))
        .then(done);
    });

    it("must perform the stop jQuery method on the given element on detached", done => {
        // arrange
        spyOn($.fn, "stop");
        sut.manuallyHandleLifecycle()
            .create(bootstrap)
            .then(() => sut.attached())
        // act
        .then(() => sut.detached())
        // assert
        .then(() => expect($.fn.stop).toHaveBeenCalled())
        .then(done);
    });

    it("must add the 'focus' event listener to the element on attached", done =>
        // arrange
        sut.manuallyHandleLifecycle()
        // act
        .create(bootstrap)
        .then(() => sut.bind())
        .then(() => spyOn(sut.element, "addEventListener"))
        .then(() => sut.attached())
        // assert
        .then(() => 
            expect(sut.element.addEventListener).toHaveBeenCalledWith("focus", jasmine.any(Function)))
        .then(done));

    it("must add the class 'datepicker' to the given element on attached", done =>
        // arrange & act
        sut.create(bootstrap)
        // assert
        .then(() => expect(sut.element.classList).toContain("datepicker"))
        .then(done));

    it("must remove the class 'datepicker' from the given element on detached", done =>
        // arrange
        sut
            .manuallyHandleLifecycle()
            .create(bootstrap)
            .then(() => sut.attached())
            .then(() => expect(sut.element.classList).toContain("datepicker"))
        // act
        .then(() => sut.detached())
        // assert
        .then(() => expect(sut.element.classList).not.toContain("datepicker"))
        .then(done));


    it("must fire event 'input' if event set is fired on date picker", done => {
        // arrange
        let triggered = false;
        sut.create(bootstrap)
        .then(() => sut.element.addEventListener("input", () => triggered = true))
        // act
        .then(() => $(sut.viewModel.picker).trigger("set"))
        // assert
        .then(() => expect(triggered).toBeTruthy())
        .then(done);
    });

    it("must call the open method on the picker jQuery obj when element event focus fired", done =>
        // arrange
        sut.create(bootstrap)
        .then(() => spyOn(sut.viewModel.picker, "open"))
        // act
        .then(() => $(sut.element).trigger("focus"))
        // assert
        .then(() => expect(sut.viewModel.picker.open).toHaveBeenCalled())
        .then(done));    
});
