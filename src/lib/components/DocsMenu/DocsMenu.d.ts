/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

// @ts-ignore
import React from "react";
import Containerable from "../../interfaces/Containerable";

export interface DocsMenuProps
    extends Containerable {
    /**
     * children - children components, normally - DocsMenuItem.
     * @type any
     */
    children?: any;
}

export default class DocsMenu extends React.Component<DocsMenuProps, any> {
    render(): JSX.Element;
}