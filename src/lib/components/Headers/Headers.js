/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React, {Children} from "react";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import createRouteFromName from "../../utils/createRouteFromName";
import {useStyles} from "./styles";
import LinkIcon from '@material-ui/icons/Link';
import clsx from "clsx";
import useTags from "../../hooks/useTags";
import {useCommonStyles} from "../../stylesheets/commonStyles";
import getElementOffsetSum from "../../utils/getElementOffsetSum";
import PropTypes from "prop-types";
import getTextFromChildren from "../../utils/getTextFromChildren";
import useTheme from "@material-ui/core/styles/useTheme";


const TagableF = React.forwardRef(function TagableF({children, noTag = false, variant, style, className, noDivider = false, ...props}, ref) {
    const classes = {...useStyles(), ...props.classes};
    const typographyClasses = {h1: classes.h1, h2: classes.h2, h3: classes.h3, h4: classes.h4, h5: classes.h5, h6: classes.h6}
    const commonClasses = useCommonStyles();
    const {setTag, removeTag} = useTags();
    const [topOffset, setTopOffset] = React.useState(0);
    const id = React.useRef(props.id || createRouteFromName(getTextFromChildren(children, 6)));
    const aref = React.useRef(null);

    React.useEffect(() => {
        !noTag && setTag(id.current, {label: children, ref: aref, topOffset});
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
            className={clsx(commonClasses.pageBlock, classes.root, className)}

            style={style}
            ref={ref}
        >
            <div
                className={classes.anchor}
                id={noTag ? undefined : id.current}
            >
                <div className={classes.container}>
                    <Typography variant={variant} classes={typographyClasses} className={classes.typography}>
                        <div className={classes.textBlock}>
                        {children}
                        </div>
                        {!noDivider && <Divider className={classes.divider}/>}
                    </Typography>
                    {!noTag &&
                    <a href={`#${id.current}`} className={classes.tagHook} ref={aref}>
                        <LinkIcon className={classes.anchorIcon}/>
                    </a>
                    }
                </div>
            </div>
        </div>
    );
});

TagableF.displayName = "Tagable";

TagableF.defaultProps = {
    noTag: false,
    noDivider: false,
}

TagableF.propTypes = {
    // Stylable
    style: PropTypes.object,
    className: PropTypes.string,
    classes: PropTypes.object,
    // Containerable
    children: PropTypes.node,
}

export const Tagable = TagableF;


function H1F(props, ref) {
    const theme = useTheme();
    const {children, ...other} = {...theme.props.MDH1, ...props};
    return <Tagable variant={"h1"} {...other} ref={ref}>{children}</Tagable>
}

export const H1 = React.forwardRef(H1F);


function H2F({children, ...props}, ref) {
    const theme = useTheme();
    const {children, ...other} = {...theme.props.MDH2, ...props};
    return <Tagable variant={"h2"} {...other} ref={ref}>{children}</Tagable>
}

export const H2 = React.forwardRef(H2F);


function H3F({children, ...props}, ref) {
    const theme = useTheme();
    const {children, ...other} = {...theme.props.MDH3, ...props};
    return <Tagable variant={"h3"} {...other} ref={ref}>{children}</Tagable>
}

export const H3 = React.forwardRef(H3F);


function H4F({children, noDivider = true, noTag = true, ...props}, ref) {
    const theme = useTheme();
    const {children, ...other} = {...theme.props.MDH4, ...props};
    return <Tagable variant={"h4"} {...other} noTag={noTag} noDivider={noDivider} ref={ref}>{children}</Tagable>
}

export const H4 = React.forwardRef(H4F);


function H5F({children, noDivider = true, noTag = true, ...props}, ref) {
    const theme = useTheme();
    const {children, ...other} = {...theme.props.MDH5, ...props};
    return <Tagable variant={"h5"} {...other} noTag={noTag} noDivider={noDivider} ref={ref}>{children}</Tagable>
}

export const H5 = React.forwardRef(H5F);


function H6F({children, noDivider = true, noTag = true, ...props}, ref) {
    const theme = useTheme();
    const {children, ...other} = {...theme.props.MDH6, ...props};
    return <Tagable variant={"h6"} {...other} noTag={noTag} noDivider={noDivider} ref={ref}>{children}</Tagable>
}

export const H6 = React.forwardRef(H6F);


const HeaderF = React.forwardRef(function HeaderF({children, heading = 1, ...props}, ref) {
    const theme = useTheme();
    const {children, ...other} = {...theme.props.MDHeader, ...props};
    switch (heading) {
        case 1:
            return <H1 {...other} ref={ref}>{children}</H1>;
        case 2:
            return <H2 {...other} ref={ref}>{children}</H2>;
        case 3:
            return <H3 {...other} ref={ref}>{children}</H3>;
        case 4:
            return <H4 {...other} ref={ref}>{children}</H4>;
        case 5:
            return <H5 {...other} ref={ref}>{children}</H5>;
        default:
            return <H6 {...other} ref={ref}>{children}</H6>;
    }
});

HeaderF.displayName = "Header";

HeaderF.defaultProps = {
    heading: 1,
}

HeaderF.propTypes = {
    heading: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
}

export const Header = HeaderF;