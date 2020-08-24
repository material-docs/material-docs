/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import Paper from "@material-ui/core/Paper";
import {useStyles} from "./styles";
import clsx from "clsx";
import {useCommonStyles} from "../../stylesheets/commonStyles";

function Block({className, style, children, color = "light", ...props}, ref) {
    const commonClasses = useCommonStyles();
    const classes = {...useStyles(), ...props.classes};
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
}

export default React.forwardRef(Block);