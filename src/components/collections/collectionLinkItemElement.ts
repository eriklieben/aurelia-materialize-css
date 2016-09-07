import { bindable, customElement, containerless, inlineView } from "aurelia-framework";
import { config } from "./../../config";

@customElement(config.collectionLinkItem)
@containerless()
@inlineView('<template><a href.bind="href" class="collection-item ${class}"><slot></slot></a></template>')
export default class CollectionLinkItemElement {

    @bindable({ defaultValue: ""})
    public href: string;

    @bindable({ defaultValue: ""})
    public class: string;
}
