/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";

import {H2, List, ListItem, useLang, Link} from "@danilandreev/material-docs";
import ApiPage from "../../../components/ApiPage";

const importCode = `
import {H2} from "@danilandreev/material-docs";
// or
import H2 from "@danilandreev/material-docs/components/H2";
`.trim();

export default function H2API() {
    const {lang} = useLang();
    const locale = lang.locale.pages.H2API;
    const localeSpells = lang.locale.common.spells;
    const componentAPILocale = lang.locale.common.ComponentAPI;

    return (
        <ApiPage
            lang={lang}
            localeName={"H2API"}
            searchTags={["h2", "header", "tag", "anchor", "api"]}
            name={"H2"}
            importCode={importCode}
        >
            <H2>Demos</H2>
            <List>
                <ListItem><Link page={["Components", "Headers"]}>Headers</Link></ListItem>
            </List>
        </ApiPage>
    );
}