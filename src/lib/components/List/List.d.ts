/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

/// <reference types="react" />
import Containerable from "../../interfaces/Containerable";
import Stylable from "../../interfaces/Stylable";

export interface ListProps
    extends Containerable, Stylable {
    /**
     * image - list styling image. If defined - will be applied to list-style-image style.
     * @type string
     */
    image?: string;
    /**
     * styling - list styling type.
     * @type string
     */
    styling?: "inside" | "outside" | "inherit" | "revert" | "unset";
}

/**
 * List - list container for <ListItem /> components.
 * @param {ListProps} props
 * @constructor
 * @example
 * <List>
 *     ...
 * </List>
 */
export default function List(props: ListProps): JSX.Element;