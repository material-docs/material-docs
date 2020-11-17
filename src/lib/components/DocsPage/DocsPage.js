/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import {styles} from "./styles";
// Components
import Locale from "../Locale";
import {Helmet} from "react-helmet-async";
import NavigationList from "./NavigationList";
import {Route} from "react-router-dom"
// MaterialUI components
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
// PropTypes validators
import PropTypes from "prop-types";
// Utils
import {isWidthUp} from "@material-ui/core";
import useSearch from "../../hooks/useSearch";
import useGroups from "../../hooks/useGroups";
import {useCommonStyles} from "../../stylesheets/commonStyles";
import {withStyles} from "@material-ui/styles";
import {TaggingContext} from "../../hooks/useTags";
import createRouteFromName from "../../utils/createRouteFromName";
import * as _ from "lodash";
import {useMaterialDocsSystem} from "../../hooks";


export const displayName = "MaterialDocs-DocsPage";

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
        order,
        disableRoute = false,
        disableCopyright = false,
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
    const {noMenu} = useMaterialDocsSystem();

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
            order: typeof order === "number" ? order : undefined
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
        const newTags = _.cloneDeep(last);
        delete newTags[key];
        return newTags;
    });

    const withRouter = enable => content => enable ? <Route path={`/${pagePath}`}>{content}</Route> : content;

    return withRouter(!disableRoute)(
        <React.Fragment>
            <Helmet>
                <title>{name}</title>
                <meta name="description" content={searchDescription || ""}/>
                <meta name="keywords" content={metaKeywords || ""}/>
            </Helmet>
            <TaggingContext.Provider value={{setTag, removeTag, tags}}>
                <Grid container ref={ref}>
                    {!noMenu && <Grid item xs={12} md={1}/>}
                    <Grid item xs={12} md={noMenu ? 9 : 8}>
                        <Box p={isWidthUp("md", width) ? 1 : 3}>
                            {content}
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={1}/>
                    <Grid item xs={12} md={2} style={{position: "relative"}}>
                        <NavigationList keys={makeKeysFromTags()}/>
                    </Grid>
                    {!disableCopyright &&
                    <Grid item xs={12}>
                        <Box className={classes.copyright} p={1}>
                            <Typography><Locale path={"MaterialDocs/copyright/text"}/></Typography>
                        </Box>
                    </Grid>
                    }
                </Grid>
            </TaggingContext.Provider>
        </React.Fragment>
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
    order: PropTypes.number,
    // Stylable
    style: PropTypes.object,
    className: PropTypes.string,
    classes: PropTypes.object,
    // Containerable
    children: PropTypes.node,
}

export default withStyles(styles, {name: displayName})(DocsPage);