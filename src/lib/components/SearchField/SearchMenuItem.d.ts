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
    /**
     * active - if true, button will change color.
     * @type boolean
     */
    active?: boolean;

    /**
     * onMouseMove - callback on mouse move event.
     * @function
     * @param event
     */
    onMouseMove?(event: any): void;
    /**
     * onAfterSelect - function, if defined - will be called after search item selection handler.
     * @function
     */
    onAfterSelect?(): void;
    /**
     * onBeforeSelected - function, if defined - will be called before search item selection handler.
     * @function
     */
    onBeforeSelected?(): void;
}

/**
 * SearchMenuItem - react component for displaying found data.
 * @param {SearchMenuItemProps} props
 * @constructor
 * @example
 * <SearchMenuItem data={...data: SearchDataItem...} />
 */
export default function SearchMenuItem(props: SearchMenuItemProps): JSX.Element;
