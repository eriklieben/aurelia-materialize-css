import { bindable, customElement, inlineView } from "aurelia-framework";
import { config } from "./../../config";

@customElement(config.cardImage)
@inlineView("<template><div ref='element'><img ref='imageElement'></image><span ref='titleElement'></span></div></template>")
export class CardImageElement {

    public element: HTMLDivElement;
    public imageElement: HTMLImageElement;
    public titleElement: HTMLSpanElement;

    @bindable()
    public imageUrl: string;

    @bindable()
    public title: string;

    public attached() {
        this.element.classList.add("card-image");
        this.titleElement.classList.add("card-title");
        this.imageElement.src = this.imageUrl;
        this.titleElement.textContent = this.title;
    }

    public detached() {
        this.element.classList.remove("card-image");
        this.titleElement.classList.remove("card-title");
        this.imageElement.removeAttribute("src");
        this.titleElement.textContent = "";
    }
}
