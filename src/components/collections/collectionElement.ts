import { bindable, customElement, containerless, inlineView } from "aurelia-framework";
import { config } from "./../../config";

@customElement(config.collection)
@containerless()
@inlineView(`<template><ul class="collection \${class}" ref="element">
<template repeat.for="item of data" part="item-template">
    <li class="collection-item">\${item}</li>
</template>
<slot></slot></ul></template>`)
export class CollectionElement {

    @bindable()
    public data: Array<any> = [];

    @bindable()
    public class: string;
}
