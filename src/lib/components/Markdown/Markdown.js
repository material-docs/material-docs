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
import PropTypes from "prop-types";

const Markdown = React.forwardRef(function Markdown(props, ref) {
    const {
        children,
        className,
        style,
        inline = false,
        data = {},
        ...other
    } = props;
    const commonClasses = useCommonStyles();
    const classes = useStyles();
    const [content, setContent] = React.useState([]);

    React.useEffect(() => {
        try {
            const child = React.Children.map(children, String).join("");
            setContent(generateMaterialDocsFromMarkdown(child, data));
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
});

Markdown.displayName = "Markdown";

Markdown.defaultProps = {
    inline: false,
    data: {},
}

Markdown.propTypes = {
    // MarkdownProps
    inline: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
    // Stylable
    style: PropTypes.object,
    className: PropTypes.string,
    classes: PropTypes.object,
    // Containerable
}

export default Markdown;