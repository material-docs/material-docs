/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import * as React from "react";
import Containerable from "../../interfaces/Containerable";

export interface DocsPagesProps
    extends Containerable {
    /**
     * children - children components, normally - DocsPage or PagesGroup.
     * @type any
     */
    children?: any;
}

/**
 * DocsPages - react component, designed to provide MaterialDocs with pages mechanism.
 * @param {DocsPagesProps} props
 * @constructor
 * @see http://material-docs.com/component-apis/docspages
 * @example
 * <DocsLayout>
 *     <DocsPages>
 *         ...
 *     </DocsPages>
 *     ...
 * </DocsLayout>
 */
export default function DocsPages(props: DocsPagesProps): JSX.Element;