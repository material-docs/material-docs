import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
    root: {
        margin: 0,
        overflowX: "auto",
        position: "relative",
    },
    highlighterContainer: {
        position: "absolute",
        left: 0,
        top: 0,
    }
}));
