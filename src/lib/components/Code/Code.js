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
import {styles} from "./styles";
import {useCommonStyles} from "../../stylesheets/commonStyles";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core";

export const displayName = "MatDocCode";

const Code = React.forwardRef(function Code(props, ref) {
    const {
        children,
        language = "javascript",
        theme = "light",
        style,
        className,
        classes,
        ...other
    } = props;
    const commonClasses = useCommonStyles();
    const [height, setHeight] = React.useState(0);
    const codeRef = React.useRef(null);
    const rootRef = React.useRef(null);

    React.useEffect(() => {
        onResize();
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, [children, codeRef.current, rootRef.current]);

    function onResize(event) {
        const scrollbar = rootRef.current ? rootRef.current.offsetHeight - rootRef.current.clientHeight : 0;
        if (codeRef.current) {
            setHeight(codeRef.current.clientHeight + scrollbar);
        } else {
            setHeight(0);
        }
    }

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

    return (
        <Paper
            style={{backgroundColor: codeStyle.background, height, ...style}}
            className={clsx(commonClasses.pageBlock, classes.root, className)}
            elevation={0}
            ref={element => {
                rootRef.current = element;
                if (ref) ref.current = element
            }}
        >
            <div className={classes.highlighterContainer} ref={codeRef}>
                <SyntaxHighlighter language={language} style={codeStyle.highlight}>
                    {children}
                </SyntaxHighlighter>
            </div>
        </Paper>
    );
});

Code.displayName = displayName;

Code.propTypes = {
    // CodeProps
    theme: PropTypes.oneOf(["light", "dark", "darcula"]),
    language: PropTypes.oneOf([
        "1c", "abnf", "accesslog", "actionscript", "ada", "angelscript", "apache", "applescript", "arcade",
        "arduino", "armasm", "asciidoc", "aspectj", "autohotkey", "autoit", "avrasm", "awk", "axapta", "bash",
        "basic", "bnf", "brainfuck", "c-like", "c", "cal", "capnproto", "ceylon", "clean", "clojure-repl", "clojure",
        "cmake", "coffeescript", "coq", "cos", "cpp", "crmsh", "crystal", "csharp", "csp", "css", "d", "dart",
        "delphi", "diff", "django", "dns", "dockerfile", "dos", "dsconfig", "dts", "dust", "ebnf", "elixir",
        "elm", "erb", "erlang-repl", "erlang", "excel", "fix", "flix", "fortran", "fsharp", "gams", "gauss",
        "gcode", "gherkin", "glsl", "gml", "go", "golo", "gradle", "groovy", "haml", "handlebars", "haskell",
        "haxe", "hsp", "htmlbars", "http", "hy", "inform7", "ini", "irpf90", "isbl", "java", "javascript",
        "jboss-cli", "json", "julia-repl", "julia", "kotlin", "lasso", "latex", "ldif", "leaf", "less", "lisp",
        "livecodeserver", "livescript", "llvm", "lsl", "lua", "makefile", "markdown", "mathematica", "matlab",
        "maxima", "mel", "mercury", "mipsasm", "mizar", "mojolicious", "monkey", "moonscript", "n1ql", "nginx",
        "nim", "nix", "nsis", "objectivec", "ocaml", "openscad", "oxygene", "parser3", "perl", "pf", "pgsql",
        "php-template", "php", "plaintext", "pony", "powershell", "processing", "profile", "prolog", "properties",
        "protobuf", "puppet", "purebasic", "python-repl", "python", "q", "qml", "r", "reasonml", "rib", "roboconf",
        "routeros", "rsl", "ruby", "ruleslanguage", "rust", "sas", "scala", "scheme", "scilab", "scss", "shell",
        "smali", "smalltalk", "sml", "sqf", "sql", "stan", "stata", "step21", "stylus", "subunit", "swift",
        "taggerscript", "tap", "tcl", "thrift", "tp", "twig", "typescript", "vala", "vbnet", "vbscript-html",
        "vbscript", "verilog", "vhdl", "vim", "x86asm", "xl", "xml", "xquery", "yaml", "zephir"
    ]),
    children: PropTypes.string,
    // Stylable
    style: PropTypes.object,
    className: PropTypes.string,
    classes: PropTypes.object,
}

export default withStyles(styles, {name: displayName})(Code);
