/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

/// <reference types="react" />
import PagesGroupData from "../../interfaces/PagesGroupData";

export interface AutoDocsMenuProps {
    /**
     * layoutData - pages and groups hierarchy data.
     * @type PagesGroupData
     */
    layoutData?: PagesGroupData;
}

export default function AutoDocsMenu(props: AutoDocsMenuProps): JSX.Element;