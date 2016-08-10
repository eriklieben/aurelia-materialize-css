import { ModalElement } from "./../../../../src/javascript/modals/modalElement";
import { DOM } from "aurelia-pal";

describe("the Aurelia Materialize CSS ModalElement", () => {
    let sut;

    beforeEach(() => {
        sut = new ModalElement();
    });

    it("must thow error if id is undefined on attached", () => {

        // arrange
        sut.id = undefined;

        // act & assert
        expect(() => sut.attached())
            .toThrowError(`id is a required attribute for the element m:modal, ` +
            `you need to set it on your modal trigger(m:modal-trigger).`);
    });

    it("must thow error if id is empty string on attached", () => {

        // arrange
        sut.id = "";

        // act & assert
        expect(() => sut.attached())
            .toThrowError(`id is a required attribute for the element m:modal, ` +
            `you need to set it on your modal trigger(m:modal-trigger).`);
    });
});

