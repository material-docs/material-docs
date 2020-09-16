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
import {styles} from "./styles";
import useSearch from "../../hooks/useSearch";
import useGroups from "../../hooks/useGroups";
import {TaggingContext} from "../../hooks/useTags";
import {useCommonStyles} from "../../stylesheets/commonStyles";
import {isWidthUp} from "@material-ui/core";
import PropTypes from "prop-types";
import {Helmet} from "react-helmet-async";
import {withStyles} from "@material-ui/styles";

export const displayName = "MatDocDocsPage";

const DocsPage = React.forwardRef(function DocsPage(props, ref) {
    const {
        name = "home",
        searchTags = [],
        searchLabel,
        searchDescription,
        noGenerateAutoSearch = false,
        noAutoMenu = false,
        width,
        children,
        classes,
        ...other
    } = props;
    const commonClasses = useCommonStyles();
    const [tags, setTags] = React.useState({});
    const [content, setContent] = React.useState(null);
    const {addSearchItem, removeSearchItem} = useSearch();
    const {addPage, deletePage, path: parentPath} = useGroups();
    const prevPage = React.useRef(null);
    const prevSearchItem = React.useRef(null);
    const pagePath = [...(parentPath || []), name].map(name => createRouteFromName(name)).join("/");

    const metaKeywords = [...searchTags, name].filter(item => item).join(",");

    React.useEffect(() => {
        prevPage.current = {name, link: pagePath};
    }, []);

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
            removeSearchItem(prevSearchItem.current);
            prevSearchItem.current = searchItem;
            addSearchItem(searchItem);
        }

        return () => !noGenerateAutoSearch && removeSearchItem(searchItem);
    }, [searchLabel, searchDescription, name]);

    React.useEffect(() => {
        /**
         * page - page data for auto menu.
         * @type PageData
         */
        const page = {
            name,
            link: pagePath,
            path: [...(parentPath || []), name],
        };
        prevPage.current = page;
        !noAutoMenu && addPage(page);

        return () => !noAutoMenu && deletePage(page);
    }, [name]);

    function insertTagCallbacksInChildren(source) {
        return React.Children.map(source, child => {
            if (typeof child === "string") return <Typography className={commonClasses.pageBlock}>{child}</Typography>;
            return child;
        });
    }

    function makeKeysFromTags() {
        const keys = [];
        for (const key in tags) {
            const {label, ref, topOffset} = tags[key] || {};
            const id = key;
            keys.push({id, label, ref, topOffset});
        }
        keys.sort((a, b) => {
            if (a.topOffset > b.topOffset) return 1;
            if (a.topOffset === b.topOffset) return 0;
            if (a.topOffset < b.topOffset) return -1;
        });
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
    const removeTag = key => setTags(last => {
        delete last[key];
        return last;
    });

    return (
        <Route path={`/${pagePath}`}>
            <Helmet>
                <title>{name}</title>
                <meta name="description" content={searchDescription || ""}/>
                <meta name="keywords" content={metaKeywords || ""}/>
            </Helmet>
            <TaggingContext.Provider value={{setTag, removeTag, tags}}>
                <Grid container ref={ref}>
                    <Grid item xs={12} md={1}/>
                    <Grid item xs={12} md={8}>
                        <Box p={isWidthUp("md", width) ? 1 : 3}>
                            {content}
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={1}/>
                    <Grid item xs={12} md={2} style={{position: "relative"}}>
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
});

DocsPage.displayName = displayName;

DocsPage.propTypes = {
    // DocsPageProps
    name: PropTypes.string,
    searchTags: PropTypes.arrayOf(PropTypes.string),
    searchLabel: PropTypes.string,
    searchDescription: PropTypes.string,
    noGenerateAutoSearch: PropTypes.bool,
    noAutoMenu: PropTypes.bool,
    // Stylable
    style: PropTypes.object,
    className: PropTypes.string,
    classes: PropTypes.object,
    // Containerable
    children: PropTypes.node,
}

export default withStyles(styles, {name: displayName})(DocsPage);