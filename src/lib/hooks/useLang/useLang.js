/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";

export const LangContext = React.createContext({
    switchLang: async (lang) => {
    },
    lang: null,
    langs: [],
    onHelpToTranslate: (lang) => {
    },
    defaultLang: null,
});

const useLang = () => React.useContext(LangContext);
export default useLang;
