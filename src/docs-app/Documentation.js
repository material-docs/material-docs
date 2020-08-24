/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import DocsPageDemo from "./pages/Components/DocsPageDemo";
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

import {DocsLayout, DocsPages, PagesGroup} from "@danilandreev/material-docs";

import RU from "./locale/RU.json";
import EN from "./locale/EN.json";
import MarkdownAPI from "./pages/APIs/MarkdownAPI";


export default function Documentation() {
    return (
        <DocsLayout autoMenu defaultLang={EN} langs={[EN, RU]} basename={process.env.PUBLIC_URL}>
            <DocsPages>
                <PagesGroup name={"Getting started"}>

                </PagesGroup>
                <PagesGroup name={"Components"}>
                    <DocsPageDemo/>
                </PagesGroup>
                <PagesGroup name={"Component APIs"}>
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
                    <ListAPI/>
                    <DocsMenuItemAPI/>
                    <MarkdownAPI/>
                    <PagesGroup name={"System components"}>

                    </PagesGroup>
                </PagesGroup>
            </DocsPages>
        </DocsLayout>
    );
}