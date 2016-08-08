import { StageComponent } from "aurelia-testing";
import { bootstrap } from "aurelia-bootstrapper";

describe("the Aurelia Materialize CSS SliderElement", () => {
    let sut, options;

    beforeEach(() => {
        sut = StageComponent
                .withResources("./../../../../base/dist/amd/javascript/media/sliderElement")
                .inView("<m:slider id='someId'></m:slider>");
        options = {
            full_width: false,
        };
    });

    afterEach(() => sut.dispose());    

    it("must perform the slider jQuery method on the given element", done => {
        // arrange
        spyOn($.fn, "slider");
        sut
        // act
        .create(bootstrap)
        .then(() => sut.viewModel.element = sut.element)
        // assert            
        .then(() => expect($.fn.slider).toHaveBeenCalled())
        .then(done);
    });

    it("must perform the slider jQuery method on the given element with the default options by default", done => {
        // arrange
        spyOn($.fn, "slider");
        sut
        // act
        .create(bootstrap)
        .then(() => sut.viewModel.element = sut.element)
        // assert            
        .then(() => expect($.fn.slider).toHaveBeenCalledWith(options))
        .then(done);
    });

    it("must call the slider method with custom options if is fullscreen set", done => {
        // arrange
        spyOn($.fn, "slider");
        options.full_width = true;
        
        sut.inView("<m:slider id='someId' fullscreen='true'></m:slider>")
        // act
        .manuallyHandleLifecycle()
        .create(bootstrap)
        .then(() => sut.bind())
        .then(() => sut.viewModel.element = sut.element)
        .then(() => sut.attached())
        // assert            
        .then(() => expect($.fn.slider).toHaveBeenCalledWith(options))
        .then(done);
    });

    it("must add the css class 'fullscreen' if fullscreen is set", done =>
        // arrange
        sut.inView("<m:slider id='someId' fullscreen='true'></m:slider>")
        // act
        .manuallyHandleLifecycle()
        .create(bootstrap)
        .then(() => sut.bind())
        .then(() => sut.viewModel.element = sut.element)
        .then(() => sut.attached())
        // assert            
        .then(() => expect(sut.element.classList).toContain("fullscreen"))
        .then(done));

    it("must not add the css class 'fullscreen' if fullscreen is not set", done =>
        // arrange & act
        sut.create(bootstrap)
        .then(() => sut.viewModel.element = sut.element)
        // assert            
        .then(() => expect(sut.element.classList).not.toContain("fullscreen"))
        .then(done));

    it("must remove the css class 'fullscreen' from the slider element on detached", done =>
        // arrange
        sut
            .inView("<m:slider id='someId' fullscreen='true'></m:slider>")
            .manuallyHandleLifecycle()
            .create(bootstrap)
            .then(() => sut.bind())
            .then(() => sut.viewModel.element = sut.element)
            .then(() => sut.attached())
            .then(() => expect(sut.viewModel.element.classList).toContain("fullscreen"))
        // act
        .then(() => sut.detached())
        // assert
        .then(() => expect(sut.viewModel.element.classList).not.toContain("fullscreen"))
        .then(done));
});