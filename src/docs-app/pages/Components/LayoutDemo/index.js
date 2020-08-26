/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import DocsPage from "@danilandreev/material-docs/components/DocsPage/DocsPage";
import {H1, H2, H3, H4, H5, H6} from "@danilandreev/material-docs/components/Headers";
import DemoWithCode from "@danilandreev/material-docs/components/DemoWithCode/DemoWithCode";
import SimpleList from "../../../examples/Lists/SimpleList";
import Box from "@material-ui/core/Box";
import ListWithNestedItems from "../../../examples/Lists/ListWithNestedItems";
import DecoratedList from "../../../examples/Lists/DecoratedList";
import List from "@danilandreev/material-docs/components/List/List";
import ListItem from "@danilandreev/material-docs/components/ListItem/ListItem";
import Link from "@material-ui/core/Link";
import Markdown from "@danilandreev/material-docs/components/Markdown/Markdown";
import Code from "@danilandreev/material-docs/components/Code/Code";

const SimpleLayout = `
import React from "react";
import {DocsLayout, DocsPages, DocsPage, DocsMenu, DocsMenuItem} from "@danilandreev/material-docs";

export default function Documentation() {
    return (
        <DocsLayout>
            <DocsMenu>
                <DocsMenuItem textPrimary="First Page" name="My first page"/>
                <DocsMenuItem textPrimary="Second Page" name="This page is cooler than first."/>
            </DocsMenu>
            <DocsPages>
                <DocsPage name="My first page">Page content...</DocsPage>
                <DocsPage name="This page is cooler than first.">Page content...</DocsPage>
            </DocsPages>
        </DocsLayout>
    );
}
`.trim();

const LayoutWithAutoMenu = `
import React from "react";
import {DocsLayout, DocsPages, DocsPage, DocsMenu, DocsMenuItem, PagesGroup} from "@danilandreev/material-docs";

export default function Documentation() {
    return (
        <DocsLayout autoMenu>
            <DocsPages>
                <PagesGroup name="My page group">
                    <DocsPage name="My first page">Page content...</DocsPage>
                    <DocsPage name="This page is cooler than first.">Page content...</DocsPage>                
                </PagesGroup>
                <PagesGroup name="Another page group">
                    <DocsPage name="Here we are">Page content...</DocsPage>
                    <DocsPage name="Riding the sky">Page content...</DocsPage>                
                </PagesGroup>
                <DocsPage name="I am in the root group">Page content...</DocsPage>                
            </DocsPages>
        </DocsLayout>
    );
}
`.trim();

export default function LayoutDemo() {
    return (
        <DocsPage
            name={"Layout"}
            searchDescription={"Demonstration page of layout functional."}
            searchLabel={"Layout"}
            searchTags={["docs", "layout", "tutorial", "page", "menu", "search", "locale", "lang"]}
        >
            <H1>Layout</H1>
            <H3 noTag noDivider>Layout - is a core of MaterialDocs.</H3>
            <Markdown>
                ```DocsLayout``` component contains _locale_ information, _search_ context and lot of technical data. __Material Docs__ starts here.
            </Markdown>
            <H3 noDivider>Simple layout</H3>
            <Code theme={"darcula"}>{SimpleLayout}</Code>
            <Markdown>
                This code shows how to create simple layout. __Page names__ will be automatically converted to __routes__, so give normal name for pages.
                ```DocsMenuItem``` prop ___name___ is a page identifier.
            </Markdown>
            <H3 noDivider>Layout with auto menu</H3>
            <Code theme={"darcula"}>{LayoutWithAutoMenu}</Code>
            <Markdown>
                Here is ```DocsLayout``` with automated menu. You can add __pages__ and __groups__ in other __groups__ to create
                hierarchical menu structure.
            </Markdown>



        </DocsPage>
    );
}