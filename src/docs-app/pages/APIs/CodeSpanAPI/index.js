/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import {Link} from "@material-ui/core";

import {H2, List, ListItem, useLang} from "@danilandreev/material-docs";
import ApiPage from "../../../components/ApiPage";

const importCode = `
import {CodeSpan} from "@danilandreev/material-docs";
// or
import CodeSpan from "@danilandreev/material-docs/components/CodeSpan";
`.trim();

export default function CodeSpanAPI() {
    const {lang} = useLang();
    const locale = lang.locale.pages.CodeSpanAPI;
    const localeSpells = lang.locale.common.spells;
    const componentAPILocale = lang.locale.common.ComponentAPI;

    return (
        <ApiPage
            lang={lang}
            localeName={"CodeSpanAPI"}
            searchTags={["code", "span", "inline", "component", "block"]}
            name={"CodeSpanAPI"}
            importCode={importCode}
        >
            <H2>Demos</H2>
            <List>
                <ListItem><Link>Code showing</Link></ListItem>
            </List>
        </ApiPage>
    );
}