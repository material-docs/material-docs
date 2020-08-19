/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import marked from "marked";
import React from "react";
import {Header} from "../components/Headers";
import Typography from "@material-ui/core/Typography";
import List from "../components/List/List";
import ListItem from "../components/ListItem/ListItem";
import Code from "../components/Code/Code";
import {Link} from "@material-ui/core";
import Bold from "../components/Bold/Bold";
import Italic from "../components/Italic/Italic";
import Image from "../components/Image/Image";
import Table from "../components/Table";
import TableHead from "../components/TableHead";
import TableBody from "../components/TableBody";
import TableRow from "../components/TableRow";
import TableCell from "../components/TableCell";
import Divider from "@material-ui/core/Divider";
import Block from "../components/Block/Block";
import CodeSpan from "../components/CodeSpan/CodeSpan";

export default function generateMaterialDocsFromMarkdown(input) {
    if (!(typeof input === "string" || typeof input === "object"))
        throw new TypeError(`MaterialDocs: incorrect type of input param, expected object | string, got ${typeof input}`);
    let tokens = input;
    if (typeof input === "string") {
        tokens = marked.lexer(input);
    }
    typeof input === "string" && console.log(tokens, input);

    return (
        <React.Fragment>
            {tokens.map(token => {
                switch (token.type) {
                    case "heading":
//                        return <Header heading={token.depth}>{token.tokens && generateMaterialDocsFromMarkdown(token.tokens)}</Header>
                        return <Header heading={token.depth}>{token.text}</Header>
                    case "text":
                        return token.tokens ? generateMaterialDocsFromMarkdown(token.tokens) : token.text;
                    case "paragraph":
                        return <Typography>{token.tokens && generateMaterialDocsFromMarkdown(token.tokens)}</Typography>
                    case "list":
                        return <List>{token.items && generateMaterialDocsFromMarkdown(token.items)}</List>;
                    case "list_item":
                        return <ListItem>{token.tokens && generateMaterialDocsFromMarkdown(token.tokens)}</ListItem>;
                    case "code":
                        return <Code language={token.lang}>{token.text}</Code>
                    case "codespan":
                        return <CodeSpan>{token.text}</CodeSpan>
                    case "link":
                        return <Link
                            href={token.href}>{token.tokens && generateMaterialDocsFromMarkdown(token.tokens)}</Link>
                    case "br":
                        return <br/>
                    case "hr":
                        return <Divider/>
                    case "strong":
                        return <Bold>{token.tokens && generateMaterialDocsFromMarkdown(token.tokens)}</Bold>
                    case "em":
                        return <Italic>{token.tokens && generateMaterialDocsFromMarkdown(token.tokens)}</Italic>
                    case "image":
                        return <Image src={token.href} alt={token.text}/>
                    case "table":
                        const header = token.tokens.header;
                        const cells = token.tokens.cells;
                        return (
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        {header.map(cell => (
                                            <TableCell>
                                                <Bold>
                                                    {cell && generateMaterialDocsFromMarkdown(cell)}
                                                </Bold>
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {cells.map(row => (
                                        <TableRow>
                                            {row.map(cell =>
                                                <TableCell>{cell && generateMaterialDocsFromMarkdown(cell)}</TableCell>)}
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        );
                    case "blockquote":
                        return <Block>{token.tokens && generateMaterialDocsFromMarkdown(token.tokens)}</Block>
                    default:
                        break;
                }

            })}
        </React.Fragment>
    );
}