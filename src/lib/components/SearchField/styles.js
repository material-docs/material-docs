/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import {createStyles, makeStyles} from "@material-ui/core/styles";
import {grey} from "@material-ui/core/colors";

const width = 250;
const focusWidth = 300;

export const styles = theme => createStyles({
    root: {
        transition: "width 0.2s",
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: width,
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        backgroundColor: "rgba(255,255,255,0.1)",
        "&:hover": {
            backgroundColor: "rgba(255,255,255,0.15)",
        }
    },
    rootFocused: {
        width: focusWidth,
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
        color: theme.palette.common.white,
    },
    iconButton: {
        padding: 10,
    },
    icon: {
        margin: theme.spacing(1),
        marginTop: theme.spacing(0.5),
        marginBottom: theme.spacing(0.5),
        color: theme.palette.common.white,
    },
    iconClickable: {
        "&:hover": {
            color: grey[400],
            cursor: "pointer",
        },
        "&:active": {
            color: grey[500],
            cursor: "pointer",
        },
    },
    popper: {
        maxWidth: 550,
        minWidth: focusWidth,
    },
    listPaper: {
        marginTop: theme.spacing(2),
        maxHeight: "70vh",
        overflowY: "auto",
        width: 420,
    },
});