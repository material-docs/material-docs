/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";

export default function getChildrenFromContainer(children, types, multiple = false) {
    function checkType(candidate) {
        /**
         * typeMatch - returns true is candidate component match input type
         * @param {node} candidate
         * @param {string | object} type
         * @return boolean
         */
        function typeMatch(candidate, type) {
            //TODO: finish
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

    const candidates = React.Children.map(children, candidate => candidate.type === DocsPages ? candidate : undefined);
    if (candidates.length > 1) throw new TypeError("DocsLayout: layout can contain only one pages block"); //TODO: change to quantity error
    const menu = candidates[0] && candidates[0].props.children;
    return menu || null;
}