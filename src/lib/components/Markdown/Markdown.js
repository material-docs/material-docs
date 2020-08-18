/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import marked from "marked";
import {useCommonStyles} from "../../stylesheets/commonStyles";
import generateMaterialDocsFromMarkdown from "../../utils/generateMaterialDocsFromMarkdown";

function Markdown({file, children, ...props}, ref) {
    const commonClasses = useCommonStyles();
    const [text, setText] = React.useState({});
    const [content, setContent] = React.useState(null);

    console.log(text);
    console.log(children)

    React.useEffect(() => {
        try {
            const child = React.Children.map(children, String).join("");
            setContent(generateMaterialDocsFromMarkdown(child));
        } catch (error) {
            setText(file);
        }
    }, [children]);

    return (
        <div ref={ref} className={commonClasses.pageBlock}>
            {content}
        </div>
    );
}

export default React.forwardRef(Markdown);