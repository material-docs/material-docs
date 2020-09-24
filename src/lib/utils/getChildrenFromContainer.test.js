/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import getChildrenFromContainer from "./getChildrenFromContainer";

describe("Utils -> getChildrenFromContainer", () => {
    test("Test with null children", () => {
        expect(() => getChildrenFromContainer(null, "Type")).not.toThrow(Error);
        expect(getChildrenFromContainer(null, "Type")).toBe(null);
    });
    test("Test with empty array [] children", () => {
        expect(() => getChildrenFromContainer([], "Type")).not.toThrow(Error);
        expect(getChildrenFromContainer([], "Type")).toBe(null);
    });
});
