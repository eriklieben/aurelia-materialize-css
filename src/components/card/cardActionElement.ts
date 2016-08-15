import { customElement, containerless, inlineView } from "aurelia-framework";
import { config } from "./../../config";

@customElement(config.cardAction)
@containerless()
@inlineView("<template><div ref='element'><slot></slot></div></template>")
export class CardActionElement {

    public element: HTMLDivElement;

    public attached() {
        this.element.classList.add("card-action");
    }

    public detached() {
        this.element.classList.remove("card-action");
    }
}
