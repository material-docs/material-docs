/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import {createStyles, makeStyles} from "@material-ui/core/styles";
import {grey} from "@material-ui/core/colors";

export const styles = theme => createStyles({
    root: {
    },
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
    },
    h1: {
        fontSize: "2.8rem",
    },
    h2: {
        fontSize: "2.3rem",
    },
    h3: {
        fontSize: "1.8rem",
    },
    h4: {
        fontSize: "1.6rem",
    },
    h5: {
        fontSize: "1.3rem",
    },
    h6: {
        fontSize: "1.1rem",
    },
    typography: {
        overflowWrap: "break-word",
    },
    textBlock: {
        overflowWrap: "break-word",
        maxWidth: `calc(100vw - ${theme.spacing(6)}px)`,
    },
    anchorIcon: {
        transform: "rotate(45deg)",
    },
});
