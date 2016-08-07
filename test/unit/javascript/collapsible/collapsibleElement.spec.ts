import { StageComponent } from "aurelia-testing";
import {bootstrap} from "aurelia-bootstrapper";

describe("the Aurelia Materialize CSS CollapsibleElement", () => {
    let sut;

    beforeEach(() =>
        sut = StageComponent
                .withResources("./../../../../base/dist/amd/javascript/collapsible/collapsibleElement")
                .inView("<m:collapsible></m:collapsible>"));

    afterEach(() => sut.dispose());

    it("must add the class 'collapsible' to the given element on attached", done =>
        // arrange
        sut
            .manuallyHandleLifecycle()
            .create(bootstrap)
            .then(() => sut.bind())
            .then(() => sut.viewModel.element = sut.element)
        // act
        .then(() => sut.attached())
        // assert
        .then(() => expect(sut.viewModel.element.classList).toContain("collapsible"))
        .then(done));

    it("must remove the class 'collapsible' from the given element on detached", done =>
        // arrange
        sut
            .manuallyHandleLifecycle()
            .create(bootstrap)
            .then(() => sut.bind())
            .then(() => sut.viewModel.element = sut.element)
            .then(() => sut.attached())
            .then(() => expect(sut.viewModel.element.classList).toContain("collapsible"))
        // act
        .then(() => sut.detached())
        // assert
        .then(() => expect(sut.viewModel.element.classList).not.toContain("collapsible"))
        .then(done));

    it("must add the attribute 'data-collapsible' to the given element on attached with the type set", done =>
        // arrange
        sut
            .inView('<m:collapsible type="expandable"></m:collapsible>')
            .manuallyHandleLifecycle()
            .create(bootstrap)
            .then(() => sut.bind())
            .then(() => sut.viewModel.element = sut.element)
        // act
        .then(() => sut.attached())
        // assert
        .then(() => expect(sut.viewModel.element.getAttribute("data-collapsible")).toBe("expandable"))
        .then(done));

    it("must remove the attribute 'data-collapsible' to the given element on detached", done =>
        // arrange
        sut
            .inView('<m:collapsible type="expandable"></m:collapsible>')
            .manuallyHandleLifecycle()
            .create(bootstrap)
            .then(() => sut.bind())
            .then(() => sut.viewModel.element = sut.element)
            .then(() => sut.attached())
            .then(() => expect(sut.viewModel.element.getAttribute("data-collapsible")).toBe("expandable"))
        // act
        .then(() => sut.detached())
        // assert
        .then(() => expect(sut.viewModel.element.hasAttribute("data-collapsible")).toBeFalsy())
        .then(done));

    it("must perform the collapsible jQuery method on the given element", done => {
        // arrange & act
        spyOn($.fn, "collapsible");
        sut
            .manuallyHandleLifecycle()
            .create(bootstrap)
            .then(() => sut.bind())
            .then(() => sut.viewModel.element = sut.element)
            .then(() => sut.attached())
        // assert            
        .then(() => expect($.fn.collapsible).toHaveBeenCalled())
        .then(done);
    });
    it("must add the classes given in the class property to the given element on attached", done =>
        // arrange
        sut
            .inView("<m:collapsible class='foo bar'></m:collapsible>")
            .manuallyHandleLifecycle()
            .create(bootstrap)
            .then(() => sut.bind())
            .then(() => sut.viewModel.element = sut.element)
            .then(() => sut.attached())
        // act
        .then(() => sut.attached())
        // assert
        .then(() => {
            expect(sut.element.classList).toContain("foo");
            expect(sut.element.classList).toContain("bar");
        })
        .then(done));
});
