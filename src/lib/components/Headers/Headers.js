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
import useTags from "../../hooks/useTags";
import {useCommonStyles} from "../../stylesheets/commonStyles";
import getElementOffsetSum from "../../utils/getElementOffsetSum";

function TagableF({children, noTag = false, variant, style, className, noDivider = false, ...props}, ref) {
    const classes = {...useStyles(), ...props.classes};
    const commonClasses = useCommonStyles();
    const {setTag, removeTag} = useTags();
    const [topOffset, setTopOffset] = React.useState(0);
    const id = React.useRef(props.id || (typeof children === "string" && createRouteFromName(children)));
    const aref = React.useRef(null);
    const typographyClasses = {h1: classes.h1, h2: classes.h2, h3: classes.h3, h4: classes.h4, h5: classes.h5}

    React.useEffect(() => {
        !noTag && setTag(id.current, {label: String(children), ref: aref, topOffset});
        return () => {
            if (!noTag) {
                removeTag(id.current);
            }
        };
    }, [children, aref, topOffset]);

    React.useEffect(() => {
        const {top} = getElementOffsetSum(aref.current);
        setTopOffset(top);
    }, [aref]);

    return (
        <div
            className={clsx(commonClasses.pageBlock, classes.root, classes.anchor, className)}
            id={noTag ? undefined : id.current}
            style={style}
            ref={ref}
        >
            <div className={classes.container}>
                <Typography variant={variant} classes={typographyClasses}>
                    {children}
                    {!noDivider && <Divider className={classes.divider}/>}
                </Typography>
                {!noTag &&
                <a href={`#${id.current}`} className={classes.tagHook} ref={aref}>
                    <LocalOfferIcon/>
                </a>
                }
            </div>
        </div>
    );
}

export const Tagable = React.forwardRef(TagableF);


export function H1F({children, ...props}, ref) {
    return <Tagable variant={"h1"} {...props} ref={ref}>{children}</Tagable>
}

export const H1 = React.forwardRef(H1F);


function H2F({children, ...props}, ref) {
    return <Tagable variant={"h2"} {...props} ref={ref}>{children}</Tagable>
}

export const H2 = React.forwardRef(H2F);


function H3F({children, ...props}, ref) {
    return <Tagable variant={"h3"} {...props} ref={ref}>{children}</Tagable>
}

export const H3 = React.forwardRef(H3F);


function H4F({children, noDivider = true, noTag = true, ...props}, ref) {
    return <Tagable variant={"h4"} {...props} noTag={noTag} noDivider={noDivider} ref={ref}>{children}</Tagable>
}

export const H4 = React.forwardRef(H4F);


function H5F({children, noDivider = true, noTag = true, ...props}, ref) {
    return <Tagable variant={"h5"} {...props} noTag={noTag} noDivider={noDivider} ref={ref}>{children}</Tagable>
}

export const H5 = React.forwardRef(H5F);


function H6F({children, noDivider = true, noTag = true, ...props}, ref) {
    return <Tagable variant={"h6"} {...props} noTag={noTag} noDivider={noDivider} ref={ref}>{children}</Tagable>
}

export const H6 = React.forwardRef(H6F);


function HeaderF({children, heading = 1, ...props}, ref) {
    switch (heading) {
        case 1:
            return <H1 {...props} ref={ref}>{children}</H1>;
        case 2:
            return <H2 {...props} ref={ref}>{children}</H2>;
        case 3:
            return <H3 {...props} ref={ref}>{children}</H3>;
        case 4:
            return <H4 {...props} ref={ref}>{children}</H4>;
        case 5:
            return <H5 {...props} ref={ref}>{children}</H5>;
        default:
            return <H6 {...props} ref={ref}>{children}</H6>;
    }

}

export const Header = React.forwardRef(HeaderF);