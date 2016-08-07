import { customElement, containerless, inlineView, bindable } from "aurelia-framework";
import { config } from "./../../config";

@customElement(config.collapsibleHeader)
@containerless
@inlineView("<template><div class='collapsible-header ${class}'><slot></slot></div></template>")
export class CollapsibleHeaderElement {
    @bindable
    public class: string;
}
