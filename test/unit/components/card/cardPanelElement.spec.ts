import { StageComponent } from "aurelia-testing";
import { bootstrap } from "aurelia-bootstrapper";

describe("the Aurelia Materialize CSS CardPanelElement", () => {
    let sut;

    beforeEach(() =>
        sut = StageComponent
                .withResources("./../../../../base/dist/amd/components/card/cardPanelElement")
                .inView("<m:card-panel></m:card-panel>"));

    afterEach(() => sut.dispose());

    it("must add the class 'card-panel' to the given element on attached", done =>
        // arrange
        sut.manuallyHandleLifecycle()
            .create(bootstrap)
            .then(() => sut.bind())
            .then(() => sut.viewModel.element = sut.element)
        // act
        .then(() => sut.attached())
        // assert
        .then(() => expect(sut.element.classList).toContain("card-panel"))
        .then(done));

    it("must remove the class 'card-panel' from the given element on detached", done =>
        // arrange
        sut
            .manuallyHandleLifecycle()
            .create(bootstrap)
            .then(() => sut.bind())
            .then(() => sut.viewModel.element = sut.element)            
            .then(() => sut.attached())
            .then(() => expect(sut.element.classList).toContain("card-panel"))
        // act
        .then(() => sut.detached())
        // assert
        .then(() => expect(sut.element.classList).not.toContain("card-panel"))
        .then(done));
});
