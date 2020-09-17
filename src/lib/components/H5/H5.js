/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
// Utils
import Tagable from "../Tagable/Tagable";
import {withStyles} from "@material-ui/styles";


export const displayName = "MatDocsH5";

const H5 = React.forwardRef(function H5(props, ref) {
    const {children, noDivider = true, noTag = true, ...other} = props;
    return <Tagable variant={"h5"} {...other} noTag={noTag} noDivider={noDivider} ref={ref}>{children}</Tagable>
});

H5.displayName = displayName;

export default withStyles({}, {name: displayName})(H5);
