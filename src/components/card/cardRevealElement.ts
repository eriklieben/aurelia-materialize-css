import { customElement, containerless, inlineView } from "aurelia-framework";
import { config } from "./../../config";

@customElement(config.cardReveal)
@containerless()
@inlineView("<template><div ref='element'><slot></slot></div></template>")
export class CardRevealElement {

    public element: HTMLDivElement;

    public attached() {
        this.element.classList.add("card-reveal");
    }

    public detached() {
        this.element.classList.remove("card-reveal");
    }
}
