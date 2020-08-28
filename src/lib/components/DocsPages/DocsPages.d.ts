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

export default class DocsPages extends React.Component<DocsPagesProps, any> {
    render(): JSX.Element;
}