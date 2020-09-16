/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
    banner: {
        height: "100vh",
        position: "relative",
        backgroundImage: "url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRmPgtMdJOCvILdhJ48Be05sstKtFElZbX27w&usqp=CAU)",
        backgroundRepeat: "no-repeat, no-repeat",
        backgroundSize: "cover",
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
    }
}));