import { customElement, containerless, inlineView } from "aurelia-framework";
import { config } from "./../../config";

@customElement(config.dropdownDivider)
@containerless
@inlineView("<template><li class='divider'></li></template>")
export class DropdownDividerElement {

}
