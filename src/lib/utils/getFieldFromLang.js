/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

export default function(lang, path) {
    if (typeof lang !== "object")
        throw new TypeError(`MaterialDocs: incorrect type of "lang", expected "Lang", got "${typeof lang}"`);
    if (typeof lang.locale !== "object")
        throw new TypeError(`MaterialDocs: incorrect type of "lang.locale", expected "object", got "${typeof lang.locale}"`);
    if (typeof path !== "string")
        throw new TypeError(`MaterialDocs: incorrect type of "path", expected "string", got "${typeof path}"`);
    const pathSteps = path.split("/");
    let locale = lang.locale;
    for (const key of pathSteps) {
        try {
            locale = locale[key];
        } catch (error) {
            return undefined;
        }
    }
    return locale;
}