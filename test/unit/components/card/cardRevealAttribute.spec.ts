import { StageComponent } from "aurelia-testing";
import { bootstrap } from "aurelia-bootstrapper";

describe("the Aurelia Materialize CSS CardRevealAttribute", () => {
    let sut;

    beforeEach(() =>
        sut = StageComponent
                .withResources("./../../../../base/dist/amd/components/card/cardRevealAttribute")
                .inView("<span m:card-reveal></span>"));

    afterEach(() => sut.dispose());

    it("must add the class 'card-reveal' to the given element on attached", done =>
        // arrange & act
        sut.create(bootstrap)
        // assert
        .then(() => expect(sut.element.classList).toContain("card-reveal"))
        .then(done));

    it("must remove the class 'card-reveal' from the given element on detached", done =>
        // arrange
        sut
            .manuallyHandleLifecycle()
            .create(bootstrap)
            .then(() => sut.bind())
            .then(() => sut.attached())
            .then(() => expect(sut.element.classList).toContain("card-reveal"))
        // act
        .then(() => sut.detached())
        // assert
        .then(() => expect(sut.element.classList).not.toContain("card-reveal"))
        .then(done));
});
