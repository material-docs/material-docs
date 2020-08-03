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
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import {SnackbarProvider} from "notistack";

function DocsLayout({children}) {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(true);

    function getMenuFromChildren() {
        const candidates =  React.Children.map(children, candidate => candidate.type === DocsMenu ? candidate : undefined);
        if (candidates.length > 1) throw new TypeError("DocsLayout: layout can contain only one menu"); //TODO: change to quantity error
        const menu = candidates[0] && candidates[0].props.children;
        return menu || null;
    }

    function getPagesFromChildren() {
        const candidates =  React.Children.map(children, candidate => candidate.type === DocsPages ? candidate : undefined);
        if (candidates.length > 1) throw new TypeError("DocsLayout: layout can contain only one pages block"); //TODO: change to quantity error
        const menu = candidates[0] && candidates[0].props.children;
        return menu || null;
    }

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const menu = getMenuFromChildren();
    const pages = getPagesFromChildren();

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, open && classes.hide)}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        MUI Flexible Table Wiki
                    </Typography>
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
                {menu}
            </Drawer>
            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: open,
                })}
            >
                <div className={classes.drawerHeader}/>
                <Switch>
                    {pages}
                </Switch>
            </main>
        </div>
    );
}

function PagesSwitch() {
    return (
        <Switch>
            <Route path={'/home'}>

            </Route>
            <Route path={'/flexible-table-api'}>
            </Route>
            {/*<Redirect from={'/'} to={'/home'}/>*/}
        </Switch>
    );
}

export default function DocsLayoutProviders(props) {
    return (
        <Router>
            <ChangeRouteProvider routeMask={':page'}>
                <MuiThemeProvider>
                    <SnackbarProvider
                        maxSnack={3}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center',
                        }}
                    >
                        <DocsLayout {...props}/>
                    </SnackbarProvider>
                </MuiThemeProvider>
            </ChangeRouteProvider>
        </Router>
    );
}