import { StageComponent } from "aurelia-testing";
import { bootstrap } from "aurelia-bootstrapper";

describe("the Aurelia Materialize CSS ScrollSpyAttribute", () => {
    let sut;

    beforeEach(() => {
        sut = StageComponent
                .withResources("./../../../../base/dist/amd/javascript/scrollspy/scrollspyAttribute")
                .inView("<div m:scrollspy></div>");
    });

    afterEach(() => sut.dispose());

    it("must perform the pushpin jQuery method on the given element", done => {

        // arrange
        spyOn($.fn, "scrollSpy");

        // act
        sut.create(bootstrap)

        // assert
        .then(() => expect($.fn.scrollSpy).toHaveBeenCalled())
        .then(done);
    });
});