import { customAttribute } from "aurelia-framework";
import { inject } from "aurelia-dependency-injection";
import { config } from "./../../config";

@customAttribute(config.scrollSpy)
@inject(Element)
export class ScrollSpyAttribute {

    constructor(private element: Element) {
    }

    public attached() {
        $("*[id]", this.element).scrollSpy();
    }
}
