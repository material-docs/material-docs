/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import {useTags} from "../hooks";

export default function withTags(Component) {
    const Wrapper = React.forwardRef(function Wrapper(props, ref) {
        const tags = useTags();
        return (
            <Component {...props} tags={tags}/>
        );
    });
    Wrapper.displayName = Component.displayName;
    return Wrapper;
}
