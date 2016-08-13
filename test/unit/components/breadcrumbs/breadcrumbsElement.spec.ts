import { StageComponent } from "aurelia-testing";
import { bootstrap } from "aurelia-bootstrapper";

describe("the Aurelia Materialize CSS BreadcrumbsElement", () => {
    let sut;

    beforeEach(() =>
        sut = StageComponent
                .withResources("./../../../../base/dist/amd/components/breadcrumbs/breadcrumbsElement")
                .inView("<m:breadcrumbs></m:breadcrumbs>"));

    afterEach(() => sut.dispose());

    it("must add the class 'nav-wrapper' to the given element on attached", done =>
        // arrange
        sut.manuallyHandleLifecycle()
            .create(bootstrap)
            .then(() => sut.bind())
            .then(() => sut.viewModel.element = sut.element)
        // act
        .then(() => sut.attached())
        // assert
        .then(() => expect(sut.element.classList).toContain("nav-wrapper"))
        .then(done));  

    it("must remove the class 'nav-wrapper' from the given element on detached", done =>
        // arrange
        sut
            .manuallyHandleLifecycle()
            .create(bootstrap)
            .then(() => sut.bind())
            .then(() => sut.viewModel.element = sut.element)            
            .then(() => sut.attached())
            .then(() => expect(sut.element.classList).toContain("nav-wrapper"))
        // act
        .then(() => sut.detached())
        // assert
        .then(() => expect(sut.element.classList).not.toContain("nav-wrapper"))
        .then(done));

    it("must add the wrapper column inner child element to the given element on attached", done =>
        // arrange
        sut.manuallyHandleLifecycle()
            .create(bootstrap)
            .then(() => sut.bind())
            .then(() => sut.viewModel.element = sut.element)
        // act
        .then(() => sut.attached())
        // assert
        .then(() => expect((<HTMLElement>sut.element.firstChild).tagName).toBe("DIV"))
        .then(done));

    it("must add the wrapper column inner child element with class 'col' to the given element on attached", done =>
        // arrange
        sut.manuallyHandleLifecycle()
            .create(bootstrap)
            .then(() => sut.bind())
            .then(() => sut.viewModel.element = sut.element)
        // act
        .then(() => sut.attached())
        // assert
        .then(() => expect((<HTMLElement>sut.element.firstChild).classList).toContain("col"))
        .then(done));

    it("must add the wrapper column inner child element with class 's12' to the given element on attached", done =>
        // arrange
        sut.manuallyHandleLifecycle()
            .create(bootstrap)
            .then(() => sut.bind())
            .then(() => sut.viewModel.element = sut.element)
        // act
        .then(() => sut.attached())
        // assert
        .then(() => expect((<HTMLElement>sut.element.firstChild).classList).toContain("s12"))
        .then(done));
});
