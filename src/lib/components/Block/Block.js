/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import {styles} from "./styles";
// MaterialUI components
import Paper from "@material-ui/core/Paper";
// PropTypes validators
import PropTypes from "prop-types";
// Utils
import clsx from "clsx";
import {useCommonStyles} from "../../stylesheets/commonStyles";
import {withStyles} from "@material-ui/core/styles";


export const displayName = "MaterialDocs-Block";

const Block = React.forwardRef(function Block(props, ref) {
    const {
        className,
        style,
        children,
        color = "light",
        classes,
        ...other
    } = props;
    const commonClasses = useCommonStyles();

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

Block.displayName = displayName;

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

export default withStyles(styles, {name: displayName})(Block);
