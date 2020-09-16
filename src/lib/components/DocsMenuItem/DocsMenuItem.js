/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import {styles} from "./styles";
// MaterialUI components
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ListItem from "@material-ui/core/ListItem";
// MaterialUI icons
import {ExpandLess, ExpandMore} from "@material-ui/icons";
// PropTypes validators
import PropTypes from "prop-types";
// Utils
import withWidth from "@material-ui/core/withWidth";
import {withStyles} from "@material-ui/styles";
import useNesting, {NestingContext} from "../../hooks/useNesting";
import useMenu from "../../hooks/useMenu/useMenu";
import {useChangeRoute} from "routing-manager";
import clsx from "clsx";
import createRouteFromName from "../../utils/createRouteFromName";
import {isWidthUp, useTheme} from "@material-ui/core";


export const displayName = "MatDocDocsMenuItem";

const DocsMenuItem = withWidth()(React.forwardRef(function DocsMenuItem(props, ref) {
    const {
        children,
        defaultExpanded = false,
        textPrimary = "",
        textSecondary = "",
        icon,
        onClick,
        link,
        page,
        isCurrent = false,
        className,
        style,
        dense = false,
        width,
        classes,
        ...other
    } = props;
    const theme = useTheme();
    const {changeRoute, getRouteParams} = useChangeRoute();
    const pageRoute = typeof page === "string" && createRouteFromName(page);
    const [expanded, setExpanded] = React.useState(defaultExpanded);
    const context_nesting = useNesting();
    const nesting = other.nesting || context_nesting;
    const {closeMenu} = useMenu();

    let highlight = false;
    if (typeof isCurrent === "boolean") {
        highlight = isCurrent;
    } else if (typeof isCurrent === "function") {
        highlight = isCurrent(getRouteParams(), pageRoute, page);
    } else if (getRouteParams().page === pageRoute) {
        highlight = true;
    }

    let paddingShift = nesting * 2 + 2;
    if (paddingShift > 16) paddingShift = 16;

    function handleOpen() {
        setExpanded(!expanded);
    }

    function handleButtonClick(event) {
        if (typeof onClick === "function") {
            onClick(event)
        } else {
            if (typeof link === "string") {
                changeRoute({page: link});
            } else {
                if (typeof pageRoute === "string") {
                    changeRoute({page: pageRoute});
                } else if (typeof page === "object") {
                    changeRoute({...page});
                }
            }
        }
        if (!isWidthUp("md", width)) closeMenu();
    }

    return (
        <React.Fragment>
            <ListItem
                button
                onClick={children ? handleOpen : (onClick || handleButtonClick)}
                {...other}
                className={clsx(classes.root, highlight && classes.highlighted, className)}
                style={{paddingLeft: theme.spacing(paddingShift), ...style}}
                ref={ref}
                dense={dense}
            >
                {icon &&
                <ListItemIcon>
                    {icon}
                </ListItemIcon>
                }
                <ListItemText
                    primary={textPrimary || page}
                    secondary={textSecondary}
                    primaryTypographyProps={{style: {fontWeight: children ? "bold" : "normal"}}}
                />
                {children && (expanded ? <ExpandLess/> : <ExpandMore/>)}
            </ListItem>
            {children &&
            <Collapse
                in={expanded}
                timeout="auto"
                unmountOnExit
                className={classes.collapse}
                disableStrictModeCompat
            >
                <NestingContext.Provider value={nesting + 1}>
                    {children}
                </NestingContext.Provider>
            </Collapse>
            }
        </React.Fragment>
    );
}));

DocsMenuItem.displayName = displayName;

DocsMenuItem.propTypes = {
    // DocsMenuItemProps
    defaultExpanded: PropTypes.bool,
    textPrimary: PropTypes.string,
    textSecondary: PropTypes.string,
    icon: PropTypes.node,
    onClick: PropTypes.func,
    page: PropTypes.any,
    isCurrent: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
    dense: PropTypes.bool,
    nesting: PropTypes.number,
    // Stylable
    style: PropTypes.object,
    className: PropTypes.string,
    classes: PropTypes.object,
    // Containerable
    children: PropTypes.node,
}

export default withStyles(styles, {name: displayName})(DocsMenuItem);