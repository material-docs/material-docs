/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import {Link} from "@material-ui/core";

import {H2, List, ListItem, useLang} from "@danilandreev/material-docs";
import ApiPage from "../../../components/ApiPage";

const importCode = `
import {Bold} from "@danilandreev/material-docs";
// or
import Bold from "@danilandreev/material-docs/components/Bold";
`.trim();

export default function BoldAPI() {
    const {lang} = useLang();
    const locale = lang.locale.pages.BoldAPI;
    const localeSpells = lang.locale.common.spells;
    const componentAPILocale = lang.locale.common.ComponentAPI;

    return (
        <ApiPage
            lang={lang}
            localeName={"BoldAPI"}
            searchTags={["bold", "font", "text", "styling", "api"]}
            name={"Bold"}
            importCode={importCode}
        >
            <H2>Demos</H2>
            <List>
                <ListItem><Link>Text styling</Link></ListItem>
            </List>
        </ApiPage>
    );
}