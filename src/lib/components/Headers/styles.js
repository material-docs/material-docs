/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import {makeStyles} from "@material-ui/core/styles";
import {grey} from "@material-ui/core/colors";

export const useStyles = makeStyles((theme) => ({
    root: {},
    container: {
        position: "relative",
    },
    tagHook: {
        position: "absolute",
        left: -25,
        top: "10%",
        color: grey[600],
        display: "none",
        padding: 20,
        paddingTop: 0,
        paddingLeft: 0,
        "&:hover": {
            color: grey[700],
            display: "block",
        },
    },
    anchor: {
        "&:target": {
            paddingTop: 64,
            marginTop: -64,
        },
        "&:hover $tagHook": {
            display: "block",
        }
    },
    divider: {
        marginBottom: theme.spacing(1),
    }
}));