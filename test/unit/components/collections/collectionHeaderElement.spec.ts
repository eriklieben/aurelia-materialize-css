import { StageComponent } from "aurelia-testing";
import { config } from "./../../../../src/config";
import { bootstrap } from "aurelia-bootstrapper";

xdescribe("the Aurelia Materialize CSS CollectionHeaderElement", () => {
    let sut;

    beforeEach(() =>
        sut = StageComponent
                .withResources("./../../../../base/dist/amd/components/collections/collectionHeaderElement")
                .inView(`<ul><m:collection-header></m:collection-header></ul>`));

    afterEach(() => sut.dispose());

    it("must add the class 'with-header' to the parent element on attached if non existing", done =>
        //arrange
        sut.manuallyHandleLifecycle()
            .create(bootstrap)
            .then(() => sut.bind())
            .then(() => sut.viewModel.element = sut.element.firstChild)
        //act
        .then(() => sut.attached())
        //assert
        .then(() => expect(sut.viewModel.element.parentElement.classList).toContain("with-header"))
        .then(done));

      // TODO: can this test fail? will some browsers allows same class multiple times?
      it("must not add the class 'with-header' to the parent element on attached if existing", done =>
        //arrange
        sut.inView(`<ul class="with-header"><m:collection-header></m:collection-header></ul>`)
            .manuallyHandleLifecycle()
            .create(bootstrap)
            .then(() => sut.bind())
            .then(() => sut.viewModel.element = sut.element.firstChild)
        //act
        .then(() => sut.attached())
        //assert
        .then(() => expect(sut.viewModel.element.parentElement.classList[0]).toEqual('with-header'))
        .then(() => expect(sut.viewModel.element.parentElement.classList.length).toEqual(1))
        .then(done));

});
