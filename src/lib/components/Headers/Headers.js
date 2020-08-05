/*
 * Author: Danil Andrieiev | danssg08@gmail.com |  https://github.com/DanilAndreev
 *  Copyright (c) 2020.
 */

import React from "react";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import createRouteFromName from "../../utils/createRouteFromName";
import {useStyles} from "./styles";
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import clsx from "clsx";

export function Tagable({children, systemOnTag, noTag = false, variant, style, className, ...props}) {
    const classes = {...useStyles(), ...props.classes};
    const id = props.id || (typeof children === "string" && createRouteFromName(children));

    React.useEffect(() => {
        !noTag && typeof systemOnTag === "function" && systemOnTag(prev => ({...prev, [id]: String(children)}));
        return () => !noTag && typeof systemOnTag === "function" && systemOnTag(prev => ({...prev, [id]: undefined}));
    }, [children]);

    return (
        <div className={clsx(classes.root, classes.anchor, className)} id={!noTag && id} style={style}>
            <div className={classes.container}>
                <Typography variant={variant}>
                    {children}
                    <Divider/>
                </Typography>
                <a href={`#${id}`} className={classes.tagHook}>
                    <LocalOfferIcon />
                </a>
            </div>
        </div>
    );
}

export function H1({children, systemOnTag, noTag = false}) {
    return <Tagable systemOnTag={systemOnTag} variant={"h2"} noTag={noTag}>{children}</Tagable>
}

export function H2({children, systemOnTag, noTag = false}) {
    return <Tagable systemOnTag={systemOnTag} variant={"h3"} noTag={noTag}>{children}</Tagable>
}

export function H3({children, systemOnTag, noTag = false}) {
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
