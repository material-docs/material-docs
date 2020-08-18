/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import {useStyles} from "./styles";
import clsx from "clsx";
import {useCommonStyles} from "../../stylesheets/commonStyles";

function List({children, className, style, ...props}, ref) {
    const classes = {...useStyles(), ...props.classes};
    const commonClasses = useCommonStyles();

    return (
        <ul {...props} ref={ref} className={clsx(commonClasses.pageBlock, classes.root, className)} style={style}>
            {children}
        </ul>
    );
}

export default React.forwardRef(List);