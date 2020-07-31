/*
 * Author: Danil Andrieiev | danssg08@gmail.com |  https://github.com/DanilAndreev
 *  Copyright (c) 2020.
 */

import React from "react";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import createRouteFromName from "../../utils/createRouteFromName";

export function Tagable({children, systemOnTag, noTag=false, variant}) {
    const id = typeof children === "string" && createRouteFromName(children);

    React.useEffect(() => {
        !noTag && typeof systemOnTag === "function" &&  systemOnTag(prev => ({...prev, [id]: String(children)}));
        return () => !noTag && typeof systemOnTag === "function" && systemOnTag(prev => ({...prev, [id]: undefined}));
    }, [children]);

    return (
        <Typography variant={variant} id={!noTag && id}>
            {children}
            <Divider />
        </Typography>
    );
}

export function H1({children, systemOnTag, noTag=false}) {
    return <Tagable systemOnTag={systemOnTag} variant={"h2"} noTag={noTag}>{children}</Tagable>
}

export function H2({children, systemOnTag, noTag=false}) {
    return <Tagable systemOnTag={systemOnTag} variant={"h3"} noTag={noTag}>{children}</Tagable>
}

export function H3({children, systemOnTag, noTag=false}) {
    return <Tagable systemOnTag={systemOnTag} variant={"h4"} noTag={noTag}>{children}</Tagable>
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
