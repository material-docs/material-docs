/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import {Link} from "@material-ui/core";

import {H2, List, ListItem, useLang} from "@danilandreev/material-docs";
import ApiPage from "../../../components/ApiPage";

const importCode = `
import {Code} from "@danilandreev/material-docs";
// or
import Code from "@danilandreev/material-docs/components/Code";
`.trim();

export default function CodeAPI() {
    const {lang} = useLang();
    const locale = lang.locale.pages.CodeAPI;
    const localeSpells = lang.locale.common.spells;
    const componentAPILocale = lang.locale.common.ComponentAPI;

    return (
        <ApiPage
            lang={lang}
            localeName={"CodeAPI"}
            searchTags={["code", "highlight", "language", "api"]}
            name={"CodeAPI"}
            importCode={importCode}
        >
            <H2>Demos</H2>
            <List>
                <ListItem><Link>Code showing</Link></ListItem>
            </List>
        </ApiPage>
    );
}