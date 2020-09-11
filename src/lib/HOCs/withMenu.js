/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import {useMenu} from "../hooks";

/**
 * withMenu - react HOC, designed to provide components with search data.
 * @function
 * @param {node} Component
 * @return node
 */
export default function withMenu(Component) {
    const Wrapper = React.forwardRef(function Wrapper(props) {
        const menu = useMenu();
        return (
            <Component {...props} menu={menu}/>
        );
    });
    Wrapper.displayName = "withMenu";
    return Wrapper;
}
