import { StageComponent } from "aurelia-testing";
import { bootstrap } from "aurelia-bootstrapper";

describe("the Aurelia Materialize CSS CardActionAttribute", () => {
    let sut;

    beforeEach(() =>
        sut = StageComponent
                .withResources("./../../../../base/dist/amd/components/card/cardActionAttribute")
                .inView("<span m:card-action></span>"));

    afterEach(() => sut.dispose());

    it("must add the class 'card-action' to the given element on attached", done =>
        // arrange & act
        sut.create(bootstrap)
        // assert
        .then(() => expect(sut.element.classList).toContain("card-action"))
        .then(done));


    it("must remove the class 'card-action' from the given element on detached", done =>
        // arrange
        sut
            .manuallyHandleLifecycle()
            .create(bootstrap)
            .then(() => sut.bind())
            .then(() => sut.attached())
            .then(() => expect(sut.element.classList).toContain("card-action"))
        // act
        .then(() => sut.detached())
        // assert
        .then(() => expect(sut.element.classList).not.toContain("card-action"))
        .then(done));
});
