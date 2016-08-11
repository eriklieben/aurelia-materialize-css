import { StageComponent } from "aurelia-testing";
import { bootstrap } from "aurelia-bootstrapper";

describe("the Aurelia Materialize CSS BadgeAttribute", () => {
    let sut;

    beforeEach(() =>
        sut = StageComponent
                .withResources("./../../../../base/dist/amd/components/badge/badgeAttribute")
                .inView("<span m:badge></span>"));

    afterEach(() => sut.dispose());

    it("must add the class 'badge' to the given element on attached", done =>
        // arrange & act
        sut.create(bootstrap)
        // assert
        .then(() => expect(sut.element.classList).toContain("badge"))
        .then(done));

    it("must remove the class 'badge' from the given element on detached", done =>
        // arrange
        sut
            .manuallyHandleLifecycle()
            .create(bootstrap)
            .then(() => sut.attached())
            .then(() => expect(sut.element.classList).toContain("badge"))
        // act
        .then(() => sut.detached())
        // assert
        .then(() => expect(sut.element.classList).not.toContain("badge"))
        .then(done));

    it("must not add the class 'new' if new is not specified on the given attribute", done =>
        // arrange & act
        sut.create(bootstrap)
        // assert
        .then(() => expect(sut.element.classList).not.toContain("new"))
        .then(done));

    it("must add the class 'new' if new is set to true on the given attribute", done =>
        // arrange
        sut.inView("<span m:badge='new:true'></span>")
        // act
        .create(bootstrap)
        // assert
        .then(() => expect(sut.element.classList).toContain("new"))
        .then(done));

    it("must not add the class 'new' if new is set to false on the given attribute", done =>
        // arrange
        sut.inView("<span m:badge='new:false'></span>")
        // act
        .create(bootstrap)
        // assert
        .then(() => expect(sut.element.classList).toContain("new"))
        .then(done));       
});