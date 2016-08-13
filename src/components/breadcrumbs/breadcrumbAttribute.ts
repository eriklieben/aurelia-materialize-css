import { customAttribute } from "aurelia-framework";
import { inject } from "aurelia-dependency-injection";
import { config } from "./../../config";

@customAttribute(config.breadcrumb)
@inject(Element)
export class BreadcrumbAttribute {

    constructor(public element: HTMLElement) {}

    public attached() {
        this.element.classList.add("breadcrumb");
    }

    public detached() {
        this.element.classList.remove("breadcrumb");
    }
}
