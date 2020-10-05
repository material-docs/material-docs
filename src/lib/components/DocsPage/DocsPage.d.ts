/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

/// <reference types="react" />
import Containerable from "../../interfaces/Containerable";

export const displayName: string;

export interface DocsPageProps
    extends Containerable {
    /**
     * name - page name. Route will be generated automatically from name.
     * @type string
     * @example
     * F.e. name:  Hello darkness -> route: hello-darkness
     */
    name: string;
    /**
     * searchTags - keywords for search engine.
     * @type string[]
     */
    searchTags?: string[];
    /**
     * searchLabel - label text, displayed in search result if page match search requirements.
     * @string
     */
    searchLabel?: string;
    /**
     * searchDescription - description text, displayed in search result if page match search requirements.
     * @string
     */
    searchDescription: string;
    /**
     * noGenerateAutoSearch - if true, page will not generate search items from pages automatically.
     * @type boolean
     * @default false
     */
    noGenerateAutoSearch?: boolean;
    /**
     * noAutoMenu - if true, page will not participate in auto menu generation.
     * @type boolean
     * @default false
     */
    noAutoMenu?: boolean;
    /**
     * order - as lower order as higher will be displayed menu item.
     * @type number
     */
    order?: number;
    /**
     * disableRoute - if true, page will not be wrapped into route;
     * @default false
     * @type boolean
     */
    disableRoute?: boolean;
}

/**
 * DocsPage - component, used to create page in DocsPages.
 * @param {DocsPageProps} props
 * @constructor
 * @see http://material-docs.com/component-apis/docspage
 * @example
 * <DocsPages>
 *     <DocsPage name="My first page">
 *         ...content...
 *     </DocsPage>
 * </DocsPages>
 */
export default function DocsPage(props: DocsPageProps): JSX.Element;