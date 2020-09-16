/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";

// Utils
import Tagable from "../Tagable/Tagable";
import {withStyles} from "@material-ui/styles";


export const displayName = "MatDocsH2";

const H2 = React.forwardRef(function H2(props, ref) {
    const {children, ...other} = props;
    return <Tagable variant={"h2"} {...other} ref={ref}>{children}</Tagable>
});

H2.displayName = displayName;

export default withStyles({}, {name: displayName})(H2);
