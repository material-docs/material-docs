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
    const [height, setHeight] = React.useState(0);
    const containerRef = React.useRef(null);
    const tableRef = React.useRef(null);

    React.useEffect(() => {
        onResize();
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, [children]);

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
                {...props}
                className={classes.table}
                ref={element => {tableRef.current = element; if (ref) ref.current = element}}
            >
                {children}
            </MUITable>
        </div>
    );
});

Table.displayName = "Table";

Table.defaultProps = {
}

Table.propTypes = {
    style: PropTypes.object,
    className: PropTypes.string,
    classes: PropTypes.object,
    children: PropTypes.node,
}

export default Table;
