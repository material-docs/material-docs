/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import {useGroups} from "../hooks";

export default function withGroups(Component) {
    const Wrapper = React.forwardRef(function Wrapper(props, ref) {
        const groups = useGroups();
        return (
            <Component {...props} groups={groups}/>
        );
    });
    Wrapper.displayName = Component.displayName;
    return Wrapper;
}
