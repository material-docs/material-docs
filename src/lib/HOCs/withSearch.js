/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import {useSearch} from "../hooks";

/**
 * withSearch - react HOC, designed to provide components with search data.
 * @function
 * @param {node} Component
 * @return node
 */
export default function withSearch(Component) {
    const Wrapper = React.forwardRef(function Wrapper(props) {
        const search = useSearch();
        return (
            <Component {...props} search={search}/>
        );
    });
    Wrapper.displayName = "withSearch";
    return Wrapper;
}
