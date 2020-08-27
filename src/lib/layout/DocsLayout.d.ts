/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

/// <reference types="react" />
import Containerable from "../interfaces/Containerable";
import SearchDataItem from "../interfaces/SearchDataItem";
import Lang from "../interfaces/Lang";

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
    /**
     * defaultLang - default language settings.
     * @type Lang
     */
    defaultLang?: Lang;
    /**
     * langs - list of all available langs.
     * @type Lang[]
     */
    langs?: Lang[];
    /**
     * onHelpToTranslate - function, called on help to translate button click. If not defined - button will not be rendered.
     * @function
     * @param {Lang} lang
     */
    onHelpToTranslate?(lang: Lang): void;
    /**
     * autoMenu - if true, menu will be generated automatically.
     * @type boolean
     * @default false
     */
    autoMenu?: boolean;
    /**
     * autoMenuDense - if true, auto menu will be dense. Spacing between items will be smaller.
     * @type boolean
     * @default false
     */
    autoMenuDense?: boolean;
    /**
     * router - react-router-dom Router type.
     * @type string
     * @default browser-router
     * @see https://reactrouter.com/web/api/BrowserRouter
     * @see https://reactrouter.com/web/api/HashRouter
     */
    router?: "hash-router" | "browser-router";
    /**
     * basename - basename param for react-router-dom Router.
     * @type string
     * @see https://reactrouter.com/web/api/BrowserRouter
     * @see https://reactrouter.com/web/api/HashRouter
     */
    basename?: string;
    /**
     * mask - mask for routing-manager ChangeRouteProvider routeMask property.
     * @type string
     * @default "/:page"
     * @see https://github.com/DanilAndreev/routing-manager/wiki/ChangeRouteProvider#routemask
     */
    mask?: string;
}

/**
 * DocsLayout - main component of MaterialDocs.
 * @param {DocsLayoutProps} props
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