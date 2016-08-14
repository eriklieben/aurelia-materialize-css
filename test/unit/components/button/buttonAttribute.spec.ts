import { StageComponent } from "aurelia-testing";
import { config } from "./../../../../src/config";
import { bootstrap } from "aurelia-bootstrapper";

describe("the Aurelia Materialize CSS ButtonAttribute", () => {
    let sut;

    beforeEach(() =>
        sut = StageComponent
                .withResources("./../../../../base/dist/amd/components/button/buttonAttribute")
                .inView("<span m:button></span>"));

    afterEach(() => sut.dispose());

    it("must add the class 'waves-effect' to the given element on attached", done =>
        // arrange & act
        sut.create(bootstrap)
        // assert
        .then(() => expect(sut.element.classList).toContain("waves-effect"))
        .then(done));

    it("must remove the class 'waves-effect' from the given element on detached", done =>
        // arrange
        sut
            .manuallyHandleLifecycle()
            .create(bootstrap)
            .then(() => sut.attached())
            .then(() => expect(sut.element.classList).toContain("waves-effect"))
        // act
        .then(() => sut.detached())
        // assert
        .then(() => expect(sut.element.classList).not.toContain("waves-effect"))
        .then(done));

    it("must add the class 'btn-flat' to the given element if flat is set to true on attached", done =>
        // arrange & act
        sut.inView("<span m:button='flat:true'></span>")
            .create(bootstrap)
        // assert
        .then(() => expect(sut.element.classList).toContain("btn-flat"))
        .then(done));

    it("must not add the class 'btn' to the given element if flat is set to true on attached", done =>
        // arrange & act
        sut.inView("<span m:button='flat:true'></span>")
            .create(bootstrap)
        // assert
        .then(() => expect(sut.element.classList).not.toContain("btn"))
        .then(done));

    it("must remove the class 'btn-flat' from the given element on detached", done =>
        // arrange
        sut.inView("<span m:button='flat:true'></span>")
            .manuallyHandleLifecycle()
            .create(bootstrap)
            .then(() => sut.attached())
            .then(() => expect(sut.element.classList).toContain("btn-flat"))
        // act
        .then(() => sut.detached())
        // assert
        .then(() => expect(sut.element.classList).not.toContain("btn-flat"))
        .then(done));

    it("must add the class 'btn-floating' to the given element if floating is set to true on attached", done =>
        // arrange & act
        sut.inView("<span m:button='floating:true'></span>")
            .create(bootstrap)
        // assert
        .then(() => expect(sut.element.classList).toContain("btn-floating"))
        .then(done));

    it("must not add the class 'btn' to the given element if floating is set to true on attached", done =>
        // arrange & act
        sut.inView("<span m:button='floating:true'></span>")
            .create(bootstrap)
        // assert
        .then(() => expect(sut.element.classList).not.toContain("btn"))
        .then(done));

    it("must remove the class 'btn-floating' from the given element on detached", done =>
        // arrange
        sut.inView("<span m:button='floating:true'></span>")
            .manuallyHandleLifecycle()
            .create(bootstrap)
            .then(() => sut.attached())
            .then(() => expect(sut.element.classList).toContain("btn-floating"))
        // act
        .then(() => sut.detached())
        // assert
        .then(() => expect(sut.element.classList).not.toContain("btn-floating"))
        .then(done));

    it("must add the class 'btn-large' to the given element if large is set to true on attached", done =>
        // arrange & act
        sut.inView("<span m:button='large:true'></span>")
            .create(bootstrap)
        // assert
        .then(() => expect(sut.element.classList).toContain("btn-large"))
        .then(done));

    it("must remove the class 'btn-large' from the given element on detached", done =>
        // arrange
        sut.inView("<span m:button='large:true'></span>")
            .manuallyHandleLifecycle()
            .create(bootstrap)
            .then(() => sut.attached())
            .then(() => expect(sut.element.classList).toContain("btn-large"))
        // act
        .then(() => sut.detached())
        // assert
        .then(() => expect(sut.element.classList).not.toContain("btn-large"))
        .then(done));

    it("must add the class 'waves-light' to the given element if waves is set to 'light' on attached", done =>
        // arrange & act
        sut.inView("<span m:button='waves:light'></span>")
            .create(bootstrap)
        // assert
        .then(() => expect(sut.element.classList).toContain("waves-light"))
        .then(done));

    it("must not add wave colour if waves is set to 'foo' (a not allowed colour) on attached", done =>
        // arrange & act
        sut.inView("<span m:button='waves:foo'></span>")
            .create(bootstrap)
        // assert
        .then(() => expect(sut.element.classList).not.toContain("waves-foo"))
        .then(done));

    it("must add the class 'disabled' to the given element if disabled is set to true on attached", done =>
        // arrange & act
        sut.inView("<span m:button='disabled:true'></span>")
            .create(bootstrap)
        // assert
        .then(() => expect(sut.element.classList).toContain("disabled"))
        .then(done));

    it("must remove the class 'disabled' from the given element on detached", done =>
        // arrange
        sut.inView("<span m:button='disabled:true'></span>")
            .manuallyHandleLifecycle()
            .create(bootstrap)
            .then(() => sut.attached())
            .then(() => expect(sut.element.classList).toContain("disabled"))
        // act
        .then(() => sut.detached())
        // assert
        .then(() => expect(sut.element.classList).not.toContain("disabled"))
        .then(done));

    // xit("must add the class 'waves-brown' to the given element if waves is set to 'brown' and allowed in config on attached", done => {
    //     // arrange & act
    //     config.allowedWaves.push("brown");
    //     console.log("huer");
    //     sut.inView("<span m:button='waves:brown'></span>")
    //         .create(bootstrap)
    //     // assert
    //     .then(() => expect(sut.element.classList).not.toContain("waves-brown"))
    //     .then(done);
    // });
});
