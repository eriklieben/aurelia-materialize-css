# aurelia-materialize-css plugin

[![Gitter](https://badges.gitter.im/aurelia-materialize-css/Lobby.svg)](https://gitter.im/aurelia-materialize-css/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge) [![Build Status](https://travis-ci.org/eriklieben/aurelia-materialize-css.svg?branch=master)](https://travis-ci.org/eriklieben/aurelia-materialize-css)
[![GitHub version](https://img.shields.io/github/release/eriklieben/aurelia-materialize-css.svg)](https://img.shields.io/github/release/eriklieben/aurelia-materialize-css.svg)
[![npm version](https://img.shields.io/npm/v/aurelia-materialize-css.svg)](https://img.shields.io/npm/v/aurelia-materialize-css.svg)

Custom elements and attributes to use MaterializeCSS with Aurelia.

#Demo site
Examples and how to use can be found at the [demo site](http://aurelia-materialize-css.azurewebsites.net/)

#Dependencies
- [Materialize-CSS](https://github.com/Dogfalo/materialize)
- [JQuery](https://github.com/components/jquery)
- [SystemJS plugin-css](https://github.com/systemjs/plugin-css/)

#Installation
```
jspm i aurelia-materialize-css
```
main.ts (typescript)
```typescript
export function configure(aurelia: Aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin("aurelia-materialize-css");

  aurelia.start().then(() => aurelia.setRoot());
}
```
main.js (javascript)
```javascript
export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin("aurelia-materialize-css");

  aurelia.start().then(() => aurelia.setRoot());
}
```

#Configuration
Allows you to supply ```MaterializeCssOptions``` options.

``` 
.plugin("aurelia-materialize-css", new MaterializeCssOptions());
```

##MaterializeCssOption properties:

| Property         | Type             | Default   | Description                                                       |
| ---------------- |:---------------- | --------- | ----------------------------------------------------------------- | 
| enableAttributes | boolean          | true      | enable or disable all the attributes                              |
| enableElements   | boolean          | true      | enable or disable all the elements                                |
| attributeFilter  | (val) => boolean | undefined | func, allows custom logic to enable or disable attributes         | 
| elementFilter    | (val) => boolean | undefined | func, allows custom logic to enable or disable elements           |
| configuration    | Configuration    | see below | configuration object allows custom naming of elements/ attributes |

##Configuration properties:

| Property          | Default                                         | Description                                         |
| ----------------- | ----------------------------------------------- | --------------------------------------------------- |
| prefix            | m:                                              | The prefix before each element or attribute         |
| collapsible       | m:collapsible                                   | Name of the collapsible element or attribute        |
| collapsibleBody   | m:collapsible-body                              | Name of the collapsible body element or attribute   |
| collapsibleHeader | m:collapsible-header                            | Name of the collapsible header element or attribute |
| collapsibleItem   | m:collapsible-item                              | Name of the collapsible item element or attribute   |
| dropdown          | m:dropdown                                      | Name of the dropdown element or attribute           |
| dropdownDivider   | m:dropdown-divider                              | Name of the dropdown divider element or attribute   |
| dropdownItem      | m:dropdown-item                                 | Name of the dropdown item element or attribute      |
| boxed             | m:boxed                                         | Name of the boxed element or attribute              |
| slide             | m:slide                                         | Name of the slide element or attribute              |
| slider            | m:slider                                        | Name of the slider element or attribute             |
| modal             | m:modal                                         | Name of the modal element or attribute              |
| modalTrigger      | m:modal-trigger                                 | Name of the modal trigger element or attribute      |
| modalContent      | m:modal-content                                 | Name of the modal content element or attribute      |
| modalFooter       | m:modal-footer                                  | Name of the modal footer element or attribute       |
| pushpin           | m:pushpin                                       | Name of the pushpin element or attribute            |
| scrollSpy         | m:scrollspy                                     | Name of the scroll spy element or attribute         |
| badge             | m:badge                                         | Name of the badge element or attribute              |
| icon              | m:icon                                          | Name of the icon element or attribute               |
| button            | m:button                                        | Name of the button element or attribute             |
| breadcrumb        | m:breadcrumb                                    | Name of the breadcrumb element or attribute         |
| breadcrumbs       | m:breadcrumbs                                   | Name of the breadcrumbs element or attribute        |
| materialSelect    | m:select                                        | Name of the material select element or attribute    |
| pickadate         | m:pickadate                                     | Name of the pick a date element or attribute        |
| card              | m:card                                          | Name of the card element or attribute               |
| cardTitle         | m:card-title                                    | Name of the card title element or attribute         |
| cardAction        | m:card-action                                   | Name of the card action element or attribute        |
| cardImage         | m:card-image                                    | Name of the card image element or attribute         |
| cardReveal        | m:card-reveal                                   | Name of the card reveal element or attribute        |
| cardPanel         | m:card-panel                                    | Name of the card panel element or attribute         |
| allowedWaves      | light, red, yellow, orange, purple, green, teal | List of allowed waves classes                       |

