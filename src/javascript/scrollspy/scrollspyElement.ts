import { customElement, inlineView } from "aurelia-framework";
import { inject } from "aurelia-dependency-injection";
import { config } from "../../config";

@customElement(config.scrollSpy)
@inlineView("<template><slot></slot></template>")
@inject(Element)
export class ScrollSpyElement {

    constructor(private element: Element) {
    }

    public attached() {
        $("*[id]", this.element).scrollSpy();
    }
}
