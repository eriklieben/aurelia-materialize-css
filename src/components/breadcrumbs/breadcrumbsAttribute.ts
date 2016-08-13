import { customAttribute } from "aurelia-framework";
import { inject } from "aurelia-dependency-injection";
import { DOM } from "aurelia-pal";
import { config } from "./../../config";

@customAttribute(config.breadcrumbs)
@inject(Element)
export class BreadcrumbsAttribute {

    constructor(public element: HTMLElement) { }

    public attached() {

        let colWrapper = DOM.createElement("div");
        colWrapper.classList.add("col", "s12");

        while (this.element.hasChildNodes()) {
            colWrapper.appendChild(this.element.firstChild);
        }

        this.element.appendChild(colWrapper);
        this.element.classList.add("nav-wrapper");
    }

    public detached() {
        this.element.classList.remove("nav-wrapper");
    }
}
