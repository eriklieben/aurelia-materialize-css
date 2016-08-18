import { StageComponent } from "aurelia-testing";
import { bootstrap } from "aurelia-bootstrapper";

describe("the Aurelia Materialize CSS SelectAttribute", () => {
       let sut;

    beforeEach(() =>
        sut = StageComponent
                .withResources("./../../../../base/dist/amd/components/forms/selectAttribute")
                .inView("<span m:select></span>"));

    afterEach(() => sut.dispose());

    it("must perform the material_select jQuery method on the given element on attached", done => {
        // arrange
        spyOn($.fn, "material_select");
        sut
        // act
        .create(bootstrap)
        // assert            
        .then(() => expect($.fn.material_select).toHaveBeenCalled())
        .then(done);
    });

    it("must perform the material_select('destroy') jQuery method on the given element on detached", done => {
        // arrange
        spyOn($.fn, "material_select");
        sut.manuallyHandleLifecycle()
            .create(bootstrap)
            .then(() => sut.attached())
        // act
        .then(() => sut.detached())
        // assert            
        .then(() => expect($.fn.material_select).toHaveBeenCalledWith("destroy"))
        .then(done);
    });
});