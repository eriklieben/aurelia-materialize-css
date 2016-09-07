import { StageComponent } from "aurelia-testing";
import { config } from "./../../../../src/config";
import { bootstrap } from "aurelia-bootstrapper";

describe("the Aurelia Materialize CSS CollectionElement", () => {
    let sut;

    beforeEach(() =>
        sut = StageComponent
                .withResources("./../../../../base/dist/amd/components/collections/collectionElement"));

    afterEach(() => sut.dispose());

    it("must add the class value on the element", done =>
        // arrange & act
        sut.inView('<m:collection class.bind="class"></m:collection>')
            .boundTo({ class: "someclass"})
            .create(bootstrap)
        // assert
        .then(() => {
            const element = document.querySelector("ul[ref]");
            expect(element.classList).toContain("someclass");
        })
        .then(done));

    it("must add the class collection to the div container", done =>
        // arrange & act
        sut.inView('<m:collection></m:collection>')
            .create(bootstrap)
        // assert
        .then(() => {
            const element = document.querySelector("ul[ref]");
            expect(element.classList).toContain("collection");
        })
        .then(done));

    it("must render the data items", done =>
        // arrange & act
        sut.inView('<m:collection data.bind="data"></m:collection>')
            .boundTo({ data : [ "1", "2" ] })
            .create(bootstrap)
        // assert
        .then(() => {
            const element = document.querySelector("ul[ref]");
            expect(element.querySelectorAll("li.collection-item").length).toBe(2);
        })
        .then(done));
   
});
