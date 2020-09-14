/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import {styles} from "./styles";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Button from "@material-ui/core/Button";

import TranslateIcon from '@material-ui/icons/Translate';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import Divider from "@material-ui/core/Divider";
import useLang from "../../hooks/useLang";
import clsx from "clsx";
import PropTypes from "prop-types";
import Tooltip from "@material-ui/core/Tooltip";
import useTheme from "@material-ui/core/styles/useTheme";
import {withStyles} from "@material-ui/styles";


const LanguageSelector = React.forwardRef(function LanguageSelector(props, ref) {
    const theme = useTheme();
    const {
        className,
        style,
        size = "large",
        classes,
        ...other
    } = {...theme.props.MDLanguageSelector, ...props};
    const {langs, lang, switchLang, onHelpToTranslate} = useLang();
    const [opened, setOpened] = React.useState(false);
    const buttonRef = React.useRef(null);

    if (onHelpToTranslate && typeof onHelpToTranslate !== "function")
        throw new TypeError(`MaterialDocs: incorrect type of onHelpToTranslate, expected function, got ${typeof onHelpToTranslate}`);

    if (!lang) return null;

    return (
        <React.Fragment>
            <Tooltip title={"Select language"}>
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
                    {size === "large" && lang.label}
                    <KeyboardArrowDownIcon/>
                </Button>
            </Tooltip>
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
                        selected={item.name === lang.name}
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
});

LanguageSelector.displayName = "LanguageSelector";

LanguageSelector.defaultProps = {
    size: "large"
}

LanguageSelector.propTypes = {
    size: PropTypes.oneOf(["small", "large"]),
    // Stylable
    style: PropTypes.object,
    className: PropTypes.string,
    classes: PropTypes.object,
}

export default withStyles(styles, {name: "MatDocLanguageSelector"})(LanguageSelector);