/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import DocsPageDemo from "./pages/Components/DocsPageDemo";
import DocsPageAPI from "./pages/APIs/DocsPageAPI";

import {DocsLayout, DocsPages, PagesGroup} from "@danilandreev/material-docs";

import RU from "./locale/RU.json";
import EN from "./locale/EN.json";
import DemoWithCodeAPI from "./pages/APIs/DemoWithCode";


export default function Documentation() {
    return (
        <DocsLayout autoMenu defaultLang={EN} langs={[EN, RU]} basename={process.env.PUBLIC_URL}>
            <DocsPages>
                <PagesGroup name={"Getting started"}>

                </PagesGroup>
                <PagesGroup name={"Components"}>
                    <DocsPageDemo/>
                </PagesGroup>
                <PagesGroup name={"APIs"}>
                    <DocsPageAPI/>
                    <DemoWithCodeAPI/>
                </PagesGroup>
            </DocsPages>
        </DocsLayout>
    );
}