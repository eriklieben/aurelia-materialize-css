import { bindable, customElement, containerless, inlineView } from "aurelia-framework";
import { config } from "./../../config";

@customElement(config.collectionItem)
@containerless()
@inlineView(`<template><li ref="element" class="collection-item \${class}"><slot></slot></li></template>`)
export class CollectionItemElement {

    public element: HTMLLIElement;

    @bindable()
    public dismissable: string;

    @bindable()
    public class: string;

    public attached() {

        if (this.dismissable !== undefined  && (this.dismissable.trim() === "" || this.dismissable === "true")) {
            this.element.classList.add("dismissable");
        }
    }
}
