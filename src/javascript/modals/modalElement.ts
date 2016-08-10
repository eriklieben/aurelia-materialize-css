import { bindable, bindingMode, customElement, inlineView } from "aurelia-framework";
import { config } from "./../../config";

@customElement(config.modal)
@inlineView("<template><slot></slot></template>")
export class ModalElement {

    @bindable({ defaultBindingMode: bindingMode.oneTime })
    public id: string = null;

    public attached() {
        if (!this.id || this.id.trim().length === 0) {
           throw new Error(`id is a required attribute for the element ${config.modal}, ` +
                             `you need to set it on your modal trigger(${config.modalTrigger}).`);
        }
    }
}
