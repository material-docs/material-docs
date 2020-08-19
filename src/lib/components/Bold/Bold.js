/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import {useStyles} from "./styles";
import clsx from "clsx";

function Bold({children, className, style, ...props}, ref) {
    const classes = {...useStyles(), ...props.classes};
    return (
        <span className={clsx(classes.root, classes.bold, className)} ref={ref} style={style}>
            {children}
        </span>
    )

}

export default React.forwardRef(Bold)