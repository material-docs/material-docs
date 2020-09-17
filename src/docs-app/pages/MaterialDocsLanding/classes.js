/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import {makeStyles} from "@material-ui/core/styles";
import grey from "@material-ui/core/colors/grey";
import blue from "@material-ui/core/colors/blue";

export const useStyles = makeStyles(theme => ({
    banner: {
        height: "100vh",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    bannerBlock: {
        width: "70%",
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
    },
    bannerImage: {
        width: "100%",
    },
    cardBox: {
        height: "100%",
    },
    card: {
        height: `calc(100% - ${theme.spacing(4)}px)`,
        background: grey[100],
    },
    filled: {
        background: "rgba(255, 255, 255, 1)",
        borderTop: `2px solid ${grey[200]}`,
        borderBottom: `2px solid ${grey[200]}`,
        padding: theme.spacing(1),
    },
    textRegular: {
        fontSize: 20,
    },
    footer: {
        background: grey[900],
        borderTop: `${theme.spacing(1)}px solid ${grey[800]}`,
        color: grey[500],
        "& a": {
            color: theme.palette.common.white,
        }
    },
    demoImagesContainer: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
    },
    demoImageBox: {
        display: "inline-block",
        [theme.breakpoints.down("md")]: {
            flexGrow: 1,
            paddingLeft: theme.spacing(3),
            paddingRight: theme.spacing(3),
        },
    },
    demoImage: {
        border: `2px solid ${grey[200]}`,
        [theme.breakpoints.down("md")]: {
            height: "auto",
            width: "100%",
        },
        [theme.breakpoints.up("md")]: {
            height: 200,
        }
    },
    getStartedButton: {
        color: blue[100],
        fontSize: theme.typography.h4.fontSize,
    }
}));