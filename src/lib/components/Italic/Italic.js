/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import {useStyles} from "./styles";
import clsx from "clsx";
import PropTypes from "prop-types";
import useTheme from "@material-ui/core/styles/useTheme";

const Italic = React.forwardRef(function Italic(props, ref) {
    const theme = useTheme();
    const {
        children,
        className,
        style,
        ...other
    } = {...theme.props.MDItalic, ...props};
    const classes = {...useStyles(), ...other.classes};
    return (
        <span className={clsx(classes.root, classes.italic, className)} ref={ref} style={style} {...other}>
            {children}
        </span>
    )
});

Italic.displayName = "Italic";

Italic.defaultProps = {
}

Italic.propTypes = {
    // Stylable
    style: PropTypes.object,
    className: PropTypes.string,
    classes: PropTypes.object,
    // Containerable
    children: PropTypes.node,
}

export default Italic;