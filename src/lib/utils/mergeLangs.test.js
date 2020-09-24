/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import mergeLangs from "./mergeLangs";

describe("Utils -> mergeLangs", () => {
    test("Testing locales merging", () => {
        const defaultLocale = {
            name: "en-us",
            label: "English",
            locale: {
                words: {
                    hello: "hello",
                    darkness: "darkness",
                }
            }
        };
        const translationLocale = {
            name: "ru-ru",
            label: "Русский",
            locale: {
                words: {
                    darkness: "тьма",
                    my: "моя"
                }
            }
        };
        const expectedLocale = {
            name: "ru-ru",
            label: "Русский",
            locale: {
                words: {
                    hello: "hello",
                    darkness: "тьма",
                    my: "моя"
                }
            }
        }
        expect(mergeLangs(translationLocale, defaultLocale)).toEqual(expectedLocale);
    });
});
