/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import {styles} from "./styles";
import {useCommonStyles} from "../../stylesheets/commonStyles";
// MaterialUI components
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
// MaterialUI icons
import LinkIcon from '@material-ui/icons/Link';
// PropTypes validators
import PropTypes from "prop-types";
// Utils
import clsx from "clsx";
import useTags from "../../hooks/useTags";
import getTextFromChildren from "../../utils/getTextFromChildren";
import {withStyles} from "@material-ui/styles";
import getElementOffsetSum from "../../utils/getElementOffsetSum";
import createRouteFromName from "../../utils/createRouteFromName";


export const displayName = "MatDocTagable";

const Tagable = React.forwardRef(function Tagable(props, ref) {
    const {
        children,
        noTag = false,
        variant = "h1",
        style,
        className,
        classes,
        noDivider = false,
        ...other
    } = props;
    const typographyClasses = {
        h1: classes.h1,
        h2: classes.h2,
        h3: classes.h3,
        h4: classes.h4,
        h5: classes.h5,
        h6: classes.h6
    }
    const commonClasses = useCommonStyles();
    const {setTag, removeTag, tags} = useTags();
    const [topOffset, setTopOffset] = React.useState(0);
    const id = React.useRef(other.id || createRouteFromName(getTextFromChildren(children, 6)));
    const prevId = React.useRef(id.current);
    const aref = React.useRef(null);

    React.useEffect(() => {
        prevId.current = id.current;
        id.current = other.id || createRouteFromName(getTextFromChildren(children, 6));
        if (!noTag && id.current) setTag(id.current, {label: children, ref: aref, topOffset});
        if (!noTag && !id.current) prevId.current && removeTag(prevId.current);
        return () => {
            if (!noTag) {
                id.current && removeTag(id.current);
            }
        };
    }, [aref.current, topOffset, id.current, children]);

    React.useEffect(() => {
        const {top} = getElementOffsetSum(aref.current);
        setTopOffset(top);
    }, [aref.current]);

    if (!id.current) return null;

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

Tagable.displayName = displayName;

Tagable.propTypes = {
    // Stylable
    style: PropTypes.object,
    className: PropTypes.string,
    classes: PropTypes.object,
    // Containerable
    children: PropTypes.node,
}

export default withStyles(styles, {name: displayName})(Tagable);
