/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
// Components
import Header from "../components/Header";
import List from "../components/List/List";
import ListItem from "../components/ListItem/ListItem";
import Code from "../components/Code/Code";
import Link from "../components/Link";
import Bold from "../components/Bold/Bold";
import Italic from "../components/Italic/Italic";
import Image from "../components/Image/Image";
import Table from "../components/Table";
import TableHead from "../components/TableHead";
import TableBody from "../components/TableBody";
import TableRow from "../components/TableRow";
import TableCell from "../components/TableCell";
import Block from "../components/Block/Block";
import CodeSpan from "../components/CodeSpan/CodeSpan";
import ExpansionCode from "../components/ExpansionCode/ExpansionCode";
import DemoWithCode from "../components/DemoWithCode/DemoWithCode";
// MaterialUI components
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
// Utils
import marked from "marked";


/**
 * fixShieldedText - fixes bug with shielded symbols in text after using lexer.
 * @function
 * @param {string} text
 * @return {string}
 */
function fixShieldedText(text) {
    if (typeof text !== "string") return "";
    return text.replace(/&#39;+/g, "'")
        .replace(/&quot;+/g, "\"")
        .replace(/&lt;+/g, "<")
        .replace(/&gt;/g, ">");
}

export default function generateMaterialDocsFromMarkdown(input, storage = {}, key = 1, options) {
    if (!(typeof input === "string" || typeof input === "object"))
        throw new TypeError(`MaterialDocs: incorrect type of "input" param, expected "object | string", got "${typeof input}"`);
    if (typeof storage !== "object")
        throw new TypeError(`MaterialDocs: incorrect type of "storage" param, expected "object | string", got "${typeof storage}"`);
    if (typeof key === "object" && !options) {
        options = key;
        key = 1;
    }
    if (options && typeof options !== "object")
        throw new TypeError(`MaterialDocs: incorrect type of "options" param, expected "object", got "${typeof options}"`);
    if (!options) options = {};

    let tokens = input;
    if (typeof input === "string") {
        tokens = marked.lexer(input);
    }
    return (
        <React.Fragment key={`markdown-token-${key}`}>
            {tokens.map((token, tokenId) => {
                switch (token.type) {
                    case "html":
                        return (
                            <Typography
                                key={`paragraph-token-${tokenId}`}
                                variant={options.typographyInheritSize ? "inherit" : "body1"}
                                variantMapping={{body1: "span", body2: "span"}}
                            >
                                {token.text}
                            </Typography>
                        );
                    case "heading":
                        return (
                            <Header heading={token.depth} key={`heading-token-${tokenId}`}>
                                {token.tokens && generateMaterialDocsFromMarkdown(token.tokens, storage, tokenId + key)}
                            </Header>
                        );
                    case "text":
                        return token.tokens ?
                            generateMaterialDocsFromMarkdown(token.tokens, storage, tokenId + key) :
                            <span key={`text-token-${tokenId}`}>{fixShieldedText(token.text)}</span>;
                    case "paragraph":
                        return (
                            <Typography
                                key={`paragraph-token-${tokenId}`}
                                variant={options.typographyInheritSize ? "inherit" : "body1"}
                                variantMapping={{body1: "span", body2: "span"}}
                            >
                                {token.tokens && generateMaterialDocsFromMarkdown(token.tokens, storage, tokenId + key)}
                            </Typography>
                        );
                    case "list":
                        return (
                            <List key={`list-token-${tokenId}`}>
                                {token.items && generateMaterialDocsFromMarkdown(token.items, storage, tokenId + key)}
                            </List>
                        );
                    case "list_item":
                        return (
                            <ListItem key={`list-item-token-${tokenId}`}>
                                {token.tokens && generateMaterialDocsFromMarkdown(token.tokens, storage, tokenId + key)}
                            </ListItem>
                        );
                    case "code":
                        try {
                            let setting = JSON.parse(token.lang);
                            const {type = "code", language = "javascript"} = setting;
                            if (type !== "expansion-code" && type !== "code" && type !== "demo-with-code")
                                console.error(`MaterialDocs: incorrect type of code block setting field "type", expected "expansion-code | code | demo-with-code" got ${type}`);
                            if (language && typeof language !== "string")
                                console.error(`MaterialDocs: incorrect type of code block setting field "language", expected "string" got ${typeof language}`);
                            switch (setting.type) {
                                case "expansion-code": {
                                    const {name, collapsedHeight, theme, type, ...other} = setting;
                                    if (theme && typeof theme !== "string")
                                        console.error(`MaterialDocs: incorrect type of code block setting field "theme", expected "string" got ${typeof theme}`);
                                    return (
                                        <ExpansionCode
                                            language={language}
                                            name={name}
                                            collapsedHeight={collapsedHeight}
                                            key={`code-token-${tokenId}`}
                                            theme={theme}
                                            {...other}
                                        >
                                            {token.text}
                                        </ExpansionCode>
                                    );
                                    break;
                                }
                                case "demo-with-code": {
                                    const {defaultExpanded, text, name, theme, type, ...other} = setting;
                                    if (theme && typeof theme !== "string")
                                        console.error(`MaterialDocs: incorrect type of code block setting field "theme", expected "string" got ${typeof theme}`);
                                    if (text && typeof text !== "string")
                                        console.error(`MaterialDocs: incorrect type of code block setting field "text", expected "string" got ${typeof text}`);
                                    let Demo = null;
                                    if (typeof setting.demo === "string") {
                                        Demo = storage[setting.demo];
                                    }
                                    return (
                                        <DemoWithCode
                                            language={language}
                                            defaultExpanded={defaultExpanded}
                                            code={token.text}
                                            name={name}
                                            theme={theme}
                                            key={`code-token-${tokenId}`}
                                            {...other}
                                        >
                                            {Demo || null}
                                        </DemoWithCode>
                                    );
                                    break;
                                }
                                default: {
                                    const {theme, type, ...other} = setting;
                                    if (theme && typeof theme !== "string")
                                        console.error(`MaterialDocs: incorrect type of code block setting field "theme", expected "string" got ${typeof theme}`);
                                    return (
                                        <Code
                                            language={language}
                                            key={`code-token-${tokenId}`}
                                            theme={theme}
                                            {...other}
                                        >
                                            {token.text}
                                        </Code>
                                    );
                                }
                            }

                        } catch (error) {
                            if (error instanceof SyntaxError) {
                                return (
                                    <Code language={token.lang} key={`code-token-${tokenId}`}>
                                        {token.text}
                                    </Code>
                                );
                            } else {
                                throw error;
                            }
                        }
                        return (
                            <Code language={token.lang} key={`code-token-${tokenId}`}>
                                {token.text}
                            </Code>
                        );
                    case "codespan":
                        return (
                            <CodeSpan key={`codespan-token-${tokenId}`}>
                                <span dangerouslySetInnerHTML={{__html: token.text}}/>
                            </CodeSpan>
                        )
                    case "link": {
                        const {href, text, tokens} = token;
                        let settings = {};
                        try {
                            settings = JSON.parse(fixShieldedText(text));
                            if (typeof settings.text === "string") settings.tokens = marked.lexer(settings.text);
                        } catch (e) {
                            settings = {tokens};
                        } finally {
                            settings.href = href;
                        }
                        return (
                            <Link href={settings.href} page={settings.page} key={`link-token-${tokenId}`}>
                                {settings.tokens && generateMaterialDocsFromMarkdown(settings.tokens, storage, tokenId + key)}
                            </Link>
                        );
                    }
                    case "br":
                        return <br key={`br-token-${tokenId}`}/>
                    case "hr":
                        return <Divider key={`hr-token-${tokenId}`}/>
                    case "strong":
                        return (
                            <Bold key={`strong-token-${tokenId}`}>
                                {token.tokens && generateMaterialDocsFromMarkdown(token.tokens, storage, tokenId + key)}
                            </Bold>
                        );
                    case "em":
                        return (
                            <Italic key={`em-token-${tokenId}`}>
                                {token.tokens && generateMaterialDocsFromMarkdown(token.tokens, storage, tokenId + key)}
                            </Italic>
                        );
                    case "image": {
                        const {href, text} = token;
                        let settings = {src: href, alt: text};
                        try {
                            settings = JSON.parse(fixShieldedText(text));
                        } catch (e) {}
                        return <Image {...settings} src={settings.src} alt={settings.alt} key={`image-token-${tokenId}`}/>
                    }
                    case "table":
                        const header = token.tokens.header;
                        const cells = token.tokens.cells;
                        return (
                            <Table key={`table-token-${tokenId}`}>
                                <TableHead>
                                    <TableRow>
                                        {header.map((cell, index) => (
                                            <TableCell key={`markdown-table-head-cell-${index}`}>
                                                <Bold>
                                                    {cell && generateMaterialDocsFromMarkdown(cell, storage, tokenId + key)}
                                                </Bold>
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {cells.map((row, index) => (
                                        <TableRow key={`markdown-table-row-${index}`}>
                                            {row.map((cell, index) =>
                                                <TableCell key={`markdown-table-cell-${index}`}>
                                                    {cell && generateMaterialDocsFromMarkdown(cell, storage, tokenId + key)}
                                                </TableCell>)
                                            }
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        );
                    case "blockquote":
                        return (
                            <Block key={`blockquote-token-${tokenId}`}>
                                {token.tokens && generateMaterialDocsFromMarkdown(token.tokens, storage, tokenId + key)}
                            </Block>
                        );
                    default:
                        return null;
                }
            })}
        </React.Fragment>
    );
}