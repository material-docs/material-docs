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
import {useChangeRoute} from "routing-manager";
import withStyles from "@material-ui/styles/withStyles";
import createRouteFromName from "../../utils/createRouteFromName";


export const displayName = "MatDocLink";

const Link = React.forwardRef(function Link(props, ref) {
    const {
        children,
        page,
        href,
        ...other
    } = props;
    const {changeRoute} = useChangeRoute();

    function handleClick(event) {
        let link = page;
        if (Array.isArray(page)) link = page.map(item => typeof item === "string" && createRouteFromName(item)).join("/");
        typeof link === "string" && changeRoute({page: link});
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
    page: PropTypes.string,
    href: PropTypes.string,
    children: PropTypes.node,
}

export default withStyles(styles, {name: displayName})(Link);
