/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import {useLang} from "@danilandreev/material-docs/hooks";
import DocsPage from "@danilandreev/material-docs/components/DocsPage/DocsPage";
import {H1, H2, H3} from "@danilandreev/material-docs/components";
import DemoWithCode from "@danilandreev/material-docs/components/DemoWithCode/DemoWithCode";
import Box from "@material-ui/core/Box";
import TextStylingOverview from "../../../examples/TextStyling/TextStylingOverview";
import Markdown from "@danilandreev/material-docs/components/Markdown/Markdown";
import TextStylingNested from "../../../examples/TextStyling/TextStylingNested";

const overviewCode = `
import React from "react";
import Bold from "@danilandreev/material-docs/components/Bold/Bold";
import Italic from "@danilandreev/material-docs/components/Italic/Italic";
import Block from "@danilandreev/material-docs/components/Block/Block";
import CodeSpan from "@danilandreev/material-docs/components/CodeSpan/CodeSpan";

export default function TextStylingOverview() {
    return(
        <React.Fragment>
            This is a <Bold>bold text</Bold> near <Italic>italic text</Italic> inside my line. <br/>
            And me is <Italic><Bold>bold italic text</Bold></Italic>
            <Block>I am text in <CodeSpan>{"<Block/>"}</CodeSpan> component. </Block>
            Lets see on prev code line via inline code block
            <CodeSpan>{"<Block>I am text in <CodeSpan>{\\"<Block/>\\"}</CodeSpan> component. </Block>"}</CodeSpan>
        </React.Fragment>
    );
}
`.trim();

const nestedCode = `
import React from "react";
import Bold from "@danilandreev/material-docs/components/Bold/Bold";
import Italic from "@danilandreev/material-docs/components/Italic/Italic";
import Block from "@danilandreev/material-docs/components/Block/Block";
import CodeSpan from "@danilandreev/material-docs/components/CodeSpan/CodeSpan";

export default function TextStylingNested() {
    return (
        <React.Fragment>
            I <Bold> am an <Italic>italic text inside</Italic> bold component.</Bold><br/><br/>
            <Block>I am a <CodeSpan>Block</CodeSpan> with <Italic><Bold>an italic bold text</Bold> inside!</Italic></Block>
        </React.Fragment>
    );
}
`.trim();

export default function TextStylingDemo() {
    const {lang} = useLang();
    const locale = lang.locale.pages.TextDecoratorsDemo;
    return (
        <DocsPage
            name={"Text decorators"}
            searchLabel={"Text decorators"}
            searchDescription={"Text styling demonstration page."}
            keys={["text", "styling", "decoration", "wrappers", "demo"]}
        >
            <H1>Text decorators</H1>
            <H3 noTag noDivider>{locale.pageAbout}</H3>
            <Markdown>{locale.infoBlock1}</Markdown>
            <DemoWithCode
                paperContainer
                code={overviewCode}
                defaultExpanded
                theme={"darcula"}
                name={locale.overview}
            >
                <Box p={2}>
                    <TextStylingOverview/>
                </Box>
            </DemoWithCode>
            <H2>{locale.nesting}</H2>
            <Markdown>{locale.nestingInfo}</Markdown>
            <DemoWithCode
                paperContainer
                code={nestedCode}
                theme={"darcula"}
                name={locale.nestedComponents}
            >
                <Box p={2}>
                    <TextStylingNested/>
                </Box>
            </DemoWithCode>
        </DocsPage>
    );
}