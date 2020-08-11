/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import {makeStyles} from "@material-ui/core/styles";
import {grey} from "@material-ui/core/colors";

export const useStyles = makeStyles((theme) => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 250,
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    icon: {
        margin: theme.spacing(1),
        marginTop: theme.spacing(0.5),
        marginBottom: theme.spacing(0.5),
        color: theme.palette.text.secondary,
    },
    iconClickable: {
        "&:hover": {
            color: theme.palette.text.primary,
            cursor: "pointer",
        },
    }
}));