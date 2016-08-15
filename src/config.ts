export class Configuration implements IConfiguration {

    public prefix = "m:";

    public collapsible = `${this.prefix}collapsible`.trim();
    public collapsibleBody = `${this.prefix}collapsible-body`.trim();
    public collapsibleHeader = `${this.prefix}collapsible-header`.trim();
    public collapsibleItem = `${this.prefix}collapsible-item`.trim();

    public dropdown = `${this.prefix}dropdown`.trim();
    public dropdownDivider = `${this.prefix}dropdown-divider`.trim();
    public dropdownItem = `${this.prefix}dropdown-item`.trim();

    public boxed = `${this.prefix}boxed`.trim();
    public slide = `${this.prefix}slide`.trim();
    public slider = `${this.prefix}slider`.trim();

    public modal = `${this.prefix}modal`.trim();
    public modalTrigger = `${this.prefix}modal-trigger`.trim();
    public modalContent = `${this.prefix}modal-content`.trim();
    public modalFooter = `${this.prefix}modal-footer`.trim();

    public pushpin = `${this.prefix}pushpin`.trim();

    public scrollSpy = `${this.prefix}scrollspy`.trim();

    public badge = `${this.prefix}badge`.trim();

    public breadcrumb = `${this.prefix}breadcrumb`.trim();
    public breadcrumbs = `${this.prefix}breadcrumbs`.trim();

    public button = `${this.prefix}button`.trim();
    public allowedWaves = ["light", "red", "yellow", "orange", "purple", "green", "teal"];

    public card = `${this.prefix}card`.trim();
    public cardTitle = `${this.prefix}card-title`.trim();
    public cardAction = `${this.prefix}card-action`.trim();
    public cardImage = `${this.prefix}card-image`.trim();
    public cardReveal = `${this.prefix}card-reveal`.trim();
    public cardPanel = `${this.prefix}card-panel`.trim();
}

export interface IConfiguration {
    prefix?: string;

    collapsible?: string;
    collapsibleBody?: string;
    collapsibleHeader?: string;
    collapsibleItem?: string;

    dropdown?: string;
    dropdownDivider?: string;
    dropdownItem?: string;

    boxed?: string;
    slide?: string;
    slider?: string;

    modal?: string;
    modalTrigger?: string;
    modalContent?: string;
    modalFooter?: string;

    pushpin?: string;

    scrollSpy?: string;

    badge?: string;

    breadcrumb?: string;
    breadcrumbs?: string;

    button?: string;
    allowedWaves?: Array<string>;

    card?: string;
    cardTitle?: string;
    cardAction?: string;
    cardImage?: string;
    cardReveal?: string;
    cardPanel?: string;
}

export var config: IConfiguration = new Configuration();
export default config;
