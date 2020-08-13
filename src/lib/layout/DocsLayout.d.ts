/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

/// <reference types="react" />
import Containerable from "../interfaces/Containerable";
import SearchDataItem from "../interfaces/SearchDataItem";

export interface DocsLayoutProps
    extends Containerable {
    /**
     * searchData - array of SearchDataItem items to do search from.
     * @type SearchDataItem[]
     */
    searchData?: SearchDataItem[];
    /**
     * noGenerateAutoSearch - if true, Material Docs will not generate search items from pages automatically.
     * @type boolean
     * @default false
     */
    noGenerateAutoSearch?: boolean;
}

/**
 * DocsLayout - main component of MaterialDocs.
 * @param props
 * @constructor
 * @example
 * <DocsLayout>
 *     <DocsMenu>
 *         ...menu items...
 *     </DocsMenu>
 *     <DocsPages>
 *         ...pages...
 *     </DocsPages>
 * </DocsLayout>
 */
export default function DocsLayout(props: DocsLayoutProps): JSX.Element;