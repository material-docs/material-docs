/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import * as _ from "lodash";

/**
 * mergeLangs - merges Langs. First param has higher priority than second. Used in Material Docs extensions.
 * @function
 * @param {Lang} general Parent locale, have higher priority than
 * @param {Lang} additional
 * @return {Lang}
 * @example
 * const parentLang = {
 *     name: "en-us"
 *     label: "English"
 *     locale: {
 *         words: {
 *             hello: "Hello",
 *             darkness: "Darkness"
 *         }
 *     }
 * };
 *
 * const localLang = {
 *     name: "en-us"
 *     label: "English"
 *     locale: {
 *         words: {
 *             hello: "Hi",
 *             my: "My"
 *         }
 *     }
 * };
 *
 * const resultLang = mergeLocales(parentLang, localLang);
 * // Result lang
 * // {
 * //     name: "en-us"
 * //     label: "English"
 * //     locale: {
 * //         words: {
 * //             hello: "Hello",
 * //             darkness: "Darkness"
 * //             my: "My"
 * //         }
 * //     }
 * // }
 */
export default function mergeLangs(general, additional) {
    if (typeof general !== "object")
        throw new TypeError(`MaterialDocs: incorrect type of "general" locale, expected "Lang", got "${typeof general}"`);
    if (typeof additional !== "object")
        throw new TypeError(`MaterialDocs: incorrect type of "additional" locale, expected "Lang", got "${typeof additional}"`);
    if (typeof general.locale !== "object")
        throw new TypeError(`MaterialDocs: incorrect type of "general" locale field "locale", expected "object", got "${typeof general.locale}"`);

    if (!additional.locale) return general;

    if (typeof additional.locale !== "object")
        throw new TypeError(`MaterialDocs: incorrect type of "additional" locale field "locale", expected "object", got "${typeof additional.locale}"`);

    const newLang = _.cloneDeep(additional);
    newLang.name = general.name;
    newLang.label = general.label;
    if (general.loadLang) newLang.loadLang = general.loadLang;

    _.merge(newLang.locale, general.locale);
    return newLang;
}
