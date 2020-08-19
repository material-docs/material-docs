/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import DocsLayout from "../lib/layout/DocsLayout";
import DocsPages from "../lib/components/DocsPages";
import PagesGroup from "../lib/components/PagesGroup/PagesGroup";
import DocsPageDemo from "./pages/Components/DocsPageDemo";
import DocsPageAPI from "./pages/APIs/DocsPageAPI";

import RU from "./locale/RU.json";
import EN from "./locale/EN.json";
import useLang from "../lib/hooks/useLang/useLang";


export default function Documentation() {
    return(
        <DocsLayout autoMenu defaultLang={EN} langs={[EN, RU]} router={"hash-router"}>
            <DocsPages>
                <PagesGroup name={"Getting started"}>

                </PagesGroup>
                <PagesGroup name={"Components"}>
                    <DocsPageDemo />
                </PagesGroup>
                <PagesGroup name={"APIs"}>
                    <DocsPageAPI />
                </PagesGroup>
            </DocsPages>
        </DocsLayout>
    );
}