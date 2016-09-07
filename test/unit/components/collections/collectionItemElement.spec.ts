import { StageComponent } from "aurelia-testing";
import { config } from "./../../../../src/config";
import { bootstrap } from "aurelia-bootstrapper";

xdescribe("the Aurelia Materialize CSS CollectionItemElement", () => {
    let sut;

    beforeEach(() =>
        sut = StageComponent
                .withResources("./../../../../base/dist/amd/components/collections/collectionItemElement"));

    afterEach(() => sut.dispose());

    it("must add the class dismissable if the attribute exists on the collection item", done =>
        //arrange
        sut.inView(`<m:collection-item dismissable></m:collection-item>`)
            .manuallyHandleLifecycle()
            .create(bootstrap)
            .then(() => sut.bind())
            .then(() => sut.viewModel.element = sut.element)
        //act
        .then(() => sut.attached())
        //assert
        .then(() => expect(sut.viewModel.element.classList).toContain("dismissable"))
        .then(done));

    it("must add the class dismissable is true on the collection item", done =>
        //arrange
        sut.inView(`<m:collection-item dismissable="true"></m:collection-item>`)
            .manuallyHandleLifecycle()
            .create(bootstrap)
            .then(() => sut.bind())
            .then(() => sut.viewModel.element = sut.element)
        //act
        .then(() => sut.attached())
        //assert
        .then(() => expect(sut.viewModel.element.classList).toContain("dismissable"))
        .then(done));    

    it("must not add the class dismissable is false on the collection item", done =>
        //arrange
        sut.inView(`<m:collection-item dismissable="false"></m:collection-item>`)
            .manuallyHandleLifecycle()
            .create(bootstrap)
            .then(() => sut.bind())
            .then(() => sut.viewModel.element = sut.element)
        //act
        .then(() => sut.attached())
        //assert
        .then(() => expect(sut.viewModel.element.classList).not.toContain("dismissable"))
        .then(done));               
});
