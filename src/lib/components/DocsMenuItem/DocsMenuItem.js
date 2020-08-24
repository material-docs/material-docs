/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import ListItem from "@material-ui/core/ListItem";
import Collapse from "@material-ui/core/Collapse";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import {ExpandLess, ExpandMore} from "@material-ui/icons";
import {useChangeRoute} from "routing-manager";
import {useStyles} from "./styles";
import clsx from "clsx";
import createRouteFromName from "../../utils/createRouteFromName";
import {useTheme} from "@material-ui/core";
import useNesting, {NestingContext} from "../../hooks/useNesting";

function DocsMenuItem({
                          children,
                          defaultExpanded = false,
                          textPrimary = "",
                          textSecondary = "",
                          icon,
                          onClick,
                          page,
                          isCurrent = false,
                          className,
                          style,
                          dense = false,
                          ...props
                      }, ref) {
    const classes = {...useStyles(), ...props.classes};
    const {changeRoute, getRouteParams} = useChangeRoute();
    const theme = useTheme();
    const pageRoute = typeof page === "string" && createRouteFromName(page);
    const [expanded, setExpanded] = React.useState(defaultExpanded);
    const context_nesting = useNesting();
    const nesting = props.nesting || context_nesting;

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

    function handleButtonClick() {
        if (typeof pageRoute === "string") {
            changeRoute({page: pageRoute});
        } else if (typeof page === "object") {
            changeRoute({...page});
        }
    }

    return (
        <React.Fragment>
            <ListItem
                button
                onClick={children ? handleOpen : (onClick || handleButtonClick)}
                {...props}
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
            <Collapse in={expanded} timeout="auto" unmountOnExit className={classes.collapse}>
                <NestingContext.Provider value={nesting + 1}>
                    {children}
                </NestingContext.Provider>
            </Collapse>
            }
        </React.Fragment>
    );
}

export default React.forwardRef(DocsMenuItem);