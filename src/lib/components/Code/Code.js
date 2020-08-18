/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import {darcula, dark, docco} from "react-syntax-highlighter/dist/cjs/styles/hljs";
import Paper from "@material-ui/core/Paper";
import SyntaxHighlighter from "react-syntax-highlighter";
import {blueGrey, grey} from "@material-ui/core/colors";
import clsx from "clsx";
import {useStyles} from "./styles";
import {useCommonStyles} from "../../stylesheets/commonStyles";


function Code({children, language = 'javascript', theme = 'light', style, className}, ref) {
    const classes = useStyles();
    const commonClasses = useCommonStyles();
    const [height, setHeight] = React.useState(0);
    const codeRef = React.useRef(null);

    React.useEffect(() => {
        if (codeRef.current) {
            setHeight(codeRef.current.clientHeight);
        } else {
            setHeight(0);
        }
    }, [codeRef.current, children]);

    function fixStyle(style) {
        return {...style, hljs: {...style.hljs, background: 'none'}};
    }

    const codeStyles = {
        light: {
            highlight: fixStyle(docco),
            background: grey[200],
        },
        dark: {
            highlight: fixStyle(dark),
            background: grey[900],
        },
        darcula: {
            highlight: fixStyle(darcula),
            background: blueGrey[900],
        },
    };

    let codeStyle = codeStyles.light;
    switch (theme) {
        case 'dark':
            codeStyle = codeStyles.dark;
            break;
        case 'darcula':
            codeStyle = codeStyles.darcula;
            break;
        default:
            codeStyle = codeStyles.light;
    }

//    console.log(SyntaxHighlighter.supportedLanguages.map(item => `"${item}"`).join(" | "));
    return (
        <Paper
            style={{backgroundColor: codeStyle.background, height, ...style}}
            className={clsx(commonClasses.pageBlock, classes.root, className)}
            elevation={0}
            ref={ref}
        >
            <div className={classes.highlighterContainer} ref={codeRef}>
                <SyntaxHighlighter language={language} style={codeStyle.highlight}>
                    {children}
                </SyntaxHighlighter>
            </div>
        </Paper>
    );
}

export default React.forwardRef(Code);