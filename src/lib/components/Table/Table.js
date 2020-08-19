/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import {Table as MUITable} from "@material-ui/core";
import {useCommonStyles} from "../../stylesheets/commonStyles";
import clsx from "clsx";

function Table({children, ...props}, ref) {
    const commonClasses = useCommonStyles();
    return (
        <MUITable {...props} className={commonClasses.pageBlock} ref={ref}>
            {children}
        </MUITable>
    );
}

export default React.forwardRef(Table);