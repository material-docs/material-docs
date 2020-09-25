/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
// Components
import H1 from "./../H1";
import H2 from "./../H2";
import H3 from "./../H3";
import H4 from "./../H4";
import H5 from "./../H5";
import H6 from "./../H6";
// Utils
import {withStyles} from "@material-ui/styles";

export const displayName = "MaterialDocs-Header";

const Header = React.forwardRef(function Header(props, ref) {
    const {children, heading = 1, ...other} = props;
    switch (heading) {
        case 1:
            return <H1 {...other} ref={ref}>{children}</H1>;
        case 2:
            return <H2 {...other} ref={ref}>{children}</H2>;
        case 3:
            return <H3 {...other} ref={ref}>{children}</H3>;
        case 4:
            return <H4 {...other} ref={ref}>{children}</H4>;
        case 5:
            return <H5 {...other} ref={ref}>{children}</H5>;
        default:
            return <H6 {...other} ref={ref}>{children}</H6>;
    }
});

Header.displayName = displayName;

export default withStyles({}, {name: displayName})(Header);
