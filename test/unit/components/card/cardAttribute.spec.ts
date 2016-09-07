import { StageComponent } from "aurelia-testing";
import { bootstrap } from "aurelia-bootstrapper";

describe("the Aurelia Materialize CSS CardAttribute", () => {
    let sut;

    beforeEach(() =>
        sut = StageComponent
                .withResources("./../../../../base/dist/amd/components/card/cardAttribute")
                .inView("<span m:card></span>"));

    afterEach(() => sut.dispose());

    it("must add the class 'card' to the given element on attached", done =>
        // arrange & act
        sut.create(bootstrap)
        // assert
        .then(() => expect(sut.element.classList).toContain("card"))
        .then(done));

    it("must remove the class 'card' from the given element on detached", done =>
        // arrange
        sut
            .manuallyHandleLifecycle()
            .create(bootstrap)
            .then(() => sut.bind())
            .then(() => sut.attached())
            .then(() => expect(sut.element.classList).toContain("card"))
        // act
        .then(() => sut.detached())
        // assert
        .then(() => expect(sut.element.classList).not.toContain("card"))
        .then(done));

    it("must add the property of size to the given element on attached", done =>
        // arrange & act
        sut.inView("<span m:card='size:medium'></span>")
        .create(bootstrap)
        // assert
        .then(() => expect(sut.element.classList).toContain("medium"))
        .then(done));

    it("must remove the property of size to the given element on detached", done =>
        // arrange
        sut.inView("<span m:card='size:medium'></span>")
            .manuallyHandleLifecycle()
            .create(bootstrap)
            .then(() => sut.bind())
            .then(() => sut.attached())
            .then(() => expect(sut.element.classList).toContain("medium"))
        // act
        .then(() => sut.detached())
        // assert
        .then(() => expect(sut.element.classList).not.toContain("medium"))
        .then(done));
});
