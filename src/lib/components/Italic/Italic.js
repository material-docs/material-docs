/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import {styles} from "./styles";
// PropTypes validators
import PropTypes from "prop-types";
// Utils
import {withStyles} from "@material-ui/styles";
import clsx from "clsx";


export const displayName = "MaterialDocs-Italic";

const Italic = React.forwardRef(function Italic(props, ref) {
    const {
        children,
        className,
        style,
        classes,
        ...other
    } = props;
    return (
        <span className={clsx(classes.root, classes.italic, className)} ref={ref} style={style} {...other}>
            {children}
        </span>
    )
});

Italic.displayName = displayName;

Italic.propTypes = {
    // Stylable
    style: PropTypes.object,
    className: PropTypes.string,
    classes: PropTypes.object,
    // Containerable
    children: PropTypes.node,
}

export default withStyles(styles, {name: displayName})(Italic);