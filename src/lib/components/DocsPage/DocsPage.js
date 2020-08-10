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

export default function DocsPage({name = "home", children}) {
    const pagePath = createRouteFromName(name);
    const [tags, setTags] = React.useState({});
    const [content, setContent] = React.useState(null);

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
                    <Grid item xs={12} md={1} />
                    <Grid item xs={12} md={8}>
                        <Box p={1}>
                            {content}
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={1} />
                    <Grid item xs={12} md={2}>
                        <NavigationList keys={makeKeysFromTags()}/>
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
export const useTags = () =>  React.useContext(TaggingContext);

