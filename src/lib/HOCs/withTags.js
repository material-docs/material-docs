/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import {useTags} from "../hooks";

/**
 * withTags - react HOC, designed to provide components with tags information.
 * @function
 * @param {object} Component
 * @return object
 */
export default function withTags(Component) {
    const Wrapper = React.forwardRef(function Wrapper(props, ref) {
        const tags = useTags();
        return (
            <Component {...props} tags={tags}/>
        );
    });
    Wrapper.displayName = "MatDoc-withTags";
    return Wrapper;
}
