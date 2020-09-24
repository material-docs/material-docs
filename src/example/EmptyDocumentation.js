/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";

import {DocsLayout, DocsPages} from "../lib";
import DocsMenu from "../lib/components/DocsMenu/DocsMenu";
import Landing from "../lib/components/Landing";


export default function EmptyDocumentation() {
    return (
        <DocsLayout>
            <DocsMenu dense>
            </DocsMenu>
            <DocsPages>
            </DocsPages>
            <Landing>

            </Landing>
        </DocsLayout>
    );
}