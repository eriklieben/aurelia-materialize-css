import { customElement, containerless, inlineView } from "aurelia-framework";
import { config } from "./../../config";

@customElement(config.collapsibleItem)
@containerless
@inlineView("<template><li><slot></slot></li></template>")
export class CollapsibleItemElement {
}
