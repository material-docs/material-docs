/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

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
        return Error(`MaterialDocs: incorrect field 'name' type on prop ${propName} in component ${componentName}, expected "string", got "${typeof prop.name}"`);
    if (!(typeof prop.link === "string" || typeof prop.link === "object"))
        return Error(`MaterialDocs: incorrect field 'link' type on prop ${propName} in component ${componentName}, expected "string | object", got "${typeof prop.name}"`);
}

/**
 * PagesDataValidator - PropTypes validator for PagesData interface.
 * @function
 * @param {object} props
 * @param {string} propName
 * @param {string} componentName
 * @returns Error
 */
export default function PagesDataValidator(props, propName, componentName) {
    const prop = props[propName];
    if (prop) return pagesDataValidate(prop, propName, componentName);
}
