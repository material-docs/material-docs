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

/**
 * AutoDocsMenu - react component, designed to generate menu automatically. Used with <PagesGroup/> component.
 * @param {AutoDocsMenuProps} props
 * @constructor
 * @see http://material-docs.com/component-apis/autodocsmenuapi
 * @example
 * <DocsMenu>
 *     <AutoDocsMenu/>
 * </DocsMenu>
 */
export default function AutoDocsMenu(props: AutoDocsMenuProps): JSX.Element;