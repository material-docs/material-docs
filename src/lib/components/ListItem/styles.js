/*
 * Author: Danil Andrieiev | danssg08@gmail.com |  https://github.com/DanilAndreev
 *  Copyright (c) 2020.
 */

import {makeStyles} from "@material-ui/core/styles";
import {grey} from "@material-ui/core/colors";

export const useStyles = makeStyles((theme) => ({
    root: {},
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
    list: {
       margin: 0,
       padding: 0,
    }
}));