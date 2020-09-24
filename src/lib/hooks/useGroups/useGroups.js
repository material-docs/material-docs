/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";

export const GroupsContext = React.createContext({
    pages: [],
    groups: [],
    name: "",
    path: [],
    addPage: (page) => {
    },
    deletePage: (page) => {
    },
    addGroup: (group) => {
    },
    deleteGroup: (group) => {
    },
});

const useGroups = () => React.useContext(GroupsContext);
export default useGroups;
