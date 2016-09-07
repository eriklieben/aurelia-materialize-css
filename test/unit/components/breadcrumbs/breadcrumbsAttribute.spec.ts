import { StageComponent } from "aurelia-testing";
import { bootstrap } from "aurelia-bootstrapper";

describe("the Aurelia Materialize CSS BreadcrumbsAttribute", () => {
    let sut;

    beforeEach(() =>
        sut = StageComponent
                .withResources("./../../../../base/dist/amd/components/breadcrumbs/breadcrumbsAttribute")
                .inView("<div m:breadcrumbs></div>"));

    afterEach(() => sut.dispose());

    it("must add the class 'nav-wrapper' to the given element on attached", done =>
        // arrange & act
        sut.create(bootstrap)
        // assert
        .then(() => expect(sut.element.classList).toContain("nav-wrapper"))
        .then(done));

    it("must remove the class 'nav-wrapper' from the given element on detached", done =>
        // arrange
        sut
            .manuallyHandleLifecycle()
            .create(bootstrap)
            .then(() => sut.bind())
            .then(() => sut.attached())
            .then(() => expect(sut.element.classList).toContain("nav-wrapper"))
        // act
        .then(() => sut.detached())
        // assert
        .then(() => expect(sut.element.classList).not.toContain("nav-wrapper"))
        .then(done));

    it("must add the wrapper column inner child element to the given element on attached", done =>
        // arrange & act
        sut.create(bootstrap)
        // assert
        .then(() => expect((<HTMLElement>sut.element.firstChild).tagName).toBe("DIV"))
        .then(done));

    it("must add the wrapper column inner child element with class 'col' to the given element on attached", done =>
        // arrange & act
        sut.create(bootstrap)
        // assert
        .then(() => expect((<HTMLElement>sut.element.firstChild).classList).toContain("col"))
        .then(done));

    it("must add the wrapper column inner child element with class 's12' to the given element on attached", done =>
        // arrange & act
        sut.create(bootstrap)
        // assert
        .then(() => expect((<HTMLElement>sut.element.firstChild).classList).toContain("s12"))
        .then(done));

    it("must add the childs inside the wrapper column to the given element on attached", done =>
        // arrange & act
        sut.inView("<div m:breadcrumbs><a m:breadcrumb></a><a m:breadcrumb></a></div>")
        .create(bootstrap)
        // assert
        .then(() => expect(sut.element.firstChild.childNodes.length).toBe(2))
        .then(done));

    it("must add the childs inside the wrapper column in the correct order to the given element on attached", done =>
        // arrange & act
        sut.inView("<div m:breadcrumbs><a m:breadcrumb>First</a><a m:breadcrumb>Second</a></div>")
        .create(bootstrap)
        // assert
        .then(() => {
            expect(sut.element.firstChild.childNodes[0].textContent).toBe("First");
            expect(sut.element.firstChild.childNodes[1].textContent).toBe("Second");
        })
        .then(done));
});
