/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    root: {},
    collapse: {
        marginTop: 0,
    },
    toolbar: {
        padding: 0,
        flexDirection: "row-reverse",
        minHeight: 0,
    },
    paperContainer: {
        background: "transparent",
        height: "100%",
        position: "relative",
    },
    menuButtonLink: {
        textDecoration: "none",
        color: "inherit",
    },
    demo: {
        position: "relative",
    }
}));