import { customAttribute } from "aurelia-framework";
import { inject } from "aurelia-dependency-injection";
import { config } from "./../../config";

@customAttribute(config.collapsibleHeader)
@inject(Element)
export class CollapsibleHeaderAttribute {

    constructor(private element: Element) {
    }

    public attached() {
        this.element.classList.add("collapsible-header");
    }

    public detached() {
        this.element.classList.remove("collapsible-header");
    }
}
