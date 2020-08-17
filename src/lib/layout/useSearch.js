/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";

export const SearchContext = React.createContext({
    /**
     * addSearchItem - adds SearchDataItem to storage.
     * @function
     * @param {SearchDataItem} item
     */
    addSearchItem: (item) => {
    },
    /**
     * removeSearchItem - removes SearchDataItem to storage.
     * @function
     * @param {SearchDataItem} item
     */
    removeSearchItem: (item) => {
    },
    /**
     * getSearchData - returns search data list.
     * @type SearchDataItem[]
     */
    getSearchData: () => {
    }
});

const useSearch = () => React.useContext(SearchContext);
export default useSearch;