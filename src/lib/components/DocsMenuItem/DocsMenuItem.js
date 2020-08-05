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

export default function DocsMenuItem({
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
                                         ...props
                                     }) {
    const classes = {...useStyles(), ...props.classes};
    const {changeRoute, getRouteParams} = useChangeRoute();
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
                style={style}
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
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <List>
                    {children}
                </List>
            </Collapse>
            }
        </React.Fragment>
    );
}