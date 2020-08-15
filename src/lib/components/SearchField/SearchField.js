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
import SearchMenuItem from "./SearchMenuItem";
import Popper from "@material-ui/core/Popper";
import List from "@material-ui/core/List";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import {useChangeRoute} from "routing-manager";


function SearchField({className, style, searchData = [], doSearch, ...props}, ref) {
    const classes = {...useStyles(), ...props.classes};
    const {changeRoute} = useChangeRoute();
    const [text, setText] = React.useState("");
    const [focused, setFocused] = React.useState(false);
    const [found, setFound] = React.useState([]);
    const [selected, setSelected] = React.useState(0);
    const rootRef = React.useRef(null);
    const inputRef = React.useRef(null);

    function handleTextInput(event) {
        setText(event.target.value);
        if (doSearch && typeof doSearch !== "function")
            throw new TypeError(`MaterialDocs: Incorrect type for doSearch prop, expected function, got ${typeof doSearch}`);
        if (doSearch) {
            doSearch(event.target.value, searchData).then(result => setFound(result));
        } else {
            search(event.target.value || "").then(result => setFound(result));
        }
    }

    function handleItemAction(data) {
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

    function handleKeyDown(event) {
        switch (event.key) {
            case "ArrowUp":
                setSelected(prev => prev > 0 ? prev - 1 : found.length - 1);
                event.preventDefault();
                event.stopPropagation();
                break;
            case "ArrowDown":
                setSelected(prev => prev < found.length - 1 ? prev + 1 : 0);
                event.preventDefault();
                event.stopPropagation();
                break;
            case "Enter":
                found[selected] &&  handleItemAction(found[selected]);
                found[selected] && setText("");
                //TODO: add unfocus on menu select.
                break;
        }
    }

    /**
     * search - function, designed to do search from searchData by query string input.
     * @function
     * @param {string} input
     * @returns {SearchDataItem[]}
     */
    async function search(input) {
        if (input && typeof input !== "string")
            throw new TypeError(`MaterialDocs: incorrect type ${typeof input} for search query, expected string!`);
        if (!input) return [];
        const query = input.toLowerCase().replace(/  /g, "").split(" ").filter(item => item);
        const result = new Set();
        for (const keyword of query) {
            for (const item of searchData) {
                let added = false;
                if (!item) throw new TypeError(`MaterialDocs: invalid search data object, expected SearchDataItem, got ${item}`);
                if (typeof item.label !== "string")
                    throw new TypeError(`MaterialDocs: incorrect type ${typeof item.label} for label, expected string!`);
                if (item.description && typeof item.description !== "string")
                    throw new TypeError(`MaterialDocs: incorrect type ${typeof item.description} for description, expected string!`);
                for (const tag of item.tags) {
                    if (typeof tag !== "string")
                        throw new TypeError(`MaterialDocs: incorrect type ${typeof tag} for tag, expected string!`);
                    if (tag.toLowerCase().includes(keyword)) {
                        result.add(item);
                        added = true;
                        break;
                    }
                }
                if (!added && item.label.toLowerCase().includes(keyword)) {
                    result.add(item);
                    added = true;
                }
                if (!added && item.description && item.description.toLowerCase().includes(keyword)) result.add(item);
            }
        }
        return [...result];
    }

    return (
        <ClickAwayListener
            onClickAway={event => setFocused(false)}
        >
            {/*TODO: fix focus on paper click*/}
            <Paper
                elevation={0}
                className={clsx(classes.root, focused && classes.rootFocused, className)}
                ref={rootRef}
                style={style}
                onClick={event => inputRef.current && inputRef.current.focus()}
            >
                <SearchIcon className={classes.icon}/>
                <InputBase
                    onChange={handleTextInput}
                    value={text}
                    className={classes.input}
                    placeholder={"Seacrh"}
                    onFocus={event => setFocused(true)}
                    onKeyDown={handleKeyDown}
                    ref={inputRef}
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
                            {found.map((item, index) =>
                                <SearchMenuItem
                                    active={index === selected}
                                    onMouseMove={event => setSelected(index)}
                                    data={item}
                                    key={`search-menu-item-${item.label}`}
                                />
                            )}
                            {!found.length &&
                            <ListItem>
                                <ListItemIcon>
                                    <ErrorOutlineIcon/>
                                </ListItemIcon>
                                <ListItemText
                                    primary={"No results found"}
                                    secondary={"Try to rephrase the query"}
                                />
                            </ListItem>
                            }
                        </List>
                    </Paper>
                </Popper>
            </Paper>
        </ClickAwayListener>
    );
}

export default React.forwardRef(SearchField);
