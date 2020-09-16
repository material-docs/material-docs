/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import {Link} from "@material-ui/core";

import {H2, List, ListItem, useLang} from "@danilandreev/material-docs";
import ApiPage from "../../../components/ApiPage";

const importCode = `
import {ListItemAPI} from "@danilandreev/material-docs";
// or
import ListItemAPI from "@danilandreev/material-docs/components/ListItemAPI";
`.trim();

export default function ListItemAPI() {
    const {lang} = useLang();
    const locale = lang.locale.pages.ListItemAPI;
    const localeSpells = lang.locale.common.spells;
    const componentAPILocale = lang.locale.common.ComponentAPI;

    return (
        <ApiPage
            lang={lang}
            localeName={"ListItemAPI"}
            searchTags={["list", "item", "api"]}
            name={"ListItem"}
            importCode={importCode}
        >
            <H2>Demos</H2>
            <List>
                <ListItem><Link>Lists</Link></ListItem>
            </List>
        </ApiPage>
    );
}