/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import marked from "marked";
import {useCommonStyles} from "../../stylesheets/commonStyles";
import generateMaterialDocsFromMarkdown from "../../utils/generateMaterialDocsFromMarkdown";
import clsx from "clsx";
import {useStyles} from "./styles";

function Markdown({children, className, style, inline = false, ...props}, ref) {
    const commonClasses = useCommonStyles();
    const classes = useStyles();
    const [content, setContent] = React.useState([]);

    React.useEffect(() => {
        try {
            const child = React.Children.map(children, String).join("");
            setContent(generateMaterialDocsFromMarkdown(child));
        } catch (error) {
            setContent(null);
            console.log(error);
        }
    }, [children]);

    if (inline) {
        return (
            <span ref={ref} className={clsx(commonClasses.pageBlock, classes.root, className)} style={style}>
                {content}
            </span>
        );
    }

    return (
        <div ref={ref} className={clsx(commonClasses.pageBlock, classes.root, className)} style={style}>
            {content}
        </div>
    );
}

export default React.forwardRef(Markdown);