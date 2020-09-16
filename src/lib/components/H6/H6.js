/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";

// Utils
import Tagable from "../Tagable/Tagable";
import {withStyles} from "@material-ui/styles";


export const displayName = "MatDocsH6";

const H6 = React.forwardRef(function H6(props, ref) {
    const {children, noDivider = true, noTag = true, ...other} = props;
    return <Tagable variant={"h6"} {...other} noTag={noTag} noDivider={noDivider} ref={ref}>{children}</Tagable>
});

H6.displayName = displayName;

export default withStyles({}, {name: displayName})(H6);
