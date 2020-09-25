/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

export default interface AppBarAction {
    /**
     * icon - icon component, will be displayed in material-ui IconButton component.
     * @type node
     */
    icon: any,
    /**
     * link - if defined and onClick is not defined - will be used to change route.
     * If typeof is object - will be passed to routing-manager changeRoute()
     * @type string | object
     * @see https://github.com/DanilAndreev/routing-manager/wiki/changeRoute
     */
    link?: string | object;

    /**
     * onClick - if defined, will be called on click event of material-ui IconButton component.
     * If not defined - link must be defined!
     * @function
     * @param {any} event
     */
    onClick?(event: any): void;
    /**
     * tooltip - if defined will be displayed in material-ui Tooltip component when mouse hovers button.
     * @type string
     */
    tooltip?: string;
    /**
     * ref - react ref object. Will be passed to action root element.
     * @type any
     */
    ref?: any;
}