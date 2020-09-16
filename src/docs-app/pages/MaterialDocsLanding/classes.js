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
        height: "100%",
        background: grey[100],
    },
    filled: {
        background: theme.palette.common.white,
    },
    textRegular: {
        fontSize: 20,
    }
}));