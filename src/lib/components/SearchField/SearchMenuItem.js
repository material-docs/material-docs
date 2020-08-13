/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import {useStyles} from "./styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import {useChangeRoute} from "routing-manager";

function SearchMenuItem({data, style, className, active, onMouseMove, ...props}, ref) {
    const classes = {...useStyles(), ...props.classes};
    const {changeRoute} = useChangeRoute();

    function handleItemAction(event) {
        switch (typeof data.redirect) {
            case "string":
                window.location.href = data.redirect;
                break;
            case "function":
                data.redirect();
                break;
            case "object":
                changeRoute(data.redirect);
                break;
            default:
                throw new TypeError(`MaterialDocs: Incorrect type for redirect. Got ${typeof data.redirect}, expected object | string | function`);
        }
    }

    return (
        <ListItem
            button
            onClick={handleItemAction}
            className={className}
            style={style}
            selected={!!active}
            onMouseMove={onMouseMove}
        >
            <ListItemIcon>
                asfs
            </ListItemIcon>
            <ListItemText
                primary={data.label}
                secondary={data.description || ""}
            />
        </ListItem>
    );
}

export default React.forwardRef(SearchMenuItem);
