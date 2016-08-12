import { StageComponent } from "aurelia-testing";
import { bootstrap } from "aurelia-bootstrapper";

describe("the Aurelia Materialize CSS BadgeElement", () => {
    let sut;

    beforeEach(() =>
        sut = StageComponent
                .withResources("./../../../../base/dist/amd/components/badge/badgeElement")
                .inView("<m:badge></m:badge>"));

    afterEach(() => sut.dispose());

    it("must add the class 'badge' to the given element on attached", done =>
        // arrange
        sut.manuallyHandleLifecycle()
            .create(bootstrap)
            .then(() => sut.bind())
            .then(() => sut.viewModel.element = sut.element)
        // act
        .then(() => sut.attached())
        // assert
        .then(() => expect(sut.element.classList).toContain("badge"))
        .then(done));

    it("must remove the class 'badge' from the given element on detached", done =>
        // arrange
        sut
            .manuallyHandleLifecycle()
            .create(bootstrap)
            .then(() => sut.bind())
            .then(() => sut.viewModel.element = sut.element)            
            .then(() => sut.attached())
            .then(() => expect(sut.element.classList).toContain("badge"))
        // act
        .then(() => sut.detached())
        // assert
        .then(() => expect(sut.element.classList).not.toContain("badge"))
        .then(done));


    it("must not add the class 'new' if new is not specified on the given element", done =>
        // arrange
        sut.manuallyHandleLifecycle()
            .create(bootstrap)
            .then(() => sut.bind())
            .then(() => sut.viewModel.element = sut.element) 
        // act           
        .then(() => sut.attached())
        // assert
        .then(() => expect(sut.element.classList).not.toContain("new"))
        .then(done));

    it("must add the class 'new' if new is set to true on the given element", done =>
        // arrange
        sut.inView("<m:badge new='false'></m:badge>")
            .manuallyHandleLifecycle()
            .create(bootstrap)
            .then(() => sut.bind()) 
            .then(() => sut.viewModel.element = sut.element)
        // act          
        .then(() => sut.attached())
        // assert
        .then(() => expect(sut.element.classList).toContain("new"))
        .then(done));

    it("must add the class 'new' if new attribute is set on the given element", done =>
        // arrange
        sut.inView("<m:badge new></m:badge>")
            .manuallyHandleLifecycle()
            .create(bootstrap)
            .then(() => sut.bind()) 
            .then(() => sut.viewModel.element = sut.element)
        // act          
        .then(() => sut.attached())
        // assert
        .then(() => expect(sut.element.classList).toContain("new"))
        .then(done));

   it("must not add the class 'new' if new is set to false on the given element", done =>
        // arrange
        sut.inView("<m:badge new='true'></m:badge>")
            .manuallyHandleLifecycle()
            .create(bootstrap)
            .then(() => sut.bind())
            .then(() => sut.viewModel.element = sut.element)
        // act
        .then(() => sut.attached())
        // assert
        .then(() => expect(sut.element.classList).toContain("new"))
        .then(done));
});