/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
// Utils
import Tagable from "../Tagable/Tagable";
import {withStyles} from "@material-ui/styles";


export const displayName = "MaterialDocs-H1";

const H1 = React.forwardRef(function H1(props, ref) {
    const {children, ...other} = props;
    return <Tagable variant={"h1"} {...other} ref={ref}>{children}</Tagable>
});

H1.displayName = displayName;

export default withStyles({}, {name: displayName})(H1);
