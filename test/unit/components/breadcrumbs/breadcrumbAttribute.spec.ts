import { StageComponent } from "aurelia-testing";
import { bootstrap } from "aurelia-bootstrapper";

describe("the Aurelia Materialize CSS BreadcrumbAttribute", () => {
    let sut;

    beforeEach(() =>
        sut = StageComponent
                .withResources("./../../../../base/dist/amd/components/breadcrumbs/breadcrumbAttribute")
                .inView("<span m:breadcrumb></span>"));

    afterEach(() => sut.dispose());

    it("must add the class 'breadcrumb' to the given element on attached", done =>
        // arrange & act
        sut.create(bootstrap)
        // assert
        .then(() => expect(sut.element.classList).toContain("breadcrumb"))
        .then(done));

    it("must remove the class 'breadcrumb' from the given element on detached", done =>
        // arrange
        sut
            .manuallyHandleLifecycle()
            .create(bootstrap)
            .then(() => sut.attached())
            .then(() => expect(sut.element.classList).toContain("breadcrumb"))
        // act
        .then(() => sut.detached())
        // assert
        .then(() => expect(sut.element.classList).not.toContain("breadcrumb"))
        .then(done));
});
