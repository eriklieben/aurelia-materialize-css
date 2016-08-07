import { StageComponent } from "aurelia-testing";
import {bootstrap} from "aurelia-bootstrapper";

describe("the Aurelia Materialize CSS CollapsibleHeaderAttribute", () => {
    let sut;

    beforeEach(() =>
        sut = StageComponent
                .withResources("./../../../../base/dist/amd/javascript/collapsible/collapsibleHeaderAttribute")
                .inView("<div m:collapsible-header></div>"));

    afterEach(() => sut.dispose());

    it("must add the class 'collapsible-header' to the given element on attached", done =>
        // arrange & act
        sut.create(bootstrap)
        // assert
        .then(() => {
            expect(sut.element.classList).toContain("collapsible-header");
        })
        .then(done));

    it("must remove the class 'collapsible-header' from the given element on detached", done =>
        // arrange & act
        sut
            .manuallyHandleLifecycle()
            .create(bootstrap)
            .then(() => sut.attached())
            .then(() => expect(sut.element.classList).toContain("collapsible-header"))
            .then(() => sut.detached())
        // assert
        .then(() => {
            expect(sut.element.classList).not.toContain("collapsible-header");
        })
        .then(done));
});
