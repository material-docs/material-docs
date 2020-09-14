/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import {useStyles} from "./styles";
import clsx from "clsx";
import PropTypes from "prop-types";

const Bold =  React.forwardRef(function Bold(props, ref) {
    const {
        children,
        className,
        style,
        ...other
    } = {...props}
    const classes = {...useStyles(), ...other.classes};
    return (
        <span className={clsx(classes.root, classes.bold, className)} ref={ref} style={style}>
            {children}
        </span>
    )

});

Bold.displayName = "Bold";

Bold.propTypes = {
    // Stylable
    style: PropTypes.object,
    className: PropTypes.string,
    classes: PropTypes.object,
    // Containerable
    children: PropTypes.node,
}

export default Bold;