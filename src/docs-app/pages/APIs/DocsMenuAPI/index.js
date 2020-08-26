/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import {Link} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

import {
    DocsPage,
    Code,
    Table,
    TableRow,
    TableHead,
    TableCell,
    TableBody,
    List,
    ListItem,
    useLang,
    H1,
    H2,
    H3
} from "@danilandreev/material-docs";
import ApiPage from "../../../components/ApiPage";

const importCode = `
import {DocsMenu} from "@danilandreev/material-docs";
// or
import DocsMenu from "@danilandreev/material-docs/components/DocsMenu";
`.trim();

export default function DocsMenuAPI() {
    const {lang} = useLang();
    const locale = lang.locale.pages.DocsMenuAPI;
    const localeSpells = lang.locale.common.spells;
    const componentAPILocale = lang.locale.common.ComponentAPI;

    return (
        <ApiPage
            lang={lang}
            localeName={"DocsMenuAPI"}
            searchTags={["docs", "menu", "container", "api"]}
            name={"DocsMenuAPI"}
            importCode={importCode}
        >
            <H2>Demos</H2>
            <List>
                <ListItem><Link>Layout</Link></ListItem>
            </List>
        </ApiPage>
    );
}