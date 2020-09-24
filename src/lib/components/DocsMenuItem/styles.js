/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import {createStyles} from "@material-ui/core/styles";
import {grey} from "@material-ui/core/colors";

export const styles = theme => createStyles({
    root: {},
    highlighted: {
        backgroundColor: theme.palette.type === "dark" ? "rgba(224, 224, 224, 0.2)" : grey[300],
        "&:hover": {
            backgroundColor: theme.palette.type === "dark" ? "rgba(224, 224, 224, 0.2)" : grey[300],
        }
    },
    collapse: {
//        paddingLeft: theme.spacing(4),
    },
});