/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";

/**
 * generateHeaderIcon - function ,designed to generate material-ui IconButtons for Toolbar in DocsLayout.
 * @function
 * @param {function} changeRoute
 * @param {string} key
 * @param {any} icon
 * @param {function} onClick
 * @param {string | object} link
 * @param {string} tooltip
 * @param {string} className
 * @return {JSX.Element}
 */
export default function generateHeaderIcon(changeRoute, key, icon, onClick, link, tooltip, className) {
    if (!React.isValidElement(icon))
        throw new TypeError(`MaterialDocs: Incorrect type of icon, expected "node", got "${typeof icon}"!`);
    if (className && typeof className !== "string")
        throw new TypeError(`MaterialDocs: Incorrect type of className, expected "string", got "${typeof className}"!`);
    if (typeof changeRoute !== "function")
        throw new TypeError(`MaterialDocs: Incorrect type of changeRoute, expected "function", got "${typeof changeRoute}"!`);
    if (typeof key !== "string")
        throw new TypeError(`MaterialDocs: Incorrect type of key, expected "string", got "${typeof key}"!`);

    const styledIcon = React.cloneElement(icon, {className})

    function handleClick() {
        if (typeof onClick === "function") {
            onClick();
        } else {
            switch (typeof link) {
                case "string":
                    window.location.href = link;
                    break;
                case "object":
                    changeRoute(link);
                    break;
                default:
                    console.error(`MaterialDocs: Incorrect type of link, expected "string | object", got "${typeof link}"!`);
            }
        }
    }

    if (typeof tooltip === "string")
        return (
            <Tooltip title={tooltip} key={`header-action-item-${link}-${key}`}>
                <IconButton onClick={handleClick}>
                    {styledIcon}
                </IconButton>
            </Tooltip>
        );

    return (
        <IconButton onClick={handleClick} key={`header-action-item-${link}-${key}`}>
            {styledIcon}
        </IconButton>
    );
}