/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";

export const GroupsContext = React.createContext({
    /**
     * pages - array of nested pages.
     * @type any[]
     */
    pages: [],
    /**
     * groups - array of nested groups.
     * @type any[]
     */
    groups: [],
    /**
     * name - name of the group.
     * @type string
     */
    name: "",
    /**
     * deletePage - add page to group.
     * @function
     * @param {object} page
     */
    addPage: (page) => {
    },
    /**
     * deletePage - delete page from group.
     * @function
     * @param {string | object} page
     */
    deletePage: (page) => {
    },
    /**
     * addGroup - add nested group.
     * @function
     * @param {object} group
     */
    addGroup: (group) => {
    },
    /**
     * addGroup - delete nested group.
     * @function
     * @param {string | object} group
     */
    deleteGroup: (group) => {
    },
});

const useGroups = () => React.useContext(GroupsContext);
export default useGroups;