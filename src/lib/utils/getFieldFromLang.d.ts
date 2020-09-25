/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import PartialLang from "../interfaces/PartialLang";

/**
 * getFieldFromLang - function designed to get data from Lang.locale;
 * @function
 * @param {Lang} lang Lang object to get data from.
 * @param {string} path String path to field in the lang. For example: "hello/darkness/my/old"
 * @throws TypeError
 * @example
 * const lang = {
 *     name: "en-us",
 *     label: "English",
 *     locale: {
 *         hello: {
 *             darkness: "Hello darkness!"
 *         }
 *     }
 * }
 *
 * const darkness = getFieldFromLang(lang, "hello/darkness");
 */
export default function getFieldFromLang(lang: PartialLang, path: string): undefined | any;