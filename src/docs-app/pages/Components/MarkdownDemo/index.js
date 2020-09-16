/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import DocsPage from "@danilandreev/material-docs/components/DocsPage/DocsPage";
import React from "react";
import {H1, H2, H3, H4, H5} from "@danilandreev/material-docs/components/Headers";
import DemoWithCode from "@danilandreev/material-docs/components/DemoWithCode/DemoWithCode";
import MarkdownOverview from "../../../examples/Markdown/MarkdownOverview";
import {TaggingContext} from "@danilandreev/material-docs/hooks/useTags";
import Box from "@material-ui/core/Box";
import Markdown from "@danilandreev/material-docs/components/Markdown/Markdown";
import useLang from "@danilandreev/material-docs/hooks/useLang/useLang";
import Table from "@danilandreev/material-docs/components/Table/Table";
import {TableCell, TableBody, TableHead, TableRow} from "@danilandreev/material-docs";
import Code from "@danilandreev/material-docs/components/Code/Code";
import CodeSpan from "@danilandreev/material-docs/components/CodeSpan/CodeSpan";
import Block from "@danilandreev/material-docs/components/Block/Block";
import Bold from "@danilandreev/material-docs/components/Bold/Bold";
import ExpansionCodeMD from "../../../examples/Markdown/ExpansionCodeMD";
import DemoWithCodeMD from "../../../examples/Markdown/DemoWithCodeMD";
import CodeMD from "../../../examples/Markdown/CodeMD";

const MarkdownOverviewCode = `
import React from "react";
import Markdown from "@danilandreev/material-docs/components/Markdown";

const markdown = \`
# This is an overview markdown example
### It generated from markdown text and rendered using Material Docs elements
> You can change styling by providing theme overrides!

| Hello darkness my old friend     | Здравствуй, ночь, моя старая подруга! |
|----------------------------------|---------------------------------------|
| I've come to talk with you again | Я пришел снова побеседовать с тобой   |
\`.trim();

export default function MarkdownOverview() {
    return (
        <Markdown>
            {markdown}
        </Markdown>
    );
}
`.trim();


const expansionCodeBlockExample = `
import React from "react";
import Markdown from "@danilandreev/material-docs/components/Markdown";

const markdown = \`
\\\`\\\`\\\`{"type": "expansion-code", "theme": "darcula", "name": "ExpansionCode in markdown"}
import React from "react";

function test() {
    console.log("I am function in expansion code element.");
    return null;
}
\\\`\\\`\\\`
\`.trim();

export default function MarkdownOverview() {
    return (
        <Markdown>
            {markdown}
        </Markdown>
    );
}
`.trim();

const demoWithCodeBlockExample = `
import React from "react";
import Markdown from "@danilandreev/material-docs/components/Markdown";

function HelloWorld() {
    return (
        <div>
            <h1>Hello darkness my old friend</h1>
        </div>
    );
}

const markdown = \`
\\\`\\\`\\\`
{
    "type"
:
    "demo-with-code", "theme"
:
    "darcula", "name"
:
    "DemoWithCode in markdown", "demo"
:
    "exampleFunction"
}
import React from "react";

function HelloWorld() {
    return (
        <div>
            <h1>Hello darkness my old friend</h1>
        </div>
    );
}
\\\`\\\`\\\`
\`.trim();

export default function DemoWithCodeMD() {
    return (
        <Markdown data={{exampleFunction: <HelloWorld/>}}>
            {markdown}
        </Markdown>
    );
}
`.trim();

const codeBlockExample = `
import React from "react";
import Markdown from "@danilandreev/material-docs/components/Markdown";

const markdown = \`
\\\`\\\`\\\`{"type": "code", "theme": "darcula"}
import React from "react";

function test() {
    console.log("I am function in code element.");
    return null;
}
\\\`\\\`\\\`
\`.trim();

export default function CodeMD() {
    return (
        <Markdown>
            {markdown}
        </Markdown>
    );
}

`.trim();


const codeBlockExamples = {
    "expansion-code": {code: expansionCodeBlockExample, demo: <ExpansionCodeMD/>},
    "demo-with-code": {code: demoWithCodeBlockExample, demo: <DemoWithCodeMD/>},
    "code": {code: codeBlockExample, demo: <CodeMD/>},
}

export default function MarkdownDemo() {
    const {lang} = useLang();
    const locale = lang.locale.pages.MarkdownDemo;

    return (
        <DocsPage
            name={"Markdown"}
            searchDescription={"Markdown - component, designed to convert text in markdown notation to Material Docs."}
            searchLabel={"Markdown"}
            searchTags={["markdown", "interpreter", "parser", "generator", "demo"]}
        >
            <H1>Markdown</H1>
            <H3 noTag noDivider>{locale.pageAbout}</H3>
            <Markdown>{locale.infoBlock1}</Markdown>
            <DemoWithCode
                code={MarkdownOverviewCode}
                theme={"darcula"}
                paperContainer
                defaultExpanded
                name={locale.overviewExample}
            >
                <Box p={2}>
                    <TaggingContext.Provider value={{
                        setTag: () => {
                        }, removeTag: () => {
                        }, tags: {}
                    }}>
                        <MarkdownOverview/>
                    </TaggingContext.Provider>
                </Box>
            </DemoWithCode>
            <H2>{locale.moreInfo}</H2>
            <Markdown>{locale.moreInfoDetails}</Markdown>
            <H2>{locale.deepIntegration}</H2>
            <Markdown>{locale.infoBlock2}</Markdown>
            {locale.codeComponents.map(item => {
                const demo = codeBlockExamples[item.key];
                return (
                    <React.Fragment key={item.key}>
                        <H3 noTag={false}>{item.name}</H3>
                        {item.description && <Markdown>{item.description}</Markdown>}
                        {demo &&
                        <DemoWithCode
                            code={demo.code}
                            theme={"darcula"}
                            paperContainer
                        >
                            <Box p={2}>
                                <TaggingContext.Provider value={{setTag: () => {}, removeTag: () => {}, tags: {}}}>
                                    {demo.demo}
                                </TaggingContext.Provider>
                            </Box>
                        </DemoWithCode>
                        }
                        <Block><Bold>Key</Bold> - <CodeSpan>{item.key}</CodeSpan></Block>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Description</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {item.params.map(param => (
                                    <TableRow key={param.name}>
                                        <TableCell><CodeSpan>{param.name}</CodeSpan></TableCell>
                                        <TableCell>{param.description}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </React.Fragment>
                )
            })}
        </DocsPage>
    );
}