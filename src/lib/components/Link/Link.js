/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import {Link as MDLink} from "@material-ui/core";
import PropTypes from "prop-types";
import {useChangeRoute} from "routing-manager";
import withStyles from "@material-ui/styles/withStyles";

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
        if (Array.isArray(page)) link = page.join("/");
        typeof link === "string" && changeRoute({link});
    }

    return (
        <MDLink
            href={page ? "" : href}
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

export default withStyles({}, {name: displayName})(Link);
