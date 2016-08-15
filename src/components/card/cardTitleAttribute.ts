import { customAttribute } from "aurelia-framework";
import { inject } from "aurelia-dependency-injection";
import { config } from "./../../config";

@customAttribute(config.cardTitle)
@inject(Element)
export class CardTitleAttribute {

    constructor(public element: Element) {

    }

    public attached() {
        this.element.classList.add("card-title");
    }

    public detached() {
        this.element.classList.remove("card-title");
    }
}
