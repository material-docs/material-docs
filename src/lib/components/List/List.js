/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import {styles} from "./styles";
import clsx from "clsx";
import {useCommonStyles} from "../../stylesheets/commonStyles";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/styles";

export const displayName = "MatDocList";

const List = React.forwardRef(function List(props, ref) {
    const {
        children,
        className,
        style,
        image,
        classes,
        ...other
    } = props;
    const commonClasses = useCommonStyles();

    return (
        <ul {...other} ref={ref} className={clsx(commonClasses.pageBlock, classes.root, className)} style={style}>
            {children}
        </ul>
    );
});

List.displayName = displayName;

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

export default withStyles(styles, {name: displayName})(List);
