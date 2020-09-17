/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import {Link} from "@material-ui/core";

import {H2, List, ListItem, useLang} from "@danilandreev/material-docs";
import ApiPage from "../../../components/ApiPage";

const importCode = `
import {ListItemContained} from "@danilandreev/material-docs";
// or
import ListItemContained from "@danilandreev/material-docs/components/ListItemContained";
`.trim();

export default function ListItemContainedAPI() {
    const {lang} = useLang();
    const locale = lang.locale.pages.ListItemContainedAPI;
    const localeSpells = lang.locale.common.spells;
    const componentAPILocale = lang.locale.common.ComponentAPI;

    return (
        <ApiPage
            lang={lang}
            localeName={"ListItemContainedAPI"}
            searchTags={["list", "item", "contain", "api"]}
            name={"ListItemContained"}
            importCode={importCode}
        >
            <H2>Demos</H2>
            <List>
                <ListItem><Link>Lists</Link></ListItem>
            </List>
        </ApiPage>
    );
}