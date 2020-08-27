/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import clsx from "clsx";
import {useStyles} from "./styles";
import PropTypes from "prop-types";

const CodeSpan = React.forwardRef(function CodeSpan({className, style, children, color = "default", text = "inherit", ...props}, ref) {
    const classes = {...useStyles(), ...props.classes};
    return (
        <span
            ref={ref}
            className={clsx(
                classes.root,
                classes.font,
                color === "default" && classes.colorDefault,
                color === "primary" && classes.colorPrimary,
                color === "secondary" && classes.colorSecondary,
                color === "grey" && classes.colorGrey,
                text === "inherit" && classes.textInherit,
                text === "black" && classes.textBlack,
                text === "white" && classes.textWhite,
                className
            )}
            style={style}
        >
            {children}
        </span>
    );
});

CodeSpan.propTypes = {
    // CodeSpanProps
    color: PropTypes.oneOf(["default", "primary", "secondary", "grey"]),
    text: PropTypes.oneOf(["white", "black", "inherit"]),
    // Stylable
    style: PropTypes.object,
    className: PropTypes.string,
    classes: PropTypes.object,
    // Containerable
    children: PropTypes.node,
}

export default CodeSpan;