/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import {makeStyles} from "@material-ui/core/styles";
import {grey} from "@material-ui/core/colors";

export const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(0.5),
        paddingBottom: 0,
        paddingTop: theme.spacing(1),
        fontSize: "1rem",
        fontWeight: 400,
        letterSpacing: "0.00938em",
    },
    typeCircle: {
        listStyleType: "circle",
    },
    typeSquare: {
        listStyleType: "square",
    },
    typeRoman: {
        listStyleType: "upper-roman",
    },
    typeAlpha: {
        listStyleType: "lower-alpha",
    },
    typeNone: {
        listStyle: "none",
    },
    list: {
        paddingLeft: theme.spacing(2),
    },
    dense: {
        padding: theme.spacing(0.3),
        paddingLeft: theme.spacing(0.5),
        paddingTop: theme.spacing(0.4),
    }
}));