/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import {Link} from "@material-ui/core";

import {H2, List, ListItem, useLang} from "@danilandreev/material-docs";
import ApiPage from "../../../components/ApiPage";

const importCode = `
import {DemoWithCode} from "@danilandreev/material-docs";
// or
import DemoWithCode from "@danilandreev/material-docs/components/DemoWithCode";
`.trim();

export default function DemoWithCodeAPI() {
    const {lang} = useLang();
    const locale = lang.locale.pages.DemoWithCodeAPI;
    const localeSpells = lang.locale.common.spells;
    const componentAPILocale = lang.locale.common.ComponentAPI;

    return (
        <ApiPage
            lang={lang}
            localeName={"DemoWithCodeAPI"}
            searchTags={["demo", "with", "code", "api", "showing", "code"]}
            name={"DemoWithCode"}
            importCode={importCode}
        >
            <H2>Demos</H2>
            <List>
                <ListItem><Link>Code showing</Link></ListItem>
            </List>
        </ApiPage>
    );
}