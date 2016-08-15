import { customAttribute } from "aurelia-framework";
import { inject } from "aurelia-dependency-injection";
import { config } from "./../../config";

@customAttribute(config.cardPanel)
@inject(Element)
export class CardPanelAttribute {

    constructor(public element: Element) {

    }

    public attached() {
        this.element.classList.add("card-panel");
    }

    public detached() {
        this.element.classList.remove("card-panel");
    }
}
