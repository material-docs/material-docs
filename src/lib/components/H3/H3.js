/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
// Utils
import Tagable from "../Tagable/Tagable";
import {withStyles} from "@material-ui/styles";


export const displayName = "MatDocsH3";

const H3 = React.forwardRef(function H3(props, ref) {
    const {children, ...other} = props;
    return <Tagable variant={"h3"} {...other} ref={ref}>{children}</Tagable>
});

H3.displayName = displayName;

export default withStyles({}, {name: displayName})(H3);
