/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import {useStyles} from "./styles";
import Box from '@material-ui/core/Box';
import Code from "../Code/Code";
import Collapse from "@material-ui/core/Collapse";
import copyToClipboard from "../../utils/copyToClipboard";
import {H1, H2, H3} from "../Headers";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
// Material UI Icons
import CodeIcon from '@material-ui/icons/Code';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {useSnackbar} from "notistack";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

function DemoWithCode({children, defaultExpanded, code, name, theme, noTag, ...props}, ref) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(!!defaultExpanded);
    const menuAnchor = React.useRef(null);
    const [menuOpen, setMenuOpen] = React.useState(false);
    const {enqueueSnackbar} = useSnackbar();

    return (
        <Box>
            {name &&
                <H3 noDivider noTag={noTag}>{name}</H3>
            }
            <Box>
                {children}
            </Box>
            <Toolbar className={classes.toolbar}>
                <IconButton ref={menuAnchor} onClick={event => setMenuOpen(true)}>
                    <MoreVertIcon fontSize={"small"}/>
                </IconButton>
                <Menu
                    anchorEl={menuAnchor.current}
                    getContentAnchorEl={null}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    keepMounted
                    open={menuOpen}
                    onClose={event => setMenuOpen(false)}
                >
                    <MenuItem button>Profile1</MenuItem>
                    <MenuItem button>Profile2</MenuItem>
                    <MenuItem button>Profile3</MenuItem>
                </Menu>
                <IconButton
                    onClick={() => {
                        copyToClipboard(code)
                            .then(res => enqueueSnackbar("Code copied to clipboard", {variant: "success"}))
                            .catch(error => enqueueSnackbar("Failed to copy code to clipboard", {variant: "error"}));
                    }}
                >
                    <FileCopyIcon fontSize={"small"}/>
                </IconButton>
                <IconButton onClick={event => setExpanded(!expanded)}>
                    <CodeIcon fontSize={"small"}/>
                </IconButton>
            </Toolbar>
            <Collapse in={expanded}>
                <Code theme={theme}>
                    {code || ""}
                </Code>
            </Collapse>
        </Box>
    );
}

export default React.forwardRef(DemoWithCode);