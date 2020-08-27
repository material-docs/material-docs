/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import ListItemContained from "../ListItemContained";
import {useStyles} from "./styles";
import clsx from "clsx";
import PropTypes from "prop-types";

const ListItem = React.forwardRef(function ListItem({children, type = "circle", dense = false, style, className, ...props}, ref) {
    const classes = {...useStyles(), ...props.classes};
    const containers = React.Children.map(children, child => child.type === ListItemContained ? child : null);
    if (containers.length > 1) console.error("MaterialDocs: List item can contain only one ListItemContained element");

    const containedItems = containers[0] && containers[0].props && containers[0].props.children;
    const content = React.Children.map(children, child => child.type === ListItemContained ? null : child);

    let listTypeClass = classes.typeCircle;
    switch (type) {
        case "square":
            listTypeClass = classes.typeSquare;
            break;
        case "upper-roman":
            listTypeClass = classes.typeRoman;
            break;
        case "lower-alpha":
            listTypeClass = classes.typeAlpha;
            break;
        case "none":
            listTypeClass = classes.typeNone;
            break;
    }

    return (
        <li
            className={clsx(classes.root, dense && classes.dense, listTypeClass, className)}
            {...props}
            ref={ref}
            style={style}
        >
            <div>
                <div>
                    {content}
                </div>
                {containedItems &&
                <ul className={classes.list}>
                    {containedItems}
                </ul>
                }
            </div>
        </li>
    );
});

ListItem.propTypes = {
    // ListItemProps
    type: PropTypes.oneOf(["circle", "square", "upper-roman", "lower-alpha", "none"]),
    dense: PropTypes.bool,
    // Stylable
    style: PropTypes.object,
    className: PropTypes.string,
    classes: PropTypes.object,
    // Containerable
    children: PropTypes.node,

}

export default ListItem;