import { bindable, containerless, customElement, inlineView } from "aurelia-framework";
import { config } from "./../../config";

@customElement(config.icon)
@containerless()
@inlineView("<template><i ref='element'><slot></slot></i></template>")
export class IconElement {

    @bindable({ defaultValue: "small" })
    public size: string;

    public element: HTMLElement;

    public attached() {
        this.element.classList.add("material-icons");
        this.element.classList.add(this.size);
    }

    public detached() {
        this.element.classList.remove("material-icons");
        this.element.classList.remove(this.size);
    }
}
