/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import {makeStyles} from "@material-ui/core/styles";
import grey from "@material-ui/core/colors/grey";

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
    },
    textRegular: {
        fontSize: 20,
    },
    footer: {
        background: grey[900],
        borderTop:`${theme.spacing(1)}px solid ${grey[800]}`,
        color: grey[500],
        "& a": {
            color: theme.palette.common.white,
        }
    }
}));