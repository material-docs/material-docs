/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

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
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import {H3} from "../Headers";
import {useCommonStyles} from "../../stylesheets/commonStyles";


//TODO: finish
export default function ExpansionCode({theme, language, children, name, noTag, style, className, demoCode = '', actions, ...props}) {
    const classes = {...useStyles(), ...props.classes};
    const commonClasses = useCommonStyles();
    const {enqueueSnackbar} = useSnackbar();
    const [expanded, setExpanded] = React.useState(true);
    const [expand, setExpand] = React.useState(true);
    const [code, setCode] = React.useState(demoCode);
    const menuAnchor = React.useRef(null);
    const [menuOpen, setMenuOpen] = React.useState(false);

    return (
        <Box className={clsx(classes.root, commonClasses.pageBlock, className)} style={style}>
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
                        copyToClipboard(children)
                            .then(res => enqueueSnackbar("Code copied to clipboard", {variant: "success"}))
                            .catch(error => enqueueSnackbar("Failed to copy code to clipboard", {variant: "error"}));
                    }}
                >
                    <FileCopyIcon fontSize={"small"}/>
                </IconButton>
                <IconButton onClick={event => setExpand(!expand)}>
                    <CodeIcon fontSize={"small"}/>
                </IconButton>
                {name &&
                <H3 className={classes.codeName} noDivider>{name}</H3>
                }
            </Toolbar>
            <Collapse
                in={expand}
                collapsedHeight={"600px"}
                onExit={() => {
                    setCode(children);
                    setExpanded(true);
                }}
                onEntered={() => {
                    setCode(demoCode);
                    setExpanded(false);
                }}
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