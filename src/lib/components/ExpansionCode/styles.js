/*
 * Author: Danil Andrieiev | danssg08@gmail.com |  https://github.com/DanilAndreev
 *  Copyright (c) 2020.
 */

import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    collapsedCode: {
        height: "600px",
        overflow: "auto",
    },
    collapse: {
        marginTop: 0,
    },
    toolbar: {
        padding: 0,
        flexDirection: "row-reverse",
    }
}));