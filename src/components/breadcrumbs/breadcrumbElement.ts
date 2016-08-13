import { customElement, containerless, inlineView } from "aurelia-framework";
import { config } from "./../../config";

@customElement(config.breadcrumb)
@containerless()
@inlineView("<template><a ref='element'><slot></slot></a></template>")
export class BreadcrumbElement {

    public element: HTMLAnchorElement;

    public attached() {
        this.element.classList.add("breadcrumb");
    }

    public detached() {
        this.element.classList.remove("breadcrumb");
    }
}
