/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import {useSearch} from "../hooks";

/**
 * withSearch - react HOC, designed to provide components with search data.
 * @function
 * @param {object} Component
 * @return object
 */
export default function withSearch(Component) {
    const Wrapper = React.forwardRef(function Wrapper(props, ref) {
        const search = useSearch();
        return (
            <Component {...props} search={search}/>
        );
    });
    Wrapper.displayName = "MatDoc-withSearch";
    return Wrapper;
}
