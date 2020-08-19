/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import clsx from "clsx";
import {useStyles} from "./styles";

function CodeSpan({className, style, children, ...props}, ref) {
    const classes = {...useStyles(), ...props.classes};
    return (
        <span ref={ref} className={clsx(classes.root, classes.font, className)} style={style}>
            {children}
        </span>
    );
}

export default React.forwardRef(CodeSpan);