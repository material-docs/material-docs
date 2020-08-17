/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020. 
 */

import {PageData} from "./PageData";

export interface PagesGroupData {
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
}