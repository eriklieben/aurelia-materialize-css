import { StageComponent } from "aurelia-testing";
import { config } from "./../../../../src/config";
import { bootstrap } from "aurelia-bootstrapper";

xdescribe("the Aurelia Materialize CSS CollectionLinkItemElement", () => {
    let sut;

    beforeEach(() =>
        sut = StageComponent
                .withResources("./../../../../base/dist/amd/components/collections/collectionLinkItemElement"));

    afterEach(() => sut.dispose());

    it("must add the href value on the anchor tag", done =>
        // arrange & act
        sut.inView('<m:collection-link-item href.bind="link"></m:collection-link-item>')
            .boundTo({ link: "http://www.google.com/"})
            .create(bootstrap)
        // assert
        .then(() => {
            const element = <HTMLAnchorElement> document.getElementsByClassName("collection-item")[0];
            console.log(element);
            expect(element.href).toEqual("http://www.google.com/");
        })
        .then(done));

    it("must add the class value on the anchor tag", done =>
        // arrange & act
        sut.inView('<m:collection-link-item class.bind="class"></m:collection-link-item>')
            .boundTo({ class: "someclass"})
            .create(bootstrap)
        // assert
        .then(() => {
            const element = <HTMLAnchorElement> document.getElementsByClassName("collection-item")[0];
            expect(element.classList).toContain("someclass");
        })
        .then(done));

    it("must set the slot content inside the anchor tag on the link collection item", done =>
        // arrange & act
        sut.inView('<m:collection-link-item>${name}</m:collection-link-item>')
            .boundTo({ name: "foo"})
            .create(bootstrap)
        // assert
        .then(() => {
            const element = <HTMLAnchorElement> document.getElementsByClassName("collection-item")[0];
            expect(element.innerText).toEqual("foo");
        })
        .then(done));        
});
