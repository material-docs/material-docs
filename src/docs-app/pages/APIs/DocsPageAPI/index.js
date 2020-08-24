/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import {Link} from "@material-ui/core";

import {H2, List, ListItem, useLang} from "@danilandreev/material-docs";
import ApiPage from "../../../components/ApiPage";

const importCode = `
import {DocsPage} from "@danilandreev/material-docs";
// or
import DocsPage from "@danilandreev/material-docs/components/DocsPage";
`.trim();

export default function DocsPageAPI() {
    const {lang} = useLang();
    const locale = lang.locale.pages.DocsPageAPI;
    const localeSpells = lang.locale.common.spells;
    const componentAPILocale = lang.locale.common.ComponentAPI;

    return (
        <ApiPage
            lang={lang}
            localeName={"DocsPageAPI"}
            searchTags={["docs", "page", "api"]}
            name={"DocsPageAPI"}
            importCode={importCode}
        >
            <H2>Demos</H2>
            <List>
                <ListItem><Link>Pages</Link></ListItem>
            </List>
        </ApiPage>
    );
}