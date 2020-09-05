/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import createChainableTypeChecker from "../utils/createChainableTypeChecker";

/**
 * demoCodeActionValidate - type validator for DemoCodeAction interface.
 * @function
 * @param {object} props
 * @param {string} propName
 * @param {string} componentName
 * @returns Error
 */
export function demoCodeActionValidate(prop, propName, componentName) {
    if (!React.isValidElement(prop.icon))
        return Error(`Incorrect field 'icon' type on prop ${propName} in component ${componentName}, expected "node", got "${typeof prop.icon}"`);
    if (!prop.link && !prop.onClick)
        return Error(`You must specify one of these fields: link, onClick!`);
    if (prop.link && !(typeof prop.link === "string" || typeof prop.link === "object"))
        return Error(`Incorrect field 'link' type on prop ${propName} in component ${componentName}, expected "string | object", got "${typeof prop.link}"`);
    if (prop.onClick && typeof prop.onClick !== "function")
        return Error(`Incorrect field 'onClick' type on prop ${propName} in component ${componentName}, expected "function(event: any): void", got "${typeof prop.onClick}"`);
    if (typeof prop.tooltip !== "string")
        return Error(`Incorrect field 'tooltip' type on prop ${propName} in component ${componentName}, expected "string", got "${typeof prop.tooltip}"`);
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

