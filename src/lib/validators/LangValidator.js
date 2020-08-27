/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import createChainableTypeChecker from "../utils/createChainableTypeChecker";

/**
 * langValidate - type validator for Lang interface.
 * @function
 * @param {object} props
 * @param {string} propName
 * @param {string} componentName
 * @returns Error
 */
export function langValidate(prop, propName, componentName) {
    if (typeof prop.name !== "string")
        return Error(`Incorrect field 'name' type on prop ${propName} in component ${componentName}, expected "string", got "${typeof prop.name}"`);
    if (typeof prop.label !== "string")
        return Error(`Incorrect field 'label' type on prop ${propName} in component ${componentName}, expected "string", got "${typeof prop.label}"`);
    if (!prop.locale && !prop.loadLang)
        return Error(`You must specify one of this fields: locale or loadLang in prop ${propName} in component ${componentName}!`);
    if (prop.locale && typeof prop.locale !== "object")
        return Error(`Incorrect field 'label' type on prop ${propName} in component ${componentName}, expected "object", got "${typeof prop.locale}"`);
    if (prop.loadLang && typeof prop.loadLang !== "function")
        return Error(`Incorrect field 'loadLang' type on prop ${propName} in component ${componentName}, expected "function(): object", got "${typeof prop.loadLang}"`);
}

function LangValidator(props, propName, componentName) {
    const prop = props[propName];
    if (!prop) return null;
    return langValidate(prop, propName, componentName);
}

/**
 * LangValidator - PropTypes validator for Lang interface.
 */
export default createChainableTypeChecker(LangValidator);