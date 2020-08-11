/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import Paper from "@material-ui/core/Paper";
import CloseIcon from '@material-ui/icons/Close';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from "@material-ui/core/InputBase";
import {useStyles} from "./styles";
import clsx from "clsx";

function SearchField({...props}, ref) {
    const classes = useStyles();
    const [text, setText] = React.useState("");

    function handleTextInput(event) {
        setText(event.target.value);
    }

    return (
        <Paper elevation={0} className={classes.root}>
            <SearchIcon className={classes.icon}/>
            <InputBase
                onChange={handleTextInput}
                value={text}
                className={classes.input}
                placeholder={"Seacrh"}
            />
            <CloseIcon
                className={clsx(classes.icon, classes.iconClickable)}
                onClick={event => setText("")}
            />
        </Paper>
    );
}

export default React.forwardRef(SearchField);