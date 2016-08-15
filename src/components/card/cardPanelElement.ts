import { customElement, containerless, inlineView } from "aurelia-framework";
import { config } from "./../../config";

@customElement(config.cardPanel)
@containerless()
@inlineView("<template><div ref='element'><slot></slot></div></template>")
export class CardPanelElement {

    public element: HTMLDivElement;

    public attached() {
        this.element.classList.add("card-panel");
    }

    public detached() {
        this.element.classList.remove("card-panel");
    }
}
