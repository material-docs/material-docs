/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import {useGroups} from "../hooks";

/**
 * withGroups - react HOC, designed to provide components with groups data.
 * @function
 * @param {node} Component
 * @return node
 */
export default function withGroups(Component) {
    const Wrapper = React.forwardRef(function Wrapper(props) {
        const groups = useGroups();
        return (
            <Component {...props} groups={groups}/>
        );
    });
    Wrapper.displayName = "withGroups";
    return Wrapper;
}
