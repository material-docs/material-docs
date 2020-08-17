/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

/// <reference types="react" />
import {PagesGroupData} from "../../interfaces/PagesGroupData";

export interface PagesGroupProps {
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
    /**
     * children - children of an element.
     * @type any
     */
    children?: any;
}

/**
 * PagesGroup - function, used to group pages by sense. Used with AutoDocsMenu.
 * @param {PagesGroupProps} props
 * @constructor
 * @example
 * <PagesGroup name="Cool group">
 *     <DocsPage name="Cool page"> ... </DocsPage>
 *     <DocsPage name="Cooler page"> ... </DocsPage>
 * </PagesGroup>
 */
export default function PagesGroup(props: PagesGroupProps): JSX.Element;