/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import LangProvider from "../components/LangProvider";

/**
 * withLocalLang - react HOC, designed to provide element with local lang.
 * @function
 * @param {{locale: object}} lang local Lang object for merging.
 * @return function
 */
export default function withLocalLang(lang) {
    /**
     * wrapper - wraps component in Wrapper.
     * @function
     * @param {object} Component
     * @return object
     */
    const wrapper = (Component) => {
        const Wrapper = React.forwardRef(function Wrapper(props, ref) {
            return (
                <LangProvider lang={lang}>
                    <Component {...props}/>
                </LangProvider>
            );
        });
        Wrapper.displayName = "MatDoc-withMenu";

        return Wrapper;
    }

    return wrapper;
}
