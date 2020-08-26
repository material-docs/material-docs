/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import {Table as MUITable} from "@material-ui/core";
import {useCommonStyles} from "../../stylesheets/commonStyles";
import clsx from "clsx";
import {useStyles} from "./styles";

function Table({children, className, style, ...props}, ref) {
    const commonClasses = useCommonStyles();
    const classes = {...useStyles(), ...props.classes};
    return (
        <div className={clsx(classes.container, className)} style={style}>
            <MUITable {...props} className={commonClasses.pageBlock} ref={ref}>
                {children}
            </MUITable>
        </div>
    );
}

export default React.forwardRef(Table);