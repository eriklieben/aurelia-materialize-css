import { StageComponent } from "aurelia-testing";
import { bootstrap } from "aurelia-bootstrapper";

describe("the Aurelia Materialize CSS CollapsibleAttribute", () => {
    let sut;

    beforeEach(() =>
        sut = StageComponent
                .withResources("./../../../../base/dist/amd/javascript/collapsible/collapsibleAttribute")
                .inView("<div m:collapsible></div>"));

    afterEach(() => sut.dispose());

    it("must add the class 'collapsible' to the given element on attached", done =>
        // arrange & act
        sut.create(bootstrap)
        // assert
        .then(() => {
            expect(sut.element.classList).toContain("collapsible");
        })
        .then(done));

    it("must remove the class 'collapsible' from the given element on detached", done =>
        // arrange
        sut
            .manuallyHandleLifecycle()
            .create(bootstrap)
            .then(() => sut.bind())
            .then(() => sut.attached())
            .then(() => expect(sut.element.classList).toContain("collapsible"))
        // act
        .then(() => sut.detached())
        // assert
        .then(() => {
             expect(sut.element.classList).not.toContain("collapsible");
        })
        .then(done));

    it("must add the attribute 'data-collapsible' to the given element on attached with the type set", done =>
        // arrange
        sut
            .inView('<div m:collapsible="type:expandable"></div>')
            .manuallyHandleLifecycle()
            .create(bootstrap)
            .then(() => sut.bind())
        // act
        .then(() => sut.attached())
        // assert
        .then(() => expect(sut.element.getAttribute("data-collapsible")).toBe("expandable"))
        .then(done));

    it("must remove the attribute 'data-collapsible' to the given element on detached", done =>
        // arrange
        sut
            .inView('<div m:collapsible="type:expandable"></div>')
            .manuallyHandleLifecycle()
            .create(bootstrap)
            .then(() => sut.bind())
            .then(() => sut.attached())
        // act
        .then(() => sut.detached())
        // assert
        .then(() => expect(sut.element.hasAttribute("data-collapsible")).toBeFalsy())
        .then(done));

    it("must perform the collapsible jQuery method on the given element", done => {
        // arrange & act
        spyOn($.fn, "collapsible");
        sut.create(bootstrap)
        // assert
        .then(() => {
            expect($.fn.collapsible).toHaveBeenCalled();
        })
        .then(done);
    });
    it("must add the classes given in the class property to the given element on attached", done =>
        // arrange
        sut
            .inView('<div m:collapsible class="foo bar"></div>')
            .manuallyHandleLifecycle()
            .create(bootstrap)
        // act
        .then(() => sut.bind())
        .then(() => sut.attached())
        // assert
        .then(() => {
            expect(sut.element.classList).toContain("foo");
            expect(sut.element.classList).toContain("bar");
        })
        .then(done));
});
