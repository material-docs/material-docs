/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

/// <reference types="react" />

export interface MenuContext {
    /**
     * openMenu - function, designed to open menu panel.
     * @function
     * @example
     * const {openMenu} = useMenu();
     * openMenu();
     */
    openMenu(): void;

    /**
     * closeMenu -  function, designed to close menu panel.
     * @example
     * const {closeMenu} = useMenu();
     * closeMenu();
     */
    closeMenu(): void;

    /**
     * menuOpened - if true - menu panel is opened.
     * @type boolean
     */
    menuOpened: boolean;
}

/**
 * useTags - React hook, used to provide tagable mechanism.
 * @returns {{setTag: setTag, tags: *}}
 * @example
 * const {setTag} = useTags();
 */

declare const useMenu: () => MenuContext;
export default useMenu;