/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import DocsPage from "@danilandreev/material-docs/components/DocsPage/DocsPage";
import React from "react";
import {H1, H2, H3} from "@danilandreev/material-docs/components";
import Markdown from "@danilandreev/material-docs/components/Markdown/Markdown";
import DemoWithCode from "@danilandreev/material-docs/components/DemoWithCode/DemoWithCode";
import {TaggingContext} from "@danilandreev/material-docs/hooks/useTags";
import AllHeaders from "../../../examples/Headers/AllHeaders";
import Code from "@danilandreev/material-docs/components/Code/Code";
import Box from "@material-ui/core/Box";
import useLang from "@danilandreev/material-docs/hooks/useLang/useLang";

const AllHeadersCode = `
import React from "react";
import {
    H1,
    H2,
    H3,
    H4,
    H5,
    H6
} from "@danilandreev/material-docs/components";

export default function AllHeaders() {
    return (
        <div style={{padding: "20px"}}>
            <H1> I am H1 header. I am the biggest.</H1>
            <H2> I am H2 header. I am so pretty.</H2>
            <H3> I am H3 header.</H3>
            <H4> I am H4 header. I have no underline.</H4>
            <H5> I am H5 header. Also I don't create item in page navigation list.</H5>
            <H6> I am H6 header. I am the smallest.</H6>
        </div>
    );
}
`.trim();

export default function HeadersDemo() {
    const {lang} = useLang();
    const locale = lang.locale.pages.HeadersDemo;
    return (
        <DocsPage
            name={"Headers"}
            searchDescription={"Headers"}
            searchLabel={"Headers demonstration page."}
            keys={["h1", "h2", "h3", "h4", "h5", "h6", "typography", "header", "caption", "big", "text"]}
        >
            <H1>Headers</H1>
            <H3 noTag noDivider>{locale.pageAbout}</H3>
            <H2>Overview</H2>
            <Markdown> {locale.infoBlock1} </Markdown>
            <DemoWithCode
                paperContainer
                code={AllHeadersCode}
                theme={"darcula"}
                defaultExpanded
                name={locale.headersExample}
            >
                <Box p={2}>
                    <TaggingContext.Provider value={{
                        setTag: () => {
                        }, removeTag: () => {
                        }, tags: {}
                    }}>
                        <AllHeaders/>
                    </TaggingContext.Provider>
                </Box>
            </DemoWithCode>
            <H2>Settings</H2>
            <H3 noDivider>{locale.contentAutoGeneration}</H3>
            <Markdown> {locale.tagsInfo} </Markdown>
            <Code theme={"darcula"}>
                {`return(\n    <H1 noTag>I am H1 header than not generates navigation tags!</H1>\n)`}
            </Code>
            <Markdown>{locale.noTagInfo}</Markdown>
            <H3 noDivider>{locale.divider}</H3>
            <Markdown>{locale.dividerInfo}</Markdown>
            <Code theme={"darcula"}>
                {`return(\n    <H1 noDivider>I am H1 without divider at the bottom!</H1>\n)`}
            </Code>
            <Markdown>{locale.noDividerInfo}</Markdown>
            <H3 noDivider>{locale.customAnchors}</H3>
            <Markdown> {locale.anchorInfo} </Markdown>
            <Code theme={"darcula"}>
                {`return(\n    <H1 id="i-am-the-best-one">I am H1 with custom anchor!</H1>\n)`}
            </Code>
            {/*TODO: add api header and links*/}
        </DocsPage>
    );
}