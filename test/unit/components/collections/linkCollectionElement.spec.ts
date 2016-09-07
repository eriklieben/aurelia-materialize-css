import { StageComponent } from "aurelia-testing";
import { config } from "./../../../../src/config";
import { bootstrap } from "aurelia-bootstrapper";

describe("the Aurelia Materialize CSS LinkCollectionElement", () => {
    let sut;

    beforeEach(() =>
        sut = StageComponent
                .withResources("./../../../../base/dist/amd/components/collections/linkCollectionElement"));

    afterEach(() => sut.dispose());

    it("must add the class value on the element", done =>
        // arrange & act
        sut.inView('<m:link-collection class.bind="class"></m:link-collection>')
            .boundTo({ class: "someclass"})
            .create(bootstrap)
        // assert
        .then(() => {
            const element = document.querySelector("div[ref]");
            expect(element.classList).toContain("someclass");
        })
        .then(done));

    it("must add the class collection to the div container", done =>
        // arrange & act
        sut.inView('<m:link-collection></m:link-collection>')
            .create(bootstrap)
        // assert
        .then(() => {
            const element = document.querySelector("div[ref]");
            expect(element.classList).toContain("collection");
        })
        .then(done));

    it("must render the data items", done =>
        // arrange & act
        sut.inView('<m:link-collection data.bind="data"></m:link-collection>')
            .boundTo({ data : [ "1", "2" ] })
            .create(bootstrap)
        // assert
        .then(() => {
            const element = document.querySelector("div[ref]");
            expect(element.querySelectorAll("a[au-target-id]").length).toBe(2);
        })
        .then(done));
   
});
