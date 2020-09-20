/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import getContainerByType from "./getContainerByType";

export default function getChildrenFromContainer(children, types, invert = false, multiple = false) {
    const containers = getContainerByType(children, types, invert, multiple);
    if (Array.isArray(containers)) {
        return containers.map(container => container.props.children).flat(1);
    } else if (containers) {
        return containers.props.children;
    }
    return null;
}
