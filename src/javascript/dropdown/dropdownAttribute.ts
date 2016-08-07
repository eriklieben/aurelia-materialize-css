import { customAttribute, bindable, bindingMode } from "aurelia-framework";
import { inject } from "aurelia-dependency-injection";
import { config } from "./../../config";

@customAttribute(config.dropdown)
@inject(Element)
export class DropdownAttribute {

    @bindable()
    public title: string;

    @bindable({ defaultBindingMode: bindingMode.oneTime, defaultValue: "left"})
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

    constructor(private element: Element) {
    }

    public attached() {

        let options: Materialize.DropDownOptions = {
            alignment: this.alignment,
            belowOrigin: this.belowOrigin,
            constrain_width: this.constrainWidth,
            gutter: this.gutter,
            hover: this.hover,
            inDuration: this.inDuration,
            outDuration: this.outDuration,
        };

        this.element.classList.add("dropdown-button");
        $(this.element).dropdown(options);
    }

    public detached() {
        this.element.classList.remove("dropdown-button");
    }
}
