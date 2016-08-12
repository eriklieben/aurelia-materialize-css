import { bindable, customElement, inlineView } from "aurelia-framework";
import { config } from "./../../config";

@customElement(config.badge)
@inlineView("<template><span ref='element'><slot></slot></span></template>")
export class BadgeElement {

    @bindable({ defaultValue: false })
    public new: string;

    public element: HTMLSpanElement;

    public attached() {
        this.element.classList.add("badge");

         if (this.new || this.element.attributes.getNamedItem("new") !== null) {
             this.element.classList.add("new");
         }
    }

    public detached() {
        this.element.classList.remove("badge");
    }

    public newChanged() {
       if (this.element) {
            (!this.new && this.element.attributes.getNamedItem("new") === null) ? 
                this.element.classList.remove("new") : 
                this.element.classList.add("new");
       }
    }
}
