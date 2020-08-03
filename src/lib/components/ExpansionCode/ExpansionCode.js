import React from "react";
import Collapse from "@material-ui/core/Collapse";
import Box from "@material-ui/core/Box";
import Code from "../Code";
import clsx from "clsx";
import {useStyles} from "./styles";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import copyToClipboard from "../../utils/copyToClipboard";
// Material UI Icons
import CodeIcon from '@material-ui/icons/Code';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {useSnackbar} from "notistack";

export default function ExpansionCode({theme, language, children, demoCode = ''}) {
    const {enqueueSnackbar} = useSnackbar();
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(true);
    const [code, setCode] = React.useState(demoCode);


    return (
        <Box>
            <Toolbar className={classes.toolbar}>
                <IconButton>
                    <MoreVertIcon fontSize={"small"}/>
                </IconButton>
                <IconButton
                    onClick={() => {
                        copyToClipboard(children);
                        enqueueSnackbar("Code copied to clipboard", {variant: "success"});
                    }}
                >
                    <FileCopyIcon fontSize={"small"}/>
                </IconButton>
                <IconButton onClick={event => setExpanded(!expanded)}>
                    <CodeIcon fontSize={"small"}/>
                </IconButton>
            </Toolbar>
            <Collapse
                in={expanded}
                collapsedHeight={"600px"}
                onExit={() => setCode(children)}
                onEnter={() => setCode(demoCode)}
                style={{minHeight: 0}}
                className={classes.collapse}
            >
                <div className={clsx(!expanded && classes.collapsedCode)}>
                    <Code theme={theme} language={language}>
                        {code}
                    </Code>
                </div>
            </Collapse>
        </Box>
    );
}