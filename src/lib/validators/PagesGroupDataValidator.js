/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import {pagesDataValidate} from "./PagesDataValidator";
import createChainableTypeChecker from "../utils/createChainableTypeChecker";

/**
 * pagesGroupDataValidate - PropTypes validator for PagesGroupData interface.
 * @function
 * @param {object} props
 * @param {string} propName
 * @param {string} componentName
 * @returns Error
 */
export function pagesGroupDataValidate(prop, propName, componentName) {
    if (typeof prop.name !== "string")
        return new Error(`Incorrect field 'name' type on prop ${propName} in component ${componentName}, expected "string", got "${typeof prop.name} ${JSON.stringify(prop)}"`);
    if (!Array.isArray(prop.pages))
        return new Error(`Incorrect field 'pages' type on prop ${propName} in component ${componentName}, expected "PageData[]", got "${typeof prop.pages}"`)
    for (const item of prop.pages) {
        const validatePages = pagesDataValidate(item, propName, componentName);
        if (validatePages) return validatePages;
    }
    if (!Array.isArray(prop.groups))
        return new Error(`Incorrect field 'groups' type on prop ${propName} in component ${componentName}, expected "PagesGroupData[]", got "${typeof prop.groups}"`)
    for (const item of prop.groups) {
        const validateGroups = pagesGroupDataValidate(item, propName, componentName);
        if (validateGroups) return validateGroups;
    }
}

function PagesGroupDataValidator(props, propName, componentName) {
    const prop = props[propName];
    if (!prop) return null;
    return pagesGroupDataValidate(prop, propName, componentName);
}

/**
 * PagesGroupDataValidator - PropTypes validator for PagesGroupData interface.
 */
export default createChainableTypeChecker(PagesGroupDataValidator);