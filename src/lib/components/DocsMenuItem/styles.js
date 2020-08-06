/*
 * Author: Danil Andrieiev | danssg08@gmail.com |  https://github.com/DanilAndreev
 *  Copyright (c) 2020.
 */

import {makeStyles} from "@material-ui/core/styles";
import {grey} from "@material-ui/core/colors";

export const useStyles = makeStyles((theme) => ({
    root: {},
    highlighted: {
        backgroundColor: grey[300],
    },
    collapse: {
        paddingLeft: theme.spacing(4),
    },
}));