/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import Paper from "@material-ui/core/Paper";
import {useStyles} from "./styles";
import clsx from "clsx";
import {useCommonStyles} from "../../stylesheets/commonStyles";
import PropTypes from "prop-types";
import useTheme from "@material-ui/core/styles/useTheme";

const Block = React.forwardRef(function Block(props, ref) {
    const theme = useTheme();
    const {
        className,
        style,
        children,
        color = "light",
        ...other
    } = {...theme.props.MDBlock, ...props}
    const commonClasses = useCommonStyles();
    const classes = {...useStyles(), ...other.classes};
    return (
        <Paper
            ref={ref}
            square
            className={clsx(
                classes.root,
                commonClasses.pageBlock,
                color === "light" && classes.colorLight,
                color === "dark" && classes.colorDark,
                className
            )}
            style={style}
            elevation={0}
        >
            {children}
        </Paper>
    );
});

Block.displayName = "Block";

Block.defaultProps = {
    color: "light",
}

Block.propTypes = {
    // BlockProps
    color: PropTypes.string,
    // Stylable
    style: PropTypes.object,
    className: PropTypes.string,
    classes: PropTypes.object,
    // Containerable
    children: PropTypes.node,
}

export default Block;