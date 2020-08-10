/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";

/**
 * usePageScroll - React hook, used to get page scroll position.
 * @returns {{scrollY: number, scrollX: number}}
 * @example
 * const {scrollY, scrollX} = usePageScroll();
 */
export default function usePageScroll() {
    const [scroll, setScroll] = React.useState({scrollX: 0, scrollY: 0});

    React.useEffect(() => {
        window.addEventListener("scroll", onScrollChange);
        return () => window.removeEventListener("scroll", onScrollChange);
    }, []);

    function onScrollChange(event) {
        const {scrollX, scrollY} = window;
        setScroll({scrollX, scrollY});
    }

    return scroll;
}