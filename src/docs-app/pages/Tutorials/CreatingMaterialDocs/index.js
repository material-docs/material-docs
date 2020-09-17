/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import DocsPage from "@danilandreev/material-docs/components/DocsPage/DocsPage";
import {H1, H2, H3} from "@danilandreev/material-docs/components";
import Markdown from "@danilandreev/material-docs/components/Markdown/Markdown";
import List from "@danilandreev/material-docs/components/List/List";
import ListItem from "@danilandreev/material-docs/components/ListItem/ListItem";
import ListItemContained from "@danilandreev/material-docs/components/ListItemContained/ListItemContained";
import Block from "@danilandreev/material-docs/components/Block/Block";
import Code from "@danilandreev/material-docs/components/Code/Code";

const startCode = `
import React from "react";
import DocsLayout from "@danilandreev/material-docs/layout";
import DocsMenu from "@danilandreev/material-docs/components/DocsMenu";
import DocsPages from "@danilandreev/material-docs/components/DocsPages";

function MyMaterialDocs() {
    return (
        <DocsLayout
            name="Test documentation"
            version="1.0.0"
            logo="logo_path"
            keywords={["my", "example", "documentation"]}
            author="Me"
        >
            <DocsMenu>
            </DocsMenu>
            <DocsPages>
            </DocsPages>
        </DocsLayout>
    );
}
`.trim();

const pageCode = `
import React from "react";
import DocsPage from "@danilandreev/material-docs/components/DocsPage";

function PageAboutMe() {
    return(
        <DocsPage
            
        >
            <H1>My name is Danil Andreev</H1>
            <Markdown>I am 19 years old. I am __3D artist__ and __programmer__. </Markdown>
            
            
        </DocsPage>
    );
} 
`.trim();

export default function CreatingMaterialDocs() {
    return (
        <DocsPage
            name={"Creating Material Docs"}
            searchTags={["create", "material", "docs", "tutorial", "faq", "manual"]}
            searchLabel={"Creating Material Docs"}
        >
            <H1 noDivider>Creating Material Docs</H1>
            кртинка документации
            <H3 noDivider noTag>In this article you will get to know basics of Material Docs workflow</H3>
            <H2 noDivider>Введение</H2>
            <Markdown>
                Для начала, давайте разберемся из чего состоит __макет__ документации.
                В Material Docs фреймворке реализована страничная логика. Это означает, что информация хранится на
                отдельных смысловых страницах, которые могут быть обьеденены в смысловые группы.
                Также, на странице информация может быть разделена с помощью заголовков и описана с помощью
                интерактивных компонентов,
                таких как: списки, таблицы, блоки кода и им подобные.
                Структура модет выглядеть, к примеру, вот так:
            </Markdown>
            <List>
                <ListItem>
                    Web
                    <ListItemContained>
                        <ListItem type={"square"}>
                            Design
                            <ListItemContained>
                                <ListItem type={"upper-roman"}>What is web design</ListItem>
                                <ListItem type={"upper-roman"}>Popular software for creating design.</ListItem>
                                <ListItem type={"upper-roman"}>Best design schools</ListItem>
                            </ListItemContained>
                        </ListItem>
                        <ListItem type={"square"}>
                            Scripting
                            <ListItemContained>
                                <ListItem type={"upper-roman"}>Where scripts are used</ListItem>
                                <ListItem type={"upper-roman"}>Javascript</ListItem>
                                <ListItem type={"upper-roman"}>About ES6</ListItem>
                            </ListItemContained>
                        </ListItem>
                    </ListItemContained>
                </ListItem>
                <ListItem>
                    Game dev
                    <ListItemContained>
                        <ListItem type={"square"}>
                            3D Artist
                            <ListItemContained>
                                <ListItem type={"upper-roman"}>Who are 3D artists?</ListItem>
                                <ListItem type={"upper-roman"}>Creating stylized game character</ListItem>
                                <ListItem type={"upper-roman"}>Houdini VFX with games</ListItem>
                            </ListItemContained>
                        </ListItem>
                        <ListItem type={"square"}>
                            Programming
                            <ListItemContained>
                                <ListItem type={"upper-roman"}>Pros and cons of programming for games</ListItem>
                                <ListItem type={"upper-roman"}>Popular game engines</ListItem>
                                <ListItem type={"upper-roman"}>About real time rendering</ListItem>
                            </ListItemContained>
                        </ListItem>
                    </ListItemContained>
                </ListItem>
            </List>
            <Block>Где круг - группа, квадрат - страница, латинская цифра - заголовок.</Block>
            <H2>Начнем кодить</H2>
            <Markdown>Создадим документацию о себе. </Markdown>
            <H3 noDivider>Настройка ядра</H3>
            <Markdown>В первую очередь, необходимо создать корневой элемент Material Docs и настроить его:</Markdown>
            <Code theme={"darcula"}>{startCode}</Code>
            <Markdown>
                Мы успешно настроили ядро Material Docs. в ```DocsLayout``` была передана служебная информация,
                такая как: название, версия, автор...
            </Markdown>
            <H3>Создание страницы</H3>
            <Markdown>
                Теперь, давайте создадим страницу. Страница может хранить любую информацию.
                Для удобства - используйте заголовки, чтобы разделить страницу на смысловые блоки.
            </Markdown>
            <Code theme={"darcula"}>{pageCode}</Code>
        </DocsPage>
    );
}