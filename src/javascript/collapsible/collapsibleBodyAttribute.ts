import { customAttribute } from "aurelia-framework";
import { inject } from "aurelia-dependency-injection";
import { config } from "./../../config";

@customAttribute(config.collapsibleBody)
@inject(Element)
export class CollapsibleBodyAttribute {

    constructor(private element: Element) {
    }

    public attached() {
        this.element.classList.add("collapsible-body");
    }

    public detached() {
        this.element.classList.remove("collapsible-body");
    }
}
