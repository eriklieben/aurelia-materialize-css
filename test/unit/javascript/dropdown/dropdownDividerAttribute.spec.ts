import { StageComponent } from "aurelia-testing";
import { bootstrap } from "aurelia-bootstrapper";

describe("the Aurelia Materialize CSS DropdownDividerAttribute", () => {
    let sut;

    beforeEach(() => 
        sut = StageComponent
                .withResources("./../../../../base/dist/amd/javascript/dropdown/dropdownDividerAttribute")
                .inView("<div m:dropdown-divider></div>"));

    afterEach(() => sut.dispose());

    it("must add the class 'divider' to the given element on attached", done =>
        // arrange & act
        sut.create(bootstrap)
        // assert
        .then(() => {
            expect(sut.element.classList).toContain("divider");
        })
        .then(done));

    it("must remove the class 'divider' from the given element on detached", done =>
        // arrange
        sut
            .manuallyHandleLifecycle()
            .create(bootstrap)
            .then(() => sut.bind())
            .then(() => sut.attached())
            .then(() => expect(sut.element.classList).toContain("divider"))
        // act
        .then(() => sut.detached())
        // assert
        .then(() => {
             expect(sut.element.classList).not.toContain("divider");
        })
        .then(done));
});
