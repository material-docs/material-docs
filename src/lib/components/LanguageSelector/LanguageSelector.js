/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import {useStyles} from "./styles";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Button from "@material-ui/core/Button";

import TranslateIcon from '@material-ui/icons/Translate';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import Divider from "@material-ui/core/Divider";
import {useLang} from "../../layout/DocsLayout";


function LanguageSelector({...props}, ref) {
    const classes = useStyles();
    const {langs, lang, switchLang} = useLang();
    const [opened, setOpened] = React.useState(false);
    const buttonRef = React.useRef(null);

    if (!lang) return null;

    return (
        <React.Fragment>
            <Button
                className={classes.root}
                color={"inherit"}
                ref={reference => {
                    buttonRef.current = reference;
                    ref = reference;
                }}
                onClick={event => setOpened(true)}
            >
                <TranslateIcon/>
                English
                <KeyboardArrowDownIcon/>
            </Button>
            <Menu
                anchorEl={buttonRef.current}
                getContentAnchorEl={null}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                keepMounted
                open={opened}
                onClose={event => setOpened(false)}
            >
                {langs.map(item =>
                    <MenuItem
                        key={item.name}
                        onClick={event => {
                            switchLang(item).then();
                            setOpened(false);
                        }}
                    >
                        {item.label}
                    </MenuItem>
                )}
                <Divider/>
                <MenuItem>Help to translate</MenuItem>
            </Menu>
        </React.Fragment>
    );
}

export default React.forwardRef(LanguageSelector);