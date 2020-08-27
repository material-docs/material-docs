/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import {Table as MUITable} from "@material-ui/core";
import {useCommonStyles} from "../../stylesheets/commonStyles";
import clsx from "clsx";
import {useStyles} from "./styles";
import PropTypes from "prop-types";

const Table = React.forwardRef(function Table({children, className, style, ...props}, ref) {
    const commonClasses = useCommonStyles();
    const classes = {...useStyles(), ...props.classes};
    return (
        <div className={clsx(classes.container, className)} style={style}>
            <MUITable {...props} className={commonClasses.pageBlock} ref={ref}>
                {children}
            </MUITable>
        </div>
    );
});

Table.propTypes = {
    style: PropTypes.object,
    className: PropTypes.string,
    classes: PropTypes.object,
    children: PropTypes.node,
}

export default Table;
