/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import Containerable from "../../interfaces/Containerable";
import PagesGroupData from "@danilandreev/material-docs/interfaces/PagesGroupData";

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

export default function DocsMenu(props: DocsMenuProps): JSX.Element;