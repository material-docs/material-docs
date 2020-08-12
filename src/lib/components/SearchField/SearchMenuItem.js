/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import {useStyles} from "./styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItemIcon from "@material-ui/core/ListItemIcon";

function SearchMenuItem({...props}, ref) {
    const classes = useStyles();

    return (
        <ListItem button onClick={event => alert("asfasf")}>
            <ListItemText
                primary={"Hello darkness my old friend"}
                secondary={"I've come to talk with you again!"}
            />
            <ListItemIcon>
                asfs
            </ListItemIcon>
        </ListItem>
    );
}

export default React.forwardRef(SearchMenuItem);