/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import getFieldFromLang from "./getFieldFromLang";

describe("Utils -> getFieldFromLang", () => {
    test("Check basic work", () => {
        const lang = {
            name: "en-us",
            label: "English",
            locale: {
                hello: {
                    darkness: "Hello darkness ny old friend!"
                }
            }
        }
        const expected = lang.locale.hello.darkness;
        expect(getFieldFromLang(lang, "hello/darkness")).toBe(expected);
    });

    test("Make function to throw TypeError when lang is not defined", () => {
        expect(() => getFieldFromLang(null, "hello/darkness")).toThrow(TypeError);
    });

    test("Make function to throw TypeError when lang.locale is not defined", () => {
        const lang = {
            name: "en-us",
            label: "English",
        }
        expect(() => getFieldFromLang(lang, "hello/darkness")).toThrow(TypeError);
    });

    test("Try to access missing field", () => {
        const lang = {
            name: "en-us",
            label: "English",
            locale: {
                hello: {
                    darkness: "Hello darkness ny old friend!"
                }
            }
        }
        const expected = lang.locale.hello.darkness;
        expect(getFieldFromLang(lang, "hello/boy/man/kek")).toBe(undefined);
    });
});