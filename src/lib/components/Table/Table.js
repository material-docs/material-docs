/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import {Table as MUITable} from "@material-ui/core";
import {useCommonStyles} from "../../stylesheets/commonStyles";
import clsx from "clsx";
import {styles} from "./styles";
import PropTypes from "prop-types";
import useTheme from "@material-ui/core/styles/useTheme";
import {withStyles} from "@material-ui/styles";

export const displayName = "MatDocTable";

const Table = React.forwardRef(function Table(props, ref) {
    const {
        children,
        className,
        style,
        classes,
        ...other
    } = props;
    const commonClasses = useCommonStyles();
    const [height, setHeight] = React.useState(0);
    const containerRef = React.useRef(null);
    const tableRef = React.useRef(null);

    React.useEffect(() => {
        onResize();
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, [children, tableRef.current, containerRef.current]);

    function onResize() {
        const scrollbar = containerRef.current ? containerRef.current.offsetHeight - containerRef.current.clientHeight : 0;
        if (tableRef.current) {
            setHeight(tableRef.current.clientHeight + scrollbar);
        } else {
            setHeight(0);
        }
    }

    return (
        <div
            className={clsx(classes.container, commonClasses.pageBlock, className)}
            style={{height, ...style}}
            ref={containerRef}
        >
            <MUITable
                {...other}
                className={classes.table}
                ref={element => {tableRef.current = element; if (ref) ref.current = element}}
            >
                {children}
            </MUITable>
        </div>
    );
});

Table.displayName = displayName;

Table.propTypes = {
    style: PropTypes.object,
    className: PropTypes.string,
    classes: PropTypes.object,
    children: PropTypes.node,
}

export default withStyles(styles, {name: displayName})(Table);
