/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";

/**
 * getTextFromChildren - returns deep text from children.
 * @function
 * @param {object} children React components.
 * @param {number} depth Step into depth for analyzer.
 * @return {string}
 */
export default function getTextFromChildren(children, depth = 1) {
    if (depth < 1) return "";
    if (!children) return "";
    let text = React.Children.map(children, child => {
        if (React.isValidElement(child)) return getTextFromChildren(child.props.children, depth - 1);
        if (typeof child === "string") return child;
        return "";
    });
    text = text.join(" ").trim();
    return text || "";
}
