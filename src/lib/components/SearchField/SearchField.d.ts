/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

/// <reference types="react" />
import Stylable from "../../interfaces/Stylable";
import SearchDataItem from "../../interfaces/SearchDataItem";

export interface SearchFieldProps
    extends Stylable {
    /**
     * searchData - array of SearchDataItem items to do search from.
     * @type SearchDataItem[]
     */
    searchData?: SearchDataItem[];
    /**
     * doSearch - callback, called on search. If defined, default search function will not be called. Must return array of SearchDataItem.
     * @function
     * @async
     * @param query
     * @return SearchDataItem[]
     */
    doSearch?(query, searchData): Promise<SearchDataItem[]>;
}

/**
 * SearchField - react component, designed to provide search mechanism.
 * @param props
 * @constructor
 * @example
 * <SearchField searchData={...data...} />
 */
export default function SearchField(props: SearchFieldProps): JSX.Element;
