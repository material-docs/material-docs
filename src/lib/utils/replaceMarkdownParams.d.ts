/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import {Lang} from "../interfaces";

/**
 * replaceMarkdownParams - function, designed to replace variables with "&&varialbe" signature with values from storage.
 * Markdown variable has structure "&&keyInStorage"
 * @function
 * @param {string} markdown Markdown based text to parse.
 * @param {object} storage Storage object to get variables values.
 * @param {Lang} Lang for locale replacer.
 * @throws TypeError
 * @return {string}
 * @example
 * const storage = {name: "Danil Andreev"};
 * const text = "My name is __&&name__, I am glad to see _you_";
 * const replaced = replaceMarkdownParams(text, storage);
 */
export default function replaceMarkdownParams(markdown: string, storage: object, lang?: Lang): string;