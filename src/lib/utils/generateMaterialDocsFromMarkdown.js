/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import marked from "marked";

export default function generateMaterialDocsFromMarkdown(input) {
    if (!(typeof input === "string" || typeof input === "object"))
        throw new TypeError(`MaterialDocs: incorrect type of input param, expected object | string, got ${typeof input}`);
    let tokens = input;
    if (typeof input === "string") {
        tokens = marked.lexer(input);
    }
    console.log(tokens);

    return (
        null
    );
}