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
import Menu from "@material-ui/core/Menu";
import SearchMenuItem from "./SearchMenuItem";
import Popper from "@material-ui/core/Popper";
import List from "@material-ui/core/List";

function SearchField({...props}, ref) {
    const classes = useStyles();
    const [text, setText] = React.useState("");
    const [focused, setFocused] = React.useState(false);
    const rootRef = React.useRef(null);

    function handleTextInput(event) {
        setText(event.target.value);
    }

    return (
        <Paper
            elevation={0}
            className={clsx(classes.root, focused && classes.rootFocused)}
            ref={rootRef}
        >
            <SearchIcon className={classes.icon}/>
            <InputBase
                onChange={handleTextInput}
                value={text}
                className={classes.input}
                placeholder={"Seacrh"}
                onFocus={event => setFocused(true)}
                onBlur={event => setFocused(false)}
            />
            <CloseIcon
                className={clsx(classes.icon, classes.iconClickable)}
                onClick={event => setText("")}
            />
            <Popper
                id="search-menu"
                disablePortal={false}
                anchorEl={rootRef.current}
                open={!!text && focused}
                placement={"bottom-end"}
                className={classes.popper}
                popperOptions={{positionFixed: true}}
            >
                <Paper className={classes.listPaper} elevation={2}>
                    <List disablePadding>
                        <SearchMenuItem />
                        <SearchMenuItem />
                        <SearchMenuItem />
                    </List>
                </Paper>
            </Popper>
        </Paper>
    );
}

export default React.forwardRef(SearchField);