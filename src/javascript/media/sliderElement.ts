import { bindable, bindingMode, containerless, customElement, inlineView } from "aurelia-framework";
import { config } from "./../../config";

@customElement(config.slider)
@containerless
@inlineView("<template><div class='slider' ref='element' id='${id}'><ul class='slides'><slot></slot></ul></div></template>")
export class SliderElement {

    @bindable()
    public id: string;

    @bindable({ defaultBindingMode: bindingMode.oneTime, defaultValue: "false" })
    public fullscreen: string;

    public element: HTMLDivElement;

    public attached() {

        let options = { full_width: false };
        if (this.fullscreen.toLowerCase() === "true") {
            this.element.classList.add("fullscreen");
            options.full_width = true;
        }

        $(this.element).slider(options);
    }

    public detached() {
        this.element.classList.remove("fullscreen");
    }
}
