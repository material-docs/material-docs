/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import useGroups, {GroupsContext} from "../../hooks/useGroups";
import PropTypes from "prop-types";
import useTheme from "@material-ui/core/styles/useTheme";

export const displayName = "MatDocPagesGroup";

const PagesGroup = React.forwardRef(function PagesGroup(props, ref) {
    const {
        name,
        children,
        getData,
        ...other
    } = props;
    if (getData && typeof getData !== "function")
        throw new TypeError(`MaterialDocs: incorrect type of getData, expected function, got ${typeof getData}`);
    if (typeof name !== "string")
        throw new TypeError(`MaterialDocs: incorrect type of required prop name, expected string, got ${typeof name}`);

    const [pages, setPages] = React.useState([]);
    const [groups, setGroups] = React.useState([]);
    const {addGroup, deleteGroup, path: parentPath} = useGroups();
    const groupPath = getData ? [] : [...(parentPath || []), name];

    React.useEffect(() => {
        const group = {name, pages, groups, path: groupPath};
        !getData && addGroup(group);
        getData && getData(group);
//        return () => !getData && deleteGroup(group);
    }, [name, pages, groups]);

    function _addPage(page) {
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

    function _deletePage(page) {
        if (!(typeof page === "object" || typeof page === "string"))
            throw new TypeError(`MaterialDocs: incorrect page type, expected {name: string, link?: string | object} | string, got ${typeof page}`);

        if (typeof page === "object" && typeof page.name !== "string")
            throw new TypeError(`MaterialDocs: incorrect page.name type, expected string, got ${typeof page.name}`);
        setPages(prev => {
            const name = typeof page === "object" ? page.name : page;
            return prev.map(item => item.name === name ? item : null).filter(item => item);
        });
    }

    function _addGroup(group) {
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

    function _deleteGroup(group) {
        if (!(typeof group === "object" || typeof group === "string"))
            throw new TypeError(`MaterialDocs: incorrect group type, expected {name: string, pages: any[], groups: any[]} | string, got ${typeof group}`);
        if (typeof group === "object" && typeof group.name !== "string")
            throw new TypeError(`MaterialDocs: incorrect group.name type, expected string, got ${typeof group.name}`);
        setGroups(prev => {
            const name = typeof group === "object" ? group.name : group;
            return prev.map(item => item.name === name ? item : null).filter(item => item);
        });
    }

    return (
        <GroupsContext.Provider value={{
            pages,
            groups,
            name,
            path: groupPath,
            addPage: _addPage,
            deletePage: _deletePage,
            addGroup: _addGroup,
            deleteGroup: _deleteGroup,
        }}>
            {children}
        </GroupsContext.Provider>
    );
});

PagesGroup.displayName = displayName;

PagesGroup.defaultProps = {
}

PagesGroup.propTypes = {
    // PagesGroupProps
    name: PropTypes.string,
    getData: PropTypes.func,
    // Containerable
    children: PropTypes.node,
}

export default PagesGroup;
