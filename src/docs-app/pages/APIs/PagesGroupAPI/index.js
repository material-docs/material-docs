/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import {Link} from "@material-ui/core";

import {H2, List, ListItem, useLang} from "@danilandreev/material-docs";
import ApiPage from "../../../components/ApiPage";

const importCode = `
import {PagesGroup} from "@danilandreev/material-docs";
// or
import PagesGroup from "@danilandreev/material-docs/components/PagesGroup";
`.trim();

export default function PagesGroupAPI() {
    const {lang} = useLang();
    const locale = lang.locale.pages.PagesGroupAPI;
    const localeSpells = lang.locale.common.spells;
    const componentAPILocale = lang.locale.common.ComponentAPI;

    return (
        <ApiPage
            lang={lang}
            localeName={"PagesGroupAPI"}
            searchTags={["page", "group", "gather", "container"]}
            name={"PagesGroupAPI"}
            importCode={importCode}
        >
            <H2>Demos</H2>
            <List>
                <ListItem><Link>Lists</Link></ListItem>
            </List>
        </ApiPage>
    );
}