import { customElement, containerless, inlineView } from "aurelia-framework";
import {config} from "./../../config";

@customElement(config.slide)
@containerless
@inlineView("<template><li><slot></slot></li></template>")
export class SlideElement {

}
