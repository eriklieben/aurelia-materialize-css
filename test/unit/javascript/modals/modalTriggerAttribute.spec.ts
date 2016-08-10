import { ModalTrigger } from "./../../../../src/javascript/modals/modalTriggerAttribute";
import { DOM } from "aurelia-pal";

describe("the Aurelia Materialize CSS ModalElement", () => {
    let sut, element;

    beforeEach(() => {
        element = DOM.createElement("div");
        sut = new ModalTrigger(element);
    });

    //afterEach(() => sut.dispose());    

    it("must perform the openModal jQuery method on the given element if click function is called", () => {

        // arrange
        spyOn($.fn, "openModal");
        var sut = new ModalTrigger(null);

        // act
        sut.click();

        // assert
        expect($.fn.openModal).toHaveBeenCalled();
    });

    it("must change value property when valueChanged method is called", () => {

        // arrange
        sut.value = "val";

        // act
        sut.valueChanged("new val");

        // assert
        expect(sut.value).toBe("new val");
    });

    it("must add the 'click' event listener to the element on attached", () => {

        // arrange
        spyOn(sut.element, "addEventListener");

        // act
        sut.attached();

        // assert
        expect(sut.element.addEventListener)
            .toHaveBeenCalledWith("click", jasmine.any(Function));
    });

    it("must remove the 'click' event listener to the element on detached", () => {

        // arrange
        spyOn(sut.element, "removeEventListener");

        // act
        sut.detached();

        // assert
        expect(sut.element.removeEventListener)
            .toHaveBeenCalledWith("click", sut.click);
    });

});

