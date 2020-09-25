/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React, {Suspense} from "react";
import {styles} from "./styles";
import {useCommonStyles} from "../../stylesheets/commonStyles";
// Components
import Tooltip from "@material-ui/core/Tooltip";
import H3 from "../H3";
// MaterialUI components
import Box from '@material-ui/core/Box';
import Code from "../Code/Code";
import Collapse from "@material-ui/core/Collapse";
import MenuItem from "@material-ui/core/MenuItem";
import Paper from "@material-ui/core/Paper";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
// MaterialUI icons
import FileCopyIcon from '@material-ui/icons/FileCopy';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CodeIcon from '@material-ui/icons/Code';
import CircularProgress from "@material-ui/core/CircularProgress";
// PropTypes validators
import PropTypes from "prop-types";
import DemoCodeActionValidator from "../../validators/DemoCodeActionValidator";
// Utils
import {withStyles} from "@material-ui/styles";
import AspectRatio from "../../utils/AspectRatio";
import copyToClipboard from "../../utils/copyToClipboard";
import {useSnackbar} from "notistack";
import {TaggingContext} from "../../hooks/useTags/useTags";
import {SwitchPageContext} from "../../hooks/useSwitchPage/useSwitchPage";
import {SearchContext} from "../../hooks/useSearch/useSearch";
import {GroupsContext} from "../../hooks/useGroups/useGroups";
import {NestingContext} from "../../hooks/useNesting/useNesting";
import {getFieldFromLang} from "../../utils";
import {useLang} from "../../hooks";


export const displayName = "MaterialDocs-DemoWithCode";

const DemoWithCode = React.forwardRef(function DemoWithCode(props, ref) {
    const {
        children,
        defaultExpanded,
        code,
        name,
        theme,
        noTag = false,
        paperContainer = false,
        actions,
        ratio,
        classes,
        ...other
    } = props;
    const commonClasses = useCommonStyles();
    const {lang} = useLang();
    const [expanded, setExpanded] = React.useState(!!defaultExpanded);
    const menuAnchor = React.useRef(null);
    const [menuOpen, setMenuOpen] = React.useState(false);
    const {enqueueSnackbar} = useSnackbar();
    const demoRef = React.useRef(null);

    const [height, setHeight] = React.useState(null);

    React.useEffect(() => {
        handleAspectRatio();
        window.addEventListener("resize", handleAspectRatio);
        return () => window.removeEventListener("resize", handleAspectRatio);
    }, [children, ratio, demoRef.current]);

    function handleAspectRatio() {
        if (demoRef.current) {
            const width = demoRef.current.clientWidth || 0;
            if (ratio instanceof AspectRatio)
                setHeight(ratio.getHeight(width));
        }
    }

    // Empty function for demo contexts.
    const emptyF = () => {
    };

    // Component wrapped in empty contexts to dismiss demo influence on Material Docs system.
    const demoBox = (
        <TaggingContext.Provider value={{setTag: emptyF, removeTag: emptyF, tags: {}}}>
            <SearchContext.Provider value={{addSearchItem: emptyF, removeSearchItem: emptyF, getSearchData: () => []}}>
                <GroupsContext.Provider
                    value={{addPage: emptyF, deletePage: emptyF, addGroup: emptyF, deleteGroup: emptyF, path: [], pages: [], groups: [], name: ""}}
                >
                    <NestingContext.Provider value={0}>
                        <Box p={other.p} m={other.m}>
                            {children}
                        </Box>
                    </NestingContext.Provider>
                </GroupsContext.Provider>
            </SearchContext.Provider>
        </TaggingContext.Provider>
    );

    return (
        <Box className={commonClasses.pageBlock}>
            {name &&
            <H3 noDivider noTag={noTag}>{name}</H3>
            }
            <Box style={{height: height || undefined}} ref={demoRef} className={classes.demo}>
                <Suspense fallback={<CircularProgress/>}>
                    {!paperContainer && demoBox}
                    {paperContainer &&
                    <Paper elevation={0} variant={"outlined"} className={classes.paperContainer}>
                        {demoBox}
                    </Paper>
                    }
                </Suspense>
            </Box>
            <Toolbar className={classes.toolbar}>
                {actions &&
                <React.Fragment>
                    <Tooltip title={getFieldFromLang(lang, "MaterialDocs/DemoWithCode/moreActions")}>
                        <IconButton ref={menuAnchor} onClick={event => setMenuOpen(true)}>
                            <MoreVertIcon fontSize={"small"}/>
                        </IconButton>
                    </Tooltip>
                    <Menu
                        anchorEl={menuAnchor.current}
                        getContentAnchorEl={null}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        keepMounted
                        open={menuOpen}
                        onClose={event => setMenuOpen(false)}
                    >
                        {actions.map(action =>
                            <a
                                className={classes.menuButtonLink}
                                key={`menu-item-${action.label} ${action.link}`}
                                href={action.link}
                            >
                                <MenuItem button>
                                    {action.label}
                                </MenuItem>
                            </a>
                        )}

                    </Menu>
                </React.Fragment>
                }
                <Tooltip title={getFieldFromLang(lang, "MaterialDocs/DemoWithCode/copyToClipboard")}>
                    <IconButton
                        onClick={() => {
                            copyToClipboard(code)
                                .then(res => enqueueSnackbar(getFieldFromLang(lang, "MaterialDocs/notices/codeCopied"), {variant: "success"}))
                                .catch(error => enqueueSnackbar(getFieldFromLang(lang, "MaterialDocs/notices/codeNotCopied"), {variant: "error"}));
                        }}
                    >
                        <FileCopyIcon fontSize={"small"}/>
                    </IconButton>
                </Tooltip>
                <Tooltip title={getFieldFromLang(lang, "MaterialDocs/DemoWithCode/expand")}>
                    <IconButton onClick={event => setExpanded(!expanded)}>
                        <CodeIcon fontSize={"small"}/>
                    </IconButton>
                </Tooltip>
            </Toolbar>
            <Collapse in={expanded}>
                <Code theme={theme}>
                    {code || ""}
                </Code>
            </Collapse>
        </Box>
    );
});

DemoWithCode.displayName = displayName;

DemoWithCode.propTypes = {
    // DemoWithCodeProps
    defaultExpanded: PropTypes.bool,
    code: PropTypes.string,
    mane: PropTypes.string,
    noTag: PropTypes.bool,
    paperContainer: PropTypes.bool,
    actions: DemoCodeActionValidator,
    children: PropTypes.node,
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
    // Stylable
    style: PropTypes.object,
    className: PropTypes.string,
    classes: PropTypes.object,
}

export default withStyles(styles, {name: displayName})(DemoWithCode);
