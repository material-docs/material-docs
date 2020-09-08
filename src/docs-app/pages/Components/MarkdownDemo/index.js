/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import DocsPage from "@danilandreev/material-docs/components/DocsPage/DocsPage";
import React from "react";
import {H1, H2, H3} from "@danilandreev/material-docs/components/Headers";
import DemoWithCode from "@danilandreev/material-docs/components/DemoWithCode/DemoWithCode";
import MarkdownOverview from "../../../examples/Markdown/MarkdownOverview";
import {TaggingContext} from "@danilandreev/material-docs/hooks/useTags";
import Box from "@material-ui/core/Box";
import Markdown from "@danilandreev/material-docs/components/Markdown/Markdown";
import useLang from "@danilandreev/material-docs/hooks/useLang/useLang";

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
                    <TaggingContext.Provider value={{setTag: () => {}, removeTag: () => {}, tags: {}}}>
                        <MarkdownOverview/>
                    </TaggingContext.Provider>
                </Box>
            </DemoWithCode>
            <H2>{locale.deepIntegration}</H2>
            <Markdown>{locale.infoBlock2}</Markdown>
        </DocsPage>
    );
}