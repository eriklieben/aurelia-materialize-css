import { customAttribute } from "aurelia-framework";
import { inject } from "aurelia-dependency-injection";
import { config } from "./../../config";

@customAttribute(config.cardReveal)
@inject(Element)
export class CardRevealAttribute {

    constructor(public element: Element) {

    }

    public attached() {
        this.element.classList.add("card-reveal");
    }

    public detached() {
        this.element.classList.remove("card-reveal");
    }
}
