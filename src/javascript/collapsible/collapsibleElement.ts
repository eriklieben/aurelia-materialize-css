import { bindable, customElement, containerless, inlineView } from "aurelia-framework";
import { config } from "./../../config";

@customElement(config.collapsible)
@containerless
@inlineView("<template><ul ref='element' id='${id}'><slot></slot></ul></template>")
export class CollapsibleElement {

    public element: HTMLUListElement;

    @bindable()
    public id: string;

    @bindable({ defaultValue: "accordion" })
    public type: string;

    @bindable({ defaultValue: "" })
    public class: string;

    public attached() {

        this.element.classList.add("collapsible");
        this.element.setAttribute("data-collapsible", this.type);

        if (this.class !== undefined && this.class !== null) {
            this.class.split(" ").forEach(element => {
                if (element !== "") {
                    this.element.classList.add(element);
                }
            });
        }
        $(this.element).collapsible();
    }

    public detached() {
        this.element.removeAttribute("data-collapsible");
        this.element.classList.remove("collapsible");
    }
}
