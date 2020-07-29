/*
 * Author: Danil Andrieiev | danssg08@gmail.com |  https://github.com/DanilAndreev
 *  Copyright (c) 2020.
 */

import React from "react";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

export function H1({children}) {
    return (
        <Typography variant={"h2"}>
            {children}
            <Divider />
        </Typography>
    );
}

export function H2({children}) {
    return (
        <Typography variant={"h3"}>
            {children}
            <Divider />
        </Typography>
    );
}

export function H3({children}) {
    return (
        <Typography variant={"h4"}>
            {children}
            <Divider />
        </Typography>
    );
}

export function H4({children}) {
    return (
        <Typography variant={"h5"}>
            {children}
        </Typography>
    );
}

export function H5({children}) {
    return (
        <Typography variant={"h6"}>
            {children}
        </Typography>
    );
}
