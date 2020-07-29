/*
 * Author: Danil Andrieiev | danssg08@gmail.com |  https://github.com/DanilAndreev
 *  Copyright (c) 2020.
 */

import React from "react";
import {docco} from "react-syntax-highlighter/dist/cjs/styles/hljs";
import {dark} from "react-syntax-highlighter/dist/cjs/styles/hljs";
import {darcula} from "react-syntax-highlighter/dist/cjs/styles/hljs";
import Paper from "@material-ui/core/Paper";
import SyntaxHighlighter from "react-syntax-highlighter";
import {makeStyles} from "@material-ui/core/styles";
import {grey} from "@material-ui/core/colors";
import {blueGrey} from "@material-ui/core/colors";
import clsx from "clsx";
import {fix} from "react-syntax-highlighter/dist/cjs/languages/hljs";

const useStyles = makeStyles(theme => ({
    codePaper: {}
}));

export default function Code({children, language = 'jsx', theme = 'light', style, className}) {
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

    const classes = useStyles();
    return (
        <Paper
            style={{backgroundColor: codeStyle.background, ...style}}
            className={clsx(classes.codePaper, className)}
            elevation={0}
        >
            <SyntaxHighlighter language={language} style={codeStyle.highlight}>
                {children}
            </SyntaxHighlighter>
        </Paper>
    );
}