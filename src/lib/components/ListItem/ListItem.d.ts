/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

/// <reference types="react" />
import Stylable from "../../interfaces/Stylable";
import Containerable from "../../interfaces/Containerable";

export interface ListItemProps
    extends Stylable, Containerable {
    /**
     * type - type of list decoration.
     * @type string
     */
    type?: "circle" | "square" | "upper-roman" | "lower-alpha" | "none";
    /**
     * dense - if true, vertical distance between list items will be smaller.
     * @type boolean
     * @default false
     */
    dense?: boolean;
}

/**
 * ListItem - component, used as list element.
 * @param {ListItemProps} props
 * @constructor
 * @see http://material-docs.com/component-apis/listitem
 * @example
 * <List>
 *     <ListItem>
 *         <ListItemContained>
 *             <ListItem> I am contained item number 1 </ListItem>
 *             <ListItem> I am contained item number 2 </ListItem>
 *         </ListItemContained>
 *     <ListItem>
 *     <ListItem>Hello darkness my old friend.</ListItem>
 * </List>
 */
export default function ListItem(props: ListItemProps): JSX.Element;