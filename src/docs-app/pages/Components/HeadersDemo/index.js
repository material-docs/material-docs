/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import DocsPage from "@danilandreev/material-docs/components/DocsPage/DocsPage";
import React from "react";
import {H1, H2, H3} from "@danilandreev/material-docs/components/Headers";
import Markdown from "@danilandreev/material-docs/components/Markdown/Markdown";
import DemoWithCode from "@danilandreev/material-docs/components/DemoWithCode/DemoWithCode";
import {TaggingContext} from "@danilandreev/material-docs/hooks/useTags";
import AllHeaders from "../../../examples/Headers/AllHeaders";
import Code from "@danilandreev/material-docs/components/Code/Code";
import Block from "@danilandreev/material-docs/components/Block/Block";
import Box from "@material-ui/core/Box";

const AllHeadersCode = `
import React from "react";
import {
    H1,
    H2,
    H3,
    H4,
    H5,
    H6
} from "@danilandreev/material-docs/components/Headers";

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
    return (
        <DocsPage
            name={"Headers"}
            searchDescription={"Headers"}
            searchLabel={"Headers demonstration page."}
            keys={["h1", "h2", "h3", "h4", "h5", "h6", "typography", "header", "caption", "big", "text"]}
        >
            <H1>Headers</H1>
            <H3 noTag noDivider>Headers can be used to separate information by sense.</H3>
            <H2>Overview</H2>
            <Markdown>
                Вы можете использовать 6 видов заголовков: ```H1```, ```H2```, ```H3```, ```H4```, ```H5```.
                Они отличаются друг от друга размером и тем, что в заголовках размером ниже H3 по умолчанию не рисуется
                разделительная линия и они не добавляются в автоматически сгенерированный блок содержания страницы.
                Чем больше цифра в заголовке - тем меньше ег размер. Таким образом, ```H1``` - самый большой заголовок,
                а ```H6``` - самый маленький.
            </Markdown>
            <DemoWithCode
                paperContainer
                code={AllHeadersCode}
                theme={"darcula"}
                defaultExpanded
                name={"Headers example"}
            >
                <Box p={2}>
                    <TaggingContext.Provider value={{setTag: () => {}, removeTag: () => {}, tags: {}}}>
                        <AllHeaders/>
                    </TaggingContext.Provider>
                </Box>
            </DemoWithCode>
            <H2>Settings</H2>
            <H3 noDivider>Автоматическая генерация содержания страницы</H3>
            <Markdown>
                Для того, чтобы заголовок не создавал пункты в автоматическом содержании страницы - передайте ему __параметр__ ```noTag```.
                Если заголовок создаёт присутствует в содержании - при наведении на него мышью - слева будет отображаться кнопка
                смены якоря для удобного указания места на странице при копировании __url__.
            </Markdown>
            <Code theme={"darcula"}>
                {`return(\n    <H1 noTag>I am H1 header than not generates navigation tags!</H1>\n)`}
            </Code>
            <Markdown>> По умолчанию, у заголовков ```H1```, ```H2```, ```H3``` __параметр__ ```noTag = false```</Markdown>
            <H3 noDivider>Разделитель</H3>
            <Markdown>Для того, чтобы заголовок не имел разделительую черту - передайте ему __параметр__ ```noDivider```.</Markdown>
            <Code theme={"darcula"}>
                {`return(\n    <H1 noDivider>I am H1 without divider at the bottom!</H1>\n)`}
            </Code>
            <Markdown>> По умолчанию, у заголовков ```H1```, ```H2```, ```H3``` __параметр__ ```noDivider = false```</Markdown>
            <H3 noDivider>Пользовательские якоря</H3>
            <Markdown>
                Вы можете задавать якорь ля заголовка вручную с помощью параметра ```id```. Если он не указан -
                заголовок автоматически сгенерирует якорь из своего содержимого.
            </Markdown>
            <Code theme={"darcula"}>
                {`return(\n    <H1 id="i-am-the-best-one">I am H1 with custom anchor!</H1>\n)`}
            </Code>
            {/*TODO: add api header and links*/}
        </DocsPage>
    );
}