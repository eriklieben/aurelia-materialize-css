import { bindable, customElement, containerless, inlineView } from "aurelia-framework";
import { config } from "./../../config";

@customElement(config.card)
@containerless()
@inlineView("<template><div ref='element'><slot></slot></div></template>")
export class CardElement {

    public element: HTMLDivElement;

    @bindable()
    public size: string;

    public attached() {
        this.element.classList.add("card");
        if (this.size) {
            this.element.classList.add(this.size);
        }
    }

    public detached() {
        this.element.classList.remove("card", "small", "medium", "large");
    }
}
