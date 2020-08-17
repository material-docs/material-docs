/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import ListItem from "@material-ui/core/ListItem";
import Collapse from "@material-ui/core/Collapse";
import List from "@material-ui/core/List";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import {ExpandLess, ExpandMore} from "@material-ui/icons";
import {useChangeRoute} from "routing-manager";
import {useStyles} from "./styles";
import clsx from "clsx";
import createRouteFromName from "../../utils/createRouteFromName";
import {useTheme} from "@material-ui/core";

//TODO: change nesting method to context.
function DocsMenuItem({
                          children,
                          defaultExpanded = false,
                          textPrimary = "",
                          textSecondary = "",
                          icon,
                          onClick,
                          page,
                          isCurrent,
                          className,
                          style,
                          nesting = 0,
                          ...props
                      }, ref) {
    const classes = {...useStyles(), ...props.classes};
    const {changeRoute, getRouteParams} = useChangeRoute();
    const theme = useTheme();
    const pageRoute = typeof page === "string" && createRouteFromName(page);
    const [expanded, setExpanded] = React.useState(defaultExpanded);

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

    function nestedChildren() {
        return React.Children.map(children, child => {
            if (React.isValidElement(child)) {
                return React.cloneElement(child, {nesting: nesting + 1});
            }
        });
    }

    console.log(nesting);

    return (
        <React.Fragment>
            <ListItem
                button
                onClick={children ? handleOpen : (onClick || handleButtonClick)}
                {...props}
                className={clsx(classes.root, highlight && classes.highlighted, className)}
                style={{paddingLeft: theme.spacing(paddingShift), ...style}}
                ref={ref}
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
                {nestedChildren()}
            </Collapse>
            }
        </React.Fragment>
    );
}

export default React.forwardRef(DocsMenuItem);