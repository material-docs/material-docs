/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import {useSwitchPage} from "../hooks";

/**
 * withSwitchPage - react HOC, designed to provide components pages switch mechanism.
 * @function
 * @param {object} Component
 * @return object
 */
export default function withSwitchPage(Component) {
    const Wrapper = React.forwardRef(function Wrapper(props, ref) {
        const switchPage = useSwitchPage();
        return (
            <Component {...props} search={switchPage}/>
        );
    });
    Wrapper.displayName = "MatDoc-withSwitchPage";
    return Wrapper;
}
