/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import {createStyles} from "@material-ui/core/styles";
import {grey} from "@material-ui/core/colors";

export const styles = theme => createStyles({
    root: {},
    contentItem: {
        borderLeft: "5px solid rgba(0,0,0,0)",
        "&:hover": {
            borderColor: grey[300],
        }
    },
    contentItemActive: {
        borderColor: grey[200],
    },
    contentLink: {
        textDecoration: "none",
        color: "inherit",
    },
    copyright: {
        backgroundColor: theme.palette.type === "light" ? theme.palette.whitesmoke : theme.palette.whitesmoke.dark,
        color: theme.palette.type === "light" ? theme.palette.lightgrey.main : theme.palette.lightgrey.dark,
    },
    typography: {
        overflowWrap: "break-word",
        maxWidth: `calc(10vw - ${theme.spacing(2)}px)`,
    }
});