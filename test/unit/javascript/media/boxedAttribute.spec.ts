import { StageComponent } from "aurelia-testing";
import { bootstrap } from "aurelia-bootstrapper";

describe("the Aurelia Materialize CSS BoxedAttribute", () => {
    let sut;

    beforeEach(() => {
        sut = StageComponent
                .withResources("./../../../../base/dist/amd/javascript/media/boxedAttribute")
                .inView("<div m:boxed></div>");
    });

    afterEach(() => sut.dispose());

    it("must perform the materialbox jQuery method on the given element", done => {
        // arrange
        spyOn($.fn, "materialbox");
        sut
        // act
        .create(bootstrap)
        // assert            
        .then(() => expect($.fn.materialbox).toHaveBeenCalled())
        .then(done);
    });

    it("must add the class 'materialboxed' to the given element on attached", done =>
        // arrange & act
        sut.manuallyHandleLifecycle()
        .create(bootstrap)
        .then(() => sut.bind())
        .then(() => sut.viewModel.element = sut.element)
        .then(() => sut.attached())
        // assert
        .then(() => {
            expect(sut.element.classList).toContain("materialboxed");
        })
        .then(done));

    it("must remove the class 'materialboxed' from the given element on detached", done =>
        // arrange
        sut
            .manuallyHandleLifecycle()
            .create(bootstrap)
            .then(() => sut.attached())
            .then(() => expect(sut.element.classList).toContain("materialboxed"))
        // act
        .then(() => sut.detached())
        // assert
        .then(() => {
             expect(sut.element.classList).not.toContain("materialboxed");
        })
        .then(done));

});
