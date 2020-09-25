/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import PropTypes from "prop-types";
import useLang, {LangContext} from "../../hooks/useLang";
import mergeLangs from "../../utils/mergeLangs";
import withStyles from "@material-ui/styles/withStyles";

export const displayName = "MaterialDocs-LangProvider";

const LangProvider = React.forwardRef(function (props, ref) {
    const {
        lang,
        children,
    } = props;
    const {lang: parentLang, ...other} = useLang();

    const mergedLang = mergeLangs(parentLang, lang);

    return (
        <LangContext.Provider value={{lang: mergedLang, ...other}}>
            {children}
        </LangContext.Provider>
    );
});

LangProvider.displayName = displayName;

LangProvider.propTypes = {
    lang: PropTypes.shape({
        locale: PropTypes.object,
    })
}

export default withStyles({}, {name: displayName})(LangProvider);