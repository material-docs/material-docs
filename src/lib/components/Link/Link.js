/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import {Link as MDLink} from "@material-ui/core";
import PropTypes from "prop-types";
import {useChangeRoute} from "routing-manager";

export const displayName = "MatDocLink";

const Link = React.forwardRef(function Link(props, ref) {
    const {
        children,
        page,
        href,
    } = props;
    const {changeRoute} = useChangeRoute();


    return (
        <MDLink
            href={page ? "" : href}
            ref={ref}
            onClick={event => typeof page === "string" && changeRoute({page})}
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

export default withStyles({}, displayName)(Link);