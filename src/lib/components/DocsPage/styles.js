/*
 * Author: Danil Andrieiev | danssg08@gmail.com |  https://github.com/DanilAndreev
 *  Copyright (c) 2020.
 */

import {makeStyles} from "@material-ui/core/styles";
import {grey} from "@material-ui/core/colors";

export const useStyles = makeStyles((theme) => ({
    root: {},
    contentItem: {
        borderLeft: "5px solid rgba(0,0,0,0)",
        "&:hover": {
            borderColor: grey[300],
        }
    },
    contentItemActive: {
        borderColor: grey[200],
    },
    contentLink: {
        textDecoration: "none",
        color: "inherit",
    }
}));