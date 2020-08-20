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
import useLang from "../../hooks/useLang";
import clsx from "clsx";


function LanguageSelector({className, style, ...props}, ref) {
    const classes = {...useStyles(), ...props.classes};
    const {langs, lang, switchLang, onHelpToTranslate} = useLang();
    const [opened, setOpened] = React.useState(false);
    const buttonRef = React.useRef(null);

    if (onHelpToTranslate && typeof onHelpToTranslate !== "function")
        throw new TypeError(`MaterialDocs: incorrect type of onHelpToTranslate, expected function, got ${typeof onHelpToTranslate}`);

    if (!lang) return null;

    return (
        <React.Fragment>
            <Button
                className={clsx(classes.root. className)}
                color={"inherit"}
                ref={reference => {
                    buttonRef.current = reference;
                    ref = reference;
                }}
                onClick={event => setOpened(true)}
                style={style}
            >
                <TranslateIcon/>
                {lang.label}
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
                {onHelpToTranslate && <Divider/>}
                {onHelpToTranslate &&
                <MenuItem
                    onClick={onHelpToTranslate}
                >
                    Help to translate
                </MenuItem>
                }
            </Menu>
        </React.Fragment>
    );
}

export default React.forwardRef(LanguageSelector);