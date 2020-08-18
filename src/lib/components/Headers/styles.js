/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import {makeStyles} from "@material-ui/core/styles";
import {grey} from "@material-ui/core/colors";

export const useStyles = makeStyles((theme) => ({
    root: {},
    container: {
        marginTop:  theme.spacing(1),
        marginBottom: theme.spacing(0.5),
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
    },
    h1: {
        fontSize: "2.8rem",
    },
    h2: {
        fontSize: "2rem",
    },
    h3: {
        fontSize: "1.5rem",
    },
    h4: {
        fontSize: "1.2rem",
    },
    h5: {
        fontSize: "0.9rem",
    },
    h6: {
        fontSize: "0.6rem",
    },
}));
