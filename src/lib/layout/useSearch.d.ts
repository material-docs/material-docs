/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

/// <reference types="react" />
import SearchDataItem from "../interfaces/SearchDataItem";

export interface SearchContext {
    /**
     * addSearchItem - adds SearchDataItem to storage.
     * @function
     * @param {SearchDataItem} item
     */
    addSearchItem(item: SearchDataItem): void;
    /**
     * removeSearchItem - removes SearchDataItem to storage.
     * @function
     * @param {SearchDataItem} item
     */
    removeSearchItem(item: SearchDataItem): void;
    /**
     * getSearchData - returns search data list.
     * @type SearchDataItem[]
     */
    getSearchData(): SearchDataItem[];
}

/**
 * useSearch - react hook, designed to provide element with search data.
 * @function
 * @return SearchContext
 */
declare const useSearch: () => SearchContext;
export default useSearch;
