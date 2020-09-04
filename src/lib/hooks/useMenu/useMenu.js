/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";

export const MenuContext = React.createContext({
    openMenu: (key, value) => {
    },
    closeMenu: (key) => {
    },
    menuOpened: false,
});

const useMenu = () => React.useContext(MenuContext);
export default useMenu;