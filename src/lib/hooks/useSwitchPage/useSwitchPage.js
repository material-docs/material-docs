/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";

export const SwitchPageContext = React.createContext({
    switchPage: (page) => {
    },
    currentPage: null,
});

const useSwitchPage = () => React.useContext(SwitchPageContext);
export default useSwitchPage;