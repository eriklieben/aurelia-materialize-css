import { bindable, customElement, containerless, inlineView } from "aurelia-framework";
import { config } from "./../../config";

@customElement(config.linkCollection)
@containerless()
@inlineView(`<template><div class="collection \${class}" ref="element">
<template repeat.for="item of data" part="item-template" class="collection-item">
   <a href="#\${item}">\${item}</a>
</template>
<slot></slot></div></template>`)
export class CollectionElement {

    @bindable()
    public data: Array<any> = [];

    @bindable({ defaultValue: ""})
    public class: string;
}
