import { bindable, customElement, inlineView, containerless } from "aurelia-framework";
import { config } from "./../../config";

@customElement(config.button)
@containerless()
@inlineView("<template><a ref='element'><slot></slot></a></template>")
export class ButtonElement {

    public element: HTMLAnchorElement;

    @bindable()
    public disabled = false;

    @bindable()
    public flat = false;

    @bindable()
    public floating = false;

    @bindable()
    public large = false;

    @bindable({ defaultValue: ""})
    public waves: string;

    public attached() {
        if (this.flat) {
            this.element.classList.add("btn-flat");
        } else if (this.floating) {
            this.element.classList.add("btn-floating");
        } else {
            this.element.classList.add("btn");
        }

        if (this.large) {
            this.element.classList.add("btn-large");
        }

        if (this.disabled) {
            this.element.classList.add("disabled");
        }

        this.element.classList.add("waves-effect");
        this.waves = this.waves.trim().toLowerCase();

        if (this.waves !== "") {
            if (!config.allowedWaves.some(val => val === this.waves)) {
                return;
            }

            this.element.classList.add("waves-" + this.waves);
        }
    }

    public detached() {
        this.element.classList.remove("btn-flat", "btn-floating", "btn-large", "btn", "disabled", "waves-effect");
        config.allowedWaves.map(val => "waves-" + val).forEach(val => this.element.classList.remove(val));
    }
}
