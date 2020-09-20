/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import {useMenu} from "../hooks";

export default function withMenu(Component) {
    const Wrapper = React.forwardRef(function Wrapper(props, ref) {
        const menu = useMenu();
        return (
            <Component {...props} menu={menu}/>
        );
    });
    Wrapper.displayName = Component.displayName;
    return Wrapper;
}
