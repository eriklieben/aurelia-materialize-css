import { customElement, containerless, inlineView } from "aurelia-framework";
import { config } from "./../../config";

@customElement(config.breadcrumbs)
@containerless()
@inlineView("<template><div ref='element'><div class='col s12'><slot></slot></div></div></template>")
export class BreadcrumbsElement {

    public element: HTMLDivElement;

    public attached() {
        this.element.classList.add("nav-wrapper");
    }

    public detached() {
        this.element.classList.remove("nav-wrapper");
    }
}
