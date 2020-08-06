import React from "react";

export default function usePageScroll() {
    const [scroll, setScroll] = React.useState({scrollX: 0, scrollY: 0});

    React.useEffect(() => {
        window.addEventListener("scroll", onScrollChange);
        return () => window.removeEventListener("scroll", onScrollChange);
    }, []);

    function onScrollChange(event) { //TODO: change getting scroll to event
        const {scrollX, scrollY} = window;
        setScroll({scrollX, scrollY});
    }

    return scroll;
}