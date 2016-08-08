import { customAttribute } from "aurelia-framework";
import { inject } from "aurelia-dependency-injection";
import { config } from "./../../config";

@customAttribute(config.boxed)
@inject(Element)
export class BoxedAttribute {

    constructor(private element: Element) {
    }

    public attached() {
        this.element.classList.add("materialboxed");
        $(this.element).materialbox();
    }

    public detached() {
        this.element.classList.remove("materialboxed");
    }
}
