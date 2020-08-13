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
    searchData?: SearchDataItem[],
}

export default function SearchField(props: SearchFieldProps): JSX.Element;
