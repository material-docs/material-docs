/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import DocsLayout from "../lib/layout/DocsLayout";
import DocsPages from "../lib/components/DocsPages";
import PagesGroup from "../lib/components/PagesGroup/PagesGroup";
import DocsPageDemo from "./pages/DocsPageDemo";

export default function Documentation() {
    return(
        <DocsLayout autoMenu>
            <DocsPages>
                <PagesGroup name={"Getting started"}>

                </PagesGroup>
                <PagesGroup name={"Components"}>
                    <DocsPageDemo />
                </PagesGroup>
                <PagesGroup name={"APIs"}>

                </PagesGroup>
            </DocsPages>
        </DocsLayout>
    );
}