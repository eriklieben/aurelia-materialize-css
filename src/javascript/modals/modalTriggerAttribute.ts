import { customAttribute } from "aurelia-framework";
import { inject } from "aurelia-dependency-injection";
import { config } from "./../../config";

@customAttribute(config.modalTrigger)
@inject(Element)
export class ModalTrigger {

    public value;

    constructor(private element: Element) {
    }

    public attached() {
        this.element.addEventListener("click", this.click.bind(this));
    }

    public detached() {
        this.element.removeEventListener("click", this.click);
    }

    public valueChanged(newValue) {
        this.value = newValue;
    }

    public click() {
        $(`#${this.value}`).openModal();
    }
}
