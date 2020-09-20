/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import {useNesting} from "./../hooks";

export default function withNesting(Component) {
    const Wrapper = React.forwardRef(function Wrapper(props, ref) {
        const nesting = useNesting();
        return (
            <Component {...props} nesting={nesting}/>
        );
    });
    Wrapper.displayName = Component.displayName;
    return Wrapper;
}
