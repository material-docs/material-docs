/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import {getFieldFromLang} from "./index";

export default function replaceMarkdownParams(markdown, storage = {}, lang) {
    /**
     * replaceNextParam - replaces next found variable with value from storage.
     * @function
     * @param {{current: string}} ref Ref object with markdown based text inside.
     * @return {boolean}
     */
    function replaceNextParam(ref) {
        const start = ref.current.indexOf("&&");
        if (start < 0) return false;
        let end = start + 2;
        while (end < ref.current.length && ref.current[end].match(/^[0-9a-zA-Z]+$/)) {
            end++;
        }
        const variable = ref.current.slice(start, end);
        if (variable.length <= 2) {
            ref.current = ref.current.replace("&&", "```incorrect variable```");
            return false;
        }
        const replacer = storage[variable.slice(2)];
        ref.current = ref.current.replace(variable, replacer ? String(replacer) : "");
        return true;
    }

    function replaceNextLocale(ref) {
        if (!lang) return false;
        const start = ref.current.indexOf("&{");
        if (start < 0) return false;
        const end = ref.current.indexOf("}&", start);
        if (end < 0) return false;
        const variable = ref.current.slice(start, end + 2);
        const path = variable.slice(2, variable.length - 2);
        const locale = getFieldFromLang(lang, path);
        if (typeof locale !== "string") {
            ref.current = ref.current.replace(variable, `__incorrect locale(${path && "```" + path + "```"})__`);
            return true;
        }
        ref.current = ref.current.replace(variable, locale);
        return true;
    }

    if (lang && typeof lang !== "object")
        throw new TypeError(`MaterialDocs: invalid param "lang", expected "Lang" got "${typeof lang}"`)
    if (lang && typeof lang.locale !== "object")
        throw new TypeError(`MaterialDocs: invalid param "lang.locale", expected "object" got "${typeof lang.object}"`)
    if (typeof markdown !== "string")
        throw new TypeError(`MaterialDocs: invalid param "markdown", expected "string" got "${typeof markdown}"`);
    if (typeof storage !== "object")
        throw new TypeError(`MaterialDocs: invalid param "storage", expected "object" got "${typeof storage}"`);

    const ref = React.createRef();
    ref.current = markdown;

    while (replaceNextParam(ref) || replaceNextLocale(ref)) {}
    return ref.current;
}
