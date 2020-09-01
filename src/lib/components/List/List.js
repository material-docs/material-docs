/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import {useStyles} from "./styles";
import clsx from "clsx";
import {useCommonStyles} from "../../stylesheets/commonStyles";
import PropTypes from "prop-types";

const List = React.forwardRef(function List({children, className, style, image, ...props}, ref) {
    const classes = {...useStyles(), ...props.classes};
    const commonClasses = useCommonStyles();

    return (
        <ul {...props} ref={ref} className={clsx(commonClasses.pageBlock, classes.root, className)} style={style}>
            {children}
        </ul>
    );
});

List.displayName = "List";

List.defaultProps = {
}

List.propTypes = {
    // ListProps
    image: PropTypes.string,
    styling: PropTypes.oneOf(["inside", "outside", "inherit", "revert", "unset"]),
    // Stylable
    style: PropTypes.object,
    className: PropTypes.string,
    classes: PropTypes.object,
    // Containerable
    children: PropTypes.node,
}

export default List;
