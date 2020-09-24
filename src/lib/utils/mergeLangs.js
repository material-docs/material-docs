/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import * as _ from "lodash";

export default function mergeLangs(general, additional) {
    debugger;
    if (!general) general = {}
    if (typeof general !== "object")
        throw new TypeError(`MaterialDocs: incorrect type of "general" locale, expected "Lang", got "${typeof general}"`);
    if (typeof additional !== "object")
        throw new TypeError(`MaterialDocs: incorrect type of "additional" locale, expected "Lang", got "${typeof additional}"`);
    if (general.locale && typeof general.locale !== "object")
        throw new TypeError(`MaterialDocs: incorrect type of "general" locale field "locale", expected "object", got "${typeof general.locale}"`);

    if (!additional.locale) return general;

    if (typeof additional.locale !== "object")
        throw new TypeError(`MaterialDocs: incorrect type of "additional" locale field "locale", expected "object", got "${typeof additional.locale}"`);

    const newLang = _.cloneDeep(additional);
    newLang.name = general.name;
    newLang.label = general.label;
    if (general.loadLang) newLang.loadLang = general.loadLang;

    _.merge(newLang.locale, general.locale || {});
    return newLang;
}
