/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import createChainableTypeChecker from "../utils/createChainableTypeChecker";

/**
 * searchDataItemValidate - PropTypes validator for SearchDataItem interface.
 * @function
 * @param {object} props
 * @param {string} propName
 * @param {string} componentName
 * @returns Error
 */
export function searchDataItemValidate(prop, propName, componentName) {
    if (!(typeof prop.redirect === "string" || typeof prop.redirect === "object" || typeof prop.redirect === "function"))
        return Error(`Incorrect field 'redirect' type on prop ${propName} in component ${componentName}, expected "string | (() => void) | object", got "${typeof prop.redirect}"`);
    if (typeof prop.label !== "string")
        return Error(`Incorrect field 'label' type on prop ${propName} in component ${componentName}, expected "string", got "${typeof prop.label}"`);
    if (typeof prop.description !== "string")
        return Error(`Incorrect field 'description' type on prop ${propName} in component ${componentName}, expected "string", got "${typeof prop.description}"`);
    if (!Array.isArray(prop.tags))
        return Error(`Incorrect field 'tags' type on prop ${propName} in component ${componentName}, expected "string[]", got "${typeof prop.tags}"`);
    for (const item of prop.tags) {
        if (typeof item !== "string")
            return Error(`Incorrect field 'tags' type on prop ${propName} in component ${componentName}, expected "string[]", got "${typeof item}[]"`);
    }
}

function SearchDataItemValidator(props, propName, componentName) {
    const prop = props[propName];
    if (!prop) return null;
    return searchDataItemValidate(prop, propName, componentName);
}

/**
 * SearchDataItemValidator - PropTypes validator for SearchDataItem interface.
 */
export default createChainableTypeChecker(SearchDataItemValidator);