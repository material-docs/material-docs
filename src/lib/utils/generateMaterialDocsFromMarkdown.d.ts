/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

/**
 * generateMaterialDocsFromMarkdown - function, designed to generate Material Docs based layout from markdown text.
 * @function
 * @param {string} input Markdown based text. Will be parsed and interpreted.
 * @param {object} storage Object with additional information. Will be used in components with additional setup.
 * @param {string | number} key Component key
 * @return object
 * @throws TypeError
 */
export default function generateMaterialDocsFromMarkdown(input: string, storage: object, key: string | number): object;