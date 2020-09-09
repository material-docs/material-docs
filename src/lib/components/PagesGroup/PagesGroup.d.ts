/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

/// <reference types="react" />
import PagesGroupData from "../../interfaces/PagesGroupData";
import Containerable from "../../interfaces/Containerable";

export interface PagesGroupProps
    extends Containerable {
    /**
     * name - name of the group.
     * @type string
     */
    name: string;
    /**
     * getData - callback, used to get group data.
     * @function
     * @param {PagesGroupData} data
     * @return void
     */
    getData?(data: PagesGroupData): void;
}

/**
 * PagesGroup - function, used to group pages by sense. Used with AutoDocsMenu.
 * @param {PagesGroupProps} props
 * @constructor
 * @see http://material-docs.com/component-apis/pagesgroup
 * @example
 * <PagesGroup name="Cool group">
 *     <DocsPage name="Cool page"> ... </DocsPage>
 *     <DocsPage name="Cooler page"> ... </DocsPage>
 * </PagesGroup>
 */
export default function PagesGroup(props: PagesGroupProps): JSX.Element;