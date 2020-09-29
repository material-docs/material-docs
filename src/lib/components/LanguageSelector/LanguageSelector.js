/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import {styles} from "./styles";
// MaterialUI components
import Tooltip from "@material-ui/core/Tooltip";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
// MaterialUI icons
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import TranslateIcon from '@material-ui/icons/Translate';
// PropTypes validators
import PropTypes from "prop-types";
// Utils
import useLang from "../../hooks/useLang";
import clsx from "clsx";
import {withStyles} from "@material-ui/styles";
import {getFieldFromLang} from "../../utils";


export const displayName = "MaterialDocs-LanguageSelector";

const LanguageSelector = React.forwardRef(function LanguageSelector(props, ref) {
    const {
        className,
        style,
        size = "large",
        disabled,
        classes,
        ...other
    } = props;
    const {langs, lang, switchLang, onHelpToTranslate} = useLang();
    const [opened, setOpened] = React.useState(false);
    const buttonRef = React.useRef(null);

    if (onHelpToTranslate && typeof onHelpToTranslate !== "function")
        throw new TypeError(`MaterialDocs: incorrect type of onHelpToTranslate, expected function, got ${typeof onHelpToTranslate}`);

    if (!lang) return null;

    return (
        <React.Fragment>
            <Tooltip
                title={getFieldFromLang(lang, "MaterialDocs/tooltips/selectLanguage")}
                PopperProps={{popperOptions: {positionFixed: true}}}
            >
                <Button
                    className={clsx(classes.root.className)}
                    color={"inherit"}
                    ref={reference => {
                        buttonRef.current = reference;
                        ref = reference;
                    }}
                    onClick={event => setOpened(true)}
                    style={style}
                    disabled={disabled}
                    classes={{
                        disabled: classes.selectorDisabled,
                    }}
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
                {Array.isArray(langs) && langs.map(item =>
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

LanguageSelector.displayName = displayName;

LanguageSelector.propTypes = {
    size: PropTypes.oneOf(["small", "large"]),
    // Stylable
    style: PropTypes.object,
    className: PropTypes.string,
    classes: PropTypes.object,
}

export default withStyles(styles, {name: displayName})(LanguageSelector);