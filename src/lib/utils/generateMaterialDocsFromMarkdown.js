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

//TODO: add codespan inline code element;

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
                        return token.text;
                    case "paragraph":
                        return <Typography>{token.tokens && generateMaterialDocsFromMarkdown(token.tokens)}</Typography>
                    case "list":
                        return <List>{token.items && generateMaterialDocsFromMarkdown(token.items)}</List>;
                    case "list_item":
                        return <ListItem>{token.tokens && generateMaterialDocsFromMarkdown(token.tokens)}</ListItem>;
                    case "code":
                        return <Code language={token.lang}>{token.text}</Code>
                    case "codespan":
                        return <Code>{token.text}</Code>;
                    case "link":
                        return <Link href={token.href}>{token.tokens && generateMaterialDocsFromMarkdown(token.tokens)}</Link>
                    case "br":
                        return <br/>

                }

            })}
        </React.Fragment>
    );
}