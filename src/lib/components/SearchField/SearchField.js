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
import ClickAwayListener from "@material-ui/core/ClickAwayListener";

const testDataSet = [
    {
        redirect: () => {},
        label: "Hello darkness",
        description: "my old friend. I`ve come to talk with you again!",
        tags: ["bears", "cats", "dogs"],
    },
    {
        redirect: () => {},
        label: "Hello, its me",
        description: "I was wondering if after all this years you would like to meet.",
        tags: ["adele", "america", "singer"],
    },
    {
        redirect: () => {},
        label: "Evergreen",
        description: "Two steps from hell",
        tags: ["trailers", "films", "add"],
    },
];

function SearchField({className, style, searchData=testDataSet, ...props}, ref) {
    const classes = {...useStyles(), ...props.classes};
    const [text, setText] = React.useState("");
    const [focused, setFocused] = React.useState(false);
    const rootRef = React.useRef(null);
    const [found, setFound] = React.useState([]);

//    const [selected, setSelected] = React.useState(null);

    function handleTextInput(event) {
        setText(event.target.value);
        setFound(search(event.target.value || ""));
    }

    function handleKeyDown(event) {

    }

    function search(input) {
        const query = input.toLowerCase();
        if (query && typeof query !== "string")
            throw new TypeError(`MaterialDocs: incorrect type ${typeof query} for search query, expected string!`);
        if (!query) return [];
        const result = searchData.map(item => {
            if (!item) throw new TypeError(`MaterialDocs: invalid search data object, expected SearchDataItem, got ${item}`);
            if (typeof item.label !== "string")
                throw new TypeError(`MaterialDocs: incorrect type ${typeof item.label} for label, expected string!`);
            if (item.description && typeof item.description !== "string")
                throw new TypeError(`MaterialDocs: incorrect type ${typeof item.description} for description, expected string!`);
            for (const tag of item.tags) {
                if (typeof tag !== "string")
                    throw new TypeError(`MaterialDocs: incorrect type ${typeof tag} for tag, expected string!`);
                if (tag.toLowerCase().includes(query)) return item;
            }
            if (item.label.toLowerCase().includes(query)) return item;
            if (item.description && item.description.toLowerCase().includes(query)) return item;
            return null;
        }).filter(item => item);
        return result;
    }

    return (
        <ClickAwayListener
            onClickAway={event => setFocused(false)}
        >
            <Paper
                elevation={0}
                className={clsx(classes.root, focused && classes.rootFocused, className)}
                ref={rootRef}
                style={style}
            >
                <SearchIcon className={classes.icon}/>
                <InputBase
                    onChange={handleTextInput}
                    value={text}
                    className={classes.input}
                    placeholder={"Seacrh"}
                    onFocus={event => setFocused(true)}
                    onKeyDown={handleKeyDown}
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
                            {found.map(item => <SearchMenuItem data={item} key={`search-menu-item-${item.label}`}/>)}
                        </List>
                    </Paper>
                </Popper>
            </Paper>
        </ClickAwayListener>
    );
}

export default React.forwardRef(SearchField);