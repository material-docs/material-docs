/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import {PagesGroupData} from "../../interfaces";
import {DocsLayoutFlags, DocsLayoutMetaProps, DocsLayoutRouterSettings} from "../../components/DocsLayout/DocsLayout";

export interface MaterialDocsSystemContext
    extends DocsLayoutMetaProps, DocsLayoutFlags {
    /**
     * autoMenuData - data of auto menu generator.
     * @type PagesGroupData | null
     */
    autoMenuData: PagesGroupData | null;
    noSearchField: boolean;
    noLanguageSelector: boolean;
    noGenerateAutoSearch: boolean;
}

export default function useMaterialDocsSystem(): MaterialDocsSystemContext;
