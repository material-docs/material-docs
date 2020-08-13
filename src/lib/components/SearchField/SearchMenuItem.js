/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import {useStyles} from "./styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";

function SearchMenuItem({data, style, className, active, onMouseMove, ...props}, ref) {
    const classes = {...useStyles(), ...props.classes};

    return (
        <ListItem
            button
            onClick={event => alert("asfasf")}
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
