/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020. 
 */

import PageData from "./PageData";

export default interface PagesGroupData {
    /**
     * name - name of the group.
     * @type string
     */
    name: string;
    /**
     * pages - list of nested pages in group.
     * @type PageData[]
     */
    pages: PageData[];
    /**
     * groups - list of nested groups in group.
     * @type PagesGroupData[]
     */
    groups: PagesGroupData[];
    /**
     * path - path to the group.
     * @type string[]
     * @example
     * ["containers", "pages", "page1"]
     */
    path: string[];
    /**
     * order - as lower order as higher will be displayed menu item.
     * @type number
     */
    order?: number;
    /**
     * defaultExpanded - if true, menu item will be expanded on startup.
     * @type boolean
     */
    defaultExpanded?: boolean;
}