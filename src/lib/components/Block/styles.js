/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import {createStyles} from "@material-ui/core/styles";
import {grey} from "@material-ui/core/colors";

export const styles = theme => createStyles({
    root: {
        borderLeft: `5px solid ${theme.palette.type === "light" ? theme.palette.lightgrey.main : theme.palette.lightgrey.dark}`,
        backgroundColor: grey[200],
        padding: theme.spacing(1),
        paddingLeft: theme.spacing(2),
    },
    colorLight: {
        backgroundColor: theme.palette.type === "light" ? theme.palette.whitesmoke : theme.palette.whitesmoke.dark,
    },
    colorDark: {
        backgroundColor: grey[400],
    }
});