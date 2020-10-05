/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";

export const MaterialDocsSystemContext = React.createContext({
    autoMenuData: null,
    author: undefined,
    description: undefined,
    keywords: undefined,
    name: undefined,
    version: undefined,
    logo: undefined,
    noSearchField: false,
    noLanguageSelector: false,
    noGenerateAutoSearch: undefined,
});

const useMaterialDocsSystem = () => React.useContext(MaterialDocsSystemContext);
export default useMaterialDocsSystem;
