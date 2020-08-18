/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import marked from "marked";
import {useCommonStyles} from "../../stylesheets/commonStyles";

function Markdown({file, children, ...props}, ref) {
    const commonClasses = useCommonStyles();
    const [text, setText] = React.useState("");
    const [html, setHtml] = React.useState(null);

    React.useEffect(() => {
        try {
            const child = React.Children.map(children, String).join("");
            setText(child);
        } catch (error) {
            setText(file);
        }
    }, []);

    React.useEffect(() => {
        setHtml(marked(String(text)));
    }, [text]);

    return (
        <div ref={ref} dangerouslySetInnerHTML={{__html: html}} className={commonClasses.pageBlock}/>
    );
}

export default React.forwardRef(Markdown);