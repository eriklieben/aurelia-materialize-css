import { customAttribute } from "aurelia-framework";
import { inject } from "aurelia-dependency-injection";
import { config } from "./../../config";

@customAttribute(config.cardAction)
@inject(Element)
export class CardActionAttribute {

    constructor(public element: Element) {

    }

    public attached() {
        this.element.classList.add("card-action");
    }

    public detached() {
        this.element.classList.remove("card-action");
    }
}
