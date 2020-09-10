/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import logo from "./logo.svg";
import GitHubIcon from '@material-ui/icons/GitHub';

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
import LayoutDemo from "./pages/Components/LayoutDemo";
import DocsMenu from "@danilandreev/material-docs/components/DocsMenu/DocsMenu";
import AutoDocsMenu from "@danilandreev/material-docs/components/AutoDocsMenu/AutoDocsMenu";
import Landing from "@danilandreev/material-docs/components/Landing/Landing";
import MaterialDocsLanding from "./pages/MaterialDocsLanding";
import CreatingMaterialDocs from "./pages/Tutorials/CreatingMaterialDocs";
import HeadersDemo from "./pages/Components/HeadersDemo";
import MarkdownDemo from "./pages/Components/MarkdownDemo";
import TextStylingDemo from "./pages/Components/TextStylingDemo";


export default function Documentation() {
    return (
        <DocsLayout
            defaultLang={EN}
            langs={[EN, RU]}
            basename={process.env.PUBLIC_URL}
            name={"Material Docs"}
            logo={logo}
            description={"material-docs - react framework for easy creating documentation site in material design style."}
            keywords={[
                "material-design",
                "material-ui",
                "documentation",
                "documentation-tool",
                "framework",
                "components-library",
                "markdown",
                "markdown-converter"
            ]}
            version={"1.0.0"}
            actions={[
                {icon: <GitHubIcon />, link: "https://github.com/DanilAndreev/material-docs", tooltip: "Github source code"}
            ]}
        >
            <DocsMenu dense>
                <AutoDocsMenu/>
            </DocsMenu>
            <Landing>
                <MaterialDocsLanding/>
            </Landing>
            <DocsPages>
                <PagesGroup name={"Getting started"}>
                    <Installation/>
                </PagesGroup>
                <PagesGroup name={"Components"}>
                    <ListsDemo/>
                    <LayoutDemo/>
                    <HeadersDemo/>
                    <MarkdownDemo/>
                    <TextStylingDemo/>
                </PagesGroup>
                <PagesGroup name={"Component APIs"}>
                    <DocsLayoutAPI/>
                    <DocsPageAPI/>
                    <DemoWithCodeAPI/>
                    <CodeAPI/>
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
                    <AutoDocsMenuAPI/>
                    <PagesGroup name={"System components"}>
                        <LanguageSelectorAPI/>
                        <SearchFieldAPI/>
                    </PagesGroup>
                </PagesGroup>
                <PagesGroup name={"Tutorials"}>
                    <CreatingMaterialDocs/>
                </PagesGroup>
            </DocsPages>
        </DocsLayout>
    );
}