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
import {HashRouter, BrowserRouter, Switch} from "react-router-dom";
import {ChangeRouteProvider} from "routing-manager";
import DocsMenu from "../components/DocsMenu";
import DocsPages from "../components/DocsPages";
import {ThemeProvider as MuiThemeProvider} from '@material-ui/core/styles';
import {SnackbarProvider} from "notistack";
import GitHubIcon from '@material-ui/icons/GitHub';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import SearchField from "../components/SearchField";
import LanguageSelector from "../components/LanguageSelector";
import PagesGroup from "../components/PagesGroup";
import AutoDocsMenu from "../components/AutoDocsMenu";
import {LangContext} from "../hooks/useLang/useLang"
import {SearchContext} from "../hooks/useSearch/useSearch";
import * as _ from "lodash";
import {isWidthDown, isWidthUp, List, withWidth} from "@material-ui/core";


const DocsLayout = withWidth()(React.forwardRef(({
                                                   children,
                                                   noGenerateAutoSearch = false,
                                                   defaultLang,
                                                   langs,
                                                   onHelpToTranslate,
                                                   autoMenu = false,
                                                   autoMenuDense = false,
                                                   width,
                                                   ...props
                                               }, ref) => {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(true);
    const [content, setContent] = React.useState({pages: [], menu: []});
    const [searchData, setSearchData] = React.useState(props.searchData ? new Set(props.searchData) : new Set());
    const [lang, setLang] = React.useState(null);
    const [autoMenuData, setAutoMenuData] = React.useState({});

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
        <LangContext.Provider value={{lang, switchLang, langs, onHelpToTranslate}}>
            <SearchContext.Provider value={{addSearchItem, removeSearchItem, getSearchData}}>
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
                                MUI Flexible Table Wiki
                            </Typography>
                            {isWidthUp("md", width) && <SearchField searchData={getSearchData()}/>}
                            <LanguageSelector size={isWidthDown("xs", width) ? "small" : "large"}/>
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
                        variant={isWidthUp("md", width) ? "persistent" : "temporary"}
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
                        {autoMenu ?
                            <List dense={autoMenuDense}><AutoDocsMenu layoutData={autoMenuData}/></List> : content.menu}
                    </Drawer>
                    <main
                        className={clsx(classes.content, {
                            [classes.contentShift]: isWidthUp("md", width) ? open : true,
                        })}
                    >
                        <div className={classes.drawerHeader}/>
                        {/*<Switch>*/}
                        {/*</Switch>*/}
                        <PagesGroup name={"root"} getData={(group) => {
                            setAutoMenuData(group)
                        }}>
                            {content.pages}
                        </PagesGroup>
                    </main>
                </div>
            </SearchContext.Provider>
        </LangContext.Provider>
    );
}));

function DocsLayoutProviders({mask, router = "browser-router", basename, ...props}, ref) {
    const routeMask = typeof mask === "string" ? mask : "/:page";
    const theme = useTheme();

    const providers = (
        <ChangeRouteProvider routeMask={routeMask}>
            <MuiThemeProvider theme={theme}>
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
}

export default React.forwardRef(DocsLayoutProviders);
