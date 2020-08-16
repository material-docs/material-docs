/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import useGroups, {GroupsContext} from "./useGroups";
import {
    addGroup as _addGroup,
    deleteGroup as _deleteGroup,
    addPage as _addPage,
    deletePage as _deletePage
} from "./useGroups_functions";

function PagesGroup({name, children, ...props}, ref) {
    const [pages, setPages] = React.useState([]);
    const [groups, setGroups] = React.useState([]);
    const {addGroup, deleteGroup} = useGroups();

    React.useEffect(() => {
        const group = {name, pages, groups};
        addGroup(group);
        return () => deleteGroup(group);
    }, [name, pages, groups]);

    const __addPage = page => _addPage(page, setPages);

    const __deletePage = page => _deletePage(page, setPages);

    const __addGroup = page => _addGroup(page, setGroups);

    const __deleteGroup = page => _deleteGroup(page, setGroups);

    return (
        <GroupsContext.Provider value={{
            pages,
            groups,
            name,
            addPage: __addPage,
            deletePage: __deletePage,
            addGroup: __addGroup,
            deleteGroup: __deleteGroup,
        }}>
            {children}
        </GroupsContext.Provider>
    );
}

export default React.forwardRef(PagesGroup);
