import React from "react";
import marked from "marked";

function Markdown({file, children, ...props}, ref) {
    const [text, setText] = React.useState(typeof children === "string" && children);
    const [html, setHtml] = React.useState(null);

    React.useEffect(() => {
        if (typeof props.text !== "string") {
            setText(file);
        }
    }, []);

    React.useEffect(() => {
        setHtml(marked(String(text)));
    }, [text]);

    return (
        <div ref={ref} dangerouslySetInnerHTML={{__html: html}} />
    );
}

export default React.forwardRef(Markdown);