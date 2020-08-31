/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";

/**
 * getTextFromChildren - returns deep text from children.
 * @param {any} children
 * @param {number} depth
 * @return {string}
 */
export default function getTextFromChildren(children, depth = 1) {
    if (depth < 1) return "";
    const text = React.Children.map(children, child => {
        if (React.isValidElement(child)) return getTextFromChildren(child.props.children, depth - 1);
        if (typeof child === "string") return child;
        return "";
    }).join(" ").trim();
    return text || "";
}