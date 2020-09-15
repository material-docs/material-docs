/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import { createMuiTheme } from '@material-ui/core/styles';
import blue from "@material-ui/core/colors/blue";
import red from "@material-ui/core/colors/red";

const DefaultTheme = createMuiTheme({
    palette: {
        primary: {
            main: blue[700],
        },
        secondary: {
            main: red[600],
        },
    },
    components: {
        MatDocBlock: {
            defaultProps: {
                color: "light",
            }
        }
    }
});

export default DefaultTheme;
