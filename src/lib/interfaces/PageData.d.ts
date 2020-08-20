/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

export default interface PageData {
    /**
     * name - name of the page.
     * @type string
     */
    name: string;
    /**
     * link - link to the page, if string - page route, if object - data for routing-manager changeRoute().
     * @type string | object
     * @see https://github.com/DanilAndreev/routing-manager/wiki/changeRoute
     */
    link: string | object;
}