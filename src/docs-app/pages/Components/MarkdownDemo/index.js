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
    return (
        <DocsPage
            name={"Markdown"}
            searchDescription={"Markdown - component, designed to convert text in markdown notation to Material Docs."}
            searchLabel={"Markdown"}
            searchTags={["markdown", "interpreter", "parser", "generator", "demo"]}
        >
            <H1>Markdown</H1>
            <H3 noTag noDivider>Markdown - component, designed to convert text in markdown notation to Material Docs</H3>
            <Markdown>
                Markdown - это упрощенный язык разметки, которы удобно использовать для создания статей, заметок и тому подобного.
            </Markdown>
            <DemoWithCode
                code={MarkdownOverviewCode}
                theme={"darcula"}
                paperContainer
                defaultExpanded
                name={"Overview example"}
            >
                <Box p={2}>
                    <TaggingContext.Provider value={{setTag: () => {}, removeTag: () => {}, tags: {}}}>
                        <MarkdownOverview/>
                    </TaggingContext.Provider>
                </Box>
            </DemoWithCode>
            <H2>Deep integration</H2>
            <Markdown>
                Классически, __markdown__ поддреживает два вида блоков кода: строчный и блочный. В Material Docs
                существует три способа продемонстрировать код - с помощью компонентов: ```Code```, ```ExpansionCode```, ```DemoWithCode```.
                Вы можете выбирать один из этих компонентов прямо в markdown коде.
            </Markdown>
        </DocsPage>
    );
}