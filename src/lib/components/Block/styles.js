/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import {makeStyles} from "@material-ui/core/styles";
import {grey} from "@material-ui/core/colors";

export const useStyles = makeStyles((theme) => ({
    root: {
        borderLeft: `5px solid ${grey[400]}`,
        backgroundColor: grey[200],
        padding: theme.spacing(1),
        paddingLeft: theme.spacing(2),
    },
    colorLight: {
        backgroundColor: grey[200],
    },
    colorDark: {
        backgroundColor: grey[400],
    }
}));