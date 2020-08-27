/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import createChainableTypeChecker from "../utils/createChainableTypeChecker";

/**
 * pagesDataValidate - type validator for PagesData interface. Used in PagesDataValidator.
 * @function
 * @param {object} props
 * @param {string} propName
 * @param {string} componentName
 * @returns Error
 */
export function pagesDataValidate(prop, propName, componentName) {
    if (typeof prop.name !== "string")
        return Error(`Incorrect field 'name' type on prop ${propName} in component ${componentName}, expected "string", got "${typeof prop.name}"`);
    if (!(typeof prop.link === "string" || typeof prop.link === "object"))
        return Error(`Incorrect field 'link' type on prop ${propName} in component ${componentName}, expected "string | object", got "${typeof prop.name}"`);
}

function PagesDataValidator(props, propName, componentName) {
    const prop = props[propName];
    if (!prop) return null;
    return pagesDataValidate(prop, propName, componentName);
}

/**
 * PagesDataValidator - PropTypes validator for PagesData interface.
 */
export default createChainableTypeChecker(PagesDataValidator);