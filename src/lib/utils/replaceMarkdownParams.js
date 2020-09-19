/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";

/**
 * replaceMarkdownParams - function, designed to replace variables with "&&varialbe" signature with values from storage.
 * Markdown variable has structure "&&keyInStorage"
 * @function
 * @param {string} markdown Markdown based text to parse.
 * @param {object} storage Storage object to get variables values.
 * @return {string}
 * @example
 * const storage = {name: "Danil Andreev"};
 * const text = "My name is __&&name__, I am glad to see _you_";
 * const replaced = replaceMarkdownParams(text, storage);
 */
export default function replaceMarkdownParams(markdown, storage = {}) {
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
        if (variable.length <= 2) return false;
        const replacer = storage[variable.slice(2)];
        ref.current = ref.current.replace(variable, replacer ? String(replacer) : "");
        return true;
    }

    if (typeof markdown !== "string")
        throw new TypeError(`MaterialDocs: invalid param "markdown", expected "string", got "${typeof markdown}"`);
    if (typeof storage !== "object")
        throw new TypeError(`MaterialDocs: invalid param "storage", expected "object", got "${typeof storage}"`);

    const ref = React.createRef();
    ref.current = markdown;

    while (replaceNextParam(ref)) {}
    return ref.current;
}
