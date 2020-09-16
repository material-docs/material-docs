/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import Containerable from "../../interfaces/Containerable";
import PagesGroupData from "@danilandreev/material-docs/interfaces/PagesGroupData";

export const displayName: string;

export interface DocsMenuProps
    extends Containerable {
    /**
     * dense - if true, menu wll have smaller spacing between items.
     * @default false
     * @type boolean
     */
    dense?: boolean,
    /**
     * children - children components, normally - DocsMenuItem.
     * @type any
     */
    children?: any;
    /**
     * layoutData - pages and groups hierarchy data.
     * @ignore
     * @type PagesGroupData
     */
    layoutData?: PagesGroupData;
}

/**
 * DocsMenu - react component, designed to provide MaterialDocs layout with menu.
 * @param {DocsMenuProps} props
 * @constructor
 * @see http://material-docs.com/component-apis/docsmenu
 * @example
 * <DocsLayout>
 *     <DocsMenu>
 *         ...
 *     </DocsMenu>
 *     ...
 * </DocsLayout>
 */
export default function DocsMenu(props: DocsMenuProps): JSX.Element;