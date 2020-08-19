/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

/// <reference types="react" />
import Containerable from "../../interfaces/Containerable";
import Stylable from "../../interfaces/Stylable";

export interface ListProps
    extends Containerable, Stylable {

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