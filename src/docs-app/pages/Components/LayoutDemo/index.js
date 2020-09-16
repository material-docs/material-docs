/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import DocsPage from "@danilandreev/material-docs/components/DocsPage/DocsPage";
import {H1, H3} from "@danilandreev/material-docs/components";
import Markdown from "@danilandreev/material-docs/components/Markdown/Markdown";
import Code from "@danilandreev/material-docs/components/Code/Code";
import List from "@danilandreev/material-docs/components/List/List";
import ListItemContained from "@danilandreev/material-docs/components/ListItemContained/ListItemContained";
import ListItem from "@danilandreev/material-docs/components/ListItem/ListItem";
import Link from "@material-ui/core/Link";

const SimpleLayoutCode = `
import React from "react";
import {DocsLayout, DocsPages, DocsPage, DocsMenu, DocsMenuItem} from "@danilandreev/material-docs";

export default function Documentation() {
    return (
        <DocsLayout name="Simple docs">
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
import {DocsLayout, DocsPages, DocsPage, DocsMenu, DocsMenuItem, PagesGroup, AutoDocsMenu} from "@danilandreev/material-docs";

export default function Documentation() {
    return (
        <DocsLayout name="Docs with auto menu">
            <DocsMenu>
                <AutoDocsMenu/>
            </DocsMenu>
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
            <Code theme={"darcula"}>
                {SimpleLayoutCode}
            </Code>
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
            <H3 noDivider>More info</H3>
            <Markdown>
                You can learn more about creating material docs in [this guide]().
            </Markdown>
            <H3>APIs</H3>
            <List>
                <ListItem><Link>DocsLayout API</Link></ListItem>
                <ListItem><Link>DocsPage API</Link></ListItem>
                <ListItem><Link>DocsPages API</Link></ListItem>
                <ListItem><Link>DocsMenu API</Link></ListItem>
                <ListItem><Link>DocsMenuItem API</Link></ListItem>
                <ListItem><Link>AutoDocsMenu API</Link></ListItem>
            </List>
        </DocsPage>
    );
}