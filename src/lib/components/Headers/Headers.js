/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import createRouteFromName from "../../utils/createRouteFromName";
import {useStyles} from "./styles";
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import clsx from "clsx";
import {useTags} from "../DocsPage/DocsPage";

export function Tagable({children, noTag = false, variant, style, className, noDivider = false, ...props}) {
    const {setTag} = useTags();
    const classes = {...useStyles(), ...props.classes};
    const id = props.id || (typeof children === "string" && createRouteFromName(children));
    const ref = React.useRef(null);

    React.useEffect(() => {
        !noTag && setTag(id, {label: String(children), ref});
        return () => !noTag && setTag(id, undefined);
    }, [children, ref]);

    return (
        <div className={clsx(classes.root, classes.anchor, className)} id={!noTag && id} style={style}>
            <div className={classes.container}>
                <Typography variant={variant}>
                    {children}
                    {!noDivider && <Divider className={classes.divider}/>}
                </Typography>
                {!noTag &&
                <a href={`#${id}`} className={classes.tagHook} ref={ref}>
                    <LocalOfferIcon/>
                </a>
                }
            </div>
        </div>
    );
}

export function H1({children, ...props}) {
    return <Tagable variant={"h2"} {...props}>{children}</Tagable>
}

export function H2({children, ...props}) {
    return <Tagable variant={"h3"} {...props}>{children}</Tagable>
}

export function H3({children, ...props}) {
    return <Tagable variant={"h4"} {...props}>{children}</Tagable>
}

export function H4({children, noDivider = true, noTag = true, ...props}) {
    return <Tagable variant={"h5"} {...props} noTag={noTag} noDivider={noDivider}>{children}</Tagable>
}

export function H5({children, noDivider = true, noTag = true, ...props}) {
    return <Tagable variant={"h5"} {...props} noTag={noTag} noDivider={noDivider}>{children}</Tagable>
}
