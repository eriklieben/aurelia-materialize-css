import { StageComponent } from "aurelia-testing";
import { bootstrap } from "aurelia-bootstrapper";

describe("the Aurelia Materialize CSS CardImageElement", () => {
    let sut;

    beforeEach(() =>
        sut = StageComponent
                .withResources("./../../../../base/dist/amd/components/card/cardImageElement")
                .inView("<m:card-image></m:card-image>"));

    afterEach(() => sut.dispose());

    it("must add the class 'card-image' to the given element on attached", done =>
        // arrange
        sut.manuallyHandleLifecycle()
            .create(bootstrap)
            .then(() => sut.bind())
            .then(() => {              
                sut.viewModel.element = sut.element;
                sut.viewModel.titleElement = document.querySelectorAll("[ref='titleElement']")[0];
                sut.viewModel.imageElement = document.querySelectorAll("[ref='imageElement']")[0];
            })
        // act
        .then(() => sut.attached())
        // assert
        .then(() => expect(sut.element.classList).toContain("card-image"))
        .then(done));

    it("must remove the class 'card-image' from the given element on detached", done =>
        // arrange
        sut
            .manuallyHandleLifecycle()
            .create(bootstrap)
            .then(() => sut.bind())
            .then(() => {              
                sut.viewModel.element = sut.element;
                sut.viewModel.titleElement = document.querySelectorAll("[ref='titleElement']")[0];
                sut.viewModel.imageElement = document.querySelectorAll("[ref='imageElement']")[0];
            })         
            .then(() => sut.attached())
            .then(() => expect(sut.element.classList).toContain("card-image"))
        // act
        .then(() => sut.detached())
        // assert
        .then(() => expect(sut.element.classList).not.toContain("card-image"))
        .then(done));

    it("must add the class 'card-title' to the title element on attached", done =>
        // arrange
        sut.manuallyHandleLifecycle()
            .create(bootstrap)
            .then(() => sut.bind())
            .then(() => {              
                sut.viewModel.element = sut.element;
                sut.viewModel.titleElement = document.querySelectorAll("[ref='titleElement']")[0];
                sut.viewModel.imageElement = document.querySelectorAll("[ref='imageElement']")[0];
            })
        // act
        .then(() => sut.attached())
        // assert
        .then(() => expect(sut.viewModel.titleElement.classList).toContain("card-title"))
        .then(done));

    it("must remove the class 'card-title' from the title element on detached", done =>
        // arrange
        sut
            .manuallyHandleLifecycle()
            .create(bootstrap)
            .then(() => sut.bind())
            .then(() => {              
                sut.viewModel.element = sut.element;
                sut.viewModel.titleElement = document.querySelectorAll("[ref='titleElement']")[0];
                sut.viewModel.imageElement = document.querySelectorAll("[ref='imageElement']")[0];
            })         
            .then(() => sut.attached())
            .then(() => expect(sut.viewModel.titleElement.classList).toContain("card-title"))
        // act
        .then(() => sut.detached())
        // assert
        .then(() => expect(sut.viewModel.titleElement.classList).not.toContain("card-title"))
        .then(done));

    it("must set the imageUrl on the imageElement on attached", done =>
        // arrange
        sut.inView("<m:card-image image-url='http://some.uri/img.png'></m:card-image>")
            .manuallyHandleLifecycle()
            .create(bootstrap)
            .then(() => sut.bind())
            .then(() => {              
                sut.viewModel.element = sut.element;
                sut.viewModel.titleElement = document.querySelectorAll("[ref='titleElement']")[0];
                sut.viewModel.imageElement = document.querySelectorAll("[ref='imageElement']")[0];
            })
        // act
        .then(() => sut.attached())
        // assert
        .then(() => expect(sut.viewModel.imageElement.src).toContain("http://some.uri/img.png"))
        .then(done));

    it("must clear the imageUrl on the imageElement on detached", done =>
        // arrange
        sut.inView("<m:card-image image-url='http://some.uri/img.png'></m:card-image>")
            .manuallyHandleLifecycle()
            .create(bootstrap)
            .then(() => sut.bind())
            .then(() => {              
                sut.viewModel.element = sut.element;
                sut.viewModel.titleElement = document.querySelectorAll("[ref='titleElement']")[0];
                sut.viewModel.imageElement = document.querySelectorAll("[ref='imageElement']")[0];
            })         
            .then(() => sut.attached())
            .then(() => expect(sut.viewModel.imageElement.src).toEqual("http://some.uri/img.png"))
        // act
        .then(() => sut.detached())
        // assert
        .then(() => expect(sut.viewModel.imageElement.src).toEqual(""))
        .then(done));

    it("must set the title on the titleElement on attached", done =>
        // arrange
        sut.inView("<m:card-image title='some title'></m:card-image>")
            .manuallyHandleLifecycle()
            .create(bootstrap)
            .then(() => sut.bind())
            .then(() => {              
                sut.viewModel.element = sut.element;
                sut.viewModel.titleElement = document.querySelectorAll("[ref='titleElement']")[0];
                sut.viewModel.imageElement = document.querySelectorAll("[ref='imageElement']")[0];
            })
        // act
        .then(() => sut.attached())
        // assert
        .then(() => expect(sut.viewModel.titleElement.textContent).toEqual("some title"))
        .then(done));

    it("must clear the title on the titleElement on detached", done =>
        // arrange
        sut.inView("<m:card-image title='some title'></m:card-image>")
            .manuallyHandleLifecycle()
            .create(bootstrap)
            .then(() => sut.bind())
            .then(() => {              
                sut.viewModel.element = sut.element;
                sut.viewModel.titleElement = document.querySelectorAll("[ref='titleElement']")[0];
                sut.viewModel.imageElement = document.querySelectorAll("[ref='imageElement']")[0];
            })         
            .then(() => sut.attached())
            .then(() => expect(sut.viewModel.titleElement.textContent).toEqual("some title"))
        // act
        .then(() => sut.detached())
        // assert
        .then(() => expect(sut.viewModel.titleElement.textContent).toEqual(""))
        .then(done));
});
