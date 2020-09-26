/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import Lang from "../interfaces/Lang";
import PartialLang from "../interfaces/PartialLang";

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
export default function mergeLangs(general: Lang, additional: PartialLang): Lang;