import React from "react";
import ListItem from "@material-ui/core/ListItem";
import Collapse from "@material-ui/core/Collapse";
import List from "@material-ui/core/List";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import {ExpandLess, ExpandMore} from "@material-ui/icons";

export default function DocsMenuItem({
                                         children,
                                         defaultExpanded = false,
                                         textPrimary = "",
                                         textSecondary = "",
                                         icon,
                                         onClick,
                                         ...props
                                     }) {
    const [expanded, setExpanded] = React.useState(defaultExpanded);

    function handleOpen() {
        setExpanded(!expanded);
    }

    function handleButtonClick() {

    }

    return (
        <React.Fragment>
            <ListItem
                button
                onClick={children ? handleOpen : (onClick || handleButtonClick)}
                {...props}
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