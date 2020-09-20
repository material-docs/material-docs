/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";

export default function getContainerByType(children, types, invert, multiple = false) {
    /**
     * checkType - function, designed to check if candidate match type in types.
     * @function
     * @param {object} candidate
     * @return {boolean}
     */
    function checkType(candidate) {
        /**
         * typeMatch - returns true is candidate component match input type.
         * @function
         * @param {object} candidate
         * @param {string} type
         * @return boolean
         */
        function typeMatch(candidate, type) {
            if (typeof type !== "string")
                console.error(`MaterialDocs: getChildrenFromContainer: incorrect type of variable 'type', expected "string | object", got ${typeof type}!`);
            if (!invert && candidate.type && candidate.type.displayName === type) return true;
            if (invert && candidate.type && candidate.type.displayName !== type) return true;
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