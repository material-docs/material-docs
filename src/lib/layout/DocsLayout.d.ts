/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

/// <reference types="react" />
import Containerable from "../interfaces/Containerable";

export interface DocsLayoutProps
    extends Containerable {

}

/**
 * DocsLayout - main component of MaterialDocs.
 * @param props
 * @constructor
 * @example
 * <DocsLayout>
 *     <DocsMenu>
 *         ...menu items...
 *     </DocsMenu>
 *     <DocsPages>
 *         ...pages...
 *     </DocsPages>
 * </DocsLayout>
 */
export default function DocsLayout(props: DocsLayoutProps): JSX.Element;