/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

/// <reference types="react" />
import SearchDataItem from "../../interfaces/SearchDataItem";
import Stylable from "../../interfaces/Stylable";
export interface SearchMenuItemProps
    extends Stylable {
    /**
     * data - data to display and redirect.
     * @type SearchDataItem
     */
    data: SearchDataItem;
}

/**
 * SearchMenuItem - react component for displaying found data.
 * @param props
 * @constructor
 * @example
 * <SearchMenuItem data={...data: SearchDataItem...} />
 */
export default function SearchMenuItem(props: SearchMenuItemProps): JSX.Element;