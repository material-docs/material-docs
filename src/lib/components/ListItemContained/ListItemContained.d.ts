/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import * as React from "react";
import Containerable from "../../interfaces/Containerable";

export const displayName: string;

export interface ListItemContainedProps
    extends Containerable {
    /**
     * children - children components, normally - ListItem.
     * @type any
     */
    children?: any;
}

/**
 * @class
 * @see http://material-docs.com/component-apis/listitemcontained
 */
export default class ListItemContained extends React.Component<ListItemContainedProps, any> {
    render(): JSX.Element;
}