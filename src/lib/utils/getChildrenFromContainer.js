/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import getContainerByType from "./getContainerByType";

/**
 * getChildrenFromContainer - function, designed to get children elements from containers with input types.
 * @function
 * @param {JSX.Element} children
 * @param {string | string[]} types
 * @param {boolean} invert
 * @param {boolean} multiple
 * @return {JSX.Element | JSX.Element[] | null}
 */
export default function getChildrenFromContainer(children, types, invert = false, multiple = false) {
    const containers = getContainerByType(children, types, invert, multiple);
    if (Array.isArray(containers)) {
        return containers.map(container => container.props.children).flat(1);
    } else if(containers) {
        return containers.props.children;
    }
    return null;
}