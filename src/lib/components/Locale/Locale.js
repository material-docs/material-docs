/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";

// PropTypes validators
import PropTypes from "prop-types";

// Utils
import {getFieldFromLang} from "../../utils";
import {useLang} from "../../hooks";
import {withStyles} from "@material-ui/styles";


export const displayName = "MatDoc-Locale"

const Locale = React.forwardRef(function Locale(props, ref) {
    const {
        path,
        children,
    } = props;
    const {lang} = useLang();

    let text = "";
    if (lang && typeof path === "string")
        text = getFieldFromLang(lang, path);

    if (!text) text = children;

    return text;
});

Locale.displayName = displayName;

Locale.propTypes = {
    path: PropTypes.string,
    children: PropTypes.node,
}

export default withStyles({}, {name: displayName})(Locale);
