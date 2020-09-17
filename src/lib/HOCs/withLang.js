/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import {useLang} from "../hooks";

/**
 * withLang - react HOC, designed to provide components with language data.
 * @function
 * @param {node} Component
 * @return node
 */
export default function withLang(Component) {
    const Wrapper = React.forwardRef(function Wrapper(props) {
        const lang = useLang();
        return (
            <Component {...props} lang={lang}/>
        );
    });
    Wrapper.displayName = "MatDoc-withLang";
    return Wrapper;
}
