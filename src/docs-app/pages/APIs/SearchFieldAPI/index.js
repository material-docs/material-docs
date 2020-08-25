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
import {SearchField} from "@danilandreev/material-docs";
// or
import SearchField from "@danilandreev/material-docs/components/SearchField";
`.trim();

export default function SearchFieldAPI() {
    const {lang} = useLang();
    const locale = lang.locale.pages.SearchFieldAPI;
    const localeSpells = lang.locale.common.spells;
    const componentAPILocale = lang.locale.common.ComponentAPI;

    return (
        <ApiPage
            lang={lang}
            localeName={"SearchFieldAPI"}
            searchTags={["search", "engine", "selector", "results", "api"]}
            name={"SearchFieldAPI"}
            importCode={importCode}
        >
            <H2>Demos</H2>
            <List>
                <ListItem><Link>Search</Link></ListItem>
            </List>
        </ApiPage>
    );
}