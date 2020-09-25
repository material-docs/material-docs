/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import {styles} from "./styles";
// MaterialUI components
import {Link as MDLink} from "@material-ui/core";
// PropTypes validators
import PropTypes from "prop-types";
// Utils
import withStyles from "@material-ui/styles/withStyles";
import {useSwitchPage} from "../../hooks";


export const displayName = "MaterialDocs-Link";

const Link = React.forwardRef(function Link(props, ref) {
    const {
        children,
        page,
        href,
        ...other
    } = props;
    const {switchPage} = useSwitchPage();

    function handleClick(event) {
        switchPage(page);
    }

    return (
        <MDLink
            href={page ? null : href}
            ref={ref}
            onClick={handleClick}
            {...other}
        >
            {children}
        </MDLink>
    );
});

Link.displayName = displayName;

Link.propTypes = {
    page: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
    href: PropTypes.string,
    children: PropTypes.node,
}

export default withStyles(styles, {name: displayName})(Link);
