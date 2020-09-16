/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import {createStyles, makeStyles} from "@material-ui/core/styles";

export const styles = theme => createStyles({
    root: {},
    collapse: {
        marginTop: 0,
        maxHeight: 600,
        overflowY: "auto",
    },
    toolbar: {
        padding: 0,
        flexDirection: "row-reverse",
        minHeight: 0,
        paddingTop: theme.spacing(2),
    },
    codeName: {
        flexGrow: 1,
    },
    menuButtonLink: {
        textDecoration: "none",
        color: "inherit",
    },
});