/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import {styles} from "./styles";
import clsx from "clsx";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/styles";
import getChildrenFromContainer from "../../utils/getChildrenFromContainer";
import {displayName as ListItemContainedDisplayName} from "../ListItemContained";

export const displayName = "MatDocListItem";

const ListItem = React.forwardRef(function ListItem(props, ref) {
    const {
        children,
        type = "circle",
        dense = false,
        style,
        className,
        classes,
        ...other
    } = props;

    const containedItems = getChildrenFromContainer(children, ListItemContainedDisplayName);
    const content = React.Children.map(children, child => child.type && child.type.displayName === ListItemContainedDisplayName ? null : child);

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
            {...other}
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

ListItem.displayName = displayName;

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

export default withStyles(styles, {name: displayName})(ListItem);