import { customAttribute } from "aurelia-framework";
import { inject } from "aurelia-dependency-injection";
import { config } from "./../../config";

@customAttribute(config.materialSelect)
@inject(Element)
export class SelectAttribute {

    constructor(private element: Element) {
    }

    public attached() {
        $(this.element).material_select();
    }

    public detached() {
        $(this.element).material_select("destroy");
    }
}
