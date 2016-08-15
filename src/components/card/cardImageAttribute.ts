import { customAttribute } from "aurelia-framework";
import { inject } from "aurelia-dependency-injection";
import { config } from "./../../config";

@customAttribute(config.cardImage)
@inject(Element)
export class CardImageAttribute {

    constructor(public element: Element) {

    }

    public attached() {
        this.element.classList.add("card-image");
    }

    public detached() {
        this.element.classList.remove("card-image");
    }
}
