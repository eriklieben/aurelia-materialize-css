import { StageComponent } from "aurelia-testing";
import { bootstrap } from "aurelia-bootstrapper";

describe("the Aurelia Materialize CSS BreadcrumbElement", () => {
     let sut;

    beforeEach(() =>
        sut = StageComponent
                .withResources("./../../../../base/dist/amd/components/breadcrumbs/breadcrumbElement")
                .inView("<m:breadcrumb></m:breadcrumb>"));

    afterEach(() => sut.dispose());

    it("must add the class 'breadcrumb' to the given element on attached", done =>
        // arrange
        sut.manuallyHandleLifecycle()
            .create(bootstrap)
            .then(() => sut.bind())
            .then(() => sut.viewModel.element = sut.element)
        // act
        .then(() => sut.attached())
        // assert
        .then(() => expect(sut.element.classList).toContain("breadcrumb"))
        .then(done));

    it("must remove the class 'breadcrumb' from the given element on detached", done =>
        // arrange
        sut
            .manuallyHandleLifecycle()
            .create(bootstrap)
            .then(() => sut.bind())
            .then(() => sut.viewModel.element = sut.element)            
            .then(() => sut.attached())
            .then(() => expect(sut.element.classList).toContain("breadcrumb"))
        // act
        .then(() => sut.detached())
        // assert
        .then(() => expect(sut.element.classList).not.toContain("breadcrumb"))
        .then(done));
});
