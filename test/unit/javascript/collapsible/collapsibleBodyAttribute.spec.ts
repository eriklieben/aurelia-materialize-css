import { StageComponent } from "aurelia-testing";
import {bootstrap} from "aurelia-bootstrapper";

describe("the Aurelia Materialize CSS CollapsibleBodyAttribute", () => {
    let sut;

    beforeEach(() =>
        sut = StageComponent
                .withResources("./../../../../base/dist/amd/javascript/collapsible/collapsibleBodyAttribute")
                .inView("<div m:collapsible-body></div>"));

    afterEach(() => sut.dispose());

    it("must add the class 'collapsible-body' to the given element on attached", done =>
        // arrange & act
        sut.create(bootstrap)
        // assert
        .then(() => expect(sut.element.classList).toContain("collapsible-body"))
        .then(done));

    it("must remove the class 'collapsible-body' from the given element on detached", done =>
        // arrange
        sut
            .manuallyHandleLifecycle()
            .create(bootstrap)
            .then(() => sut.bind())
            .then(() => sut.attached())
            .then(() => expect(sut.element.classList).toContain("collapsible-body"))
        // act
        .then(() => sut.detached())
        // assert
        .then(() => {
             expect(sut.element.classList).not.toContain("collapsible-body");
        })
        .then(done));
});
