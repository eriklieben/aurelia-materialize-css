import { customElement, containerless, inlineView } from "aurelia-framework";
import { config } from "./../../config";

@customElement(config.cardTitle)
@containerless()
@inlineView("<template><div ref='element'><slot></slot></div></template>")
export class CardTitleElement {

    public element: HTMLDivElement;

    public attached() {
        this.element.classList.add("card-title");
    }

    public detached() {
        this.element.classList.remove("card-title");
    }
}
