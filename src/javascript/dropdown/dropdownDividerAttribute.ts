import { customAttribute } from "aurelia-framework";
import { inject } from "aurelia-dependency-injection";
import { config } from "./../../config";

@customAttribute(config.dropdownDivider)
@inject(Element)
export class DropdownDividerAttribute {

    constructor(private element: Element) {
    }

    public attached() {
        this.element.classList.add("divider");
    }

    public detached() {
        this.element.classList.remove("divider");
    }
}
