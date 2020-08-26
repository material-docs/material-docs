/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

// @ts-ignore
import React from "react";
import Containerable from "../../interfaces/Containerable";

export interface ListItemContainedProps
    extends Containerable {
    /**
     * children - children components, normally - ListItem.
     * @type any
     */
    children?: any;
}

export default class ListItemContained extends React.Component<ListItemContainedProps, any> {
    render(): JSX.Element;
}