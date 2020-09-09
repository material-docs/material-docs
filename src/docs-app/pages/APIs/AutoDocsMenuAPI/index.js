/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import {Link} from "@material-ui/core";

import {H2, List, ListItem, useLang} from "@danilandreev/material-docs";
import ApiPage from "../../../components/ApiPage";

const importCode = `
import {AutoDocsMenu} from "@danilandreev/material-docs";
// or
import AutoDocsMenu from "@danilandreev/material-docs/components/AutoDocsMenu";
`.trim();

export default function AutoDocsMenuAPI() {
    const {lang} = useLang();
    const locale = lang.locale.pages.AutoDocsMenuAPI;
    const localeSpells = lang.locale.common.spells;
    const componentAPILocale = lang.locale.common.ComponentAPI;

    return (
        <ApiPage
            lang={lang}
            localeName={"AutoDocsMenuAPI"}
            searchTags={["auto", "menu", "docs", "system", "api"]}
            name={"AutoDocsMenu"}
            importCode={importCode}
        >
            <H2>Demos</H2>
            <List>
                <ListItem><Link>Auto menu</Link></ListItem>
            </List>
        </ApiPage>
    );
}