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
        backgroundColor: "rgba(255,255,255,0.1)",
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
    }
}));