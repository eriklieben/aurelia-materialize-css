import { bindable, customElement, containerless, inlineView } from "aurelia-framework";
import { config } from "./../../config";

@customElement(config.collectionHeader)
@containerless()
@inlineView(`<template><li class="collection-header \${class}" ref="element"><slot></slot></li></template>`)
export class CollectionHeaderElement {

    public element: HTMLLIElement;

    @bindable()
    public class: string;

    public attached() {
        if (this.element.parentElement && !this.element.parentElement.classList.contains("with-header")) {
             this.element.parentElement.classList.add("with-header");
        }
    }
}
