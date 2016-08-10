import { customAttribute, bindable } from "aurelia-framework";
import { inject } from "aurelia-dependency-injection";
import { config } from "./../../config";

@customAttribute(config.pushpin)
@inject(Element)
export class PushpinAttribute {

    @bindable()
    public bottom = Infinity;

    @bindable()
    public offset = 0;

    @bindable()
    public top = 0;

    constructor(private element: Element) {
    }

    public attached() {
        let options = {
            bottom: this.bottom,
            offset: this.offset,
            top: this.top,
        };
        $(this.element).pushpin(options);
    }
}
