/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import useNesting from "@danilandreev/material-docs/hooks/useNesting/useNesting";

/**
 * withNesting - react HOC, designed to provide components with nesting information.
 * @function
 * @param {node} Component
 * @return node
 */
export default function withNesting(Component) {
    const Wrapper = React.forwardRef(function Wrapper(props) {
        const nesting = useNesting();
        return (
            <Component {...props} nesting={nesting}/>
        );
    });
    Wrapper.displayName = "MatDoc-withNesting";
    return Wrapper;
}
