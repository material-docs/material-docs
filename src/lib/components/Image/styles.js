/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import {createStyles} from "@material-ui/core/styles";

export const styles = theme => createStyles({
    root: {
        position: "relative",
        display: "flex",
    },
    fullWidth: {
        width: "100%",
        flexGrow: 1,
    },
    alignLeft: {},
    alignCenter: {
        justifyContent: "center",
    },
    alignRight: {
        justifyContent: "flex-end",
    },
    frame: {
        border: `3px solid ${theme.palette.type === "light" ? theme.palette.lightgrey.main : theme.palette.lightgrey.dark}`,
    },
    placeholder: {
        position: "absolute",
        top: 0,
        bottom :0,
        left: 0,
        right: 0,
        padding: theme.spacing(3),
        backgroundColor: theme.palette.type === "light" ? theme.palette.whitesmoke.main : theme.palette.whitesmoke.dark,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    progress: {
    },
});