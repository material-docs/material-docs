/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import {Link} from "@material-ui/core";

import {H2, List, ListItem, useLang} from "@danilandreev/material-docs";
import ApiPage from "../../../components/ApiPage";

const importCode = `
import {DocsPages} from "@danilandreev/material-docs";
// or
import DocsPages from "@danilandreev/material-docs/components/DocsPages";
`.trim();

export default function DocsPagesAPI() {
    const {lang} = useLang();
    const locale = lang.locale.pages.DocsPagesAPI;
    const localeSpells = lang.locale.common.spells;
    const componentAPILocale = lang.locale.common.ComponentAPI;

    return (
        <ApiPage
            lang={lang}
            localeName={"DocsPagesAPI"}
            searchTags={["docs", "pages", "container", "api"]}
            name={"DocsPages"}
            importCode={importCode}
        >
            <H2>Demos</H2>
            <List>
                <ListItem><Link>Layout</Link></ListItem>
            </List>
        </ApiPage>
    );
}