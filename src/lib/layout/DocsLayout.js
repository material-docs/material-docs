/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from 'react';
import clsx from 'clsx';
import {useTheme} from '@material-ui/core/styles';
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
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {ChangeRouteProvider} from "routing-manager";
import DocsMenu from "../components/DocsMenu";
import DocsPages from "../components/DocsPages";
import {ThemeProvider as MuiThemeProvider} from '@material-ui/core/styles';
import {SnackbarProvider} from "notistack";
import GitHubIcon from '@material-ui/icons/GitHub';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import SearchField from "../components/SearchField";
import LanguageSelector from "../components/LanguageSelector";

const SearchContext = React.createContext({
    /**
     * addSearchItem - adds SearchDataItem to storage.
     * @function
     * @param {SearchDataItem} item
     */
    addSearchItem: (item) => {
    },
    /**
     * removeSearchItem - removes SearchDataItem to storage.
     * @function
     * @param {SearchDataItem} item
     */
    removeSearchItem: (item) => {
    },
    /**
     * getSearchData - returns search data list.
     * @type SearchDataItem[]
     */
    getSearchData: () => {
    }
});

const LangContext = React.createContext({
    /**
     * switchLang - function, designed to change language settings.
     * @function
     * @param {Lang} lang
     * @async
     */
    switchLang: async (lang) => {
    },
    /**
     * lang - currently selected language.
     * @type Lang
     */
    lang: null,
    /**
     * langs - array of all available langs.
     * @type Lang[]
     */
    langs: [],
});

const DocsLayout = React.forwardRef(({children, noGenerateAutoSearch = false, defaultLang, langs, ...props}, ref) => {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(true);
    const [content, setContent] = React.useState({pages: [], menu: []});
    const [searchData, setSearchData] = React.useState(props.searchData ? new Set(props.searchData) : new Set());
    const [lang, setLang] = React.useState(null);

    async function switchLang(inputLang) {
        let newLang = inputLang;
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
            newLang.locale = locale;
        } else {
            if (lang) {
                newLang.locale = {...lang.locale, ...inputLang.locale};
            }
        }
        setLang(newLang);
    }

    React.useEffect(() => {
        defaultLang && switchLang(defaultLang).then();
    }, [defaultLang]);

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

    function getMenuFromChildren() {
        const candidates = React.Children.map(children, candidate => candidate.type === DocsMenu ? candidate : undefined);
        if (candidates.length > 1) throw new TypeError("DocsLayout: layout can contain only one menu"); //TODO: change to quantity error
        const menu = candidates[0] && candidates[0].props.children;
        return menu || null;
    }

    function getPagesFromChildren() {
        const candidates = React.Children.map(children, candidate => candidate.type === DocsPages ? candidate : undefined);
        if (candidates.length > 1) throw new TypeError("DocsLayout: layout can contain only one pages block"); //TODO: change to quantity error
        const menu = candidates[0] && candidates[0].props.children;
        return menu || null;
    }

    React.useEffect(() => {
        setContent({
            menu: getMenuFromChildren(),
            pages: getPagesFromChildren(),
        });
    }, [children]);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <LangContext.Provider value={{lang, switchLang, langs}}>
            <SearchContext.Provider value={{addSearchItem, removeSearchItem, getSearchData}}>
                <div className={classes.root} ref={ref}>
                    <CssBaseline/>
                    <AppBar
                        position="fixed"
                        className={clsx(classes.appBar, {
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
                                MUI Flexible Table Wiki
                            </Typography>
                            <SearchField searchData={getSearchData()}/>
                            <LanguageSelector/>
                            <IconButton>
                                <GitHubIcon className={classes.headerIcon}/>
                            </IconButton>
                            <IconButton>
                                <Brightness4Icon className={classes.headerIcon}/>
                            </IconButton>
                        </Toolbar>
                    </AppBar>
                    <Drawer
                        className={classes.drawer}
                        variant="persistent"
                        anchor="left"
                        open={open}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                    >
                        <div className={classes.drawerHeader}>
                            <IconButton onClick={handleDrawerClose}>
                                {theme.direction === 'ltr' ? <ChevronLeftIcon/> : <ChevronRightIcon/>}
                            </IconButton>
                        </div>
                        <Divider/>
                        {content.menu}
                    </Drawer>
                    <main
                        className={clsx(classes.content, {
                            [classes.contentShift]: open,
                        })}
                    >
                        <div className={classes.drawerHeader}/>
                        {/*<Switch>*/}
                        {/*</Switch>*/}
                        {content.pages}
                    </main>
                </div>
            </SearchContext.Provider>
        </LangContext.Provider>
    );
});

function DocsLayoutProviders({mask, ...props}, ref) {
    const routeMask = typeof mask === "string" ? mask : "/:page";

    return (
        <Router>
            <ChangeRouteProvider routeMask={routeMask}>
                <MuiThemeProvider>
                    <SnackbarProvider
                        maxSnack={3}
                        anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "center",
                        }}
                    >
                        <DocsLayout {...props} ref={ref}/>
                    </SnackbarProvider>
                </MuiThemeProvider>
            </ChangeRouteProvider>
        </Router>
    );
}

export default React.forwardRef(DocsLayoutProviders);
export const useSearch = () => React.useContext(SearchContext);
export const useLang = () => React.useContext(LangContext);