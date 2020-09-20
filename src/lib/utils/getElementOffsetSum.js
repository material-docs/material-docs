/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

export default function getElementOffsetSum(elem) {
    let top = 0;
    let left = 0;
    while (elem) {
        top = top + parseFloat(elem.offsetTop);
        left = left + parseFloat(elem.offsetLeft);
        elem = elem.offsetParent || elem.parentElement;
    }

    return {top: Math.round(top), left: Math.round(left)}
}
