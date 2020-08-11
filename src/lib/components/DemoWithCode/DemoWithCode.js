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
import Paper from "@material-ui/core/Paper";

function DemoWithCode({children, defaultExpanded, code, name, theme, noTag = false, paperContainer = false, actions, ...props}, ref) {
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
                {!paperContainer && children}
                {paperContainer &&
                <Paper elevation={0} variant={"outlined"} className={classes.paperContainer}>
                    {children}
                </Paper>
                }
            </Box>
            <Toolbar className={classes.toolbar}>
                {actions &&
                <React.Fragment>
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
                        {actions.map(action =>
                            <a
                                className={classes.menuButtonLink}
                                key={`menu-item-${action.label} ${action.link}`}
                                href={action.link}
                            >
                                <MenuItem button>
                                    {action.label}
                                </MenuItem>
                            </a>
                        )}

                    </Menu>
                </React.Fragment>
                }
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