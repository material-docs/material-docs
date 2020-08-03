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
    const [expanded, setExpanded] = React.useState(defaultExpanded);
    let highlight = false;

    console.log('rp: ', getRouteParams());
    if (typeof isCurrent === "boolean") {
        highlight = isCurrent;
    } else if (typeof isCurrent === "function") {
        highlight = isCurrent(getRouteParams(), page);
    } else if (getRouteParams().page === page) {
        highlight = true;
    }

    function handleOpen() {
        setExpanded(!expanded);
    }

    function handleButtonClick() {
        if (typeof page === "string") {
            changeRoute({page: page});
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
                <ListItemText primary={textPrimary} secondary={textSecondary}/>
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