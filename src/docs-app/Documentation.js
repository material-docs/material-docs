/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";

import DocsPageDemo from "./pages/Components/DocsPageDemo";

// API pages
import DocsPageAPI from "./pages/APIs/DocsPageAPI";
import DemoWithCodeAPI from "./pages/APIs/DemoWithCodeAPI";
import CodeAPI from "./pages/APIs/CodeAPI";
import PagesGroupAPI from "./pages/APIs/PagesGroupAPI";
import ImageAPI from "./pages/APIs/ImageAPI";
import ListItemAPI from "./pages/APIs/ListItemAPI";
import ExpansionCodeAPI from "./pages/APIs/ExpansionCodeAPI";
import BlockAPI from "./pages/APIs/BlockAPI";
import CodeSpanAPI from "./pages/APIs/CodeSpanAPI";
import ItalicAPI from "./pages/APIs/ItalicAPI";
import ListAPI from "./pages/APIs/ListAPI";
import DocsMenuItemAPI from "./pages/APIs/DocsMenuItemAPI";
import MarkdownAPI from "./pages/APIs/MarkdownAPI";
import TableAPI from "./pages/APIs/TableAPI";
import TableRowAPI from "./pages/APIs/TableRowAPI";
import TableCellAPI from "./pages/APIs/TableCellAPI";
import TableBodyAPI from "./pages/APIs/TableBodyAPI";
import TableHeadAPI from "./pages/APIs/TableHeadAPI";
import BoldAPI from "./pages/APIs/BoldAPI";
import ListItemContainedAPI from "./pages/APIs/ListItemContainedAPI";
import DocsPagesAPI from "./pages/APIs/DocsPagesAPI";
import DocsMenuAPI from "./pages/APIs/DocsMenuAPI";
import DocsLayoutAPI from "./pages/APIs/DocsLayoutAPI";

import AutoDocsMenuAPI from "./pages/APIs/AutoDocsMenuAPI";
import LanguageSelectorAPI from "./pages/APIs/LanguageSelectorAPI";
import SearchFieldAPI from "./pages/APIs/SearchFieldAPI";


import {DocsLayout, DocsPages, PagesGroup} from "@danilandreev/material-docs";

import RU from "./locale/RU.json";
import EN from "./locale/EN.json";
import ListsDemo from "./pages/Components/ListsDemo";
import Installation from "./pages/GettingStarted/Installation";


export default function Documentation() {
    return (
        <DocsLayout autoMenu defaultLang={EN} langs={[EN, RU]} basename={process.env.PUBLIC_URL} autoMenuDense>
            <DocsPages>
                <PagesGroup name={"Getting started"}>
                    <Installation/>
                </PagesGroup>
                <PagesGroup name={"Components"}>
                    <DocsPageDemo/>
                    <ListsDemo/>
                </PagesGroup>
                <PagesGroup name={"Component APIs"}>
                    <DocsLayoutAPI/>
                    <DocsPageAPI/>
                    <DemoWithCodeAPI/>
                    <CodeAPI />
                    <PagesGroupAPI/>
                    <ImageAPI/>
                    <ListItemAPI/>
                    <ExpansionCodeAPI/>
                    <BlockAPI/>
                    <CodeSpanAPI/>
                    <ItalicAPI/>
                    <BoldAPI/>
                    <ListAPI/>
                    <DocsMenuItemAPI/>
                    <MarkdownAPI/>
                    <TableAPI/>
                    <TableRowAPI/>
                    <TableCellAPI/>
                    <TableBodyAPI/>
                    <TableHeadAPI/>
                    <ListItemContainedAPI/>
                    <DocsPagesAPI/>
                    <DocsMenuAPI/>
                    <PagesGroup name={"System components"}>
                        <AutoDocsMenuAPI/>
                        <LanguageSelectorAPI/>
                        <SearchFieldAPI/>
                    </PagesGroup>
                </PagesGroup>
                <PagesGroup name={"Tutorials"}>

                </PagesGroup>
            </DocsPages>
        </DocsLayout>
    );
}