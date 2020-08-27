/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import createChainableTypeChecker from "../utils/createChainableTypeChecker";

/**
 * demoCodeActionValidate - type validator for PagesData interface. Used in PagesDataValidator.
 * @function
 * @param {object} props
 * @param {string} propName
 * @param {string} componentName
 * @returns Error
 */
export function demoCodeActionValidate(prop, propName, componentName) {
    if (typeof prop.label !== "string")
        return Error(`Incorrect field 'label' type on prop ${propName} in component ${componentName}, expected "string", got "${typeof prop.label}"`);
    if (typeof prop.link !== "string")
        return Error(`Incorrect field 'link' type on prop ${propName} in component ${componentName}, expected "string", got "${typeof prop.link}"`);
}

function DemoCodeActionValidator(props, propName, componentName) {
    const prop = props[propName];
    if (!prop) return null;
    return demoCodeActionValidate(prop, propName, componentName);
}

/**
 * DemoCodeActionValidator - PropTypes validator for DemoCodeAction interface.
 */
export default createChainableTypeChecker(DemoCodeActionValidator);