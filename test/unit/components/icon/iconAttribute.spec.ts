import { StageComponent } from "aurelia-testing";
import { bootstrap } from "aurelia-bootstrapper";

describe("the Aurelia Materialize CSS IconAttribute", () => {
    let sut;

    beforeEach(() =>
        sut = StageComponent
                .withResources("./../../../../base/dist/amd/components/icon/iconAttribute")
                .inView("<span m:icon></span>"));

    afterEach(() => sut.dispose());


    it("must add the class 'material-icons' to the given element on attached", done =>
        // arrange & act
        sut.create(bootstrap)
        // assert
        .then(() => expect(sut.element.classList).toContain("material-icons"))
        .then(done));


    it("must remove the class 'material-icons' from the given element on detached", done =>
        // arrange
        sut
            .manuallyHandleLifecycle()
            .create(bootstrap)
            .then(() => sut.bind())
            .then(() => sut.attached())
            .then(() => expect(sut.element.classList).toContain("material-icons"))
        // act
        .then(() => sut.detached())
        // assert
        .then(() => expect(sut.element.classList).not.toContain("material-icons"))
        .then(done));

    it("must add the size property as css class to the given element on attached", done =>
        // arrange & act
        sut.inView("<span m:icon='size:large'></span>")
        .create(bootstrap)
        // assert
        .then(() => expect(sut.element.classList).toContain("large"))
        .then(done));

    it("must remove the size property as css class the given element on detached", done =>
        // arrange
        sut.inView("<span m:icon='size:large'></span>")
            .manuallyHandleLifecycle()
            .create(bootstrap)
            .then(() => sut.bind())
            .then(() => sut.attached())
            .then(() => expect(sut.element.classList).toContain("large"))
        // act
        .then(() => sut.detached())
        // assert
        .then(() => expect(sut.element.classList).not.toContain("large"))
        .then(done));

    it("must add the type as text inside the html element on attached", done =>
        // arrange & act
        sut.inView("<span m:icon='size:large;type:foo'></span>")
        .create(bootstrap)
        // assert
        .then(() => expect(sut.element.innerHTML).toBe("foo"))
        .then(done));

    it("must remove the type as text inside the html element on detached", done =>
        // arrange
        sut.inView("<span m:icon='size:large;type:foo'></span>")
            .manuallyHandleLifecycle()
            .create(bootstrap)
            .then(() => sut.bind())
            .then(() => sut.attached())
            .then(() =>  expect(sut.element.innerHTML).toBe("foo"))
        // act
        .then(() => sut.detached())
        // assert
        .then(() =>  expect(sut.element.innerHTML).toBe(""))
        .then(done));
});
