/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";

const GroupsContext = React.createContext({
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

function PagesGroup({name, children, ...props}, ref) {

    const [pages, setPages] = React.useState([]);
    const [groups, setGroups] = React.useState([]);

    React.useEffect(() => {

    }, [name, pages, groups]);

    function addPage(page) {
        if (typeof page !== "object")
            throw new TypeError(`MaterialDocs: incorrect page type, expected {name: string, link: string | object}, got ${typeof page}`);
        if (typeof page.name !== "string")
            throw new TypeError(`MaterialDocs: incorrect page.name type, expected string, got ${typeof page.name}`);
        if (typeof page.link !== "string")
            throw new TypeError(`MaterialDocs: incorrect page.link type, expected string, got ${typeof page.name}`);
        setPages(prev => {
            const newPages = prev.map(item => item.name === page.name ? item : null).filter(item => item);
            newPages.push(page);
            return newPages;
        });
    }

    function deletePage(page) {
        if (typeof page !== "object" || typeof page !== "string")
            throw new TypeError(`MaterialDocs: incorrect page type, expected {name: string, link?: string | object} | string, got ${typeof page}`);

        if (typeof page === "object" && typeof page.name !== "string")
            throw new TypeError(`MaterialDocs: incorrect page.name type, expected string, got ${typeof page.name}`);
        setPages(prev => {
            const name = typeof page === "object" ? page.name : page;
            return prev.map(item => item.name === name ? item : null).filter(item => item);
        });
    }
    
    function addGroup(group) {
        if (typeof group !== "object")
            throw new TypeError(`MaterialDocs: incorrect group type, expected {name: string, pages: any[], groups: any[]}, got ${typeof group}`);
        if (typeof group.name !== "string")
            throw new TypeError(`MaterialDocs: incorrect group.name type, expected string, got ${typeof group.name}`);
        if (!Array.isArray(group.pages))
            throw new TypeError(`MaterialDocs: incorrect group.pages type, expected any[], got ${typeof group.pages}`);
        if (!Array.isArray(group.groups))
            throw new TypeError(`MaterialDocs: incorrect group.groups type, expected any[], got ${typeof group.groups}`);
        setGroups(prev => {
            const newGroups = prev.map(item => item.name === group.name ? item : null).filter(item => item);
            newGroups.push(group);
            return newGroups;
        });
    }

    function deleteGroup(group) {
        if (typeof group !== "object" || typeof group !== "string")
            throw new TypeError(`MaterialDocs: incorrect group type, expected {name: string, pages: any[], groups: any[]} | string, got ${typeof group}`);
        if (typeof group === "object" && typeof group.name !== "string")
            throw new TypeError(`MaterialDocs: incorrect group.name type, expected string, got ${typeof group.name}`);
        setGroups(prev => {
            const name = typeof group === "object" ? group.name : group;
            return prev.map(item => item.name === name ? item : null).filter(item => item);
        });
    }

    return (
        <GroupsContext.Provider value={{pages, groups, name, addPage, deletePage, addGroup, deleteGroup}}>
            {children}
        </GroupsContext.Provider>
    );
}

export default React.forwardRef(PagesGroup);
