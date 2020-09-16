/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import {useCommonStyles} from "../../stylesheets/commonStyles";
import generateMaterialDocsFromMarkdown from "../../utils/generateMaterialDocsFromMarkdown";
import clsx from "clsx";
import {styles} from "./styles";
import PropTypes from "prop-types";
import useTheme from "@material-ui/core/styles/useTheme";
import {withStyles} from "@material-ui/styles";

export const displayName = "MatDocMarkdown";

const Markdown = React.forwardRef(function Markdown(props, ref) {
    const {
        children,
        className,
        style,
        inline = false,
        data = {},
        classes,
        ...other
    } = props;
    const commonClasses = useCommonStyles();
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

Markdown.displayName = displayName;

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

export default withStyles(styles, {name: displayName})(Markdown);