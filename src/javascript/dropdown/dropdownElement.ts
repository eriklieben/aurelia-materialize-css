import { bindable, bindingMode, containerless, customElement, inlineView } from "aurelia-framework";
import { config } from "./../../config";

@customElement(config.dropdown)
@containerless
@inlineView("<template><a class='dropdown-button btn' ref='dropdownBtn' id='${id}-button' data-activates='${id}'>${title}</a>" +
            "<ul id='${id}' class='dropdown-content'><slot></slot></ul></template>")
export class DropdownElement {

    @bindable()
    public title: string;

    @bindable({ defaultBindingMode: bindingMode.oneTime })
    public id: string = null;

    @bindable({ defaultBindingMode: bindingMode.oneTime, defaultValue: "left" })
    public alignment: string;

    @bindable({ defaultBindingMode: bindingMode.oneTime, defaultValue: false })
    public belowOrigin: boolean;

    @bindable({ defaultBindingMode: bindingMode.oneTime, defaultValue: true })
    public constrainWidth: boolean;

    @bindable({ defaultBindingMode: bindingMode.oneTime, defaultValue: 0 })
    public gutter: number;

    @bindable({ defaultBindingMode: bindingMode.oneTime, defaultValue: false })
    public hover: boolean;

    @bindable({ defaultBindingMode: bindingMode.oneTime, defaultValue: 300 })
    public inDuration: number;

    @bindable({ defaultBindingMode: bindingMode.oneTime, defaultValue: 225 })
    public outDuration: number;

    public dropdownBtn: HTMLAnchorElement;

    public attached() {

        if (!this.id || this.id.trim().length === 0) {
            throw new Error(`id is a required attribute for the element ${config.dropdown}.`);
        }

        let options: Materialize.DropDownOptions = {
            alignment: this.alignment,
            belowOrigin: this.belowOrigin,
            constrain_width: this.constrainWidth,
            gutter: this.gutter,
            hover: this.hover,
            inDuration: this.inDuration,
            outDuration: this.outDuration,
        };

        $(this.dropdownBtn).dropdown(options);
    }
}
