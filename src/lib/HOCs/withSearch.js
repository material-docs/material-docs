/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import {useSearch} from "../hooks";

export default function withSearch(Component) {
    const Wrapper = React.forwardRef(function Wrapper(props, ref) {
        const search = useSearch();
        return (
            <Component {...props} search={search}/>
        );
    });
    Wrapper.displayName = Component.displayName;
    return Wrapper;
}
