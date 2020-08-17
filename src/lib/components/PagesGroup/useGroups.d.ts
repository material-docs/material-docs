/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

/// <reference types="react" />
import {PageData} from "../../interfaces/PageData";
import {PagesGroupData} from "../../interfaces/PagesGroupData";

export interface GroupsContext {
    /**
     * pages - array of nested pages.
     * @type PageData[]
     */
    pages: PageData[],
    /**
     * groups - array of nested groups.
     * @type PagesGroupData[]
     */
    groups: PagesGroupData[],
    /**
     * name - name of the group.
     * @type string
     */
    name: string,
    /**
     * deletePage - add page to group.
     * @function
     * @param {object} page
     */
    addPage(page: PageData): void,
    /**
     * deletePage - delete page from group.
     * @function
     * @param {string | object} page
     */
    deletePage(page: PageData | string): void,
    /**
     * addGroup - add nested group.
     * @function
     * @param {object} group
     */
    addGroup(group: PagesGroupData): void,
    /**
     * addGroup - delete nested group.
     * @function
     * @param {string | object} group
     */
    deleteGroup(group: PagesGroupData | string): void,
}

/**
 * useGroup - react hook, used to provide grouping mechanism.
 * @function
 * @return GroupsContext
 */
declare const useGroup: () => GroupsContext;
export default  useGroup;