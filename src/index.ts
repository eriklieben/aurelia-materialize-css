import "@eriklieben/materialize-css";
import { FrameworkConfiguration } from "aurelia-framework";
import * as materialConfig from "./config";

export class MaterializeCssOptions implements IMaterializeCssOptions {
    public enableAttributes = true;
    public enableElements = true;

    public attributeFilter: (value: string, index: number, array: string[]) => boolean = undefined;
    public elementFilter: (value: string, index: number, array: string[]) => boolean = undefined;

    public configuration: materialConfig.IConfiguration = new materialConfig.Configuration();
}

export interface IMaterializeCssOptions {
    enableAttributes?: boolean;
    enableElements?: boolean;

    attributeFilter?: (value: string, index: number, array: string[]) => boolean;
    elementFilter?: (value: string, index: number, array: string[]) => boolean;

    configuration?: materialConfig.IConfiguration;
}

export function configure(config: FrameworkConfiguration, options?: IMaterializeCssOptions) {

    options = Object.assign(new MaterializeCssOptions(), options);
    materialConfig.config = options.configuration;

    let attributes = [
        "./javascript/collapsible/collapsibleAttribute",
        "./javascript/collapsible/collapsibleBodyAttribute",
        "./javascript/collapsible/collapsibleHeaderAttribute",

        "./javascript/dropdown/dropdownAttribute",
        "./javascript/dropdown/dropdownDividerAttribute",

        "./javascript/media/boxedAttribute",

        "./javascript/modals/modalTriggerAttribute",

        "./javascript/pushpin/pushpinAttribute",

        "./javascript/scrollspy/scrollspyAttribute",

        "./components/badge/badgeAttribute",

        "./components/breadcrumbs/breadcrumbAttribute",
        "./components/breadcrumbs/breadcrumbsAttribute",

        "./components/button/buttonAttribute",
    ];

    let elements = [
        "./javascript/collapsible/collapsibleElement",
        "./javascript/collapsible/collapsibleBodyElement",
        "./javascript/collapsible/collapsibleHeaderElement",
        "./javascript/collapsible/collapsibleItemElement",

        "./javascript/dropdown/dropdownElement",
        "./javascript/dropdown/dropdownDividerElement",
        "./javascript/dropdown/dropdownItemElement",

        "./javascript/media/slideElement",
        "./javascript/media/sliderElement",

        "./javascript/modals/modalContentElement",
        "./javascript/modals/modalElement",
        "./javascript/modals/modalFooterElement",

        "./javascript/pushpin/pushpinElement",

        "./javascript/scrollspy/scrollspyElement",

        "./components/badge/badgeElement",

        "./components/breadcrumbs/breadcrumbElement",
        "./components/breadcrumbs/breadcrumbsElement",

        "./components/button/buttonElement",
    ];

    // Filter out attributes and elements
    if (options.attributeFilter) {
        attributes = attributes.filter(options.attributeFilter);
    }

    if (options.elementFilter) {
        elements = elements.filter(options.elementFilter);
    }

    // Only load attributes & elements if they are enabled
    if (options.enableAttributes) {
        config.globalResources(attributes);
    }

    if (options.enableElements) {
        config.globalResources(elements);
    }
}

export default MaterializeCssOptions;
