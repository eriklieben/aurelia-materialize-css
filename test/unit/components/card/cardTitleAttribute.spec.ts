import { StageComponent } from "aurelia-testing";
import { bootstrap } from "aurelia-bootstrapper";

describe("the Aurelia Materialize CSS CardTitleAttribute", () => {
    let sut;

    beforeEach(() =>
        sut = StageComponent
                .withResources("./../../../../base/dist/amd/components/card/cardTitleAttribute")
                .inView("<span m:card-title></span>"));

    afterEach(() => sut.dispose());

    it("must add the class 'card-title' to the given element on attached", done =>
        // arrange & act
        sut.create(bootstrap)
        // assert
        .then(() => expect(sut.element.classList).toContain("card-title"))
        .then(done));

    it("must remove the class 'card-title' from the given element on detached", done => 
        // arrange
        sut
            .manuallyHandleLifecycle()
            .create(bootstrap)
            .then(() => sut.attached())
            .then(() => expect(sut.element.classList).toContain("card-title"))
        // act
        .then(() => sut.detached())
        // assert
        .then(() => expect(sut.element.classList).not.toContain("card-title"))
        .then(done));
});
