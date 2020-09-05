/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import createChainableTypeChecker from "../utils/createChainableTypeChecker";

/**
 * appBarActionValidate - type validator for AppBarAction interface. Used in PagesDataValidator.
 * @function
 * @param {object} props
 * @param {string} propName
 * @param {string} componentName
 * @returns Error
 */
export function appBarActionValidate(prop, propName, componentName) {
    if (typeof prop.label !== "string")
        return Error(`Incorrect field 'label' type on prop ${propName} in component ${componentName}, expected "string", got "${typeof prop.label}"`);
    if (typeof prop.link !== "string")
        return Error(`Incorrect field 'link' type on prop ${propName} in component ${componentName}, expected "string", got "${typeof prop.link}"`);
}

function AppBarActionValidator(props, propName, componentName) {
    const prop = props[propName];
    if (!prop) return null;
    return appBarActionValidate(prop, propName, componentName);
}

/**
 * AppBarActionValidator - PropTypes validator for AppBarAction interface.
 */
export default createChainableTypeChecker(AppBarActionValidator);