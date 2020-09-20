/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

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
export default function goToPage(
    page: string | string[],
    changeRouteFunction: (params: object, query: object, ...other) => void
): boolean;