/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";

/**
 * getContainerByType - function designed to get containers from components list by types.
 * @function
 * @param {JSX.Element} children
 * @param {string | string[]} types
 * @param {boolean} multiple
 * @return {JSX.Element | JSX.Element[] | null}
 */
export default function getContainerByType(children, types, multiple = false) {
    /**
     * checkType - function, designed to check if candidate match type in types.
     * @function
     * @param {JSX.Element} candidate
     * @return {boolean}
     */
    function checkType(candidate) {
        /**
         * typeMatch - returns true is candidate component match input type.
         * @function
         * @param {JSX.Element} candidate
         * @param {string} type
         * @return boolean
         */
        function typeMatch(candidate, type) {
            if (typeof type !== "string")
                console.error(`MaterialDocs: getChildrenFromContainer: incorrect type of variable 'type', expected "string | object", got ${typeof type}!`);
            // if (candidate.type && candidate.type.name === type) return true;
            // if (candidate.type && candidate.type.render && candidate.type.render.name === type) return true;
            if (candidate.type && candidate.type.displayName === type) return true;
//            if (candidate.type === type) return true;
            return false;
        }
        if (Array.isArray(types)) {
            for (const type of types) {
                if (typeMatch(candidate, type)) return true;
            }
        } else if (typeof types === "string" || typeof types === "object") {
            return typeMatch(candidate, types);
        }
        return false;
    }

    const candidates = React.Children.map(children, candidate => React.isValidElement(candidate) && checkType(candidate) ? candidate : undefined);
    if (!multiple && candidates.length > 1) console.error(`DocsLayout: Component can contain only one child with type ${types}`);
    let result = null;
    if ((candidates.length === 1) || (candidates.length > 1 && !multiple)) {
        result = candidates[0];
    } else if (candidates.length > 1) {
        result = candidates;
    }
    return result;
}