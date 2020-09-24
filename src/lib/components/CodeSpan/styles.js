/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import {createStyles} from "@material-ui/core/styles";
import {grey, yellow} from "@material-ui/core/colors";

export const styles = theme => createStyles({
    root: {
        padding: theme.spacing(0.4),
        borderRadius: theme.spacing(0.4),
    },
    colorDefault: {
        backgroundColor: theme.palette.type === "light" ? theme.palette.codeSpanBg.main : theme.palette.codeSpanBg.dark,
    },
    colorPrimary: {
        backgroundColor: theme.palette.primary.light,
    },
    colorSecondary: {
        backgroundColor: theme.palette.secondary.light,
    },
    colorGrey: {
        backgroundColor: grey[200],
    },
    font: {
        fontFamily: "monospace",
        fontWeight: 500,
        fontSize: "inherit",
    },
    textInherit: {
        color: "inherit",
    },
    textWhite: {
        color: theme.palette.common.white,
    },
    textBlack: {
        color: theme.palette.common.black,
    },
});
