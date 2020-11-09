/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import replaceMarkdownParams from "./replaceMarkdownParams";

describe("Utils -> replaceMarkdownParams", () => {
    test("Replace single variable", () => {
        const source = "Hello darkness my &&text friend";
        const expected = "Hello darkness my old friend";
        expect(replaceMarkdownParams(source, {text: "old"})).toEqual(expected);
    });
    test("Replace variable inside codespan", () => {
        const source = "Hello darkness my ```&&text``` friend";
        const expected = "Hello darkness my ```old``` friend";
        expect(replaceMarkdownParams(source, {text: "old"})).toEqual(expected);
    });
    test("Replace multiple variables", () => {
        const source = "Hello __&&text1__ my ```&&text2``` friend";
        const expected = "Hello __darkness__ my ```old``` friend";
        expect(replaceMarkdownParams(source, {text1: "darkness", text2: "old"})).toEqual(expected);
    });
    test("Replace nested variables", () => {
        const source = "Hello darkness &&text friend";
        const expected = "Hello darkness my old friend";
        expect(replaceMarkdownParams(source, {text: "my &&nested", nested: "old"})).toEqual(expected);
    });
    test("Replace nested variables and locale", () => {
        const lang = {
            name: "en-us",
            label: "english",
            locale: {
                text1: "locale text1",
                nested: {
                    text2: "locale text2",
                }
            }
        }
        const source = "Hello &{text1}& darkness &&text friend &{nested/text2}&";
        const expected = "Hello locale text1 darkness my old friend locale text2";
        expect(replaceMarkdownParams(source, {text: "my &&nested", nested: "old"}, lang)).toEqual(expected);
    });
    test("Test variable with no storage value.", () => {
        const source = "Hello darkness &&text friend";
        const expected = "Hello darkness &&text friend";
        expect(replaceMarkdownParams(source, {})).toEqual(expected);
    });
    test("Test screened locale.", () => {
        const source = "Hello darkness \&\{text\}\& friend";
        const expected = "Hello darkness &{text}& friend";
        expect(replaceMarkdownParams(source, {})).toEqual(expected);
    });
});