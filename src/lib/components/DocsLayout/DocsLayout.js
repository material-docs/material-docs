/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import {styles} from "./styles"
// Components
import {Helmet, HelmetProvider} from "react-helmet-async";
import SearchField from "../SearchField";
import LanguageSelector from "../LanguageSelector";
import {BrowserRouter, HashRouter, Route, Switch, useHistory} from "react-router-dom";
import {SnackbarProvider} from "notistack";
import PagesGroup from "../PagesGroup";
import Link from "../Link/Link";
// Themes
import DefaultTheme from "../../theme/DefaultTheme";
// MaterialUI components
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Avatar from "@material-ui/core/Avatar";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Box from "@material-ui/core/Box";
import ListItemText from "@material-ui/core/ListItemText";
import Tooltip from "@material-ui/core/Tooltip";
// Utils
import clsx from 'clsx';
import {ThemeProvider as MuiThemeProvider, useTheme} from '@material-ui/core/styles';
import getChildrenFromContainer from "../../utils/getChildrenFromContainer";
import getContainerByType from "../../utils/getContainerByType";
import generateHeaderIcon from "./generateHeaderIcon";
import {isWidthDown, isWidthUp, unstable_createMuiStrictModeTheme, withWidth} from "@material-ui/core";
import {MenuContext} from "../../hooks/useMenu/useMenu";
import {createGenerateClassName, StylesProvider, withStyles} from "@material-ui/styles";
import {ChangeRouteProvider, useChangeRoute} from "routing-manager";
import {useLang} from "../../hooks";
import {getFieldFromLang} from "../../utils";
import {MaterialDocsSystemContext} from "../../hooks/useMaterialDocsSystem";
import withLangSetup from "./withLangSetup";
import withSearchSetup from "./withSearchSetup";
import withLocalLang from "../../HOCs/withLocalLang";
import goToPage from "../../utils/goToPage";
import {SwitchPageContext} from "../../hooks/useSwitchPage/useSwitchPage";
import * as _ from "lodash";
// MaterialUI icons
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import BrightnessHighIcon from '@material-ui/icons/BrightnessHigh';
/// PropTypes validators
import PropTypes from "prop-types";
import AppBarActionValidator from "../../validators/AppBarActionValidator";
import SearchDataItemValidator from "../../validators/SearchDataItemValidator";
import LangValidator from "../../validators/LangValidator";
// Locale
import DefaultLocale from "../../locale/DefaultLocale";
// The displayNames of the components
import {displayName as DocsPagesDisplayName} from "../DocsPages";
import {displayName as LandingDisplayName} from "../Landing";
import {displayName as DocsMenuDisplayName} from "../DocsMenu";


export const displayName = "MaterialDocs-DocsLayout";

const DocsLayoutF = React.forwardRef((props, ref) => {
    const {
        children,
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
        classes,
        onNameClick,
        onVersionClick,
        getSearchData,
        setTheme,
        ...other
    } = props;
    const theme = useTheme();
    const {getRouteParams, getQueryParams, changeRoute} = useChangeRoute();
    const [open, setOpen] = React.useState(isWidthUp("md", width));
    const [content, setContent] = React.useState({pages: [], menu: null, landing: []});
    const [autoMenuData, setAutoMenuData] = React.useState(null);
    const [themeMode, setThemeMode] = React.useState(localStorage.MaterialDocsThemeMode || "light");
    const {page: routePage} = getRouteParams();
    const queryParams = getQueryParams();
    const history = useHistory();
    const {lang, langs, defaultLang} = useLang();
    const rootRef = React.useRef();

    const noMenu = other.noMenu || queryParams.noMenu || false;
    const noHeader = other.noHeader || queryParams.noHeader || false;
    const builtIn = other.builtIn || queryParams.builtIn || false;

    // Effect for changing theme type
    React.useEffect(() => {
        localStorage.MaterialDocsThemeMode = themeMode;
        const newTheme = _.cloneDeep(DefaultTheme);
        newTheme.palette.type = themeMode;
        setTheme(newTheme);
    }, [themeMode]);

    // Effect for drawer auto open/close on resize
    React.useEffect(() => {
        if (isWidthUp("md", width) && isWidthDown("lg", width)) {
            setOpen(true);
        } else if (isWidthUp("sm", width) && isWidthDown("md", width)) {
            setOpen(false);
        }
    }, [width]);


    // Effect for page scroll reset when changing page.
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [routePage]);


    const getMenuFromChildren = () => {
        const menu = getContainerByType(children, DocsMenuDisplayName);
        if (menu && React.isValidElement(menu))
            return React.cloneElement(menu, {layoutData: autoMenuData});
        return null;
    };

    const getPagesFromChildren = () => getChildrenFromContainer(children, DocsPagesDisplayName) || [];

    const getLanding = () => getChildrenFromContainer(children, LandingDisplayName);

    const switchPage = (page) => goToPage(page, changeRoute);

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

    function handleNameClick(event) {
        if (onNameClick) {
            if (typeof onNameClick === "string" || Array.isArray(onNameClick)) switchPage(onNameClick);
            if (typeof onNameClick === "function") onNameClick(event);
        } else {
            defaultHandleNameClick(event);
        }
    }

    function handleVersionClick(event) {
        if (onVersionClick) {
            if (typeof onVersionClick === "string" || Array.isArray(onVersionClick)) switchPage(onVersionClick);
            if (typeof onVersionClick === "function") onVersionClick(event);
        }
    }

    function defaultHandleNameClick() {
        history.push("/" + history.location.search);
    }

    return (
        <MaterialDocsSystemContext.Provider
            value={{
                autoMenuData,
                author,
                description,
                keywords,
                name,
                version,
                logo,
                noSearchField,
                noLanguageSelector,
                noGenerateAutoSearch: undefined,
                builtIn,
                noHeader,
                noMenu
            }}
        >
            <SwitchPageContext.Provider value={{switchPage, currentPage: null}}>
                <HelmetProvider>
                    <Helmet>
                        <title>{name || "MaterialDocs"}</title>
                        {typeof description === "string" && <meta name="description" content={description}/>}
                        {typeof author === "string" && <meta name="author" content={author}/>}
                        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                        <meta name="theme-color" content={theme.palette.primary}/>
                        {typeof logo === "string" && <meta property="og:image" content={logo}/>}
                        {typeof name === "string" && <meta property="og:title" content={name}/>}
                        {typeof name === "string" && <meta property="og:description" content={description}/>}
                        {Array.isArray(keywords) && <meta name="keywords" content={keywords.join(",")}/>}
                        {defaultLang && <meta property="og:locale" content={defaultLang.name}/>}
                        {typeof name === "string" && <meta property="og:site_name" content={name}/>}
                        {langs && langs.map(translation => <meta key={translation.name} property="og:locale:alternate" content={translation.name}/>)}
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
                                <div
                                    className={classes.root}
                                    ref={(object) => {
                                        if (ref) ref.current = object;
                                        rootRef.current = object;
                                    }}
                                >
                                    <CssBaseline/>
                                    {!noHeader &&
                                    <AppBar
                                        position={builtIn ? "absolute" : "fixed"}
                                        className={clsx(
                                            classes.appBar,
                                            !isWidthDown("md", width) && !noMenu && {
                                                [classes.appBarShift]: open,
                                            }
                                        )}
                                    >
                                        <Toolbar className={classes.toolbar}>
                                            {!noMenu &&
                                            <IconButton
                                                color="inherit"
                                                aria-label="open drawer"
                                                onClick={handleDrawerOpen}
                                                edge="start"
                                                className={clsx(classes.menuButton, open && classes.hide)}
                                            >
                                                <MenuIcon/>
                                            </IconButton>
                                            }
                                            <Typography variant="h6" noWrap className={classes.headerText}>
                                                {name || "Material Docs"}
                                            </Typography>
                                            {!noSearchField && isWidthUp("md", width) &&
                                            <SearchField searchData={getSearchData()}/>
                                            }
                                            {!noLanguageSelector &&
                                            <LanguageSelector
                                                size={isWidthDown("xs", width) ? "small" : "large"}
                                                disabled={!langs}
                                            />
                                            }
                                            {Array.isArray(actions) && actions.map((action, index) =>
                                                generateHeaderIcon(changeRoute, `${index}`, action, classes.headerIcon)
                                            )}
                                            <Tooltip
                                                title={getFieldFromLang(lang, "MaterialDocs/tooltips/switchTheme")}
                                                PopperProps={{popperOptions: {positionFixed: true}}}
                                            >
                                                <IconButton
                                                    onClick={event => setThemeMode(prev => prev === "light" ? "dark" : "light")}
                                                >
                                                    {themeMode === "light" ?
                                                        <Brightness4Icon className={classes.headerIcon}/> :
                                                        <BrightnessHighIcon className={classes.headerIcon}/>
                                                    }
                                                </IconButton>
                                            </Tooltip>
                                        </Toolbar>
                                    </AppBar>
                                    }
                                    {!noMenu &&
                                    <Drawer
                                        className={classes.drawer}
                                        variant={isWidthUp("md", width) ? "persistent" : "temporary"}
                                        anchor="left"
                                        open={open}
                                        BackdropProps={builtIn && { style: { position: "absolute" } }}
                                        PaperProps={builtIn && { style: { position: "absolute"} }}
                                        ModalProps={
                                            {container: builtIn ? rootRef.current : document.body, style: {position: "absolute"}}
                                        }
                                        classes={{
                                            paper: classes.drawerPaper,
                                        }}
                                        onClose={event => setOpen(false)}
                                    >
                                        <div className={classes.drawerHeader}>
                                            {logo &&
                                            <ListItemAvatar>
                                                <Avatar
                                                    src={logo}
                                                    variant={"rounded"}
                                                    onClick={handleNameClick}
                                                />
                                            </ListItemAvatar>
                                            }
                                            <ListItemText
                                                primary={
                                                    name ?
                                                        <Link
                                                            style={{color: "inherit"}}
                                                            onClick={handleNameClick}
                                                        >
                                                            {name}
                                                        </Link> :
                                                        undefined
                                                }
                                                secondary={
                                                    version ?
                                                        <Link
                                                            style={{color: "inherit"}}
                                                            onClick={handleVersionClick}
                                                        >
                                                            {version}
                                                        </Link> :
                                                        undefined

                                                }
                                                primaryTypographyProps={{variant: "h6", noWrap: true}}
                                                secondaryTypographyProps={{noWrap: true}}
                                                className={classes.version}
                                            />
                                            <IconButton onClick={handleDrawerClose}>
                                                {theme.direction === 'ltr' ? <ChevronLeftIcon/> :
                                                    <ChevronRightIcon/>}
                                            </IconButton>
                                        </div>
                                        <Divider/>
                                        {content.menu}
                                    </Drawer>
                                    }
                                    <main
                                        className={clsx(classes.content, {
                                            [classes.contentShift]: isWidthUp("md", width) ? open : true,
                                        })}
                                    >
                                        {!noHeader && <div className={classes.drawerHeader}/>}
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
            </SwitchPageContext.Provider>
        </MaterialDocsSystemContext.Provider>
    );
});

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
    onNameClick: PropTypes.oneOfType([PropTypes.func, PropTypes.arrayOf(PropTypes.string), PropTypes.string]),
    onVersionClick: PropTypes.oneOfType([PropTypes.func, PropTypes.arrayOf(PropTypes.string), PropTypes.string]),
}

const DocsLayout = withSearchSetup(
    withLangSetup(
        withLocalLang(DefaultLocale)(
            withStyles(styles, {name: displayName})(withWidth()(DocsLayoutF))
        )
    )
);

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
    const [theme, setTheme] = React.useState(_.cloneDeep(DefaultTheme));

    const providers = (
        <ChangeRouteProvider routeMask={routeMask}>
            <MuiThemeProvider theme={unstable_createMuiStrictModeTheme(theme)}>
                <StylesProvider generateClassName={generateClassName}>
                    <SnackbarProvider
                        maxSnack={3}
                        anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "center",
                        }}
                    >
                        <DocsLayout {...other} ref={ref} setTheme={setTheme}/>
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
    noGenerateAutoSearch: false,
    noSearchField: false,
    noLanguageSelector: false,
    actions: [],
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
