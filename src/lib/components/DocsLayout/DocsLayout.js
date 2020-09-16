/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from 'react';
import clsx from 'clsx';
import {ThemeProvider as MuiThemeProvider, useTheme} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import {useStyles} from './styles'
import {BrowserRouter, HashRouter, Route, Switch} from "react-router-dom";
import {ChangeRouteProvider, useChangeRoute} from "routing-manager";
import {SnackbarProvider} from "notistack";
import SearchField from "../SearchField";
import LanguageSelector from "../LanguageSelector";
import PagesGroup from "../PagesGroup";
import {LangContext} from "../../hooks/useLang/useLang"
import {SearchContext} from "../../hooks/useSearch/useSearch";
import * as _ from "lodash";
import {isWidthDown, isWidthUp, withWidth} from "@material-ui/core";
import PropTypes from "prop-types";
import SearchDataItemValidator from "../../validators/SearchDataItemValidator";
import LangValidator from "../../validators/LangValidator";
import getChildrenFromContainer from "../../utils/getChildrenFromContainer";
import Box from "@material-ui/core/Box";
import {Helmet, HelmetProvider} from "react-helmet-async";
import DefaultTheme from "../../theme/DefaultTheme";
import {createGenerateClassName, StylesProvider, withStyles} from "@material-ui/styles";
import getContainerByType from "../../utils/getContainerByType";
import {MenuContext} from "../../hooks/useMenu/useMenu";
import AppBarActionValidator from "../../validators/AppBarActionValidator";
import generateHeaderIcon from "./generateHeaderIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";


import {displayName as DocsPagesDisplayName} from "../DocsPages";
import {displayName as LandingDisplayName} from "../Landing";
import {displayName as DocsMenuDisplayName} from "../DocsMenu";

export const displayName = "MatDocDocsLayout";

const DocsLayoutF = React.forwardRef((props, ref) => {
    const {
        children,
        noGenerateAutoSearch = false,
        defaultLang,
        langs,
        onHelpToTranslate,
        width,
        noSearchField = false,
        noLanguageSelector = false,
        actions = [],
        author,
        keywords,
        description,
        name,
        version,
        logo,
        ...other
    } = props;
    const classes = useStyles();
    const theme = useTheme();
    const {getQueryParams, getRouteParams, changeRoute} = useChangeRoute();
    const [open, setOpen] = React.useState(isWidthUp("md", width));
    const [content, setContent] = React.useState({pages: [], menu: null, landing: []});
    const [searchData, setSearchData] = React.useState(other.searchData ? new Set(other.searchData) : new Set());
    const [lang, setLang] = React.useState(null);
    const [autoMenuData, setAutoMenuData] = React.useState(null);
    const {l: langName} = getQueryParams();
    const {page: routePage} = getRouteParams();

    // Effect for drawer auto open/close on resize
    React.useEffect(() => {
        if (isWidthUp("md", width) && isWidthDown("lg", width)) {
            setOpen(true);
        } else if(isWidthUp("sm", width) && isWidthDown("md", width)) {
            setOpen(false);
        }
    }, [width]);

    // Effect for language setup on startup and changing lang on url hash changing.
    React.useEffect(() => {
        if (!langName) {
            changeRoute({page: null}, {l: defaultLang.name});
        }
        const newLang = langs.find(candidate => candidate.name === langName) || defaultLang;
        switchLang(newLang).then();
    }, [langName]);

    // Effect for page scroll reset when changing page.
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [routePage]);

    async function switchLangRoute(inputLang) {
        if (typeof inputLang !== "object")
            throw new TypeError(`MaterialDocs: incorrect type of lang, expected Lang, got ${typeof inputLang}`);
        if (typeof inputLang.name !== "string")
            throw new TypeError(`MaterialDocs: incorrect type of lang.name, expected string, got ${typeof inputLang.name}`);
        changeRoute({}, {l: inputLang.name});
    }

    async function switchLang(inputLang) {
        let newLang = {...inputLang};
        if (typeof inputLang !== "object")
            throw new TypeError(`MaterialDocs: incorrect type of lang, expected Lang, got ${typeof inputLang}`);
        if (typeof inputLang.name !== "string")
            throw new TypeError(`MaterialDocs: incorrect type of lang.name, expected string, got ${typeof inputLang.name}`);
        if (inputLang.locale && typeof inputLang.locale !== "object") {
            throw new TypeError(`MaterialDocs: incorrect type of lang.locale, expected object, got ${typeof inputLang.locale}`);
        } else if (!inputLang.locale) {
            if (typeof inputLang.loadLang !== "function")
                throw new TypeError(`MaterialDocs: incorrect type of lang.loadLang, expected function, got ${typeof inputLang.loadLang}`);
            let locale = {};
            try {
                locale = await inputLang.loadLang();
            } catch (error) {
                throw new Promise.Error(`MaterialDocs: failed to load lang. loadLang error: ${error.message()}`);
            }
            if (lang) {
                newLang.locale = _.cloneDeep(defaultLang.locale);
                _.merge(newLang.locale, locale);
            } else {
                newLang.locale = locale;
            }
        } else {
            if (lang) {
                newLang.locale = _.cloneDeep(defaultLang.locale);
                _.merge(newLang.locale, inputLang.locale);
            }
        }
       setLang(newLang);
    }

    const addSearchItem = item => !noGenerateAutoSearch && setSearchData(prev => {
        const newData = new Set(prev);
        newData.add(item);
        return newData;
    });

    const removeSearchItem = item => !noGenerateAutoSearch && setSearchData(prev => {
        const newData = new Set(prev);
        newData.delete(item);
        return newData;
    });

    const getSearchData = () => [...searchData];

    const getMenuFromChildren = () => {
        const menu = getContainerByType(children, DocsMenuDisplayName);
        if (menu && React.isValidElement(menu))
            return React.cloneElement(menu, {layoutData: autoMenuData});
        return null;
    };

    const getPagesFromChildren = () => getChildrenFromContainer(children, DocsPagesDisplayName) || [];

    const getLanding = () => getChildrenFromContainer(children, LandingDisplayName);

    // Effect, designed to get pages, menu and landing components from containers.
    React.useEffect(() => {
        setContent({
            menu: getMenuFromChildren(),
            pages: getPagesFromChildren(),
            landing: getLanding(),
        });
    }, [children, autoMenuData]);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <LangContext.Provider value={{lang, switchLang: switchLangRoute, langs, onHelpToTranslate}}>
            <SearchContext.Provider value={{addSearchItem, removeSearchItem, getSearchData}}>
                <HelmetProvider>
                    <Helmet>
                        <title>{name || "MaterialDocs"}</title>
                        {typeof description === "string" && <meta name="description" content={description}/>}
                        {typeof author === "string" && <meta name="author" content={author}/>}
                        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                        {Array.isArray(keywords) && <meta name="keywords" content={keywords.join(",")}/>}
                    </Helmet>
                    <Switch>
                        {content.landing &&
                        <Route path={"/"} exact>
                            <Box>
                                {content.landing}
                            </Box>
                        </Route>
                        }
                        <Route path={"/"}>
                            <MenuContext.Provider
                                value={{
                                    openMenu: handleDrawerOpen,
                                    closeMenu: handleDrawerClose,
                                    menuOpened: open,
                                }}
                            >
                                <div className={classes.root} ref={ref}>
                                    <CssBaseline/>
                                    <AppBar
                                        position="fixed"
                                        className={clsx(classes.appBar, !isWidthDown("md", width) && {
                                            [classes.appBarShift]: open,
                                        })}
                                    >
                                        <Toolbar className={classes.toolbar}>
                                            <IconButton
                                                color="inherit"
                                                aria-label="open drawer"
                                                onClick={handleDrawerOpen}
                                                edge="start"
                                                className={clsx(classes.menuButton, open && classes.hide)}
                                            >
                                                <MenuIcon/>
                                            </IconButton>
                                            <Typography variant="h6" noWrap className={classes.headerText}>
                                                {name  || "Material Docs"}
                                            </Typography>
                                            {!noSearchField && isWidthUp("md", width) &&
                                            <SearchField searchData={getSearchData()}/>
                                            }
                                            {!noLanguageSelector &&
                                            <LanguageSelector
                                                size={isWidthDown("xs", width) ? "small" : "large"}
                                            />
                                            }
                                            {Array.isArray(actions) && actions.map((action, index) =>
                                                generateHeaderIcon(changeRoute, `${index}`, action.icon, action.onClick, action.link, action.tooltip, classes.headerIcon)
                                            )

                                            }
                                        </Toolbar>
                                    </AppBar>
                                    <Drawer
                                        className={classes.drawer}
                                        variant={isWidthUp("md", width) ? "persistent" : "temporary"}
                                        anchor="left"
                                        open={open}
                                        classes={{
                                            paper: classes.drawerPaper,
                                        }}
                                        onClose={event => setOpen(false)}
                                    >
                                        <div className={classes.drawerHeader}>
                                            {logo &&
                                            <ListItemAvatar>
                                                <Avatar src={logo} variant={"rounded"}/>
                                            </ListItemAvatar>
                                            }
                                            <ListItemText
                                                primary={name}
                                                secondary={version}
                                                primaryTypographyProps={{variant: "h6", noWrap: true}}
                                                secondaryTypographyProps={{noWrap: true}}
                                                className={classes.version}
                                            />
                                            <IconButton onClick={handleDrawerClose}>
                                                {theme.direction === 'ltr' ? <ChevronLeftIcon/> : <ChevronRightIcon/>}
                                            </IconButton>
                                        </div>
                                        <Divider/>
                                        {content.menu}
                                    </Drawer>
                                    <main
                                        className={clsx(classes.content, {
                                            [classes.contentShift]: isWidthUp("md", width) ? open : true,
                                        })}
                                    >
                                        <div className={classes.drawerHeader}/>
                                        <PagesGroup name={"root"} getData={(group) => {
                                            setAutoMenuData(group)
                                        }}>
                                            {content.pages}
                                        </PagesGroup>
                                    </main>
                                </div>
                            </MenuContext.Provider>
                        </Route>
                    </Switch>
                </HelmetProvider>
            </SearchContext.Provider>
        </LangContext.Provider>
    );
});

DocsLayoutF.defaultProps = {
    noGenerateAutoSearch: false,
    noSearchField: false,
    noLanguageSelector: false,
    actions: [],
}

DocsLayoutF.propTypes = {
    // DocsLayoutProps
    searchData: PropTypes.arrayOf(SearchDataItemValidator),
    noGenerateAutoSearch: PropTypes.bool,
    defaultLang: LangValidator,
    langs: PropTypes.arrayOf(LangValidator),
    onHelpToTranslate: PropTypes.func,
    autoMenu: PropTypes.bool,
    autoMenuDense: PropTypes.bool,
    noSearchField: PropTypes.bool,
    noLanguageSelector: PropTypes.bool,
    actions: PropTypes.arrayOf(AppBarActionValidator),
    author: PropTypes.string,
    keywords: PropTypes.arrayOf(PropTypes.string),
    description: PropTypes.string,
    name: PropTypes.string,
    version: PropTypes.string,
    logo: PropTypes.string,
}

const DocsLayout = withWidth()(DocsLayoutF);

const generateClassName = createGenerateClassName({
    productionPrefix: 'MaterialDocs',
});

const DocsLayoutProviders = React.forwardRef(function DocsLayoutProviders(props, ref) {
    const {
        mask,
        router = "browser-router",
        basename,
        ...other
    } = props;
    const routeMask = typeof mask === "string" ? mask : "(/*page)";

    const providers = (
        <ChangeRouteProvider routeMask={routeMask}>
            <MuiThemeProvider theme={DefaultTheme}>
                <StylesProvider generateClassName={generateClassName}>
                    <SnackbarProvider
                        maxSnack={3}
                        anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "center",
                        }}
                    >
                        <DocsLayout {...other} ref={ref}/>
                    </SnackbarProvider>
                </StylesProvider>
            </MuiThemeProvider>
        </ChangeRouteProvider>
    );

    return (
        <React.Fragment>
            {router === "browser-router" &&
            <BrowserRouter basename={basename}>
                {providers}
            </BrowserRouter>
            }
            {router === "hash-router" &&
            <HashRouter basename={basename}>
                {providers}
            </HashRouter>
            }
        </React.Fragment>
    );
});

DocsLayoutProviders.displayName = displayName;

DocsLayoutProviders.defaultProps = {
    router: "browser-router",
    mask: "/(*page)",
}

DocsLayoutProviders.propTypes = {
    // DocsLayoutProps
    mask: PropTypes.string,
    router: PropTypes.oneOf(["hash-router", "browser-router"]),
    basename: PropTypes.string,
}

export default withStyles({}, {name: displayName})(DocsLayoutProviders);
