/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import {Route} from "react-router-dom"
import createRouteFromName from "../../utils/createRouteFromName";
import Grid from "@material-ui/core/Grid";
import NavigationList from "./NavigationList";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import {useStyles} from "./styles";
import {useSearch} from "../../layout/DocsLayout";

const TaggingContext = React.createContext({
    /**
     * setTag - function, designed to add or remove tagable element in page.
     * @function
     * @param {string} key
     * @param {{ref: RefObject<T>, label: string}} value
     * @example
     * const {setTag} = useTags();
     * setTag("my-object-key", {label: "my label", ref: ObjectRef});
     */
    setTag: (key, value) => {
        throw new ReferenceError("MaterialDocs: This function (setTag) hasn't been initialized yet. Maybe, you forget to call hook useTags() inside TaggingContext.Provider")
    },
    /**
     * tags - all registered tags in page
     * @type any
     */
    tags: {},
});

export default function DocsPage({name = "home", searchTags, searchLabel, searchDescription, noGenerateAutoSearch=false, children}) {
    const classes = useStyles();
    const pagePath = createRouteFromName(name);
    const [tags, setTags] = React.useState({});
    const [content, setContent] = React.useState(null);
    const {addSearchItem, removeSearchItem} = useSearch();

    React.useEffect(() => {
        /**
         * searchItem - search item for current page;
         * @type SearchDataItem
         */
        const searchItem = {
            redirect: {page: pagePath},
            label: searchLabel || name,
            description: searchDescription || (Object.keys(tags).length && tags[Object.keys[Object.keys(tags)[0]]]) || "",
            tags: searchTags || [],
        }

        if (!noGenerateAutoSearch) {
            removeSearchItem(searchItem); //TODO: fix bug with prev item remove before add new.
            addSearchItem(searchItem);

            return () => removeSearchItem(searchItem);
        }
    }, []);

    function insertTagCallbacksInChildren(source) {
        return React.Children.map(source, child => {
            if (typeof child === "string") return <Typography>{child}</Typography>
            return child;
        });
    }

    function makeKeysFromTags() {
        const keys = [];
        for (const key in tags) {
            const {label, ref} = tags[key] || {};
            const id = key;
            keys.push({id, label, ref});
        }
        return keys;
    }

    React.useEffect(() => {
        let newContent = children;
        if (typeof children === "Symbol(react.element)" || Array.isArray(children)) {
            newContent = insertTagCallbacksInChildren(children);
        }
        setContent(newContent);
    }, [children]);

    const setTag = (key, value) => setTags(last => ({...last, [key]: value}));

    return (
        <Route path={`/${pagePath}`}>
            <TaggingContext.Provider value={{setTag}}>
                <Grid container>
                    <Grid item xs={12} md={1}/>
                    <Grid item xs={12} md={8}>
                        <Box p={1}>
                            {content}
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={1}/>
                    <Grid item xs={12} md={2}>
                        <NavigationList keys={makeKeysFromTags()}/>
                    </Grid>
                    <Grid item xs={12}>
                        <Box className={classes.copyright} p={1}>
                            <Typography> Powered by MaterialDocs. All rights reserved. </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </TaggingContext.Provider>
        </Route>
    );
}

/**
 * useTags - React hook, used to provide tagable mechanism.
 * @returns {{setTag: setTag, tags: *}}
 * @example
 * const {setTag} = useTags();
 */
export const useTags = () => React.useContext(TaggingContext);

