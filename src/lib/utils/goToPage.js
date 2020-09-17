/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import createRouteFromName from "./createRouteFromName";

/**
 * goToPage - function for redirecting between pages.
 * On page error returns false value.
 * Throws TypeError when changeRouteFunction is incorrect.
 * @function
 * @param {string | string[]} page Page path, can be a string separated with "/" or array of strings in right order.
 * @param {function} changeRouteFunction Function for handling redirect. Pass changeRoute() from routing-manager here.
 * @return boolean
 * @throws TypeError
 */
export default function goToPage(page, changeRouteFunction) {
    if (typeof changeRouteFunction !== "function")
        throw new TypeError(`MaterialDocs: Incorrect type of changeRouteFunction param, expected "function(object)", got "${typeof changeRouteFunction}"`);
    if (typeof page !== "string" && !Array.isArray(page))
        return false;
    let path = page;
    if (typeof path === "string") {
        path = path.split("/");
    }
    path = path.map(item => createRouteFromName(item)).join("/");
    changeRouteFunction({page: path});
    return true;
}