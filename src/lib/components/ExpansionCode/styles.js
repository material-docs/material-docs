/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    collapsedCode: {
        height: "100%",
        overflow: "auto",
    },
    collapse: {
        marginTop: 0,
    },
    toolbar: {
        padding: 0,
        flexDirection: "row-reverse",
    },
    codeName: {
        flexGrow: 1,
    }
}));