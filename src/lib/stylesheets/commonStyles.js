/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import {makeStyles} from "@material-ui/core/styles";

export const useCommonStyles = makeStyles(
    theme => ({
        pageBlock: {
            marginBottom: theme.spacing(3),
            marginTop: theme.spacing(1),
        }
    }),
    {
        name: "Md-System"
    }
);
