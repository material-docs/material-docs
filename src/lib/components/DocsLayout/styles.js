/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import {createStyles} from "@material-ui/styles";

const drawerWidth = 300;

export const styles = theme => createStyles({
    root: {
        display: 'flex',
        letterSpacing: "0.01em",
    },
    appBar: {
        backgroundColor: theme.palette.type === "light" ? theme.palette.primary : theme.palette.primary.dark,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    drawer: {
        // width: drawerWidth,
        maxWidth: drawerWidth,
        width: "100%",
        flexShrink: 0,
    },
    drawerPaper: {
        // width: drawerWidth,
        maxWidth: drawerWidth,
        width: "100%",
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: 0,
        paddingTop: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
    headerText: {
        flexGrow: 1,
    },
    toolbar: {
        color: theme.palette.common.white,
    },
    headerIcon: {
        color: theme.palette.common.white,
    },
    version: {
        flexGrow: 1,
    }
});