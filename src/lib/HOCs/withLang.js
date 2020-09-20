/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import {useLang} from "../hooks";

export default function withLang(Component) {
    const Wrapper = React.forwardRef(function Wrapper(props, ref) {
        const lang = useLang();
        return (
            <Component {...props} lang={lang}/>
        );
    });
    Wrapper.displayName = Component.displayName;
    return Wrapper;
}
