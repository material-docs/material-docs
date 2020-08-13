/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

/// <reference types="react" />
import Containerable from "../../interfaces/Containerable";

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
}

/**
 * DocsPage - component, used to create page in DocsPages.
 * @param props
 * @constructor
 * @example
 * <DocsPages>
 *     <DocsPage name="My first page">
 *         ...content...
 *     </DocsPage>
 * </DocsPages>
 */
export default function DocsPage(props: DocsPageProps): JSX.Element;