/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import {useSwitchPage} from "../hooks";

export default function withSwitchPage(Component) {
    const Wrapper = React.forwardRef(function Wrapper(props, ref) {
        const switchPage = useSwitchPage();
        return (
            <Component {...props} search={switchPage}/>
        );
    });
    Wrapper.displayName = Component.displayName;
    return Wrapper;
}
