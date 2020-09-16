/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import {Link} from "@material-ui/core";

import {H2, List, ListItem, useLang} from "@danilandreev/material-docs";
import ApiPage from "../../../components/ApiPage";

const importCode = `
import {DocsLayout} from "@danilandreev/material-docs";
// or
import DocsLayout from "@danilandreev/material-docs/components/DocsLayout";
`.trim();

export default function DocsLayoutAPI() {
    const {lang} = useLang();
    const locale = lang.locale.pages.DocsLayoutAPI;
    const localeSpells = lang.locale.common.spells;
    const componentAPILocale = lang.locale.common.ComponentAPI;

    return (
        <ApiPage
            lang={lang}
            localeName={"DocsLayoutAPI"}
            searchTags={["docs", "layout", "main", "component", "api"]}
            name={"DocsLayout"}
            importCode={importCode}
        >
            <H2>Demos</H2>
            <List>
                <ListItem><Link>Layout</Link></ListItem>
            </List>
        </ApiPage>
    );
}