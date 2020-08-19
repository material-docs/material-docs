/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import {makeStyles} from "@material-ui/core/styles";
import {grey, yellow} from "@material-ui/core/colors";

export const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: yellow[100],
        padding: theme.spacing(0.4),
    },
    font: {
        fontFamily: "monospace",
        fontWeight: 500,
    }
}));
