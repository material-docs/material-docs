/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

/// <reference types="react" />

import Tag from "../../interfaces/Tag";

export interface SwitchPageContext {
    /**
     * switchPage - function, designed to switch between pages.
     * Returns false value on page switch error.
     * Throws Error on other errors.
     * @function
     * @param {string | string[]} page Page path for redirecting.
     * @returns boolean
     * @throws Error
     */
    switchPage(page: string | string[]): boolean;
    /**
     * currentPage - current displayed page path.
     * @type string[]
     */
    currentPage: string[] | null;
}

/**
 * useTags - React hook, used to provide components with page switch mechanism.
 * @returns SwitchPageContext
 * @example
 * const {switchPage, currentPage} = useSwitchPage();
 * switchPage(["Components", "Link"]);
 */

declare const useSwitchPage: () => SwitchPageContext;
export default useSwitchPage;