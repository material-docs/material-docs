/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import clsx from "clsx";
import {styles} from "./styles";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/styles";

const CodeSpan = React.forwardRef(function CodeSpan(props, ref) {
    const {
        className,
        style,
        children,
        color = "default",
        text = "inherit",
        classes,
        ...other
    } = {...props};
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

CodeSpan.displayName = "CodeSpan";

CodeSpan.defaultProps = {
    color: "default",
    text: "inherit",
}

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

export default withStyles(styles, {name: "MatDocCodeSpan"})(CodeSpan);
