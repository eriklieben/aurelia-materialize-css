import {config} from "./../../src/config";

describe("the Aurelia Materialize CSS config", () => {

    it("must have a property prefix with the default value 'm:'", () => {
        expect(config.prefix).toBe("m:");
    });

    it("must have a property collapsible with the default value 'm:collapsible'", () => {
        expect(config.collapsible).toBe("m:collapsible");
    });

    it("must have a property collapsibleBody with the default value 'm:collapsible-body'", () => {
        expect(config.collapsibleBody).toBe("m:collapsible-body");
    });

    it("must have a property collapsibleHeader with the default value 'm:collapsible-header'", () => {
        expect(config.collapsibleHeader).toBe("m:collapsible-header");
    });

    it("must have a property collapsibleItem with the default value 'm:collapsible-item'", () => {
        expect(config.collapsibleItem).toBe("m:collapsible-item");
    });
});
