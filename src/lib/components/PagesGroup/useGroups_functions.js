/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

export function addPage(page, setPages) {
//    debugger;
    if (typeof page !== "object")
        throw new TypeError(`MaterialDocs: incorrect page type, expected {name: string, link: string | object}, got ${typeof page}`);
    if (typeof page.name !== "string")
        throw new TypeError(`MaterialDocs: incorrect page.name type, expected string, got ${typeof page.name}`);
    if (typeof page.link !== "string")
        throw new TypeError(`MaterialDocs: incorrect page.link type, expected string, got ${typeof page.name}`);
    setPages(prev => {
        const newPages = prev.map(item => item.name === page.name ? null : item).filter(item => item);
        newPages.push(page);
        return newPages;
    });
}

export function deletePage(page, setPages) {
//    debugger;
    if (!(typeof page === "object" || typeof page === "string"))
        throw new TypeError(`MaterialDocs: incorrect page type, expected {name: string, link?: string | object} | string, got ${typeof page}`);

    if (typeof page === "object" && typeof page.name !== "string")
        throw new TypeError(`MaterialDocs: incorrect page.name type, expected string, got ${typeof page.name}`);
    setPages(prev => {
        const name = typeof page === "object" ? page.name : page;
        return prev.map(item => item.name === name ? item : null).filter(item => item);
    });
}

export function addGroup(group, setGroups) {
    if (typeof group !== "object")
        throw new TypeError(`MaterialDocs: incorrect group type, expected {name: string, pages: any[], groups: any[]}, got ${typeof group}`);
    if (typeof group.name !== "string")
        throw new TypeError(`MaterialDocs: incorrect group.name type, expected string, got ${typeof group.name}`);
    if (!Array.isArray(group.pages))
        throw new TypeError(`MaterialDocs: incorrect group.pages type, expected any[], got ${typeof group.pages}`);
    if (!Array.isArray(group.groups))
        throw new TypeError(`MaterialDocs: incorrect group.groups type, expected any[], got ${typeof group.groups}`);
    setGroups(prev => {
        const newGroups = prev.map(item => item.name === group.name ? null : item).filter(item => item);
        newGroups.push(group);
        return newGroups;
    });
}

export function deleteGroup(group, setGroups) {
    if (!(typeof group === "object" || typeof group === "string"))
        throw new TypeError(`MaterialDocs: incorrect group type, expected {name: string, pages: any[], groups: any[]} | string, got ${typeof group}`);
    if (typeof group === "object" && typeof group.name !== "string")
        throw new TypeError(`MaterialDocs: incorrect group.name type, expected string, got ${typeof group.name}`);
    setGroups(prev => {
        const name = typeof group === "object" ? group.name : group;
        return prev.map(item => item.name === name ? item : null).filter(item => item);
    });
}